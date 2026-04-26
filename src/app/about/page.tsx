import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield, Zap, Globe, Users, Bot, BookOpen,
  Bitcoin, Layers, Cpu, Lock, ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About | Medialane",
  description: "Learn about Medialane — the IP marketplace and creator launchpad built on the Mediolano protocol and Starknet.",
};

const PILLARS = [
  {
    icon: Shield,
    title: "IP Protection First",
    description:
      "Every asset on Medialane is anchored to the Mediolano protocol — a permissionless IP protection layer aligned with the Berne Convention. Creators get automatic copyright recognition in 181 countries, with programmable licenses enforced onchain.",
  },
  {
    icon: Zap,
    title: "Gasless by Default",
    description:
      "Powered by ChipiPay and Starknet's account abstraction, Medialane removes friction from every interaction. Sign in with email, mint, trade, and earn — without managing seed phrases or paying gas. Passkey (biometric) support included.",
  },
  {
    icon: Lock,
    title: "ZK-STARK Proofs",
    description:
      "Starknet's ZK-STARK proofs are quantum-resistant and require no trusted setup. Every transaction is mathematically proven — not just assumed. Trustless by design, secured by math, resilient against future computing threats.",
  },
  {
    icon: Bot,
    title: "AI Agent Ready",
    description:
      "Autonomous agents are first-class participants. AI entities can register IP, scan licenses, generate derivatives, and participate in the marketplace — with the same accountability and transparency as human creators.",
  },
  {
    icon: Users,
    title: "Community Governed",
    description:
      "Medialane DAO LLC is being bootstrapped in Utah. The path to full autonomy means creators, collectors, and developers will collectively own and govern the platform through transparent on-chain proposals and voting.",
  },
  {
    icon: BookOpen,
    title: "Open Protocol",
    description:
      "The Mediolano protocol at the core of Medialane is fully open source. Smart contracts, indexer, and SDK are publicly verifiable. No hidden logic, no vendor lock-in — your IP records exist permanently on Starknet.",
  },
];

const CHAINS = [
  {
    icon: Layers,
    title: "Starknet",
    status: "Primary chain",
    statusColor: "bg-green-500/15 text-green-400 border-green-500/30",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/20",
    points: [
      "ZK-STARK proofs — quantum-resistant, no trusted setup",
      "Trustless by design — math replaces intermediaries",
      "Ethereum-level security at a fraction of the cost",
      "Cairo smart contracts for the full platform",
      "Validity proofs for every transaction, on-chain and verifiable",
    ],
  },
  {
    icon: Bitcoin,
    title: "Bitcoin",
    status: "Future integration",
    statusColor: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    border: "border-brand-orange/20",
    points: [
      "The only truly censorship-resistant base layer",
      "No company, government, or entity can shut it down",
      "The hardest money and most decentralized network",
      "Long-term anchor for digital ownership and sovereignty",
      "Growing ecosystem: Taproot, Ordinals, Lightning, L2s",
    ],
  },
  {
    icon: Globe,
    title: "Ethereum",
    status: "Future integration",
    statusColor: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
    border: "border-brand-purple/20",
    points: [
      "Largest smart contract and NFT ecosystem",
      "ERC-721 / ERC-1155 token standard interoperability",
      "Deep DeFi liquidity and collector base",
      "EVM compatibility for the broadest developer reach",
      "Cross-chain royalty enforcement via bridge protocols",
    ],
  },
  {
    icon: Cpu,
    title: "Solana",
    status: "Future integration",
    statusColor: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
    color: "text-brand-rose",
    bg: "bg-brand-rose/10",
    border: "border-brand-rose/20",
    points: [
      "High throughput — fast, low-cost minting at scale",
      "Large and growing creator and NFT community",
      "cNFT compressed token standard for mass IP issuance",
      "Expanding DeFi and institutional NFT adoption",
    ],
  },
];

const AXIOMS = [
  { num: "01", title: "Code is Math, Math is Reality", summary: "Computation is the foundation for integrity. Cryptography is proof, not opinion." },
  { num: "02", title: "Proof Replaces Trust", summary: "Mathematical verification eliminates intermediaries. Validity proofs are the basis for collective confidence." },
  { num: "03", title: "Freedom is a Protocol", summary: "Permissionless participation, open innovation, and censorship-resistance by design." },
  { num: "04", title: "Integrity by Design", summary: "Tamper-proof records, verifiable actions, self-sovereign identity as embedded principles." },
  { num: "05", title: "Public Goods are Sacred", summary: "Infrastructure, proof systems, and protocols are shared resources serving all intelligences." },
  { num: "06", title: "Privacy is Power", summary: "Zero-knowledge systems as mechanisms for information sovereignty, not secrecy." },
  { num: "07", title: "Decentralization is Resilience", summary: "No single points of control or failure. Distributed power structures." },
  { num: "08", title: "Universality of Intelligences", summary: "Humans, AI agents, and future intelligences have equal participation rights." },
  { num: "09", title: "Creativity is Integrity", summary: "Tokenizing knowledge and art as public goods. Creator value preserved without gatekeepers." },
  { num: "10", title: "The Integrity Web is for Everyone", summary: "Censorship-free, permissionless, universal. The trust foundation of digital civilization." },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 pt-12 pb-16 max-w-6xl space-y-16">

      {/* Hero */}
      <div className="space-y-5">
        <span className="pill-badge">About Medialane</span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
          The IP Marketplace for<br />
          <span className="gradient-text">the Creator Economy</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Medialane is a Starknet-based platform for minting, licensing, and trading
          intellectual property as NFTs. We give creators ownership, collectors provenance,
          and developers an open protocol to build on — gasless, permissionless, and
          governed by its community.
        </p>
      </div>

      {/* Mediolano relationship */}
      <div className="bento-cell p-8 space-y-4">
        <h2 className="text-xl font-bold">Built on the Integrity Web</h2>
        <p className="text-muted-foreground leading-relaxed">
          Medialane is built on{" "}
          <strong className="text-foreground">Mediolano</strong> — a permissionless,
          open-source IP protection and licensing protocol. Mediolano was created as a
          <strong className="text-foreground"> public good</strong>: zero fees, community-owned,
          focused purely on giving creators cryptographic proof of ownership and programmable
          licensing rights — without any financial layer attached.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Medialane is the full picture. It takes Mediolano's integrity infrastructure
          and adds everything a creator economy needs: a marketplace to trade IP, a
          launchpad to deploy collections and drops, tools to earn royalties, and a
          community to participate in. The two are philosophically unified — Medialane's
          compliance with the Integrity Web philosophy is what makes it trustworthy.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="bento-cell p-4 space-y-1.5">
            <p className="text-sm font-semibold text-foreground">Mediolano Protocol</p>
            <p className="text-xs text-muted-foreground">Permissionless IP protection · Zero fees · Public good · Open source · Berne Convention aligned</p>
          </div>
          <div className="bento-cell p-4 space-y-1.5">
            <p className="text-sm font-semibold text-foreground">Medialane Platform</p>
            <p className="text-xs text-muted-foreground">Marketplace · Launchpad · POP Protocol · Collection Drop · Royalties · Gasless trading</p>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="bento-cell p-8 space-y-3">
        <h2 className="text-xl font-bold">Our Mission</h2>
        <p className="text-muted-foreground leading-relaxed">
          The internet made creative work infinitely reproducible — but it never gave creators
          a reliable way to track ownership, enforce licenses, or capture the value of their
          ideas. Medialane exists to fix that. We believe every creative work deserves a
          permanent, verifiable record of authorship and a programmable set of rules for how
          it can be used.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          By anchoring IP to blockchain, we make licensing transparent, royalties automatic,
          and ownership indisputable — aligned with the{" "}
          <strong className="text-foreground">Berne Convention</strong>, which provides
          automatic copyright protection in <strong className="text-foreground">181 countries</strong>{" "}
          from the moment a work is created. No registration. No lawyers. No intermediaries.
        </p>
      </div>

      {/* Pillars */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">What We Stand For</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PILLARS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bento-cell p-6 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Stack */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Technology Stack</h2>
        <p className="text-muted-foreground leading-relaxed">
          Medialane is built on <strong className="text-foreground">Starknet</strong>, an
          Ethereum Layer 2 network secured by ZK-STARK proofs — quantum-resistant cryptography
          that requires no trusted setup. Every transaction is mathematically proven valid before
          settlement. Smart contracts are written in <strong className="text-foreground">Cairo 2</strong>,
          Starknet's native language, and cover the full platform: marketplace, collection
          registry, POP Protocol, Collection Drop, on-chain comments, and gated content.
          All contracts are part of the open-source{" "}
          <strong className="text-foreground">mediolano-contracts</strong> ecosystem.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The off-chain layer is a high-performance indexer and REST API. The frontend is
          built with <strong className="text-foreground">Next.js 15</strong>. Authentication
          is handled by <strong className="text-foreground">Clerk</strong> with wallet
          derivation via <strong className="text-foreground">ChipiPay</strong> — including
          passkey (biometric) support, so users never manage seed phrases or private keys
          manually. All platform data is accessible through the open{" "}
          <strong className="text-foreground">Medialane SDK</strong>.
        </p>
      </div>

      {/* Multichain */}
      <div className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">Infrastructure</span>
          <h2 className="text-2xl font-bold">A Multichain Future</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            We believe in a decentralised, multichain world. Medialane starts on Starknet for
            its unique ZK-STARK proof system — trustless, quantum-resistant, Ethereum-anchored.
            Over time we will integrate Bitcoin, Ethereum, and Solana to bring the Mediolano
            protocol to every creator community and chain ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {CHAINS.map(({ icon: Icon, title, status, statusColor, color, bg, border, points }) => (
            <div key={title} className={`bento-cell border ${border} p-6 space-y-4`}>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className={`h-10 w-10 rounded-xl ${bg} flex items-center justify-center`}>
                    <Icon className={`h-5 w-5 ${color}`} />
                  </div>
                  <h3 className="font-bold">{title}</h3>
                </div>
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border shrink-0 ${statusColor}`}>
                  {status}
                </span>
              </div>
              <ul className="space-y-1.5">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm">
                    <span className={`mt-1.5 h-1.5 w-1.5 rounded-full ${bg} border ${border} shrink-0`} />
                    <span className="text-muted-foreground">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bento-cell p-5 border-l-4 border-brand-orange space-y-2">
          <p className="text-sm font-semibold text-foreground">Bitcoin — The Foundation of Censorship Resistance</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Bitcoin is the only network that no company, government, or actor can shut down.
            As the hardest, most decentralised money in existence, it represents the ultimate
            long-term anchor for digital ownership — the base layer that will matter most when
            censorship resistance is tested. Medialane's integration roadmap treats Bitcoin
            not just as a payment layer, but as a sovereignty layer.
          </p>
        </div>
      </div>

      {/* DAO */}
      <div className="bento-cell p-8 space-y-3">
        <h2 className="text-xl font-bold">Medialane DAO LLC</h2>
        <p className="text-muted-foreground leading-relaxed">
          Medialane DAO LLC is being bootstrapped in{" "}
          <strong className="text-foreground">Utah, USA</strong> as the legal entity
          that will govern the platform. This DAO LLC structure bridges on-chain governance
          with real-world legal recognition — giving community members liability protection
          while enabling fully autonomous, transparent governance over time.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The long-term vision: a platform owned and governed entirely by its community.
          Creators, collectors, developers, and autonomous agents collectively deciding
          the future of the IP economy — through on-chain proposals, voting, and a
          community treasury.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="https://x.com/medialane_io"
            target="_blank" rel="noopener noreferrer"
            className="text-sm font-medium text-primary hover:underline"
          >
            Follow on X →
          </a>
          <a
            href="https://t.me/IntegrityWeb"
            target="_blank" rel="noopener noreferrer"
            className="text-sm font-medium text-primary hover:underline"
          >
            Join Telegram →
          </a>
          <Link href="/dao/governance" className="text-sm font-medium text-primary hover:underline">
            Read Governance Docs →
          </Link>
        </div>
      </div>

      {/* Integrity Web axioms */}
      <div className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">Philosophy</span>
          <h2 className="text-2xl font-bold">The Integrity Web</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            Medialane is a participant in the Integrity Web — a declaration of digital freedom
            built on ten axioms. These are not aspirational slogans. They are the architectural
            constraints that govern every design decision we make.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {AXIOMS.map(({ num, title, summary }) => (
            <div key={num} className="bento-cell p-4 flex gap-4">
              <span className="text-xs font-mono text-primary/40 shrink-0 mt-0.5 w-6">{num}</span>
              <div className="space-y-0.5">
                <p className="text-sm font-semibold text-foreground">{title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{summary}</p>
              </div>
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
            Read the full manifesto <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <Link
            href="/learn/integrity-web"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Learn how Medialane embodies it →
          </Link>
        </div>
      </div>

    </div>
  );
}
