import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Shield, Zap, Users, Bot, BookOpen, TrendingUp, Lock, Unlock } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Medialane",
  description: "Medialane is the permissionless creator launchpad — turn creative work into capital with verifiable ownership, automatic royalties, and access to a global market.",
};

const PILLARS = [
  {
    icon: TrendingUp,
    title: "Your Creative Work as Capital",
    description:
      "Every asset on Medialane is a programmable financial instrument — with embedded rights, automatic royalties, and a verifiable ownership chain. Creative work stops being a file and becomes capital that earns on your behalf, forever.",
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
  },
  {
    icon: Zap,
    title: "Revenue That Runs Itself",
    description:
      "Primary sales, perpetual royalties, licensing fees, derivative earnings — all distributed automatically by smart contracts. No invoicing, no chasing payments, no platform taking a cut after the fact.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
  },
  {
    icon: Unlock,
    title: "Permissionless by Design",
    description:
      "No whitelist, no application, no approval. If you can connect a wallet or sign in with email, you can mint on Medialane. The Mediolano protocol is open to every creator, developer, and organization on Earth.",
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
      "Medialane DAO LLC is being bootstrapped in Utah. The long-term vision: a platform owned and governed entirely by its community — creators, collectors, developers, and autonomous agents deciding the future together.",
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
  },
  {
    icon: BookOpen,
    title: "Open Protocol",
    description:
      "The Mediolano protocol at Medialane's core is fully open source — smart contracts, indexer, and SDK are publicly verifiable. No hidden logic, no vendor lock-in, no platform that can take your work away.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
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
            capital — with verifiable ownership, automatic royalties, and access to a
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

      {/* ── What we build ── */}
      <div className="bento-cell p-8 space-y-5">
        <h2 className="text-2xl font-black">
          What We Build
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            The internet made creative work infinitely reproducible — but it never gave creators
            a reliable way to track ownership, enforce licenses, or capture the full value of
            their ideas. Medialane exists to fix that.
          </p>
          <p>
            We are building the infrastructure for <strong className="text-foreground">creator capital markets</strong> —
            where every creative work is a programmable asset with embedded rights, automatic royalties,
            and verifiable provenance. Where licensing is code, ownership is cryptographic, and
            revenue flows without intermediaries.
          </p>
          <p>
            At the core of Medialane is{" "}
            <strong className="text-foreground">Mediolano</strong> — a permissionless, open-source
            IP protection and licensing protocol aligned with the Berne Convention, providing
            automatic copyright recognition in{" "}
            <strong className="text-foreground">181 countries</strong> from the moment of creation.
            Mediolano is a public good: zero fees, community-owned, open to anyone.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="bento-cell p-4 space-y-1.5 border-brand-purple/20 border">
            <p className="text-sm font-bold text-brand-purple">Mediolano Protocol</p>
            <p className="text-xs text-muted-foreground">Permissionless IP protection · Zero fees · Public good · Open source · Berne Convention aligned</p>
          </div>
          <div className="bento-cell p-4 space-y-1.5 border-brand-blue/20 border">
            <p className="text-sm font-bold text-brand-blue">Medialane Platform</p>
            <p className="text-xs text-muted-foreground">Creator launchpad · Marketplace · POP Protocol · Collection Drop · Royalties · Gasless trading</p>
          </div>
        </div>
      </div>

      {/* ── Pillars ── */}
      <div className="space-y-5">
        <h2 className="text-2xl font-black">
          What We Stand For
        </h2>
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

      {/* ── Infrastructure ── */}
      <div className="bento-cell p-8 space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center">
            <Shield className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-xl font-black">Built to Last</h2>
        </div>
        <div className="space-y-3 text-muted-foreground leading-relaxed">
          <p>
            Medialane runs on <strong className="text-foreground">Starknet</strong> — a decentralized
            network secured by zero-knowledge proofs that make every transaction mathematically verifiable.
            No company, government, or platform can freeze your assets, delist your IP, or change the rules
            of your smart contracts. Your work exists on-chain and belongs to you.
          </p>
          <p>
            Gasless by default via{" "}
            <strong className="text-foreground">ChipiPay</strong> and Starknet account abstraction —
            sign in with email or social, mint, trade, and earn without managing seed phrases, gas fees,
            or browser extensions. Passkey (biometric) support included.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 pt-1">
          <div className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-primary/8 text-primary border border-primary/20 font-medium">
            <Lock className="h-3 w-3" /> Permissionless
          </div>
          <div className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue border border-brand-blue/20 font-medium">
            <Shield className="h-3 w-3" /> Censorship-resistant
          </div>
          <div className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange border border-brand-orange/20 font-medium">
            <Zap className="h-3 w-3" /> Gasless
          </div>
        </div>
      </div>

      {/* ── DAO ── */}
      <div className="bento-cell p-8 space-y-3">
        <h2 className="text-xl font-black">Medialane DAO LLC</h2>
        <p className="text-muted-foreground leading-relaxed">
          Medialane DAO LLC is being bootstrapped in{" "}
          <strong className="text-foreground">Utah, USA</strong> as the legal entity governing
          the platform. This structure bridges on-chain governance with real-world legal
          recognition — giving community members liability protection while enabling
          fully transparent, autonomous governance.
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
