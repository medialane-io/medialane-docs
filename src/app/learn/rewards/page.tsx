import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/docs";

export const metadata: Metadata = {
  alternates: { canonical: "https://docs.medialane.io/learn/rewards" },
  title: "Rewards | Learn | Medialane",
  description: "How XP works on Medialane, what earns it, and how it decides your share of the Creator's Fund.",
  openGraph: {
    title: "Rewards | Learn | Medialane",
    description: "How XP works on Medialane, what earns it, and how it decides your share of the Creator's Fund.",
    url: "https://docs.medialane.io/learn/rewards",
  },
  twitter: {
    title: "Rewards | Learn | Medialane",
    description: "How XP works on Medialane, what earns it, and how it decides your share of the Creator's Fund.",
  },
};

const EARN_GROUPS = [
  {
    title: "Create",
    items: ["Complete your profile", "Mint an IP asset", "Deploy a collection", "Launch a drop or POP", "Remix existing work", "Launch a creator coin"],
  },
  {
    title: "Collect & trade",
    items: ["List an asset", "Buy an asset", "Make or accept an offer"],
  },
  {
    title: "Engage",
    items: ["Comment on-chain", "Join or start a club", "Open or secure a sponsorship"],
  },
];

export default function LearnRewardsPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Rewards</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Every real interaction with Medialane earns XP. Your total XP sets your level, unlocks
          badges, and decides your share of the Creator&apos;s Fund each time it distributes.
        </p>
      </div>

      <div className="space-y-8">
        <Section title="What Earns XP">
          <p>
            XP is computed from real on-chain activity, verified automatically. There is no
            separate tier to unlock: creating your account is enough to be included, and every
            action below adds to the same running total.
          </p>
          <div className="space-y-2">
            {EARN_GROUPS.map(({ title, items }) => (
              <div key={title} className="bento-cell px-4 py-3 space-y-1">
                <p className="text-base font-semibold text-foreground">{title}</p>
                <p className="text-base leading-relaxed text-muted-foreground">{items.join(", ")}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Levels & Badges">
          <p>
            XP moves you through a 50-level ladder, each level named, with its own badge color.
            Separately, badges mark specific milestones (a first mint, a first sale) and stay with
            your profile once earned. See your current level, progress, and badges on{" "}
            <a href="https://medialane.io/rewards" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              medialane.io/rewards
            </a>.
          </p>
        </Section>

        <Section title="The Creator's Fund">
          <p>
            Medialane applies a 1% fee on paid earnings (sales, paid mints, launches; free mints
            stay free) and routes it to one public wallet, the Creator&apos;s Fund. Each time the
            fund reaches its threshold, it&apos;s airdropped to everyone taking part, split by XP.
            The fund and every distribution are verifiable on-chain.
          </p>
          <p>
            Read the full mechanic on{" "}
            <Link href="/dao/airdrop" className="text-primary hover:underline">Creator&apos;s Airdrop</Link>{" "}
            and watch the live wallet at{" "}
            <a href="https://medialane.org/creators-fund" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              medialane.org/creators-fund
            </a>.
          </p>
        </Section>

        <Section title="For Developers">
          <p>
            The Rewards API exposes score, level, badges, and XP breakdown for any address, plus a
            paginated leaderboard and per-address event history. Weights and levels are DAO-adjustable
            and computed off-chain from on-chain activity. See{" "}
            <Link href="/dev/api#rewards" className="text-primary hover:underline">API Reference: Rewards</Link>.
          </p>
        </Section>
      </div>
    </div>
  );
}
