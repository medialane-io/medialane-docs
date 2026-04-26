"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const DOCS_NAV = [
  { label: "Overview",   href: "/docs" },
  { label: "Protocol",   href: "/docs/protocol" },
  { label: "SDK",        href: "/docs/sdk" },
  { label: "API Docs",   href: "/docs/api" },
  { label: "Contracts",  href: "/docs/contracts" },
  { label: "Developers", href: "/docs/developers" },
  { label: "Security",   href: "/docs/security" },
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="container mx-auto px-4 pt-12 pb-16 max-w-6xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Docs</h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Technical documentation for the Medialane platform, protocol, SDK, and API.
        </p>
      </div>

      <nav className="overflow-x-auto scrollbar-hide -mx-4 px-4 border-b border-border/60">
        <div className="flex items-center gap-0 min-w-max">
          {DOCS_NAV.map((item) => {
            const active =
              item.href === "/docs"
                ? pathname === "/docs"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2.5 text-sm whitespace-nowrap transition-colors border-b-2 -mb-px",
                  active
                    ? "text-foreground font-medium border-primary"
                    : "text-muted-foreground hover:text-foreground border-transparent"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      <div>{children}</div>
    </div>
  );
}
