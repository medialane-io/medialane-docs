import {
  BookOpen, Building2, Coins, Code2, FileCode2, History,
  Info, Landmark, LifeBuoy, Package, Shield, Terminal, Network,
} from "lucide-react";
import { CANONICAL } from "@/lib/canonical";

export type NavLink = {
  href: string;
  label: string;
  desc: string;
};

export const DOCS_NAV = [
  {
    href: "/docs/protocol",
    label: "Protocol",
    title: "Protocol",
    icon: Network,
    description: "Technical specification of the Mediolano protocol — onchain IP registration, licensing, events, and data structures.",
  },
  {
    href: "/docs/sdk",
    label: "SDK",
    title: "SDK",
    icon: Package,
    description: "The @medialane/sdk TypeScript package — installation, configuration, asset queries, minting, and marketplace integration.",
  },
  {
    href: "/docs/api",
    label: "API Reference",
    title: "API Reference",
    icon: Terminal,
    description: "Full REST API reference — endpoints, authentication, request shapes, rate limits, and response types.",
  },
  {
    href: "/docs/contracts",
    label: "Contracts",
    title: "Contracts",
    icon: FileCode2,
    description: "Cairo smart contracts — marketplace, collection registry, POP Protocol, Collection Drop, and royalty enforcement.",
  },
  {
    href: "/docs/developers",
    label: "Developers",
    title: "Developers",
    icon: Code2,
    description: "Integration guides, quickstarts, authentication setup, and code examples for building on top of Medialane.",
  },
  {
    href: "/docs/security",
    label: "Security",
    title: "Security",
    icon: Shield,
    description: "Defense-in-depth architecture, audit reports, decentralized storage, monitoring, and responsible disclosure.",
  },
  {
    href: "/docs/fees",
    label: "Fees & Revenue",
    title: "Fees & Revenue",
    icon: Coins,
    description: "Canonical fee model — free actions, gas sponsorship, royalties, marketplace fees, DAO treasury flow, and Creator's Airdrop governance.",
  },
  {
    href: "/docs/changelog",
    label: "Changelog",
    title: "Changelog",
    icon: History,
    description: "Protocol, SDK, API, governance, and documentation changes that affect users and builders.",
  },
] as const;

export const DOCS_TABS = [
  { label: "Overview", href: "/docs" },
  ...DOCS_NAV.map(({ label, href }) => ({ label, href })),
] as const;

export const CANONICAL_SOURCES = [
  {
    title: "Product Docs",
    owner: "docs.medialane.io",
    description: "How to use Medialane, learn platform concepts, integrate APIs, and build with the SDK.",
    href: "/docs",
    icon: BookOpen,
    external: false,
  },
  {
    title: "DAO & MDLN",
    owner: "medialane.org",
    description: "Canonical constitution, governance, MDLN token, treasury, Snapshot, and DAO legal facts.",
    href: CANONICAL.daoUrl,
    icon: Landmark,
    external: true,
  },
  {
    title: "Contracts",
    owner: "medialane-dao",
    description: "Canonical contract and token addresses live in medialane-dao/lib/site-config.ts and llms.txt.",
    href: CANONICAL.daoRepoUrl,
    icon: FileCode2,
    external: true,
  },
  {
    title: "SDK Package",
    owner: "medialane-sdk",
    description: "Package internals, releases, and source code for @medialane/sdk.",
    href: CANONICAL.sdkRepoUrl,
    icon: Package,
    external: true,
  },
] as const;

export const KNOWLEDGE_GROUPS = [
  {
    title: "Start Here",
    icon: Info,
    links: [
      { href: "/about", label: "About Medialane", desc: "Mission, platform framing, and architecture." },
      { href: "/apps", label: "Apps", desc: "Medialane app suite and participant workflows." },
      { href: "/learn", label: "Learn", desc: "Concepts for creators, collectors, and builders." },
      { href: "/support", label: "Support", desc: "FAQ, troubleshooting entry points, and contact." },
    ],
  },
  {
    title: "Product Guides",
    icon: BookOpen,
    links: [
      { href: "/learn/creator-launchpad", label: "Creator Launchpad", desc: "Collections, minting, gasless creation, and launchpad services." },
      { href: "/learn/marketplace", label: "Marketplace", desc: "Listings, offers, purchases, royalties, and supported currencies." },
      { href: "/learn/collection-drop", label: "Collection Drop", desc: "Timed drops, supply caps, allowlists, and mint windows." },
      { href: "/learn/pop-protocol", label: "POP Protocol", desc: "Soulbound proof-of-participation credentials." },
      { href: "/learn/remix", label: "Remix & Derivatives", desc: "Licensed derivative works and attribution chains." },
      { href: "/learn/programmable-licensing", label: "Programmable Licensing", desc: "License terms, AI policy, derivatives, and royalties." },
    ],
  },
  {
    title: "Developer Docs",
    icon: FileCode2,
    links: [
      { href: "/docs", label: "Docs Home", desc: "Canonical source map and technical documentation index." },
      ...DOCS_NAV.map(({ href, title, description }) => ({ href, label: title, desc: description })),
    ],
  },
  {
    title: "DAO And Governance",
    icon: Building2,
    links: [
      { href: "/dao", label: "DAO Summary", desc: "Docs-side summary of Medialane DAO LLC." },
      { href: "/dao/constitution", label: "Constitution Summary", desc: "Ratified constitution summary and canonical DAO link." },
      { href: "/dao/governance", label: "Governance Charter", desc: "Snapshot proposal lifecycle and voting overview." },
      { href: "/dao/token", label: "MDLN Token", desc: "Fixed supply, membership tiers, and treasury governance." },
      { href: "/dao/airdrop", label: CANONICAL.creatorAirdropName, desc: "DAO-governed airdrop model and participation tiers." },
    ],
  },
  {
    title: "Policies",
    icon: Shield,
    links: [
      { href: "/guidelines", label: "Guidelines", desc: "Community, user, legal, privacy, and compliance index." },
      { href: "/guidelines/community", label: "Community Guidelines", desc: "Participation standards and prohibited conduct." },
      { href: "/guidelines/user-guidelines", label: "User Guidelines", desc: "User responsibilities, safety, and appeals." },
      { href: "/guidelines/compliance", label: "Compliance", desc: "Regulatory and IP compliance overview." },
      { href: "/guidelines/terms", label: "Terms of Use", desc: "Platform terms." },
      { href: "/guidelines/privacy", label: "Privacy Policy", desc: "Data collection, processing, and user rights." },
    ],
  },
] as const;

export const EXTERNAL_LINKS = [
  { href: CANONICAL.daoUrl, label: "DAO Hub", desc: "Canonical DAO, MDLN, treasury, and governance source.", icon: Building2 },
  { href: CANONICAL.snapshotUrl, label: "Snapshot", desc: `Live Medialane DAO voting at ${CANONICAL.snapshotEns}.`, icon: Coins },
  { href: CANONICAL.githubOrgUrl, label: "GitHub", desc: "Official Medialane repositories.", icon: FileCode2 },
  { href: CANONICAL.appUrl, label: "Medialane App", desc: "Create, collect, trade, and manage creative work.", icon: Info },
] as const;

