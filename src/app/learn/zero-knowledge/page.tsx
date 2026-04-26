import type { Metadata } from "next";
import { Lock, Eye, Zap, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Zero Knowledge | Medialane Learn",
  description: "Learn how zero-knowledge proofs power Starknet and what they mean for IP privacy and scalability.",
};

export default function ZeroKnowledgePage() {
  return (
    <div className="space-y-10 max-w-3xl">

      <div className="space-y-3">
        <span className="pill-badge">Cryptography</span>
        <h2 className="text-2xl font-bold">Zero-Knowledge Proofs</h2>
        <p className="text-muted-foreground leading-relaxed">
          A zero-knowledge proof (ZKP) lets you prove that something is true without revealing anything
          about <em>why</em> it is true. Imagine proving you know a secret without ever saying the secret aloud.
          This seemingly simple idea is the foundation of Starknet — and it has powerful implications for
          privacy, scalability, and trust.
        </p>
      </div>

      {/* Simple analogy */}
      <div className="bento-cell p-6 space-y-3">
        <h3 className="font-semibold">The Intuition</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Imagine a maze with two entrances (A and B) that meet in the middle. You want to prove you know the
          secret path through without revealing the path itself. You enter from one side while a verifier picks
          which exit they want to see you emerge from. Repeat this 100 times — if you always emerge from the
          correct exit, the verifier is statistically certain you know the path, but you&apos;ve revealed nothing
          about the path itself.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Real ZK proofs work similarly — but with mathematics instead of mazes, and in milliseconds.
        </p>
      </div>

      {/* Properties */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Why It Matters</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: Shield, title: "Validity", desc: "ZK proofs guarantee that a computation was performed correctly — no one can submit fake transactions that violate the rules of the protocol." },
            { icon: Eye, title: "Privacy", desc: "Future applications can prove ownership or eligibility without revealing the underlying data. Prove you own an IP without revealing which specific IP." },
            { icon: Zap, title: "Scalability", desc: "Starknet bundles thousands of transactions into one ZK-STARK proof verified on Ethereum. This makes gas fees tiny and throughput massive." },
            { icon: Lock, title: "Security", desc: "ZK-STARKs (the variant used by Starknet) are quantum-resistant — unlike older cryptographic systems, they are secure against future quantum computers." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bento-cell p-5 space-y-3">
              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <h4 className="font-semibold text-sm">{title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Starknet connection */}
      <div className="bento-cell p-6 space-y-3">
        <h3 className="font-semibold">ZK Proofs on Medialane</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Every transaction on Medialane — minting an NFT, transferring ownership, executing a marketplace sale —
          is included in a batch that Starknet proves to Ethereum with a ZK-STARK. This means your IP records
          inherit the full security of Ethereum, regardless of how many transactions are processed.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          As the protocol evolves, ZK technology will enable private licensing (prove you&apos;re licensed to use
          something without revealing what it is) and selective disclosure (share attributes of an IP without
          revealing its full content).
        </p>
      </div>

    </div>
  );
}
