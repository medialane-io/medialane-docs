import type { Metadata } from "next";
import Link from "next/link";
import {
  Gift, Star, Repeat2, Vote, CheckCircle2,
  PenLine, ShoppingCart, UserCheck, ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Creator Fund | Medialane DAO",
  description: "The Medialane Creator Fund — how platform revenue and community allocations are distributed to creators and participants each year.",
};

const TIERS = [
  {
    icon: UserCheck,
    tier: "Tier 1 — Register",
    points: "Base eligibility",
    colorClass: "text-blue-400",
    bgClass: "bg-blue-500/10",
    actions: [
      "Create a free account",
      "Secure your account with PIN or passkey",
    ],
    desc: "Every participant who completes onboarding qualifies. This is the floor — you participate and receive a base share of each distribution.",
  },
  {
    icon: PenLine,
    tier: "Tier 2 — Create",
    points: "Higher allocation",
    colorClass: "text-purple-400",
    bgClass: "bg-purple-500/10",
    actions: [
      "Publish at least one piece of original content",
      "Set up a collection or creator profile",
    ],
    desc: "Creators who publish original work receive a meaningfully larger share. The platform exists because of what you create.",
  },
  {
    icon: ShoppingCart,
    tier: "Tier 3 — Engage",
    points: "Largest allocation",
    colorClass: "text-orange-400",
    bgClass: "bg-orange-500/10",
    actions: [
      "Trade, collect, or make offers on the marketplace",
      "Collaborate or remix with other creators",
      "Consistent activity across multiple cycles",
    ],
    desc: "Active participants who both create and engage with the broader community receive the highest contribution scores.",
  },
];

const PHASES = [
  {
    phase: "Phase 1",
    trigger: "5,000 participants",
    items: [
      "First distribution from the creator fund",
      "Snapshot governance vote ratifies the allocation amount",
      "All eligible participants receive their proportional share",
    ],
  },
  {
    phase: "Phase 2",
    trigger: "10,000 participants",
    items: [
      "Second distribution — includes revenue accumulated since Phase 1",
      "Community vote determines the allocation amount and rules",
      "Contribution scores re-calculated from all activity since launch",
    ],
  },
  {
    phase: "Annual cycle",
    trigger: "Every year, ongoing",
    items: [
      "Yearly community allocation voted on via Snapshot",
      "100% of platform revenue for the year added to the pool",
      "The cycle repeats — Medialane has no investors drawing revenue",
      "The community decides how much to distribute each year",
    ],
  },
];

export default function AirdropPage() {
  return (
    <div className="space-y-12 max-w-3xl">

      {/* Hero */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Gift className="h-5 w-5 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">Community Program</span>
        </div>
        <h2 className="text-2xl font-bold">Creator Fund</h2>
        <p className="text-muted-foreground leading-relaxed">
          The Medialane Creator Fund distributes platform revenue and community allocations
          directly to the people who build and use the platform — creators, collectors, and active
          participants. There are no investors extracting revenue. What the platform earns goes back
          to the community.
        </p>
      </div>

      {/* The model */}
      <div className="bento-cell p-6 space-y-3">
        <div className="flex items-center gap-2">
          <Repeat2 className="h-4 w-4 text-primary" />
          <h3 className="font-semibold text-sm">The Model</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Each year, the Medialane DAO community votes on how to allocate that year&apos;s creator fund
          pool. The pool consists of platform revenue from the previous year plus the annual community
          allocation approved by governance. The community — not the founding team — decides the
          amount and distribution rules every cycle.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          {[
            { label: "Platform revenue", value: "100% to fund" },
            { label: "Governed by",      value: "Snapshot DAO vote" },
            { label: "Cycle",            value: "Annual + milestones" },
          ].map(({ label, value }) => (
            <div key={label} className="bg-muted/30 rounded-lg px-4 py-3 space-y-1">
              <p className="text-xs text-muted-foreground">{label}</p>
              <p className="text-sm font-semibold">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How participation works */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">How Participation Works</h3>
        <p className="text-sm text-muted-foreground">
          Your contribution score determines your proportional share of each distribution.
          The more you create and engage, the larger your share.
        </p>
        <div className="space-y-4">
          {TIERS.map(({ icon: Icon, tier, points, colorClass, bgClass, actions, desc }) => (
            <div key={tier} className="bento-cell p-5 space-y-3">
              <div className="flex items-start gap-3">
                <div className={`h-9 w-9 rounded-lg ${bgClass} flex items-center justify-center shrink-0 mt-0.5`}>
                  <Icon className={`h-4 w-4 ${colorClass}`} />
                </div>
                <div className="space-y-0.5 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-semibold text-sm">{tier}</p>
                    <span className={`text-xs font-medium ${colorClass}`}>{points}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
              <ul className="space-y-1.5 pl-12">
                {actions.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5 text-primary/50" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Distribution phases */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Distribution Phases</h3>
        <div className="space-y-3">
          {PHASES.map(({ phase, trigger, items }) => (
            <div key={phase} className="bento-cell p-5 space-y-3">
              <div className="flex items-start justify-between gap-3">
                <p className="font-semibold text-sm">{phase}</p>
                <span className="text-xs text-muted-foreground shrink-0">{trigger}</span>
              </div>
              <ul className="space-y-1.5">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5 text-primary/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Fair by design */}
      <div className="bento-cell p-5 space-y-2">
        <div className="flex items-center gap-2">
          <Star className="h-4 w-4 text-primary" />
          <h3 className="font-semibold text-sm">Fair by Design</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          All participation is recorded on a public decentralized network — the same infrastructure
          that makes Medialane permissionless and censorship-resistant. Contribution scores are
          verifiable and tamper-proof. Accounts found using automated tools or duplicate
          registrations are disqualified. The fund rewards real creative work, not gaming.
        </p>
      </div>

      {/* Governance */}
      <div className="bento-cell p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Vote className="h-4 w-4 text-primary" />
          <h3 className="font-semibold text-sm">Community Governance</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Every distribution is ratified by a community governance vote on Snapshot before
          it happens. MDLN token holders decide the amount, the rules, and the timing.
          If the community votes to increase or decrease the fund for a given year,
          that decision stands.
        </p>
        <Link
          href="/dao/governance"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          Read the Governance Charter <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* CTAs */}
      <div className="space-y-3">
        <h3 className="text-base font-semibold">Get started</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href="https://medialane.io/mint"
            className="group bento-cell p-4 hover:border-primary/40 transition-colors flex items-center justify-between gap-3"
          >
            <div>
              <p className="font-semibold text-sm">Global campaign</p>
              <p className="text-xs text-muted-foreground mt-0.5">Register and claim your participation record</p>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
          </a>
          <a
            href="https://medialane.io/br/mint"
            className="group bento-cell p-4 hover:border-primary/40 transition-colors flex items-center justify-between gap-3"
          >
            <div>
              <p className="font-semibold text-sm">Campanha Brasil</p>
              <p className="text-xs text-muted-foreground mt-0.5">Registre-se e participe do fundo de criadores</p>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
          </a>
        </div>
      </div>

    </div>
  );
}
