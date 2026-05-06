# Medialane Docs Content Implementation Plan

Created: 2026-05-05

## Goal

Turn `docs.medialane.io` into the task-first knowledge hub for using and building on Medialane, while keeping `medialane.org` as the canonical source for DAO, MDLN, treasury, constitution, and governance facts.

The plan closes the current gaps in quickstarts, contract references, SDK/API depth, security evidence, fees, Mediolano/Medialane positioning, changelog, AI-agent documentation, search, and content ownership.

## Source Of Truth

| Domain | Canonical Owner | Mirror / Link Strategy |
|---|---|---|
| Product education and workflows | `medialane-docs` | Full docs live at `docs.medialane.io` |
| API and SDK usage | `medialane-docs` + `medialane-sdk` | Docs own tutorials; SDK repo owns package internals |
| Smart contract addresses | `medialane-dao/lib/site-config.ts` and `medialane-dao/llms.txt` | Docs mirror current addresses and link to DAO hub |
| DAO constitution, governance, MDLN, treasury | `medialane-dao` | Docs provide summaries and canonical links to `medialane.org` |
| Legal policies | `medialane-dao` if legally canonical; docs may summarize | Avoid divergent full copies unless intentionally maintained |
| Brand positioning | `medialane-docs/CLAUDE.md` | All repos use "creator capital markets" |

## Phase 1: Foundation And IA

**Objective:** Make the docs easy to navigate and establish canonical cross-repo ownership.

Tasks:
- Add a visible "Canonical Sources" section to `/docs` explaining what lives on docs vs DAO.
- Add redirects or prominent links from DAO summary pages to `medialane.org`.
- Add a content ownership matrix to `README.md` and `CLAUDE.md`.
- Add a docs changelog route at `/docs/changelog`.
- Replace the placeholder `/search` with either working static search or a scoped index page.

Target files:
- `src/app/docs/page.tsx`
- `src/app/search/page.tsx`
- `src/app/docs/changelog/page.tsx` (new)
- `README.md`
- `CLAUDE.md`

Acceptance criteria:
- A reader can tell where to find product docs, DAO facts, legal docs, SDK docs, and contract facts within 30 seconds.
- No route says "coming soon" without a clear alternative.
- Changelog exists and includes the v2 marketplace alignment, MDLN live status, API base URL, and current contract address source.

## Phase 2: Task-First Quickstarts

**Objective:** Help creators, collectors, and DAO members complete core workflows without reading conceptual docs first.

Create these pages:
- `/docs/quickstarts/create-first-ip-asset`
- `/docs/quickstarts/deploy-collection`
- `/docs/quickstarts/list-and-sell`
- `/docs/quickstarts/buy-asset`
- `/docs/quickstarts/launch-drop`
- `/docs/quickstarts/issue-pop`
- `/docs/quickstarts/create-remix`
- `/docs/quickstarts/bridge-mdln-and-vote`

Each quickstart should include:
- User goal
- Prerequisites
- Exact app path
- Step-by-step flow
- Expected result
- Fees and gas notes
- Troubleshooting links
- Related API/SDK links when relevant

Target files:
- `src/app/docs/quickstarts/page.tsx` (new index)
- `src/app/docs/quickstarts/*/page.tsx` (new pages)
- `src/components/layout/app-sidebar.tsx`
- `src/app/sitemap.ts`

Acceptance criteria:
- Each core workflow can be completed from a single page.
- Quickstarts link to deeper learn/docs pages instead of duplicating conceptual background.
- Sidebar and sitemap include the new quickstart section.

## Phase 3: Canonical Fees, Revenue, And Governance Facts

**Objective:** Remove ambiguity around costs, royalties, marketplace fees, DAO treasury, and Creator's Airdrop.

Create:
- `/docs/fees`

Content requirements:
- Free actions: minting, collection creation, listing, offers, sponsored creator actions.
- Paid actions: buys/sells, remix licenses where creator sets a price.
- 1% marketplace fee to DAO treasury.
- Royalties vs marketplace fee distinction.
- Gas sponsorship scope and limitations.
- Creator's Airdrop as a DAO-voted option, not a guarantee.
- Links to `medialane.org`, Snapshot, and MDLN token page.

Target files:
- `src/app/docs/fees/page.tsx` (new)
- `src/app/learn/marketplace/page.tsx`
- `src/app/learn/creator-launchpad/page.tsx`
- `src/app/dao/token/page.tsx`
- `src/app/dao/airdrop/page.tsx`

Acceptance criteria:
- Every page that mentions fees links to `/docs/fees`.
- No page implies automatic distribution of platform revenue.
- Users can distinguish gas, platform fee, creator royalty, and license price.

## Phase 4: Contract And Protocol Reference

**Objective:** Make protocol facts inspectable and trustworthy.

Expand or replace `/docs/protocol` and `/docs/contracts` with:
- Current Starknet mainnet addresses.
- Ethereum MDLN, vesting, and treasury addresses.
- Explorer links.
- Contract purpose.
- Supported standards.
- Upgradeability status.
- Audit status and audit report links.
- Event list and order lifecycle.
- Known limitations.
- Source-of-truth note: `medialane-dao/lib/site-config.ts` and `medialane-dao/llms.txt`.

Target files:
- `src/app/docs/protocol/page.tsx`
- `src/app/docs/contracts/page.tsx`
- `src/app/docs/security/page.tsx`
- `src/app/sitemap.ts`

Acceptance criteria:
- All addresses match `medialane-dao/lib/site-config.ts`.
- Every contract has an explorer link.
- "Audited" claims link to evidence or are softened to the verified available status.

## Phase 5: SDK And API Reference Depth

**Objective:** Move from illustrative SDK/API docs to production integration docs.

Add:
- Complete SDK method index.
- Auth and API key lifecycle.
- Portal setup guide.
- Error codes and retry guidance.
- Pagination examples.
- Rate limit header examples.
- Webhook documentation or remove webhook claims until ready.
- OpenAPI JSON/YAML if available.
- End-to-end examples for listings, offers, token lookup, collection lookup, and activity feeds.

Target files:
- `src/app/docs/sdk/page.tsx`
- `src/app/docs/api/page.tsx`
- `src/app/docs/developers/page.tsx`
- `src/app/apps/page.tsx` (Portal claims)

Acceptance criteria:
- A developer can build a read-only gallery and marketplace listing view from docs alone.
- Claims about API keys, webhooks, and Portal match live product reality.
- All examples use `https://api.medialane.io`.

## Phase 6: Security And Trust Center

**Objective:** Back up ownership, revenue, and safety claims with evidence.

Add or expand:
- Audit reports and exact audited commit/class references.
- Contract verification links.
- Custody model: what Medialane can and cannot control.
- Session key and PIN/passkey threat model.
- Gas sponsorship/paymaster risk model.
- Responsible disclosure process.
- Bug bounty status, even if "not currently active."
- Incident/changelog section if needed.

Target files:
- `src/app/docs/security/page.tsx`
- `src/app/support/page.tsx`
- `src/app/guidelines/user-guidelines/page.tsx`

Acceptance criteria:
- Every "audited" or "secure" claim is either sourced or precisely scoped.
- Users understand what happens if a session key, PIN, frontend, or indexer fails.
- Security contact path is clear.

## Phase 7: Mediolano Vs Medialane Explainer

**Objective:** Prevent ownership/protocol confusion from returning.

Create:
- `/learn/mediolano-vs-medialane`

Content requirements:
- What Mediolano is.
- What Medialane is.
- What Medialane DAO governs.
- Which facts are canonical at `medialane.org`.
- Which user-facing features are Medialane app features.
- Language to use and language to avoid.

Target files:
- `src/app/learn/mediolano-vs-medialane/page.tsx` (new)
- `src/app/learn/page.tsx`
- `src/components/layout/app-sidebar.tsx`
- `src/app/about/page.tsx`

Acceptance criteria:
- No page needs to explain the distinction from scratch.
- Content consistently says "Medialane builds on Mediolano" when relevant.

## Phase 8: AI Agent Documentation

**Objective:** Make "AI agents as first-class participants" actionable.

Create:
- `/docs/ai-agents`

Content requirements:
- Capabilities available to agents.
- SDK/API examples.
- Wallet/account model.
- Session keys and automation boundaries.
- Minting/registering/licensing examples.
- Governance participation expectations.
- Abuse and rate-limit policy.

Target files:
- `src/app/docs/ai-agents/page.tsx` (new)
- `src/app/docs/developers/page.tsx`
- `src/app/learn/integrity-web/page.tsx`
- `src/app/about/page.tsx`

Acceptance criteria:
- An agent developer can understand what is permissionless, what requires API keys, and what policy boundaries exist.
- AI-agent claims are not only philosophical; they include practical integration paths.

## Phase 9: Support And Troubleshooting

**Objective:** Reduce support burden by documenting failure states.

Add troubleshooting guides:
- Asset not appearing.
- Transaction pending or failed.
- Session key/PIN/passkey issues.
- Wallet mismatch.
- Listing not visible.
- Offer not accepted or signature invalid.
- ERC-1155 quantity/partial-fill confusion.
- Bridge MDLN issues.
- API rate-limit and authentication errors.

Target files:
- `src/app/support/page.tsx`
- `src/app/docs/troubleshooting/page.tsx` (new)
- Relevant quickstart pages.

Acceptance criteria:
- Support FAQ points to full troubleshooting pages.
- Each troubleshooting item includes what to collect before contacting support: wallet, transaction hash, collection address, token ID, order hash.

## Phase 10: Ongoing Maintenance

**Objective:** Keep docs aligned after launch.

Process:
- Add a monthly docs audit checklist.
- Add a script or documented manual check comparing contract addresses in docs against `medialane-dao/lib/site-config.ts`.
- Add "last reviewed" dates to high-risk pages: contracts, fees, API, SDK, DAO/token, security.
- Require build before content merges.

Acceptance criteria:
- High-risk docs have ownership and review dates.
- Address drift is caught before publishing.
- New repo changes include docs updates when they affect user-facing behavior.

## Suggested Execution Order

1. Phase 1: Foundation and IA.
2. Phase 3: Fees and governance facts.
3. Phase 4: Contracts and protocol reference.
4. Phase 2: Quickstarts.
5. Phase 5: SDK/API reference.
6. Phase 6: Security trust center.
7. Phase 7: Mediolano vs Medialane explainer.
8. Phase 8: AI agent docs.
9. Phase 9: Troubleshooting.
10. Phase 10: Maintenance process.

This order tackles the most trust-sensitive ambiguity first, then adds user workflows and deeper developer coverage.

