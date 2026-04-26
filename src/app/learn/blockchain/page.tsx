import type { Metadata } from "next";
import { Globe, Layers, Shield, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blockchain | Medialane Learn",
  description: "Understand how blockchain technology works and why it matters for intellectual property and digital ownership.",
};

export default function BlockchainPage() {
  return (
    <div className="space-y-10 max-w-3xl">

      <div className="space-y-3">
        <span className="pill-badge">Fundamentals</span>
        <h2 className="text-2xl font-bold">What is Blockchain?</h2>
        <p className="text-muted-foreground leading-relaxed">
          A blockchain is a distributed, append-only ledger — a database that is maintained by thousands
          of computers simultaneously, where records can be added but never erased or silently altered.
          This simple property has profound implications for ownership, trust, and intellectual property.
        </p>
      </div>

      {/* Core properties */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Core Properties</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: Layers, title: "Immutability", desc: "Once a record is added to a blockchain, it cannot be changed or deleted. Every transaction, every ownership transfer, every license grant is permanent and auditable." },
            { icon: Globe, title: "Decentralization", desc: "No single party controls the blockchain. Thousands of independent nodes validate and store the data, meaning no government, company, or individual can censor or alter it." },
            { icon: Shield, title: "Trustlessness", desc: "You don't need to trust any party — you trust the math. Smart contracts execute exactly as written, with no possibility of last-minute changes or hidden clauses." },
            { icon: Clock, title: "Transparency", desc: "All transactions are publicly visible. Anyone can verify who owns what, when a transfer happened, and what licenses are attached — without asking anyone for permission." },
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

      {/* How it works */}
      <div className="bento-cell p-6 space-y-4">
        <h3 className="font-semibold">How It Works</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          When you mint an NFT on Medialane, a record is written to the Starknet blockchain stating:
          &ldquo;This wallet address is the owner of this IP asset, registered at this timestamp, with these license terms.&rdquo;
          That record is cryptographically linked to every record before it — forming an unbroken chain of history.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          When you later sell or license the asset, another record is appended: &ldquo;The previous owner transferred
          ownership to this new wallet address.&rdquo; The full provenance history is always visible and cannot be falsified.
        </p>
      </div>

      {/* Starknet context */}
      <div className="bento-cell p-6 space-y-3">
        <h3 className="font-semibold">Medialane & Starknet</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Medialane is built on <strong className="text-foreground">Starknet</strong>, an Ethereum Layer 2 network
          that uses zero-knowledge proofs to bundle thousands of transactions into a single cryptographic proof
          verified on Ethereum. This gives Medialane the security guarantees of Ethereum at a fraction of the
          cost — making gasless transactions feasible.
        </p>
      </div>

    </div>
  );
}
