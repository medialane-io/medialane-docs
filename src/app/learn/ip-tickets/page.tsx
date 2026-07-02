import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/docs";

export const metadata: Metadata = {
  title: "IP Tickets | Learn | Medialane",
  description: "Learn how IP Tickets let creators sell redeemable, tradeable ERC-721 tickets for events and access on Medialane.",
  openGraph: {
    title: "IP Tickets | Learn | Medialane",
    description: "Learn how IP Tickets let creators sell redeemable, tradeable ERC-721 tickets for events and access on Medialane.",
    url: "https://docs.medialane.io/learn/ip-tickets",
  },
  twitter: {
    title: "IP Tickets | Learn | Medialane",
    description: "Learn how IP Tickets let creators sell redeemable, tradeable ERC-721 tickets for events and access on Medialane.",
  },
};

export default function LearnIPTicketsPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">IP Tickets</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          IP Tickets let creators sell access — to an event, a screening, a workshop, a
          drop — as a real NFT. A ticket is a first-class IP asset: it can be listed,
          bought, sold, and transferred on the Medialane marketplace like any other
          collection, and it carries a permanent, onchain <strong className="text-foreground">redeemed</strong>{" "}
          flag so a venue can verify it was used.
        </p>
        <p className="text-sm text-muted-foreground">
          Service ID:{" "}
          <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">ip-tickets</code>.
          A factory contract deploys one ERC-721 ticket collection per creator, the same
          pattern as an IP Collection. See{" "}
          <Link href="/learn/services" className="text-primary hover:underline">Services</Link>{" "}
          for the full capability set.
        </p>
      </div>

      <div className="space-y-8">
        <Section title="What is an IP Ticket?">
          <p>
            An IP Ticket is an ERC-721 token minted from a collection your wallet owns.
            Unlike a soulbound credential, a ticket is <strong className="text-foreground">fully
            tradeable</strong> — before redemption it can be resold on the secondary market
            like any NFT, letting a legitimate resale market exist without a third-party
            reseller taking a cut of your event.
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm">
            <li>Concert, conference, or screening admission</li>
            <li>Workshop or course seats</li>
            <li>Early-access or allowlist passes to a future drop</li>
            <li>Physical or digital redemption vouchers</li>
          </ul>
        </Section>

        <Section title="How It Works">
          <p>
            IP Tickets have two roles: <strong className="text-foreground">Creators</strong> (who
            deploy a ticket collection and mint tickets into it) and{" "}
            <strong className="text-foreground">Holders</strong> (who buy, hold, trade, and
            eventually redeem a ticket).
          </p>
          <div className="space-y-3">
            <div className="bento-cell px-4 py-3 space-y-1">
              <p className="text-sm font-semibold text-foreground">Creators</p>
              <p className="text-xs text-muted-foreground">
                Any creator can deploy a ticket collection — no approval required. Each
                collection has a name, symbol, and owner (your wallet). Once deployed, the
                owner mints ticket batches into it and can pause/resume minting at any time.
              </p>
            </div>
            <div className="bento-cell px-4 py-3 space-y-1">
              <p className="text-sm font-semibold text-foreground">Holders</p>
              <p className="text-xs text-muted-foreground">
                Any Medialane user can hold and trade a ticket like any other NFT. When it&apos;s
                time to use it, the holder (or the venue, on their behalf) redeems the ticket
                onchain — a one-way action that permanently marks it as used.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Deploying a Ticket Collection">
          <p>
            From <strong className="text-foreground">Launchpad → IP Tickets → Create</strong>,
            deploy your own ticket collection with a name and symbol. This first transaction
            deploys a dedicated ERC-721 contract on Starknet, owned by your wallet — the same
            factory pattern used for IP Collections. Once deployed, mint tickets into it with
            their own metadata and, optionally, a price if sold directly through Medialane.
          </p>
        </Section>

        <Section title="Buying and Holding a Ticket">
          <p>
            Tickets appear in the Launchpad and, once minted, in the Medialane marketplace
            like any ERC-721 asset. Buy one with a fixed-price listing or an offer, and it
            settles atomically — payment and ticket move in the same transaction, or neither
            does. The ticket then lives in your Portfolio until you use or resell it.
          </p>
        </Section>

        <Section title="Redeeming a Ticket">
          <p>
            Redemption is a dedicated onchain action, separate from transfer. Once a ticket
            is redeemed, its <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">redeemed</code>{" "}
            flag is permanently set onchain — anyone can verify a ticket&apos;s redemption
            status without trusting the venue or the platform. A redeemed ticket can still be
            held as a keepsake or transferred, but it can never be redeemed a second time.
          </p>
        </Section>

        <Section title="Why Tradeable, Not Soulbound?">
          <p>
            IP Tickets are deliberately built on the same asset model as any other Medialane
            NFT — not a soulbound credential like a{" "}
            <Link href="/learn/pop-protocol" className="text-primary hover:underline">POP Protocol</Link>{" "}
            badge. A ticket represents a claim to access, and access rights are legitimately
            resellable: think of them as the onchain equivalent of a paper ticket, except the
            resale market is transparent, the creator can capture royalties on every resale,
            and there is no risk of counterfeit or duplicate tickets.
          </p>
        </Section>
      </div>
    </div>
  );
}
