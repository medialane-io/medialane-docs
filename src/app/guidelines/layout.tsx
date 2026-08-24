"use client";

import { usePathname } from "next/navigation";
import { PortfolioChipFilter } from "@medialane/ui";
import { PageContainer } from "@/components/page-container";

const GUIDELINES_NAV = [
  { label: "Overview",         href: "/guidelines" },
  { label: "Community",        href: "/guidelines/community" },
  { label: "User Guidelines",  href: "/guidelines/user-guidelines" },
  { label: "Terms of Use",     href: "/guidelines/terms" },
  { label: "Privacy Policy",   href: "/guidelines/privacy" },
  { label: "Campaign Terms",   href: "/guidelines/campaign-terms" },
  { label: "Compliance",       href: "/guidelines/compliance" },
];

export default function GuidelinesLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <PageContainer width="wide" className="pb-16">
      <div className="pb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-2">Policies</p>
        <h1 className="text-2xl font-bold">Guidelines</h1>
        <p className="text-muted-foreground mt-1 text-sm max-w-xl">
          Community standards, user policies, legal documents, and compliance guidelines.
        </p>
      </div>

      <div className="py-4">
        <PortfolioChipFilter
          options={GUIDELINES_NAV.map((item) => ({ key: item.href, href: item.href, label: item.label }))}
          value={pathname}
          onChange={() => {}}
          showAll={false}
        />
      </div>

      <div className="pt-2">{children}</div>
    </PageContainer>
  );
}
