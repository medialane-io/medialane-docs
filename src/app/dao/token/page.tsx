import type { Metadata } from "next";
import Link from "next/link";
import { Coins, Vote, Lock, Users, TrendingUp, Gift, Zap } from "lucide-react";
import { CANONICAL } from "@/lib/canonical";

export const metadata: Metadata = {
  title: "MDLN Token | Medialane DAO",
  description: "The MDLN governance token — fixed supply, DAO treasury, voting rights, and participation for Medialane DAO members.",
  openGraph: {
    title: "MDLN Token | Medialane DAO",
    description: "The MDLN governance token — fixed supply, DAO treasury, voting rights, and participation for Medialane DAO members.",
    url: "https://docs.medialane.io/dao/token",
  },
  twitter: {
    title: "MDLN Token | Medialane DAO",
    description: "The MDLN governance token — fixed supply, DAO treasury, voting rights, and participation for Medialane DAO members.",
  },
};

const UTILITIES = [
  {
    icon: Vote,
    title: "Governance Voting",
    description: "MDLN holders vote on protocol upgrades, treasury allocations, community initiatives, and governance rule changes. One token equals one vote.",
  },
  {
    icon: Users,
    title: "Delegation",
    description: "Token holders can delegate their voting power to trusted community members who participate actively in governance on their behalf.",
  },
  {
    icon: Gift,
    title: "Contributor Rewards",
    description: "Contributors, creators, and active community members may receive grants or rewards when approved through DAO governance.",
  },
  {
    icon: Lock,
    title: "Membership Tiers",
    description: "MDLN holdings define DAO participation tiers: Observer, Contributor, and Guardian.",
  },
  {
    icon: Zap,
    title: "Platform Multiplier",
    description: "MDLN holders receive a boosted API quota on the developer portal — 1.2× at 500 MDLN, 1.5× at 2,000, and 2× at 5,000. Autonomous AI agents holding MDLN benefit on equal terms.",
  },
  {
    icon: TrendingUp,
    title: "Treasury Governance",
    description: `The ${CANONICAL.marketplaceFee} marketplace fee flows to the DAO treasury. MDLN holders vote on allocation: ${CANONICAL.creatorAirdropName}, buyback, burn, development, or operations.`,
  },
];

const DISTRIBUTION = [
  { category: "Vested DAO Treasury", pct: "90%", desc: "18,900,000 MDLN time-locked for 9 years, releasing 2,100,000 MDLN per year to the DAO treasury." },
  { category: "Operational Runway", pct: "10%", desc: "2,100,000 MDLN available for protocol operations through the DAO treasury." },
  { category: "VC Allocation", pct: "0%", desc: "No venture capital allocation, no private sale, and no preferential investor tranche." },
  { category: "Team Allocation", pct: "0%", desc: "No separate founder or team allocation outside DAO-governed treasury operations." },
];

const PLATFORM_MULTIPLIER_TIERS = [
  { label: "Free",    mdln: "0 MDLN",    mult: "1×",   quota: "50 req / month" },
  { label: "Starter", mdln: "500 MDLN",  mult: "1.2×", quota: "60 req / month" },
  { label: "Builder", mdln: "2,000 MDLN",mult: "1.5×", quota: "75 req / month" },
  { label: "Pro",     mdln: "5,000 MDLN",mult: "2×",   quota: "100 req / month" },
];

const MEMBERSHIP_TIERS = [
  { tier: "Observer", requirement: "1+ MDLN", rights: "View proposals and join community discussions." },
  { tier: "Contributor", requirement: "100+ MDLN", rights: "Vote on Snapshot and submit governance proposals." },
  { tier: "Guardian", requirement: "1,000+ MDLN", rights: "Council nomination and working group leadership." },
];

export default function TokenPage() {
  return (
    <div className="space-y-12 max-w-3xl">

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Coins className="h-5 w-5 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">Governance Token</span>
        </div>
        <h2 className="text-2xl font-bold">MDLN Token</h2>
        <p className="text-muted-foreground leading-relaxed">
          MDLN is the governance token of Medialane DAO. It gives holders the power to participate in
          platform governance, vote on proposals, and shape the future of the IP economy.
        </p>
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            Live on Ethereum &amp; Starknet
          </span>
          <span className="text-xs text-muted-foreground">Bridged via StarkGate · Liquidity pool on Ekubo</span>
        </div>
      </div>

      {/* Token basics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "Ticker",     value: "MDLN" },
          { label: "Ethereum",   value: "ERC-20" },
          { label: "Starknet",   value: "ERC-20 (StarkGate)" },
          { label: "Max Supply", value: CANONICAL.mdln.totalSupply },
        ].map(({ label, value }) => (
          <div key={label} className="bento-cell px-4 py-3 space-y-1">
            <p className="text-xs text-muted-foreground">{label}</p>
            <p className="font-semibold text-sm">{value}</p>
          </div>
        ))}
      </div>

      {/* Utilities */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Token Utility</h3>
        <div className="space-y-3">
          {UTILITIES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bento-cell p-5 flex items-start gap-4">
              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-sm">{title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Distribution */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Token Distribution</h3>
        <p className="text-sm text-muted-foreground">MDLN has a fixed {CANONICAL.mdln.totalSupply} token supply. 100% is DAO-controlled, with no VC allocation, no team allocation, and no insider pre-mine.</p>
        <div className="space-y-2">
          {DISTRIBUTION.map(({ category, pct, desc }) => (
            <div key={category} className="bento-cell p-4 flex items-start gap-4">
              <span className="text-sm font-bold text-primary shrink-0 w-12">{pct}</span>
              <div className="space-y-0.5">
                <p className="text-sm font-semibold">{category}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Membership */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Membership Tiers</h3>
        <div className="space-y-2">
          {MEMBERSHIP_TIERS.map(({ tier, requirement, rights }) => (
            <div key={tier} className="bento-cell p-4 flex items-start gap-4">
              <span className="text-xs font-mono text-primary shrink-0 w-20">{requirement}</span>
              <div className="space-y-0.5">
                <p className="text-sm font-semibold">{tier}</p>
                <p className="text-xs text-muted-foreground">{rights}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Platform multiplier */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Developer Portal Multiplier</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          MDLN holders automatically receive a boosted API quota when they register their
          wallet in the{" "}
          <a href="https://portal.medialane.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            developer portal
          </a>. The multiplier applies equally to human developers and autonomous AI agents.
        </p>
        <div className="space-y-2">
          {PLATFORM_MULTIPLIER_TIERS.map(({ label, mdln, mult, quota }) => (
            <div key={label} className="bento-cell px-4 py-3 flex items-center gap-4 flex-wrap text-sm">
              <span className="font-semibold w-16 shrink-0">{label}</span>
              <span className="text-muted-foreground font-mono flex-1">{mdln}</span>
              <span className="font-bold font-mono text-primary">{mult}</span>
              <span className="text-xs text-muted-foreground w-32 text-right">{quota}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          The multiplier is read on-chain at key registration time. Increasing your MDLN
          balance and re-registering upgrades your tier immediately.
        </p>
      </div>

      {/* Creator's Airdrop */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">{CANONICAL.creatorAirdropName}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          A {CANONICAL.marketplaceFee} marketplace fee flows to the Medialane DAO treasury. Each year, MDLN holders vote on
          Snapshot to decide how that revenue is used — {CANONICAL.creatorAirdropName}, token buyback, token burn,
          protocol development, or operations. The {CANONICAL.creatorAirdropName} is one option, not a guarantee.
          See <Link href="/docs/fees" className="text-primary hover:underline">Fees &amp; Revenue</Link>{" "}
          for the canonical breakdown.
        </p>
        <div className="space-y-3">
          {[
            {
              phase: "Phase 1",
              trigger: "5,000 verified participants",
              desc: "First milestone cycle if MDLN holders approve an airdrop allocation. Rewards verified participation, creation, and marketplace engagement.",
            },
            {
              phase: "Phase 2",
              trigger: "10,000 verified participants",
              desc: "Second milestone cycle. Snapshot governance determines the allocation amount, eligibility rules, and timing before any distribution.",
            },
            {
              phase: "Annual cycle",
              trigger: "Ongoing · Snapshot vote each year",
              desc: `Annual DAO vote decides whether revenue funds the ${CANONICAL.creatorAirdropName}, buyback, burn, development, operations, or another approved use.`,
            },
          ].map(({ phase, trigger, desc }) => (
            <div key={phase} className="bento-cell p-5 space-y-2">
              <div className="flex items-start justify-between gap-3">
                <p className="font-semibold text-sm">{phase}</p>
                <span className="text-xs text-muted-foreground shrink-0">{trigger}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bento-cell p-5 text-xs text-muted-foreground leading-relaxed space-y-2">
        <p className="font-semibold text-foreground text-sm">Disclaimer</p>
        <p>
          MDLN is a governance token intended for participation in Medialane DAO governance. It is not
          intended to be an investment or security. Token holders should understand applicable regulations
          in their jurisdiction. This page does not constitute financial or legal advice.
        </p>
      </div>

    </div>
  );
}
