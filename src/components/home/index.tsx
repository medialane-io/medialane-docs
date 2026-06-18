import Link from "next/link";
import {
  BookOpen, FileCode2, LifeBuoy, Info, ArrowRight,
  ExternalLink, LayoutGrid, Building2, FileCheck, Link2,
  Rocket, Store, Lock, Infinity as InfinityIcon, ShieldCheck, Bot, Eye,
  Terminal,
} from "lucide-react";
import { PageContainer } from "@/components/page-container";

// ── The two commercial hubs (core-model §Context) ──
const HUBS = [
  {
    icon: Rocket,
    name: "Launchpad",
    tagline: "Structure capital from your IP",
    description:
      "Turn creative work into revenue products — collection drops, NFT editions, memberships and subscriptions, tickets, commissions, creator coins, and more. New product types are added as services, so the ways to monetize stay open-ended — never a fixed menu.",
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
    border: "border-brand-purple/20",
  },
  {
    icon: Store,
    name: "Marketplace",
    tagline: "Trade every tokenized asset",
    description:
      "A high-integrity secondary exchange for buying, selling, auctioning, licensing, and remixing IP. Atomic settlement — payment and asset move in one transaction, or both revert. No custody, no escrow, interoperable with the wider ecosystem, minimal fees.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    border: "border-brand-orange/20",
  },
];

// ── How Medialane works (principles 00, distilled) ──
const PRINCIPLES = [
  {
    icon: Lock,
    title: "The contract is the only authority",
    description:
      "Immutable Cairo contracts with no admin key, no upgrade path, no pause. If the contract accepts your call, it happens — no one can change the rules, including us.",
  },
  {
    icon: InfinityIcon,
    title: "Permissionless and open-ended",
    description:
      "Anyone can create, trade, license, build, and integrate without asking. The protocol grows by adding services — an extensible set of monetization primitives, not a closed list.",
  },
  {
    icon: ShieldCheck,
    title: "Real, protected ownership",
    description:
      "Built on Mediolano's zero-fee tokenization and aligned with the Berne Convention, so authorship is recognized across its 181 member countries. Ownership lives in immutable metadata.",
  },
  {
    icon: Bot,
    title: "For humans, organizations, and agents",
    description:
      "Autonomous AI agents are first-class participants — same protocol, same rights, same fees as any person or organization. No special integration, no separate rules.",
  },
  {
    icon: Eye,
    title: "Open and verifiable",
    description:
      "Contracts, the TypeScript SDK, and the indexer are open source; deployed addresses are public. Verify exactly what the code does before you trust it.",
  },
  {
    icon: Building2,
    title: "A public good, DAO-stewarded",
    description:
      "Medialane is protocol-first: the apps are reference clients over a public-good protocol governed by the Medialane DAO and the MDLN token.",
  },
];

// ── Machine-native payments — x402 (principles 00 §6, foundations 10 §15) ──
const AGENT_PAYMENT_USE_CASES = [
  {
    icon: Bot,
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
    title: "Autonomous AI agents",
    description:
      "An agent funds itself, calls the API, and tops up on-chain when credits run low — discovering prices and settling machine-to-machine, with no operator in the loop.",
  },
  {
    icon: Building2,
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    title: "Businesses & products",
    description:
      "Usage-based access with no seats, contracts, or invoices. Every call is metered and every payment is on-chain and verifiable — pay only for what you use.",
  },
  {
    icon: Terminal,
    color: "text-brand-rose",
    bg: "bg-brand-rose/10",
    title: "Any service that can sign",
    description:
      "Permissionless by design — a wallet keypair is the whole identity. Any script, backend, or device that can sign a transaction can pay and consume the API.",
  },
];

const X402_STEPS = [
  { n: "1", title: "Discover", description: "A machine-readable endpoint publishes prices and payment details — agents read it like code." },
  { n: "2", title: "Call", description: "Hit any endpoint with your key. Out of credits? You get a standard 402 with payment instructions." },
  { n: "3", title: "Pay", description: "Send a USDC micropayment on Starknet to the address in the 402 — settled on-chain in seconds." },
  { n: "4", title: "Continue", description: "Retry with proof of payment; credits apply and the call goes through. Hold MDLN for a bonus." },
];

// ── Knowledge hub — where to go next ──
const SECTIONS = [
  {
    href: "/learn",
    icon: BookOpen,
    title: "Learn",
    description: "Start here. Programmable IP, licensing, remix, tokenization, and zero-knowledge — the concepts behind the protocol.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10 group-hover:bg-brand-orange/20",
  },
  {
    href: "/dev",
    icon: FileCode2,
    title: "Docs",
    description: "Build on Medialane. Protocol specification, SDK, API reference, smart-contract addresses, and integration guides.",
    color: "text-brand-rose",
    bg: "bg-brand-rose/10 group-hover:bg-brand-rose/20",
  },
  {
    href: "/apps",
    icon: LayoutGrid,
    title: "Apps",
    description: "Use the platform. Creator Launchpad, Marketplace, the Web3 dApp, developer portal, and the DAO.",
    color: "text-brand-purple",
    bg: "bg-brand-purple/10 group-hover:bg-brand-purple/20",
  },
  {
    href: "/dao",
    icon: Building2,
    title: "DAO",
    description: "Govern the protocol. Constitution, governance charter, the MDLN token, and treasury.",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10 group-hover:bg-brand-blue/20",
  },
  {
    href: "/about",
    icon: Info,
    title: "About",
    description: "The vision, the Mediolano substrate, and how the protocol is architected.",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10 group-hover:bg-brand-blue/20",
  },
  {
    href: "/guidelines",
    icon: FileCheck,
    title: "Guidelines",
    description: "Community standards, user policies, terms, privacy, and compliance.",
    color: "text-primary",
    bg: "bg-primary/10 group-hover:bg-primary/20",
  },
  {
    href: "/support",
    icon: LifeBuoy,
    title: "Support",
    description: "FAQs, troubleshooting, and direct access to the team.",
    color: "text-brand-rose",
    bg: "bg-brand-rose/10 group-hover:bg-brand-rose/20",
  },
  {
    href: "/links",
    icon: Link2,
    title: "Links",
    description: "Official channels — X, YouTube, GitHub, Telegram.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10 group-hover:bg-brand-orange/20",
  },
];

// ── Browse-by-topic directory (every learn/docs page, grouped by intent) ──
const TOPIC_GROUPS = [
  {
    heading: "Learn",
    color: "text-brand-orange",
    links: [
      { href: "/learn/programmable-ip", label: "Programmable IP" },
      { href: "/learn/programmable-licensing", label: "Licensing" },
      { href: "/learn/remix", label: "Remix" },
      { href: "/learn/tokenization", label: "Tokenization" },
      { href: "/learn/nft", label: "NFTs" },
      { href: "/learn/marketplace", label: "Marketplace" },
      { href: "/learn/services", label: "Services" },
      { href: "/learn/identity", label: "Identity" },
      { href: "/learn/protect-your-ip", label: "Protect Your IP" },
      { href: "/learn/web3", label: "Web3 & Blockchain" },
      { href: "/learn/zero-knowledge", label: "Zero-Knowledge" },
    ],
  },
  {
    heading: "Launchpad & Services",
    color: "text-brand-purple",
    links: [
      { href: "/learn/creator-launchpad", label: "Creator Launchpad" },
      { href: "/learn/collection-drop", label: "Collection Drops" },
      { href: "/learn/ip-collection-1155", label: "NFT Editions" },
      { href: "/learn/pop-protocol", label: "POP Protocol" },
      { href: "/learn/integrity-web", label: "Integrity Web" },
    ],
  },
  {
    heading: "Build",
    color: "text-brand-rose",
    links: [
      { href: "/dev/protocol", label: "Protocol" },
      { href: "/dev/sdk", label: "SDK" },
      { href: "/dev/api", label: "API Reference" },
      { href: "/dev/contracts", label: "Smart Contracts" },
      { href: "/dev/architecture", label: "Architecture" },
      { href: "/dev/agents", label: "AI Agents" },
      { href: "/dev/developers", label: "Developers" },
      { href: "/dev/fees", label: "Fees" },
      { href: "/dev/security", label: "Security" },
      { href: "/dev/changelog", label: "Changelog" },
    ],
  },
  {
    heading: "Govern & Policies",
    color: "text-brand-blue",
    links: [
      { href: "/dao", label: "DAO" },
      { href: "/dev/governance", label: "Governance" },
      { href: "/guidelines/compliance", label: "Compliance" },
      { href: "/guidelines/community", label: "Community" },
      { href: "/guidelines/user-guidelines", label: "User Guidelines" },
      { href: "/guidelines", label: "All Guidelines" },
    ],
  },
];

export function HomePage() {
  return (
    <PageContainer className="pt-8 space-y-20">

      {/* ── Hero ── */}
      <div className="relative overflow-hidden rounded-3xl">
        <div className="aurora-purple w-[460px] h-[460px] -top-28 -left-20 animate-blob" style={{ position: "absolute" }} />
        <div className="aurora-blue w-[360px] h-[360px] -top-12 right-0 animate-blob-slow" style={{ position: "absolute" }} />

        <div className="relative space-y-6 py-12 px-2 max-w-3xl">
          <span className="pill-badge">Knowledge Hub</span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
            Monetization for the<br />
            <span className="gradient-text">creative economy.</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Medialane lets humans, organizations, and AI agents turn intellectual property
            into revenue streams — with full sovereignty over their assets and identity.
            Open, permissionless, and built on immutable smart contracts. Live on Starknet.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
            >
              <BookOpen className="h-4 w-4" /> Start with the basics
            </Link>
            <Link
              href="/dev"
              className="inline-flex items-center gap-2 border border-border/60 bg-background/60 backdrop-blur-sm px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-muted/60 transition-all"
            >
              <FileCode2 className="h-4 w-4" /> Read the protocol docs
            </Link>
            <a
              href="https://medialane.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border/60 bg-background/60 backdrop-blur-sm px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-muted/60 transition-all"
            >
              Open the app <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* ── Two hubs ── */}
      <div className="space-y-6">
        <div className="space-y-3 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Two hubs, <span className="gradient-text">one protocol</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Medialane builds a commercial layer on top of Mediolano&apos;s zero-fee,
            Berne-aligned tokenization. Both hubs are permissionless, and both protocols
            are zero-fee — any fee is applied at the platform layer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {HUBS.map(({ icon: Icon, name, tagline, description, color, bg, border }) => (
            <div key={name} className={`bento-cell p-6 space-y-3 border ${border}`}>
              <div className="flex items-center gap-3">
                <div className={`h-11 w-11 rounded-xl ${bg} flex items-center justify-center shrink-0`}>
                  <Icon className={`h-5 w-5 ${color}`} />
                </div>
                <div>
                  <p className={`font-black text-base ${color}`}>{name}</p>
                  <p className="text-xs text-muted-foreground">{tagline}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── How it works ── */}
      <div className="space-y-6">
        <div className="space-y-3 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            How Medialane <span className="gradient-text-warm">works</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A few load-bearing ideas shape everything. They&apos;re what make Medialane a
            protocol creators can rely on — not a platform that can change the rules underneath them.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PRINCIPLES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bento-cell p-5 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-muted flex items-center justify-center">
                <Icon className="h-4.5 w-4.5 text-primary" />
              </div>
              <h3 className="font-bold text-sm">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Machine-native payments (x402) ── */}
      <div className="space-y-6">
        <div className="space-y-3 max-w-2xl">
          <span className="pill-badge">x402 · pay-per-call</span>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Payments built for <span className="gradient-text">machines</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Agents are first-class users on Medialane — and they pay like one. The API speaks{" "}
            <strong className="text-foreground">x402</strong>, the open HTTP standard for machine
            payments: a request returns a price, the agent pays per call in USDC on Starknet, and
            continues. No email, no OAuth, no credit card, no human in the loop — a wallet keypair
            is the only identity it needs. Designed for machine-to-machine from day one, not retrofitted.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {AGENT_PAYMENT_USE_CASES.map(({ icon: Icon, title, description, color, bg }) => (
            <div key={title} className="bento-cell p-5 space-y-3">
              <div className={`h-10 w-10 rounded-xl ${bg} flex items-center justify-center`}>
                <Icon className={`h-4.5 w-4.5 ${color}`} />
              </div>
              <h3 className="font-bold text-sm">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {X402_STEPS.map(({ n, title, description }) => (
            <div key={n} className="bento-cell p-5 space-y-2">
              <div className="flex items-center gap-2">
                <span className="h-6 w-6 rounded-lg bg-primary/10 text-primary text-xs font-black flex items-center justify-center shrink-0">{n}</span>
                <h3 className="font-bold text-sm">{title}</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <Link
          href="/dev/agents"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
        >
          <Bot className="h-4 w-4" /> Read the agent quickstart
        </Link>
      </div>

      {/* ── Knowledge hub ── */}
      <div className="space-y-6">
        <div className="space-y-3 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Explore the <span className="gradient-text">hub</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Everything you need to understand, build on, and use Medialane.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {SECTIONS.map(({ href, icon: Icon, title, description, color, bg }) => (
            <Link
              key={href}
              href={href}
              className="group bento-cell p-5 hover:border-primary/20 hover:scale-[1.01] transition-all"
            >
              <div className="flex items-start gap-4">
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${bg}`}>
                  <Icon className={`h-4.5 w-4.5 ${color}`} />
                </div>
                <div className="space-y-1 flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className={`font-bold text-sm ${color}`}>{title}</p>
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Browse by topic — full directory */}
        <div className="space-y-4 pt-4">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">Browse by topic</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-7">
            {TOPIC_GROUPS.map(({ heading, color, links }) => (
              <div key={heading} className="space-y-2.5">
                <p className={`text-xs font-bold uppercase tracking-wider ${color}`}>{heading}</p>
                <ul className="space-y-1.5">
                  {links.map(({ href, label }) => (
                    <li key={href}>
                      <Link href={href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

    </PageContainer>
  );
}
