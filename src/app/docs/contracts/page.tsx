import type { Metadata } from "next";
import { FileCode2, ExternalLink, Shield, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contracts | Medialane Docs",
  description: "Medialane smart contracts on Starknet Mainnet — immutable, permissionless, open source Cairo contracts with real deployed addresses.",
  openGraph: {
    title: "Contracts | Medialane Docs",
    description: "Medialane smart contracts on Starknet Mainnet — immutable, permissionless, open source Cairo contracts with real deployed addresses.",
    url: "https://docs.medialane.io/docs/contracts",
  },
  twitter: {
    title: "Contracts | Medialane Docs",
    description: "Medialane smart contracts on Starknet Mainnet — immutable, permissionless, open source Cairo contracts with real deployed addresses.",
  },
};

const CONTRACTS = [
  {
    category: "Marketplace",
    items: [
      {
        name: "Medialane721 — Marketplace Venue (ERC-721)",
        address: "0x069cf5391077e3ebdd9cb6aebf90ed530d29f0d6aa34a43f5afae938c0fb565e",
        desc: "Listing, offer, fulfillment, and cancellation venue for standard (ERC-721) NFTs. Orders are SNIP-12 typed data (domain version 4); only the listing/offer and cancellation are signed — fulfillment is an unsigned call by the buyer. Royalties are paid on-chain per EIP-2981, capped by a royalty_max_bps the signer agrees to. A per-offerer counter enables bulk cancellation. Atomic settlement with a reentrancy guard and payment-before-delivery ordering. Deployed 2026-05-31.",
      },
      {
        name: "Medialane1155 — Marketplace Venue (ERC-1155)",
        address: "0x040cd7b3e73bb3c892166e34bdc01d1797f97ecbc356c23f1cf38033cacf0077",
        desc: "Multi-edition trading venue for ERC-1155 assets. Same redesigned order protocol as Medialane721 (SNIP-12 domain version 3), keeping the single-amount order shape while preserving edition quantities — a single listing can be filled by multiple buyers across transactions. On-chain EIP-2981 royalties, per-offerer counter, unsigned fulfillment, reentrancy-guarded settlement. Deployed 2026-05-31.",
      },
      {
        name: "NFTComments",
        address: "0x02cdac70c94447189af0389dfea63f4d5e4154ea8a563de288a5ab1c39e37843",
        desc: "Permissionless on-chain comment contract. Any wallet can post a comment on any token. Comments are permanent, censorship-resistant, and indexed by the Medialane indexer.",
      },
    ],
  },
  {
    category: "Collections & Launchpad",
    items: [
      {
        name: "MIP IPCollection Registry v0.3.0 (ERC-721 Factory)",
        address: "0x0322cb7119955e01ac778d40976eb3ba50540bb0899f812d612f9c7e63e49fd2",
        desc: "Factory for deploying ERC-721 IP NFT collections. Each deploy_collection() call deploys a new ERC-721 contract, assigns a unique numeric collectionId, and emits CollectionDeployed. v0.3.0 deployed 2026-05-22.",
      },
      {
        name: "IP-Programmable ERC-1155 Factory v0.2.0",
        address: "0x067064adcaaed61e17bf50ea802ea6482336126aec5b4d032b4ff8fbb5009131",
        desc: "Factory for deploying ERC-1155 multi-edition collections with programmable IP traits at mint time. Each collection is a separate contract owned by the creator. Emits CollectionDeployed with contract address, name, symbol, and base_uri. v0.2.0 deployed 2026-05-22.",
      },
      {
        name: "Collection Drop Factory",
        address: "0x03587f42e29daee1b193f6cf83bf8627908ed6632d0d83fcb26225c50547d800",
        desc: "Factory for timed NFT drop campaigns. Enforces supply caps, mint windows, per-wallet limits, allowlists, and mint prices entirely on-chain. No admin can override these parameters after deploy.",
      },
      {
        name: "POP Protocol Factory",
        address: "0x00b32c34b427d8f346b5843ada6a37bd3368d879fc752cd52b68a87287f60111",
        desc: "Factory for Proof-of-Participation campaigns. Each campaign deploys a soulbound (non-transferable) ERC-721 credential contract. Credentials are claimable by eligible wallets and permanently on-chain.",
      },
    ],
  },
];

export default function ContractsPage() {
  return (
    <div className="space-y-10 max-w-3xl">

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <FileCode2 className="h-5 w-5 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">Smart Contracts</span>
        </div>
        <h2 className="text-2xl font-bold">Contracts</h2>
        <p className="text-muted-foreground leading-relaxed">
          All Medialane contracts are Cairo smart contracts deployed on Starknet Mainnet.
          The current v3 contracts are fully immutable — no admin keys, no upgrade paths,
          no emergency pause. Rules are enforced by code.
        </p>
      </div>

      {/* Immutable design callout */}
      <div className="bento-cell p-5 space-y-3 border-primary/20">
        <div className="flex items-center gap-2">
          <Lock className="h-4 w-4 text-primary" />
          <h3 className="font-semibold text-sm">Immutable &amp; Permissionless by Design</h3>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          The current contracts are fully immutable: no admin account, no{" "}
          <code className="font-mono bg-muted px-1 py-0.5 rounded">UpgradeableComponent</code>, no owner role,
          no emergency pause. Evolution happens by redeploy, not by upgrade — the class hashes
          themselves cannot be rotated. The collection factories shipped fresh v0.2.0 / v0.3.0
          deployments on 2026-05-22, and the redesigned marketplace venues
          (Medialane721 / Medialane1155) were redeployed as new immutable contracts on
          2026-05-31.
        </p>
        <div className="flex flex-wrap gap-2">
          {["No admin keys", "No upgrade path", "No emergency pause", "Atomic swaps", "ZK-proven execution"].map((t) => (
            <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
              {t}
            </span>
          ))}
        </div>
      </div>

      {CONTRACTS.map(({ category, items }) => (
        <div key={category} className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">{category}</h3>
          <div className="space-y-2">
            {items.map(({ name, address, desc }) => (
              <div key={name} className="bento-cell p-5 space-y-2">
                <p className="text-sm font-semibold text-foreground">{name}</p>
                <a
                  href={`https://starkscan.co/contract/${address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-primary/70 break-all hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  {address}
                  <ExternalLink className="h-3 w-3 shrink-0" />
                </a>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Standards */}
      <div className="bento-cell p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Shield className="h-4 w-4 text-muted-foreground" />
          <h3 className="font-semibold text-sm">Standards &amp; Compatibility</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            "ERC-721",
            "ERC-1155",
            "SRC-5 (Introspection)",
            "SRC-6 (Account Standard)",
            "SNIP-2 (Events)",
            "SNIP-9 (Session Keys)",
            "SNIP-12 (Typed Data Signing)",
          ].map((s) => (
            <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-mono">
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href="https://starkscan.co"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          Starkscan Explorer <ExternalLink className="h-3.5 w-3.5" />
        </a>
        <a
          href="https://github.com/medialane-io"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          GitHub Organisation <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

    </div>
  );
}
