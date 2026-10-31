import type { Metadata } from "next";
import Link from "next/link";
import { Lock, Eye, Zap, Shield } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "https://docs.medialane.io/learn/zero-knowledge" },
  title: "Zero Knowledge | Medialane Learn",
  description: "Learn how zero-knowledge proofs power Starknet and what they mean for IP privacy and scalability.",
  openGraph: {
    title: "Zero Knowledge | Medialane Learn",
    description: "Learn how zero-knowledge proofs power Starknet and what they mean for IP privacy and scalability.",
    url: "https://docs.medialane.io/learn/zero-knowledge",
  },
  twitter: {
    title: "Zero Knowledge | Medialane Learn",
    description: "Learn how zero-knowledge proofs power Starknet and what they mean for IP privacy and scalability.",
  },
};

export default function ZeroKnowledgePage() {
  return (
    <div className="space-y-10">

      <div className="space-y-3">
        <span className="pill-badge">Cryptography</span>
        <h2 className="text-2xl font-bold">Zero-Knowledge Proofs</h2>
        <p className="text-muted-foreground leading-relaxed">
          A zero-knowledge proof (ZKP) lets a prover show that something is true without revealing anything
          about <em>why</em> it is true. Imagine proving knowledge of a secret without ever saying the secret aloud.
          This idea is the foundation of Starknet, with implications for privacy, scalability, and trust.
        </p>
      </div>

      <div className="bento-cell p-6 space-y-3">
        <h3 className="font-semibold">The Intuition</h3>
        <p className="text-base text-muted-foreground leading-relaxed">
          Imagine a maze with two entrances (A and B) that meet in the middle. A prover wants to show knowledge of the
          secret path through without revealing the path itself. The prover enters from one side while a verifier picks
          which exit they want to see the prover emerge from. Repeated 100 times, if the prover always emerges from the
          correct exit, the verifier is statistically certain the path is known, yet nothing
          about the path itself has been revealed.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed">
          Real ZK proofs work similarly, using mathematics and taking milliseconds.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Why It Matters</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: Shield, title: "Validity", desc: "ZK proofs verify that a computation was performed correctly, so transactions that violate the rules of the protocol are rejected." },
            { icon: Eye, title: "Privacy", desc: "The same proof mechanics let an application confirm ownership or eligibility without revealing the underlying data, proving a token is held without revealing which one." },
            { icon: Zap, title: "Scalability", desc: "Starknet bundles thousands of transactions into one ZK-STARK proof verified on Ethereum. This lowers gas fees and raises throughput." },
            { icon: Lock, title: "Security", desc: "ZK-STARKs (the variant used by Starknet) rely on hash functions, and no known quantum attack breaks them." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bento-cell p-5 space-y-3">
              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <h4 className="font-semibold text-base">{title}</h4>
              <p className="text-base text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bento-cell p-6 space-y-3">
        <h3 className="font-semibold">ZK Proofs on Medialane</h3>
        <p className="text-base text-muted-foreground leading-relaxed">
          Every transaction on Medialane (minting an NFT, transferring ownership, executing a marketplace sale)
          is included in a batch that Starknet proves to Ethereum with a ZK-STARK. This means IP records
          inherit the full security of Ethereum, regardless of how many transactions are processed.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed">
          The same selective-disclosure property extends beyond transaction validity, to what a
          creator chooses to keep confidential about their own economics. See{" "}
          <Link href="/learn/privacy" className="text-primary hover:underline">Privacy on Medialane</Link>.
        </p>
      </div>

    </div>
  );
}
