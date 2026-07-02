import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/docs";

export const metadata: Metadata = {
  title: "IP Sponsorship | Learn | Medialane",
  description: "Learn how IP Sponsorship lets creators sell direct-settlement sponsorship licenses on assets they own, with no escrow.",
  openGraph: {
    title: "IP Sponsorship | Learn | Medialane",
    description: "Learn how IP Sponsorship lets creators sell direct-settlement sponsorship licenses on assets they own, with no escrow.",
    url: "https://docs.medialane.io/learn/ip-sponsorship",
  },
  twitter: {
    title: "IP Sponsorship | Learn | Medialane",
    description: "Learn how IP Sponsorship lets creators sell direct-settlement sponsorship licenses on assets they own, with no escrow.",
  },
};

export default function LearnIPSponsorshipPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">IP Sponsorship</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          IP Sponsorship lets a creator offer a sponsorship license on an asset they own —
          a brand or backer bids to attach their name or support to your work, you accept
          the bid you want, and payment settles directly from sponsor to creator. There is
          no escrow: the contract never holds funds.
        </p>
        <p className="text-sm text-muted-foreground">
          Service ID:{" "}
          <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">ip-sponsorship</code>.
          Accepted bids issue a license record via{" "}
          <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">ip-sponsorship-license</code>.
          See{" "}
          <Link href="/learn/services" className="text-primary hover:underline">Services</Link>{" "}
          for the full capability set.
        </p>
      </div>

      <div className="space-y-8">
        <Section title="What is IP Sponsorship?">
          <p>
            IP Sponsorship is an open bidding market for sponsoring an existing IP asset —
            attaching a sponsor&apos;s name, logo, or endorsement to a piece of work in
            exchange for direct payment to the creator. Examples of what it can represent:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm">
            <li>A brand sponsoring a creator&apos;s flagship piece or collection</li>
            <li>A patron backing a specific work with a public, onchain record</li>
            <li>Event or series sponsorship tied to a specific asset</li>
          </ul>
        </Section>

        <Section title="How It Works">
          <p>
            IP Sponsorship has two roles: <strong className="text-foreground">Authors</strong>{" "}
            (who own the asset and create the offer) and <strong className="text-foreground">Sponsors</strong>{" "}
            (who bid to sponsor it).
          </p>
          <div className="space-y-3">
            <div className="bento-cell px-4 py-3 space-y-1">
              <p className="text-sm font-semibold text-foreground">Authors (Asset Owners)</p>
              <p className="text-xs text-muted-foreground">
                Only the current owner of an asset can create a sponsorship offer on it —
                verified onchain, both when the offer is created and again when a bid is
                accepted. You set a minimum bid, a payment token, a license duration, and the
                license terms sponsors will receive.
              </p>
            </div>
            <div className="bento-cell px-4 py-3 space-y-1">
              <p className="text-sm font-semibold text-foreground">Sponsors (Bidders)</p>
              <p className="text-xs text-muted-foreground">
                Anyone can place a bid on an open offer, meeting or exceeding the minimum
                amount. A sponsor can retract an active bid at any time before it&apos;s
                accepted. Once the author accepts a bid, payment settles immediately and the
                sponsor receives their license.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Creating an Offer">
          <p>
            From <strong className="text-foreground">Launchpad → IP Sponsorship → Create Offer</strong>,
            choose the asset you own, a minimum bid amount and payment token, how long the
            resulting license runs (counted from acceptance, not from creation), and the
            license terms URI sponsors will be bound to. You can also choose whether the
            license can be transferred by the sponsor to someone else.
          </p>
        </Section>

        <Section title="Bidding and Accepting">
          <p>
            Sponsors browse open offers under{" "}
            <strong className="text-foreground">Launchpad → IP Sponsorship</strong> and place a
            bid with an amount at or above the minimum. The author sees all active bids on
            their offer and accepts the one they want. Accepting a bid:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm">
            <li>Pulls the sponsor&apos;s payment directly to the author&apos;s wallet — no escrow step</li>
            <li>Mints a license record to the sponsor, referencing the agreed license terms</li>
            <li>Closes the offer to further bids</li>
          </ul>
        </Section>

        <Section title="Why No Escrow?">
          <p>
            The contract never custodies sponsor funds or the underlying asset. A bid is a
            standing approval the sponsor can retract any time before acceptance; accepting
            it settles the payment and issues the license in the same onchain transaction.
            This removes an entire class of custodial risk — there is no pool of locked funds
            for a bug or exploit to target.
          </p>
        </Section>

        <Section title="License Validity">
          <p>
            A sponsorship license is time-boxed to the duration the author set, starting from
            acceptance. Whether a license is currently valid is always checked directly onchain
            — the receipt a sponsor holds in their wallet is a convenience, never the source
            of truth for gating anything downstream.
          </p>
        </Section>
      </div>
    </div>
  );
}
