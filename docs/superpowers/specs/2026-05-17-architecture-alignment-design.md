# Medialane Docs — Architecture Alignment Design

**Date:** 2026-05-17
**Scope:** Full documentation review and enhancement to align medialane-docs with the architecture redesigned from first principles across `medialane-backend/docs/superpowers/architecture/`.

---

## Problem

The medialane-backend architecture was redesigned from first principles across 10 canonical documents (00–09). The docs site (`docs.medialane.io`) predates this redesign and has three categories of misalignment:

1. **Missing concepts** — Service registry, Venue model, four-layer authority model, three-facet identity, rebuild test have no home in the docs.
2. **Wrong framing** — About page says "chain-agnostic by design" without Starknet grounding. Licensing pages imply contract enforcement as the default. Remix pages overstate royalty propagation.
3. **Outdated structure** — CollectionSource-style framing still implicit in Learn pages; Protocol page is shallow (addresses only); no architecture reference page.

---

## Approach

**Option A — Deep restructure + new pages.** Add new pages for missing concepts, rewrite misaligned pages, do targeted updates across the rest. Sequenced in three waves so each can ship and verify independently.

---

## Source of Truth

All architecture content derives from:
- `medialane-backend/docs/superpowers/architecture/00-principles.md` through `09-roadmap.md`
- `medialane-backend/docs/superpowers/architecture/2026-05-15-asset-service-model.md`

When in doubt, the backend architecture docs are authoritative.

---

## New Pages (3)

### `/docs/architecture`

Added to `docs-nav.ts` before the Protocol entry.

**Content sections:**
1. **The four layers** — Chain (contracts, state, immutable truth) → Indexer (event reducer, PostgreSQL cache, rebuildable) → SDK (typed lens + service registry) → Apps (views, UX, platform-layer fees, house rules). Authority flows downward only.
2. **The rebuild test** — Drop the database. Everything must reconstruct from on-chain events + off-chain metadata. If it can't survive this test, it's not protocol state. Platform state (profiles, slugs, API keys) honestly classified as off-chain enrichment, not protocol violations.
3. **The six primitives** — Asset (digital good on chain), Account (actor — wallet signs, account aggregates, profile is the face), Service (registered behavior set), License (programmable rights in metadata), Order (signed proposal, permanent orderHash), Event (on-chain occurrence; indexer is event reducer).
4. **Protocol vs. platform** — Contracts are permissionless and immutable. The platform layer (apps, service registry, fees) is where Medialane and the DAO operate. This distinction is why fee schedules can change without contract migration.

**Tone:** Technical, developer-facing. The rebuild test is the anchor mental model.

---

### `/learn/services`

Added to `learn/page.tsx` as a new topic card.

**Content sections:**
1. **What a Service is** — A registered set of actions creators can take on an asset. Not a hardcoded feature — a registry entry. New services can be added without changing contracts.
2. **Canonical services** (plain-language descriptions):
   - `mip-erc721` — Standard IP collection (ERC-721, single-edition)
   - `mip-erc1155` — Multi-edition IP collection (ERC-1155)
   - `pop-protocol` — Proof-of-participation credentials (soulbound)
   - `drop-collection` — Timed drops with supply caps and mint windows
   - `medialane-marketplace-erc721` / `medialane-marketplace-erc1155` — Trading venues
3. **Capabilities** — The actions a service unlocks: list, buy, make_offer, mint, transfer, remix, license, claim. Framed as "what you can do."
4. **Why service IDs are stable** — IDs never change across contract upgrades. Your integration keeps working. No `-v3` suffix, ever.

**Tone:** Creator-facing. Avoid exposing `service: String` internals. Focus on what creators and builders can do.

---

### `/learn/identity`

Added to `learn/page.tsx` as a new topic card.

**Content sections:**
1. **Three separate things** — Wallet (signs — the cryptographic key), Account (reputation, work history, roles — what you've done on-chain), Profile (public face — name, bio, avatar — editable, losing it loses nothing protocol-critical).
2. **Roles** — Creator, collector, organization, agent. Gate what the UI shows you. Never gate what the protocol allows. Anyone can mint.
3. **Authentication vs. authorization** — SIWS (Sign In With Starknet) proves who you are. What you're allowed to do is determined by on-chain state. The contract is the authority, not the platform.
4. **AI agents** — Same identity model. An agent wallet is a first-class account. Same API, same fees, same capabilities as a human wallet.

**Tone:** Accessible, creator-and-builder-facing. The three-facet framing is the core mental model to establish.

---

## Full Rewrites (5 pages)

### `/about`

**Problems:** "Chain-agnostic by design" without Starknet grounding. No integrity web framing. No four-layer model. Tech stack section doesn't explain why choices are load-bearing.

**New structure:**
1. **Hero** — Medialane as creator capital markets platform. Direct. No marketing language.
2. **What we build** — Four services framed around what creators do: launch collections, trade IP, issue credentials, run drops. Services language throughout.
3. **How it works** — Four-layer model in plain language. Contracts set the rules. Indexer reads the chain. SDK gives builders a typed lens. Apps are where creators work. Immutable at the bottom, flexible at the top.
4. **Why Starknet** — Lead with Starknet's unique properties: quantum-resistant ZK proofs, account abstraction, zero-knowledge computation. These are what make the bigger vision possible — not chain loyalty, architectural necessity.
5. **Built to grow** — Starknet as the foundation; MDLN on Ethereum for security and liquidity (bridged via StarkGate, same model as STRK); the long-term arc toward chain-agnostic, fully decentralized, censorship-resistant infrastructure.
6. **Design choices** — The six invariants (no admin keys, no custody, permissionless, AI agents as first-class users, community governance, everything auditable) grounded in architecture, not stated as values.
7. **Integrity Web** — The 10 axioms as philosophical foundation, linked to `/learn/integrity-web`.

**Remove:** "chain-agnostic by design" as standalone claim. All implicit multichain hints that aren't grounded in the Starknet → Ethereum arc above.

---

### `/docs/protocol`

**Problems:** Correct contract addresses but no service model, no event-reducer pattern, no rebuild test, no order lifecycle beyond event names.

**New structure:**
1. **Architecture reference** — Points to `/docs/architecture` as canonical. Brief summary of four layers.
2. **Contracts** — Existing address table (correct, keep as-is).
3. **Event model** — Events are the source of truth. Indexer is a deterministic event reducer. Every state change is an event; the DB is a cache of the reduction.
4. **Order lifecycle** — 1+1 structure (one offer, one consideration). States: ACTIVE, FULFILLED, CANCELLED, EXPIRED. `orderHash` is permanent. SNIP-12 typed data signing. Atomic swap settlement: payment and NFT in the same transaction or both revert.
5. **Service registry** — `standard` (chain-detected: ERC-721/1155) + `service` (string, registry lookup). `getService()` returns the capability set. Service IDs are stable across contract upgrades.
6. **Indexer design** — Off-chain event reducer, PostgreSQL cache, rebuild guarantee. Honest about what's protocol state vs. platform state.

---

### `/learn/programmable-licensing`

**Problems:** Implies contract enforcement as primary mechanism. Missing soft enforcement as default. Missing immutable-at-mint invariant.

**New structure:**
1. **License as metadata** — Terms live in token attributes. Travel with the asset to any marketplace, viewer, or aggregator that reads metadata. OpenSea-compatible.
2. **Soft enforcement is the default** — The contract does not revert on license violation. Enforcement is social, legal, and jurisdictional — same as traditional copyright. Intentional: encoding jurisdiction-specific law into immutable contracts would make them unusable globally.
3. **The core traits** — License preset (CC BY-SA default, CC BY, CC0, All Rights Reserved, Custom), Commercial Use, Derivatives, Attribution, Territory, AI Policy. Plain attributes, readable by any third party.
4. **Immutable at mint** — Terms cannot be edited after minting. New terms require a new token. Durability guarantee, not a limitation.
5. **When contracts enforce** — ERC-2981 royalty splits, escrow, time-lock available where the service explicitly opts in. Not the default.

---

### `/learn/marketplace`

**Problems:** No venue model framing. Order lifecycle incomplete. No connection to service registry.

**New structure:**
1. **The marketplace is a service** — A venue with `[list, buy, make_offer, cancel]` capabilities. Composable: the same order infrastructure can power future auction and swap venues.
2. **Order lifecycle** — ACTIVE → FULFILLED / CANCELLED / EXPIRED. `orderHash` is a permanent on-chain record. Counter-offers extend via `parentOrderHash`.
3. **How a sale settles** — Atomic swap. Payment and NFT transfer in the same transaction or both revert. No escrow, no custody.
4. **Supported actions** — List, buy, make offer, cancel. Framed as what creators and collectors do.
5. **Fees** — 1% at the platform layer. Not in the contract — the DAO can update the fee schedule without a contract migration.

---

### `/learn/remix`

**Problems:** Overstates automatic royalty propagation through remix chains. License framing inconsistent with soft enforcement model.

**New structure:**
1. **What remix means** — Building a licensed derivative. Original license terms specify whether derivatives are allowed, under what conditions, with what attribution required.
2. **How it works onchain** — Remix creates a new asset with a `parentTokenId` reference to the original. Attribution is permanent and immutable.
3. **Soft enforcement** — Royalty propagation through remix chains is social and legal enforcement, not automatic contract enforcement. The on-chain record is the evidence, not the enforcement mechanism.
4. **What the chain records permanently** — Derivation relationship, attribution wallet, license terms at time of mint.

---

## Targeted Updates (10 pages)

### `/docs/fees`
- State explicitly: fees are at the platform layer, never in contracts.
- Fee schedule can change via DAO vote without contract migration.
- 1% marketplace fee → DAO treasury → MDLN holders vote on allocation.

### `/docs/sdk`
- Add `getService()` and service registry lookup documentation.
- Document canonical service IDs and the `standard` + `service` field pair.
- Deprecation note: `source` field deprecated in SDK 0.12.0, removed in 0.13.0.

### `/docs/developers`
- Add architecture context section pointing to `/docs/architecture`.
- Service model quickstart: how to use `getService()` in a real integration.

### `/docs/agents`
- SIWS auth flow as the authentication mechanism.
- HTTP 402 for credit-based billing.
- Agent wallet = first-class Account. Same API surface as human users.
- Service model awareness: agents operate on services, not collection types.

### `/dao/governance`
- DAO governs the commercial layer: fee schedule, service registry curation, treasury, reward config.
- DAO does NOT govern permissionless protocol actions (minting, listing, transferring are always available).
- Progressive decentralization arc: Year 1 (DAO curation + fees), Year 2+ (on-chain registry, token-holder fee allocation).

### `/dao/token`
- MDLN is live on Ethereum mainnet (fixed supply: 21,000,000).
- Bridgeable to Starknet via StarkGate — same model as STRK token. Ethereum for security and liquidity; Starknet for platform participation.
- Platform multiplier: MDLN held in the developer portal unlocks fee multipliers and governance weight.
- Revenue flow: 1% marketplace fee → DAO treasury → MDLN holders vote annually on allocation.

### `/learn/creator-launchpad`
- Reframe around service IDs: `mip-erc721`, `mip-erc1155` are the services behind collection creation.
- Remove CollectionSource-style language.

### `/learn/pop-protocol`
- Add `pop-protocol` service ID framing.
- Capabilities: `[mint, claim, airdrop]`.

### `/learn/collection-drop`
- Add `drop-collection` service ID framing.
- Capabilities: `[mint, claim]` with time-window and supply-cap constraints.

### `/learn/integrity-web`
- Tighten content to the 10 axioms as architectural constraints.
- Reference `/docs/architecture` for the technical implementation of each axiom.
- Remove any marketing language; these are load-bearing design rules, not aspirations.

---

## Content Rules (canonical reference for all pages)

| Architecture concept | Docs translation |
|---|---|
| "Smart contract is the only truth" | "The contract sets the rules — no admin, no upgrade path, no override" |
| "DB is a cache" | "The indexer reads the chain and caches it — it can always rebuild from scratch" |
| "Soft enforcement is default" | "License terms travel with the asset and are enforced socially and legally — not by contract revert" |
| "Service" (technical) | "A registered set of actions creators can take" — never expose `service: String` internals to non-technical pages |
| "Venue" | "Trading venue" on marketplace pages — no separate jargon |
| "Wallet / Account / Profile" | Keep three-word framing on identity pages; wallet signs, account is reputation, profile is public face |
| "Permissionless" | Spell out once: "no whitelist, no application, no approval required" |
| "Protocol vs. platform" | "Contracts are fixed. The platform — fees, curation, apps — is where Medialane operates." |
| Multichain / roadmap | Starknet-first framing. Multichain as long-term direction. Ethereum only in DAO/MDLN context. No Bitcoin or Solana by name. |
| Mediolano | "An independent public goods protocol that Medialane builds on" — never "Medialane's protocol" |
| Roadmap (Year 2+) | Only on `/docs/architecture` and `/dao/governance` — not on user-facing Learn pages |
| Chain-agnostic | Valid for end-state vision only: "Starknet-first, designed to grow across chains" |

---

## Implementation Order

### Wave 1 — Foundation
New pages must exist before anything references them.
1. Create `/docs/architecture`
2. Create `/learn/services`
3. Create `/learn/identity`
4. Rewrite `/docs/protocol`
5. Update `docs-nav.ts` — add Architecture entry before Protocol
6. Update `learn/page.tsx` — add Services and Identity cards
7. `bun run build` — verify zero errors

### Wave 2 — Core concept alignment
8. Rewrite `/about`
9. Rewrite `/learn/programmable-licensing`
10. Rewrite `/learn/marketplace`
11. Rewrite `/learn/remix`
12. `bun run build` — verify zero errors

### Wave 3 — Targeted updates
13. Update `/docs/fees`
14. Update `/docs/sdk`
15. Update `/docs/developers`
16. Update `/docs/agents`
17. Update `/dao/governance`
18. Update `/dao/token`
19. Update `/learn/creator-launchpad`
20. Update `/learn/pop-protocol`
21. Update `/learn/collection-drop`
22. Update `/learn/integrity-web`
23. `bun run build` — final verification

---

## Out of Scope

The following pages are correct and current — no changes planned:
`/learn/nft`, `/learn/blockchain`, `/learn/web3`, `/learn/zero-knowledge`, `/learn/tokenization`, `/learn/protect-your-ip`, `/learn/ip-collection-1155`, `/docs/security`, `/docs/changelog`, `/docs/contracts`, `/guidelines/*`, `/support`, `/apps`
