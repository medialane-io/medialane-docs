import type { Metadata } from "next";
import { Package, Terminal, Code2, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SDK | Medialane Docs",
  description: "The @medialane/sdk TypeScript package — installation, configuration, and integration guide.",
};

const MODULES = [
  {
    name: "Assets",
    description: "Query, mint, and manage IP assets on the Mediolano protocol. Fetch asset details, ownership history, and attached licenses.",
    methods: ["getAsset(id)", "getAssetsByOwner(address)", "mintAsset(params)", "getAssetHistory(id)"],
  },
  {
    name: "Marketplace",
    description: "Interact with the Medialane marketplace — create listings, submit offers, and execute trades.",
    methods: ["createListing(params)", "cancelListing(id)", "submitOffer(params)", "acceptOffer(id)"],
  },
  {
    name: "Collections",
    description: "Deploy and manage IP collections, drops, and POP Protocol credentials.",
    methods: ["createCollection(params)", "getCollection(id)", "mintFromDrop(params)", "claimCredential(id)"],
  },
  {
    name: "Portfolio",
    description: "Retrieve portfolio data — owned assets, active listings, received offers, and transaction history.",
    methods: ["getPortfolio(address)", "getListings(address)", "getOffers(address)", "getActivity(address)"],
  },
];

export default function SDKPage() {
  return (
    <div className="space-y-10 max-w-3xl">

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Package className="h-5 w-5 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">SDK</span>
        </div>
        <h2 className="text-2xl font-bold">@medialane/sdk</h2>
        <p className="text-muted-foreground leading-relaxed">
          The official TypeScript SDK for integrating with the Medialane platform. Query assets,
          interact with the marketplace, manage collections, and build custom interfaces
          on top of the Mediolano protocol.
        </p>
      </div>

      {/* Installation */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Installation</h3>
        <div className="space-y-2">
          {[
            { label: "npm", cmd: "npm install @medialane/sdk" },
            { label: "bun", cmd: "bun add @medialane/sdk" },
            { label: "yarn", cmd: "yarn add @medialane/sdk" },
          ].map(({ label, cmd }) => (
            <div key={label} className="flex items-center gap-3 bento-cell px-4 py-3">
              <span className="text-xs text-muted-foreground font-mono w-8">{label}</span>
              <code className="text-sm font-mono text-foreground flex-1">{cmd}</code>
            </div>
          ))}
        </div>
      </div>

      {/* Quick start */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Quick Start</h3>
        <div className="bento-cell p-4 font-mono text-sm space-y-1 text-muted-foreground">
          <div><span className="text-primary">import</span> {"{ MedialaneClient }"} <span className="text-primary">from</span> <span className="text-brand-orange">'@medialane/sdk'</span>;</div>
          <div className="pt-1">
            <span className="text-primary">const</span> client = <span className="text-primary">new</span> <span className="text-brand-blue">MedialaneClient</span>({"{"}
          </div>
          <div className="pl-4">apiKey: process.env.MEDIALANE_API_KEY,</div>
          <div className="pl-4">network: <span className="text-brand-orange">'mainnet'</span>,</div>
          <div>{"}"});</div>
          <div className="pt-1 text-muted-foreground/60">{"// Fetch an asset"}</div>
          <div><span className="text-primary">const</span> asset = <span className="text-primary">await</span> client.assets.<span className="text-brand-blue">getAsset</span>(<span className="text-brand-orange">'0x1234...'</span>);</div>
        </div>
      </div>

      {/* Modules */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">SDK Modules</h3>
        <div className="space-y-3">
          {MODULES.map(({ name, description, methods }) => (
            <div key={name} className="bento-cell p-5 space-y-3">
              <div className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-primary" />
                <h4 className="font-semibold text-sm">client.{name.toLowerCase()}</h4>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
              <div className="flex flex-wrap gap-2">
                {methods.map((m) => (
                  <code key={m} className="text-xs bg-muted/50 border border-border/60 px-2 py-0.5 rounded font-mono text-muted-foreground">
                    {m}
                  </code>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-4">
        <a
          href="https://www.npmjs.com/package/@medialane/sdk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          NPM package <ExternalLink className="h-3.5 w-3.5" />
        </a>
        <a
          href="https://github.com/medialane-io/medialane-sdk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          GitHub <ExternalLink className="h-3.5 w-3.5" />
        </a>
        <Link
          href="/docs/api"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          API Reference <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <Link
          href="/apps"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          Developer Portal <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

    </div>
  );
}
