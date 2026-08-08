import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/docs";

export const metadata: Metadata = {
  title: "IP Tickets | Learn | Medialane",
  description: "Learn how IP Tickets let creators issue verifiable on-chain tickets: mint them to your audience, trade them like any collection.",
  openGraph: {
    title: "IP Tickets | Learn | Medialane",
    description: "Learn how IP Tickets let creators issue verifiable on-chain tickets: mint them to your audience, trade them like any collection.",
    url: "https://docs.medialane.io/learn/ip-tickets",
  },
  twitter: {
    title: "IP Tickets | Learn | Medialane",
    description: "Learn how IP Tickets let creators issue verifiable on-chain tickets: mint them to your audience, trade them like any collection.",
  },
};

export default function LearnIPTicketsPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">IP Tickets</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          IP Tickets let creators issue access, to a show, a screening, a workshop, a
          community, as a real on-chain asset. A ticket is a first-class IP asset: it
          can be listed, bought, sold, and transferred on the Medialane marketplace like
          any other collection, and anyone can verify a holder&apos;s ticket on-chain,
          without trusting a venue or a platform.
        </p>
        <p className="text-sm text-muted-foreground">
          Service ID:{" "}
          <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">ip-tickets</code>.
          A factory contract deploys one tickets collection per creator, the same
          pattern as an IP Collection. See{" "}
          <Link href="/learn/services" className="text-primary hover:underline">Services</Link>{" "}
          for the full capability set.
        </p>
      </div>

      <div className="space-y-8">
        <Section title="What is an IP Ticket?">
          <p>
            An IP Ticket is a token issued from a collection your wallet owns. Each
            ticket you create has its own supply, image and details, an optional
            royalty, and an optional <strong className="text-foreground">validity
            window</strong>: valid from a date, until a date, or always. Unlike a
            soulbound credential, a ticket is <strong className="text-foreground">fully
            tradeable</strong>: it can be resold on the secondary market like any asset,
            letting a legitimate resale market exist without a third-party reseller
            taking a cut.
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm">
            <li>Concert, conference, or screening admission</li>
            <li>Workshop or course seats</li>
            <li>Early-access passes to a future drop</li>
            <li>Time-boxed access to anything you run</li>
          </ul>
        </Section>

        <Section title="How It Works">
          <p>
            IP Tickets have two roles: <strong className="text-foreground">Creators</strong>{" "}
            (who create tickets and mint them to people) and{" "}
            <strong className="text-foreground">Holders</strong> (who hold, trade, and
            present their tickets).
          </p>
          <div className="space-y-3">
            <div className="bento-cell px-4 py-3 space-y-1">
              <p className="text-sm font-semibold text-foreground">Creators</p>
              <p className="text-xs text-muted-foreground">
                Any creator can create a tickets collection, no approval required. The
                collection is a contract owned by your wallet; inside it you create
                tickets (each with its supply and validity window) and mint them
                directly to your audience&apos;s wallets. Everything a ticket is lives
                on-chain and is permanent once created.
              </p>
            </div>
            <div className="bento-cell px-4 py-3 space-y-1">
              <p className="text-sm font-semibold text-foreground">Holders</p>
              <p className="text-xs text-muted-foreground">
                Any Medialane user can hold and trade a ticket like any other asset.
                The ticket&apos;s asset page shows a live validity check: hold a valid
                ticket inside its window and the page says so, verifiably, straight from
                the chain.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Creating and Minting Tickets">
          <p>
            From <strong className="text-foreground">Launchpad → IP Tickets → Create</strong>,
            publish your tickets collection with a name, symbol, and cover image; the
            collection&apos;s identity is embedded on-chain in the same transaction. The
            collection then lives at its own collection page, where you create tickets
            and mint them to attendees with one featured action. Each ticket&apos;s
            image, supply, royalty, and validity window are set when you create it and
            never change afterwards.
          </p>
        </Section>

        <Section title="Verifying a Ticket">
          <p>
            A ticket is valid when its holder has it in their wallet and the current
            time is inside the ticket&apos;s validity window. That check is a public,
            on-chain read: a venue, an app, or anyone else can verify a ticket without
            trusting Medialane. The holder&apos;s asset page shows it as a clear
            &ldquo;Valid ticket — ready to present&rdquo; state. What presenting a valid
            ticket unlocks (entry, content, perks) is up to the experience built on
            top of it.
          </p>
        </Section>

        <Section title="Buying and Selling Tickets">
          <p>
            Tickets trade on the Medialane marketplace like any collection asset: list
            one at a fixed price or accept an offer, and the sale settles atomically:
            payment and ticket move in the same transaction, or neither does. Creators
            earn their configured royalty on every resale, and validity moves with
            ownership: whoever holds the ticket inside its window holds the access.
          </p>
        </Section>

        <Section title="Why Tradeable, Not Soulbound?">
          <p>
            IP Tickets are deliberately built on the same asset model as any other
            Medialane asset, unlike a soulbound credential like a{" "}
            <Link href="/learn/pop-protocol" className="text-primary hover:underline">POP Protocol</Link>{" "}
            badge. A ticket represents a claim to access, and access rights are
            legitimately resellable: think of them as the on-chain equivalent of a paper
            ticket, except the resale market is transparent, the creator captures
            royalties on every resale, and counterfeits are impossible.
          </p>
        </Section>
      </div>
    </div>
  );
}
