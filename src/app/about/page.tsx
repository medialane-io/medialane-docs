import type { Metadata } from "next";
import Link from "next/link";
import {
  Lock, Zap, Unlock, Bot, Users, BookOpen,
  Database, Package, Monitor,
  ExternalLink, Shield,
} from "lucide-react";
import { PageContainer } from "@/components/page-container";

export const metadata: Metadata = {
  title: "About | Medialane",
  description: "Medialane is a monetization hub for the creative economy — turn intellectual property into revenue streams with full sovereignty. Open, permissionless, immutable. Live on Starknet.",
  openGraph: {
    title: "About | Medialane",
    description: "Medialane is a monetization hub for the creative economy — turn intellectual property into revenue streams with full sovereignty. Open, permissionless, immutable. Live on Starknet.",
    url: "https://docs.medialane.io/about",
  },
  twitter: {
    title: "About | Medialane",
    description: "Medialane is a monetization hub for the creative economy — turn intellectual property into revenue streams with full sovereignty. Open, permissionless, immutable. Live on Starknet.",
  },
};

const HUBS = [
  {
    label: "Launchpad",
    desc: "Structure capital from your IP — collection drops, NFT editions, memberships, tickets, commissions, creator coins, and more. New product types are added as services, so the ways to monetize stay open-ended.",
    href: "/learn/creator-launchpad",
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
    border: "border-brand-purple/20",
  },
  {
    label: "Marketplace",
    desc: "Trade every tokenized asset — buy, sell, auction, license, and remix. Atomic settlement: payment and asset move in one transaction, or both revert. No escrow, no custody.",
    href: "/learn/marketplace",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    border: "border-brand-orange/20",
  },
];

// The Launchpad's products are open-ended services, not a fixed set (architecture 05).
const SERVICE_LINKS = [
  { href: "/learn/services", label: "Services model" },
  { href: "/learn/creator-launchpad", label: "Creator Launchpad" },
  { href: "/learn/collection-drop", label: "Collection Drops" },
  { href: "/learn/ip-collection-1155", label: "NFT Editions" },
  { href: "/learn/pop-protocol", label: "POP Protocol" },
];

const LAYERS = [
  {
    num: "01",
    label: "Chain",
    icon: Lock,
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
    desc: "Immutable Cairo contracts on Starknet. The only truth. No admin can change the rules.",
  },
  {
    num: "02",
    label: "Indexer",
    icon: Database,
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    desc: "Reads chain events, builds a queryable cache. Drop the database — it rebuilds from scratch.",
  },
  {
    num: "03",
    label: "SDK",
    icon: Package,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    desc: "Typed interface + service registry. Everything the app does, the SDK exposes.",
  },
  {
    num: "04",
    label: "Apps",
    icon: Monitor,
    color: "text-brand-rose",
    bg: "bg-brand-rose/10",
    desc: "medialane.io and partner apps. Views, UX, fees. Cannot override what the contracts say.",
  },
];

const DESIGN_CHOICES = [
  {
    icon: Lock,
    title: "No admin keys",
    desc: "The contracts have no owner role, no upgrade path, and no emergency pause. Once deployed, no one can change the rules — including us.",
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
  },
  {
    icon: Zap,
    title: "No custody",
    desc: "Sales settle via atomic swap. The marketplace contract never holds buyer funds — the payment and the NFT transfer in the same transaction, or both revert.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
  },
  {
    icon: Unlock,
    title: "No approval required",
    desc: "Any wallet can mint, list, make offers, and deploy collections. There is no whitelist, no application process, and no content moderation at the contract level.",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
  },
  {
    icon: Bot,
    title: "AI agents as first-class users",
    desc: "The contracts make no distinction between a human and an AI agent. Same API, same fees, same protocol capabilities. No special integration required.",
    color: "text-brand-rose",
    bg: "bg-brand-rose/10",
  },
  {
    icon: Users,
    title: "Community governance",
    desc: "The MDLN token gives holders voting rights on Snapshot. All platform revenue flows to the DAO treasury, governed by token holders.",
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
  },
  {
    icon: BookOpen,
    title: "Everything is auditable",
    desc: "All contracts, the TypeScript SDK, and the indexer are open source. The deployed contract addresses are public. Anyone can verify what the code does before using it.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
  },
];

const STARKNET_REASONS = [
  { label: "Quantum-resistant", desc: "ZK-STARK proofs rely on hash functions, not elliptic curves. Safe from future quantum computing threats." },
  { label: "No trusted setup", desc: "No ceremony that could be compromised. The security is fully transparent and verifiable by anyone." },
  { label: "Account abstraction", desc: "Native AA means session keys, gasless UX, and smart wallet capabilities at the protocol level." },
  { label: "Verifiable computation", desc: "Every transaction is backed by a validity proof — math, not trust." },
];

export default function AboutPage() {
  return (
    <PageContainer className="space-y-16">

      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl bento-cell p-10 sm:p-14 space-y-5">
        <div className="aurora-purple w-[500px] h-[500px] -top-32 -right-20 animate-blob" style={{ position: "absolute" }} />
        <div className="aurora-blue w-[300px] h-[300px] bottom-0 left-0 animate-blob-slow" style={{ position: "absolute" }} />
        <div className="relative space-y-5">
          <span className="pill-badge">About Medialane</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
            <span className="gradient-text">Built for creators.</span>
            <br />Built to last.
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            Medialane is a monetization hub for the creative economy. Humans, organizations,
            and AI agents turn intellectual property into revenue streams — with full sovereignty
            over their assets and identity. Open, permissionless, immutable. Built on Mediolano&apos;s
            zero-fee tokenization and live on Starknet.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://medialane.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Start creating <ExternalLink className="h-4 w-4" />
            </a>
            <Link
              href="/dev"
              className="inline-flex items-center gap-2 border border-border bg-background/60 backdrop-blur px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-muted/40 transition-colors"
            >
              Developer docs →
            </Link>
          </div>
        </div>
      </div>

      {/* What We Build */}
      <div className="space-y-6">
        <div className="space-y-1">
          <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">What We Build</p>
          <h2 className="text-2xl font-black">Two hubs, one protocol.</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            Medialane builds a commercial layer on Mediolano&apos;s zero-fee, Berne-aligned
            tokenization — two integrated hubs, expressed through one open protocol.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {HUBS.map(({ label, desc, href, color, border }) => (
            <Link key={label} href={href} className={`bento-cell border ${border} p-6 space-y-2 hover:bg-muted/20 transition-colors group`}>
              <p className={`font-black text-base ${color}`}>{label}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              <p className={`text-xs font-semibold ${color} group-hover:underline`}>Learn more →</p>
            </Link>
          ))}
        </div>
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            The protocol grows by adding <span className="text-foreground font-medium">services</span> —
            an open, extensible set of monetization primitives, never a fixed menu. A few of them:
          </p>
          <div className="flex flex-wrap gap-2">
            {SERVICE_LINKS.map(({ href, label }) => (
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

      {/* How It Works */}
      <div className="space-y-6">
        <div className="space-y-1">
          <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">How It Works</p>
          <h2 className="text-2xl font-black">Four layers. Authority flows downward.</h2>
          <p className="text-muted-foreground leading-relaxed">
            Contracts set immutable rules. The indexer reads the chain. The SDK gives builders
            a typed interface. Apps are where creators work. Nothing at the top overrides
            what the bottom says.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {LAYERS.map(({ num, label, icon: Icon, color, bg, desc }) => (
            <div key={num} className="bento-cell p-5 space-y-2">
              <div className="flex items-center gap-2">
                <div className={`h-8 w-8 rounded-lg ${bg} flex items-center justify-center`}>
                  <Icon className={`h-4 w-4 ${color}`} />
                </div>
                <span className={`text-xs font-mono ${color}`}>{num}</span>
                <p className={`font-bold text-sm ${color}`}>{label}</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          See the full{" "}
          <Link href="/dev/architecture" className="text-primary hover:underline">Architecture documentation</Link>
          {" "}for the rebuild test, six core primitives, and the protocol vs. platform distinction.
        </p>
      </div>

      {/* Why Starknet */}
      <div className="space-y-6">
        <div className="space-y-1">
          <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">Why Starknet</p>
          <h2 className="text-2xl font-black">The foundation matters.</h2>
          <p className="text-muted-foreground leading-relaxed">
            Medialane is built on Starknet. Not because it is popular — because its
            cryptographic properties are uniquely suited to the bigger vision.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {STARKNET_REASONS.map(({ label, desc }) => (
            <div key={label} className="bento-cell p-5 space-y-1">
              <p className="font-bold text-sm text-brand-purple">{label}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Built to Grow */}
      <div className="bento-cell border border-brand-blue/20 p-8 space-y-4">
        <p className="text-xs font-black uppercase tracking-widest text-brand-blue">Built to Grow</p>
        <h2 className="text-xl font-black">Starknet-first. Designed for more.</h2>
        <p className="text-muted-foreground leading-relaxed">
          The Medialane protocol runs on Starknet today. The Medialane DAO is deployed on
          Ethereum — for security and liquidity — with MDLN bridgeable to Starknet via
          StarkGate, the same model used by the STRK token.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The long-term arc is toward fully chain-agnostic, censorship-resistant infrastructure.
          Starknet&apos;s ZK proofs and account abstraction are what make that possible — not chain
          loyalty, but architectural necessity.
        </p>
        <p className="text-sm text-muted-foreground">
          See{" "}
          <Link href="/dao/token" className="text-primary hover:underline">MDLN Token</Link>
          {" "}for the Ethereum deployment and bridge details, and{" "}
          <Link href="/dev/architecture" className="text-primary hover:underline">Architecture</Link>
          {" "}for the protocol roadmap.
        </p>
      </div>

      {/* Design Choices */}
      <div className="space-y-6">
        <div className="space-y-1">
          <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">Design Choices</p>
          <h2 className="text-2xl font-black">Why it&apos;s built this way.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {DESIGN_CHOICES.map(({ icon: Icon, title, desc, color, bg }) => (
            <div key={title} className="bento-cell p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className={`h-9 w-9 rounded-xl ${bg} flex items-center justify-center`}>
                  <Icon className={`h-5 w-5 ${color}`} />
                </div>
                <p className={`font-black text-sm ${color}`}>{title}</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Integrity Web */}
      <div className="bento-cell border border-primary/20 p-8 space-y-4">
        <div className="flex items-center gap-3">
          <Shield className="h-5 w-5 text-primary" />
          <p className="font-black text-primary">The Integrity Web</p>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          The Integrity Web is a set of ten axioms that define what trustworthy digital
          infrastructure must implement at the architectural level. They are not aspirations —
          they are engineering constraints. Medialane treats them as design requirements.
        </p>
        <Link
          href="/learn/integrity-web"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          Read the ten axioms and how Medialane applies them →
        </Link>
      </div>

    </PageContainer>
  );
}
