import type { Metadata } from "next";
import { DOCS_NAV, CANONICAL_SOURCES } from "@/lib/docs-nav";
import { LinkCard } from "@/components/ui/link-card";

export const metadata: Metadata = {
  title: "Docs | Medialane",
  description: "Technical documentation for the Medialane platform, protocol, SDK, API, contracts, and security.",
};

export default function DocsPage() {
  return (
    <div className="space-y-10">
      <p className="text-muted-foreground leading-relaxed max-w-2xl">
        Everything you need to integrate with Medialane, understand the protocol, or
        build on top of the platform. Select a section to get started.
      </p>

      <div className="bento-cell p-5 space-y-4 border-primary/20">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold">Canonical Sources</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Medialane documentation is split by ownership so product guides, DAO facts, contracts,
            and SDK internals do not drift apart.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {CANONICAL_SOURCES.map(({ title, owner, description, href, icon, external }) => (
            <LinkCard
              key={title}
              href={href}
              title={title}
              eyebrow={owner}
              description={description}
              icon={icon}
              external={external}
              compact
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {DOCS_NAV.map(({ href, icon, title, description }) => (
          <LinkCard
            key={href}
            href={href}
            title={title}
            description={description}
            icon={icon}
            showArrow
          />
        ))}
      </div>
    </div>
  );
}
