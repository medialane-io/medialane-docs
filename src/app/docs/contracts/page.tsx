import type { Metadata } from "next";
import { FileCode2, ExternalLink, Shield, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contracts | Medialane Docs",
  description: "Medialane v3 smart contracts on Starknet Mainnet — immutable, permissionless, open source Cairo contracts with real deployed addresses.",
};

const CONTRACTS = [
  {
    category: "Marketplace",
    items: [
      {
        name: "Marketplace v3 (ERC-721)",
        address: "0x004387e58d469f19332dd5d20846b10339ddc49ef208025ec7d5bef294a8daf3",
        desc: "Handles listing creation, offer submission, order fulfillment, cancellation, and ERC-2981 royalty distribution for standard (ERC-721) NFTs. Orders use SNIP-12 typed data signing.",
      },
      {
        name: "Marketplace v3 (ERC-1155)",
        address: "0x035836932ba1d219e00b8e42cd9a433fb2b211a08edcaa8bae40232f335f777d",
        desc: "ERC-1155 multi-edition marketplace. Supports partial fills via remainingAmount tracking — a single order can be fulfilled by multiple buyers across multiple transactions.",
      },
      {
        name: "NFTComments",
        address: "0x024f97eb5abe659fb650bf162b5fc16501f8f3863a7369901ce6099462e62799",
        desc: "Permissionless on-chain comment contract. Any wallet can post a comment on any token. Comments are permanent, censorship-resistant, and indexed by the Medialane indexer.",
      },
    ],
  },
  {
    category: "Collections & Launchpad",
    items: [
      {
        name: "Collection Registry (ERC-721 Factory)",
        address: "0x05c49ee5d3208a2c2e150fdd0c247d1195ed9ab54fa2d5dea7a633f39e4b205b",
        desc: "Factory for deploying ERC-721 IP NFT collections. Each deploy_collection() call deploys a new ERC-721 contract, assigns a unique numeric collectionId, and emits CollectionDeployed.",
      },
      {
        name: "IP Collection 1155 Factory (ERC-1155)",
        address: "0x006b2dc7ca7c4f466bb4575ba043d934310f052074f849caf853a86bcb819fd6",
        desc: "Factory for deploying ERC-1155 multi-edition collections. Each collection is a separate contract owned by the creator. Emits CollectionDeployed with contract address, name, symbol, and base_uri.",
      },
      {
        name: "Collection Drop Factory",
        address: "0x03587f42e29daee1b193f6cf83bf8627908ed6632d0d83fcb26225c50547d800",
        desc: "Factory for timed NFT drop campaigns. Enforces supply caps, mint windows, per-wallet limits, allowlists, and mint prices entirely on-chain. No admin can override these parameters after deploy.",
      },
      {
        name: "POP Protocol Factory",
        address: "0x00b32c34b427d8f346b5843ada6a37bd3368d879fc752cd52b68a87287f60111",
        desc: "Factory for Proof-of-Participation campaigns. Each campaign deploys a soulbound (non-transferable) ERC-721 credential contract. Credentials are claimable by eligible wallets and permanently on-chain.",
      },
    ],
  },
];

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
          All Medialane contracts are Cairo smart contracts deployed on Starknet Mainnet.
          The current v3 contracts are fully immutable — no admin keys, no upgrade paths,
          no emergency pause. Rules are enforced by code.
        </p>
      </div>

      {/* Immutable design callout */}
      <div className="bento-cell p-5 space-y-3 border-primary/20">
        <div className="flex items-center gap-2">
          <Lock className="h-4 w-4 text-primary" />
          <h3 className="font-semibold text-sm">Immutable &amp; Permissionless by Design</h3>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          v3 contracts were deployed in April 2026. The constructor accepts only a{" "}
          <code className="font-mono bg-muted px-1 py-0.5 rounded">native_token_address</code> — there
          is no admin account, no <code className="font-mono bg-muted px-1 py-0.5 rounded">UpgradeableComponent</code>, and no owner role.
          Previous v2 contracts are decommissioned. The indexer started scanning from block{" "}
          <code className="font-mono bg-muted px-1 py-0.5 rounded">9130000</code>.
        </p>
        <div className="flex flex-wrap gap-2">
          {["No admin keys", "No upgrade path", "No emergency pause", "Royalties on every trade", "ZK-proven execution"].map((t) => (
            <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
              {t}
            </span>
          ))}
        </div>
      </div>

      {CONTRACTS.map(({ category, items }) => (
        <div key={category} className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">{category}</h3>
          <div className="space-y-2">
            {items.map(({ name, address, desc }) => (
              <div key={name} className="bento-cell p-5 space-y-2">
                <p className="text-sm font-semibold text-foreground">{name}</p>
                <a
                  href={`https://starkscan.co/contract/${address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-primary/70 break-all hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  {address}
                  <ExternalLink className="h-3 w-3 shrink-0" />
                </a>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Standards */}
      <div className="bento-cell p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Shield className="h-4 w-4 text-muted-foreground" />
          <h3 className="font-semibold text-sm">Standards &amp; Compatibility</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            "ERC-721",
            "ERC-1155",
            "ERC-2981 (On-chain Royalties)",
            "SRC-5 (Introspection)",
            "SRC-6 (Account Standard)",
            "SNIP-2 (Events)",
            "SNIP-9 (Session Keys)",
            "SNIP-12 (Typed Data Signing)",
          ].map((s) => (
            <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-mono">
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href="https://starkscan.co"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          Starkscan Explorer <ExternalLink className="h-3.5 w-3.5" />
        </a>
        <a
          href="https://github.com/medialane-io"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          GitHub Organisation <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

    </div>
  );
}
