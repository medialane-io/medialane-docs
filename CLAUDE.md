# CLAUDE.md — medialane-docs

Project-specific guidance for Claude Code in this repository.

## Project

`medialane-docs` is the unified knowledge hub at `docs.medialane.io`. It is a purely static Next.js site — no Web3 dependencies, no wallet connections. Content-only: documentation, learn center, about, apps, DAO, guidelines, support.

## Dev Server

```bash
bun dev          # start on localhost:3000
bun run build    # production check — KILLS the dev server
```

After any `bun run build`, always restart:
```bash
kill $(lsof -i :3000 -t) 2>/dev/null; rm -rf .next; bun dev &
```

The `.next` directory gets rebuilt on each `bun run build`. If the browser shows 404s for `_next/static` chunks, it means the dev server is stale or down — kill it, delete `.next`, restart, and hard-refresh the browser (`Cmd+Shift+R`).

## Content Rules

### Positioning
- Medialane is a **creator launchpad** and **creator capital markets** platform — NOT an "IP marketplace" or "NFT marketplace"
- Focus: empowering creators, collectors, AI agents, and organizations to build new revenue streams
- Values to emphasise: security, transparency, ownership, onchain transactions, permissionless access, censorship resistance

### Mediolano Protocol
- Mediolano is an **independent public goods protocol** — it is NOT a Medialane product and NOT built by Medialane
- Correct framing: "Medialane builds on Mediolano" / "Mediolano is an independent protocol that Medialane uses"
- Never say "At the core of Medialane is Mediolano" (implies ownership)

### Medialane DAO / MDLN
- DAO/token facts should mirror `medialane.org` and the `medialane-dao` repo
- Medialane DAO LLC is registered in Utah, USA
- MDLN is live on Ethereum mainnet and bridgeable to Starknet via StarkGate
- MDLN supply is fixed at 21,000,000; 100% is DAO-controlled; no VC/team allocation
- Snapshot governance is `medialane.eth`
- Revenue framing: 1% marketplace fee → DAO treasury → MDLN holders vote annually on allocation
- Creator's Airdrop is one possible DAO allocation, not a guaranteed or automatic formula

### Technology framing
Lead with **what it means for creators**, not the tech name:
- ✅ "Immutable Cairo smart contracts define every rule — once deployed, no one can change them"
- ❌ "Built on Starknet's Cairo language"

The actual tech stack and their roles:
| Component | Role |
|---|---|
| Cairo smart contracts | Immutable on-chain logic — the real foundation |
| ZK proofs | Trustless security, quantum-resistant, no trusted setup |
| Mediolano Protocol | IP tokenization at zero fees (independent public good) |
| IPFS | Decentralized storage for assets and metadata |
| Stark Zap SDK | Powers the permissionless Web3 dApp |
| ChipiPay + account abstraction | Gasless UX layer (a tool, not the foundation) |
| Starknet | The decentralized network (a tool, not the identity) |

### Multichain — do NOT mention
Do not add Bitcoin, Ethereum, Solana, or "multichain roadmap" to any docs page. Medialane operates on Starknet. The censorship-resistance and permissionless principles are expressed through ZK proofs and open contracts — not through chain mentions.

### Integrity Web
The 10 axioms from [integrityweb.xyz/axioms](https://www.integrityweb.xyz/axioms) are architectural constraints for Medialane, not marketing. Reference them for philosophy sections. The learn page is at `/learn/integrity-web`.

### Tone
- Bold and direct — not corporate or overly technical
- Lead with creator value, not infrastructure
- Avoid: "leverages", "utilises", "synergies", "ecosystem partners"
- Use: "own", "earn", "build", "permissionless", "your work", "forever"

## Design System

Available CSS classes from `@medialane/ui` (already imported via layout):

```
gradient-text            purple → indigo → blue (main brand gradient)
gradient-text-warm       rose → orange → amber
gradient-text-gold       amber → orange
bento-cell               card primitive (border + bg + rounded corners)
pill-badge               small label with primary accent ring
glass                    blurred dark glass panel
aurora-purple/blue/rose/orange   ambient glow blobs
animate-blob             pulsing animation for aurora blobs (7s)
animate-blob-slow        slower pulse with delay (9s, 2s offset)
bg-grid                  subtle grid texture background
btn-border-animated      animated flowing gradient border
```

Brand colors: `text-brand-blue`, `text-brand-purple`, `text-brand-rose`, `text-brand-orange`

### Aurora pattern for hero sections
```tsx
<div className="relative overflow-hidden rounded-3xl">
  <div className="aurora-purple w-[400px] h-[400px] -top-24 -right-16 animate-blob" style={{ position: "absolute" }} />
  <div className="aurora-blue w-[300px] h-[300px] bottom-0 left-0 animate-blob-slow" style={{ position: "absolute" }} />
  <div className="relative ...">
    {/* content */}
  </div>
</div>
```

Note: aurora blobs need `position: "absolute"` as an inline style — Tailwind's `absolute` class alone doesn't work inside certain layout contexts.

### Typography scale
- Page hero h1: `text-5xl sm:text-6xl lg:text-7xl font-black`
- Section headings: `text-2xl font-black` or `text-3xl font-black`
- Card titles: `font-bold` or `font-black` in brand color
- Body: `text-muted-foreground leading-relaxed`
- Tiny labels: `text-xs font-black uppercase tracking-widest`

## Navigation Structure

9 sections in the sidebar — do not add new top-level sections without user approval:

| Section | Path | Type |
|---|---|---|
| Start | `/` | Direct |
| About | `/about` | Direct |
| Apps | `/apps` | Direct |
| Learn | `/learn/*` | Collapsible (15 sub-pages) |
| Docs | `/docs/*` | Collapsible (7 sub-pages) |
| Guidelines | `/guidelines/*` | Collapsible (5 sub-pages) |
| Support | `/support` | Direct |
| DAO | `/dao/*` | Collapsible (4 sub-pages) |
| Links | `/links` | Direct |

## Build Checks

Always run `bun run build` after significant changes and verify:
- Zero TypeScript/JSX errors
- All routes prerender as `○` (static)
- No missing imports (especially unused icon imports cause lint warnings)

## GitHub

Org: `medialane-io` (NOT `mediolano-app`)
Repo: `https://github.com/medialane-io/medialane-docs`
Branch: `main`
