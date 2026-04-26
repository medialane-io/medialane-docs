import Link from "next/link";
import {
  BookOpen, FileCode2, LifeBuoy, Info, ArrowRight, Code2,
  ExternalLink, Globe, LayoutGrid, Building2, FileCheck, Link2,
  Coins, GitBranch, Award, Tag, Package, RefreshCw,
  Sparkles, Bot, ShoppingBag, Terminal,
} from "lucide-react";

// ── Navigation sections ───────────────────────────────────────────────────────

const SECTIONS = [
  {
    href: "/about",
    icon: Info,
    title: "About",
    description: "Our vision, the Mediolano protocol, and why we're building the open IP economy.",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10 group-hover:bg-brand-blue/15",
  },
  {
    href: "/apps",
    icon: LayoutGrid,
    title: "Apps",
    description: "Marketplace, Web3 dApp, developer portal, and DAO platform — the full Medialane suite.",
    color: "text-brand-purple",
    bg: "bg-brand-purple/10 group-hover:bg-brand-purple/15",
  },
  {
    href: "/learn",
    icon: BookOpen,
    title: "Learn",
    description: "NFTs, blockchain, zero-knowledge, programmable IP, tokenization — for every level.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10 group-hover:bg-brand-orange/15",
  },
  {
    href: "/docs",
    icon: FileCode2,
    title: "Docs",
    description: "Protocol specs, SDK, API reference, smart contracts, and technical integration guides.",
    color: "text-brand-rose",
    bg: "bg-brand-rose/10 group-hover:bg-brand-rose/15",
  },
  {
    href: "/guidelines",
    icon: FileCheck,
    title: "Guidelines",
    description: "Community standards, user policies, terms of use, privacy, and compliance.",
    color: "text-primary",
    bg: "bg-primary/10 group-hover:bg-primary/15",
  },
  {
    href: "/support",
    icon: LifeBuoy,
    title: "Support",
    description: "Frequently asked questions, troubleshooting, and direct access to the team.",
    color: "text-brand-rose",
    bg: "bg-brand-rose/10 group-hover:bg-brand-rose/15",
  },
  {
    href: "/dao",
    icon: Building2,
    title: "DAO",
    description: "Constitution, governance charter, MDLN token, and community participation.",
    color: "text-brand-purple",
    bg: "bg-brand-purple/10 group-hover:bg-brand-purple/15",
  },
  {
    href: "/links",
    icon: Link2,
    title: "Links",
    description: "X, YouTube, GitHub, Telegram — all official Medialane community channels.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10 group-hover:bg-brand-orange/15",
  },
];

// ── Revenue streams ───────────────────────────────────────────────────────────

const REVENUE_STREAMS = [
  {
    icon: Coins,
    title: "Primary Sales",
    description: "Sell your creative work directly to collectors at any price, in any supported currency. No platform middleman taking a percentage of your first sale.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
  },
  {
    icon: RefreshCw,
    title: "Perpetual Royalties",
    description: "Set a royalty rate at mint time and earn automatically on every future resale — forever. No invoices, no chasing payments. The smart contract does it for you.",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
  },
  {
    icon: Tag,
    title: "Licensing Revenue",
    description: "License specific rights independently — commercial use, derivative creation, distribution. Charge for each license type separately, with terms enforced by code.",
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
  },
  {
    icon: Package,
    title: "Collection Drops",
    description: "Launch limited-edition drops with on-chain allowlists, custom pricing tiers, and timed availability. Full supply control, fully automated on Starknet.",
    color: "text-brand-rose",
    bg: "bg-brand-rose/10",
  },
  {
    icon: GitBranch,
    title: "Derivative Chains",
    description: "When another creator remixes or builds on your work, you earn from that too — automatically, up the full derivative chain. Every remix is a new revenue stream.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
  },
  {
    icon: Award,
    title: "POP Credentials",
    description: "Monetize community participation. Issue proof-of-participation credentials for events, milestones, and memberships. Build loyalty and unlock gated experiences.",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
  },
];

// ── Who it's for ──────────────────────────────────────────────────────────────

const PERSONAS = [
  {
    icon: Sparkles,
    title: "Human Creators",
    subtitle: "Artists · Musicians · Writers · Filmmakers · Designers",
    description:
      "Mint any creative work as an IP NFT. Set your own license terms. Earn royalties automatically on every resale. Launch collections and drops. No gallery, no publisher, no intermediary — just you and your audience.",
    cta: { label: "Start creating", href: "https://medialane.io", external: true },
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
    border: "hover:border-brand-purple/30",
  },
  {
    icon: Bot,
    title: "AI Agents",
    subtitle: "Autonomous · Accountable · First-class",
    description:
      "Autonomous intelligences are first-class participants on Medialane. AI agents can register IP, scan and enforce licenses, generate derivatives, trade assets, and earn revenue — with the same rights and accountability as any human creator.",
    cta: { label: "Explore the protocol", href: "/docs/protocol", external: false },
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    border: "hover:border-brand-orange/30",
  },
  {
    icon: Terminal,
    title: "Developers & Builders",
    subtitle: "APIs · SDK · Open Protocol",
    description:
      "Build on the open Mediolano protocol. Use the REST API and TypeScript SDK to integrate IP registration, licensing, and trading into any application. All contracts are open source and publicly verifiable.",
    cta: { label: "Read the docs", href: "/docs/developers", external: false },
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "hover:border-brand-blue/30",
  },
  {
    icon: ShoppingBag,
    title: "Collectors",
    subtitle: "Provenance · Ownership · Culture",
    description:
      "Discover and own unique intellectual property with cryptographic provenance — not a screenshot, not a link, but verifiable on-chain ownership. Support creators directly and earn from appreciating IP.",
    cta: { label: "Browse marketplace", href: "https://medialane.io", external: true },
    color: "text-brand-rose",
    bg: "bg-brand-rose/10",
    border: "hover:border-brand-rose/30",
  },
];

// ── Quick links ───────────────────────────────────────────────────────────────

const QUICK_LINKS = [
  { href: "/learn/programmable-ip",    label: "Programmable IP" },
  { href: "/learn/blockchain",         label: "Blockchain Basics" },
  { href: "/learn/zero-knowledge",     label: "Zero Knowledge" },
  { href: "/learn/integrity-web",      label: "Integrity Web" },
  { href: "/docs/protocol",            label: "Protocol Docs" },
  { href: "/docs/sdk",                 label: "SDK Guide" },
  { href: "/dao",                      label: "About the DAO" },
  { href: "/support",                  label: "Get Support" },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export function HomePage() {
  return (
    <div className="container mx-auto px-4 pt-12 pb-20 max-w-5xl space-y-20">

      {/* ── Hero ── */}
      <div className="space-y-6">
        <span className="pill-badge">The Open IP Economy</span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
          Own your creativity.<br />
          <span className="gradient-text">Earn from it forever.</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Medialane is the permissionless IP marketplace built on the Integrity Web.
          Mint any creative work, set programmable licenses, and earn automatic royalties —
          no gatekeepers, no intermediaries, for all intelligences.
        </p>
        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href="https://medialane.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Start creating <ExternalLink className="h-4 w-4" />
          </a>
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 border border-border bg-background px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-muted/40 transition-colors"
          >
            <BookOpen className="h-4 w-4" /> Learn how it works
          </Link>
          <Link
            href="/docs/developers"
            className="inline-flex items-center gap-2 border border-border bg-background px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-muted/40 transition-colors"
          >
            <Code2 className="h-4 w-4" /> Build on Medialane
          </Link>
        </div>
      </div>

      {/* ── Revenue streams ── */}
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary/70">Monetization</p>
          <h2 className="text-2xl font-bold">Six ways to earn from your creativity</h2>
          <p className="text-muted-foreground text-sm max-w-2xl">
            Every revenue stream is enforced by smart contracts — automatic, global, and permanent.
            No manual invoicing, no chasing payments, no platform that can change the rules on you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {REVENUE_STREAMS.map(({ icon: Icon, title, description, color, bg }) => (
            <div key={title} className="bento-cell p-5 space-y-3">
              <div className={`h-10 w-10 rounded-xl ${bg} flex items-center justify-center`}>
                <Icon className={`h-5 w-5 ${color}`} />
              </div>
              <h3 className="font-semibold text-sm">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          Royalties, licensing, and derivative earnings are distributed automatically by smart contracts on Starknet.{" "}
          <Link href="/learn/programmable-licensing" className="text-primary hover:underline">
            Learn how programmable licensing works →
          </Link>
        </p>
      </div>

      {/* ── Who it's for ── */}
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary/70">For All Intelligences</p>
          <h2 className="text-2xl font-bold">Built for creators, agents, and builders</h2>
          <p className="text-muted-foreground text-sm max-w-2xl">
            The Integrity Web has no gatekeepers. Whether you are human, autonomous, or something new —
            Medialane gives you the same tools, the same rights, and the same opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PERSONAS.map(({ icon: Icon, title, subtitle, description, cta, color, bg, border }) => (
            <div key={title} className={`bento-cell p-6 space-y-4 flex flex-col transition-colors ${border}`}>
              <div className="flex items-start gap-3">
                <div className={`h-10 w-10 rounded-xl ${bg} flex items-center justify-center shrink-0`}>
                  <Icon className={`h-5 w-5 ${color}`} />
                </div>
                <div>
                  <p className="font-bold text-sm">{title}</p>
                  <p className={`text-xs ${color} opacity-70 mt-0.5`}>{subtitle}</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{description}</p>

              {cta.external ? (
                <a
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 text-sm font-medium ${color} hover:opacity-80 transition-opacity`}
                >
                  {cta.label} <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ) : (
                <Link
                  href={cta.href}
                  className={`inline-flex items-center gap-1.5 text-sm font-medium ${color} hover:opacity-80 transition-opacity`}
                >
                  {cta.label} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Sections ── */}
      <div className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">Knowledge Hub</h2>
          <p className="text-muted-foreground text-sm">Everything you need to understand, build on, and participate in Medialane.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SECTIONS.map(({ href, icon: Icon, title, description, color, bg }) => (
            <Link key={href} href={href} className="group bento-cell p-6 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className={`h-11 w-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${bg}`}>
                  <Icon className={`h-5 w-5 ${color}`} />
                </div>
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-bold">{title}</p>
                    <ArrowRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Integrity Web callout ── */}
      <div className="bento-cell p-6 sm:p-8 space-y-4">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary/70">Philosophy</p>
          <h2 className="text-xl font-bold">Built on the Integrity Web</h2>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
          Medialane is a founding application of the Integrity Web — a movement declaring that
          digital ownership, licensing, and creativity should be provable, permissionless, and permanent.
          Ten axioms. One direction: <em className="text-foreground not-italic font-medium">Creativity is Integrity.</em>
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-1">
          {[
            "Code is Math", "Proof Replaces Trust", "Freedom is a Protocol",
            "Integrity by Design", "Public Goods are Sacred",
            "Privacy is Power", "Decentralization is Resilience",
            "Universality of Intelligences", "Creativity is Integrity",
            "For Everyone",
          ].map((axiom, i) => (
            <div key={axiom} className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="text-primary/50 font-mono shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <span>{axiom}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 pt-1">
          <a
            href="https://www.integrityweb.xyz/axioms"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Read the manifesto <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <Link
            href="/learn/integrity-web"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Learn about the Integrity Web <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {/* ── Quick links ── */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Quick links</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {QUICK_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-3 py-2.5 rounded-lg border border-border/60 text-sm text-muted-foreground hover:text-foreground hover:border-border hover:bg-muted/30 transition-all"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* ── Back to app ── */}
      <div className="bento-cell p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-primary" />
            <p className="font-semibold text-sm">Ready to start?</p>
          </div>
          <p className="text-sm text-muted-foreground">
            Mint your first IP NFT, explore the marketplace, or connect your wallet.
          </p>
        </div>
        <a
          href="https://medialane.io"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shrink-0"
        >
          Open Medialane <ExternalLink className="h-4 w-4" />
        </a>
      </div>

    </div>
  );
}
