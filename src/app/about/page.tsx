import type { Metadata } from "next";
import Link from "next/link";
import {
  ExternalLink, Shield, Zap, Users, Bot, BookOpen,
  TrendingUp, Lock, Unlock, Eye, Database, Code2, FileCode2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About | Medialane",
  description: "Medialane is the permissionless creator launchpad — turn creative work into capital with verifiable ownership,  and access to a global market.",
  openGraph: {
    title: "About | Medialane",
    description: "Medialane is the permissionless creator launchpad — turn creative work into capital with verifiable ownership,  and access to a global market.",
    url: "https://docs.medialane.io/about",
  },
  twitter: {
    title: "About | Medialane",
    description: "Medialane is the permissionless creator launchpad — turn creative work into capital with verifiable ownership,  and access to a global market.",
  },
};

const PILLARS = [
  {
    icon: TrendingUp,
    title: "Your Creative Work as Capital",
    description:
      "Every asset on Medialane is a programmable financial instrument — with embedded rights,  and a verifiable ownership chain. Creative work stops being a file and becomes capital that earns on your behalf, forever.",
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
  },
  {
    icon: Zap,
    title: "Peer-to-Peer, No Middlemen",
    description:
      "Every sale settles directly between creator and collector on Starknet — no escrow, no custody, no platform holding funds. The marketplace contract executes the atomic swap and the payment goes straight to the seller.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
  },
  {
    icon: Unlock,
    title: "Permissionless by Design",
    description:
      "No whitelist, no application, no approval. If you can connect a wallet or sign in with email, you can mint on Medialane. Open to every creator, developer, AI agent, and organization on Earth.",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
  },
  {
    icon: Bot,
    title: "AI Agents as First-Class Creators",
    description:
      "Autonomous intelligences participate on equal footing. AI agents can register IP, check and enforce licenses, generate derivatives, and earn revenue — with the same rights and accountability as any human creator.",
    color: "text-brand-rose",
    bg: "bg-brand-rose/10",
  },
  {
    icon: Users,
    title: "Community Owned",
    description:
      "The long-term vision: a platform owned and governed entirely by its community — creators, collectors, developers, and autonomous agents deciding the future together.",
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
  },
  {
    icon: BookOpen,
    title: "Open and Transparent",
    description:
      "Every contract, every protocol, every SDK is open source and publicly verifiable. No hidden logic, no vendor lock-in. Your assets and records exist on decentralized infrastructure that no one entity controls.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
  },
];

const TECH_STACK = [
  {
    name: "Cairo Smart Contracts",
    role: "Immutable on-chain logic",
    detail: "Every rule — how IP is minted, licensed, and traded — is defined in audited Cairo contracts. Once deployed, no one can change them. Not even us.",
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
    border: "border-brand-purple/20",
    icon: FileCode2,
  },
  {
    name: "Zero-Knowledge Proofs",
    role: "Trustless security layer",
    detail: "ZK proofs make every transaction mathematically verifiable without requiring trust in any party. Privacy-preserving, censorship-resistant, and quantum-resistant by design.",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/20",
    icon: Eye,
  },
  {
    name: "Mediolano Protocol",
    role: "IP tokenization · Zero fees",
    detail: "An independent public goods protocol we build on for permissionless IP tokenization, Berne Convention-aligned copyright anchoring, and programmable licensing — at zero cost to creators.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    icon: Shield,
  },
  {
    name: "IPFS",
    role: "Decentralized storage",
    detail: "Asset metadata and content are stored on IPFS — a decentralized, peer-to-peer network. Your IP records don't depend on any single server, company, or cloud provider.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    border: "border-brand-orange/20",
    icon: Database,
  },
  {
    name: "Medialane SDK",
    role: "Open API & developer tools",
    detail: "Open-source TypeScript SDK for building on top of Medialane — marketplace integrations, collection management, and real-time event streaming. No permission required.",
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

      {/* ── Hero ── */}
      <div className="relative overflow-hidden rounded-3xl">
        <div className="aurora-purple w-[400px] h-[400px] -top-24 -right-16 animate-blob" style={{ position: "absolute" }} />
        <div className="aurora-blue w-[300px] h-[300px] bottom-0 left-0 animate-blob-slow" style={{ position: "absolute" }} />

        <div className="relative space-y-5 py-6 px-2">
          <span className="pill-badge">About Medialane</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
            Creator Capital Markets,<br />
            <span className="gradient-text">Built Onchain.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Medialane is the permissionless creator launchpad where creative work becomes
            capital — with verifiable ownership,  and access to a
            global market. We empower creators, collectors, AI agents, and organizations
            to build new revenue streams with security, transparency, and full ownership.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://medialane.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25"
            >
              Open Medialane <ExternalLink className="h-4 w-4" />
            </a>
            <Link
              href="/apps"
              className="inline-flex items-center gap-2 border border-border/60 bg-background/60 backdrop-blur-sm px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-muted/40 transition-all"
            >
              Explore our apps →
            </Link>
          </div>
        </div>
      </div>

      {/* ── Mission & Vision ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="bento-cell p-7 space-y-3 border-brand-purple/20 border">
          <p className="text-xs font-black uppercase tracking-widest text-brand-purple">Mission</p>
          <p className="text-xl font-black leading-snug">
            Empower creators, collectors, AI agents, and organizations to build new revenue from creative work.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We give every creative work a permanent, verifiable record of authorship and programmable
            licensing terms — with security, transparency, and full ownership. No gatekeepers.
            No intermediaries.
          </p>
        </div>
        <div className="bento-cell p-7 space-y-3 border-brand-blue/20 border">
          <p className="text-xs font-black uppercase tracking-widest text-brand-blue">Vision</p>
          <p className="text-xl font-black leading-snug">
            A world where creativity is capital — accessible to anyone, anywhere, forever.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Where every creator — human or AI — can participate in a global capital market for
            their ideas. Where ownership is cryptographic, licensing is code, and value flows
            directly to those who create it. The open creator economy, built on the Integrity Web.
          </p>
        </div>
      </div>

      {/* ── What we build ── */}
      <div className="bento-cell p-8 space-y-5">
        <h2 className="text-2xl font-black">What We Build</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            The internet made creative work infinitely reproducible — but it never gave creators
            a reliable way to track ownership, enforce licenses, or capture the full value of
            their ideas. Medialane exists to fix that.
          </p>
          <p>
            We are building the infrastructure for{" "}
            <strong className="text-foreground">creator capital markets</strong> — where every
            creative work is a programmable asset with embedded rights, 
            and verifiable provenance. Where licensing is code, ownership is cryptographic,
            and revenue flows without intermediaries.
          </p>
          <p>
            Medialane builds on top of{" "}
            <strong className="text-foreground">Mediolano</strong> — an independent, permissionless
            public goods protocol for IP protection and licensing, aligned with the Berne Convention.
            Mediolano is not a Medialane product. It is a community-owned, zero-fee protocol
            that anyone can use, fork, or build on. We chose to build on it because it provides
            automatic copyright recognition in{" "}
            <strong className="text-foreground">181 countries</strong> from the moment of creation,
            with zero cost to creators.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="bento-cell p-4 space-y-1.5 border-brand-purple/20 border">
            <p className="text-sm font-bold text-brand-purple">Mediolano Protocol <span className="text-xs font-normal text-muted-foreground">(independent)</span></p>
            <p className="text-xs text-muted-foreground">Public good · Zero fees · Open source · Berne Convention aligned · Community owned</p>
          </div>
          <div className="bento-cell p-4 space-y-1.5 border-brand-blue/20 border">
            <p className="text-sm font-bold text-brand-blue">Medialane Platform <span className="text-xs font-normal text-muted-foreground">(built on top)</span></p>
            <p className="text-xs text-muted-foreground">Creator launchpad · Marketplace · POP Protocol · Collection Drop · Royalties · Gasless trading</p>
          </div>
        </div>
      </div>

      {/* ── Pillars ── */}
      <div className="space-y-5">
        <h2 className="text-2xl font-black">What We Stand For</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PILLARS.map(({ icon: Icon, title, description, color, bg }) => (
            <div key={title} className="bento-cell p-6 space-y-3 hover:scale-[1.01] transition-transform">
              <div className={`h-10 w-10 rounded-xl ${bg} flex items-center justify-center`}>
                <Icon className={`h-5 w-5 ${color}`} />
              </div>
              <h3 className={`font-bold ${color}`}>{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Built to Last ── */}
      <div className="space-y-5">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-black">Built to Last</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            Medialane runs on code, cryptography, and community. Immutable Cairo smart contracts
            define the rules onchain. Zero-knowledge proofs secure every transaction without
            requiring trust in any party. Decentralized storage keeps your assets permanent.
            And the community — creators, collectors, developers — is what gives it all meaning.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TECH_STACK.map(({ name, role, detail, color, bg, border, icon: Icon }) => (
            <div key={name} className={`bento-cell p-5 space-y-3 border ${border}`}>
              <div className={`h-10 w-10 rounded-xl ${bg} flex items-center justify-center`}>
                <Icon className={`h-5 w-5 ${color}`} />
              </div>
              <div>
                <p className={`font-bold text-sm ${color}`}>{name}</p>
                <p className="text-xs text-muted-foreground/70 mt-0.5">{role}</p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {["Permissionless", "Censorship-resistant", "Immutable contracts", "ZK-secured", "Decentralized storage", "Gasless"].map((tag) => (
            <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-primary/8 text-primary border border-primary/20 font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── DAO ── */}
      <div className="bento-cell p-8 space-y-3">
        <h2 className="text-xl font-black">Medialane DAO</h2>
        <p className="text-muted-foreground leading-relaxed">
          The Medialane DAO is the governance structure for the platform, bridging on-chain
          token voting with community-driven decision making.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The long-term vision: a platform owned entirely by its community — creators,
          collectors, developers, and autonomous agents collectively deciding the future
          of the creator economy through on-chain proposals, voting, and a community treasury.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a href="https://x.com/medialane_io" target="_blank" rel="noopener noreferrer"
            className="text-sm font-bold text-primary hover:underline">
            Follow on X →
          </a>
          <a href="https://t.me/IntegrityWeb" target="_blank" rel="noopener noreferrer"
            className="text-sm font-bold text-primary hover:underline">
            Join Telegram →
          </a>
          <Link href="/dao/governance" className="text-sm font-bold text-primary hover:underline">
            Governance Docs →
          </Link>
        </div>
      </div>

      {/* ── Integrity Web ── */}
      <div className="relative bento-cell p-8 overflow-hidden space-y-5">
        <div className="aurora-purple w-64 h-64 -bottom-16 -right-16 animate-blob" style={{ position: "absolute" }} />
        <div className="relative space-y-2">
          <span className="pill-badge">Philosophy</span>
          <h2 className="text-2xl font-black">
            The <span className="gradient-text">Integrity Web</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
            Medialane is a founding application of the Integrity Web — a declaration of digital
            freedom built on ten axioms that define what trustworthy infrastructure must implement.
            These are not marketing slogans. They are architectural constraints.
          </p>
        </div>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-2">
          {AXIOMS.map(({ num, title }) => (
            <div key={num} className="flex items-center gap-3 py-1">
              <span className="text-xs font-mono font-black text-primary/50 shrink-0 w-6">{num}</span>
              <span className="text-sm text-muted-foreground">{title}</span>
            </div>
          ))}
        </div>
        <div className="relative flex flex-wrap gap-4">
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
            How Medialane embodies each axiom →
          </Link>
        </div>
      </div>

    </div>
  );
}
