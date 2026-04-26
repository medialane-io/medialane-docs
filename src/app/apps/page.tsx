import type { Metadata } from "next";
import { ExternalLink, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Apps | Medialane",
  description: "Explore all Medialane applications — marketplace, Web3 dApp, developer portal, and DAO governance.",
};

const APPS = [
  {
    name: "Medialane",
    url: "https://medialane.io",
    label: "medialane.io",
    description:
      "The main IP marketplace. Mint NFTs, trade intellectual property, manage your portfolio, explore creators, and claim POP Protocol credentials — gasless and built on Starknet.",
    tags: ["Marketplace", "NFT Minting", "Creator Launchpad", "POP Protocol", "Collection Drop"],
    badge: "Live",
    badgeColor: "bg-green-500/15 text-green-400 border-green-500/30",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
  },
  {
    name: "Medialane dApp",
    url: "https://app.medialane.io",
    label: "app.medialane.io",
    description:
      "Web3-native interface for power users. Connect any Starknet wallet, interact directly with smart contracts, manage session keys, and access all platform features with full self-custody.",
    tags: ["Web3", "Starknet Wallets", "Self-Custody", "Smart Contracts"],
    badge: "Live",
    badgeColor: "bg-green-500/15 text-green-400 border-green-500/30",
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
  },
  {
    name: "Medialane Portal",
    url: "https://portal.medialane.io",
    label: "portal.medialane.io",
    description:
      "Developer portal for API and SDK access. Manage API keys, explore REST documentation, monitor usage, and integrate Medialane into your own applications and services.",
    tags: ["API Keys", "SDK", "Developer Tools", "Usage Analytics"],
    badge: "Beta",
    badgeColor: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
  },
  {
    name: "Medialane DAO",
    url: "https://dao.medialane.io",
    label: "dao.medialane.io",
    description:
      "Governance platform for Medialane DAO LLC. Submit and vote on proposals, delegate voting power, view the treasury, and participate in shaping the future of the platform.",
    tags: ["Governance", "Voting", "Treasury", "MDLN Token"],
    badge: "Coming soon",
    badgeColor: "bg-muted text-muted-foreground border-border",
    color: "text-brand-rose",
    bg: "bg-brand-rose/10",
  },
];

const SDK = {
  name: "@medialane/sdk",
  description:
    "Open-source TypeScript SDK for integrating with the Medialane platform. Query assets, manage minting, interact with the marketplace, and build your own interfaces on top of our protocol.",
  npm: "npm install @medialane/sdk",
  links: [
    { label: "NPM package", url: "https://www.npmjs.com/package/@medialane/sdk" },
    { label: "GitHub", url: "https://github.com/mediolano-app/medialane-sdk" },
    { label: "Docs", url: "/docs/sdk" },
  ],
  tags: ["TypeScript", "Open Source", "npm", "MIT License"],
};

export default function AppsPage() {
  return (
    <div className="container mx-auto px-4 pt-12 pb-20 max-w-5xl space-y-14">

      {/* Header */}
      <div className="space-y-4">
        <span className="pill-badge">Platform</span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
          Medialane <span className="gradient-text">Apps</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          A suite of applications for creators, collectors, developers, and governance
          participants — all built on the Mediolano protocol and Starknet.
        </p>
      </div>

      {/* App cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {APPS.map((app) => (
          <div key={app.name} className="bento-cell p-6 space-y-4 flex flex-col">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <p className="font-bold text-base">{app.name}</p>
                <p className={`text-xs font-mono ${app.color}`}>{app.label}</p>
              </div>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full border shrink-0 ${app.badgeColor}`}>
                {app.badge}
              </span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
              {app.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {app.tags.map((tag) => (
                <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-muted/60 text-muted-foreground border border-border/60">
                  {tag}
                </span>
              ))}
            </div>

            {app.badge !== "Coming soon" && (
              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-auto"
              >
                Open {app.name} <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        ))}
      </div>

      {/* SDK resource */}
      <div className="bento-cell p-6 space-y-5">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary/70">Open Source</p>
          <h2 className="text-xl font-bold">{SDK.name}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{SDK.description}</p>
        </div>

        <div className="font-mono text-xs bg-muted/50 border border-border/60 rounded-lg px-4 py-3 text-muted-foreground">
          {SDK.npm}
        </div>

        <div className="flex flex-wrap gap-1.5">
          {SDK.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-muted/60 text-muted-foreground border border-border/60">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          {SDK.links.map((link) => (
            link.url.startsWith("http") ? (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                {link.label} <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ) : (
              <a
                key={link.label}
                href={link.url}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                {link.label} <ArrowRight className="h-3.5 w-3.5" />
              </a>
            )
          ))}
        </div>
      </div>

    </div>
  );
}
