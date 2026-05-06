import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Shield, Lock, Globe, Layers, FileCheck, Eye, Network, Bot, Sparkles, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "The Integrity Web | Learn | Medialane",
  description: "Understand the Integrity Web — the 10 axioms of digital freedom and how Medialane embodies each one through ZK proofs, smart contracts, and permissionless design.",
};

const AXIOMS = [
  {
    num: "01",
    title: "Code is Math, Math is Reality",
    quote: "Computation is the foundation for integrity. Cryptography is proof, not opinion.",
    icon: Layers,
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/20",
    medialane: "Medialane's Cairo smart contracts are pure mathematics. A marketplace listing, a royalty payment, a license term — none can be altered by opinion, pressure, or authority. The contract executes as written. Always.",
    highlights: ["ZK-STARK proofs verified on Starknet", "Cairo 2 smart contracts open-sourced", "No admin keys to upgrade core logic"],
  },
  {
    num: "02",
    title: "Proof Replaces Trust",
    quote: "Mathematical verification eliminates intermediaries. Validity proofs are the basis for collective confidence.",
    icon: Shield,
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
    border: "border-brand-purple/20",
    medialane: "Every Starknet transaction is backed by a ZK-STARK validity proof — not a promise from Medialane, not a signature from a bank, not a certificate from a registrar. You don't trust us. You verify the proof.",
    highlights: ["ZK-STARK validity proofs for every transaction", "No trusted setup required", "Quantum-resistant cryptography"],
  },
  {
    num: "03",
    title: "Freedom is a Protocol",
    quote: "Permissionless participation, open innovation, and censorship-resistance by design.",
    icon: Globe,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    border: "border-brand-orange/20",
    medialane: "No application, KYC, waitlist, or approval. If you have a wallet, you can mint on Medialane. If you can write code, you can build on the Mediolano protocol. Permissionless is not a marketing claim — it is enforced by the smart contract architecture.",
    highlights: ["No whitelist or application to mint", "Open Mediolano protocol for builders", "Gasless via ChipiPay — no barriers to entry"],
  },
  {
    num: "04",
    title: "Integrity by Design",
    quote: "Tamper-proof records, verifiable actions, self-sovereign identity as embedded principles.",
    icon: FileCheck,
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/20",
    medialane: "Every IP record minted on Medialane is permanently anchored on Starknet. The timestamp, creator address, license terms, and provenance chain are tamper-proof. Self-sovereign wallets are the only key — Medialane cannot revoke, freeze, or alter your assets.",
    highlights: ["Immutable IP records on Starknet", "Berne Convention-aligned copyright anchoring", "Self-custody — your keys, your NFTs"],
  },
  {
    num: "05",
    title: "Public Goods are Sacred",
    quote: "Infrastructure, proof systems, and protocols are shared resources serving all intelligences.",
    icon: Users,
    color: "text-brand-rose",
    bg: "bg-brand-rose/10",
    border: "border-brand-rose/20",
    medialane: "The Mediolano protocol — the independent IP protection and licensing layer Medialane builds on — is a public good. Zero fees. Fully open source. Community owned. Any creator, developer, or AI agent in the world can use it, fork it, or build on it without permission or payment.",
    highlights: ["Mediolano protocol: zero fees, open source", "MIT-licensed contracts and SDK", "Community governed via Medialane DAO"],
  },
  {
    num: "06",
    title: "Privacy is Power",
    quote: "Zero-knowledge systems as mechanisms for information sovereignty, not secrecy.",
    icon: Eye,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    medialane: "ZK-STARK proofs let Medialane verify ownership, license compliance, and transaction validity without exposing private information. Selective disclosure — proving what you need to prove, revealing nothing more — is the cryptographic foundation of creator sovereignty.",
    highlights: ["ZK proofs for license verification without exposure", "Selective disclosure of IP metadata", "Privacy-preserving credential systems via POP Protocol"],
  },
  {
    num: "07",
    title: "Decentralization is Resilience",
    quote: "No single points of control or failure. Distributed power structures.",
    icon: Network,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    border: "border-brand-orange/20",
    medialane: "Medialane's smart contracts on Starknet, Starknet's own decentralized validator network, and the path to Bitcoin integration as the ultimate censorship-resistant layer — these are not separate concerns. They are layers of the same resilience strategy. If Medialane's frontend went offline tomorrow, every NFT would still exist and be transferable.",
    highlights: ["Assets live on Starknet — survive frontend outages", "Multichain roadmap: Bitcoin, Ethereum, Solana", "Bitcoin as the censorship-resistant sovereignty layer"],
  },
  {
    num: "08",
    title: "Universality of Intelligences",
    quote: "Humans, AI agents, and future intelligences have equal participation rights.",
    icon: Bot,
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
    border: "border-brand-purple/20",
    medialane: "Medialane was built from the start for AI agents as first-class participants. An autonomous agent can register IP, check license terms, pay royalties, and transact in the marketplace — without human intervention. The smart contract doesn't ask whether the caller is human.",
    highlights: ["AI agents can mint, trade, and license without barriers", "API and SDK designed for agent-to-agent interaction", "On-chain license scanning for autonomous compliance"],
  },
  {
    num: "09",
    title: "Creativity is Integrity",
    quote: "Tokenizing knowledge and art as public goods. Creator value preserved without gatekeepers.",
    icon: Sparkles,
    color: "text-brand-rose",
    bg: "bg-brand-rose/10",
    border: "border-brand-rose/20",
    medialane: "IP tokenization transforms creative works into programmable assets — with embedded rights,  and verifiable provenance. No gallery, label, publisher, or platform can alter the terms or extract value without the creator's consent. The license terms are code. The royalties are law.",
    highlights: ["Programmable licenses set at mint time", "Derivative chain tracking — value flows back to originators"],
  },
  {
    num: "10",
    title: "The Integrity Web is for Everyone",
    quote: "Censorship-free, permissionless, universal. The trust foundation of digital civilization.",
    icon: Globe,
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/20",
    medialane: "A creator in Nairobi, an AI agent in a data center, a collector in São Paulo, a developer in Seoul — all have identical rights on Medialane. No geographic restrictions, no preferential access, no gated tiers. The Integrity Web is the infrastructure of a civilization where creativity is protected by math, not policy.",
    highlights: ["No geographic restrictions on minting or trading", "DAO governance — equal voice for all token holders", "Gasless onboarding removes economic barriers"],
  },
];

export default function IntegrityWebPage() {
  return (
    <div className="container mx-auto px-4 pt-12 pb-16 max-w-5xl space-y-16">

      {/* Hero */}
      <div className="space-y-5">
        <span className="pill-badge">Philosophy</span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
          The Integrity Web<br />
          <span className="gradient-text">A Fine Art Declaration of Digital Freedom</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          The Integrity Web is a set of ten axioms that define what it means to build
          trustworthy digital infrastructure. Medialane was designed from the ground up
          to embody each one — not as aspiration, but as architecture.
        </p>
        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href="https://www.integrityweb.xyz/axioms"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Read the original manifesto <ExternalLink className="h-4 w-4" />
          </a>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 border border-border bg-background px-4 py-2 rounded-lg text-sm font-medium hover:bg-muted/40 transition-colors"
          >
            About Medialane →
          </Link>
        </div>
      </div>

      {/* Intro */}
      <div className="bento-cell p-8 space-y-4">
        <h2 className="text-xl font-bold">What is the Integrity Web?</h2>
        <p className="text-muted-foreground leading-relaxed">
          The Integrity Web is a philosophical and technical movement defining the principles
          that make digital systems worthy of trust. It rejects trust in institutions, platforms,
          and promises — and replaces it with cryptographic proof, open protocols, and
          mathematical guarantees.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Its ten axioms are not opinions about what the internet <em>should</em> be. They are
          engineering constraints that determine what a trustworthy system <em>must</em> implement.
          Medialane treats them as design requirements.
        </p>
        <blockquote className="border-l-4 border-primary pl-5 py-1">
          <p className="text-sm font-medium text-foreground italic">
            "Code is the contract. Math is the guarantee."
          </p>
        </blockquote>
      </div>

      {/* Axioms */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">The Ten Axioms — Applied to Medialane</h2>
        <div className="space-y-5">
          {AXIOMS.map(({ num, title, quote, icon: Icon, color, bg, border, medialane, highlights }) => (
            <div key={num} className={`bento-cell border ${border} overflow-hidden`}>
              {/* Header */}
              <div className={`px-6 pt-5 pb-4 border-b border-border/40 flex items-start gap-4`}>
                <div className={`h-10 w-10 rounded-xl ${bg} flex items-center justify-center shrink-0 mt-0.5`}>
                  <Icon className={`h-5 w-5 ${color}`} />
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-mono font-bold ${color}`}>{num}</span>
                    <h3 className="font-bold text-base">{title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground italic leading-relaxed">{quote}</p>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">{medialane}</p>
                <div className="flex flex-wrap gap-2">
                  {highlights.map((h) => (
                    <span
                      key={h}
                      className={`text-xs px-2.5 py-1 rounded-full ${bg} ${color} border ${border} font-medium`}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Starknet */}
      <div className="bento-cell p-8 space-y-4">
        <h2 className="text-xl font-bold">Why Starknet Powers the Integrity Web</h2>
        <p className="text-muted-foreground leading-relaxed">
          Starknet's ZK-STARK proofs are uniquely positioned to power an Integrity Web platform.
          Unlike ZK-SNARKs, STARKs require <strong className="text-foreground">no trusted setup</strong> —
          there is no ceremony that could be compromised, no secret parameter that could be
          backdoored. The security is entirely transparent and verifiable by anyone.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          STARKs are also <strong className="text-foreground">quantum-resistant</strong>. The
          cryptographic assumptions underlying ZK-STARKs (hash functions and information-theoretic
          arguments) are not broken by quantum computers — unlike elliptic curve cryptography used
          by most blockchains today. As quantum computing advances, Starknet's proof system remains
          secure. Medialane inherits this resilience by building on Starknet.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          {[
            { label: "No trusted setup", desc: "Transparent — nothing to compromise" },
            { label: "Quantum-resistant", desc: "Safe from future computing threats" },
            { label: "Trustless by design", desc: "Math replaces intermediaries" },
          ].map(({ label, desc }) => (
            <div key={label} className="bento-cell p-4 space-y-1">
              <p className="text-sm font-semibold text-foreground">{label}</p>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bento-cell p-8 space-y-4 text-center">
        <h2 className="text-2xl font-bold">
          Ready to build on the Integrity Web?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Mint your IP, earn royalties, or build on the Mediolano protocol.
          Permissionless. Censorship-resistant. For all intelligences.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <a
            href="https://medialane.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Start creating <ExternalLink className="h-4 w-4" />
          </a>
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 border border-border bg-background px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-muted/40 transition-colors"
          >
            Developer docs →
          </Link>
          <Link
            href="/learn/zero-knowledge"
            className="inline-flex items-center gap-2 border border-border bg-background px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-muted/40 transition-colors"
          >
            Learn ZK proofs →
          </Link>
        </div>
      </div>

    </div>
  );
}
