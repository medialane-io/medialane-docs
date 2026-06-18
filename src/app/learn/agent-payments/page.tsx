import type { Metadata } from "next";
import Link from "next/link";
import { Bot, Building2, Terminal, Coins, Sparkles } from "lucide-react";
import { Section } from "@/components/docs";

export const metadata: Metadata = {
  title: "Payments for AI Agents | Learn | Medialane",
  description:
    "How AI agents (and any software) pay to use Medialane — automatic, per-use micropayments in USDC, with no account, no card, and no human in the loop. The x402 standard, in plain language.",
  openGraph: {
    title: "Payments for AI Agents | Learn | Medialane",
    description:
      "How AI agents and any software pay to use Medialane — automatic per-use micropayments in USDC, no account or card, no human in the loop.",
    url: "https://docs.medialane.io/learn/agent-payments",
  },
  twitter: {
    title: "Payments for AI Agents | Learn | Medialane",
    description:
      "How AI agents and any software pay to use Medialane — automatic per-use micropayments in USDC, no account or card, no human in the loop.",
  },
};

const WHO = [
  {
    icon: Bot,
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
    border: "border-brand-purple/20",
    title: "Autonomous AI agents",
    desc: "An agent funds itself and uses the platform directly — discovering what things cost and paying for them on its own, with no person approving each step.",
  },
  {
    icon: Building2,
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/20",
    title: "Businesses & products",
    desc: "Usage-based access with no contracts, seats, or invoices. You pay only for the calls you make, and every payment is on-chain and easy to audit.",
  },
  {
    icon: Terminal,
    color: "text-brand-rose",
    bg: "bg-brand-rose/10",
    border: "border-brand-rose/20",
    title: "Any service that can sign",
    desc: "A wallet is the only identity needed. Any script, backend, or device that can sign a transaction can pay and use the platform — no sign-up required.",
  },
];

const STEPS = [
  { n: "1", title: "Ask", desc: "The software asks the API for something." },
  { n: "2", title: "Get a price", desc: "If it owes a payment, the API answers with the cost and where to send it — in a format machines can read." },
  { n: "3", title: "Pay", desc: "It sends a small USDC payment on Starknet — a fraction of a cent to a few cents, settled in seconds." },
  { n: "4", title: "Continue", desc: "It proves the payment and the request goes through. Funds last across many calls; it only pays again when they run low." },
];

export default function LearnAgentPaymentsPage() {
  return (
    <div className="space-y-10">

      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary/70">Payments</p>
        <h2 className="text-2xl font-bold">Payments for AI Agents</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Medialane lets software pay for what it uses — automatically, in seconds, with no
          account, no credit card, and no human clicking &ldquo;approve.&rdquo; This is how
          autonomous AI agents, and any program, buy access to the platform.
        </p>
      </div>

      <Section title="The idea">
        <p>
          On Medialane, AI agents are first-class users — they hold a wallet and pay their own
          way. Instead of a monthly subscription or a credit card on file, an agent pays a tiny
          amount per use, the moment it needs something. The open standard that makes this work
          is called <strong className="text-foreground">x402</strong> — payments carried over the
          web itself, machine to machine.
        </p>
      </Section>

      <Section title="Why it matters">
        <p>
          A human can fill in a signup form and type a card number. An autonomous agent can&apos;t —
          and shouldn&apos;t have to. It needs to pay the way it does everything else:
          programmatically, per request, without a person in the loop. Medialane was designed for
          that from day one, not bolted on later.
        </p>
        <ul className="space-y-2 list-disc list-inside">
          <li><strong className="text-foreground">Permissionless</strong> — no gatekeeper decides who is allowed. A wallet is the whole identity.</li>
          <li><strong className="text-foreground">Pay only for what you use</strong> — no subscriptions, no seats, no minimums.</li>
          <li><strong className="text-foreground">Open and verifiable</strong> — every payment settles on-chain in USDC, in the open, for anyone to check.</li>
        </ul>
      </Section>

      <Section title="Who it's for">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose">
          {WHO.map(({ icon: Icon, title, desc, color, bg, border }) => (
            <div key={title} className={`rounded-xl border ${border} bg-white/[0.02] p-5 space-y-3`}>
              <div className={`h-10 w-10 rounded-xl ${bg} flex items-center justify-center`}>
                <Icon className={`h-4.5 w-4.5 ${color}`} />
              </div>
              <p className="font-bold text-sm text-foreground">{title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="How it works">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 not-prose">
          {STEPS.map(({ n, title, desc }) => (
            <div key={n} className="rounded-xl border border-white/10 bg-white/[0.02] p-5 space-y-2">
              <div className="flex items-center gap-2">
                <span className="h-6 w-6 rounded-lg bg-primary/10 text-primary text-xs font-black flex items-center justify-center shrink-0">{n}</span>
                <p className="font-bold text-sm text-foreground">{title}</p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <p className="flex items-start gap-2 pt-1">
          <Coins className="h-4 w-4 text-brand-orange shrink-0 mt-0.5" />
          <span>Hold the MDLN token in the paying wallet and each payment buys more credits automatically — a bonus, never a requirement.</span>
        </p>
      </Section>

      <Section title="Why it's important for the future">
        <p className="flex items-start gap-2">
          <Sparkles className="h-4 w-4 text-brand-purple shrink-0 mt-0.5" />
          <span>
            More and more of the economy will run as software paying software — agents that
            discover, license, and settle on their own. Medialane treats that as a core capability,
            not an add-on: the same protocol, rights, and rails serve people and machines alike.
          </span>
        </p>
      </Section>

      <div className="rounded-xl border border-primary/20 bg-primary/[0.04] p-5">
        <p className="text-sm font-bold text-foreground mb-1">Building an agent?</p>
        <p className="text-sm text-muted-foreground">
          The <Link href="/dev/agents" className="text-primary hover:underline">Agent Quickstart</Link> walks
          through it in code — discovery, handling the payment request, and paying in USDC.
        </p>
      </div>

    </div>
  );
}
