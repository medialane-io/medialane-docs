import type { Metadata } from "next";
import Link from "next/link";
import {
  Gift, Repeat2, Vote, CheckCircle2,
  PenLine, ShoppingCart, UserCheck, ArrowRight, Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Creator's Airdrop | Medialane DAO",
  description: "The Medialane Creator's Airdrop — a DAO-governed program distributing rewards to creators and early participants.",
  openGraph: {
    title: "Creator's Airdrop | Medialane DAO",
    description: "The Medialane Creator's Airdrop — a DAO-governed program distributing rewards to creators and early participants.",
    url: "https://docs.medialane.io/dao/airdrop",
  },
  twitter: {
    title: "Creator's Airdrop | Medialane DAO",
    description: "The Medialane Creator's Airdrop — a DAO-governed program distributing rewards to creators and early participants.",
  },
};

const TIERS = [
  {
    icon: UserCheck,
    tier: "Sign up — you're in",
    label: "Base tier",
    colorClass: "text-emerald-400",
    bgClass: "bg-emerald-500/10",
    actions: [
      "Create a free Medialane account",
      "Secure your account with PIN or passkey",
      "Claim your participation certificate (optional, free)",
    ],
    desc: "Every verified participant who completes sign-up is eligible for the base allocation if a distribution is approved by governance. Signing up is the only requirement for this tier.",
  },
  {
    icon: PenLine,
    tier: "Create",
    label: "Bonus tier",
    colorClass: "text-purple-400",
    bgClass: "bg-purple-500/10",
    actions: [
      "Publish at least one original piece of content",
      "Launch a collection or creator profile",
    ],
    desc: "Creators who publish original work are eligible for a bonus allocation on top of the base tier, subject to DAO approval of the distribution.",
  },
  {
    icon: ShoppingCart,
    tier: "Trade & Collect",
    label: "Bonus tier",
    colorClass: "text-orange-400",
    bgClass: "bg-orange-500/10",
    actions: [
      "Buy, sell, or make offers on the marketplace",
      "Collaborate or remix with other creators",
    ],
    desc: "Active participants who engage across creating and trading are eligible for an additional bonus tier, subject to DAO approval of the distribution.",
  },
];

const PHASES = [
  {
    phase: "Revenue to the treasury",
    trigger: "1% marketplace fee",
    items: [
      "Platform revenue flows to the Medialane DAO treasury",
      "Held transparently on-chain, governed by MDLN holders",
    ],
  },
  {
    phase: "Annual governance vote",
    trigger: "Every year",
    items: [
      "Each year, DAO members vote on Snapshot how Medialane's finances are used",
      "The choice sustains operations and funds the platform's growth",
      "Airdrop, buyback, burn, development, or operations — the members decide",
    ],
  },
  {
    phase: "The Creator's Airdrop",
    trigger: "One possible allocation",
    items: [
      "Returning revenue to creators and participants is one option members can choose",
      "It is not a guaranteed or automatic formula",
      "When approved, shares are weighted by participation across creating and trading",
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
        <h2 className="text-2xl font-bold">Creator&apos;s Airdrop</h2>
        <p className="text-muted-foreground leading-relaxed">
          The Creator&apos;s Airdrop rewards the people who build and use the platform — creators,
          collectors, and early participants. Every distribution is subject to DAO governance
          and verified on-chain. Signing up is enough to qualify for the base reward.
        </p>
      </div>

      {/* The model */}
      <div className="bento-cell p-6 space-y-3">
        <div className="flex items-center gap-2">
          <Repeat2 className="h-4 w-4 text-primary" />
          <h3 className="font-semibold text-sm">The Model</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          A 1% marketplace fee flows to the Medialane DAO treasury. Each year, MDLN holders vote on
          Snapshot to decide how that revenue is used — Creator&apos;s Airdrop, token buyback, token burn,
          protocol development, or operations. No predetermined formula. The Creator&apos;s Airdrop is one
          option among several, not a guarantee. See{" "}
          <Link href="/dev/fees" className="text-primary hover:underline">Fees &amp; Revenue</Link>{" "}
          for the canonical fee model.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          {[
            { label: "Revenue source", value: "1% marketplace fee" },
            { label: "Governed by",    value: "Snapshot DAO vote" },
            { label: "Cycle",          value: "Annual DAO vote" },
          ].map(({ label, value }) => (
            <div key={label} className="bg-muted/30 rounded-lg px-4 py-3 space-y-1">
              <p className="text-xs text-muted-foreground">{label}</p>
              <p className="text-sm font-semibold">{value}</p>
            </div>
          ))}
        </div>
        <a
          href="https://medialane.org/airdrop/fund"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors pt-1"
        >
          Track the Creator&apos;s Fund — live balance &amp; airdrops <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      {/* How it works */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">How It Works</h3>
        <p className="text-sm text-muted-foreground">
          Signing up makes you eligible for the base tier. Creating and trading activity
          makes you eligible for bonus tiers. All distributions require a DAO governance vote.
        </p>
        <div className="space-y-4">
          {TIERS.map(({ icon: Icon, tier, label, colorClass, bgClass, actions, desc }) => (
            <div key={tier} className="bento-cell p-5 space-y-3">
              <div className="flex items-start gap-3">
                <div className={`h-9 w-9 rounded-lg ${bgClass} flex items-center justify-center shrink-0 mt-0.5`}>
                  <Icon className={`h-4 w-4 ${colorClass}`} />
                </div>
                <div className="space-y-0.5 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-semibold text-sm">{tier}</p>
                    <span className={`text-xs font-medium ${colorClass}`}>{label}</span>
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
        <h3 className="text-lg font-semibold">How Revenue Is Decided</h3>
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

      {/* Governance */}
      <div className="bento-cell p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Vote className="h-4 w-4 text-primary" />
          <h3 className="font-semibold text-sm">Community Governance</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Every distribution is ratified by a community governance vote on Snapshot before
          it happens. MDLN token holders decide the amount, the rules, and the timing.
          If the community votes to fund, increase, decrease, or skip an airdrop for a given year,
          that decision stands.
        </p>
        <Link
          href="/dao/governance"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          Read the Governance Charter <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Legal note */}
      <div className="bento-cell p-5 space-y-2">
        <div className="flex items-center gap-2">
          <Shield className="h-4 w-4 text-muted-foreground" />
          <h3 className="font-semibold text-sm text-muted-foreground">Legal</h3>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          This campaign is not a financial product, investment scheme, lottery, or gambling service.
          Participation does not guarantee any financial return. Distributions are made at the sole
          discretion of Medialane DAO governance. See the{" "}
          <Link href="/guidelines/campaign-terms" className="underline underline-offset-2 hover:text-foreground transition-colors">
            Campaign Terms
          </Link>{" "}
          for the full legal text.
        </p>
      </div>

      {/* CTAs */}
      <div className="space-y-3">
        <h3 className="text-base font-semibold">Join the campaign</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href="https://medialane.io/airdrop"
            target="_blank"
            rel="noopener noreferrer"
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
            target="_blank"
            rel="noopener noreferrer"
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
