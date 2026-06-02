import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/docs";

export const metadata: Metadata = {
  title: "Collection Drop | Learn | Medialane",
  description: "Learn how to launch and participate in time-limited NFT Collection Drops on Medialane.",
  openGraph: {
    title: "Collection Drop | Learn | Medialane",
    description: "Learn how to launch and participate in time-limited NFT Collection Drops on Medialane.",
    url: "https://docs.medialane.io/learn/collection-drop",
  },
  twitter: {
    title: "Collection Drop | Learn | Medialane",
    description: "Learn how to launch and participate in time-limited NFT Collection Drops on Medialane.",
  },
};

export default function LearnCollectionDropPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Collection Drop</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          A Collection Drop is a time-limited NFT release event on Medialane — organizers
          deploy a drop with a fixed supply, a mint window, and optional allowlists.
          Collectors mint directly from the drop, with settlement handled on Starknet.
        </p>
        <p className="text-sm text-muted-foreground">
          Service ID:{" "}
          <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">drop-collection</code>.
          Each drop is an independent smart contract deployed from the Collection Drop Factory.
          See{" "}
          <Link href="/learn/services" className="text-primary hover:underline">Services</Link>{" "}
          for the full capability set.
        </p>
      </div>

      <div className="space-y-8">
        <Section title="What is a Collection Drop?">
          <p>
            A Collection Drop is the primary mechanism for releasing an NFT collection in
            a structured, event-style format. Instead of simply deploying a collection and
            listing individual assets on the marketplace, an organizer defines:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm">
            <li>A mint price (or free mint)</li>
            <li>A maximum supply</li>
            <li>A mint window (start and end time)</li>
            <li>An optional allowlist for early or exclusive access</li>
            <li>A per-wallet mint limit</li>
          </ul>
          <p>
            Once the drop is live, eligible collectors can mint directly from the drop page.
            All minting transactions are gasless for participants — gas is sponsored by Medialane.
          </p>
        </Section>

        <Section title="Participating in a Drop">
          <p>
            Browse active and upcoming drops under{" "}
            <strong className="text-foreground">Launchpad → Collection Drop</strong>. Each
            drop shows its live status, current mint count, supply remaining, price, and
            time remaining in the mint window.
          </p>
          <p>
            To participate, connect your Medialane account and click{" "}
            <strong className="text-foreground">Mint</strong> on the drop page. If the drop
            has an allowlist and your wallet is included, you will see the option automatically.
            Confirm with your PIN and the NFT is minted to your wallet immediately.
          </p>
          <p>
            Minted assets appear in your Portfolio within a few seconds after the transaction
            is confirmed on Starknet (typically under 10 seconds).
          </p>
        </Section>

        <Section title="Launching a Drop (Organizers)">
          <p>
            To create drops, your wallet must be registered as an approved organizer.
            Approved organizers see the{" "}
            <strong className="text-foreground">Create Drop</strong> button in the
            Collection Drop section. When setting up a drop, you configure:
          </p>
          <div className="space-y-2">
            {[
              ["Collection", "The NFT collection that will be minted from. This is deployed as a separate smart contract on Starknet with you as the owner."],
              ["Supply", "The total number of NFTs that can be minted. Once the supply is exhausted, the drop closes automatically."],
              ["Mint Window", "A start and end timestamp defining when minting is open. Mints outside this window are rejected by the contract."],
              ["Price", "Set a mint price in any supported currency (STRK, ETH, USDC, USDT, WBTC), or set to free."],
              ["Allowlist", "Optionally restrict minting to a set of approved wallet addresses. Allowlisted wallets may also receive a discounted price."],
              ["Per-wallet Limit", "Optionally cap how many NFTs a single wallet can mint from this drop."],
            ].map(([title, desc]) => (
              <div key={title} className="bento-cell px-4 py-3 space-y-1">
                <p className="text-sm font-semibold text-foreground">{title}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="ERC-721 Token Standard">
          <p>
            Collection Drop NFTs use the <strong className="text-foreground">ERC-721</strong> token
            standard with sequential minting. Each mint issues a unique, sequentially-numbered
            token to the minter — a drop of 500 produces 500 distinct one-of-one NFTs, each
            with its own owner and token ID.
          </p>
          <p>
            Maximum supply caps the number of tokens that can be minted; the per-wallet limit
            caps how many a single wallet may claim. If you instead want a single work that
            many collectors share, use{" "}
            <Link href="/learn/ip-collection-1155" className="text-primary hover:underline">NFT Editions</Link>{" "}
            — an ERC-1155 collection where holders own editions of the same token.
          </p>
        </Section>

        <Section title="Onchain Settlement">
          <p>
            Collection Drop contracts are deployed on Starknet. Every mint is an onchain
            transaction — no off-chain allowlist checks, no centralized mint servers. The
            contract enforces supply caps, time windows, allowlists, and per-wallet limits
            automatically without any backend intervention.
          </p>
          <p>
            Royalties configured on the underlying collection are inherited by all assets
            minted through a drop, ensuring creators receive royalties on every secondary
            sale in the Medialane marketplace.
          </p>
        </Section>

        <Section title="After the Drop">
          <p>
            Once the mint window closes or the supply is exhausted, assets from the drop
            become freely tradeable on the Medialane marketplace. Collectors can list,
            sell, or make offers on their minted assets just like any other NFT on the platform.
          </p>
          <p>
            Drop organizers retain ownership of the collection contract and can update the
            base URI, add royalty recipients, or configure additional drop phases through
            the Portfolio → Collections management interface.
          </p>
        </Section>
      </div>
    </div>
  );
}
