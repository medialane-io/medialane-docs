import Link from "next/link";
import {
  BookOpen, FileCode2, LifeBuoy, Info,
  ArrowRight, Code2, ExternalLink, Globe,
  LayoutGrid, Building2, FileCheck, Link2,
} from "lucide-react";

const SECTIONS = [
  {
    href: "/about",
    icon: Info,
    title: "About",
    description: "Discover Medialane — our vision, mission, the Mediolano protocol, and the foundation building the IP economy.",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10 group-hover:bg-brand-blue/15",
  },
  {
    href: "/apps",
    icon: LayoutGrid,
    title: "Apps",
    description: "Explore all Medialane applications — marketplace, Web3 dApp, developer portal, and the DAO governance platform.",
    color: "text-brand-purple",
    bg: "bg-brand-purple/10 group-hover:bg-brand-purple/15",
  },
  {
    href: "/learn",
    icon: BookOpen,
    title: "Learn",
    description: "NFTs, blockchain, zero-knowledge proofs, programmable IP, tokenization, and how Medialane works — for everyone.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10 group-hover:bg-brand-orange/15",
  },
  {
    href: "/docs",
    icon: FileCode2,
    title: "Docs",
    description: "Technical documentation — platform overview, protocol specs, SDK, API reference, contracts, and security.",
    color: "text-brand-rose",
    bg: "bg-brand-rose/10 group-hover:bg-brand-rose/15",
  },
  {
    href: "/guidelines",
    icon: FileCheck,
    title: "Guidelines",
    description: "Community standards, user policies, terms of use, privacy policy, and compliance guidelines for the platform.",
    color: "text-primary",
    bg: "bg-primary/10 group-hover:bg-primary/15",
  },
  {
    href: "/support",
    icon: LifeBuoy,
    title: "Support",
    description: "Frequently asked questions, troubleshooting guides, and a direct line to the team for unresolved issues.",
    color: "text-brand-rose",
    bg: "bg-brand-rose/10 group-hover:bg-brand-rose/15",
  },
  {
    href: "/dao",
    icon: Building2,
    title: "DAO",
    description: "Medialane DAO LLC — constitution, governance charter, MDLN token, Snapshot voting, and community participation.",
    color: "text-brand-purple",
    bg: "bg-brand-purple/10 group-hover:bg-brand-purple/15",
  },
  {
    href: "/links",
    icon: Link2,
    title: "Links",
    description: "Connect with Medialane across X, YouTube, GitHub, Telegram, and all official community channels.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10 group-hover:bg-brand-orange/15",
  },
];

const QUICK_LINKS = [
  { href: "/learn/nft",              label: "What is an NFT?" },
  { href: "/learn/blockchain",       label: "Blockchain Basics" },
  { href: "/learn/zero-knowledge",   label: "Zero Knowledge" },
  { href: "/docs/protocol",          label: "Protocol Docs" },
  { href: "/docs/api",               label: "API Reference" },
  { href: "/docs/sdk",               label: "SDK Guide" },
  { href: "/dao",                    label: "About the DAO" },
  { href: "/support",                label: "Get Support" },
];

export function HomePage() {
  return (
    <div className="container mx-auto px-4 pt-12 pb-20 max-w-5xl space-y-16">

      {/* Hero */}
      <div className="space-y-5">
        <span className="pill-badge">Knowledge Hub</span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
          Everything about<br />
          <span className="gradient-text">Medialane</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
          Documentation, guides, support, and institutional content for the
          Medialane IP marketplace — all in one place.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Start learning <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/docs/developers"
            className="inline-flex items-center gap-2 border border-border bg-background px-4 py-2 rounded-lg text-sm font-medium hover:bg-muted/40 transition-colors"
          >
            <Code2 className="h-4 w-4" /> Developer docs
          </Link>
        </div>
      </div>

      {/* Main sections */}
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

      {/* Quick links */}
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

      {/* Back to app */}
      <div className="bento-cell p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-primary" />
            <p className="font-semibold text-sm">Medialane Platform</p>
          </div>
          <p className="text-sm text-muted-foreground">
            Ready to mint, trade, or explore the IP marketplace?
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
