import Link from "next/link";
import {
  BookOpen, FileCode2, LifeBuoy, Info, ArrowRight, Code2,
  ExternalLink, Globe, LayoutGrid, Building2, FileCheck, Link2,
  Coins, GitBranch, Award, Tag, Package, RefreshCw,
  Sparkles, Bot, ShoppingBag, Terminal, TrendingUp,
} from "lucide-react";

const SECTIONS = [
  {
    href: "/about",
    icon: Info,
    title: "About",
    description: "Our vision, the Mediolano protocol, and why we're building the open creator capital market.",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10 group-hover:bg-brand-blue/20",
  },
  {
    href: "/apps",
    icon: LayoutGrid,
    title: "Apps",
    description: "Creator launchpad, marketplace, Web3 dApp, developer portal, and DAO — the full Medialane suite.",
    color: "text-brand-purple",
    bg: "bg-brand-purple/10 group-hover:bg-brand-purple/20",
  },
  {
    href: "/learn",
    icon: BookOpen,
    title: "Learn",
    description: "NFTs, programmable IP, tokenization, zero-knowledge — for creators, developers, and collectors.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10 group-hover:bg-brand-orange/20",
  },
  {
    href: "/docs",
    icon: FileCode2,
    title: "Docs",
    description: "Protocol specs, SDK, API reference, smart contracts, and technical integration guides.",
    color: "text-brand-rose",
    bg: "bg-brand-rose/10 group-hover:bg-brand-rose/20",
  },
  {
    href: "/guidelines",
    icon: FileCheck,
    title: "Guidelines",
    description: "Community standards, user policies, terms of use, privacy, and compliance.",
    color: "text-primary",
    bg: "bg-primary/10 group-hover:bg-primary/20",
  },
  {
    href: "/support",
    icon: LifeBuoy,
    title: "Support",
    description: "Frequently asked questions, troubleshooting, and direct access to the team.",
    color: "text-brand-rose",
    bg: "bg-brand-rose/10 group-hover:bg-brand-rose/20",
  },
  {
    href: "/dao",
    icon: Building2,
    title: "DAO",
    description: "Constitution, governance charter, MDLN token, and community participation.",
    color: "text-brand-purple",
    bg: "bg-brand-purple/10 group-hover:bg-brand-purple/20",
  },
  {
    href: "/links",
    icon: Link2,
    title: "Links",
    description: "X, YouTube, GitHub, Telegram — all official Medialane community channels.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10 group-hover:bg-brand-orange/20",
  },
];

const REVENUE_STREAMS = [
  {
    icon: Coins,
    title: "Primary Sales",
    description: "Sell directly to collectors at any price, in any supported currency. No platform cut on your first sale.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    border: "border-brand-orange/20",
  },
  {
    icon: RefreshCw,
    title: "Perpetual Royalties",
    description: "Set your royalty rate once and earn automatically on every future resale — forever. No invoicing, no chasing.",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/20",
  },
  {
    icon: Tag,
    title: "Licensing Revenue",
    description: "License specific rights independently — commercial use, derivatives, distribution — each at its own price.",
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
    border: "border-brand-purple/20",
  },
  {
    icon: Package,
    title: "Collection Drops",
    description: "Launch limited drops with on-chain allowlists, custom pricing tiers, and timed availability.",
    color: "text-brand-rose",
    bg: "bg-brand-rose/10",
    border: "border-brand-rose/20",
  },
  {
    icon: GitBranch,
    title: "Derivative Chains",
    description: "When someone remixes your work, you earn from that too — automatically, up the full derivative chain.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    border: "border-brand-orange/20",
  },
  {
    icon: Award,
    title: "POP Credentials",
    description: "Monetize community access. Issue proof-of-participation credentials for events, milestones, memberships.",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/20",
  },
];

const PERSONAS = [
  {
    icon: Sparkles,
    title: "Human Creators",
    subtitle: "Artists · Musicians · Writers · Filmmakers · Designers",
    description:
      "Turn your creative work into capital. Mint as IP NFTs, set your own license terms, earn royalties automatically on every resale. Launch collections and drops — no gallery, no publisher, no gatekeeper.",
    cta: { label: "Start creating", href: "https://medialane.io", external: true },
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
    glow: "hover:shadow-[0_0_30px_hsl(271_81%_56%/0.12)]",
    border: "hover:border-brand-purple/30",
  },
  {
    icon: Bot,
    title: "AI Agents",
    subtitle: "Autonomous · Accountable · First-class",
    description:
      "Autonomous intelligences are first-class participants. AI agents can register IP, enforce licenses, generate derivatives, and earn revenue — with identical rights and accountability as any human creator.",
    cta: { label: "Explore the protocol", href: "/docs/protocol", external: false },
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    glow: "hover:shadow-[0_0_30px_hsl(21_90%_44%/0.12)]",
    border: "hover:border-brand-orange/30",
  },
  {
    icon: Terminal,
    title: "Developers & Builders",
    subtitle: "APIs · SDK · Open Protocol",
    description:
      "Build on the open Mediolano protocol. REST API, TypeScript SDK, open-source Cairo contracts. Integrate IP registration, licensing, and trading into any product — no permission required.",
    cta: { label: "Read the docs", href: "/docs/developers", external: false },
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    glow: "hover:shadow-[0_0_30px_hsl(221_83%_53%/0.12)]",
    border: "hover:border-brand-blue/30",
  },
  {
    icon: ShoppingBag,
    title: "Collectors",
    subtitle: "Provenance · Ownership · Culture",
    description:
      "Own unique intellectual property with on-chain provenance — not a screenshot, but verifiable ownership. Support creators directly and participate in an open market for creative capital.",
    cta: { label: "Browse marketplace", href: "https://medialane.io", external: true },
    color: "text-brand-rose",
    bg: "bg-brand-rose/10",
    glow: "hover:shadow-[0_0_30px_hsl(350_89%_60%/0.12)]",
    border: "hover:border-brand-rose/30",
  },
];

const STATS = [
  { value: "1,977", label: "Creative Works", color: "text-brand-purple" },
  { value: "100+", label: "Collections", color: "text-brand-blue" },
  { value: "6", label: "Revenue Streams", color: "text-brand-orange" },
  { value: "181", label: "Countries Protected", color: "text-brand-rose" },
];

const QUICK_LINKS = [
  { href: "/learn/programmable-ip",  label: "Programmable IP" },
  { href: "/learn/blockchain",       label: "Blockchain Basics" },
  { href: "/learn/zero-knowledge",   label: "Zero Knowledge" },
  { href: "/learn/integrity-web",    label: "Integrity Web" },
  { href: "/docs/protocol",          label: "Protocol Docs" },
  { href: "/docs/sdk",               label: "SDK Guide" },
  { href: "/dao",                    label: "About the DAO" },
  { href: "/support",                label: "Get Support" },
];

export function HomePage() {
  return (
    <div className="container mx-auto px-4 pt-8 pb-20 max-w-5xl space-y-20">

      {/* ── Hero ── */}
      <div className="relative overflow-hidden rounded-3xl">
        {/* Aurora backdrop */}
        <div className="aurora-purple w-[500px] h-[500px] -top-32 -left-24 animate-blob" style={{ position: "absolute" }} />
        <div className="aurora-blue w-[400px] h-[400px] -top-16 right-0 animate-blob-slow" style={{ position: "absolute" }} />
        <div className="aurora-rose w-[300px] h-[300px] bottom-0 right-1/4 animate-blob-slow" style={{ position: "absolute" }} />

        <div className="relative space-y-7 py-10 px-2">
          <span className="pill-badge">Creator Capital Markets</span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.0]">
            Create.<br />
            <span className="gradient-text">Own.</span><br />
            <span className="gradient-text-warm">Earn.</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Medialane is the permissionless creator launchpad where creative work becomes
            capital — with verifiable ownership,  and access to
            a global market. No gatekeepers. No intermediaries. For all intelligences.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://medialane.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 hover:scale-[1.02]"
            >
              Start creating <ExternalLink className="h-4 w-4" />
            </a>
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 border border-border/60 bg-background/60 backdrop-blur-sm px-5 py-3 rounded-xl text-sm font-medium hover:bg-muted/60 transition-all"
            >
              <BookOpen className="h-4 w-4" /> How it works
            </Link>
            <Link
              href="/docs/developers"
              className="inline-flex items-center gap-2 border border-border/60 bg-background/60 backdrop-blur-sm px-5 py-3 rounded-xl text-sm font-medium hover:bg-muted/60 transition-all"
            >
              <Code2 className="h-4 w-4" /> Build on Medialane
            </Link>
          </div>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {STATS.map(({ value, label, color }) => (
          <div key={label} className="bento-cell p-5 text-center space-y-1">
            <p className={`text-3xl font-black ${color}`}>{value}</p>
            <p className="text-xs text-muted-foreground font-medium">{label}</p>
          </div>
        ))}
      </div>

      {/* ── Revenue streams ── */}
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-brand-orange/10 flex items-center justify-center">
              <TrendingUp className="h-4 w-4 text-brand-orange" />
            </div>
            <h2 className="text-3xl font-black tracking-tight">
              Six ways to earn<br className="sm:hidden" />
              <span className="gradient-text-warm"> from your creativity</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Every revenue stream runs on smart contracts — automatic, global, permanent.
            No invoicing, no chasing, no platform that changes the rules.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {REVENUE_STREAMS.map(({ icon: Icon, title, description, color, bg, border }) => (
            <div key={title} className={`bento-cell p-5 space-y-3 border ${border} hover:scale-[1.01] transition-transform`}>
              <div className={`h-11 w-11 rounded-xl ${bg} flex items-center justify-center`}>
                <Icon className={`h-5 w-5 ${color}`} />
              </div>
              <h3 className={`font-bold text-sm ${color}`}>{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          All earnings are distributed automatically by smart contracts — no manual claims, no platform delays.{" "}
          <Link href="/learn/programmable-licensing" className="text-primary hover:underline">
            How programmable licensing works →
          </Link>
        </p>
      </div>

      {/* ── Who it's for ── */}
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-brand-purple/10 flex items-center justify-center">
              <Globe className="h-4 w-4 text-brand-purple" />
            </div>
            <h2 className="text-3xl font-black tracking-tight">
              For <span className="gradient-text">all intelligences</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Permissionless means exactly that. Human, autonomous, or something entirely new —
            Medialane gives you the same tools, rights, and opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PERSONAS.map(({ icon: Icon, title, subtitle, description, cta, color, bg, glow, border }) => (
            <div key={title} className={`bento-cell p-6 space-y-4 flex flex-col transition-all ${border} ${glow}`}>
              <div className="flex items-start gap-3">
                <div className={`h-11 w-11 rounded-xl ${bg} flex items-center justify-center shrink-0`}>
                  <Icon className={`h-5 w-5 ${color}`} />
                </div>
                <div>
                  <p className={`font-black text-base ${color}`}>{title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{description}</p>

              {cta.external ? (
                <a
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 text-sm font-bold ${color} hover:opacity-80 transition-opacity`}
                >
                  {cta.label} <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ) : (
                <Link
                  href={cta.href}
                  className={`inline-flex items-center gap-1.5 text-sm font-bold ${color} hover:opacity-80 transition-opacity`}
                >
                  {cta.label} <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Knowledge Hub ── */}
      <div className="space-y-6">
        <h2 className="text-3xl font-black tracking-tight">
          Knowledge <span className="gradient-text">Hub</span>
        </h2>

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
      </div>

      {/* ── Integrity Web callout ── */}
      <div className="relative bento-cell p-6 sm:p-8 overflow-hidden">
        <div className="aurora-purple w-64 h-64 -bottom-16 -right-16 animate-blob" style={{ position: "absolute" }} />
        <div className="relative space-y-4">
          <div className="space-y-1">
            <span className="pill-badge">Philosophy</span>
          </div>
          <h2 className="text-2xl font-black">
            Built on the <span className="gradient-text">Integrity Web</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
            Medialane is a founding application of the Integrity Web — a movement declaring
            that digital ownership should be provable, permissionless, and permanent.
            Ten axioms. One direction:{" "}
            <em className="text-foreground not-italic font-bold">Creativity is Integrity.</em>
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
                <span className="text-primary/60 font-mono font-bold shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span>{axiom}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 pt-1">
            <a
              href="https://www.integrityweb.xyz/axioms"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary/80 transition-colors"
            >
              Read the manifesto <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <Link
              href="/learn/integrity-web"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary/80 transition-colors"
            >
              Explore the axioms <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Quick links ── */}
      <div className="space-y-4">
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">Quick links</p>
        <div className="flex flex-wrap gap-2">
          {QUICK_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm px-3.5 py-1.5 rounded-full border border-border/60 bg-card hover:border-primary/30 hover:text-primary transition-all"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
