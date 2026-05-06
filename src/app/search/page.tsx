import type { Metadata } from "next";
import Link from "next/link";
import { Search, LifeBuoy, ExternalLink } from "lucide-react";
import { EXTERNAL_LINKS, KNOWLEDGE_GROUPS } from "@/lib/docs-nav";
import { LinkCard } from "@/components/ui/link-card";

export const metadata: Metadata = {
  title: "Knowledge Index",
  description: "Find Medialane docs, guides, support, governance summaries, and canonical external sources.",
  robots: { index: false },
};

export default function SearchPage() {
  return (
    <div className="container mx-auto px-4 pt-14 pb-16 max-w-5xl space-y-10">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-primary">
          <Search className="h-5 w-5" />
          <span className="text-sm font-semibold uppercase tracking-wider">Knowledge Index</span>
        </div>
        <h1 className="text-3xl font-bold">Find what you need</h1>
        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          Browse the current knowledge hub by topic. Product education lives here;
          DAO, MDLN, treasury, and canonical governance records live at medialane.org.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {EXTERNAL_LINKS.map(({ href, label, desc, icon }) => (
          <LinkCard key={href} href={href} title={label} description={desc} icon={icon} external compact />
        ))}
      </div>

      <div className="space-y-8">
        {KNOWLEDGE_GROUPS.map(({ title, icon: Icon, links }) => (
          <section key={title} className="space-y-3">
            <div className="flex items-center gap-2">
              <Icon className="h-4 w-4 text-primary" />
              <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">{title}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {links.map(({ href, label, desc }) => (
                <LinkCard key={href} href={href} title={label} description={desc} compact />
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="bento-cell p-5 flex items-start gap-3">
        <LifeBuoy className="h-5 w-5 text-primary shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="text-sm font-semibold">Still looking?</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Start with <Link href="/support" className="text-primary hover:underline">Support</Link> or{" "}
            <Link href="/contact" className="text-primary hover:underline">Contact</Link> and include any wallet address,
            transaction hash, collection address, token ID, or order hash relevant to your question.
          </p>
        </div>
      </div>
    </div>
  );
}
