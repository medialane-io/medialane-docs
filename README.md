# medialane-docs

Unified knowledge hub for the Medialane platform — deployed at [docs.medialane.io](https://docs.medialane.io).

Covers all Medialane products, protocols, and community: creator launchpad, marketplace, developer docs, learn center, DAO governance, guidelines, and more.

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 + React 19, App Router, static rendering |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v3 + `@medialane/ui` design system |
| Components | shadcn/ui, Radix primitives |
| Icons | lucide-react |
| Theme | next-themes (dark mode default) |
| Package manager | bun |

## Design System

Shared design tokens and CSS classes from `@medialane/ui`:

```
gradient-text         purple → indigo → blue gradient text
gradient-text-warm    rose → orange → amber gradient text
gradient-text-gold    amber → orange gradient text
bento-cell            standard card (border + card bg + radius)
pill-badge            small uppercase label with primary accent
glass                 blurred dark glass panel
aurora-purple/blue/rose/orange  ambient glow blobs (use with animate-blob)
animate-blob / animate-blob-slow  pulsing animation for aurora blobs
bg-grid               subtle dot/line background texture
btn-border-animated   animated gradient border (buy/CTA buttons)
```

Brand color tokens: `text-brand-blue`, `text-brand-purple`, `text-brand-rose`, `text-brand-orange`

## Getting Started

```bash
bun install
bun dev        # starts on localhost:3000
bun run build  # production build — kills dev server, restart after
```

> **Note:** Running `bun run build` stops the dev server. After a build, kill any stale process and restart:
> ```bash
> kill $(lsof -i :3000 -t) 2>/dev/null; rm -rf .next; bun dev &
> ```

## Site Structure

```
/                           Home — knowledge hub landing
/about                      About Medialane, mission, vision, tech stack
/apps                       App suite: medialane.io, dApp, Portal, DAO
/learn                      Learn center (17 sub-pages)
  /learn/integrity-web      The Integrity Web — 10 axioms applied to Medialane
  /learn/nft
  /learn/blockchain
  /learn/zero-knowledge
  /learn/programmable-ip
  /learn/tokenization
  /learn/creator-launchpad
  /learn/marketplace
  /learn/pop-protocol
  /learn/collection-drop
  /learn/ip-collection-1155
  /learn/remix
  /learn/web3
  /learn/protect-your-ip
  /learn/programmable-licensing
/docs                       Technical documentation
  /docs/architecture
  /docs/protocol
  /docs/sdk
  /docs/api
  /docs/contracts
  /docs/developers
  /docs/agents
  /docs/security
  /docs/fees
  /docs/governance
  /docs/changelog
/guidelines                 Policies & standards (canonical home for all policy/legal)
  /guidelines/community
  /guidelines/user-guidelines
  /guidelines/compliance
  /guidelines/terms
  /guidelines/privacy
  /guidelines/campaign-terms
/support                    FAQ + contact
/dao                        DAO governance (3 sub-pages)
  /dao/constitution
  /dao/governance
  /dao/token
  /dao/airdrop
/links                      Official community links
/search                     Search (static)
```

Redirects (permanent): `/terms`, `/privacy`, `/campaign-terms` → `/guidelines/*`; and the former
`/docs/compliance`, `/docs/community-guidelines`, `/docs/user-guidelines` → their canonical
`/guidelines/*` homes (policy content lives only under `/guidelines`).

All routes prerender as fully static (`○`).

## Key Files

```
src/components/home/index.tsx         Home page component
src/lib/nav-commands.ts               NAV_COMMANDS — command-palette entries
src/components/nav-theme-toggle.tsx   Light/dark toggle (menu footer)
src/app/providers.tsx                 Shell + NavCommandMenu + footer nav
src/app/globals.css                   CSS tokens + Tailwind base
src/app/sitemap.ts                    ~50 static routes
next.config.ts                        Redirects
```

## Content Philosophy

- **Positioning:** A **monetization hub for the creative economy** — humans, organizations, and AI agents turn IP into revenue streams with full sovereignty. Commercial layer = **two hubs** (Launchpad + Marketplace) over an open, permissionless protocol. Not "IP/NFT marketplace." Never cap the offering ("six ways to earn", "four services") — monetization is **open-ended via services**.
- **Audience:** Creators, collectors, AI agents, organizations, developers
- **Tone:** Bold, direct, inspiring — not corporate or technical-first
- **Mediolano:** An independent public goods protocol Medialane builds on — not a Medialane product
- **DAO source of truth:** `medialane.org` / `medialane-dao` owns live MDLN, treasury, Snapshot, and constitution facts
- **MDLN:** Fixed 21,000,000 supply, 100% DAO-controlled, live on Ethereum and bridged to Starknet
- **Revenue model:** zero-fee contracts; the 1% platform-layer fee → **DAO treasury**, MDLN holders vote on allocation. (Year-one campaign directs revenue to the Creators Fund — explained only on `/dao/airdrop`, not spread across pages.)
- **Tech stack framing:** Cairo smart contracts (immutable) + ZK proofs are the foundation; Starknet, ChipiPay, IPFS, Stark Zap SDK are tools
- **Integrity Web:** 10 axioms from [integrityweb.xyz/axioms](https://www.integrityweb.xyz/axioms) — architectural constraints, not slogans

## GitHub

Repository: [github.com/medialane-io/medialane-docs](https://github.com/medialane-io/medialane-docs)
Organisation: `medialane-io`
