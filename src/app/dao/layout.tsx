"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const DAO_NAV = [
  { label: "About DAO",          href: "/dao" },
  { label: "Constitution",       href: "/dao/constitution" },
  { label: "Governance Charter", href: "/dao/governance" },
  { label: "MDLN Token",         href: "/dao/token" },
];

export default function DAOLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="container mx-auto px-4 pt-10 pb-16 max-w-6xl space-y-0">
      <div className="pb-6 border-b border-border/50">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-2">Governance</p>
        <h1 className="text-2xl font-bold">Medialane DAO</h1>
        <p className="text-muted-foreground mt-1 text-sm max-w-xl">
          Community governance, legal foundation, and the path to full platform autonomy.
        </p>
      </div>

      <nav className="overflow-x-auto scrollbar-hide py-4">
        <div className="flex items-center gap-1.5 min-w-max">
          {DAO_NAV.map((item) => {
            const active =
              item.href === "/dao"
                ? pathname === "/dao"
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
    </div>
  );
}
