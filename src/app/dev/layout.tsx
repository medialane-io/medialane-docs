"use client";

import { usePathname } from "next/navigation";
import { PortfolioChipFilter } from "@medialane/ui";
import { DOCS_TABS } from "@/lib/docs-nav";
import { PageContainer } from "@/components/page-container";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <PageContainer width="wide" className="pt-20 pb-16 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Developers</h1>
        <p className="text-muted-foreground mt-1 text-base">
          Build on Medialane: the protocol, SDK, API, and contracts. For people and AI agents alike.
        </p>
      </div>

      <PortfolioChipFilter
        options={DOCS_TABS.map((item) => ({ key: item.href, href: item.href, label: item.label }))}
        value={pathname}
        onChange={() => {}}
        showAll={false}
      />

      <div>{children}</div>
    </PageContainer>
  );
}
