import type { Metadata } from "next";
import { FileCode2, ExternalLink, GitBranch } from "lucide-react";

export const metadata: Metadata = {
  title: "Contracts | Medialane Docs",
  description: "Medialane smart contracts — Cairo contracts for the marketplace, IP registry, POP Protocol, and royalties.",
};

const CONTRACTS = [
  {
    name: "IP Registry",
    description: "Core contract for minting and managing IP assets on the Mediolano protocol. Handles asset registration, metadata, and license attachment.",
    file: "IPRegistry.cairo",
    category: "Protocol",
  },
  {
    name: "Marketplace",
    description: "The decentralized marketplace contract. Manages listings, offers, settlement, and royalty distribution on every trade.",
    file: "Marketplace.cairo",
    category: "Marketplace",
  },
  {
    name: "Collection Registry",
    description: "ERC-721 / ERC-1155 collection factory. Creators deploy new collections from this contract with custom royalty structures and metadata.",
    file: "CollectionRegistry.cairo",
    category: "Collections",
  },
  {
    name: "IP Collection 1155",
    description: "ERC-1155 multi-edition IP collection contract. Supports multiple editions of the same creative work with shared license terms.",
    file: "IPCollection1155.cairo",
    category: "Collections",
  },
  {
    name: "Collection Drop",
    description: "Timed and allowlist-gated minting contract. Creators configure supply, timing, price, and eligibility — minting is enforced on-chain.",
    file: "CollectionDrop.cairo",
    category: "Launchpad",
  },
  {
    name: "POP Protocol",
    description: "Proof-of-Participation credential contract. Issues soulbound (non-transferable) NFTs as verifiable proof of events, milestones, and community membership.",
    file: "POPProtocol.cairo",
    category: "Launchpad",
  },
  {
    name: "Royalty Splitter",
    description: "On-chain royalty routing contract. Splits incoming payments among multiple recipients (creators, collaborators, DAO treasury) at configured percentages.",
    file: "RoyaltySplitter.cairo",
    category: "Finance",
  },
  {
    name: "Session Keys",
    description: "Starknet account abstraction module for session key management. Enables gasless transactions via authorized session keys with configurable scopes and expiry.",
    file: "SessionKeys.cairo",
    category: "Account",
  },
];

const categories = [...new Set(CONTRACTS.map((c) => c.category))];

export default function ContractsPage() {
  return (
    <div className="space-y-10 max-w-3xl">

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <FileCode2 className="h-5 w-5 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">Smart Contracts</span>
        </div>
        <h2 className="text-2xl font-bold">Contracts</h2>
        <p className="text-muted-foreground leading-relaxed">
          Medialane is powered by Cairo smart contracts deployed on Starknet. All contracts are
          open source, audited, and part of the <strong className="text-foreground">medialane-contracts</strong> repository.
        </p>
      </div>

      {/* By category */}
      {categories.map((cat) => (
        <div key={cat} className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">{cat}</h3>
          <div className="space-y-2">
            {CONTRACTS.filter((c) => c.category === cat).map(({ name, description, file }) => (
              <div key={name} className="bento-cell p-5 space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-semibold text-sm">{name}</h4>
                  <code className="text-xs font-mono text-primary/70 shrink-0">{file}</code>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Standards */}
      <div className="bento-cell p-6 space-y-3">
        <h3 className="font-semibold">Standards & Compatibility</h3>
        <div className="flex flex-wrap gap-2">
          {["ERC-721", "ERC-1155", "ERC-2981 (Royalties)", "SRC-5 (Introspection)", "SRC-6 (Account)", "SNIP-2 (Events)"].map((s) => (
            <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-mono">
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-4">
        <a
          href="https://github.com/medialane-io/medialane-contracts"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          <GitBranch className="h-4 w-4" /> Source on GitHub <ExternalLink className="h-3.5 w-3.5" />
        </a>
        <a
          href="https://starkscan.co"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          View on Starkscan <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

    </div>
  );
}
