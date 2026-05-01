import type { Metadata } from "next";
import { Coins, Vote, Lock, Users, TrendingUp, Gift } from "lucide-react";

export const metadata: Metadata = {
  title: "MDLN Token | Medialane DAO",
  description: "The MDLN governance token — utility, distribution, and staking for Medialane DAO participants.",
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
    title: "Platform Rewards",
    description: "Contributors, creators, and active community members can earn MDLN through participation programs, grants, and platform-wide incentive mechanisms.",
  },
  {
    icon: Lock,
    title: "Staking",
    description: "Stake MDLN to increase voting power over time and participate in long-term governance. Staking signals commitment to the ecosystem.",
  },
  {
    icon: TrendingUp,
    title: "Fee Sharing",
    description: "A portion of Medialane platform fees may be directed to the DAO treasury, benefiting token holders through community-governed fund allocation.",
  },
];

const DISTRIBUTION = [
  { category: "Community & Ecosystem", pct: "40%", desc: "Grants, creator rewards, contributor programs, and community incentives." },
  { category: "DAO Treasury", pct: "25%", desc: "Reserved for the DAO to fund future development, audits, and operations via governance." },
  { category: "Team & Founders", pct: "20%", desc: "Allocated to founding contributors with a 4-year vest and 1-year cliff." },
  { category: "Investors", pct: "10%", desc: "Strategic partners with a 2-year vest and 6-month cliff." },
  { category: "Liquidity & Listings", pct: "5%", desc: "Initial liquidity provisioning and exchange listings." },
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
          MDLN is the governance token of Medialane DAO LLC. It gives holders the power to participate in
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
          { label: "Max Supply", value: "Community vote" },
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
        <h3 className="text-lg font-semibold">Planned Distribution</h3>
        <p className="text-sm text-muted-foreground">Final token economics are subject to community ratification before the token launch.</p>
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

      {/* Creator Fund */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Creator Fund Program</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Each year, a portion of the Community &amp; Ecosystem allocation is distributed to Medialane
          participants through the Creator Fund program. The exact amount for each cycle is determined
          by a Snapshot governance vote — the community decides how much to allocate, not the founding
          team.
        </p>
        <div className="space-y-3">
          {[
            {
              phase: "Phase 1",
              trigger: "5,000 verified participants",
              desc: "First distribution cycle. Rewards participants who registered and secured their account, with higher allocations for those who published content and engaged on the platform.",
            },
            {
              phase: "Phase 2",
              trigger: "10,000 verified participants",
              desc: "Second distribution cycle, including revenue accumulated since Phase 1. Snapshot governance ratifies the allocation amount before distribution.",
            },
            {
              phase: "Annual cycle",
              trigger: "Ongoing · Snapshot vote each year",
              desc: "The creator fund continues annually. Platform revenue and the yearly community allocation are pooled and distributed to active members, creating a recurring creator dividend.",
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
