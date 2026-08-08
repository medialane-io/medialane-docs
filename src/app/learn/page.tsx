import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Fingerprint, Image, Rocket, Store, Globe, Shield, FileText, Award, Package, GitBranch, Layers, ArrowRight, Bot, Ticket, Users, Handshake, Lock, Code2, Coins, Eye, KeyRound } from "lucide-react";

export const metadata: Metadata = {
  title: "Learn | Medialane",
  description: "Learn about NFTs, IP protection, blockchain technology, and how the Medialane platform works.",
  openGraph: {
    title: "Learn | Medialane",
    description: "Learn about NFTs, IP protection, blockchain technology, and how the Medialane platform works.",
    url: "https://docs.medialane.io/learn",
  },
  twitter: {
    title: "Learn | Medialane",
    description: "Learn about NFTs, IP protection, blockchain technology, and how the Medialane platform works.",
  },
};

const TOPICS = [
  {
    href: "/learn/integrity-web",
    icon: Shield,
    title: "The Integrity Web",
    description: "The ten axioms that shape Medialane's architecture: proof over trust, permissionless participation, and integrity by design.",
  },
  {
    href: "/learn/nft",
    icon: Image,
    title: "What is an NFT?",
    description: "Understand non-fungible tokens: what they are, how they work, and why they matter for creators and IP owners.",
  },
  {
    href: "/learn/blockchain",
    icon: Globe,
    title: "Blockchain Basics",
    description: "A plain-language introduction to blockchains, wallets, and how Medialane settles on Starknet.",
  },
  {
    href: "/learn/zero-knowledge",
    icon: Eye,
    title: "Zero-Knowledge Proofs",
    description: "How ZK-STARK proofs verify computation without revealing the underlying data, and what that means for Medialane.",
  },
  {
    href: "/learn/privacy",
    icon: Lock,
    title: "Privacy on Medialane",
    description: "Public authorship, private economics: what stays visible on-chain, what a creator can keep confidential, and why.",
  },
  {
    href: "/learn/programmable-ip",
    icon: Code2,
    title: "Programmable IP",
    description: "What it means for intellectual property to carry its rules with it: licenses, royalties, and derivative terms in the metadata.",
  },
  {
    href: "/learn/tokenization",
    icon: Coins,
    title: "Tokenization",
    description: "How minting turns a creative work into a verifiable, ownable on-chain asset, and what that record does and doesn't claim.",
  },
  {
    href: "/learn/services",
    icon: Layers,
    title: "Services",
    description: "How Medialane services work: the registry that defines what creators can do, canonical service IDs, and the capability set.",
  },
  {
    href: "/learn/identity",
    icon: Fingerprint,
    title: "Identity",
    description: "Wallets, accounts, and profiles: three separate things. Roles, authentication vs. authorization, and AI agent accounts.",
  },
  {
    href: "/learn/media-wallet",
    icon: KeyRound,
    title: "Media Wallet",
    description: "Medialane's self-custody account contract on Starknet: passkey-based keys, no seed phrase, live on mainnet.",
  },
  {
    href: "/learn/creator-launchpad",
    icon: Rocket,
    title: "Creator Launchpad",
    description: "Learn how to deploy your own collection, mint IP assets, and launch your creative work on Medialane.",
  },
  {
    href: "/learn/creator-coin",
    icon: Coins,
    title: "Creator Coins",
    description: "Launch your own fixed-supply coin with permanently locked liquidity, tradeable by your community on a public pool.",
  },
  {
    href: "/learn/marketplace",
    icon: Store,
    title: "Marketplace",
    description: "Discover how to list, buy, sell, make offers, and trade IP assets, including supported currencies and royalties.",
  },
  {
    href: "/learn/agent-payments",
    icon: Bot,
    title: "Payments for AI Agents",
    description: "How AI agents and any software pay to use Medialane: automatic per-use micropayments in USDC, no account or card, no human in the loop.",
  },
  {
    href: "/learn/pop-protocol",
    icon: Award,
    title: "POP Protocol",
    description: "Issue and claim on-chain proof-of-participation credentials: soulbound NFTs for events, communities, and milestones.",
  },
  {
    href: "/learn/collection-drop",
    icon: Package,
    title: "Collection Drop",
    description: "Launch time-limited NFT drop events with supply caps, mint windows, allowlists, and onchain settlement.",
  },
  {
    href: "/learn/ip-collection-1155",
    icon: Layers,
    title: "IP Collection 1155",
    description: "Deploy a multi-edition ERC-1155 collection for music, art series, and any creative work where multiple people should own the same piece.",
  },
  {
    href: "/learn/ip-tickets",
    icon: Ticket,
    title: "IP Tickets",
    description: "Create verifiable on-chain tickets your audience can hold and trade, a real asset rather than a soulbound pass.",
  },
  {
    href: "/learn/ip-club",
    icon: Users,
    title: "IP Club",
    description: "Run a membership club with an onchain NFT membership card: open, invite-only, paid, or capped.",
  },
  {
    href: "/learn/ip-sponsorship",
    icon: Handshake,
    title: "IP Sponsorship",
    description: "Sell a sponsorship license on an asset you own: sponsors bid, you accept, payment settles directly with no escrow.",
  },
  {
    href: "/learn/remix",
    icon: GitBranch,
    title: "Remix & Derivatives",
    description: "Build on existing works with automatic license compliance, on-chain attribution, and royalty propagation through the remix graph.",
  },
  {
    href: "/learn/web3",
    icon: Globe,
    title: "Web3 & Starknet",
    description: "A beginner-friendly introduction to blockchain technology, Starknet, and zero-knowledge proofs.",
  },
  {
    href: "/learn/protect-your-ip",
    icon: Shield,
    title: "Protect Your IP",
    description: "Understand the Berne Convention, copyright principles, and how Medialane helps creators protect their intellectual property.",
  },
  {
    href: "/learn/programmable-licensing",
    icon: FileText,
    title: "Programmable Licensing",
    description: "Explore Medialane's onchain licensing system: Creative Commons variants, AI policy, royalties, and derivative rules.",
  },
];

export default function LearnPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium text-primary">Knowledge Base</span>
        </div>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          Whether you&apos;re a creator exploring blockchain for the first time or a developer
          building on top of the Medialane protocol, this section covers everything you need
          to get started and go deeper.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {TOPICS.map(({ href, icon: Icon, title, description }) => (
          <Link
            key={href}
            href={href}
            className="group bento-cell p-5 hover:border-primary/40 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-1 flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold text-sm">{title}</p>
                  <ArrowRight className="h-4 w-4 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
