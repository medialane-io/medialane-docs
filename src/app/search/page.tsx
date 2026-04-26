import type { Metadata } from "next";
import { Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Search",
  description: "Search the Medialane knowledge hub.",
  robots: { index: false },
};

export default function SearchPage() {
  return (
    <div className="container mx-auto px-4 pt-14 pb-8 max-w-3xl space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-primary">
          <Search className="h-5 w-5" />
          <span className="text-sm font-semibold uppercase tracking-wider">Search</span>
        </div>
        <h1 className="text-3xl font-bold">Search</h1>
        <p className="text-muted-foreground">
          Use the navigation sidebar to browse Learn, Docs, Support, and About sections.
          Full-text search coming soon.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
        {[
          { href: "/learn", label: "Learn", desc: "Education & guides" },
          { href: "/docs", label: "Docs", desc: "Technical documentation" },
          { href: "/support", label: "Support", desc: "FAQ & help" },
          { href: "/about", label: "About", desc: "Mission & team" },
        ].map(({ href, label, desc }) => (
          <a
            key={href}
            href={href}
            className="bento-cell p-4 hover:border-primary/30 transition-colors"
          >
            <p className="font-semibold text-sm">{label}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
