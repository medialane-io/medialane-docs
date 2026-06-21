import type { NavCommandGroup } from "@medialane/ui";
import {
  Zap, Info, LayoutGrid, BookOpen, FileCode2, FileCheck, LifeBuoy,
  Building2, Link2, Search,
  Image, Globe, Lock, Code2, Coins, Rocket, Store, Award, Package,
  Layers, GitBranch, Shield, FileText,
  Users, User, Eye, Scale, Scroll, Vote, History, Network, Bot,
  Terminal, Landmark,
} from "lucide-react";
import { CANONICAL } from "./canonical";

/**
 * Top-level navigation for medialane-docs.
 *
 * Migrated from the previous sidebar (`AppSidebar`) to the shared
 * `NavCommandMenu` pattern used by medialane-io. Authority over the route
 * set still lives in this file — sub-pages register themselves here, not
 * in the menu component.
 *
 * Same shape as io's `NAV_COMMANDS`: ungrouped primary items render first
 * and emphasised; each subsequent group has a heading.
 */
export const NAV_COMMANDS: NavCommandGroup[] = [
  // Primary destinations — no heading, rendered first and emphasised.
  {
    items: [
      { id: "start", label: "Start", icon: Zap,        href: "/",     keywords: ["home", "frontpage", "main"] },
      { id: "about", label: "About", icon: Info,       href: "/about", keywords: ["medialane", "platform"] },
      { id: "apps",  label: "Apps",  icon: LayoutGrid, href: "/apps",  keywords: ["dapp", "io", "portal"] },
    ],
  },
  {
    heading: "Learn",
    items: [
      { id: "learn-index",                   label: "Learn overview",          icon: BookOpen,   href: "/learn",                          keywords: ["learn", "guides", "intro"] },
      { id: "learn-nft",                     label: "What is an NFT?",         icon: Image,      href: "/learn/nft",                      keywords: ["nft", "token", "ip"] },
      { id: "learn-blockchain",              label: "Blockchain",              icon: Globe,      href: "/learn/blockchain",               keywords: ["chain", "starknet", "decentralized"] },
      { id: "learn-zero-knowledge",          label: "Zero Knowledge",          icon: Lock,       href: "/learn/zero-knowledge",           keywords: ["zk", "proofs", "privacy"] },
      { id: "learn-programmable-ip",         label: "Programmable IP",         icon: Code2,      href: "/learn/programmable-ip",          keywords: ["ip", "smart", "rights"] },
      { id: "learn-tokenization",            label: "Tokenization",            icon: Coins,      href: "/learn/tokenization",             keywords: ["mint", "token", "rwa"] },
      { id: "learn-creator-launchpad",       label: "Creator Launchpad",       icon: Rocket,     href: "/learn/creator-launchpad",        keywords: ["launchpad", "drop", "mint", "create"] },
      { id: "learn-creator-coin",            label: "Creator Coins",           icon: Coins,      href: "/learn/creator-coin",             keywords: ["coin", "token", "memecoin", "launch", "liquidity"] },
      { id: "learn-marketplace",             label: "Marketplace",             icon: Store,      href: "/learn/marketplace",              keywords: ["trade", "buy", "sell", "orders"] },
      { id: "learn-agent-payments",          label: "AI Agent Payments",       icon: Bot,        href: "/learn/agent-payments",           keywords: ["agents", "x402", "payments", "micropayments", "ai", "machine"] },
      { id: "learn-pop-protocol",            label: "POP Protocol",            icon: Award,      href: "/learn/pop-protocol",             keywords: ["pop", "proof of participation", "event"] },
      { id: "learn-collection-drop",         label: "Collection Drop",         icon: Package,    href: "/learn/collection-drop",          keywords: ["drop", "timed", "fixed supply"] },
      { id: "learn-ip-collection-1155",      label: "IP Collection 1155",      icon: Layers,     href: "/learn/ip-collection-1155",       keywords: ["erc1155", "editions", "multi"] },
      { id: "learn-remix",                   label: "Remix & Derivatives",     icon: GitBranch,  href: "/learn/remix",                    keywords: ["remix", "fork", "attribution"] },
      { id: "learn-protect-your-ip",         label: "Protect Your IP",         icon: Shield,     href: "/learn/protect-your-ip",          keywords: ["protect", "rights", "evidence"] },
      { id: "learn-programmable-licensing",  label: "Programmable Licensing",  icon: FileText,   href: "/learn/programmable-licensing",   keywords: ["license", "cc", "license type"] },
      { id: "learn-services",                label: "Services",                icon: Layers,     href: "/learn/services",                 keywords: ["service id", "registry", "capabilities"] },
      { id: "learn-identity",                label: "Identity",                icon: User,       href: "/learn/identity",                 keywords: ["account", "wallet", "profile"] },
      { id: "learn-integrity-web",           label: "Integrity Web",           icon: Shield,     href: "/learn/integrity-web",            keywords: ["axioms", "integrity", "philosophy"] },
      { id: "learn-web3",                    label: "Web3",                    icon: Globe,      href: "/learn/web3",                     keywords: ["web3", "decentralized", "intro"] },
    ],
  },
  {
    heading: "Developers",
    items: [
      { id: "docs-index",        label: "Developer hub",         icon: FileCode2, href: "/dev",                keywords: ["dev", "developers", "documentation", "build"] },
      { id: "docs-architecture", label: "Architecture",          icon: Layers,    href: "/dev/architecture",   keywords: ["four-layer", "primitives", "rebuild test"] },
      { id: "docs-protocol",     label: "Protocol",              icon: Network,   href: "/dev/protocol",       keywords: ["events", "indexer", "orders", "service"] },
      { id: "docs-contracts",    label: "Contracts",             icon: FileCode2, href: "/dev/contracts",      keywords: ["addresses", "marketplace", "factory", "starknet"] },
      { id: "docs-sdk",          label: "SDK",                   icon: Package,   href: "/dev/sdk",            keywords: ["@medialane/sdk", "typescript", "starknet"] },
      { id: "docs-api",          label: "API",                   icon: Terminal,  href: "/dev/api",            keywords: ["rest", "endpoints", "backend"] },
      { id: "docs-agents",       label: "Agents",                icon: Bot,       href: "/dev/agents",         keywords: ["ai", "agents", "automation"] },
      { id: "docs-developers",   label: "Developers",            icon: Code2,     href: "/dev/developers",     keywords: ["build", "integrate", "developer guide"] },
      { id: "docs-fees",         label: "Fees",                  icon: Coins,     href: "/dev/fees",           keywords: ["1%", "creators fund", "platform fee"] },
      { id: "docs-security",     label: "Security",              icon: Shield,    href: "/dev/security",       keywords: ["audit", "immutable", "risk"] },
      { id: "docs-governance",   label: "Governance",            icon: Vote,      href: "/dev/governance",     keywords: ["dao", "snapshot", "voting"] },
      { id: "docs-compliance",   label: "Compliance",            icon: Scale,     href: "/guidelines/compliance",     keywords: ["legal", "tos", "kyc"] },
      { id: "docs-changelog",    label: "Changelog",             icon: History,   href: "/dev/changelog",      keywords: ["release", "updates", "history"] },
    ],
  },
  {
    heading: "Guidelines",
    items: [
      { id: "guidelines-community",       label: "Community",       icon: Users,    href: "/guidelines/community",       keywords: ["conduct", "respect"] },
      { id: "guidelines-user-guidelines", label: "User Guidelines", icon: User,     href: "/guidelines/user-guidelines", keywords: ["usage", "rules"] },
      { id: "guidelines-terms",           label: "Terms of Use",    icon: FileText, href: "/guidelines/terms",           keywords: ["tos", "legal"] },
      { id: "guidelines-privacy",         label: "Privacy Policy",  icon: Eye,      href: "/guidelines/privacy",         keywords: ["privacy", "data"] },
      { id: "guidelines-compliance",      label: "Compliance",      icon: Scale,    href: "/guidelines/compliance",      keywords: ["legal", "compliance"] },
    ],
  },
  {
    heading: "DAO",
    items: [
      { id: "dao-about",        label: "About DAO",                  icon: Building2, href: "/dao",              keywords: ["dao", "organization", "governance"] },
      { id: "dao-constitution", label: "Constitution",               icon: Scroll,    href: "/dao/constitution", keywords: ["charter", "rules"] },
      { id: "dao-governance",   label: "Governance Charter",         icon: Landmark,  href: "/dao/governance",   keywords: ["snapshot", "voting"] },
      { id: "dao-token",        label: "MDLN Token",                 icon: Coins,     href: "/dao/token",        keywords: ["mdln", "supply", "token"] },
      { id: "dao-airdrop",      label: CANONICAL.creatorAirdropName, icon: Award,     href: "/dao/airdrop",      keywords: ["airdrop", "creator", "fund"] },
    ],
  },
  {
    heading: "Resources",
    items: [
      { id: "support",         label: "Support",         icon: LifeBuoy, href: "/support", keywords: ["help", "contact"] },
      { id: "links",           label: "Links",           icon: Link2,    href: "/links",   keywords: ["external", "urls"] },
      { id: "knowledge-index", label: "Knowledge Index", icon: Search,   href: "/search",  keywords: ["search", "index", "all pages"] },
    ],
  },
];
