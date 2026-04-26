import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Links | Medialane",
  description: "Connect with Medialane — official social media, community channels, and developer resources.",
};

const LINKS = [
  {
    category: "Social",
    items: [
      {
        name: "X (Twitter)",
        handle: "@medialane_io",
        description: "Platform updates, ecosystem news, and community highlights.",
        url: "https://x.com/medialane_io",
        color: "text-foreground",
        bg: "bg-foreground/10 group-hover:bg-foreground/15",
      },
      {
        name: "Telegram",
        handle: "IntegrityWeb",
        description: "Join the Integrity Web community — creators, developers, and collectors.",
        url: "https://t.me/IntegrityWeb",
        color: "text-brand-blue",
        bg: "bg-brand-blue/10 group-hover:bg-brand-blue/15",
      },
    ],
  },
  {
    category: "Content",
    items: [
      {
        name: "YouTube",
        handle: "@medialane",
        description: "Tutorials, platform walkthroughs, and ecosystem interviews.",
        url: "https://youtube.com/@medialane",
        color: "text-brand-rose",
        bg: "bg-brand-rose/10 group-hover:bg-brand-rose/15",
      },
    ],
  },
  {
    category: "Developers",
    items: [
      {
        name: "GitHub — mediolano-app",
        handle: "mediolano-app",
        description: "Open-source contracts, SDK, and protocol repositories.",
        url: "https://github.com/mediolano-app",
        color: "text-foreground",
        bg: "bg-foreground/10 group-hover:bg-foreground/15",
      },
      {
        name: "NPM — @medialane/sdk",
        handle: "@medialane/sdk",
        description: "The official TypeScript SDK for the Medialane platform.",
        url: "https://www.npmjs.com/package/@medialane/sdk",
        color: "text-brand-orange",
        bg: "bg-brand-orange/10 group-hover:bg-brand-orange/15",
      },
    ],
  },
  {
    category: "Governance",
    items: [
      {
        name: "Snapshot",
        handle: "medialane.eth",
        description: "Off-chain governance voting for Medialane DAO proposals.",
        url: "https://snapshot.org/#/medialane.eth",
        color: "text-brand-purple",
        bg: "bg-brand-purple/10 group-hover:bg-brand-purple/15",
      },
    ],
  },
];

export default function LinksPage() {
  return (
    <div className="container mx-auto px-4 pt-12 pb-20 max-w-3xl space-y-14">

      {/* Header */}
      <div className="space-y-4">
        <span className="pill-badge">Community</span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
          Official <span className="gradient-text">Links</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          All official Medialane channels, social profiles, and developer resources in one place.
        </p>
      </div>

      {/* Link groups */}
      <div className="space-y-10">
        {LINKS.map(({ category, items }) => (
          <div key={category} className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{category}</h2>
            <div className="space-y-2">
              {items.map(({ name, handle, description, url, color, bg }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bento-cell p-4 flex items-center gap-4 hover:border-primary/30 transition-colors"
                >
                  <div className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${bg}`}>
                    <ExternalLink className={`h-4 w-4 ${color}`} />
                  </div>
                  <div className="flex-1 min-w-0 space-y-0.5">
                    <p className="font-semibold text-sm">{name}</p>
                    <p className="text-xs text-muted-foreground">{description}</p>
                  </div>
                  <span className={`text-xs font-mono shrink-0 ${color} opacity-70 group-hover:opacity-100 transition-opacity hidden sm:block`}>
                    {handle}
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Warning note */}
      <div className="bento-cell p-4 text-sm text-muted-foreground">
        <strong className="text-foreground">Verify before you click.</strong> Medialane only operates through the links above.
        We will never DM you asking for seed phrases, private keys, or funds. If you receive unsolicited messages claiming to be Medialane, they are scams.
      </div>

    </div>
  );
}
