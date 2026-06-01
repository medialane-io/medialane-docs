import type { Metadata } from "next";
import { FileCode2, ExternalLink, Shield, Lock } from "lucide-react";
import { CONTRACTS_BY_CATEGORY } from "@/lib/contracts";

export const metadata: Metadata = {
  title: "Contracts | Medialane Docs",
  description: "Medialane smart contracts on Starknet Mainnet — immutable, permissionless, open source Cairo contracts with real deployed addresses.",
  openGraph: {
    title: "Contracts | Medialane Docs",
    description: "Medialane smart contracts on Starknet Mainnet — immutable, permissionless, open source Cairo contracts with real deployed addresses.",
    url: "https://docs.medialane.io/docs/contracts",
  },
  twitter: {
    title: "Contracts | Medialane Docs",
    description: "Medialane smart contracts on Starknet Mainnet — immutable, permissionless, open source Cairo contracts with real deployed addresses.",
  },
};

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
          The current contracts are fully immutable: no admin account, no{" "}
          <code className="font-mono bg-muted px-1 py-0.5 rounded">UpgradeableComponent</code>, no owner role,
          no emergency pause. Evolution happens by redeploy, not by upgrade — the class hashes
          themselves cannot be rotated. The collection factories shipped fresh v0.2.0 / v0.3.0
          deployments on 2026-05-22, and the redesigned marketplace venues
          (Medialane721 / Medialane1155) were redeployed as new immutable contracts on
          2026-05-31.
        </p>
        <div className="flex flex-wrap gap-2">
          {["No admin keys", "No upgrade path", "No emergency pause", "Atomic swaps", "ZK-proven execution"].map((t) => (
            <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
              {t}
            </span>
          ))}
        </div>
      </div>

      {CONTRACTS_BY_CATEGORY.map(({ category, items }) => (
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
