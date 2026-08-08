import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/docs";

export const metadata: Metadata = {
  title: "IP Sponsorship | Learn | Medialane",
  description: "Learn how IP Sponsorship lets either side start a deal: creators sell direct-settlement sponsorship licenses, sponsors can propose terms directly, with no escrow.",
  openGraph: {
    title: "IP Sponsorship | Learn | Medialane",
    description: "Learn how IP Sponsorship lets either side start a deal: creators sell direct-settlement sponsorship licenses, sponsors can propose terms directly, with no escrow.",
    url: "https://docs.medialane.io/learn/ip-sponsorship",
  },
  twitter: {
    title: "IP Sponsorship | Learn | Medialane",
    description: "Learn how IP Sponsorship lets either side start a deal: creators sell direct-settlement sponsorship licenses, sponsors can propose terms directly, with no escrow.",
  },
};

export default function LearnIPSponsorshipPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">IP Sponsorship</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          IP Sponsorship lets a creator sell a sponsorship license on an asset they own,
          where a brand or backer pays to attach their name or support to your work, and it lets
          a sponsor propose that deal directly on any asset they&apos;d like to back. Either
          way, payment settles directly from sponsor to creator the instant a deal is
          accepted. There is no escrow: the contract never holds funds.
        </p>
        <p className="text-sm text-muted-foreground">
          Service ID:{" "}
          <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">ip-sponsorship</code>.
          One contract is both the offer/bid/proposal registry and the license collection: the
          license mints internally, as a standard, transferable ERC-721 token, the moment a deal
          is accepted. See{" "}
          <Link href="/learn/services" className="text-primary hover:underline">Services</Link>{" "}
          for the full capability set.
        </p>
      </div>

      <div className="space-y-8">
        <Section title="What is IP Sponsorship?">
          <p>
            IP Sponsorship is a market for sponsoring an existing IP asset, attaching a
            sponsor&apos;s name, logo, or endorsement to a piece of work in exchange for direct
            payment to the creator. Examples of what it can represent:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm">
            <li>A brand sponsoring a creator&apos;s flagship piece or collection</li>
            <li>A patron backing a specific work with a public, onchain record</li>
            <li>Event or series sponsorship tied to a specific asset</li>
          </ul>
        </Section>

        <Section title="Either Side Can Start the Deal">
          <p>
            IP Sponsorship has two roles, <strong className="text-foreground">Authors</strong>{" "}
            (who own the asset) and <strong className="text-foreground">Sponsors</strong>{" "}
            (who back it), and both can initiate.
          </p>
          <div className="space-y-3">
            <div className="bento-cell px-4 py-3 space-y-1">
              <p className="text-sm font-semibold text-foreground">Authors open an offer</p>
              <p className="text-xs text-muted-foreground">
                Only the current owner of an asset can open a sponsorship offer on it,
                verified onchain both when the offer is created and again when a bid is
                accepted. Set a minimum bid, a payment token, a license length, a resale
                royalty, and the license terms sponsors will receive.
              </p>
            </div>
            <div className="bento-cell px-4 py-3 space-y-1">
              <p className="text-sm font-semibold text-foreground">Sponsors bid, or propose</p>
              <p className="text-xs text-muted-foreground">
                Anyone can place a bid on an open offer, meeting or exceeding the minimum, and
                retract it any time before it&apos;s accepted. A sponsor can also skip waiting
                for an offer and propose fixed terms directly on any asset they&apos;d like to
                sponsor; the asset&apos;s current owner accepts or declines. A proposal binds
                to the asset itself: if it changes hands before the proposal is
                answered, whoever owns it at that point is the one who decides.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Starting a Sponsorship">
          <p>
            From <strong className="text-foreground">Launchpad → IP Sponsorship → Set up a sponsorship</strong>,
            pick a mode. <strong className="text-foreground">Offer your asset</strong>: choose
            one you own, a minimum bid and payment token, how long the resulting license runs
            (counted from acceptance, not from creation), a resale royalty, and the license
            terms. <strong className="text-foreground">Propose to sponsor</strong>: point at any
            asset by its contract address and token id, and set the same terms as a
            take-it-or-leave-it offer with an optional response deadline.
          </p>
        </Section>

        <Section title="Bidding and Accepting">
          <p>
            Sponsors browse open offers under{" "}
            <strong className="text-foreground">Launchpad → IP Sponsorship</strong> and place a
            bid with an amount at or above the minimum. The author sees all active bids on
            their offer and accepts the one they want. Accepting a bid, or a proposal,
            re-verifies the author still owns the asset, then:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm">
            <li>Pulls the sponsor&apos;s payment directly to the author&apos;s wallet, with no escrow step</li>
            <li>Mints a real, standard ERC-721 license to the sponsor, in the same transaction</li>
            <li>Closes the offer or proposal to any further response</li>
          </ul>
        </Section>

        <Section title="Why No Escrow?">
          <p>
            The contract never custodies sponsor funds or the underlying asset. A bid or
            proposal is a standing approval that can be withdrawn any time before acceptance;
            accepting it settles the payment and issues the license in the same onchain
            transaction. This removes an entire class of custodial risk: no pool of
            locked funds exists for a bug or exploit to target.
          </p>
        </Section>

        <Section title="Fees Are a Platform Layer">
          <p>
            The sponsorship contract is <strong className="text-foreground">zero-fee</strong>: it
            never holds funds and takes no cut of its own. A 1% fee applies when a bid or proposal
            is accepted, the same rate and platform-layer mechanism as the marketplace fee, and it
            is routed to the creators fund. Because the fee lives at the platform layer rather than
            inside the contract, the DAO can evolve it without a contract migration, and anyone
            interacting with the contract directly is never forced to pay it.
          </p>
          <p className="text-sm">
            See{" "}
            <Link href="/dev/fees" className="text-primary hover:underline">Fees &amp; Revenue</Link>{" "}
            for the canonical breakdown.
          </p>
        </Section>

        <Section title="License Terms Are Declarative">
          <p>
            A sponsorship license is a real, freely transferable ERC-721 that moves through an
            ordinary transfer like any other Medialane asset, and can be resold on the
            marketplace with a royalty paid automatically to the original author. The length of
            the license and whether the author intended it to be resold are terms carried in
            the license&apos;s own metadata, not conditions the contract enforces against a
            transfer. This is the same soft-by-default approach every Medialane license takes:
            the chain is the source of truth for who holds the license and that payment
            genuinely settled. Real-world terms like usage rights or resale intent stay
            declarative record rather than a lock the contract holds a wallet to.
          </p>
        </Section>
      </div>
    </div>
  );
}
