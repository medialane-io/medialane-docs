"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { PageContainer } from "@/components/page-container";

const LEARN_NAV = [
  { label: "Overview",               href: "/learn" },
  { label: "Integrity Web",          href: "/learn/integrity-web" },
  { label: "NFTs",                   href: "/learn/nft" },
  { label: "Blockchain",             href: "/learn/blockchain" },
  { label: "Zero Knowledge",         href: "/learn/zero-knowledge" },
  { label: "Programmable IP",        href: "/learn/programmable-ip" },
  { label: "Tokenization",           href: "/learn/tokenization" },
  { label: "Creator Launchpad",      href: "/learn/creator-launchpad" },
  { label: "Marketplace",            href: "/learn/marketplace" },
  { label: "POP Protocol",           href: "/learn/pop-protocol" },
  { label: "Collection Drop",        href: "/learn/collection-drop" },
  { label: "IP Collection 1155",     href: "/learn/ip-collection-1155" },
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
      <div className="pb-6 border-b border-border/50">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-2">Education</p>
        <h1 className="text-2xl font-bold">Learn</h1>
        <p className="text-muted-foreground mt-1 text-sm max-w-xl">
          Understand IP ownership, blockchain technology, and how Medialane works.
        </p>
      </div>

      {/* Pill tab nav */}
      <nav className="overflow-x-auto scrollbar-hide py-4">
        <div className="flex items-center gap-1.5 min-w-max">
          {LEARN_NAV.map((item) => {
            const active =
              item.href === "/learn"
                ? pathname === "/learn"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-1.5 text-sm rounded-full whitespace-nowrap transition-all font-medium",
                  active
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Content */}
      <div className="pt-2">{children}</div>
    </PageContainer>
  );
}
