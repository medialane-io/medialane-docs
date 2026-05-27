import type { Metadata } from "next";
import Link from "next/link";
import { Network, Database, Package } from "lucide-react";
import { Section, Code } from "@/components/docs";

export const metadata: Metadata = {
  title: "Protocol | Medialane Docs",
  description: "Technical specification of the Medialane onchain protocol — contracts, event model, order lifecycle, service registry, and indexer design.",
  openGraph: {
    title: "Protocol | Medialane Docs",
    description: "Technical specification of the Medialane onchain protocol — contracts, event model, order lifecycle, service registry, and indexer design.",
    url: "https://docs.medialane.io/docs/protocol",
  },
  twitter: {
    title: "Protocol | Medialane Docs",
    description: "Technical specification of the Medialane onchain protocol — contracts, event model, order lifecycle, service registry, and indexer design.",
  },
};

const CONTRACTS = [
  { name: "Marketplace (ERC-721)",                       address: "0x00f8ccaae0bc811c79605974cc1dab769b9cea8877f033f8e3c17f30457caba6" },
  { name: "Marketplace 1155 V2 (ERC-1155)",              address: "0x02bfa521c25461a09d735889b469418608d7d92f8b26e3d37ef174a4c2e22f99" },
  { name: "NFTComments",                                 address: "0x02cdac70c94447189af0389dfea63f4d5e4154ea8a563de288a5ab1c39e37843" },
  { name: "MIP IPCollection Registry v0.3.0",            address: "0x0322cb7119955e01ac778d40976eb3ba50540bb0899f812d612f9c7e63e49fd2" },
  { name: "IP-Programmable ERC-1155 Factory v0.2.0",     address: "0x067064adcaaed61e17bf50ea802ea6482336126aec5b4d032b4ff8fbb5009131" },
  { name: "Collection Drop Factory",                     address: "0x03587f42e29daee1b193f6cf83bf8627908ed6632d0d83fcb26225c50547d800" },
  { name: "POP Protocol Factory",                        address: "0x00b32c34b427d8f346b5843ada6a37bd3368d879fc752cd52b68a87287f60111" },
];

const EVENTS = [
  { name: "Transfer (ERC-721)", desc: "Single-token ownership change. Emitted on mint, sale, and manual transfer." },
  { name: "TransferSingle (ERC-1155)", desc: "Single-edition transfer with from, to, id, and value. Used for ERC-1155 balance tracking." },
  { name: "TransferBatch (ERC-1155)", desc: "Batch ERC-1155 transfer — multiple token IDs and values in one event." },
  { name: "OrderCreated", desc: "New listing or offer activated on the marketplace contract. Contains orderHash, offerer, offer, and consideration." },
  { name: "OrderFulfilled", desc: "Listing purchased or offer accepted. The orderHash is permanently fulfilled — no further fills possible." },
  { name: "OrderCancelled", desc: "Order revoked by the offerer. The orderHash is permanently invalidated." },
  { name: "CollectionDeployed", desc: "Emitted by factory contracts when a new collection, drop, or POP campaign is deployed." },
];

export default function DocsProtocolPage() {
  return (
    <div className="space-y-10">

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Network className="h-5 w-5 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">Protocol</span>
        </div>
        <h2 className="text-2xl font-bold">Protocol Specification</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Medialane runs on immutable Starknet mainnet contracts. This document covers
          deployed addresses, the event model, order lifecycle, service registry, and
          indexer design. For the architectural foundation, see{" "}
          <Link href="/docs/architecture" className="text-primary hover:underline">Architecture</Link>.
        </p>
      </div>

      <div className="space-y-8">

        <Section title="Deployed Contracts (Starknet Mainnet)">
          <div className="space-y-2">
            {CONTRACTS.map(({ name, address }) => (
              <div key={name} className="bento-cell px-4 py-3 space-y-1">
                <p className="text-sm font-semibold text-foreground">{name}</p>
                <p className="font-mono text-xs text-primary/70 break-all">{address}</p>
              </div>
            ))}
          </div>
          <p className="text-sm">
            These contracts have no admin key and no upgrade path. Once deployed, the rules
            are fixed. Canonical addresses are also published in the{" "}
            <Link href="/docs/contracts" className="text-primary hover:underline">Contracts</Link> reference.
          </p>
        </Section>

        <Section title="Event Model">
          <p>
            On-chain events are the source of truth. The indexer is a deterministic event
            reducer — a function that reads the event log and produces a queryable cache.
            Every state change in the protocol is expressed as an event; the database
            is a reduction of those events, rebuildable at any time.
          </p>
          <div className="space-y-2">
            {EVENTS.map(({ name, desc }) => (
              <div key={name} className="bento-cell px-4 py-3 space-y-1">
                <p className="text-sm font-semibold text-foreground">{name}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Order Lifecycle">
          <p>
            An order is a signed proposal: one offer item and one consideration item,
            signed with your wallet using SNIP-12 typed data. The{" "}
            <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">orderHash</code>{" "}
            is computed at creation and is the permanent on-chain identifier.
          </p>
          <Code>{`Order states
──────────────────────────────────────────────
ACTIVE       — signed, visible, can be filled
FULFILLED    — payment + NFT swapped atomically
CANCELLED    — revoked by the offerer on-chain
EXPIRED      — past the order's expiry timestamp

Counter-offers
──────────────────────────────────────────────
A counter-offer is a new order with parentOrderHash
referencing the original. Both parties can cancel
at any time before acceptance.`}</Code>
          <p>
            Settlement is an atomic swap: the NFT transfer and the payment happen in the
            same Starknet transaction or both revert. The marketplace contract never takes
            custody of funds or assets.
          </p>
        </Section>

        <Section title="Service Registry">
          <p>
            Each asset has two identifying fields set at index time:
          </p>
          <Code>{`standard   — chain-detected token standard: ERC721 | ERC1155
service    — string ID from the registry, e.g. "mip-erc721" or "pop-protocol"`}</Code>
          <p>
            The SDK exposes a{" "}
            <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">getService(serviceId)</code>{" "}
            function that returns the full capability set and contract configuration for a
            given service ID. Service IDs are stable across contract upgrades — no{" "}
            <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">-v3</code> suffix, ever.
          </p>
          <p>
            In Year 1, the registry lives in the SDK. Year 2+ moves it on-chain, making
            service registration permissionless. See{" "}
            <Link href="/learn/services" className="text-primary hover:underline">Services</Link> for
            the full registry and capability set.
          </p>
        </Section>

        <Section title="Indexer Design">
          <div className="space-y-3">
            <div className="bento-cell border border-brand-blue/20 p-5 space-y-2">
              <div className="flex items-center gap-2">
                <Database className="h-4 w-4 text-brand-blue" />
                <p className="font-bold text-foreground text-sm">Off-chain event reducer</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The indexer polls Starknet for new events, parses them with per-event handlers,
                and writes a normalized PostgreSQL cache. It holds no state of its own — everything
                it knows came from the chain.
              </p>
            </div>
            <div className="bento-cell border border-brand-orange/20 p-5 space-y-2">
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4 text-brand-orange" />
                <p className="font-bold text-foreground text-sm">Rebuild guarantee</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Drop the database. The indexer replays events from genesis and reconstructs
                the full state. This is not a disaster-recovery feature — it is the protocol
                invariant that proves the DB is a cache, not a source of truth.
              </p>
            </div>
          </div>
          <p className="text-sm">
            Platform state — profiles, slugs, API keys — cannot be reconstructed from events.
            It is honestly classified as off-chain enrichment and stored in a separate namespace.
            See{" "}
            <Link href="/docs/architecture" className="text-primary hover:underline">Architecture</Link> for
            the protocol vs. platform distinction.
          </p>
        </Section>

      </div>
    </div>
  );
}
