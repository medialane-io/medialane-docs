import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/docs";

export const metadata: Metadata = {
  title: "IP Club | Learn | Medialane",
  description: "Learn how IP Club lets creators run membership clubs with an onchain NFT membership card on Medialane.",
  openGraph: {
    title: "IP Club | Learn | Medialane",
    description: "Learn how IP Club lets creators run membership clubs with an onchain NFT membership card on Medialane.",
    url: "https://docs.medialane.io/learn/ip-club",
  },
  twitter: {
    title: "IP Club | Learn | Medialane",
    description: "Learn how IP Club lets creators run membership clubs with an onchain NFT membership card on Medialane.",
  },
};

export default function LearnIPClubPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">IP Club</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          IP Club lets a creator run a membership community with a real onchain membership
          card. Joining a club mints an NFT to the member&apos;s wallet — proof of membership
          that any application can verify, with no centralized member list to lose or leak.
        </p>
        <p className="text-sm text-muted-foreground">
          Service ID:{" "}
          <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">ip-club</code>.
          A single registry contract tracks every club and issues membership cards from a
          shared NFT contract. See{" "}
          <Link href="/learn/services" className="text-primary hover:underline">Services</Link>{" "}
          for the full capability set.
        </p>
      </div>

      <div className="space-y-8">
        <Section title="What is an IP Club?">
          <p>
            An IP Club is a membership gate a creator controls entirely — who can join, whether
            there&apos;s an entry fee, and whether membership is capped. Examples of what a club
            can represent:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm">
            <li>A paid fan club or supporters&apos; circle</li>
            <li>A free community open to anyone</li>
            <li>A capped-membership collective (first N members only)</li>
            <li>Token-gated perks — exclusive content, early access, Discord roles</li>
          </ul>
        </Section>

        <Section title="How It Works">
          <p>
            IP Club has two roles: <strong className="text-foreground">Creators</strong> (who
            create and manage a club) and <strong className="text-foreground">Members</strong>{" "}
            (who join and hold a membership card).
          </p>
          <div className="space-y-3">
            <div className="bento-cell px-4 py-3 space-y-1">
              <p className="text-sm font-semibold text-foreground">Creators</p>
              <p className="text-xs text-muted-foreground">
                Any creator can create a club — no approval required. When creating a club you
                set whether it&apos;s open or invite-only, an optional entry fee and payment
                token, and an optional maximum member count. You can open or close the club to
                new members at any time.
              </p>
            </div>
            <div className="bento-cell px-4 py-3 space-y-1">
              <p className="text-sm font-semibold text-foreground">Members</p>
              <p className="text-xs text-muted-foreground">
                Anyone can join an open club — paying the entry fee if one is set. Membership
                mints an NFT membership card to your wallet. Members can leave a club at any
                time, which burns or invalidates their card depending on the club&apos;s rules.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Creating a Club">
          <p>
            From <strong className="text-foreground">Launchpad → IP Club → Create</strong>,
            set your club&apos;s name, whether it&apos;s open for anyone to join, an optional
            entry fee (in any supported token), and an optional member cap. Creating a club is
            a single onchain transaction — no separate factory deploy step, since every club
            is a record in the shared registry rather than its own contract.
          </p>
        </Section>

        <Section title="Joining a Club">
          <p>
            Browse clubs under <strong className="text-foreground">Launchpad → IP Club</strong>.
            Open clubs show their current member count, any entry fee, and whether they&apos;re
            still accepting members. Click <strong className="text-foreground">Join</strong>,
            pay the entry fee if required, and your membership card mints to your wallet
            immediately — gasless on medialane.io (ChipiPay); on the Starknet app, gas
            sponsorship depends on whether AVNU sponsorship is currently active.
          </p>
        </Section>

        <Section title="Membership Cards Are Non-Transferable">
          <p>
            A club membership card lives in your Portfolio like any other Medialane asset,
            but it is <strong className="text-foreground">soulbound</strong> — permanently
            tied to the wallet that joined. It cannot be sold, gifted, or transferred, so
            membership always means the current member, not whoever happens to hold the
            token. It is the verifiable proof of membership — any application, token gate,
            or community tool can check whether a wallet holds a card for a given club
            without trusting a centralized database. If you leave the club, your card no
            longer certifies membership, since{" "}
            <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">is_member()</code>{" "}
            on the club registry is always the source of truth — never the appearance of a
            card in a wallet.
          </p>
        </Section>

        <Section title="Managing a Club">
          <p>
            Club creators can open or close membership to new joiners at any time from the
            club&apos;s management view. Closing a club stops new joins without affecting
            existing members — it&apos;s a simple way to run capped or seasonal cohorts.
          </p>
        </Section>
      </div>
    </div>
  );
}
