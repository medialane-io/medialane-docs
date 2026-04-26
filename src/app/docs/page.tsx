import type { Metadata } from "next";
import Link from "next/link";
import { Network, Package, Terminal, FileCode2, Code2, Shield, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Docs | Medialane",
  description: "Technical documentation for the Medialane platform, protocol, SDK, API, contracts, and security.",
};

const SECTIONS = [
  {
    href: "/docs/protocol",
    icon: Network,
    title: "Protocol",
    description: "Technical specification of the Mediolano protocol — onchain IP registration, licensing, events, and data structures.",
  },
  {
    href: "/docs/sdk",
    icon: Package,
    title: "SDK",
    description: "The @medialane/sdk TypeScript package — installation, configuration, asset queries, minting, and marketplace integration.",
  },
  {
    href: "/docs/api",
    icon: Terminal,
    title: "API Reference",
    description: "Full REST API reference — endpoints, authentication, request shapes, rate limits, and response types.",
  },
  {
    href: "/docs/contracts",
    icon: FileCode2,
    title: "Contracts",
    description: "Cairo smart contracts — marketplace, collection registry, POP Protocol, Collection Drop, and royalty enforcement.",
  },
  {
    href: "/docs/developers",
    icon: Code2,
    title: "Developers",
    description: "Integration guides, quickstarts, authentication setup, and code examples for building on top of Medialane.",
  },
  {
    href: "/docs/security",
    icon: Shield,
    title: "Security",
    description: "Defense-in-depth architecture, audit reports, decentralized storage, monitoring, and responsible disclosure.",
  },
];

export default function DocsPage() {
  return (
    <div className="space-y-10">
      <p className="text-muted-foreground leading-relaxed max-w-2xl">
        Everything you need to integrate with Medialane, understand the protocol, or
        build on top of the platform. Select a section to get started.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SECTIONS.map(({ href, icon: Icon, title, description }) => (
          <Link
            key={href}
            href={href}
            className="group bento-cell p-5 hover:border-primary/40 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-1 flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold text-sm">{title}</p>
                  <ArrowRight className="h-4 w-4 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
