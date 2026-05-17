import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marketplace | Learn | Medialane",
  description: "How the Medialane marketplace works — venue-as-service, order lifecycle, atomic settlement, and fees at the platform layer.",
  openGraph: {
    title: "Marketplace | Learn | Medialane",
    description: "How the Medialane marketplace works — venue-as-service, order lifecycle, atomic settlement, and fees at the platform layer.",
    url: "https://docs.medialane.io/learn/marketplace",
  },
  twitter: {
    title: "Marketplace | Learn | Medialane",
    description: "How the Medialane marketplace works — venue-as-service, order lifecycle, atomic settlement, and fees at the platform layer.",
  },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

function Code({ children }: { children: string }) {
  return (
    <pre className="bento-cell p-4 text-xs font-mono overflow-x-auto text-foreground/80 leading-relaxed whitespace-pre">
      {children}
    </pre>
  );
}

const CURRENCIES = [
  { symbol: "STRK", desc: "Starknet's native token" },
  { symbol: "ETH", desc: "Bridged Ethereum" },
  { symbol: "USDC", desc: "USD Coin (Circle)" },
  { symbol: "USDT", desc: "Tether USD" },
  { symbol: "WBTC", desc: "Wrapped Bitcoin" },
];

export default function LearnMarketplacePage() {
  return (
    <div className="space-y-10">

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Marketplace</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          The Medialane Marketplace is a venue service — a set of immutable smart contracts
          where IP assets are listed, offered on, and traded. No custody. No intermediary.
          Settlement is atomic: the NFT and the payment move in the same transaction,
          or both revert.
        </p>
      </div>

      <div className="space-y-8">

        <Section title="A Venue, Not a Custodian">
          <div className="bento-cell border border-brand-purple/20 p-5 space-y-2">
            <p className="font-bold text-foreground">The marketplace contract never holds your assets.</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A listing is a signed order — a cryptographic intent that sits on-chain. Your NFT
              stays in your wallet until a buyer fills the order. At that moment, the NFT and
              the payment swap atomically in a single Starknet transaction. If anything fails,
              both revert.
            </p>
          </div>
          <p>
            Two service IDs serve the marketplace:{" "}
            <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">medialane-marketplace-erc721</code>{" "}
            for single-edition assets and{" "}
            <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">medialane-marketplace-erc1155</code>{" "}
            for multi-edition assets. See{" "}
            <Link href="/learn/services" className="text-primary hover:underline">Services</Link>{" "}
            for the full registry.
          </p>
        </Section>

        <Section title="Order Lifecycle">
          <p>
            An order is a signed proposal: one offer item (what you give) and one
            consideration item (what you receive). The{" "}
            <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">orderHash</code>{" "}
            is computed at creation and is the permanent on-chain identifier. Orders move
            through four states:
          </p>
          <Code>{`ACTIVE       — signed, visible on-chain, can be filled
FULFILLED    — NFT + payment swapped atomically
CANCELLED    — revoked by the offerer on-chain
EXPIRED      — past the order's expiry timestamp`}</Code>
          <p>
            Once FULFILLED or CANCELLED, the{" "}
            <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">orderHash</code>{" "}
            is permanently invalidated. A counter-offer is a new order with a{" "}
            <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">parentOrderHash</code>{" "}
            reference — both parties can cancel at any time before acceptance.
          </p>
        </Section>

        <Section title="Listings and Offers">
          <div className="space-y-2">
            <div className="bento-cell px-4 py-3 space-y-1">
              <p className="text-sm font-semibold text-foreground">Fixed-price listing</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Navigate to any asset page and click <strong>List for sale</strong>. Set a price
                in any supported currency. The listing is signed with SNIP-12 typed data and
                recorded on the marketplace contract. Your asset stays in your wallet.
              </p>
            </div>
            <div className="bento-cell px-4 py-3 space-y-1">
              <p className="text-sm font-semibold text-foreground">Offer (bid)</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Click <strong>Make offer</strong> on any asset — listed or not. The offer
                is a signed on-chain intent. No funds are locked until the creator accepts.
                Creators receive notifications in Portfolio → Offers received.
              </p>
            </div>
            <div className="bento-cell px-4 py-3 space-y-1">
              <p className="text-sm font-semibold text-foreground">Counter-offer</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                When you receive an offer, you can counter with a different price. A
                counter-offer is a new order referencing the original. Both parties can
                cancel at any point before acceptance. Managed from Portfolio → Offers received.
              </p>
            </div>
            <div className="bento-cell px-4 py-3 space-y-1">
              <p className="text-sm font-semibold text-foreground">Partial fills (ERC-1155)</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Multi-edition assets support partial fills — buy any quantity up to the
                available supply. The order stays ACTIVE after your purchase so other
                collectors can buy the remaining editions. Total = price per unit × quantity.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Supported Currencies">
          <div className="space-y-2">
            {CURRENCIES.map(({ symbol, desc }) => (
              <div key={symbol} className="bento-cell px-4 py-3 flex items-center gap-3">
                <span className="font-mono text-xs bg-primary/10 text-primary px-2 py-1 rounded-md shrink-0">{symbol}</span>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm">
            All prices are entered in human-readable units. The protocol handles
            precision conversion automatically.
          </p>
        </Section>

        <Section title="Fees Are a Platform Layer">
          <p>
            The marketplace contracts enforce one rule: a 1% fee on completed sales,
            routed to the Medialane DAO treasury. This is a platform-layer choice
            governed by the DAO — not a protocol invariant. ERC-2981 royalty splits
            are also enforced on-chain for collections that declare them.
          </p>
          <p className="text-sm">
            Listing and offer creation are gas-sponsored for standard flows. See{" "}
            <Link href="/docs/fees" className="text-primary hover:underline">Fees &amp; Revenue</Link>{" "}
            for the canonical breakdown.
          </p>
        </Section>

        <Section title="Cancelling Orders">
          <p>
            Listings and offers can be cancelled at any time from the asset page or
            from Portfolio → Listings / Offers sent. Cancellation is an on-chain
            transaction that permanently invalidates the{" "}
            <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">orderHash</code>.
            No funds or assets are lost — a small gas fee applies.
          </p>
        </Section>

      </div>
    </div>
  );
}
