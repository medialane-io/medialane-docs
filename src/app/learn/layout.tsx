"use client";

import { usePathname } from "next/navigation";
import { PortfolioChipFilter } from "@medialane/ui";
import { PageContainer } from "@/components/page-container";

const LEARN_NAV = [
  { label: "Overview",               href: "/learn" },
  { label: "Integrity Web",          href: "/learn/integrity-web" },
  { label: "NFTs",                   href: "/learn/nft" },
  { label: "Blockchain",             href: "/learn/blockchain" },
  { label: "Zero Knowledge",         href: "/learn/zero-knowledge" },
  { label: "Privacy",                href: "/learn/privacy" },
  { label: "Programmable IP",        href: "/learn/programmable-ip" },
  { label: "Tokenization",           href: "/learn/tokenization" },
  { label: "Services",               href: "/learn/services" },
  { label: "Identity",               href: "/learn/identity" },
  { label: "Media Wallet",           href: "/learn/media-wallet" },
  { label: "Creator Launchpad",      href: "/learn/creator-launchpad" },
  { label: "Creator Coins",          href: "/learn/creator-coin" },
  { label: "Marketplace",            href: "/learn/marketplace" },
  { label: "AI Agent Payments",      href: "/learn/agent-payments" },
  { label: "POP Protocol",           href: "/learn/pop-protocol" },
  { label: "Collection Drop",        href: "/learn/collection-drop" },
  { label: "IP Collection 1155",     href: "/learn/ip-collection-1155" },
  { label: "IP Tickets",             href: "/learn/ip-tickets" },
  { label: "IP Club",                href: "/learn/ip-club" },
  { label: "IP Sponsorship",         href: "/learn/ip-sponsorship" },
  { label: "Remix & Derivatives",    href: "/learn/remix" },
  { label: "Web3 & Starknet",        href: "/learn/web3" },
  { label: "Protect Your IP",        href: "/learn/protect-your-ip" },
  { label: "Programmable Licensing", href: "/learn/programmable-licensing" },
];

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <PageContainer width="wide" className="pb-16">
      {/* Header */}
      <div className="pb-6">
        <p className="text-base font-semibold uppercase tracking-widest text-primary/70 mb-2">Education</p>
        <h1 className="text-2xl font-bold">Learn</h1>
        <p className="text-muted-foreground mt-1 text-base max-w-xl">
          Understand IP ownership, blockchain technology, and how Medialane works.
        </p>
      </div>

      <div className="py-4">
        <PortfolioChipFilter
          options={LEARN_NAV.map((item) => ({ key: item.href, href: item.href, label: item.label }))}
          value={pathname}
          onChange={() => {}}
          showAll={false}
        />
      </div>

      {/* Content */}
      <div className="pt-2">{children}</div>
    </PageContainer>
  );
}
