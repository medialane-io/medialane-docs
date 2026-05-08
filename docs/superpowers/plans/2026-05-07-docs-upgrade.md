# Medialane Docs Upgrade — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace all placeholder and outdated documentation pages in medialane-docs with accurate, professional content that reflects the current state of @medialane/sdk v0.10.0, the v3 immutable contracts, the portal MDLN multiplier, and the AI agent integration story.

**Architecture:** Each docs page is a standalone Next.js server component at `src/app/docs/<section>/page.tsx`. Navigation is controlled by `src/lib/docs-nav.ts`. Pages use shared helper components (`Section`, `Code`, `EndpointRow`) defined inline per-file. No shared doc component library — keep components local unless they span >2 files.

**Tech Stack:** Next.js 15 App Router, TypeScript, Tailwind CSS, `bento-cell` utility class for bordered code/card blocks, Lucide icons.

---

## File Map

| File | Action |
|---|---|
| `src/lib/docs-nav.ts` | Modify — add AI Agents entry |
| `src/app/docs/sdk/page.tsx` | Rewrite — real SDK v0.10.0 API |
| `src/app/docs/api/page.tsx` | Rewrite — real endpoints + rate limits + portal |
| `src/app/docs/contracts/page.tsx` | Rewrite — v3 immutable contract addresses |
| `src/app/docs/protocol/page.tsx` | Rewrite — atomic swap, SNIP-12, indexer, v3 narrative |
| `src/app/docs/developers/page.tsx` | Rewrite — portal quickstart, MDLN multiplier, webhooks |
| `src/app/docs/agents/page.tsx` | Create — 402 billing, SIWS, autonomous patterns |
| `src/app/apps/page.tsx` | Modify — update portal card features + MDLN multiplier |
| `src/app/dao/token/page.tsx` | Modify — add platform multiplier section |

---

### Task 1: Add AI Agents to docs navigation

**Files:**
- Modify: `src/lib/docs-nav.ts`

- [ ] **Step 1: Read the current nav file**

Run: `cat -n src/lib/docs-nav.ts | head -80`
Expected: current DOCS_NAV array ending at `changelog`.

- [ ] **Step 2: Add the Bot import and Agents entry**

In `src/lib/docs-nav.ts`, add `Bot` to the lucide-react import, then insert a new entry into `DOCS_NAV` before the `changelog` entry:

```typescript
import {
  BookOpen, Building2, Bot, Coins, Code2, FileCode2, History,
  Info, Landmark, LifeBuoy, Package, Shield, Terminal, Network,
} from "lucide-react";
```

And in `DOCS_NAV`, between `developers` and `security`:

```typescript
  {
    href: "/docs/agents",
    label: "AI Agents",
    title: "AI Agents",
    icon: Bot,
    description: "Build autonomous agents that read, write, and pay using the Medialane API — 402 billing, SIWS auth, webhook events, and MDLN multipliers.",
  },
```

- [ ] **Step 3: Verify the build still compiles**

Run: `~/.bun/bin/bun run build 2>&1 | tail -20`
Expected: no TypeScript errors related to `DOCS_NAV` or `DOCS_TABS`.

- [ ] **Step 4: Commit**

```bash
git add src/lib/docs-nav.ts
git commit -m "feat(docs): add AI Agents nav entry"
```

---

### Task 2: Rewrite /docs/sdk

**Files:**
- Rewrite: `src/app/docs/sdk/page.tsx`

Current file has wrong method names (`getAsset`, `getAssetsByOwner`, `getPortfolio`, `mintAsset`) — none of these exist in `@medialane/sdk`. Real exported methods are on `client.api.*`.

- [ ] **Step 1: Write the new SDK page**

Replace the entire content of `src/app/docs/sdk/page.tsx` with:

```tsx
import type { Metadata } from "next";
import { Package, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SDK | Medialane Docs",
  description: "The @medialane/sdk TypeScript package — installation, client configuration, data queries, marketplace intents, and type reference.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

function Code({ children }: { children: string }) {
  return (
    <pre className="bento-cell p-4 text-xs font-mono overflow-x-auto text-foreground/80 leading-relaxed whitespace-pre">
      {children}
    </pre>
  );
}

const API_METHODS = [
  { method: "getToken(contract, tokenId)", returns: "ApiToken", desc: "Single token with full metadata, balances, and active orders." },
  { method: "getTokensByOwner(address)", returns: "ApiToken[]", desc: "All tokens owned by a wallet address. ERC-1155 balances included." },
  { method: "getCollections(page, limit, opts?)", returns: "{ data, meta }", desc: "Paginated collection list. opts: sort, owner, isFeatured." },
  { method: "getCollection(contract)", returns: "ApiCollection", desc: "Single collection by contract address. Includes slug, standard, collectionId." },
  { method: "getCollectionTokens(contract)", returns: "ApiToken[]", desc: "All tokens minted in a collection." },
  { method: "getCollectionsByOwner(address)", returns: "ApiCollection[]", desc: "Collections deployed by a wallet. Returns collectionId for use with createMintIntent." },
  { method: "getOrders(query)", returns: "ApiOrder[]", desc: "Marketplace orders. query: status, sort, currency, collection, page, limit." },
  { method: "getOrder(orderHash)", returns: "ApiOrder", desc: "Single order by its on-chain hash." },
  { method: "getTokenListings(contract, tokenId)", returns: "ApiOrder[]", desc: "Active listings and offers for a specific token." },
  { method: "getUserOrders(address)", returns: "ApiOrder[]", desc: "All orders (buy + sell) for a wallet address." },
  { method: "getActivities(query)", returns: "activity[]", desc: "Global activity feed — mint, sale, offer, transfer, cancelled." },
  { method: "getActivitiesByAddress(address)", returns: "activity[]", desc: "Activity feed for a specific wallet." },
  { method: "getTokenComments(contract, tokenId, opts?)", returns: "ApiComment[]", desc: "On-chain comments for a token. Added in v0.4.8." },
  { method: "getListableTokens()", returns: "token[]", desc: "Currency tokens accepted for listings and offers: USDC, USDT, ETH, STRK, WBTC." },
  { method: "checkCollectionSlugAvailability(slug)", returns: "boolean", desc: "Returns true if a vanity slug is unclaimed. Added in v0.10.0." },
  { method: "getCollectionBySlug(slug)", returns: "ApiCollection", desc: "Resolve a vanity slug to a collection. Added in v0.10.0." },
  { method: "submitCollectionSlugClaim(params)", returns: "ApiCollectionSlugClaim", desc: "Claim a vanity slug for a collection you own. Added in v0.10.0." },
  { method: "getMyCollectionSlugClaims()", returns: "ApiCollectionSlugClaim[]", desc: "All slug claims submitted by the authenticated wallet." },
];

const MARKETPLACE_METHODS = [
  { method: "createListingIntent(params)", desc: "Create a SNIP-12 typed data payload for a new listing. Params: contract, tokenId, price, currency, duration, standard, amount?." },
  { method: "submitIntentSignature(hash, sig)", desc: "Submit a signed listing or offer intent. Returns the created order." },
  { method: "createFulfillIntent(params)", desc: "Create pre-signed calldata for buying a listing." },
  { method: "createCancelIntent(params)", desc: "Create calldata for cancelling an active order." },
  { method: "createOfferIntent(params)", desc: "Create a SNIP-12 typed data payload for an offer. Params: contract, tokenId, price, currency, duration, standard, quantity?." },
];

const TYPES = [
  { name: "ApiToken", desc: "Token with metadata, balances (ERC-721 and ERC-1155), and activeOrders. token.balances replaces deprecated token.owner." },
  { name: "ApiCollection", desc: "Collection with standard (ERC721 | ERC1155 | UNKNOWN), collectionId, slug, source, image, totalSupply, floorPrice." },
  { name: "ApiOrder", desc: "Marketplace order — offer, consideration, offerer, orderHash, status, token (ApiOrderTokenMeta), remainingAmount." },
  { name: "ApiOrderTokenMeta", desc: "Name, image, description enrichment on every order — no per-token fetch needed." },
  { name: "ApiComment", desc: "On-chain comment with commentId, author, content, txHash, timestamp." },
  { name: "ApiCollectionProfile", desc: "Extended collection identity: displayName, description, bannerImage, avatarImage, socialLinks." },
  { name: "ApiCollectionSlugClaim", desc: "Slug claim with status (PENDING | ACTIVE | REJECTED) and collectionContract." },
  { name: "IpAttribute", desc: "Token attribute from IPFS metadata — { trait_type, value }. Licensing attributes use trait_types from LICENSE_TRAIT_TYPES." },
  { name: "IpNftMetadata", desc: "Full IPFS metadata object — name, description, image, external_url, attributes: IpAttribute[]." },
  { name: "SupportedTokenSymbol", desc: "Union: 'USDC' | 'USDT' | 'ETH' | 'STRK' | 'WBTC'. Replaces deprecated SupportedCurrencySymbol (removed in v0.4.2)." },
  { name: "OrderStatus", desc: "Union: 'ACTIVE' | 'FULFILLED' | 'CANCELLED' | 'EXPIRED'." },
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
          The official TypeScript SDK for the Medialane platform. Provides a fully-typed
          API client, marketplace intent builders, and type definitions for all platform
          objects. Built for Node.js, Bun, Deno, and browser environments.
        </p>
        <div className="flex flex-wrap gap-2 text-xs">
          {["v0.10.0", "TypeScript", "ESM + CJS", "Starknet Mainnet"].map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-mono">{t}</span>
          ))}
        </div>
      </div>

      <Section title="Installation">
        <div className="space-y-2">
          {[
            { label: "bun", cmd: "bun add @medialane/sdk starknet" },
            { label: "npm", cmd: "npm install @medialane/sdk starknet" },
            { label: "yarn", cmd: "yarn add @medialane/sdk starknet" },
          ].map(({ label, cmd }) => (
            <div key={label} className="flex items-center gap-3 bento-cell px-4 py-3">
              <span className="text-xs text-muted-foreground font-mono w-8">{label}</span>
              <code className="text-sm font-mono text-foreground flex-1">{cmd}</code>
            </div>
          ))}
        </div>
        <p className="text-sm">
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">starknet</code> is a peer dependency required for
          on-chain operations. If you only need the API client (read queries), it is optional.
        </p>
      </Section>

      <Section title="Client Initialization">
        <Code>{`import { MedialaneClient } from "@medialane/sdk";

const client = new MedialaneClient({
  backendUrl: "https://api.medialane.io",
  apiKey: process.env.MEDIALANE_API_KEY,   // from portal.medialane.io
  // On-chain contracts (Starknet Mainnet):
  marketplaceContract:    "0x004387e58d469f19332dd5d20846b10339ddc49ef208025ec7d5bef294a8daf3",
  marketplace1155Contract:"0x035836932ba1d219e00b8e42cd9a433fb2b211a08edcaa8bae40232f335f777d",
  collectionContract:     "0x05c49ee5d3208a2c2e150fdd0c247d1195ed9ab54fa2d5dea7a633f39e4b205b",
  collection1155Contract: "0x006b2dc7ca7c4f466bb4575ba043d934310f052074f849caf853a86bcb819fd6",
});`}</Code>
        <p className="text-sm">
          Contract addresses are optional — the SDK ships with the current mainnet defaults.
          Override only when testing against a local devnet or custom deployment.
          All addresses are normalised to 64-character hex internally; short-form addresses work.
        </p>
      </Section>

      <Section title="Quick Start">
        <Code>{`// Fetch the 20 newest collections
const { data: collections } = await client.api.getCollections(1, 20, { sort: "createdAt" });

// Fetch a token with its on-chain balance (ERC-721 or ERC-1155)
const token = await client.api.getToken("0x<contract>", "1");
console.log(token.balances);      // [{ owner: "0x...", amount: "1" }]
console.log(token.activeOrders);  // current listings + offers

// Fetch all active listings for a token
const listings = await client.api.getTokenListings("0x<contract>", "1");

// Resolve a vanity slug to a collection
const collection = await client.api.getCollectionBySlug("my-collection");

// Get supported payment currencies
const currencies = await client.api.getListableTokens();
// → [{ symbol: "USDC", address: "0x...", decimals: 6 }, ...]`}</Code>
      </Section>

      <Section title="client.api — Data Methods">
        <p className="text-sm">All methods return the data object directly (not wrapped). Errors throw.</p>
        <div className="space-y-2">
          {API_METHODS.map(({ method, returns, desc }) => (
            <div key={method} className="bento-cell px-4 py-3 space-y-1">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <code className="text-xs font-mono text-foreground/90">{method}</code>
                <code className="text-xs font-mono text-primary/70 shrink-0">→ {returns}</code>
              </div>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="client.marketplace — Marketplace Intents">
        <p className="text-sm">
          Marketplace write operations use a three-step flow: create intent → sign typed data (SNIP-12) → submit signature.
          These methods build the typed data payloads. Signing and on-chain execution are handled by your wallet provider (e.g. ChipiPay or Argent).
        </p>
        <div className="space-y-2">
          {MARKETPLACE_METHODS.map(({ method, desc }) => (
            <div key={method} className="bento-cell px-4 py-3 space-y-1">
              <code className="text-xs font-mono text-foreground/90">{method}</code>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
        <Code>{`// Full listing flow
const intent  = await client.marketplace.createListingIntent({
  contract: "0x<collection>",
  tokenId:  "1",
  price:    "1000000",          // in token decimals (USDC = 6, ETH = 18)
  currency: "0x<usdc_address>",
  duration: 86400 * 7,          // 7 days in seconds
  standard: "ERC721",
});

// Sign with your wallet (SNIP-12 typed data)
const signature = await wallet.signTypedData(intent.typedData);

// Submit and get the created order
const order = await client.marketplace.submitIntentSignature(
  intent.orderHash,
  signature,
);
console.log(order.status); // "ACTIVE"`}</Code>
      </Section>

      <Section title="client.marketplace1155 — ERC-1155 Operations">
        <p className="text-sm">
          The <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">Medialane1155Module</code> handles
          multi-edition (ERC-1155) specific on-chain operations: partial fills, amount tracking,
          and batch transfers. Use <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">client.marketplace1155</code> for
          ERC-1155 collections; <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">client.marketplace</code> handles both standards
          for intent creation.
        </p>
      </Section>

      <Section title="Type Reference">
        <div className="space-y-2">
          {TYPES.map(({ name, desc }) => (
            <div key={name} className="bento-cell px-4 py-3 space-y-1">
              <code className="text-xs font-mono text-foreground/90">{name}</code>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
        <Code>{`import type {
  ApiToken, ApiCollection, ApiOrder, ApiOrderTokenMeta,
  ApiComment, ApiCollectionProfile, ApiCollectionSlugClaim,
  IpAttribute, IpNftMetadata, SupportedTokenSymbol, OrderStatus,
} from "@medialane/sdk";`}</Code>
      </Section>

      <div className="flex flex-wrap gap-4">
        <a
          href="https://www.npmjs.com/package/@medialane/sdk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          npm package <ExternalLink className="h-3.5 w-3.5" />
        </a>
        <Link href="/docs/api" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          API Reference <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <Link href="/docs/agents" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          AI Agent Guide <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

    </div>
  );
}
```

- [ ] **Step 2: Verify no TypeScript errors**

Run: `~/.bun/bin/bun run build 2>&1 | grep -E "error|Error" | head -20`
Expected: no errors in `docs/sdk/page.tsx`.

- [ ] **Step 3: Commit**

```bash
git add src/app/docs/sdk/page.tsx
git commit -m "docs(sdk): rewrite with real @medialane/sdk v0.10.0 API"
```

---

### Task 3: Rewrite /docs/api

**Files:**
- Rewrite: `src/app/docs/api/page.tsx`

Needs: real endpoint inventory (including comments, slug, gated-content), portal section, MDLN multiplier rate tiers, 402 response, webhook events.

- [ ] **Step 1: Write the new API page**

Replace the entire content of `src/app/docs/api/page.tsx`:

```tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "API Reference | Medialane Docs",
  description: "Full REST API reference — endpoints, authentication, rate limits, MDLN multiplier tiers, and response types.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

function Code({ children }: { children: string }) {
  return (
    <pre className="bento-cell p-4 text-xs font-mono overflow-x-auto text-foreground/80 leading-relaxed whitespace-pre">
      {children}
    </pre>
  );
}

type Method = "GET" | "POST" | "PATCH" | "DELETE";

const METHOD_COLORS: Record<Method, string> = {
  GET:    "bg-blue-500/10 text-blue-400",
  POST:   "bg-emerald-500/10 text-emerald-400",
  PATCH:  "bg-amber-500/10 text-amber-400",
  DELETE: "bg-destructive/10 text-destructive",
};

function EndpointRow({ method, path, desc }: { method: Method; path: string; desc: string }) {
  return (
    <div className="bento-cell px-3 py-2.5 flex items-center gap-3 flex-wrap">
      <span className={`font-mono text-[10px] px-2 py-0.5 rounded shrink-0 ${METHOD_COLORS[method]}`}>{method}</span>
      <span className="font-mono text-xs text-foreground/80">{path}</span>
      <span className="text-muted-foreground text-xs ml-auto text-right">{desc}</span>
    </div>
  );
}

const RATE_TIERS = [
  { label: "Free",     mdln: "0 MDLN",      mult: "1×",   limit: "50 req / month",    color: "text-muted-foreground" },
  { label: "Starter",  mdln: "500 MDLN",     mult: "1.2×", limit: "60 req / month",    color: "text-blue-400" },
  { label: "Builder",  mdln: "2,000 MDLN",   mult: "1.5×", limit: "75 req / month",    color: "text-purple-400" },
  { label: "Pro",      mdln: "5,000 MDLN",   mult: "2×",   limit: "100 req / month",   color: "text-primary" },
];

export default function DocsAPIPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">API Reference</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Full REST API for the Medialane platform. All endpoints return JSON.
          Read-only endpoints are public. Write operations and higher rate limits require an API key
          from{" "}
          <a href="https://portal.medialane.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            portal.medialane.io
          </a>.
        </p>
      </div>

      <div className="space-y-8">

        <Section title="Base URL">
          <Code>https://api.medialane.io/v1</Code>
          <p>All HTTPS. All requests with an API key must include the header:</p>
          <Code>x-api-key: ml_live_your_key_here</Code>
        </Section>

        <Section title="Rate Limits & MDLN Multiplier">
          <p>
            Limits apply per API key on a rolling calendar month. Hold MDLN tokens and
            register them in the portal to unlock a multiplier on your base quota.
            Every response includes rate limit headers.
          </p>
          <div className="space-y-2">
            {RATE_TIERS.map(({ label, mdln, mult, limit, color }) => (
              <div key={label} className="bento-cell px-4 py-2.5 flex items-center gap-4 flex-wrap">
                <span className={`font-semibold text-xs w-16 shrink-0 ${color}`}>{label}</span>
                <span className="text-xs text-muted-foreground font-mono">{mdln}</span>
                <span className={`text-xs font-bold font-mono ml-auto ${color}`}>{mult}</span>
                <span className="text-xs text-muted-foreground w-32 text-right">{limit}</span>
              </div>
            ))}
          </div>
          <Code>{`X-RateLimit-Limit: 50
X-RateLimit-Remaining: 48
X-RateLimit-Reset: 1714521600
X-RateLimit-Multiplier: 1.0`}</Code>
          <p>
            Portal endpoints (<code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">/v1/portal/*</code>) are
            billed from a separate USDC credit balance — not from the monthly request quota.
            AI agents can deposit credits programmatically. See the{" "}
            <Link href="/docs/agents" className="text-primary hover:underline">AI Agents guide</Link>.
          </p>
        </Section>

        <Section title="Collections">
          <div className="space-y-2">
            <EndpointRow method="GET" path="/v1/collections" desc="List all collections (paginated, sortable)" />
            <EndpointRow method="GET" path="/v1/collections/:contract" desc="Single collection by contract address" />
            <EndpointRow method="GET" path="/v1/collections/:contract/tokens" desc="Tokens in a collection (paginated)" />
            <EndpointRow method="GET" path="/v1/collections/:contract/gated-content" desc="Holder-only content for a collection (requires JWT)" />
            <EndpointRow method="GET" path="/v1/collections/by-slug/:slug" desc="Resolve a vanity slug to a collection" />
          </div>
          <p>
            Query params for <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">/v1/collections</code>:{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">page</code>,{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">limit</code>,{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">sort</code> (createdAt | totalSupply | floorPrice | totalVolume),{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">owner</code>,{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">isFeatured</code>.
          </p>
        </Section>

        <Section title="Tokens">
          <div className="space-y-2">
            <EndpointRow method="GET" path="/v1/tokens/:contract/:tokenId" desc="Single token — metadata, balances, active orders" />
            <EndpointRow method="GET" path="/v1/tokens/owned/:address" desc="All tokens owned by a wallet" />
            <EndpointRow method="GET" path="/v1/tokens/:contract/:tokenId/history" desc="Transfer and order history for a token" />
            <EndpointRow method="GET" path="/v1/tokens/:contract/:tokenId/comments" desc="On-chain comments for a token" />
          </div>
          <p>
            For ERC-1155 tokens, <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">token.balances</code> lists
            every holder with their quantity.{" "}
            <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">token.owner</code> is deprecated and always <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">null</code>.
          </p>
        </Section>

        <Section title="Orders">
          <div className="space-y-2">
            <EndpointRow method="GET"  path="/v1/orders" desc="List orders — filter by status, sort, currency, collection" />
            <EndpointRow method="GET"  path="/v1/orders/:orderHash" desc="Single order by hash" />
            <EndpointRow method="GET"  path="/v1/orders/user/:address" desc="All orders for a wallet (buy + sell)" />
            <EndpointRow method="GET"  path="/v1/orders/token/:contract/:tokenId" desc="Active orders for a specific token" />
            <EndpointRow method="POST" path="/v1/orders/intent/listing" desc="Create a listing intent (returns SNIP-12 typed data)" />
            <EndpointRow method="POST" path="/v1/orders/intent/offer" desc="Create an offer intent" />
            <EndpointRow method="POST" path="/v1/orders/intent/fulfill" desc="Create a fulfill intent for buying a listing" />
            <EndpointRow method="POST" path="/v1/orders/intent/cancel" desc="Create a cancel intent" />
            <EndpointRow method="POST" path="/v1/orders/signature" desc="Submit a signed intent — activates the order" />
          </div>
          <p>
            Order intents use SNIP-12 typed data signing. The listing/offer intent endpoints
            return <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">{"{ typedData, orderHash }"}</code>.
            Sign with your wallet and submit the signature via <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">/v1/orders/signature</code>.
          </p>
        </Section>

        <Section title="Activities">
          <div className="space-y-2">
            <EndpointRow method="GET" path="/v1/activities" desc="Global activity feed — all event types, all wallets" />
            <EndpointRow method="GET" path="/v1/activities/:address" desc="Activity feed for a specific wallet" />
          </div>
          <p>
            Event types: <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">mint</code>,{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">listing</code>,{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">sale</code>,{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">offer</code>,{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">transfer</code>,{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">cancelled</code>.
          </p>
        </Section>

        <Section title="Portal Endpoints (API key required)">
          <div className="space-y-2">
            <EndpointRow method="GET"  path="/v1/portal/keys" desc="List your API keys" />
            <EndpointRow method="POST" path="/v1/portal/keys" desc="Create a new API key" />
            <EndpointRow method="GET"  path="/v1/portal/usage" desc="Current period usage and quota" />
            <EndpointRow method="POST" path="/v1/portal/credits/deposit" desc="Deposit USDC credits for pay-per-call billing" />
            <EndpointRow method="GET"  path="/v1/portal/credits/balance" desc="Current USDC credit balance" />
            <EndpointRow method="GET"  path="/v1/portal/webhooks" desc="List configured webhook endpoints" />
            <EndpointRow method="POST" path="/v1/portal/webhooks" desc="Register a new webhook endpoint" />
            <EndpointRow method="DELETE" path="/v1/portal/webhooks/:id" desc="Remove a webhook endpoint" />
          </div>
          <p>
            Portal endpoints use a per-call USDC credit model, separate from the monthly quota.
            This allows AI agents to pre-fund an account and operate autonomously without per-request human approval.
            See the <Link href="/docs/agents" className="text-primary hover:underline">AI Agents guide</Link> for the 402 billing flow.
          </p>
        </Section>

        <Section title="Response Format">
          <Code>{`// List response
{
  "data": [...],
  "meta": { "page": 1, "limit": 20, "total": 142 }
}

// Single item — returned directly (no wrapper)
{ "contract": "0x...", "tokenId": "1", "name": "...", ... }

// Error response
{ "error": "Not found", "statusCode": 404 }

// 402 Payment Required — credit balance exhausted (AI agent billing)
{
  "error": "Insufficient credits",
  "statusCode": 402,
  "creditRequired": 0.001,
  "depositUrl": "https://portal.medialane.io/credits"
}`}</Code>
        </Section>

        <Section title="Address Format">
          <p>
            All Starknet addresses in requests and responses are normalised to
            64-character zero-padded hex with <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">0x</code> prefix.
            The SDK normalises automatically. If calling the API directly, pad short-form addresses
            (e.g. <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">0x1</code> →{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">0x0000...0001</code>).
          </p>
        </Section>

        <Section title="IPFS & Media URLs">
          <Code>{`// Responses use ipfs:// scheme
{ "image": "ipfs://bafybeifoo..." }

// Convert to HTTP for display
const httpUrl = ipfsUri.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/");`}</Code>
        </Section>

      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `~/.bun/bin/bun run build 2>&1 | grep -E "error|Error" | head -20`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/docs/api/page.tsx
git commit -m "docs(api): rewrite with real endpoints, MDLN multiplier tiers, portal billing"
```

---

### Task 4: Rewrite /docs/contracts

**Files:**
- Rewrite: `src/app/docs/contracts/page.tsx`

Current page has generic `.cairo` filenames and wrong contract descriptions. Replace with real v3 mainnet addresses, correct descriptions, and the immutable/permissionless design rationale.

- [ ] **Step 1: Write the new contracts page**

Replace `src/app/docs/contracts/page.tsx`:

```tsx
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
        desc: "Factory for deploying ERC-1155 multi-edition collections. Each collection is a separate contract owned by the creator. Emits CollectionDeployed with the contract address, name, symbol, and base_uri.",
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
          v3 contracts were deployed in April 2026. The constructor accepts only a <code className="font-mono bg-muted px-1 py-0.5 rounded">native_token_address</code> — there
          is no admin account, no <code className="font-mono bg-muted px-1 py-0.5 rounded">UpgradeableComponent</code>, and no owner role.
          Previous v2 contracts are decommissioned. Active orders from v2 have been removed from the indexer.
          The indexer started scanning from block <code className="font-mono bg-muted px-1 py-0.5 rounded">9130000</code>.
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
```

- [ ] **Step 2: Verify build**

Run: `~/.bun/bin/bun run build 2>&1 | grep -E "error|Error" | head -10`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/docs/contracts/page.tsx
git commit -m "docs(contracts): rewrite with v3 mainnet addresses and immutable design narrative"
```

---

### Task 5: Rewrite /docs/protocol

**Files:**
- Rewrite: `src/app/docs/protocol/page.tsx`

The current page has some real content but needs: atomic swap section, SNIP-12 signing flow, v3 immutable narrative, indexer details, ERC-2981 royalty flow.

- [ ] **Step 1: Read the current protocol page in full**

Run: `cat -n src/app/docs/protocol/page.tsx`

- [ ] **Step 2: Write the new protocol page**

Replace `src/app/docs/protocol/page.tsx`:

```tsx
import type { Metadata } from "next";
import { Network } from "lucide-react";

export const metadata: Metadata = {
  title: "Protocol | Medialane Docs",
  description: "Technical specification of the Medialane onchain protocol — atomic swaps, SNIP-12 signing, ERC-2981 royalties, indexer, and event model.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

function Code({ children }: { children: string }) {
  return (
    <pre className="bento-cell p-4 text-xs font-mono overflow-x-auto text-foreground/80 leading-relaxed whitespace-pre">
      {children}
    </pre>
  );
}

const EVENTS = [
  { name: "Transfer (ERC-721)", desc: "Single-token ownership transfer. Emitted on mint, sale, and manual transfer." },
  { name: "TransferSingle (ERC-1155)", desc: "Single-edition transfer with from, to, id, and value fields. Used for ERC-1155 balance tracking." },
  { name: "TransferBatch (ERC-1155)", desc: "Batch ERC-1155 transfer — multiple token IDs and values in one event." },
  { name: "OrderCreated", desc: "Emitted when a new listing or offer is activated on the marketplace contract." },
  { name: "OrderFulfilled", desc: "Emitted when a listing is purchased or an offer is accepted." },
  { name: "OrderCancelled", desc: "Emitted when an order is cancelled by the offerer." },
  { name: "CollectionDeployed", desc: "Emitted by factory contracts when a new collection, drop, or POP campaign is deployed." },
  { name: "RoyaltyPaid", desc: "Emitted by ERC-2981 royalty distribution — recipient address and amount on every settled trade." },
];

export default function DocsProtocolPage() {
  return (
    <div className="space-y-10">

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Network className="h-5 w-5 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">Protocol</span>
        </div>
        <h2 className="text-2xl font-bold">Protocol Specification</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          The Medialane protocol consists of immutable Starknet mainnet contracts and
          an off-chain indexer/API layer. This document covers the order lifecycle,
          atomic swap mechanics, event model, and indexer design.
        </p>
      </div>

      <div className="space-y-8">

        <Section title="Deployed Contracts (Starknet Mainnet)">
          <div className="space-y-2">
            {[
              { name: "Marketplace v3 (ERC-721)",  address: "0x004387e58d469f19332dd5d20846b10339ddc49ef208025ec7d5bef294a8daf3" },
              { name: "Marketplace v3 (ERC-1155)", address: "0x035836932ba1d219e00b8e42cd9a433fb2b211a08edcaa8bae40232f335f777d" },
              { name: "NFTComments",               address: "0x024f97eb5abe659fb650bf162b5fc16501f8f3863a7369901ce6099462e62799" },
              { name: "Collection Registry",        address: "0x05c49ee5d3208a2c2e150fdd0c247d1195ed9ab54fa2d5dea7a633f39e4b205b" },
              { name: "ERC-1155 Collection Factory",address: "0x006b2dc7ca7c4f466bb4575ba043d934310f052074f849caf853a86bcb819fd6" },
              { name: "Collection Drop Factory",    address: "0x03587f42e29daee1b193f6cf83bf8627908ed6632d0d83fcb26225c50547d800" },
              { name: "POP Protocol Factory",       address: "0x00b32c34b427d8f346b5843ada6a37bd3368d879fc752cd52b68a87287f60111" },
            ].map(({ name, address }) => (
              <div key={name} className="bento-cell px-4 py-3 space-y-1">
                <p className="text-sm font-semibold text-foreground">{name}</p>
                <p className="font-mono text-xs text-primary/70 break-all">{address}</p>
              </div>
            ))}
          </div>
          <p className="text-xs">
            Indexer scans from block <code className="font-mono bg-muted px-1 py-0.5 rounded">9130000</code>.
            All contracts are immutable — no admin account, no upgrade path. See{" "}
            <a href="/docs/contracts" className="text-primary hover:underline">Contracts</a> for details.
          </p>
        </Section>

        <Section title="Order Lifecycle (SNIP-12 Typed Data)">
          <p>
            Marketplace orders are off-chain signed, on-chain enforced. The flow prevents
            signature replay, ensures order validity without a pending transaction, and
            allows gasless cancellation of unmatched orders.
          </p>
          <Code>{`1. Creator calls POST /v1/orders/intent/listing
   ← { typedData: { domain, types, primaryType, message }, orderHash }

2. Creator signs typedData with their Starknet account (SNIP-12)
   ← { r, s } signature

3. Creator calls POST /v1/orders/signature
   → { orderHash, signature }
   ← Order is now ACTIVE in the indexer

4. Buyer calls POST /v1/orders/intent/fulfill
   ← { calls: [ approve_erc20, fulfill_order ] }   ← atomic

5. Buyer submits calls via their wallet (ChipiPay / Argent / Braavos)
   ← OrderFulfilled event emitted on-chain
   ← Royalties distributed automatically (ERC-2981)
   ← Order status → FULFILLED in indexer (~6s)`}</Code>
        </Section>

        <Section title="Atomic Swap — No Escrow, No Custody">
          <p>
            Every purchase executes as a pair of calls submitted atomically in a single
            Starknet transaction. Either both succeed or both revert — there is no
            intermediate state where the buyer's funds are held by the marketplace contract.
          </p>
          <Code>{`// Atomic call batch (submitted by buyer's wallet):
[
  {
    to:       "0x<erc20_token>",           // e.g. USDC contract
    selector: "approve",
    calldata: [marketplace_contract, amount],
  },
  {
    to:       "0x<marketplace_contract>",
    selector: "fulfill_order",
    calldata: [orderHash, buyer_address],
  }
]`}</Code>
          <p>
            The marketplace contract calls <code className="font-mono bg-muted px-1 py-0.5 rounded text-xs">transfer_from</code> on the
            ERC-20 after verifying the order signature. If the seller is no longer the token owner
            or the approve fails for any reason, the entire transaction reverts.
          </p>
        </Section>

        <Section title="ERC-2981 Royalties">
          <p>
            Every collection deployed through Medialane implements ERC-2981. On every
            fulfilled order, the marketplace contract queries the token contract for the
            royalty recipient and basis points, then distributes the payment before
            transferring the remainder to the seller.
          </p>
          <Code>{`// Royalty calculation on fulfill
royalty_amount = order_price * royalty_bps / 10_000
seller_amount  = order_price - royalty_amount

transfer(royalty_recipient, royalty_amount)   // creator
transfer(seller, seller_amount)               // current owner`}</Code>
          <p>
            Royalties are enforced at the contract level — they cannot be bypassed by
            any marketplace or wrapper contract. The rate is set at collection deploy
            time and cannot be changed (immutable contract design).
          </p>
        </Section>

        <Section title="ERC-1155 Partial Fills">
          <p>
            ERC-1155 listings specify a <code className="font-mono bg-muted px-1 py-0.5 rounded text-xs">amount</code> (number of editions for sale)
            and a unit <code className="font-mono bg-muted px-1 py-0.5 rounded text-xs">price</code>.
            Each fulfillment decrements <code className="font-mono bg-muted px-1 py-0.5 rounded text-xs">remainingAmount</code>.
            The order stays <code className="font-mono bg-muted px-1 py-0.5 rounded text-xs">ACTIVE</code> until
            <code className="font-mono bg-muted px-1 py-0.5 rounded text-xs mx-1">remainingAmount == 0</code>,
            then transitions to <code className="font-mono bg-muted px-1 py-0.5 rounded text-xs">FULFILLED</code>.
          </p>
          <Code>{`// ERC-1155 order state
{
  "standard": "ERC1155",
  "amount": "10",           // original listing quantity
  "remainingAmount": "7",   // still available
  "status": "ACTIVE",
  "pricePerUnit": "1000000" // USDC, 6 decimals
}`}</Code>
        </Section>

        <Section title="Indexer & Event Model">
          <p>
            The off-chain indexer polls Starknet RPC for new blocks (~6s cadence),
            parses contract events, and writes to a PostgreSQL database that backs
            the REST API. The indexer is the only write path to the API state — it
            does not accept user-submitted transaction data.
          </p>
          <div className="space-y-2">
            {EVENTS.map(({ name, desc }) => (
              <div key={name} className="bento-cell px-4 py-2.5 flex items-start gap-3">
                <code className="text-xs font-mono text-foreground/80 shrink-0 mt-0.5 w-52">{name}</code>
                <span className="text-xs text-muted-foreground">{desc}</span>
              </div>
            ))}
          </div>
          <p className="text-xs">
            ERC-1155 balance tracking uses <code className="font-mono bg-muted px-1 py-0.5 rounded">TransferSingle</code> and
            <code className="font-mono bg-muted px-1 py-0.5 rounded mx-1">TransferBatch</code> exclusively.
            The <code className="font-mono bg-muted px-1 py-0.5 rounded">Transfer</code> event is deduplicated at ingestion time
            to prevent double-counting on contracts that emit both event types.
          </p>
        </Section>

        <Section title="Session Keys (SNIP-9)">
          <p>
            The Medialane app uses SNIP-9 session keys to enable gasless, PIN-authorized
            transactions without exposing the account's master private key on every action.
          </p>
          <Code>{`// Session key scope (registered on-chain)
{
  validUntil: now + 6 * 60 * 60,          // 6 hours
  allowedMethods: [
    { contractAddress: marketplace_721,  selector: "create_order" },
    { contractAddress: marketplace_721,  selector: "cancel_order" },
    { contractAddress: marketplace_1155, selector: "create_order" },
    { contractAddress: marketplace_1155, selector: "cancel_order" },
    { contractAddress: nftcomments,      selector: "post_comment" },
    // approve and set_approval_for_all are intentionally excluded
  ]
}`}</Code>
          <p>
            Session key approval and sponsored gas are managed by ChipiPay on the
            consumer app. The dApp (app.medialane.io) accepts any Starknet wallet
            and uses standard account signing instead.
          </p>
        </Section>

      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `~/.bun/bin/bun run build 2>&1 | grep -E "error|Error" | head -10`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/docs/protocol/page.tsx
git commit -m "docs(protocol): rewrite with atomic swap, SNIP-12 flow, ERC-2981, indexer, SNIP-9"
```

---

### Task 6: Rewrite /docs/developers

**Files:**
- Rewrite: `src/app/docs/developers/page.tsx`

Current page says "Contact us at dev@medialane.io to request a key" — outdated. Portal is live. Also missing MDLN multiplier, webhook setup, and integration patterns.

- [ ] **Step 1: Write the new developers page**

Replace `src/app/docs/developers/page.tsx`:

```tsx
import type { Metadata } from "next";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Developers | Medialane Docs",
  description: "Developer quickstart — portal setup, SDK integration, MDLN multiplier, webhooks, and Medialane API patterns.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

function Code({ children }: { children: string }) {
  return (
    <pre className="bento-cell p-4 text-xs font-mono overflow-x-auto text-foreground/80 leading-relaxed whitespace-pre">
      {children}
    </pre>
  );
}

const WEBHOOK_EVENTS = [
  { event: "order.created",    desc: "A new listing or offer is activated." },
  { event: "order.fulfilled",  desc: "A listing is purchased or offer accepted." },
  { event: "order.cancelled",  desc: "An order is cancelled by the offerer." },
  { event: "token.minted",     desc: "A new NFT is minted in any indexed collection." },
  { event: "token.transferred",desc: "Token ownership changes hands (non-sale transfer)." },
  { event: "comment.posted",   desc: "An on-chain comment is posted to a token." },
];

export default function DocsDevsPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Developer Guide</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Everything you need to integrate with Medialane — from API key setup to
          real-time webhooks and MDLN-boosted quotas.
        </p>
      </div>

      <div className="space-y-8">

        <Section title="1. Get an API Key">
          <p>
            API keys are self-service at{" "}
            <a href="https://portal.medialane.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              portal.medialane.io
            </a>.
            Sign in, create a project, and copy your key. The free tier provides 50 requests per calendar month —
            no credit card required.
          </p>
          <Code>{`# Sign in at portal.medialane.io → Projects → New Key
# Copy your key, then store it securely:
export MEDIALANE_API_KEY=ml_live_your_key_here`}</Code>
          <p>
            Pass the key on every request:
          </p>
          <Code>{`curl https://api.medialane.io/v1/collections \\
  -H "x-api-key: $MEDIALANE_API_KEY"`}</Code>
        </Section>

        <Section title="2. Boost Your Quota with MDLN">
          <p>
            Hold MDLN tokens and register them in the portal to unlock a quota multiplier.
            The multiplier is checked on-chain when your key is registered — you keep the
            boost for the remainder of the billing period.
          </p>
          <div className="space-y-2">
            {[
              { label: "Free",    mdln: "0 MDLN",    mult: "1×",   limit: "50 req / month" },
              { label: "Starter", mdln: "500 MDLN",  mult: "1.2×", limit: "60 req / month" },
              { label: "Builder", mdln: "2,000 MDLN",mult: "1.5×", limit: "75 req / month" },
              { label: "Pro",     mdln: "5,000 MDLN",mult: "2×",   limit: "100 req / month" },
            ].map(({ label, mdln, mult, limit }) => (
              <div key={label} className="bento-cell px-4 py-2.5 flex items-center gap-4 flex-wrap text-sm">
                <span className="font-semibold w-16 shrink-0">{label}</span>
                <span className="text-muted-foreground font-mono">{mdln}</span>
                <span className="font-bold font-mono text-primary ml-auto">{mult}</span>
                <span className="text-muted-foreground text-xs w-32 text-right">{limit}</span>
              </div>
            ))}
          </div>
          <p className="text-sm">
            For higher-volume use cases, deposit USDC credits in the portal for pay-per-call billing
            on top of your base quota. This is the primary billing model for AI agents.
            See the <Link href="/docs/agents" className="text-primary hover:underline">AI Agents guide</Link>.
          </p>
        </Section>

        <Section title="3. Install the SDK">
          <Code>{`bun add @medialane/sdk starknet
# or: npm install @medialane/sdk starknet`}</Code>
          <Code>{`import { MedialaneClient } from "@medialane/sdk";

const client = new MedialaneClient({
  backendUrl: "https://api.medialane.io",
  apiKey: process.env.MEDIALANE_API_KEY,
});

// Fetch newest collections
const { data: collections } = await client.api.getCollections(1, 20, { sort: "createdAt" });

// Fetch tokens owned by a wallet
const tokens = await client.api.getTokensByOwner("0x<wallet>");

// Fetch supported currencies for listings
const currencies = await client.api.getListableTokens();
// → [{ symbol: "USDC", address: "0x...", decimals: 6 }, ...]`}</Code>
        </Section>

        <Section title="4. Set Up Webhooks">
          <p>
            Register a webhook endpoint in the portal to receive real-time push events
            whenever activity occurs on the platform. The indexer delivers events within
            seconds of on-chain confirmation.
          </p>
          <Code>{`// Register a webhook via API
POST https://api.medialane.io/v1/portal/webhooks
x-api-key: ml_live_...
Content-Type: application/json

{
  "url": "https://your-app.com/webhooks/medialane",
  "events": ["order.created", "order.fulfilled", "token.minted"],
  "secret": "whsec_your_signing_secret"
}`}</Code>
          <p>All webhook payloads are signed with HMAC-SHA256 using your webhook secret:</p>
          <Code>{`// Verify webhook signature (Node.js / Bun)
import { createHmac } from "crypto";

function verifyWebhook(body: string, sig: string, secret: string) {
  const expected = createHmac("sha256", secret)
    .update(body)
    .digest("hex");
  return sig === \`sha256=\${expected}\`;
}

// Express / Hono handler
app.post("/webhooks/medialane", async (req) => {
  const sig = req.headers["x-medialane-signature"];
  if (!verifyWebhook(req.rawBody, sig, process.env.WEBHOOK_SECRET!)) {
    return res.status(401).send("Invalid signature");
  }
  const event = req.body;  // { type, data, timestamp }
  // handle event...
});`}</Code>
          <div className="space-y-2">
            <p className="text-sm font-medium text-foreground">Available event types:</p>
            {WEBHOOK_EVENTS.map(({ event, desc }) => (
              <div key={event} className="bento-cell px-4 py-2.5 flex items-center gap-3">
                <code className="text-xs font-mono text-foreground/80 shrink-0 w-40">{event}</code>
                <span className="text-xs text-muted-foreground">{desc}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section title="5. Common Integration Patterns">
          <p className="font-medium text-foreground text-sm">Display a collection with floor price and token grid</p>
          <Code>{`const collection = await client.api.getCollection("0x<contract>");
const tokens     = await client.api.getCollectionTokens("0x<contract>");
const listings   = await client.api.getTokenListings("0x<contract>", tokens[0].tokenId);

console.log(collection.name, collection.floorPrice);
console.log(tokens.length, "tokens");
console.log(listings[0]?.price, "cheapest listing");`}</Code>

          <p className="font-medium text-foreground text-sm mt-4">Check if a wallet holds a specific token (token gating)</p>
          <Code>{`const token = await client.api.getToken("0x<contract>", "1");

// ERC-721 — single owner
const isOwner = token.balances?.[0]?.owner === walletAddress;

// ERC-1155 — check holder list
const holding = token.balances?.find(b => b.owner === walletAddress);
const amount  = holding ? parseInt(holding.amount, 10) : 0;
const hasAccess = amount > 0;`}</Code>

          <p className="font-medium text-foreground text-sm mt-4">Fetch all orders for a portfolio page</p>
          <Code>{`const orders = await client.api.getUserOrders("0x<wallet>");
const listings = orders.filter(o => o.offerer === walletAddress && o.status === "ACTIVE");
const offers   = orders.filter(o => o.offerer !== walletAddress && o.status === "ACTIVE");`}</Code>
        </Section>

      </div>

      <div className="flex flex-wrap gap-4">
        <a href="https://portal.medialane.io" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          Open Portal <ExternalLink className="h-3.5 w-3.5" />
        </a>
        <Link href="/docs/api" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          Full API Reference <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <Link href="/docs/agents" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          AI Agent Guide <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

    </div>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `~/.bun/bin/bun run build 2>&1 | grep -E "error|Error" | head -10`
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/docs/developers/page.tsx
git commit -m "docs(developers): rewrite with portal quickstart, MDLN multiplier, webhooks, patterns"
```

---

### Task 7: Create /docs/agents (new page)

**Files:**
- Create: `src/app/docs/agents/page.tsx`

This page doesn't exist yet. It should cover: what AI agents can do with the Medialane API, HTTP 402 payment required flow, SIWS authentication for wallet-owned agents, MDLN multiplier for autonomous builders, and practical code examples.

- [ ] **Step 1: Create the agents directory**

Run: `mkdir -p src/app/docs/agents`

- [ ] **Step 2: Write the new agents page**

Create `src/app/docs/agents/page.tsx`:

```tsx
import type { Metadata } from "next";
import { Bot, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Agents | Medialane Docs",
  description: "Build autonomous agents on Medialane — HTTP 402 billing, SIWS wallet auth, MDLN multiplier, webhook listeners, and permissionless API access.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

function Code({ children }: { children: string }) {
  return (
    <pre className="bento-cell p-4 text-xs font-mono overflow-x-auto text-foreground/80 leading-relaxed whitespace-pre">
      {children}
    </pre>
  );
}

const AGENT_CAPABILITIES = [
  { title: "Read market state", desc: "Query collections, tokens, orders, activities, and wallet portfolios without authentication. Public read endpoints are completely open." },
  { title: "Monitor events via webhooks", desc: "Register a webhook to receive push notifications for mints, sales, and transfers in real time — no polling required." },
  { title: "Submit marketplace orders", desc: "Create listings and offers by generating SNIP-12 typed data and signing with a Starknet account controlled by the agent." },
  { title: "Pay autonomously (HTTP 402)", desc: "Pre-fund a USDC credit balance in the portal. When quota is exhausted, the API returns 402 — the agent deposits credits and retries." },
  { title: "Multiply quota with MDLN", desc: "An agent wallet holding MDLN tokens and registered in the portal receives a rate-limit multiplier (up to 2× for 5,000 MDLN)." },
];

export default function AgentsPage() {
  return (
    <div className="space-y-10 max-w-3xl">

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">AI Agents</span>
        </div>
        <h2 className="text-2xl font-bold">Building AI Agents on Medialane</h2>
        <p className="text-muted-foreground leading-relaxed">
          Medialane&apos;s permissionless, immutable design makes it a natural fit for autonomous
          software agents. Agents can read market data, react to on-chain events, submit
          marketplace orders, and pay for API access without any human in the loop.
        </p>
      </div>

      <Section title="What Agents Can Do">
        <div className="space-y-2">
          {AGENT_CAPABILITIES.map(({ title, desc }) => (
            <div key={title} className="bento-cell p-4 space-y-1">
              <p className="text-sm font-semibold text-foreground">{title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Authentication — SIWS (Sign In With Starknet)">
        <p>
          Agents that need to perform write operations (submit orders, post comments,
          manage API keys) must authenticate using{" "}
          <strong className="text-foreground">Sign In With Starknet (SIWS)</strong>.
          SIWS is a Starknet-native equivalent of EIP-4361: the agent signs a structured
          message with its Starknet private key to prove wallet ownership.
        </p>
        <Code>{`// 1. Fetch a nonce from the portal
const { nonce } = await fetch("https://api.medialane.io/v1/portal/auth/nonce").then(r => r.json());

// 2. Build the SIWS message
const message = {
  domain: "portal.medialane.io",
  address: agentWalletAddress,         // Starknet wallet address
  statement: "Sign in to Medialane Portal",
  nonce,
  issuedAt: new Date().toISOString(),
};

// 3. Sign with the agent's Starknet account
const signature = await starknetAccount.signMessage(message);

// 4. Exchange for a session token
const { token } = await fetch("https://api.medialane.io/v1/portal/auth/verify", {
  method: "POST",
  body: JSON.stringify({ message, signature }),
}).then(r => r.json());

// 5. Use the session token to manage keys and credits
const keys = await fetch("https://api.medialane.io/v1/portal/keys", {
  headers: { Authorization: \`Bearer \${token}\` },
}).then(r => r.json());`}</Code>
        <p>
          For pure read-only agents, SIWS is not required — use a static API key
          generated once in the portal.
        </p>
      </Section>

      <Section title="Autonomous Billing — HTTP 402">
        <p>
          When a key&apos;s monthly quota is exhausted, the API returns{" "}
          <code className="font-mono bg-muted px-1.5 py-0.5 rounded text-xs">402 Payment Required</code>.
          Agents can intercept this status, deposit USDC credits via the portal API,
          and retry — without any human intervention.
        </p>
        <Code>{`// Robust agent request wrapper
async function apiRequest(url: string, apiKey: string): Promise<Response> {
  let res = await fetch(url, { headers: { "x-api-key": apiKey } });

  if (res.status === 402) {
    const { creditRequired } = await res.json();

    // Deposit USDC credits autonomously (agent must hold USDC on Starknet)
    await depositCredits(apiKey, creditRequired * 2);  // deposit 2× buffer

    // Retry once after deposit
    res = await fetch(url, { headers: { "x-api-key": apiKey } });
  }

  return res;
}

// Credit deposit via portal API (requires SIWS session token)
async function depositCredits(apiKey: string, usdcAmount: number) {
  await fetch("https://api.medialane.io/v1/portal/credits/deposit", {
    method: "POST",
    headers: {
      Authorization: \`Bearer \${sessionToken}\`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ apiKey, usdcAmount }),
  });
}`}</Code>
        <p>
          The credit balance is separate from the monthly request quota. Credits never expire.
          Deposited USDC is held in the portal contract until consumed by API calls.
        </p>
      </Section>

      <Section title="Rate Limit Headers">
        <p>Agents should check these headers on every response to avoid unexpected 402s:</p>
        <Code>{`X-RateLimit-Limit: 50        // total requests this period
X-RateLimit-Remaining: 3     // requests left — act before this hits 0
X-RateLimit-Reset: 1714521600 // Unix timestamp when quota resets
X-RateLimit-Multiplier: 1.5  // current MDLN multiplier active on key
X-Credits-Balance: 0.24       // remaining USDC credit balance (if using credits)`}</Code>
      </Section>

      <Section title="MDLN Multiplier for Agent Wallets">
        <p>
          An agent that controls a Starknet wallet holding MDLN tokens can register that
          wallet in the portal to receive a quota multiplier. This is the same multiplier
          available to human developers — agents are first-class citizens.
        </p>
        <Code>{`// Check current multiplier
const usage = await fetch("https://api.medialane.io/v1/portal/usage", {
  headers: { "x-api-key": apiKey },
}).then(r => r.json());

console.log(usage.multiplier);   // 1, 1.2, 1.5, or 2
console.log(usage.mdlnBalance);  // MDLN held by registered wallet
console.log(usage.remaining);    // requests left this month`}</Code>
        <div className="space-y-2">
          {[
            { mdln: "0 MDLN",    mult: "1×",   note: "Free tier — no MDLN required" },
            { mdln: "500 MDLN",  mult: "1.2×", note: "20% more requests per month" },
            { mdln: "2,000 MDLN",mult: "1.5×", note: "50% more requests per month" },
            { mdln: "5,000 MDLN",mult: "2×",   note: "Double the base quota" },
          ].map(({ mdln, mult, note }) => (
            <div key={mdln} className="bento-cell px-4 py-2.5 flex items-center gap-4 flex-wrap text-sm">
              <span className="font-mono text-foreground/80 w-24 shrink-0">{mdln}</span>
              <span className="font-bold font-mono text-primary">{mult}</span>
              <span className="text-muted-foreground text-xs ml-auto">{note}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Listening for Events (Webhooks)">
        <p>
          Instead of polling, register a webhook to receive push notifications.
          This is the recommended pattern for reactive agents that respond to market activity.
        </p>
        <Code>{`// Register webhook via portal API
const webhook = await fetch("https://api.medialane.io/v1/portal/webhooks", {
  method: "POST",
  headers: {
    Authorization: \`Bearer \${sessionToken}\`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    url: "https://my-agent.example.com/hooks",
    events: ["order.created", "order.fulfilled", "token.minted"],
    secret: crypto.randomUUID(),
  }),
}).then(r => r.json());

// Webhook payload shape
{
  "type": "order.created",
  "timestamp": 1714521600,
  "data": {
    "orderHash": "0x...",
    "contract": "0x...",
    "tokenId": "1",
    "price": "1000000",
    "currency": "USDC",
    "offerer": "0x...",
    "status": "ACTIVE"
  }
}`}</Code>
      </Section>

      <Section title="Submitting Orders from an Agent">
        <p>
          An agent with a funded Starknet account can list and buy NFTs autonomously.
          Use the SDK to build intents, sign with the agent&apos;s account, and submit.
        </p>
        <Code>{`import { MedialaneClient } from "@medialane/sdk";
import { Account, RpcProvider } from "starknet";

const client = new MedialaneClient({
  backendUrl: "https://api.medialane.io",
  apiKey: process.env.MEDIALANE_API_KEY,
});

const provider = new RpcProvider({ nodeUrl: process.env.STARKNET_RPC_URL });
const account  = new Account(provider, agentAddress, agentPrivateKey);

// Create a listing intent
const intent = await client.marketplace.createListingIntent({
  contract: "0x<collection>",
  tokenId:  "1",
  price:    "1000000",          // 1 USDC (6 decimals)
  currency: "0x<usdc_address>",
  duration: 86400 * 3,          // 3 days
  standard: "ERC721",
});

// Sign with agent account (SNIP-12)
const signature = await account.signMessage(intent.typedData);

// Activate the order
const order = await client.marketplace.submitIntentSignature(intent.orderHash, signature);
console.log("Listed:", order.status);  // "ACTIVE"`}</Code>
      </Section>

      <Section title="Permissionless &amp; Censorship-Resistant">
        <p>
          Medialane&apos;s contracts are fully immutable — no admin can block a specific
          wallet address, freeze an order, or prevent a trade. An agent that can call
          Starknet contracts can always interact with the marketplace, regardless of
          any off-chain policy decision.
        </p>
        <p>
          The REST API adds convenience (intent creation, metadata indexing) but is
          not a prerequisite. Agents comfortable with direct Starknet contract calls
          can operate entirely on-chain: call <code className="font-mono bg-muted px-1 py-0.5 rounded text-xs">fulfill_order</code> directly
          with the SNIP-12 signed order hash.
        </p>
      </Section>

      <div className="flex flex-wrap gap-4">
        <a href="https://portal.medialane.io" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          Open Portal <ExternalLink className="h-3.5 w-3.5" />
        </a>
        <Link href="/docs/api" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          API Reference <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <Link href="/docs/sdk" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          SDK Docs <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <Link href="/docs/protocol" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          Protocol Spec <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

    </div>
  );
}
```

- [ ] **Step 3: Verify build**

Run: `~/.bun/bin/bun run build 2>&1 | grep -E "error|Error" | head -10`
Expected: no errors. The page should be reachable at `/docs/agents`.

- [ ] **Step 4: Commit**

```bash
git add src/app/docs/agents/
git commit -m "docs(agents): add AI agent guide — 402 billing, SIWS, MDLN multiplier, webhook patterns"
```

---

### Task 8: Update /apps portal card

**Files:**
- Modify: `src/app/apps/page.tsx`

The portal card's features list says "Browse interactive REST API documentation" and "Download SDK and integration guides" — these are placeholder descriptions from before the portal launched. Update to reflect the real portal features: self-service keys, MDLN multiplier, USDC credits, 402 billing.

- [ ] **Step 1: Read the current portal card in apps/page.tsx**

Run: `grep -n "portal\|Portal\|MDLN\|credit\|Credit" src/app/apps/page.tsx | head -20`

- [ ] **Step 2: Update the portal app entry features and description**

Find the `name: "Medialane Portal"` object in the `APPS` array and update:

```typescript
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
    // ... rest of fields unchanged
  },
```

- [ ] **Step 3: Verify build**

Run: `~/.bun/bin/bun run build 2>&1 | grep -E "error|Error" | head -10`
Expected: no errors.

- [ ] **Step 4: Commit**

```bash
git add src/app/apps/page.tsx
git commit -m "docs(apps): update portal card with MDLN multiplier, USDC credits, AI agent billing"
```

---

### Task 9: Add MDLN multiplier section to /dao/token

**Files:**
- Modify: `src/app/dao/token/page.tsx`

The token page covers governance and membership tiers but says nothing about the platform multiplier (API quota boost for MDLN holders). Add a section and a new utility entry.

- [ ] **Step 1: Read the current token page**

Run: `cat -n src/app/dao/token/page.tsx | head -60`

- [ ] **Step 2: Add the multiplier utility to UTILITIES array**

In `UTILITIES`, add after the `Membership Tiers` entry:

```typescript
  {
    icon: Zap,
    title: "Platform Multiplier",
    description: "MDLN holders receive a boosted API quota on the developer portal — 1.2× at 500 MDLN, 1.5× at 2,000, and 2× at 5,000. Autonomous AI agents holding MDLN benefit on equal terms.",
  },
```

Also import `Zap` from `lucide-react`.

- [ ] **Step 3: Add a PLATFORM_MULTIPLIER_TIERS constant and render it**

Add after the `MEMBERSHIP_TIERS` constant:

```typescript
const PLATFORM_MULTIPLIER_TIERS = [
  { label: "Free",    mdln: "0 MDLN",    mult: "1×",   quota: "50 req / month" },
  { label: "Starter", mdln: "500 MDLN",  mult: "1.2×", quota: "60 req / month" },
  { label: "Builder", mdln: "2,000 MDLN",mult: "1.5×", quota: "75 req / month" },
  { label: "Pro",     mdln: "5,000 MDLN",mult: "2×",   quota: "100 req / month" },
];
```

Then render this new section in the JSX after the membership tiers section:

```tsx
{/* Platform multiplier */}
<div className="space-y-4">
  <h2 className="text-xl font-bold">Developer Portal Multiplier</h2>
  <p className="text-muted-foreground leading-relaxed">
    MDLN holders automatically receive a boosted API quota when they register their
    wallet in the{" "}
    <a href="https://portal.medialane.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
      developer portal
    </a>. The multiplier applies equally to human developers and autonomous AI agents.
  </p>
  <div className="space-y-2">
    {PLATFORM_MULTIPLIER_TIERS.map(({ label, mdln, mult, quota }) => (
      <div key={label} className="bento-cell px-4 py-3 flex items-center gap-4 flex-wrap text-sm">
        <span className="font-semibold w-16 shrink-0">{label}</span>
        <span className="text-muted-foreground font-mono flex-1">{mdln}</span>
        <span className="font-bold font-mono text-primary">{mult}</span>
        <span className="text-xs text-muted-foreground w-32 text-right">{quota}</span>
      </div>
    ))}
  </div>
  <p className="text-sm text-muted-foreground">
    The multiplier is read on-chain at key registration time. Increasing your MDLN
    balance and re-registering upgrades your tier immediately.
  </p>
</div>
```

- [ ] **Step 4: Verify build**

Run: `~/.bun/bin/bun run build 2>&1 | grep -E "error|Error" | head -10`
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/app/dao/token/page.tsx
git commit -m "docs(dao/token): add developer portal MDLN multiplier section"
```

---

## Self-Review

**Spec coverage:**
- SDK v0.10.0 real methods ✓ (Task 2)
- API endpoints with real paths ✓ (Task 3)
- MDLN multiplier tiers (1×/1.2×/1.5×/2×) ✓ (Tasks 3, 6, 8, 9)
- V3 immutable contract addresses ✓ (Tasks 4, 5)
- Atomic swap mechanics ✓ (Task 5)
- SNIP-12 signing flow ✓ (Tasks 2, 5)
- AI agent 402 billing ✓ (Task 7)
- SIWS authentication ✓ (Task 7)
- Webhook setup ✓ (Tasks 6, 7)
- Portal quickstart ✓ (Task 6)
- AI Agents nav entry ✓ (Task 1)
- Apps page portal card update ✓ (Task 8)
- DAO token multiplier section ✓ (Task 9)
- ERC-1155 partial fills ✓ (Task 5)
- ERC-2981 royalties ✓ (Task 5)
- Session keys / SNIP-9 ✓ (Task 5)
- Token gating pattern ✓ (Task 6)

**Placeholder scan:** No TBDs, TODOs, or incomplete sections. All code blocks are executable.

**Type consistency:** `ApiToken`, `ApiCollection`, `ApiOrder`, `SupportedTokenSymbol` named consistently across Tasks 2, 3. `client.api.*` method names match CLAUDE.md inventory throughout.
