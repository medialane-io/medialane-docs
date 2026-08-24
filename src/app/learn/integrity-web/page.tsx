import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Shield, Lock, Globe, Layers, FileCheck, Eye, Network, Bot, Sparkles, Users } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "https://docs.medialane.io/learn/integrity-web" },
  title: "The Integrity Web | Learn | Medialane",
  description: "Understand the Integrity Web: the 10 axioms of digital freedom and how Medialane embodies each one through ZK proofs, smart contracts, and permissionless design.",
  openGraph: {
    title: "The Integrity Web | Learn | Medialane",
    description: "Understand the Integrity Web: the 10 axioms of digital freedom and how Medialane embodies each one through ZK proofs, smart contracts, and permissionless design.",
    url: "https://docs.medialane.io/learn/integrity-web",
  },
  twitter: {
    title: "The Integrity Web | Learn | Medialane",
    description: "Understand the Integrity Web: the 10 axioms of digital freedom and how Medialane embodies each one through ZK proofs, smart contracts, and permissionless design.",
  },
};

const AXIOMS = [
  {
    num: "01",
    title: "Code is Math, Math is Reality",
    quote: "Computational integrity is the foundation of truth; cryptographic proof is objective reality, not opinion.",
    icon: Layers,
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/20",
    medialane: "The v3 marketplace contracts have no admin keys and cannot be upgraded. What they do is determined by the deployed code, which is open source and verifiable by anyone. A listing, an order, a transfer: the rules are fixed at deployment.",
    highlights: ["ZK-STARK proofs verified on Starknet", "Cairo 2 smart contracts open-sourced", "Immutable after deployment, no admin keys"],
  },
  {
    num: "02",
    title: "Proof Replaces Trust",
    quote: "Mathematical verification removes the need for intermediaries or gatekeepers; validity proofs create collective confidence.",
    icon: Shield,
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
    border: "border-brand-purple/20",
    medialane: "Every Starknet transaction is backed by a ZK-STARK validity proof, verifiable by anyone independently of Medialane, a bank, or a registrar.",
    highlights: ["ZK-STARK validity proofs for every transaction", "No trusted setup required", "Quantum-resistant cryptography"],
  },
  {
    num: "03",
    title: "Freedom in Protocol",
    quote: "Participation is permissionless, innovation is open, censorship is impossible — guaranteed by technical design.",
    icon: Globe,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    border: "border-brand-orange/20",
    medialane: "No application, KYC, waitlist, or approval. If you have a wallet, you can mint on Medialane. If you can write code, you can build on the Mediolano protocol. Permissionless here means the smart contract architecture enforces it directly.",
    highlights: ["No whitelist or application to mint", "Open Mediolano protocol for builders", "Gasless on medialane.io, open access from the start"],
  },
  {
    num: "04",
    title: "Integrity by Design",
    quote: "Records cannot be altered, actions are verifiable, and individuals control their own identities.",
    icon: FileCheck,
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/20",
    medialane: "Every IP record minted on Medialane is anchored on Starknet. The timestamp, creator address, license terms, and provenance chain are tamper-proof, held by your self-sovereign wallet key, entirely outside Medialane's ability to revoke, freeze, or alter.",
    highlights: ["Immutable IP records on Starknet", "Berne Convention-aligned copyright anchoring", "Self-custody: your keys, your NFTs"],
  },
  {
    num: "05",
    title: "Public Goods are Sacred",
    quote: "Essential infrastructure — proof systems, identity registries — belongs to the community and serves all intelligences equally.",
    icon: Users,
    color: "text-brand-rose",
    bg: "bg-brand-rose/10",
    border: "border-brand-rose/20",
    medialane: "The Mediolano protocol (the independent IP protection and licensing layer Medialane builds on) is a public good. Zero fees. Fully open source. Any creator, developer, or AI agent can use it, fork it, or build on it without permission or payment.",
    highlights: ["Mediolano protocol: zero fees, open source", "MIT-licensed contracts and SDK", "Permissionless, no approval needed to build on it"],
  },
  {
    num: "06",
    title: "Privacy is Power",
    quote: "Creators retain ownership of their information; zero-knowledge systems protect autonomy and sovereignty — not secrecy.",
    icon: Eye,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    medialane: "ZK-STARK proofs let Medialane verify ownership, license compliance, and transaction validity without exposing private information. Selective disclosure (proving what you need to prove, revealing nothing more) is the cryptographic foundation of creator sovereignty.",
    highlights: ["ZK proofs for license verification without exposure", "Selective disclosure of IP metadata", "Privacy-preserving credential systems via POP Protocol"],
  },
  {
    num: "07",
    title: "Decentralization is Resilience",
    quote: "Distributed power removes single points of failure; integrity persists with no central controller.",
    icon: Network,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    border: "border-brand-orange/20",
    medialane: "Medialane's smart contracts on Starknet, Starknet's own decentralized validator network, and the long-term architecture toward fully chain-agnostic, censorship-resistant infrastructure form layers of one resilience strategy. If Medialane's frontend went offline, every NFT would remain on-chain and transferable through another interface.",
    highlights: ["Assets live on Starknet, surviving frontend outages", "Long-term: chain-agnostic, censorship-resistant infrastructure", "ZK proofs + account abstraction make this possible"],
  },
  {
    num: "08",
    title: "Universality of Intelligences",
    quote: "Humans, AI agents, and future intelligences share the same right to participate, with equal standing.",
    icon: Bot,
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
    border: "border-brand-purple/20",
    medialane: "The API and smart contracts make no distinction between human users and AI agents. An autonomous agent can register IP, read license terms, and transact in the marketplace; the contracts don't check whether the caller is human. HTTP 402 billing in the Portal is designed for agent-to-agent use cases.",
    highlights: ["AI agents can mint and trade without barriers", "API and SDK designed for agent-to-agent interaction", "HTTP 402 credit billing for autonomous agents"],
  },
  {
    num: "09",
    title: "Creativity is Integrity",
    quote: "Creative work gains protection through tokenization as a shared resource; creators prosper without institutional gatekeepers.",
    icon: Sparkles,
    color: "text-brand-rose",
    bg: "bg-brand-rose/10",
    border: "border-brand-rose/20",
    medialane: "Minting on Medialane creates an immutable record of authorship and embeds license terms in the token itself. The terms travel with every transfer. No gallery, label, or platform can alter the on-chain record. The creator's address and stated terms are permanently verifiable.",
    highlights: ["Programmable licenses set at mint time", "Immutable authorship record, verifiable by anyone", "Derivative chain recorded on-chain"],
  },
  {
    num: "10",
    title: "Integrity for Everyone",
    quote: "Censorship-free, permissionless, privacy, universal — quantum resistance trust infrastructure for digital civilization.",
    icon: Globe,
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/20",
    medialane: "A creator in Nairobi, an AI agent in a data center, a collector in São Paulo, a developer in Seoul all have identical rights on Medialane, without geographic restriction, preferential access, or gated tiers. Creativity here is protected by the contract's math, applied the same way to everyone.",
    highlights: ["No geographic restrictions on minting or trading", "DAO governance, equal voice for all token holders", "Gasless onboarding removes economic barriers"],
  },
];

export default function IntegrityWebPage() {
  return (
    <div className="space-y-16">

      {/* Hero */}
      <div className="space-y-5">
        <span className="pill-badge">Philosophy</span>
        <h2 className="text-2xl font-bold">
          The Integrity Web
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          The Integrity Web is a set of ten axioms that define what trustworthy digital
          infrastructure must implement at the architectural level. This page explains
          what each axiom means and how Medialane applies it in practice.
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
        <h2 className="text-2xl font-bold">What is the Integrity Web?</h2>
        <p className="text-muted-foreground leading-relaxed">
          The Integrity Web is a philosophical and technical movement defining the principles
          that make digital systems worthy of trust. Where trust in institutions, platforms,
          or promises would normally sit, it substitutes cryptographic proof and open protocols.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Its ten axioms describe engineering constraints that determine what a trustworthy
          system <em>must</em> implement. Medialane treats them as design requirements.
        </p>
      </div>

      {/* Axioms */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">The Ten Axioms, Applied to Medialane</h2>
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
                  <p className="text-base text-muted-foreground italic leading-relaxed">{quote}</p>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4">
                <p className="text-base text-muted-foreground leading-relaxed">{medialane}</p>
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
        <h2 className="text-2xl font-bold">Why Starknet Powers the Integrity Web</h2>
        <p className="text-muted-foreground leading-relaxed">
          Starknet's ZK-STARK proofs are uniquely positioned to power an Integrity Web platform.
          Unlike ZK-SNARKs, STARKs skip the trusted-setup ceremony entirely, removing any secret
          parameter that could be backdoored. The security is entirely transparent and verifiable
          by anyone.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          STARKs are also <strong className="text-foreground">quantum-resistant</strong>. The
          cryptographic assumptions underlying ZK-STARKs (hash functions and information-theoretic
          arguments) remain unbroken by quantum computers, unlike elliptic curve cryptography used
          by most blockchains today. As quantum computing advances, Starknet's proof system remains
          secure. Medialane inherits this resilience by building on Starknet.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          {[
            { label: "No trusted setup", desc: "Transparent, nothing to compromise" },
            { label: "Quantum-resistant", desc: "Safe from future computing threats" },
            { label: "Trustless by design", desc: "Math replaces intermediaries" },
          ].map(({ label, desc }) => (
            <div key={label} className="bento-cell p-4 space-y-1">
              <p className="text-base font-semibold text-foreground">{label}</p>
              <p className="text-base text-muted-foreground">{desc}</p>
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
          Mint your IP, build on the Mediolano protocol, or start with the API.
          No approval required.
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
            href="/dev"
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
          <Link
            href="/dev/architecture"
            className="inline-flex items-center gap-2 border border-border bg-background px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-muted/40 transition-colors"
          >
            Protocol architecture →
          </Link>
        </div>
      </div>

    </div>
  );
}
