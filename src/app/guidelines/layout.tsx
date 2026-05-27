"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
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
      <div className="pb-6 border-b border-border/50">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-2">Policies</p>
        <h1 className="text-2xl font-bold">Guidelines</h1>
        <p className="text-muted-foreground mt-1 text-sm max-w-xl">
          Community standards, user policies, legal documents, and compliance guidelines.
        </p>
      </div>

      <nav className="overflow-x-auto scrollbar-hide py-4">
        <div className="flex items-center gap-1.5 min-w-max">
          {GUIDELINES_NAV.map((item) => {
            const active =
              item.href === "/guidelines"
                ? pathname === "/guidelines"
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

      <div className="pt-2">{children}</div>
    </PageContainer>
  );
}
