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
- Canonical definition (from `medialane-core/docs/architecture/01-core-model`): Medialane is a **monetization hub for the creative economy** — it lets humans, organizations, and AI agents turn intellectual property into revenue streams with full sovereignty over their assets and identity. NOT an "IP marketplace" or "NFT marketplace."
- Commercial layer = **two hubs**: **Launchpad** (structure capital from IP) + **Marketplace** (trade/auction/license/remix). Built on Mediolano's zero-fee, Berne-aligned tokenization.
- **Never cap the offering.** Monetization is **open-ended via services** — the protocol grows by adding services (a registry entry), never a fixed menu. Do NOT write "six ways to earn", "four services", or any closed list as the headline framing.
- Values to emphasise: permissionless, the contract is the only authority, censorship resistance, ownership/sovereignty, open & verifiable, for humans and AI agents alike.
- Architecture is the source of truth: `medialane-core/docs/architecture/00`–`09`. Align page content to it.

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

Navigation is a **command palette** (`NavCommandMenu` from `@medialane/ui`), not a sidebar — migrated 2026-05-27 to match medialane.io. The old `app-sidebar.tsx` + shadcn `ui/sidebar.tsx` were deleted.

- Opened via the top-left `NavTrigger` button (icon + Menu glyph) or `⌘K`.
- All entries live in **`src/lib/nav-commands.ts`** as `NAV_COMMANDS: NavCommandGroup[]` — add new destinations there, not in the menu component. Do not add new top-level groups without user approval.
- Mounted once in `src/app/providers.tsx`'s `Shell`, with a `NavThemeToggle` in the menu `footerSlot`.

Groups (in `nav-commands.ts`): primary (Start / About / Apps), then **Learn**, **Docs**, **Guidelines**, **DAO**, **Resources** (Support / Links / Knowledge Index).

Per-section tab sub-nav still lives in each section's `layout.tsx` (`docs/layout.tsx`, `learn/layout.tsx`, etc.) — independent of the global command menu.

### Policy/legal content lives under `/guidelines` (canonical)
All policy/legal pages — community, user-guidelines, compliance, terms, privacy, campaign-terms — are canonical under **`/guidelines/*`**. The former `/docs/{compliance,community-guidelines,user-guidelines}` duplicates were merged into `/guidelines` and now 308-redirect there (`next.config.ts`). Do not re-create policy pages under `/docs`.

## Build Checks

Always run `bun run build` after significant changes and verify:
- Zero TypeScript/JSX errors. **Strict type-checking is ON** — `typescript.ignoreBuildErrors` was removed (2026-06-01), so type errors now fail the build (no more silently-rotting dead components).
- All routes prerender as `○` (static)
- No missing imports (especially unused icon imports cause lint warnings)
- `@medialane/sdk` is pinned to an exact version (currently `0.27.0`); only `OPEN_LICENSES` is imported at runtime — the rest are code samples.

## GitHub

Org: `medialane-io` (NOT `mediolano-app`)
Repo: `https://github.com/medialane-io/medialane-docs`
Branch: `main`
