import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/docs";

export const metadata: Metadata = {
  title: "IP Club | Learn | Medialane",
  description: "Learn how IP Club lets creators run membership clubs as tiered, tradeable on-chain assets on Medialane.",
  openGraph: {
    title: "IP Club | Learn | Medialane",
    description: "Learn how IP Club lets creators run membership clubs as tiered, tradeable on-chain assets on Medialane.",
    url: "https://docs.medialane.io/learn/ip-club",
  },
  twitter: {
    title: "IP Club | Learn | Medialane",
    description: "Learn how IP Club lets creators run membership clubs as tiered, tradeable on-chain assets on Medialane.",
  },
};

export default function LearnIPClubPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">IP Club</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          IP Club lets a creator run a membership community where the membership card is a
          real, tradeable on-chain asset. Holding a card is what proves membership — any
          application can verify it directly from the chain, with no centralized member list
          to lose or leak.
        </p>
        <p className="text-sm text-muted-foreground">
          Service ID:{" "}
          <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">ip-club</code>.
          A factory deploys one dedicated ERC-1155 collection per creator; each token id is
          a membership tier. See{" "}
          <Link href="/learn/services" className="text-primary hover:underline">Services</Link>{" "}
          for the full capability set.
        </p>
      </div>

      <div className="space-y-8">
        <Section title="What is an IP Club?">
          <p>
            An IP Club is a collection of membership tiers a creator defines and controls —
            each tier has its own supply, price on the marketplace, and optional validity
            window. Examples of what a club can represent:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm">
            <li>A fan club with multiple tiers — supporter, patron, front-row</li>
            <li>A capped-membership collective (fixed supply per tier)</li>
            <li>A season or annual pass, sold ahead of the period it covers</li>
            <li>Token-gated perks — exclusive content, early access, Discord roles</li>
          </ul>
        </Section>

        <Section title="How It Works">
          <p>
            IP Club has two roles: <strong className="text-foreground">Creators</strong> (who
            define tiers and mint memberships) and{" "}
            <strong className="text-foreground">Members</strong> (who hold and trade a
            membership card).
          </p>
          <div className="space-y-3">
            <div className="bento-cell px-4 py-3 space-y-1">
              <p className="text-sm font-semibold text-foreground">Creators</p>
              <p className="text-xs text-muted-foreground">
                Any creator can create a club — no approval required. A club is a tier
                definition: a supply, an optional validity window (season/annual — unset
                means lifetime), a royalty rate, and its own metadata. The creator mints
                memberships from a tier directly to holders; there is no on-chain entry fee
                or payment step — pricing and sale happen on the marketplace, the same way
                any other Medialane asset sells.
              </p>
            </div>
            <div className="bento-cell px-4 py-3 space-y-1">
              <p className="text-sm font-semibold text-foreground">Members</p>
              <p className="text-xs text-muted-foreground">
                A membership card is a standard tradeable asset — buy one on the marketplace,
                receive one directly from the creator, or resell it like any collection item.
                Holding a card inside its tier&apos;s validity window is what makes you a
                member; there is no separate join or leave action.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Creating a Club">
          <p>
            From <strong className="text-foreground">Launchpad → IP Club → Create</strong>,
            deploy your club&apos;s collection with a name, symbol, and cover image — the
            same factory pattern used for IP Collections and IP Tickets. Inside the
            collection, define one or more membership tiers: a supply cap, an optional
            validity window, a royalty rate, and the tier&apos;s own image and metadata.
          </p>
        </Section>

        <Section title="Minting and Trading Memberships">
          <p>
            The creator mints memberships from a tier directly to holders&apos; wallets, or
            lists them on the marketplace for anyone to buy. Because a membership card is a
            standard asset, it settles atomically like any Medialane trade — payment and
            card move together, or neither does — and the creator earns their configured
            royalty on every resale.
          </p>
        </Section>

        <Section title="Membership Cards Are Tradeable Assets">
          <p>
            Unlike a <Link href="/learn/pop-protocol" className="text-primary hover:underline">POP Protocol</Link>{" "}
            credential, a club membership is <strong className="text-foreground">not</strong>{" "}
            soulbound — it lives in your Portfolio and can be sold, gifted, or transferred
            like any collection item. Membership follows the card: whoever holds a valid card
            inside its tier&apos;s window is the member. Verification is a public, on-chain
            read (<code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">is_member</code>{" "}
            /{" "}
            <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">is_member_of</code>) —
            any application, token gate, or community tool can check it without trusting a
            centralized database.
          </p>
        </Section>

        <Section title="Season and Lifetime Tiers">
          <p>
            A tier&apos;s validity window is optional and gates membership status, never
            minting — a creator can mint and sell a future-dated pass ahead of the period it
            covers (a &ldquo;2027 season pass&rdquo; sold in 2026), and{" "}
            <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">is_member</code>{" "}
            turns true once the window opens. A tier with no window set is a lifetime
            membership.
          </p>
        </Section>
      </div>
    </div>
  );
}
