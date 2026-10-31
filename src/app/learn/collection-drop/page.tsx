import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/docs";

export const metadata: Metadata = {
  alternates: { canonical: "https://docs.medialane.io/learn/collection-drop" },
  title: "Collection Drop | Learn | Medialane",
  description: "Learn how to launch and collect Collection Drops on Medialane.",
  openGraph: {
    title: "Collection Drop | Learn | Medialane",
    description: "Learn how to launch and collect Collection Drops on Medialane.",
    url: "https://docs.medialane.io/learn/collection-drop",
  },
  twitter: {
    title: "Collection Drop | Learn | Medialane",
    description: "Learn how to launch and collect Collection Drops on Medialane.",
  },
};

export default function LearnCollectionDropPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Collection Drop</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          A Collection Drop is a timed release with a fixed set of terms. A creator chooses an{" "}
          <strong className="text-foreground">edition</strong> (one artwork in numbered copies) or a{" "}
          <strong className="text-foreground">collection</strong> (many unique items), sets the price and the
          sale window, and collectors mint from the drop page.
        </p>
        <p className="text-base text-muted-foreground">
          Service ID:{" "}
          <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">drop-collection</code>.
          Each drop is its own ERC-721 contract, created by the Collection Drop factory. See{" "}
          <Link href="/learn/services" className="text-primary hover:underline">Services</Link>{" "}
          for the full capability set.
        </p>
      </div>

      <div className="space-y-8">
        <Section title="Launching a drop">
          <p>Anyone can launch a drop from <strong className="text-foreground">Launchpad → Collection Drop</strong>. The creator sets:</p>
          <div className="space-y-2">
            {[
              ["Edition or collection", "One artwork minted as numbered copies, or many unique items — each item becomes its own token."],
              ["Licensing", "License terms written into every token's metadata."],
              ["Price", "Free, or a price in a supported token. A platform fee is added at mint and shown to collectors before they confirm; the creator receives the price."],
              ["Sale window", "Open now or from a date; close on a date or never."],
              ["Per-wallet limit", "How many one wallet can mint, or unlimited."],
              ["Who can mint", "Everyone, or only the wallets on the creator&apos;s list. Listed wallets get a personal claim link."],
            ].map(([title, desc]) => (
              <div key={title} className="bento-cell px-4 py-3 space-y-1">
                <p className="text-base font-semibold text-foreground">{title}</p>
                <p className="text-base text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
          <p>The terms are fixed when the drop launches, in one transaction.</p>
        </Section>

        <Section title="Collecting">
          <p>
            Open a drop to see its status, supply, price and time left. Choose how many to mint (up to 50 at once,
            within the drop's limits) and confirm; the tokens arrive in the collector&apos;s wallet. For a list-only drop, the
            claim link that was sent is used. Payment goes straight to the creator. On medialane.io, gas is sponsored.
          </p>
        </Section>

        <Section title="Managing a drop">
          <p>
            The drop page has a Manage tab for its creator: send tokens directly to any wallet (within the supply),
            publish a new list of who can mint or open the drop to everyone, download claim links, and add exclusive
            content for holders.
          </p>
        </Section>

        <Section title="Onchain">
          <p>
            The drop contract enforces the price, sale window, per-wallet limit, supply and allowlist itself. Drop
            tokens are standard ERC-721 tokens: collectors can keep, sell or trade them like any other asset on
            Medialane. For a single work many collectors share as one token id, use{" "}
            <Link href="/learn/ip-collection-1155" className="text-primary hover:underline">NFT Editions</Link>.
          </p>
        </Section>
      </div>
    </div>
  );
}
