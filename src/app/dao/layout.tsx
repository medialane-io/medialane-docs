"use client";

import { usePathname } from "next/navigation";
import { PortfolioChipFilter } from "@medialane/ui";
import { PageContainer } from "@/components/page-container";

const DAO_NAV = [
  { label: "About DAO",          href: "/dao" },
  { label: "Constitution",       href: "/dao/constitution" },
  { label: "Governance Charter", href: "/dao/governance" },
  { label: "MDLN Token",         href: "/dao/token" },
  { label: "Creator's Airdrop",  href: "/dao/airdrop" },
];

export default function DAOLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <PageContainer width="wide" className="pb-16">
      <div className="pb-6 border-b border-border/50">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-2">Governance</p>
        <h1 className="text-2xl font-bold">Medialane DAO</h1>
        <p className="text-muted-foreground mt-1 text-sm max-w-xl">
          Community governance, legal foundation, and the path to full platform autonomy.
        </p>
      </div>

      <div className="py-4">
        <PortfolioChipFilter
          options={DAO_NAV.map((item) => ({ key: item.href, href: item.href, label: item.label }))}
          value={pathname}
          onChange={() => {}}
          showAll={false}
        />
      </div>

      <div className="pt-2">{children}</div>
    </PageContainer>
  );
}
