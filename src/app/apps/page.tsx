import type { Metadata } from "next";
import Link from "next/link";
import {
  ExternalLink, ArrowRight, Zap, Shield, Lock, FileText, Bot,
  BookOpen, Tag, Terminal, Check, Package, GitBranch,
  Store, Sparkles, Code2, Building2, Globe, Ban, Unlock, Crown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Apps | Medialane",
  description: "Explore all Medialane applications — marketplace, Web3 dApp, developer portal, and DAO governance.",
  openGraph: {
    title: "Apps | Medialane",
    description: "Explore all Medialane applications — marketplace, Web3 dApp, developer portal, and DAO governance.",
    url: "https://docs.medialane.io/apps",
  },
  twitter: {
    title: "Apps | Medialane",
    description: "Explore all Medialane applications — marketplace, Web3 dApp, developer portal, and DAO governance.",
  },
};

// ── App data ──────────────────────────────────────────────────────────────────

const APPS = [
  {
    name: "Medialane",
    url: "https://medialane.io",
    label: "medialane.io",
    description:
      "The main creator capital markets app and launchpad. Mint, protect, license, and trade creative work — gasless, permissionless, built on Starknet.",
    features: [
      "Mint & protect IP as NFTs with programmable licenses",
      "List, buy, and sell in the peer-to-peer marketplace",
      "Launch POP Protocol credential campaigns",
      "Deploy collection drops with on-chain allowlists",
      "Gasless — email/social login, no seed phrases",
    ],
    tags: ["Marketplace", "NFT Minting", "Creator Launchpad", "POP Protocol", "Collection Drop", "Gasless"],
    badge: "Live",
    badgeColor: "bg-green-500/15 text-green-400 border-green-500/30",
    accent: "from-brand-blue/20 to-brand-blue/5 border-brand-blue/20",
    iconBg: "bg-brand-blue/15",
    iconColor: "text-brand-blue",
    icon: Store,
  },
  {
    name: "Medialane dApp",
    url: "https://app.medialane.io",
    label: "app.medialane.io",
    description:
      "Web3-native interface for power users and self-custody advocates. Connect any Starknet wallet and interact directly with all platform smart contracts.",
    features: [
      "Connect Argent, Braavos, or any Starknet wallet",
      "Full self-custody — your keys, your assets",
      "Direct smart contract interaction",
      "Session key management and permissions",
      "Access all platform features on-chain",
    ],
    tags: ["Web3", "Self-Custody", "Starknet Wallets", "Smart Contracts", "Session Keys"],
    badge: "Live",
    badgeColor: "bg-green-500/15 text-green-400 border-green-500/30",
    accent: "from-brand-purple/20 to-brand-purple/5 border-brand-purple/20",
    iconBg: "bg-brand-purple/15",
    iconColor: "text-brand-purple",
    icon: Zap,
  },
  {
    name: "Medialane Portal",
    url: "https://portal.medialane.io",
    label: "portal.medialane.io",
    description:
      "Self-service developer portal for API and SDK access. Generate keys, monitor usage, configure webhooks, and unlock MDLN-boosted quotas — fully permissionless, no approval required.",
    features: [
      "Generate and manage API keys instantly — no approval",
      "MDLN token multiplier: up to 2× quota for 5,000 MDLN holders",
      "USDC credit deposits for autonomous AI agent billing (HTTP 402)",
      "Real-time webhook configuration for market events",
      "Usage dashboard — quota, multiplier, credit balance",
    ],
    tags: ["API Keys", "MDLN Multiplier", "Webhooks", "AI Agents", "USDC Credits", "Self-Service"],
    badge: "Live",
    badgeColor: "bg-green-500/15 text-green-400 border-green-500/30",
    accent: "from-brand-orange/20 to-brand-orange/5 border-brand-orange/20",
    iconBg: "bg-brand-orange/15",
    iconColor: "text-brand-orange",
    icon: Terminal,
  },
  {
    name: "Medialane DAO",
    url: "https://medialane.org",
    label: "medialane.org",
    description:
      "Governance platform for Medialane DAO LLC. Submit proposals, vote with MDLN tokens, delegate power, and participate in shaping the platform's future.",
    features: [
      "Submit and vote on governance proposals",
      "Delegate MDLN voting power to trusted members",
      "Track treasury allocations and disbursements",
      "View proposal history and outcomes",
      "Participate in off-chain Snapshot votes",
    ],
    tags: ["Governance", "MDLN Token", "Voting", "Treasury", "Snapshot"],
    badge: "Coming soon",
    badgeColor: "bg-muted text-muted-foreground border-border",
    accent: "from-brand-rose/20 to-brand-rose/5 border-brand-rose/20",
    iconBg: "bg-brand-rose/15",
    iconColor: "text-brand-rose",
    icon: Building2,
  },
];

// ── Platform features ─────────────────────────────────────────────────────────

const PLATFORM_FEATURES = [
  {
    icon: Lock,
    title: "Immutable Contracts",
    description:
      "All core contracts — marketplace, IP registry, royalties — are fully immutable with no admin keys and no upgrade path. The rules are in the code and cannot be changed by anyone, including Medialane.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
  },
  {
    icon: Shield,
    title: "IP Protection",
    description:
      "Every asset is anchored to the Mediolano protocol — aligned with the Berne Convention for automatic copyright recognition in 181 countries from the moment of creation.",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
  },
  {
    icon: Lock,
    title: "Zero-Knowledge Security",
    description:
      "Built on Starknet's ZK-STARK technology. Every transaction is provably valid. Ethereum-level security at a fraction of the cost, with quantum-resistant cryptography.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: FileText,
    title: "Programmable Licensing",
    description:
      "Define license terms at mint time — commercial rights, derivatives, distribution. Terms are enforced automatically by smart contracts on every trade. Royalties flow instantly.",
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
  },
  {
    icon: Bot,
    title: "AI Agent Ready",
    description:
      "Autonomous agents are first-class participants. AI entities can register IP, scan licenses, generate derivatives, and participate in the marketplace with full accountability.",
    color: "text-brand-rose",
    bg: "bg-brand-rose/10",
  },
  {
    icon: BookOpen,
    title: "Open Protocol",
    description:
      "Mediolano — the independent public goods protocol Medialane builds on — is fully open source. Smart contracts, indexer, and SDK are publicly verifiable. No vendor lock-in, ever.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
  },
];

// ── Audience ──────────────────────────────────────────────────────────────────

const AUDIENCES = [
  {
    icon: Sparkles,
    title: "For Creators",
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
    items: [
      "Mint any creative work as an IP NFT",
      "Set programmable licenses and royalty rates",
      "Launch collections and timed drops",
      "Issue POP credentials to your community",
      "No gas fees — gasless by default",
    ],
    cta: { label: "Start creating", href: "https://medialane.io", external: true },
  },
  {
    icon: Tag,
    title: "For Collectors",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    items: [
      "Discover unique IP from global creators",
      "Buy with cryptographic provenance on-chain",
      "Trade in a peer-to-peer marketplace",
      "Hold soulbound credentials from events",
      "Support creators through programmable royalties",
      "Multi-currency: STRK, ETH, USDC, USDT, WBTC",
    ],
    cta: { label: "Explore marketplace", href: "https://medialane.io", external: true },
  },
  {
    icon: Code2,
    title: "For Developers",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    items: [
      "REST API with comprehensive coverage",
      "TypeScript SDK — @medialane/sdk",
      "Open-source Cairo smart contracts",
      "Webhook support for real-time events",
      "Mediolano protocol — build on the base layer",
      "Portal for API key management and docs",
    ],
    cta: { label: "View developer docs", href: "/docs/developers", external: false },
  },
];

// ── Smart contract guarantees ─────────────────────────────────────────────────

const SC_GUARANTEES = [
  {
    icon: Shield,
    title: "Total Security",
    description:
      "All critical operations — minting, trading, royalty distribution, licensing — execute inside audited Cairo smart contracts on Starknet. No human can alter the outcome of a transaction after it is submitted. The rules are in the code.",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
  },
  {
    icon: Ban,
    title: "Censorship Resistance",
    description:
      "No company, government, or platform operator can freeze your assets, delist your NFTs, or prevent you from transacting. Your IP lives on a decentralised blockchain — it cannot be taken away.",
    color: "text-brand-rose",
    bg: "bg-brand-rose/10",
  },
  {
    icon: Unlock,
    title: "Permissionless",
    description:
      "Anyone can mint, list, buy, or build on Medialane — no whitelist, no approval process, no intermediary. The Mediolano protocol is open to every creator and developer on Earth, forever.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
  },
  {
    icon: Crown,
    title: "Full Ownership",
    description:
      "Your NFTs exist in your wallet — not on Medialane's servers. Your wallet is the only key. If Medialane's frontend went offline tomorrow, your assets would still exist on-chain and remain fully transferable.",
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
  },
];

// ── Open source repos ─────────────────────────────────────────────────────────

const REPOS = [
  {
    name: "medialane-io/medialane-io",
    description: "Main Next.js marketplace app — creator launchpad, marketplace, portfolio.",
    url: "https://github.com/medialane-io/medialane-io",
    label: "medialane-io",
  },
  {
    name: "medialane-io/medialane-contracts",
    description: "Cairo smart contracts — marketplace, IP registry, POP Protocol, Collection Drop, royalties.",
    url: "https://github.com/medialane-io/medialane-contracts",
    label: "medialane-contracts",
  },
  {
    name: "medialane-io/medialane-sdk",
    description: "TypeScript SDK for querying assets, minting, and marketplace integration.",
    url: "https://github.com/medialane-io/medialane-sdk",
    label: "medialane-sdk",
  },
  {
    name: "medialane-io/medialane-ui",
    description: "Shared component library — @medialane/ui on npm. Design system used across all apps.",
    url: "https://github.com/medialane-io/medialane-ui",
    label: "medialane-ui",
  },
];

// ── SDK ───────────────────────────────────────────────────────────────────────

const INSTALL_COMMANDS = [
  { label: "npm", cmd: "npm install @medialane/sdk" },
  { label: "bun", cmd: "bun add @medialane/sdk" },
  { label: "yarn", cmd: "yarn add @medialane/sdk" },
  { label: "pnpm", cmd: "pnpm add @medialane/sdk" },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AppsPage() {
  return (
    <div className="container mx-auto px-4 pt-12 pb-20 max-w-5xl space-y-20">

      {/* ── Hero ── */}
      <div className="space-y-5">
        <span className="pill-badge">Platform</span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
          The Medialane <span className="gradient-text">Ecosystem</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          A suite of applications for creators, collectors, developers, and governance
          participants — all built on the Mediolano protocol and Starknet.
        </p>
      </div>

      {/* ── App cards ── */}
      <div className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">Applications</h2>
          <p className="text-muted-foreground text-sm">Four dedicated apps for every participant in the Medialane ecosystem.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {APPS.map((app) => {
            const Icon = app.icon;
            return (
              <div
                key={app.name}
                className={`bento-cell flex flex-col overflow-hidden`}
              >
                {/* Accent header */}
                <div className={`bg-gradient-to-r ${app.accent} px-5 pt-5 pb-4 border-b border-border/40`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`h-9 w-9 rounded-lg ${app.iconBg} flex items-center justify-center shrink-0`}>
                        <Icon className={`h-4.5 w-4.5 ${app.iconColor}`} />
                      </div>
                      <div>
                        <p className="font-bold text-sm">{app.name}</p>
                        <p className={`text-xs font-mono ${app.iconColor} opacity-80`}>{app.label}</p>
                      </div>
                    </div>
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border shrink-0 ${app.badgeColor}`}>
                      {app.badge}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 space-y-4 flex flex-col flex-1">
                  <p className="text-sm text-muted-foreground leading-relaxed">{app.description}</p>

                  {/* Feature checklist */}
                  <ul className="space-y-1.5 flex-1">
                    {app.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className={`h-3.5 w-3.5 shrink-0 mt-0.5 ${app.iconColor}`} />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {app.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full bg-muted/60 text-muted-foreground border border-border/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  {app.badge !== "Coming soon" ? (
                    <a
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${app.iconBg} ${app.iconColor} border-current/20 hover:opacity-90`}
                    >
                      Open {app.name} <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-muted/40 text-muted-foreground border border-border/60 cursor-not-allowed">
                      Coming soon
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Platform features ── */}
      <div className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">Platform Features</h2>
          <p className="text-muted-foreground text-sm">Capabilities shared across every Medialane application.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PLATFORM_FEATURES.map(({ icon: Icon, title, description, color, bg }) => (
            <div key={title} className="bento-cell p-5 space-y-3">
              <div className={`h-10 w-10 rounded-xl ${bg} flex items-center justify-center`}>
                <Icon className={`h-5 w-5 ${color}`} />
              </div>
              <h3 className="font-semibold text-sm">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Smart contract guarantees ── */}
      <div className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">Architecture</span>
          <h2 className="text-2xl font-bold">Smart Contract Based</h2>
          <p className="text-muted-foreground text-sm max-w-2xl">
            Every core operation on Medialane is executed by audited smart contracts on Starknet — not
            by servers we control. This gives every participant four fundamental guarantees that no
            centralised platform can offer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SC_GUARANTEES.map(({ icon: Icon, title, description, color, bg }) => (
            <div key={title} className="bento-cell p-6 space-y-3">
              <div className={`h-10 w-10 rounded-xl ${bg} flex items-center justify-center`}>
                <Icon className={`h-5 w-5 ${color}`} />
              </div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div className="bento-cell p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-3 flex-1">
            <Globe className="h-4 w-4 text-primary shrink-0" />
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Verified on-chain.</strong> All Medialane smart contracts are open source,
              publicly audited, and deployed on Starknet mainnet.
            </p>
          </div>
          <a
            href="https://github.com/medialane-io/medialane-contracts"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors shrink-0"
          >
            View contracts <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* ── Audience ── */}
      <div className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">Built for Everyone</h2>
          <p className="text-muted-foreground text-sm">Whether you create, collect, or build — Medialane has dedicated tools for you.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {AUDIENCES.map(({ icon: Icon, title, color, bg, items, cta }) => (
            <div key={title} className="bento-cell p-5 space-y-4 flex flex-col">
              <div className="flex items-center gap-3">
                <div className={`h-9 w-9 rounded-lg ${bg} flex items-center justify-center shrink-0`}>
                  <Icon className={`h-4 w-4 ${color}`} />
                </div>
                <h3 className="font-semibold text-sm">{title}</h3>
              </div>

              <ul className="space-y-1.5 flex-1">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <Check className={`h-3 w-3 shrink-0 mt-0.5 ${color}`} />
                    {item}
                  </li>
                ))}
              </ul>

              {cta.external ? (
                <a
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 text-xs font-medium ${color} hover:opacity-80 transition-opacity`}
                >
                  {cta.label} <ExternalLink className="h-3 w-3" />
                </a>
              ) : (
                <Link
                  href={cta.href}
                  className={`inline-flex items-center gap-1.5 text-xs font-medium ${color} hover:opacity-80 transition-opacity`}
                >
                  {cta.label} <ArrowRight className="h-3 w-3" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── SDK ── */}
      <div className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">SDK & Developer Tools</h2>
          <p className="text-muted-foreground text-sm">Everything you need to build on top of the Medialane platform.</p>
        </div>

        <div className="bento-cell p-6 space-y-6">
          <div className="flex items-start gap-4">
            <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <Package className="h-5 w-5 text-primary" />
            </div>
            <div className="space-y-1">
              <p className="font-bold">@medialane/sdk</p>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                Open-source TypeScript SDK. Query assets, manage minting, interact with the marketplace,
                and build your own interfaces on top of the Mediolano protocol. MIT licensed.
              </p>
            </div>
          </div>

          {/* Install commands */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {INSTALL_COMMANDS.map(({ label, cmd }) => (
              <div key={label} className="flex items-center gap-3 bg-muted/40 border border-border/60 rounded-lg px-4 py-2.5">
                <span className="text-xs font-mono text-muted-foreground/60 w-8 shrink-0">{label}</span>
                <code className="text-xs font-mono text-foreground/80 truncate">{cmd}</code>
              </div>
            ))}
          </div>

          {/* Quick example */}
          <div className="bg-muted/30 border border-border/60 rounded-lg p-4 font-mono text-xs space-y-1 text-muted-foreground overflow-x-auto">
            <div><span className="text-primary">import</span> {"{ MedialaneClient }"} <span className="text-primary">from</span> <span className="text-brand-orange">&apos;@medialane/sdk&apos;</span>;</div>
            <div className="pt-1"><span className="text-primary">const</span> client = <span className="text-primary">new</span> <span className="text-brand-blue">MedialaneClient</span>{"({ apiKey, network: "}<span className="text-brand-orange">&apos;mainnet&apos;</span>{"})"};</div>
            <div className="pt-1"><span className="text-primary">const</span> asset = <span className="text-primary">await</span> client.assets.<span className="text-brand-blue">getAsset</span>(<span className="text-brand-orange">&apos;0x1234...&apos;</span>);</div>
            <div><span className="text-primary">const</span> listing = <span className="text-primary">await</span> client.marketplace.<span className="text-brand-blue">createListing</span>(params);</div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="https://www.npmjs.com/package/@medialane/sdk" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              NPM package <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a href="https://github.com/medialane-io/medialane-sdk" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              GitHub <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <Link href="/docs/sdk" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              Full SDK docs <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link href="/apps" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              Developer Portal <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Open source ── */}
      <div className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">Open Source</h2>
          <p className="text-muted-foreground text-sm">
            All core repositories are public under the{" "}
            <a href="https://github.com/medialane-io" target="_blank" rel="noopener noreferrer"
              className="text-primary hover:underline">medialane-io</a>{" "}
            GitHub organisation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {REPOS.map(({ name, description, url, label }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bento-cell p-4 hover:border-primary/30 transition-colors flex items-start gap-3"
            >
              <GitBranch className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
              <div className="space-y-1 flex-1 min-w-0">
                <p className="text-sm font-mono font-medium text-foreground/80 group-hover:text-primary transition-colors truncate">{label}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
              </div>
              <ExternalLink className="h-3.5 w-3.5 text-muted-foreground/40 group-hover:text-primary shrink-0 transition-colors mt-0.5" />
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}
