# Architecture Alignment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Align all medialane-docs pages with the architecture redesigned from first principles in `medialane-backend/docs/superpowers/architecture/`, adding 3 new pages, rewriting 5 misaligned pages, and updating 10 more.

**Architecture:** Next.js 15 App Router, TypeScript, Tailwind CSS, `@medialane/ui` design system. Each page is a standalone server component. No shared doc component library — helpers like `Section` and `Code` are defined inline per file.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS, Lucide icons, `bento-cell` / `gradient-text` / aurora CSS utilities from `@medialane/ui`.

---

## File Map

### Wave 1 — Foundation (new pages + nav + protocol rewrite)

| Action | File |
|---|---|
| Create | `src/app/docs/architecture/page.tsx` |
| Create | `src/app/learn/services/page.tsx` |
| Create | `src/app/learn/identity/page.tsx` |
| Rewrite | `src/app/docs/protocol/page.tsx` |
| Modify | `src/lib/docs-nav.ts` |
| Modify | `src/app/learn/page.tsx` |
| Modify | `src/app/sitemap.ts` |

### Wave 2 — Core rewrites

| Action | File |
|---|---|
| Rewrite | `src/app/about/page.tsx` |
| Rewrite | `src/app/learn/programmable-licensing/page.tsx` |
| Rewrite | `src/app/learn/marketplace/page.tsx` |
| Rewrite | `src/app/learn/remix/page.tsx` |

### Wave 3 — Targeted updates

| Action | File |
|---|---|
| Update | `src/app/docs/fees/page.tsx` |
| Update | `src/app/docs/sdk/page.tsx` |
| Update | `src/app/docs/developers/page.tsx` |
| Update | `src/app/docs/agents/page.tsx` |
| Update | `src/app/dao/governance/page.tsx` |
| Update | `src/app/dao/token/page.tsx` |
| Update | `src/app/learn/creator-launchpad/page.tsx` |
| Update | `src/app/learn/pop-protocol/page.tsx` |
| Update | `src/app/learn/collection-drop/page.tsx` |
| Update | `src/app/learn/integrity-web/page.tsx` |

---

## WAVE 1 — Foundation

---

### Task 1: Add Architecture to docs-nav and sitemap

**Files:**
- Modify: `src/lib/docs-nav.ts`
- Modify: `src/app/sitemap.ts`

- [ ] **Step 1: Add Architecture entry to docs-nav.ts**

Open `src/lib/docs-nav.ts`. Add `Layers` to the lucide-react import. Insert the Architecture entry as the first item in `DOCS_NAV` (before Protocol):

```typescript
import {
  BookOpen, Bot, Building2, Coins, Code2, FileCode2, History,
  Info, Landmark, Layers, LifeBuoy, Package, Shield, Terminal, Network,
} from "lucide-react";
```

Replace the `DOCS_NAV` array opening so Architecture is first:

```typescript
export const DOCS_NAV = [
  {
    href: "/docs/architecture",
    label: "Architecture",
    title: "Architecture",
    icon: Layers,
    description: "The four-layer authority model, six core primitives, the rebuild test, and the protocol vs. platform distinction.",
  },
  {
    href: "/docs/protocol",
    // ... rest unchanged
```

- [ ] **Step 2: Add new routes to sitemap.ts**

In `src/app/sitemap.ts`, add three entries in the appropriate sections:

In the `// ── Docs ──` section, add after the `/docs` line:
```typescript
{ url: `${BASE_URL}/docs/architecture`, changeFrequency: "monthly", priority: 0.8 },
```

In the `// ── Learn ──` section, add after the `/learn` line:
```typescript
{ url: `${BASE_URL}/learn/services`,  changeFrequency: "monthly", priority: 0.7 },
{ url: `${BASE_URL}/learn/identity`,  changeFrequency: "monthly", priority: 0.7 },
```

- [ ] **Step 3: Commit**

```bash
git add src/lib/docs-nav.ts src/app/sitemap.ts
git commit -m "feat(nav): add Architecture to docs nav and sitemap"
```

---

### Task 2: Create /docs/architecture

**Files:**
- Create: `src/app/docs/architecture/page.tsx`

- [ ] **Step 1: Create the directory and file**

```bash
mkdir -p src/app/docs/architecture
```

Write `src/app/docs/architecture/page.tsx`:

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Layers, Database, Package, Monitor, Lock, Box, FileText, ShoppingCart, Zap, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Architecture | Medialane Docs",
  description: "The Medialane four-layer authority model — Chain, Indexer, SDK, and Apps. Six core primitives, the rebuild test, and the protocol vs. platform distinction.",
  openGraph: {
    title: "Architecture | Medialane Docs",
    description: "The Medialane four-layer authority model — Chain, Indexer, SDK, and Apps. Six core primitives, the rebuild test, and the protocol vs. platform distinction.",
    url: "https://docs.medialane.io/docs/architecture",
  },
  twitter: {
    title: "Architecture | Medialane Docs",
    description: "The Medialane four-layer authority model — Chain, Indexer, SDK, and Apps. Six core primitives, the rebuild test, and the protocol vs. platform distinction.",
  },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

const LAYERS = [
  {
    num: "01",
    label: "Chain",
    icon: Lock,
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
    border: "border-brand-purple/20",
    role: "Contracts, state, immutable rules, on-chain events",
    detail: "Deployed Cairo smart contracts on Starknet mainnet. Once deployed, no admin can change the rules. Every state change emits an event. This layer is the only truth — everything above it is a view.",
  },
  {
    num: "02",
    label: "Indexer",
    icon: Database,
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/20",
    role: "Event reducer — reads chain, writes PostgreSQL cache",
    detail: "The indexer is a deterministic function: it reads on-chain events and produces a queryable cache. Drop the database and it rebuilds from scratch. It adds nothing — it only reduces what the chain already recorded.",
  },
  {
    num: "03",
    label: "SDK",
    icon: Package,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    border: "border-brand-orange/20",
    role: "Typed lens over the indexer + service registry",
    detail: "The @medialane/sdk package is a typed interface to the API. In Year 1, the SDK hosts the service registry — the canonical map from service IDs to capability sets. Year 2+ moves this on-chain.",
  },
  {
    num: "04",
    label: "Apps",
    icon: Monitor,
    color: "text-brand-rose",
    bg: "bg-brand-rose/10",
    border: "border-brand-rose/20",
    role: "Views, UX, platform-layer fees, curation, house rules",
    detail: "medialane.io, the developer portal, and any third-party app built on the SDK. Apps can add house rules and platform-layer fees. They cannot override what the contracts say.",
  },
];

const PRIMITIVES = [
  {
    label: "Asset",
    icon: Box,
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
    def: "A digital good on chain. Local identity: (chain, contract, tokenId). Cross-chain identity via IP-ID is a Year 2+ feature.",
  },
  {
    label: "Account",
    icon: Star,
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    def: "The actor. Three facets: Wallet (signs), Account (on-chain reputation), Profile (editable public face). See /learn/identity.",
  },
  {
    label: "Service",
    icon: Package,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    def: "A registered behavior set — what actions a creator can take on an asset. Capabilities: list, buy, mint, transfer, remix, and more. See /learn/services.",
  },
  {
    label: "License",
    icon: FileText,
    color: "text-brand-rose",
    bg: "bg-brand-rose/10",
    def: "Programmable IP rights encoded in token metadata as attributes. Soft-enforced by default. Immutable at mint.",
  },
  {
    label: "Order",
    icon: ShoppingCart,
    color: "text-primary",
    bg: "bg-primary/10",
    def: "A signed proposal — one offer, one consideration. The orderHash is permanent on-chain record. Settlement is atomic.",
  },
  {
    label: "Event",
    icon: Zap,
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
    def: "An on-chain occurrence emitted by a contract. The indexer is an event reducer — a deterministic function of the event log.",
  },
];

export default function DocsArchitecturePage() {
  return (
    <div className="space-y-10">

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Layers className="h-5 w-5 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">Architecture</span>
        </div>
        <h2 className="text-2xl font-bold">Architecture</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Medialane is built on a four-layer authority model. Each layer has one job.
          Authority flows downward only — apps cannot override the SDK, the SDK cannot
          override the indexer, and nothing overrides the contracts.
        </p>
      </div>

      <div className="space-y-8">

        <Section title="The Four Layers">
          <div className="space-y-3">
            {LAYERS.map(({ num, label, icon: Icon, color, bg, border, role, detail }) => (
              <div key={num} className={`bento-cell border ${border} p-5 flex gap-4`}>
                <div className={`h-10 w-10 rounded-xl ${bg} flex items-center justify-center shrink-0`}>
                  <Icon className={`h-5 w-5 ${color}`} />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-xs font-mono ${color}`}>{num}</span>
                    <p className="font-bold text-foreground">{label}</p>
                    <span className="text-xs text-muted-foreground">— {role}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm">
            Authority flows downward only. An app cannot change what a contract does. An SDK
            cannot invent data the indexer did not produce. The chain is ground truth;
            everything above is a view.
          </p>
        </Section>

        <Section title="The Rebuild Test">
          <div className="bento-cell border border-brand-orange/20 bg-brand-orange/5 p-5 space-y-3">
            <p className="font-bold text-foreground">Drop the database. Can everything reconstruct?</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              If a piece of state can be reconstructed by replaying on-chain events and fetching
              off-chain metadata, it is protocol state. If it cannot — profiles, slugs, API keys,
              experience points — it is platform state: honestly labeled as off-chain enrichment,
              never confused with protocol guarantees.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The rebuild test is the architectural decision rule for every new piece of state
              added to the system. Anything that fails it belongs to the platform layer, not
              the protocol.
            </p>
          </div>
        </Section>

        <Section title="Six Core Primitives">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PRIMITIVES.map(({ label, icon: Icon, color, bg, def }) => (
              <div key={label} className="bento-cell p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <div className={`h-7 w-7 rounded-lg ${bg} flex items-center justify-center`}>
                    <Icon className={`h-4 w-4 ${color}`} />
                  </div>
                  <p className={`font-bold text-sm ${color}`}>{label}</p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{def}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Protocol vs. Platform">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bento-cell border border-brand-purple/20 p-5 space-y-3">
              <p className="font-bold text-foreground">Protocol</p>
              <ul className="space-y-1.5 text-sm">
                {[
                  "Immutable Cairo contracts on Starknet",
                  "Permissionless — no whitelist to mint or trade",
                  "Zero fees at contract level",
                  "Events as the only source of truth",
                  "Governed by math, not policy",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-brand-purple mt-0.5 shrink-0">✓</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bento-cell border border-brand-rose/20 p-5 space-y-3">
              <p className="font-bold text-foreground">Platform</p>
              <ul className="space-y-1.5 text-sm">
                {[
                  "medialane.io and partner apps",
                  "Service registry curation (Year 1 SDK; Year 2+ on-chain)",
                  "Settlement fee schedule (DAO-controlled)",
                  "UI curation and house rules",
                  "Profiles, slugs, API keys (off-chain enrichment)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-brand-rose mt-0.5 shrink-0">↳</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-sm">
            This distinction is load-bearing. The DAO can update the fee schedule and
            service registry without touching contracts. Protocol actions — minting,
            listing, transferring — are always available regardless of platform decisions.
          </p>
          <p className="text-sm">
            See{" "}
            <Link href="/docs/protocol" className="text-primary hover:underline">Protocol Specification</Link>
            {" "}for contract addresses and the event model, and{" "}
            <Link href="/learn/services" className="text-primary hover:underline">Services</Link>
            {" "}for how the service registry works.
          </p>
        </Section>

      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/docs/architecture/page.tsx
git commit -m "feat(docs): add Architecture page — four layers, rebuild test, six primitives"
```

---

### Task 3: Create /learn/services

**Files:**
- Create: `src/app/learn/services/page.tsx`

- [ ] **Step 1: Create the directory and file**

```bash
mkdir -p src/app/learn/services
```

Write `src/app/learn/services/page.tsx`:

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Package, Image, Music, Award, Clock, Store } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Learn | Medialane",
  description: "How Medialane services work — the registry that defines what creators can do, canonical service IDs, and the full capability set.",
  openGraph: {
    title: "Services | Learn | Medialane",
    description: "How Medialane services work — the registry that defines what creators can do, canonical service IDs, and the full capability set.",
    url: "https://docs.medialane.io/learn/services",
  },
  twitter: {
    title: "Services | Learn | Medialane",
    description: "How Medialane services work — the registry that defines what creators can do, canonical service IDs, and the full capability set.",
  },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

const SERVICES = [
  {
    id: "mip-erc721",
    label: "IP Collection (ERC-721)",
    icon: Image,
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
    border: "border-brand-purple/20",
    desc: "A standard single-edition IP collection. Each token is unique. The default service for art, photography, writing, and one-of-a-kind creative work.",
    caps: ["mint", "list", "buy", "make_offer", "transfer", "remix", "license"],
  },
  {
    id: "mip-erc1155",
    label: "Multi-Edition Collection (ERC-1155)",
    icon: Music,
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/20",
    desc: "Multiple collectors can own the same piece. Ideal for music tracks, art prints, and any work where shared ownership makes sense.",
    caps: ["mint", "list", "buy", "make_offer", "transfer", "remix", "license"],
  },
  {
    id: "pop-protocol",
    label: "POP Protocol",
    icon: Award,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    border: "border-brand-orange/20",
    desc: "Proof-of-participation credentials. Soulbound tokens issued to people who attended, contributed, or reached a milestone. Non-transferable by design.",
    caps: ["mint", "claim", "airdrop"],
  },
  {
    id: "drop-collection",
    label: "Collection Drop",
    icon: Clock,
    color: "text-brand-rose",
    bg: "bg-brand-rose/10",
    border: "border-brand-rose/20",
    desc: "Timed drops with supply caps and optional allowlists. Collectors mint directly from the drop contract during the mint window.",
    caps: ["mint", "claim"],
  },
  {
    id: "medialane-marketplace-erc721",
    label: "Marketplace (ERC-721)",
    icon: Store,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    desc: "The ERC-721 trading venue. Supports fixed-price listings, offers, and atomic swap settlement. A service with marketplace capabilities.",
    caps: ["list", "buy", "make_offer", "cancel"],
  },
  {
    id: "medialane-marketplace-erc1155",
    label: "Marketplace (ERC-1155)",
    icon: Store,
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/20",
    desc: "The ERC-1155 trading venue. Supports partial fills — collectors can buy any quantity of a multi-edition listing.",
    caps: ["list", "buy", "make_offer", "cancel"],
  },
];

const ALL_CAPS = [
  { cap: "list", desc: "Create a fixed-price listing" },
  { cap: "buy", desc: "Purchase a listed asset" },
  { cap: "make_offer", desc: "Submit a bid below asking price" },
  { cap: "cancel", desc: "Revoke a listing or offer" },
  { cap: "mint", desc: "Create a new token" },
  { cap: "transfer", desc: "Move a token to another wallet" },
  { cap: "remix", desc: "Mint a licensed derivative" },
  { cap: "license", desc: "Apply or enforce license terms" },
  { cap: "claim", desc: "Collect an airdrop or credential" },
  { cap: "airdrop", desc: "Distribute tokens to a list of wallets" },
  { cap: "burn", desc: "Destroy a token permanently" },
  { cap: "subscribe", desc: "Activate a time-limited access grant" },
];

export default function LearnServicesPage() {
  return (
    <div className="space-y-10">

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Services</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Every action on Medialane — minting, trading, dropping, issuing credentials — is
          powered by a registered service. Services are how the platform knows what creators
          can do and which contracts handle it.
        </p>
      </div>

      <div className="space-y-8">

        <Section title="What Is a Service?">
          <p>
            A service is a registry entry that describes a set of actions and the contracts
            that power them. When you deploy a collection, you choose a service. When the
            marketplace handles a listing, it operates as a service with marketplace capabilities.
          </p>
          <p>
            This design means adding a new capability to Medialane — a new collection type,
            a new marketplace, a new credential system — is a registry update, not a contract
            rewrite. Existing integrations keep working without changes.
          </p>
          <div className="bento-cell border border-brand-blue/20 bg-brand-blue/5 p-4 space-y-1">
            <p className="text-sm font-semibold text-foreground">The service registry</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              In Year 1, the registry lives in the{" "}
              <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">@medialane/sdk</code>{" "}
              package. Year 2+ moves it on-chain, making service registration permissionless —
              anyone can deploy a new service without Medialane involvement.
            </p>
          </div>
        </Section>

        <Section title="Canonical Services">
          <div className="space-y-3">
            {SERVICES.map(({ id, label, icon: Icon, color, bg, border, desc, caps }) => (
              <div key={id} className={`bento-cell border ${border} p-5 space-y-3`}>
                <div className="flex items-start gap-3">
                  <div className={`h-9 w-9 rounded-xl ${bg} flex items-center justify-center shrink-0`}>
                    <Icon className={`h-4 w-4 ${color}`} />
                  </div>
                  <div className="space-y-0.5">
                    <p className="font-bold text-foreground text-sm">{label}</p>
                    <p className={`font-mono text-xs ${color}`}>{id}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {caps.map((cap) => (
                    <span key={cap} className={`text-xs px-2 py-0.5 rounded-full ${bg} ${color} font-mono border ${border}`}>
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="The Capability Set">
          <p>
            Every service declares a bounded set of capabilities — the actions it enables.
            The set is fixed; services pick from it. This prevents free-form extension
            while keeping the system open to new services.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {ALL_CAPS.map(({ cap, desc }) => (
              <div key={cap} className="bento-cell px-4 py-3 flex items-center gap-3">
                <code className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded shrink-0">{cap}</code>
                <span className="text-xs text-muted-foreground">{desc}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Why Service IDs Never Change">
          <p>
            Service IDs are stable across contract upgrades. If the marketplace contract
            is redeployed, the service ID stays{" "}
            <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">medialane-marketplace-erc721</code>.
            There are no <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">-v3</code> suffixes.
          </p>
          <p>
            This means your integration — whether you are a developer reading the SDK or
            an AI agent querying the API — keeps working after upgrades. The contract
            address changes; the service ID does not.
          </p>
          <p className="text-sm">
            For developers: see{" "}
            <Link href="/docs/sdk" className="text-primary hover:underline">SDK documentation</Link>
            {" "}for <code className="font-mono text-xs">getService()</code> usage, and{" "}
            <Link href="/docs/architecture" className="text-primary hover:underline">Architecture</Link>
            {" "}for how the registry fits into the four-layer model.
          </p>
        </Section>

      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/learn/services/page.tsx
git commit -m "feat(learn): add Services page — registry, canonical service IDs, capability set"
```

---

### Task 4: Create /learn/identity

**Files:**
- Create: `src/app/learn/identity/page.tsx`

- [ ] **Step 1: Create the directory and file**

```bash
mkdir -p src/app/learn/identity
```

Write `src/app/learn/identity/page.tsx`:

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Key, Star, User, Shield, Eye, Bot } from "lucide-react";

export const metadata: Metadata = {
  title: "Identity | Learn | Medialane",
  description: "How identity works on Medialane — Wallet, Account, and Profile, roles, authentication vs. authorization, and AI agent accounts.",
  openGraph: {
    title: "Identity | Learn | Medialane",
    description: "How identity works on Medialane — Wallet, Account, and Profile, roles, authentication vs. authorization, and AI agent accounts.",
    url: "https://docs.medialane.io/learn/identity",
  },
  twitter: {
    title: "Identity | Learn | Medialane",
    description: "How identity works on Medialane — Wallet, Account, and Profile, roles, authentication vs. authorization, and AI agent accounts.",
  },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

const FACETS = [
  {
    label: "Wallet",
    icon: Key,
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
    border: "border-brand-purple/20",
    def: "The cryptographic key. The only thing that signs transactions. Your wallet is your proof of identity on-chain — no username, no password, no account recovery through Medialane.",
    note: "Self-custody: your keys, your assets. Medialane cannot recover a lost wallet.",
  },
  {
    label: "Account",
    icon: Star,
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/20",
    def: "Your on-chain history. Work you have created, assets you have collected, credentials you have earned. In Year 1, your primary wallet address is your account. Year 2+ introduces AccountID — an on-chain contract that aggregates multiple wallets under one identity.",
    note: "Account state is protocol state — it passes the rebuild test. It is your permanent, verifiable on-chain record.",
  },
  {
    label: "Profile",
    icon: User,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    border: "border-brand-orange/20",
    def: "Your public face. Name, bio, avatar, social handles. This is off-chain enrichment — editable, optional, separate from your protocol identity. Losing your profile loses nothing protocol-critical.",
    note: "Profiles are platform state, not protocol state. They make you discoverable. They do not define what you own.",
  },
];

const ROLES = [
  { role: "Creator", desc: "Has deployed at least one collection or minted IP assets. Unlocks creation-focused tools in the app UI." },
  { role: "Collector", desc: "Holds IP assets in their wallet. The default role for anyone purchasing or receiving creative work." },
  { role: "Organization", desc: "A multi-wallet entity — a brand, label, or DAO operating on the platform. Managed through the portal." },
  { role: "Agent", desc: "An AI or automated system operating via the API. Identical protocol capabilities to human accounts." },
];

export default function LearnIdentityPage() {
  return (
    <div className="space-y-10">

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Identity</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Identity on Medialane is three separate things: a wallet that signs, an account
          that holds your on-chain history, and a profile that is your public face.
          Understanding the difference matters.
        </p>
      </div>

      <div className="space-y-8">

        <Section title="Three Separate Things">
          <div className="space-y-3">
            {FACETS.map(({ label, icon: Icon, color, bg, border, def, note }) => (
              <div key={label} className={`bento-cell border ${border} p-5 space-y-3`}>
                <div className="flex items-center gap-3">
                  <div className={`h-9 w-9 rounded-xl ${bg} flex items-center justify-center shrink-0`}>
                    <Icon className={`h-5 w-5 ${color}`} />
                  </div>
                  <p className={`font-bold ${color}`}>{label}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{def}</p>
                <div className="border-t border-border/40 pt-2">
                  <p className="text-xs text-muted-foreground italic">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Roles">
          <p>
            Roles describe what you do on Medialane — not what the protocol allows.
            Medialane is permissionless: anyone with a wallet can mint, list, or transfer.
            Roles gate what the UI surfaces to you, not what the contracts permit.
          </p>
          <div className="space-y-2">
            {ROLES.map(({ role, desc }) => (
              <div key={role} className="bento-cell px-4 py-3 flex items-start gap-3">
                <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded shrink-0 mt-0.5">
                  {role}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Authentication vs. Authorization">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bento-cell border border-brand-blue/20 p-5 space-y-2">
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4 text-brand-blue" />
                <p className="font-bold text-foreground text-sm">Authentication</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Proving who you are. On Medialane, authentication is SIWS — Sign In With
                Starknet. You sign a message with your wallet. The API verifies the signature.
                No password, no email, no third-party identity provider.
              </p>
            </div>
            <div className="bento-cell border border-brand-purple/20 p-5 space-y-2">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-brand-purple" />
                <p className="font-bold text-foreground text-sm">Authorization</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Proving what you can do. Authorization is determined by on-chain state —
                what assets you hold, what contracts record about your wallet. Medialane does
                not grant permissions. The contract is the authority.
              </p>
            </div>
          </div>
          <p className="text-sm">
            These are separate concerns. Authentication identifies you. Authorization
            checks the chain. Medialane can verify who you are without controlling
            what you can do.
          </p>
        </Section>

        <Section title="AI Agents">
          <div className="bento-cell border border-brand-rose/20 bg-brand-rose/5 p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-brand-rose" />
              <p className="font-bold text-foreground">First-class accounts</p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              An AI agent&apos;s wallet is a first-class Medialane account. The contracts make
              no distinction between a human signing a transaction and an agent doing the same.
              Same API surface. Same fee model. Same protocol capabilities.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Agents authenticate with SIWS and use the same REST API as human users.
              The developer portal adds HTTP 402 credit billing for agent-to-agent automation.
              See{" "}
              <Link href="/docs/agents" className="text-primary hover:underline">AI Agents documentation</Link>.
            </p>
          </div>
        </Section>

      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/learn/identity/page.tsx
git commit -m "feat(learn): add Identity page — wallet/account/profile model, roles, auth vs authz"
```

---

### Task 5: Rewrite /docs/protocol

**Files:**
- Rewrite: `src/app/docs/protocol/page.tsx`

- [ ] **Step 1: Write the new protocol page**

Replace the entire content of `src/app/docs/protocol/page.tsx`:

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Network, Database, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Protocol | Medialane Docs",
  description: "Technical specification of the Medialane onchain protocol — contracts, event model, order lifecycle, service registry, and indexer design.",
  openGraph: {
    title: "Protocol | Medialane Docs",
    description: "Technical specification of the Medialane onchain protocol — contracts, event model, order lifecycle, service registry, and indexer design.",
    url: "https://docs.medialane.io/docs/protocol",
  },
  twitter: {
    title: "Protocol | Medialane Docs",
    description: "Technical specification of the Medialane onchain protocol — contracts, event model, order lifecycle, service registry, and indexer design.",
  },
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

const CONTRACTS = [
  { name: "Marketplace v3 (ERC-721)",    address: "0x004387e58d469f19332dd5d20846b10339ddc49ef208025ec7d5bef294a8daf3" },
  { name: "Marketplace v3 (ERC-1155)",   address: "0x035836932ba1d219e00b8e42cd9a433fb2b211a08edcaa8bae40232f335f777d" },
  { name: "NFTComments",                 address: "0x024f97eb5abe659fb650bf162b5fc16501f8f3863a7369901ce6099462e62799" },
  { name: "Collection Registry",         address: "0x05c49ee5d3208a2c2e150fdd0c247d1195ed9ab54fa2d5dea7a633f39e4b205b" },
  { name: "ERC-1155 Collection Factory", address: "0x006b2dc7ca7c4f466bb4575ba043d934310f052074f849caf853a86bcb819fd6" },
  { name: "Collection Drop Factory",     address: "0x03587f42e29daee1b193f6cf83bf8627908ed6632d0d83fcb26225c50547d800" },
  { name: "POP Protocol Factory",        address: "0x00b32c34b427d8f346b5843ada6a37bd3368d879fc752cd52b68a87287f60111" },
];

const EVENTS = [
  { name: "Transfer (ERC-721)", desc: "Single-token ownership change. Emitted on mint, sale, and manual transfer." },
  { name: "TransferSingle (ERC-1155)", desc: "Single-edition transfer with from, to, id, and value. Used for ERC-1155 balance tracking." },
  { name: "TransferBatch (ERC-1155)", desc: "Batch ERC-1155 transfer — multiple token IDs and values in one event." },
  { name: "OrderCreated", desc: "New listing or offer activated on the marketplace contract. Contains orderHash, offerer, offer, and consideration." },
  { name: "OrderFulfilled", desc: "Listing purchased or offer accepted. The orderHash is permanently fulfilled — no further fills possible." },
  { name: "OrderCancelled", desc: "Order revoked by the offerer. The orderHash is permanently invalidated." },
  { name: "CollectionDeployed", desc: "Emitted by factory contracts when a new collection, drop, or POP campaign is deployed." },
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
          Medialane runs on immutable Starknet mainnet contracts. This document covers
          deployed addresses, the event model, order lifecycle, service registry, and
          indexer design. For the architectural foundation, see{" "}
          <Link href="/docs/architecture" className="text-primary hover:underline">Architecture</Link>.
        </p>
      </div>

      <div className="space-y-8">

        <Section title="Deployed Contracts (Starknet Mainnet)">
          <div className="space-y-2">
            {CONTRACTS.map(({ name, address }) => (
              <div key={name} className="bento-cell px-4 py-3 space-y-1">
                <p className="text-sm font-semibold text-foreground">{name}</p>
                <p className="font-mono text-xs text-primary/70 break-all">{address}</p>
              </div>
            ))}
          </div>
          <p className="text-sm">
            These contracts have no admin key and no upgrade path. Once deployed,
            the rules are fixed. Canonical addresses are also published in the{" "}
            <Link href="/docs/contracts" className="text-primary hover:underline">Contracts</Link> reference.
          </p>
        </Section>

        <Section title="Event Model">
          <p>
            On-chain events are the source of truth. The indexer is a deterministic event
            reducer — a function that reads the event log and produces a queryable cache.
            Every state change in the protocol is expressed as an event; the database
            is a reduction of those events, rebuildable at any time.
          </p>
          <div className="space-y-2">
            {EVENTS.map(({ name, desc }) => (
              <div key={name} className="bento-cell px-4 py-3 space-y-1">
                <p className="text-sm font-semibold text-foreground">{name}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Order Lifecycle">
          <p>
            An order is a signed proposal: one offer item and one consideration item.
            Signing uses SNIP-12 typed data — the same standard as Starknet wallet signatures.
            The <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">orderHash</code> is
            computed at creation and is the permanent on-chain identifier.
          </p>
          <Code>{`Order states
──────────────────────────────────────────────
ACTIVE       — signed, visible, can be filled
FULFILLED    — payment + NFT swapped atomically
CANCELLED    — revoked by the offerer on-chain
EXPIRED      — past the order's expiry timestamp

Counter-offers
──────────────────────────────────────────────
A counter-offer is a new order with parentOrderHash
referencing the original. Both parties can cancel
at any time before acceptance.`}</Code>
          <p>
            Settlement is an atomic swap: the NFT transfer and the payment happen in the
            same Starknet transaction or both revert. The marketplace contract never takes
            custody of funds or assets.
          </p>
        </Section>

        <Section title="Service Registry">
          <p>
            Each asset has two identifying fields set at index time:
          </p>
          <Code>{`standard   — chain-detected token standard: ERC721 | ERC1155 | ERC20 | UNKNOWN
service    — string ID from the registry, e.g. "mip-erc721" or "pop-protocol"`}</Code>
          <p>
            The SDK exposes a <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">getService(serviceId)</code> function
            that returns the full capability set and contract configuration for a given service ID.
            Service IDs are stable across contract upgrades — no <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">-v3</code> suffix, ever.
          </p>
          <p>
            In Year 1, the registry lives in the SDK. Year 2+ moves it on-chain, making
            service registration permissionless. See{" "}
            <Link href="/learn/services" className="text-primary hover:underline">Services</Link> for
            the full registry and capability set.
          </p>
        </Section>

        <Section title="Indexer Design">
          <div className="space-y-3">
            <div className="bento-cell border border-brand-blue/20 p-5 space-y-2">
              <div className="flex items-center gap-2">
                <Database className="h-4 w-4 text-brand-blue" />
                <p className="font-bold text-foreground text-sm">Off-chain event reducer</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The indexer polls Starknet for new events, parses them with per-event handlers,
                and writes a normalized PostgreSQL cache. It holds no state of its own — everything
                it knows came from the chain.
              </p>
            </div>
            <div className="bento-cell border border-brand-orange/20 p-5 space-y-2">
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4 text-brand-orange" />
                <p className="font-bold text-foreground text-sm">Rebuild guarantee</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Drop the database. The indexer replays events from genesis and reconstructs
                the full state. This is not a disaster-recovery feature — it is the protocol
                invariant that proves the DB is a cache, not a source of truth.
              </p>
            </div>
          </div>
          <p className="text-sm">
            Platform state — profiles, slugs, API keys — cannot be reconstructed from events.
            It is honestly classified as off-chain enrichment and stored in a separate namespace.
            See <Link href="/docs/architecture" className="text-primary hover:underline">Architecture</Link> for
            the protocol vs. platform distinction.
          </p>
        </Section>

      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/docs/protocol/page.tsx
git commit -m "rewrite(docs): protocol page — event model, order lifecycle, service registry, indexer design"
```

---

### Task 6: Add Services and Identity cards to /learn

**Files:**
- Modify: `src/app/learn/page.tsx`

- [ ] **Step 1: Add two new topic cards to the TOPICS array**

Open `src/app/learn/page.tsx`. Find the `TOPICS` array. Add `Layers` and `Fingerprint` (or `User`) to the icon imports at the top.

In the lucide-react import line, add `Layers` and `Fingerprint`:
```typescript
import { BookOpen, Image, Rocket, Store, Globe, Shield, FileText, Award, Package, GitBranch, Layers, ArrowRight, Fingerprint } from "lucide-react";
```

Insert two new entries into the `TOPICS` array after the `creator-launchpad` entry:

```typescript
  {
    href: "/learn/services",
    icon: Layers,
    title: "Services",
    description: "How Medialane services work — the registry that defines what creators can do, canonical service IDs, and the capability set.",
  },
  {
    href: "/learn/identity",
    icon: Fingerprint,
    title: "Identity",
    description: "Wallets, accounts, and profiles — three separate things. Roles, authentication vs. authorization, and AI agent accounts.",
  },
```

- [ ] **Step 2: Verify the file compiles**

Run: `cd /Users/medialane/dev/medialane-docs && bun run build 2>&1 | tail -20`
Expected: `○ /learn` in the static routes list, zero TypeScript errors.

- [ ] **Step 3: Commit**

```bash
git add src/app/learn/page.tsx
git commit -m "feat(learn): add Services and Identity topic cards"
```

---

### Task 7: Wave 1 build verification

- [ ] **Step 1: Full build check**

Run: `cd /Users/medialane/dev/medialane-docs && bun run build 2>&1 | tail -30`

Expected output includes all of the following routes as `○` (static):
```
○ /docs/architecture
○ /learn/services
○ /learn/identity
○ /docs/protocol
```
And zero TypeScript errors.

- [ ] **Step 2: Restart dev server**

```bash
kill $(lsof -i :3000 -t) 2>/dev/null; rm -rf .next; bun dev &
```

---

## WAVE 2 — Core Rewrites

---

### Task 8: Rewrite /about

**Files:**
- Rewrite: `src/app/about/page.tsx`

- [ ] **Step 1: Write the new about page**

Replace the entire content of `src/app/about/page.tsx`:

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  Lock, Zap, Unlock, Bot, Users, BookOpen,
  Layers, Database, Package, Monitor,
  ExternalLink, Shield, Code2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About | Medialane",
  description: "Medialane is a creator capital markets platform — open, permissionless, and built on immutable smart contracts. Live on Starknet.",
  openGraph: {
    title: "About | Medialane",
    description: "Medialane is a creator capital markets platform — open, permissionless, and built on immutable smart contracts. Live on Starknet.",
    url: "https://docs.medialane.io/about",
  },
  twitter: {
    title: "About | Medialane",
    description: "Medialane is a creator capital markets platform — open, permissionless, and built on immutable smart contracts. Live on Starknet.",
  },
};

const WHAT_WE_BUILD = [
  {
    label: "Creator Launchpad",
    desc: "Deploy IP collections, mint assets, and bring creative work onchain. No coding required.",
    href: "/learn/creator-launchpad",
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
    border: "border-brand-purple/20",
  },
  {
    label: "Marketplace",
    desc: "List, buy, make offers, and trade IP assets. Atomic settlement — no escrow, no custody.",
    href: "/learn/marketplace",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/20",
  },
  {
    label: "Collection Drops",
    desc: "Timed drops with supply caps, allowlists, and gasless minting. Run on your schedule.",
    href: "/learn/collection-drop",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    border: "border-brand-orange/20",
  },
  {
    label: "POP Protocol",
    desc: "Issue proof-of-participation credentials. Soulbound, on-chain, permanent.",
    href: "/learn/pop-protocol",
    color: "text-brand-rose",
    bg: "bg-brand-rose/10",
    border: "border-brand-rose/20",
  },
];

const LAYERS = [
  {
    num: "01",
    label: "Chain",
    icon: Lock,
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
    desc: "Immutable Cairo contracts on Starknet. The only truth. No admin can change the rules.",
  },
  {
    num: "02",
    label: "Indexer",
    icon: Database,
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    desc: "Reads chain events, builds a queryable cache. Drop the database — it rebuilds from scratch.",
  },
  {
    num: "03",
    label: "SDK",
    icon: Package,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    desc: "Typed interface + service registry. Everything the app does, the SDK exposes.",
  },
  {
    num: "04",
    label: "Apps",
    icon: Monitor,
    color: "text-brand-rose",
    bg: "bg-brand-rose/10",
    desc: "medialane.io and partner apps. Views, UX, fees. Cannot override what the contracts say.",
  },
];

const DESIGN_CHOICES = [
  {
    icon: Lock,
    title: "No admin keys",
    desc: "The v3 contracts have no owner role, no upgrade path, and no emergency pause. Once deployed, no one can change the rules — including us.",
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
  },
  {
    icon: Zap,
    title: "No custody",
    desc: "Sales settle via atomic swap. The marketplace contract never holds buyer funds — the payment and the NFT transfer in the same transaction, or both revert.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
  },
  {
    icon: Unlock,
    title: "No approval required",
    desc: "Any wallet can mint, list, make offers, and deploy collections. There is no whitelist, no application process, and no content moderation at the contract level.",
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
  },
  {
    icon: Bot,
    title: "AI agents as first-class users",
    desc: "The contracts make no distinction between a human and an AI agent. Same API, same fees, same protocol capabilities. No special integration required.",
    color: "text-brand-rose",
    bg: "bg-brand-rose/10",
  },
  {
    icon: Users,
    title: "Community governance",
    desc: "The MDLN token gives holders voting rights on Snapshot. A 1% marketplace fee flows to the DAO treasury — holders vote annually on how it is allocated.",
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
  },
  {
    icon: BookOpen,
    title: "Everything is auditable",
    desc: "All contracts, the TypeScript SDK, and the indexer are open source. The deployed contract addresses are public. Anyone can verify what the code does before using it.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
  },
];

const STARKNET_REASONS = [
  { label: "Quantum-resistant", desc: "ZK-STARK proofs rely on hash functions, not elliptic curves. Safe from future quantum computing threats." },
  { label: "No trusted setup", desc: "No ceremony that could be compromised. The security is fully transparent and verifiable." },
  { label: "Account abstraction", desc: "Native AA means session keys, gasless UX, and smart wallet capabilities at the protocol level." },
  { label: "Verifiable computation", desc: "Every transaction is backed by a validity proof — math, not trust." },
];

export default function AboutPage() {
  return (
    <div className="space-y-16">

      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl bento-cell p-10 sm:p-14 space-y-5">
        <div className="aurora-purple w-[500px] h-[500px] -top-32 -right-20 animate-blob" style={{ position: "absolute" }} />
        <div className="aurora-blue w-[300px] h-[300px] bottom-0 left-0 animate-blob-slow" style={{ position: "absolute" }} />
        <div className="relative space-y-5">
          <span className="pill-badge">Creator Capital Markets</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
            <span className="gradient-text">Built for creators.</span>
            <br />Built to last.
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            Medialane is an open platform for minting, licensing, and trading intellectual
            property onchain. Permissionless participation. Immutable contracts. No admin keys.
            Built on Starknet — live today.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://medialane.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Start creating <ExternalLink className="h-4 w-4" />
            </a>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 border border-border bg-background/60 backdrop-blur px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-muted/40 transition-colors"
            >
              Developer docs →
            </Link>
          </div>
        </div>
      </div>

      {/* What We Build */}
      <div className="space-y-6">
        <div className="space-y-1">
          <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">What We Build</p>
          <h2 className="text-2xl font-black">Four services. One platform.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {WHAT_WE_BUILD.map(({ label, desc, href, color, bg, border }) => (
            <Link key={label} href={href} className={`bento-cell border ${border} p-6 space-y-2 hover:bg-muted/20 transition-colors group`}>
              <p className={`font-black text-base ${color}`}>{label}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              <p className={`text-xs font-semibold ${color} group-hover:underline`}>Learn more →</p>
            </Link>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="space-y-6">
        <div className="space-y-1">
          <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">How It Works</p>
          <h2 className="text-2xl font-black">Four layers. Authority flows downward.</h2>
          <p className="text-muted-foreground leading-relaxed">
            Contracts set immutable rules. The indexer reads the chain. The SDK gives builders
            a typed interface. Apps are where creators work. Nothing at the top overrides
            what the bottom says.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {LAYERS.map(({ num, label, icon: Icon, color, bg, desc }) => (
            <div key={num} className="bento-cell p-5 space-y-2">
              <div className="flex items-center gap-2">
                <div className={`h-8 w-8 rounded-lg ${bg} flex items-center justify-center`}>
                  <Icon className={`h-4 w-4 ${color}`} />
                </div>
                <span className={`text-xs font-mono ${color}`}>{num}</span>
                <p className={`font-bold text-sm ${color}`}>{label}</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          See the full <Link href="/docs/architecture" className="text-primary hover:underline">Architecture documentation</Link> for the rebuild test, six core primitives, and the protocol vs. platform distinction.
        </p>
      </div>

      {/* Why Starknet */}
      <div className="space-y-6">
        <div className="space-y-1">
          <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">Why Starknet</p>
          <h2 className="text-2xl font-black">The foundation matters.</h2>
          <p className="text-muted-foreground leading-relaxed">
            Medialane is built on Starknet. Not because it is popular — because its
            cryptographic properties are uniquely suited to the bigger vision.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {STARKNET_REASONS.map(({ label, desc }) => (
            <div key={label} className="bento-cell p-5 space-y-1">
              <p className="font-bold text-sm text-brand-purple">{label}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Built to Grow */}
      <div className="bento-cell border border-brand-blue/20 p-8 space-y-4">
        <p className="text-xs font-black uppercase tracking-widest text-brand-blue">Built to Grow</p>
        <h2 className="text-xl font-black">Starknet-first. Designed for more.</h2>
        <p className="text-muted-foreground leading-relaxed">
          The Medialane protocol runs on Starknet today. The Medialane DAO is deployed on
          Ethereum — for security and liquidity — with MDLN bridgeable to Starknet via
          StarkGate, the same model used by the STRK token.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The long-term arc is toward fully chain-agnostic, censorship-resistant infrastructure.
          Starknet&apos;s ZK proofs and account abstraction are what make that possible — not chain
          loyalty, but architectural necessity.
        </p>
        <p className="text-sm text-muted-foreground">
          See <Link href="/dao/token" className="text-primary hover:underline">MDLN Token</Link> for the
          Ethereum deployment and bridge details, and <Link href="/docs/architecture" className="text-primary hover:underline">Architecture</Link> for the protocol roadmap.
        </p>
      </div>

      {/* Design Choices */}
      <div className="space-y-6">
        <div className="space-y-1">
          <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">Design Choices</p>
          <h2 className="text-2xl font-black">Why it&apos;s built this way.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {DESIGN_CHOICES.map(({ icon: Icon, title, desc, color, bg }) => (
            <div key={title} className="bento-cell p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className={`h-9 w-9 rounded-xl ${bg} flex items-center justify-center`}>
                  <Icon className={`h-5 w-5 ${color}`} />
                </div>
                <p className={`font-black text-sm ${color}`}>{title}</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Integrity Web */}
      <div className="bento-cell border border-primary/20 p-8 space-y-4">
        <div className="flex items-center gap-3">
          <Shield className="h-5 w-5 text-primary" />
          <p className="font-black text-primary">The Integrity Web</p>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          The Integrity Web is a set of ten axioms that define what trustworthy digital
          infrastructure must implement at the architectural level. They are not aspirations —
          they are engineering constraints. Medialane treats them as design requirements.
        </p>
        <Link
          href="/learn/integrity-web"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          Read the ten axioms and how Medialane applies them →
        </Link>
      </div>

    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/about/page.tsx
git commit -m "rewrite(about): four-layer model, Starknet grounding, creator capital markets framing"
```

---

### Task 9: Rewrite /learn/programmable-licensing

**Files:**
- Rewrite: `src/app/learn/programmable-licensing/page.tsx`

- [ ] **Step 1: Write the new programmable licensing page**

Replace entire content of `src/app/learn/programmable-licensing/page.tsx`:

```tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programmable Licensing | Learn | Medialane",
  description: "Medialane's onchain licensing system — license terms in metadata, soft enforcement as the default, the immutable-at-mint invariant, and when contracts enforce.",
  openGraph: {
    title: "Programmable Licensing | Learn | Medialane",
    description: "Medialane's onchain licensing system — license terms in metadata, soft enforcement as the default, the immutable-at-mint invariant, and when contracts enforce.",
    url: "https://docs.medialane.io/learn/programmable-licensing",
  },
  twitter: {
    title: "Programmable Licensing | Learn | Medialane",
    description: "Medialane's onchain licensing system — license terms in metadata, soft enforcement as the default, the immutable-at-mint invariant, and when contracts enforce.",
  },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

function LicenseRow({ name, description }: { name: string; description: string }) {
  return (
    <div className="bento-cell px-4 py-3 flex items-start gap-3">
      <span className="font-mono text-xs bg-primary/10 text-primary px-2 py-1 rounded-md shrink-0 mt-0.5">{name}</span>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

const CORE_TRAITS = [
  { trait: "License", desc: "The preset: CC BY-SA (default), CC BY, CC0, All Rights Reserved, or Custom." },
  { trait: "Commercial Use", desc: "Whether the work may be used commercially — and by whom." },
  { trait: "Derivatives", desc: "Whether derivative works are permitted, and under what conditions." },
  { trait: "Attribution", desc: "Whether credit to the original creator is required." },
  { trait: "Territory", desc: "Geographic scope of the license — worldwide or specific regions." },
  { trait: "AI Policy", desc: "Explicit declaration on AI training use: allowed, not allowed, or with permission only." },
];

export default function LearnProgrammableLicensingPage() {
  return (
    <div className="space-y-10">

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Programmable Licensing</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Every IP asset minted on Medialane carries a machine-readable license embedded
          in its on-chain metadata. The terms travel with the asset — to any marketplace,
          viewer, or aggregator that reads metadata.
        </p>
      </div>

      <div className="space-y-8">

        <Section title="License as Metadata">
          <p>
            License terms are encoded as plain attributes on the token — the same
            attribute format that OpenSea, Rarible, and any other NFT viewer reads.
            This means the terms are portable: they are visible wherever the asset
            appears, not just on Medialane.
          </p>
          <p>
            Medialane extends the OpenSea metadata baseline with a structured license
            object. Third parties that don&apos;t understand the extension can still read
            the plain attributes. The floor is always the OpenSea baseline — it is
            never lowered.
          </p>
        </Section>

        <Section title="Soft Enforcement Is the Default">
          <div className="bento-cell border border-brand-orange/20 bg-brand-orange/5 p-5 space-y-3">
            <p className="font-bold text-foreground">The contract does not revert on license violation.</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Enforcement of license terms is social, legal, and jurisdictional — the same
              mechanisms that enforce traditional copyright. This is intentional: encoding
              jurisdiction-specific law into immutable contracts would make them globally
              unusable. Soft enforcement gives the system worldwide durability.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The on-chain record is evidence. It establishes what the creator stated,
              when they stated it, and what terms apply. That record is tamper-proof
              and permanently verifiable — which is exactly what you need for legal
              enforcement, even without automatic contract reversion.
            </p>
          </div>
        </Section>

        <Section title="The Six Core Traits">
          <p>
            License terms are expressed as a structured set of attributes. The six core
            traits are encoded on every asset and readable by any third party.
          </p>
          <div className="space-y-2">
            {CORE_TRAITS.map(({ trait, desc }) => (
              <div key={trait} className="bento-cell px-4 py-3 flex items-start gap-3">
                <span className="font-mono text-xs bg-primary/10 text-primary px-2 py-1 rounded-md shrink-0 mt-0.5">{trait}</span>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="License Presets">
          <div className="space-y-2">
            <LicenseRow name="CC BY-SA" description="Attribution + ShareAlike — the default. Free to use and adapt with credit. Derivatives must carry the same license. The most creator-protective open license." />
            <LicenseRow name="CC BY" description="Attribution — free to use and adapt with credit. Derivatives can use any license." />
            <LicenseRow name="CC0" description="Public Domain dedication. Creator waives all rights. Anyone can use for any purpose, without attribution." />
            <LicenseRow name="ARR" description="All Rights Reserved. Full copyright retained by the creator. No use permitted beyond viewing." />
            <LicenseRow name="Custom" description="Creator-defined terms specified as freeform text alongside the structured attributes." />
          </div>
        </Section>

        <Section title="Immutable at Mint">
          <div className="bento-cell border border-brand-purple/20 p-5 space-y-2">
            <p className="font-bold text-foreground">Terms cannot be edited after minting.</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Once a token is minted, its license terms are fixed. The metadata lives on IPFS
              or Arweave — content-addressed and immutable. If a creator wants to offer different
              terms, they mint a new token. There is no edit path.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This is a durability guarantee, not a limitation. Collectors know exactly what
              they purchased. The terms cannot be changed after the fact — by the creator,
              by Medialane, or by anyone else.
            </p>
          </div>
        </Section>

        <Section title="When Contracts Do Enforce">
          <p>
            Soft enforcement is the default. But services can opt into stronger mechanisms
            where it makes sense:
          </p>
          <div className="space-y-2">
            {[
              { name: "ERC-2981 royalty splits", desc: "Royalty percentages encoded in the contract. Marketplaces that implement ERC-2981 pay them automatically." },
              { name: "Escrow and time-lock", desc: "Certain services can hold funds in escrow pending license verification." },
              { name: "Revocation", desc: "Some service types support on-chain revocation for specific license categories." },
            ].map(({ name, desc }) => (
              <div key={name} className="bento-cell px-4 py-3 space-y-1">
                <p className="text-sm font-semibold text-foreground">{name}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm">
            See <Link href="/learn/remix" className="text-primary hover:underline">Remix &amp; Derivatives</Link> for
            how license terms propagate through derivative chains.
          </p>
        </Section>

      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/learn/programmable-licensing/page.tsx
git commit -m "rewrite(learn): programmable licensing — soft enforcement default, immutable-at-mint, six core traits"
```

---

### Task 10: Rewrite /learn/marketplace

**Files:**
- Rewrite: `src/app/learn/marketplace/page.tsx`

- [ ] **Step 1: Write the new marketplace page**

Replace entire content of `src/app/learn/marketplace/page.tsx`:

```tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marketplace | Learn | Medialane",
  description: "How the Medialane marketplace works — a trading venue service, the order lifecycle, atomic settlement, and supported currencies.",
  openGraph: {
    title: "Marketplace | Learn | Medialane",
    description: "How the Medialane marketplace works — a trading venue service, the order lifecycle, atomic settlement, and supported currencies.",
    url: "https://docs.medialane.io/learn/marketplace",
  },
  twitter: {
    title: "Marketplace | Learn | Medialane",
    description: "How the Medialane marketplace works — a trading venue service, the order lifecycle, atomic settlement, and supported currencies.",
  },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

const ORDER_STATES = [
  { state: "ACTIVE", desc: "The order is live. Buyers can fill it. Sellers can cancel it." },
  { state: "FULFILLED", desc: "Payment and NFT transferred atomically. Permanent — the orderHash cannot be reused." },
  { state: "CANCELLED", desc: "Revoked by the offerer on-chain. No funds lost; a small gas fee applies." },
  { state: "EXPIRED", desc: "Past the order's expiry timestamp. Automatically invalid — no on-chain action needed." },
];

export default function LearnMarketplacePage() {
  return (
    <div className="space-y-10">

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">The Marketplace</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          The Medialane marketplace is a peer-to-peer trading venue for IP assets.
          Every transaction settles atomically on Starknet — no escrow, no custody,
          no intermediary.
        </p>
        <p className="text-sm text-muted-foreground">
          For the fee model, see{" "}
          <Link href="/docs/fees" className="text-primary hover:underline">Fees &amp; Revenue</Link>.
        </p>
      </div>

      <div className="space-y-8">

        <Section title="The Marketplace Is a Service">
          <p>
            The marketplace is not a separate system — it is a service registered in the
            Medialane service registry with marketplace capabilities:{" "}
            <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">list</code>,{" "}
            <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">buy</code>,{" "}
            <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">make_offer</code>, and{" "}
            <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">cancel</code>.
          </p>
          <p>
            This means the same order infrastructure that powers trading today can power
            future auction venues and swap markets without a new contract architecture.
            New trading venues are registry entries, not rewrites.
          </p>
        </Section>

        <Section title="Order Lifecycle">
          <p>
            A listing or offer is a signed order — one offer item and one consideration item,
            signed with your wallet using SNIP-12 typed data. The{" "}
            <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">orderHash</code>{" "}
            is computed at creation and is the permanent on-chain identifier.
          </p>
          <div className="space-y-2">
            {ORDER_STATES.map(({ state, desc }) => (
              <div key={state} className="bento-cell px-4 py-3 flex items-start gap-3">
                <code className="font-mono text-xs bg-primary/10 text-primary px-2 py-1 rounded shrink-0 mt-0.5">{state}</code>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <p>
            Counter-offers are new orders with a{" "}
            <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">parentOrderHash</code>{" "}
            referencing the original. Both parties can cancel at any time before acceptance.
          </p>
        </Section>

        <Section title="Atomic Settlement">
          <div className="bento-cell border border-brand-orange/20 bg-brand-orange/5 p-5 space-y-2">
            <p className="font-bold text-foreground">Payment and NFT transfer in the same transaction — or both revert.</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The marketplace contract never takes custody of funds or assets. There is no
              escrow step. When a buyer fills an order, the NFT moves to the buyer&apos;s wallet
              and the payment moves to the seller&apos;s wallet in a single atomic transaction.
              If either leg fails, both revert.
            </p>
          </div>
        </Section>

        <Section title="Listings (Fixed Price)">
          <p>
            Navigate to an asset page and click <strong className="text-foreground">List for sale</strong>.
            Set your price in STRK, ETH, USDC, or USDT — the listing is signed with SNIP-12 typed
            data and recorded on the marketplace contract. Your asset remains in your wallet
            until a buyer fills the order.
          </p>
          <p>
            Use the <strong className="text-foreground">Cart</strong> to queue multiple
            purchases and execute them in a single session, reducing PIN entries.
          </p>
        </Section>

        <Section title="Multi-Edition Assets (ERC-1155)">
          <p>
            Multi-edition listings support <strong className="text-foreground">partial fills</strong>.
            Choose how many editions to buy — the order stays active after your purchase so
            other collectors can buy the remaining supply. Price is always{" "}
            <strong className="text-foreground">price per unit × quantity</strong>.
          </p>
        </Section>

        <Section title="Offers">
          <p>
            Make an offer on any asset — listed or unlisted — from the asset page. The funds
            are not locked until the creator accepts. Creators manage incoming offers from
            <strong className="text-foreground"> Portfolio → Offers received</strong>.
          </p>
        </Section>

        <Section title="Fees">
          <p>
            Listing and offer creation are gasless for standard product flows. Completed sales
            include a <strong className="text-foreground">1% marketplace fee</strong> — applied
            at the platform layer and routed to the Medialane DAO treasury. The fee schedule
            is DAO-controlled and can be updated without touching the contracts.
          </p>
          <p>
            Read the canonical breakdown in{" "}
            <Link href="/docs/fees" className="text-primary hover:underline">Fees &amp; Revenue</Link>.
          </p>
        </Section>

        <Section title="Supported Currencies">
          <ul className="list-disc list-inside space-y-1.5 text-sm">
            <li><strong className="text-foreground">STRK</strong> — Starknet&apos;s native token</li>
            <li><strong className="text-foreground">ETH</strong> — Bridged Ethereum</li>
            <li><strong className="text-foreground">USDC</strong> — USD Coin (Circle)</li>
            <li><strong className="text-foreground">USDT</strong> — Tether USD</li>
            <li><strong className="text-foreground">WBTC</strong> — Wrapped Bitcoin</li>
          </ul>
        </Section>

      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/learn/marketplace/page.tsx
git commit -m "rewrite(learn): marketplace — venue-as-service, order lifecycle, atomic settlement"
```

---

### Task 11: Rewrite /learn/remix

**Files:**
- Rewrite: `src/app/learn/remix/page.tsx`

- [ ] **Step 1: Write the new remix page**

Replace entire content of `src/app/learn/remix/page.tsx`:

```tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Remix & Derivatives | Learn | Medialane",
  description: "How derivative works function on Medialane — licensed remixing, permanent on-chain attribution, and soft enforcement of license terms.",
  openGraph: {
    title: "Remix & Derivatives | Learn | Medialane",
    description: "How derivative works function on Medialane — licensed remixing, permanent on-chain attribution, and soft enforcement of license terms.",
    url: "https://docs.medialane.io/learn/remix",
  },
  twitter: {
    title: "Remix & Derivatives | Learn | Medialane",
    description: "How derivative works function on Medialane — licensed remixing, permanent on-chain attribution, and soft enforcement of license terms.",
  },
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
    <pre className="bento-cell p-4 text-xs font-mono overflow-x-auto text-foreground/80 leading-relaxed">
      {children}
    </pre>
  );
}

export default function LearnRemixPage() {
  return (
    <div className="space-y-10">

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Remix &amp; Derivative Works</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Medialane supports licensed derivative works — building on existing IP with
          the parent asset&apos;s license terms governing what is permitted. Every remix
          records its relationship to the original on-chain, permanently.
        </p>
      </div>

      <div className="space-y-8">

        <Section title="What Is a Remix?">
          <p>
            A remix is a new IP asset that derives from, samples, or builds upon an existing
            asset. The original asset&apos;s license terms determine whether remixing is permitted,
            what attribution is required, and what license the derivative must carry.
          </p>
          <p>
            On Medialane, the derivation relationship is a first-class on-chain object — a
            permanent pointer from the remix to its parent. This creates a transparent,
            public provenance chain traceable to the original source.
          </p>
          <Code>{`Asset A (original)
  └─ Asset B (remix of A — parentTokenId: A)
       └─ Asset C (remix of B — parentTokenId: B)`}</Code>
        </Section>

        <Section title="What the Chain Records">
          <p>
            When a remix is minted, three things are recorded permanently on-chain:
          </p>
          <div className="space-y-2">
            {[
              { label: "Derivation", desc: "The parentTokenId linking this asset to its parent. Cannot be changed." },
              { label: "Attribution", desc: "The original creator's wallet address, embedded in the remix metadata at mint time." },
              { label: "License terms at mint", desc: "The license the remix was minted under — immutable, content-addressed on IPFS or Arweave." },
            ].map(({ label, desc }) => (
              <div key={label} className="bento-cell px-4 py-3 space-y-1">
                <p className="text-sm font-semibold text-foreground">{label}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="How License Terms Apply">
          <p>
            The parent asset&apos;s license terms are displayed before minting a remix. They
            determine what is permitted:
          </p>
          <div className="space-y-2">
            {[
              { rule: "No-derivatives (ND)", desc: "Remixing is not permitted. The remix flow will not proceed for ND-licensed assets." },
              { rule: "ShareAlike", desc: "Derivatives must carry the same license as the parent. You cannot relicense a ShareAlike work under more permissive terms." },
              { rule: "Attribution required", desc: "The original creator's address and token ID are embedded in the child metadata automatically." },
              { rule: "Commercial restrictions", desc: "If the parent forbids commercial use, the remix cannot grant commercial rights." },
            ].map(({ rule, desc }) => (
              <div key={rule} className="bento-cell px-4 py-3 space-y-1">
                <p className="text-sm font-semibold text-foreground">{rule}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Soft Enforcement">
          <div className="bento-cell border border-brand-orange/20 bg-brand-orange/5 p-5 space-y-2">
            <p className="font-bold text-foreground">The on-chain record is evidence, not automatic enforcement.</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Royalty propagation through remix chains is social and legal enforcement —
              the same mechanisms as traditional copyright. The contract does not automatically
              extract payments from downstream remixers.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              What the chain provides is a tamper-proof, timestamped record of what was stated,
              by whom, and when. That record is exactly what you need for legal enforcement —
              and it cannot be altered by anyone.
            </p>
          </div>
          <p className="text-sm">
            See <Link href="/learn/programmable-licensing" className="text-primary hover:underline">Programmable Licensing</Link> for
            the full license model, including when contracts do enforce terms directly.
          </p>
        </Section>

        <Section title="Creating a Remix">
          <ol className="list-decimal list-inside space-y-1.5 text-sm">
            <li>Navigate to the asset page and click <strong className="text-foreground">Remix</strong>.</li>
            <li>Review the parent asset&apos;s license terms to confirm you are eligible.</li>
            <li>Upload your derivative work.</li>
            <li>Set metadata — name, description, IP type.</li>
            <li>Choose a license for your remix (constrained by what the parent allows).</li>
            <li>Sign and mint — the parent token ID is embedded in your new asset&apos;s metadata.</li>
          </ol>
          <p>Gas fees for minting a remix are sponsored by Medialane, the same as any other mint.</p>
        </Section>

        <Section title="AI Agents &amp; Remixing">
          <p>
            The API supports automated remix workflows. An agent can query for assets with{" "}
            <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">derivatives: allowed</code>,
            generate a derivative work, and mint it with proper attribution — the same
            endpoints as a human creator. The contracts make no distinction.
          </p>
          <p className="text-sm">
            See <Link href="/docs/agents" className="text-primary hover:underline">AI Agents</Link> for
            authentication and API usage.
          </p>
        </Section>

      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/learn/remix/page.tsx
git commit -m "rewrite(learn): remix — soft enforcement framing, on-chain record as evidence, license propagation"
```

---

### Task 12: Wave 2 build verification

- [ ] **Step 1: Full build check**

Run: `cd /Users/medialane/dev/medialane-docs && bun run build 2>&1 | tail -30`

Expected: `○ /about`, `○ /learn/programmable-licensing`, `○ /learn/marketplace`, `○ /learn/remix` all static, zero TypeScript errors.

- [ ] **Step 2: Restart dev server**

```bash
kill $(lsof -i :3000 -t) 2>/dev/null; rm -rf .next; bun dev &
```

---

## WAVE 3 — Targeted Updates

---

### Task 13: Update /docs/fees

**Files:**
- Modify: `src/app/docs/fees/page.tsx`

- [ ] **Step 1: Add platform-layer clarification**

Open `src/app/docs/fees/page.tsx`. Find the intro paragraph (below the metadata and before `FREE_ACTIONS`). Add this explanatory section immediately after the page header `<p>` tag:

```tsx
<div className="bento-cell border border-brand-blue/20 bg-brand-blue/5 p-4 space-y-2">
  <p className="text-sm font-semibold text-foreground">Fees are at the platform layer — never in the contracts.</p>
  <p className="text-sm text-muted-foreground leading-relaxed">
    The Medialane marketplace contracts have no fee logic. Fees are applied at the platform
    layer by Medialane apps and are controlled by the DAO. This means the fee schedule can
    be updated via governance vote without any contract migration or redeployment.
  </p>
</div>
```

In the `PAID_ACTIONS` array, find the `"Buy or sell through the marketplace"` entry. Update its `note` field to:

```typescript
note: "The 1% fee is applied at the platform layer — not in the contract. The DAO controls the fee schedule; it can change without contract migration.",
```

- [ ] **Step 2: Commit**

```bash
git add src/app/docs/fees/page.tsx
git commit -m "feat(docs): fees — clarify platform-layer fee model, DAO-controlled schedule"
```

---

### Task 14: Update /docs/sdk

**Files:**
- Modify: `src/app/docs/sdk/page.tsx`

- [ ] **Step 1: Add service registry section**

Open `src/app/docs/sdk/page.tsx`. Find the last `<Section>` block before the closing `</div>`. Add a new section after it:

```tsx
<Section title="Service Registry">
  <p>
    The SDK hosts the canonical service registry in Year 1. Use{" "}
    <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">getService()</code>{" "}
    to look up a service by ID and retrieve its capability set, contract configuration,
    and SNIP-12 domain.
  </p>
  <Code>{`import { getService } from "@medialane/sdk";

const svc = getService("medialane-marketplace-erc721");
// svc.capabilities  → ["list", "buy", "make_offer", "cancel"]
// svc.onchain.classHash  → "0x004387..."
// svc.snip12Domain  → { name: "...", version: "...", ... }`}</Code>
  <p>
    Service IDs are stable across contract upgrades — no <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">-v3</code> suffix.
    The canonical IDs are:{" "}
    <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">mip-erc721</code>,{" "}
    <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">mip-erc1155</code>,{" "}
    <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">pop-protocol</code>,{" "}
    <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">drop-collection</code>,{" "}
    <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">medialane-marketplace-erc721</code>,{" "}
    <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">medialane-marketplace-erc1155</code>.
  </p>
  <p className="text-sm">
    Note: the <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">source</code> field
    is deprecated as of SDK 0.12.0 and will be removed in 0.13.0. Migrate to{" "}
    <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">getService(asset.service)</code>.
  </p>
</Section>
```

- [ ] **Step 2: Commit**

```bash
git add src/app/docs/sdk/page.tsx
git commit -m "feat(docs): sdk — add service registry section, getService(), deprecation note"
```

---

### Task 15: Update /docs/developers

**Files:**
- Modify: `src/app/docs/developers/page.tsx`

- [ ] **Step 1: Add architecture context section at the top of the page body**

Open `src/app/docs/developers/page.tsx`. Find the first `<Section` tag inside the page body. Insert this block immediately before it:

```tsx
<Section title="Architecture Context">
  <p>
    Medialane is a four-layer system: Chain (immutable contracts) → Indexer (event reducer) →
    SDK (typed lens + service registry) → Apps (your integration). When you build on the SDK
    or API, you are operating at the SDK/App layer — the contracts and indexer are upstream
    guarantees you can rely on.
  </p>
  <p className="text-sm">
    See <Link href="/docs/architecture" className="text-primary hover:underline">Architecture</Link>{" "}
    for the full model, the rebuild test, and the protocol vs. platform distinction.
    See <Link href="/learn/services" className="text-primary hover:underline">Services</Link>{" "}
    for the service registry and capability set.
  </p>
</Section>
```

Make sure `Link` is imported from `"next/link"` at the top of the file if not already present.

- [ ] **Step 2: Commit**

```bash
git add src/app/docs/developers/page.tsx
git commit -m "feat(docs): developers — add architecture context section with four-layer framing"
```

---

### Task 16: Update /docs/agents

**Files:**
- Modify: `src/app/docs/agents/page.tsx`

- [ ] **Step 1: Add identity and service model context**

Open `src/app/docs/agents/page.tsx`. Find the first `<Section` block. Insert a new section before it:

```tsx
<Section title="Agents as First-Class Accounts">
  <p>
    An AI agent&apos;s wallet is a first-class Medialane account. The contracts make no
    distinction between a human signing a transaction and an agent doing the same —
    same API, same fees, same protocol capabilities.
  </p>
  <p>
    Agents use the same identity model as human users: a{" "}
    <strong className="text-foreground">Wallet</strong> that signs (via SIWS),
    an <strong className="text-foreground">Account</strong> that accumulates on-chain history,
    and an optional <strong className="text-foreground">Profile</strong> for discovery.
    See <Link href="/learn/identity" className="text-primary hover:underline">Identity</Link> for the full model.
  </p>
  <p>
    Agents operate on services — the same service registry that powers human-facing actions.
    Query <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">getService()</code> to
    discover what capabilities a given collection supports before acting.
    See <Link href="/learn/services" className="text-primary hover:underline">Services</Link>.
  </p>
</Section>
```

Make sure `Link` is imported from `"next/link"` if not already present.

- [ ] **Step 2: Commit**

```bash
git add src/app/docs/agents/page.tsx
git commit -m "feat(docs): agents — first-class account framing, identity and service model context"
```

---

### Task 17: Update /dao/governance

**Files:**
- Modify: `src/app/dao/governance/page.tsx`

- [ ] **Step 1: Add DAO scope clarification section**

Open `src/app/dao/governance/page.tsx`. Find the page intro paragraph (below the `<h2>` heading). Add this block after the intro:

```tsx
<div className="bento-cell border border-brand-blue/20 bg-brand-blue/5 p-5 space-y-3">
  <p className="text-sm font-semibold text-foreground">What the DAO governs — and what it does not.</p>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    <div className="space-y-1.5">
      <p className="text-xs font-bold text-foreground uppercase tracking-widest">Governs</p>
      {[
        "Marketplace fee schedule",
        "Service registry curation (Year 1)",
        "DAO treasury allocation",
        "Reward configuration and multipliers",
        "MDLN token parameters",
      ].map((item) => (
        <p key={item} className="text-xs text-muted-foreground flex items-start gap-1.5">
          <span className="text-brand-blue shrink-0">✓</span>{item}
        </p>
      ))}
    </div>
    <div className="space-y-1.5">
      <p className="text-xs font-bold text-foreground uppercase tracking-widest">Does not govern</p>
      {[
        "Minting (permissionless)",
        "Listing and trading (permissionless)",
        "Token transfers (permissionless)",
        "Deployed contract rules (immutable)",
      ].map((item) => (
        <p key={item} className="text-xs text-muted-foreground flex items-start gap-1.5">
          <span className="text-brand-rose shrink-0">✗</span>{item}
        </p>
      ))}
    </div>
  </div>
  <p className="text-xs text-muted-foreground">
    Protocol actions — minting, listing, trading — are always available regardless of DAO decisions.
    The DAO governs the commercial layer. The contracts govern everything else.
  </p>
</div>
```

Also find the `"Protocol Upgrade"` row in `THRESHOLDS`. Update its description to clarify:

```typescript
{ type: "Protocol Parameters", quorum: "Snapshot configuration", threshold: "DAO approval + implementation review" },
```

(Rename from "Protocol Upgrade" to "Protocol Parameters" — the DAO does not upgrade contracts; it governs parameters and the service registry.)

- [ ] **Step 2: Commit**

```bash
git add src/app/dao/governance/page.tsx
git commit -m "feat(dao): governance — clarify DAO scope: commercial layer only, not protocol actions"
```

---

### Task 18: Update /dao/token

**Files:**
- Modify: `src/app/dao/token/page.tsx`

- [ ] **Step 1: Add Ethereum + StarkGate bridge context**

Open `src/app/dao/token/page.tsx`. Find the section that describes the MDLN token basics (supply, distribution). Add a new info block after the supply facts:

```tsx
<div className="bento-cell border border-brand-blue/20 p-5 space-y-3">
  <p className="text-sm font-semibold text-foreground">Ethereum deployment + StarkGate bridge</p>
  <p className="text-sm text-muted-foreground leading-relaxed">
    MDLN is live on Ethereum mainnet. It is bridgeable to Starknet via StarkGate —
    the same model used by the STRK token. Holding MDLN on Ethereum provides maximum
    security and liquidity; bridging to Starknet enables participation in platform
    multipliers and on-chain governance tooling.
  </p>
  <p className="text-sm text-muted-foreground leading-relaxed">
    The Medialane DAO is deployed on Ethereum for the same reason: Ethereum&apos;s
    security and liquidity profile provides the strongest foundation for a DAO treasury
    and governance system. Starknet is the protocol layer; Ethereum is the governance layer.
  </p>
</div>
```

- [ ] **Step 2: Commit**

```bash
git add src/app/dao/token/page.tsx
git commit -m "feat(dao): token — add Ethereum deployment, StarkGate bridge, governance layer framing"
```

---

### Task 19: Update /learn/creator-launchpad

**Files:**
- Modify: `src/app/learn/creator-launchpad/page.tsx`

- [ ] **Step 1: Add service model framing to intro**

Open `src/app/learn/creator-launchpad/page.tsx`. Find the intro `<p>` paragraph. After it, add:

```tsx
<div className="bento-cell border border-brand-purple/20 p-4 space-y-1">
  <p className="text-sm font-semibold text-foreground">Powered by registered services</p>
  <p className="text-sm text-muted-foreground leading-relaxed">
    Each collection type is backed by a registered service in the Medialane registry:
    standard IP collections use the{" "}
    <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">mip-erc721</code> service,
    multi-edition collections use{" "}
    <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">mip-erc1155</code>.
    The service determines which capabilities are available — minting, listing, remixing, and more.
    See <Link href="/learn/services" className="text-primary hover:underline">Services</Link> for
    the full registry.
  </p>
</div>
```

Make sure `Link` is imported from `"next/link"` if not already present.

- [ ] **Step 2: Commit**

```bash
git add src/app/learn/creator-launchpad/page.tsx
git commit -m "feat(learn): creator-launchpad — add service model context (mip-erc721, mip-erc1155)"
```

---

### Task 20: Update /learn/pop-protocol

**Files:**
- Modify: `src/app/learn/pop-protocol/page.tsx`

- [ ] **Step 1: Add service ID framing**

Open `src/app/learn/pop-protocol/page.tsx`. Find the intro paragraph. After it, add:

```tsx
<div className="bento-cell border border-brand-orange/20 p-4 space-y-1">
  <p className="text-sm font-semibold text-foreground">
    Service ID: <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">pop-protocol</code>
  </p>
  <p className="text-sm text-muted-foreground leading-relaxed">
    POP campaigns are registered under the{" "}
    <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">pop-protocol</code> service
    with capabilities:{" "}
    <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">mint</code>,{" "}
    <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">claim</code>,{" "}
    <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">airdrop</code>.
    The credential tokens are soulbound — non-transferable by design.
  </p>
</div>
```

- [ ] **Step 2: Commit**

```bash
git add src/app/learn/pop-protocol/page.tsx
git commit -m "feat(learn): pop-protocol — add service ID and capability framing"
```

---

### Task 21: Update /learn/collection-drop

**Files:**
- Modify: `src/app/learn/collection-drop/page.tsx`

- [ ] **Step 1: Add service ID framing**

Open `src/app/learn/collection-drop/page.tsx`. Find the intro paragraph. After it, add:

```tsx
<div className="bento-cell border border-brand-rose/20 p-4 space-y-1">
  <p className="text-sm font-semibold text-foreground">
    Service ID: <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">drop-collection</code>
  </p>
  <p className="text-sm text-muted-foreground leading-relaxed">
    Collection Drops are registered under the{" "}
    <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">drop-collection</code> service
    with capabilities:{" "}
    <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">mint</code> and{" "}
    <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">claim</code>.
    Supply caps and mint windows are enforced by the drop contract deployed from the factory.
  </p>
</div>
```

- [ ] **Step 2: Commit**

```bash
git add src/app/learn/collection-drop/page.tsx
git commit -m "feat(learn): collection-drop — add service ID and capability framing"
```

---

### Task 22: Update /learn/integrity-web

**Files:**
- Modify: `src/app/learn/integrity-web/page.tsx`

- [ ] **Step 1: Fix Axiom 07 highlights — remove Bitcoin and Solana by name**

Open `src/app/learn/integrity-web/page.tsx`. Find the `AXIOMS` array entry with `num: "07"` (Decentralization is Resilience). Update the `highlights` array:

Replace:
```typescript
highlights: ["Assets live on Starknet — survive frontend outages", "Multichain roadmap: Bitcoin, Ethereum, Solana", "Bitcoin as the censorship-resistant sovereignty layer"],
```

With:
```typescript
highlights: ["Assets live on Starknet — survive frontend outages", "Designed for multi-chain expansion", "Protocol layer independent of any single chain"],
```

Also update the `medialane` body text for Axiom 07. Replace the current text with:

```typescript
medialane: "Medialane's smart contracts on Starknet, Starknet's own decentralized validator network, and an architecture designed to expand across chains — these are not separate concerns. They are layers of the same resilience strategy. If Medialane's frontend went offline tomorrow, every NFT would still exist and be transferable.",
```

- [ ] **Step 2: Add architecture reference to the intro block**

Find the `"What is the Integrity Web?"` bento-cell. Add a sentence to the last paragraph:

```tsx
<p className="text-muted-foreground leading-relaxed">
  Its ten axioms are not opinions about what the internet <em>should</em> be. They are
  engineering constraints that determine what a trustworthy system <em>must</em> implement.
  Medialane treats them as design requirements — implemented through immutable contracts,
  ZK proofs, and the four-layer authority model described in{" "}
  <Link href="/docs/architecture" className="text-primary hover:underline">Architecture</Link>.
</p>
```

Make sure `Link` is imported from `"next/link"` if not already at the top.

- [ ] **Step 3: Commit**

```bash
git add src/app/learn/integrity-web/page.tsx
git commit -m "fix(learn): integrity-web — remove Bitcoin/Solana from highlights, add architecture link"
```

---

### Task 23: Wave 3 build verification and final commit

- [ ] **Step 1: Full build check**

Run: `cd /Users/medialane/dev/medialane-docs && bun run build 2>&1 | tail -40`

Expected: All routes render as `○` (static). Zero TypeScript errors. Verify these routes are present:
```
○ /docs/architecture
○ /learn/services
○ /learn/identity
○ /docs/protocol
○ /about
○ /learn/programmable-licensing
○ /learn/marketplace
○ /learn/remix
○ /docs/fees
○ /docs/sdk
○ /docs/developers
○ /docs/agents
○ /dao/governance
○ /dao/token
○ /learn/creator-launchpad
○ /learn/pop-protocol
○ /learn/collection-drop
○ /learn/integrity-web
```

- [ ] **Step 2: Restart dev server**

```bash
kill $(lsof -i :3000 -t) 2>/dev/null; rm -rf .next; bun dev &
```

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "chore: wave 3 complete — architecture alignment full pass done"
```
