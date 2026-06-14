import type { Metadata } from "next";
import Link from "next/link";
import { Layers, Database, Package, Monitor, Lock, Box, FileText, ShoppingCart, Zap, Star } from "lucide-react";
import { Section } from "@/components/docs";

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
    detail: "The @medialane/sdk package is a typed interface to the API. The SDK hosts the service registry — the canonical map from service IDs to capability sets.",
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
    def: "A digital good on chain. Its identity is (chain, contract, tokenId).",
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
                  "Service registry curation (in the SDK)",
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
