import type { Metadata } from "next";
import Link from "next/link";
import {
  ExternalLink, Shield, Zap, Users, Bot, BookOpen,
  Lock, Unlock, Eye, Database, Code2, FileCode2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About | Medialane",
  description: "Medialane is an open platform for minting, licensing, and trading intellectual property onchain. Live on Starknet. Immutable contracts. Open source.",
  openGraph: {
    title: "About | Medialane",
    description: "Medialane is an open platform for minting, licensing, and trading intellectual property onchain. Live on Starknet. Immutable contracts. Open source.",
    url: "https://docs.medialane.io/about",
  },
  twitter: {
    title: "About | Medialane",
    description: "Medialane is an open platform for minting, licensing, and trading intellectual property onchain. Live on Starknet. Immutable contracts. Open source.",
  },
};

const DESIGN_CHOICES = [
  {
    icon: Lock,
    title: "No admin keys",
    description:
      "The v3 contracts have no owner role, no upgrade path, and no emergency pause. Once deployed, no one can change the rules — including us. You can verify this from the open-source contract code.",
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
  },
  {
    icon: Zap,
    title: "No custody",
    description:
      "Sales settle via atomic swap. The marketplace contract never holds buyer funds — the payment and the NFT transfer in the same transaction, or both revert. There is no escrow step.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
  },
  {
    icon: Unlock,
    title: "No approval required",
    description:
      "Any wallet can mint, list, make offers, and deploy collections. There is no whitelist, no application process, and no content moderation at the contract level.",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
  },
  {
    icon: Bot,
    title: "AI agents as users",
    description:
      "The REST API uses SIWS (Sign In With Starknet) for authentication and HTTP 402 for credit-based billing. AI agents can use the same endpoints as human users — no special integration required.",
    color: "text-brand-rose",
    bg: "bg-brand-rose/10",
  },
  {
    icon: Users,
    title: "Community governance",
    description:
      "The MDLN token gives holders voting rights on Snapshot. A 1% marketplace fee flows to the DAO treasury. The goal is to increase community control over protocol decisions over time.",
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
  },
  {
    icon: BookOpen,
    title: "Everything is auditable",
    description:
      "All contracts, the TypeScript SDK, and the indexer are open source. The deployed contract addresses are public. Anyone can read what the code does before using it.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
  },
];

const TECH_STACK = [
  {
    name: "Open Protocol",
    role: "Chain-agnostic by design",
    detail: "The platform currently runs on Starknet. The protocol is not permanently tied to any single chain — censorship resistance requires no single point of failure.",
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
    border: "border-brand-purple/20",
    icon: FileCode2,
  },
  {
    name: "Zero-Knowledge Proofs",
    role: "Trustless transaction verification",
    detail: "Starknet uses STARK proofs to verify every transaction without requiring trust in any party. No trusted setup. Quantum-resistant.",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/20",
    icon: Eye,
  },
  {
    name: "Mediolano Protocol",
    role: "IP tokenization layer",
    detail: "An independent public goods protocol for permissionless IP tokenization and Berne Convention-aligned copyright anchoring. Zero fees. Not a Medialane product — anyone can use or fork it.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    icon: Shield,
  },
  {
    name: "IPFS",
    role: "Decentralized storage",
    detail: "Asset metadata and content are pinned to IPFS via content-addressed CIDs. Records do not depend on any single server or cloud provider.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    border: "border-brand-orange/20",
    icon: Database,
  },
  {
    name: "Medialane SDK",
    role: "Open API & developer tools",
    detail: "Open-source TypeScript SDK for building on Medialane. Marketplace integrations, collection management, real-time event streaming. Published on npm.",
    color: "text-brand-rose",
    bg: "bg-brand-rose/10",
    border: "border-brand-rose/20",
    icon: Code2,
  },
];

const AXIOMS = [
  { num: "01", title: "Code is Math, Math is Reality" },
  { num: "02", title: "Proof Replaces Trust" },
  { num: "03", title: "Freedom is a Protocol" },
  { num: "04", title: "Integrity by Design" },
  { num: "05", title: "Public Goods are Sacred" },
  { num: "06", title: "Privacy is Power" },
  { num: "07", title: "Decentralization is Resilience" },
  { num: "08", title: "Universality of Intelligences" },
  { num: "09", title: "Creativity is Integrity" },
  { num: "10", title: "The Integrity Web is for Everyone" },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 pt-12 pb-16 max-w-6xl space-y-16">

      {/* ── Intro ── */}
      <div className="space-y-6 max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight">About Medialane</h1>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Medialane is an open platform where creators mint intellectual property as NFTs,
          attach licensing terms at the time of minting, and trade assets peer-to-peer on a
          permissionless marketplace. It is live on Starknet. The contracts are immutable
          and the code is open source.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          This page describes what the platform is and how it works. What is documented here
          reflects what exists today and is verifiable from the deployed contracts and open-source
          repositories. Where something is a goal rather than a current capability, it is stated as such.
        </p>
        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href="https://medialane.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-primary/90 transition-all"
          >
            Open Medialane <ExternalLink className="h-4 w-4" />
          </a>
          <Link
            href="/apps"
            className="inline-flex items-center gap-2 border border-border/60 bg-background/60 backdrop-blur-sm px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-muted/40 transition-all"
          >
            All apps →
          </Link>
        </div>
      </div>

      {/* ── Services ── */}
      <div className="space-y-5">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Services</h2>
          <p className="text-sm text-muted-foreground">
            Each service is independent and permissionless. They share the same underlying infrastructure
            but operate as separate contracts.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              title: "Creator Launchpad",
              desc: "Mint IP as NFTs — ERC-721 single-edition collections and ERC-1155 multi-edition series. Licensing terms (license type, commercial use, derivative rules, AI policy, geographic scope) are embedded in the asset metadata at mint time.",
              color: "text-brand-purple",
              border: "border-brand-purple/20",
            },
            {
              title: "Marketplace",
              desc: "Peer-to-peer trading of IP assets. Orders use SNIP-12 typed data signing — off-chain signed, on-chain enforced. Trades settle as atomic swaps. No escrow, no custody, no intermediary holding funds.",
              color: "text-brand-blue",
              border: "border-brand-blue/20",
            },
            {
              title: "POP Protocol",
              desc: "Proof-of-Participation credentials. Each campaign deploys a soulbound (non-transferable) NFT contract. Eligible wallets claim one credential per campaign. Permanent and on-chain.",
              color: "text-brand-orange",
              border: "border-brand-orange/20",
            },
            {
              title: "Collection Drop",
              desc: "Timed NFT drop campaigns with supply caps, mint windows, per-wallet limits, and optional allowlists — all parameters enforced by the contract. No admin can modify them after deployment.",
              color: "text-brand-rose",
              border: "border-brand-rose/20",
            },
            {
              title: "Developer API & Portal",
              desc: "REST API and TypeScript SDK for querying marketplace data, collections, and events. MDLN token tiers determine rate multipliers. HTTP 402 credit billing for AI agent use cases.",
              color: "text-primary",
              border: "border-primary/20",
            },
            {
              title: "DAO & Governance",
              desc: "MDLN token holders vote on Snapshot. A 1% fee on marketplace sales flows to the DAO treasury. Governance decisions are currently off-chain via Snapshot with on-chain execution through a multisig.",
              color: "text-brand-purple",
              border: "border-brand-purple/20",
            },
          ].map(({ title, desc, color, border }) => (
            <div key={title} className={`bento-cell p-5 space-y-2 border ${border}`}>
              <p className={`text-sm font-semibold ${color}`}>{title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Design choices ── */}
      <div className="space-y-5">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Design choices</h2>
          <p className="text-sm text-muted-foreground">
            Specific decisions made in how the platform is built — and why.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {DESIGN_CHOICES.map(({ icon: Icon, title, description, color, bg }) => (
            <div key={title} className="bento-cell p-5 space-y-3">
              <div className={`h-9 w-9 rounded-lg ${bg} flex items-center justify-center`}>
                <Icon className={`h-4 w-4 ${color}`} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Technical foundation ── */}
      <div className="space-y-5">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Technical foundation</h2>
          <p className="text-sm text-muted-foreground">
            The infrastructure and protocols Medialane is built on.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TECH_STACK.map(({ name, role, detail, color, bg, border, icon: Icon }) => (
            <div key={name} className={`bento-cell p-5 space-y-3 border ${border}`}>
              <div className={`h-9 w-9 rounded-lg ${bg} flex items-center justify-center`}>
                <Icon className={`h-4 w-4 ${color}`} />
              </div>
              <div>
                <p className={`text-sm font-semibold ${color}`}>{name}</p>
                <p className="text-xs text-muted-foreground/70 mt-0.5">{role}</p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── DAO ── */}
      <div className="bento-cell p-7 space-y-3 max-w-3xl">
        <h2 className="text-xl font-semibold">Governance</h2>
        <p className="text-muted-foreground leading-relaxed text-sm">
          MDLN is the governance token. Holders with 100+ MDLN can vote on Snapshot proposals
          and submit new ones. A 1% fee on marketplace sales accumulates in the DAO treasury.
          Decisions are currently made via off-chain Snapshot votes with multisig execution.
        </p>
        <p className="text-muted-foreground leading-relaxed text-sm">
          The intended direction is to move more protocol decisions to community governance over time.
          This has not happened in full yet — the current structure is a starting point, not the end state.
        </p>
        <div className="flex flex-wrap gap-4 pt-1">
          <a href="https://x.com/medialane_io" target="_blank" rel="noopener noreferrer"
            className="text-sm text-primary hover:underline">
            X / Twitter →
          </a>
          <a href="https://t.me/IntegrityWeb" target="_blank" rel="noopener noreferrer"
            className="text-sm text-primary hover:underline">
            Telegram →
          </a>
          <Link href="/dao/governance" className="text-sm text-primary hover:underline">
            Governance docs →
          </Link>
        </div>
      </div>

      {/* ── Integrity Web ── */}
      <div className="bento-cell p-7 space-y-5 max-w-3xl">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">The Integrity Web</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Medialane is a founding application of the Integrity Web — a set of ten axioms
            that define what trustworthy digital infrastructure must implement at the architectural
            level. These are design constraints, not marketing claims.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {AXIOMS.map(({ num, title }) => (
            <div key={num} className="flex items-center gap-3 py-1">
              <span className="text-xs font-mono text-primary/50 shrink-0 w-6">{num}</span>
              <span className="text-sm text-muted-foreground">{title}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://www.integrityweb.xyz/axioms"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
          >
            Read the axioms <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <Link
            href="/learn/integrity-web"
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
          >
            How Medialane implements each one →
          </Link>
        </div>
      </div>

    </div>
  );
}
