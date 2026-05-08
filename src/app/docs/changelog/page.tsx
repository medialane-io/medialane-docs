import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, History } from "lucide-react";

export const metadata: Metadata = {
  title: "Changelog | Medialane Docs",
  description: "Protocol, SDK, API, governance, and documentation changes that affect Medialane users and builders.",
  openGraph: {
    title: "Changelog | Medialane Docs",
    description: "Protocol, SDK, API, governance, and documentation changes that affect Medialane users and builders.",
    url: "https://docs.medialane.io/docs/changelog",
  },
  twitter: {
    title: "Changelog | Medialane Docs",
    description: "Protocol, SDK, API, governance, and documentation changes that affect Medialane users and builders.",
  },
};

const CHANGES = [
  {
    date: "2026-05-05",
    title: "Docs and DAO content aligned",
    items: [
      "Updated docs to treat medialane.org as the canonical source for DAO, MDLN, treasury, Snapshot, and constitution facts.",
      "Aligned MDLN copy with the live fixed 21,000,000 supply and DAO-controlled distribution model.",
      "Clarified that the 1% marketplace fee flows to the DAO treasury and that Creator's Airdrop allocations require MDLN holder approval.",
      "Replaced stale API examples with https://api.medialane.io.",
      "Updated protocol docs to reference current marketplace v2, POP, and Drop factory addresses.",
      "Reinforced the platform positioning: creator capital markets, not generic IP/NFT marketplace framing.",
    ],
  },
  {
    date: "2026-05-01",
    title: "Creator's Airdrop governance model",
    items: [
      "Creator's Airdrop documented as a DAO-governed allocation option.",
      "Participation tiers and milestone cycles documented for future DAO-approved distributions.",
      "Revenue allocation language updated to avoid implying automatic payouts.",
    ],
  },
  {
    date: "2026-04-07",
    title: "Medialane DAO constitution ratified",
    items: [
      "Medialane DAO constitution and governance charter ratified.",
      "Snapshot governance identified as medialane.eth.",
      "DAO hub established at medialane.org for canonical governance and MDLN information.",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <div className="space-y-10 max-w-3xl">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <History className="h-5 w-5 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">Changelog</span>
        </div>
        <h2 className="text-2xl font-bold">Documentation Changelog</h2>
        <p className="text-muted-foreground leading-relaxed">
          High-signal changes that affect how users, builders, and DAO members understand Medialane.
          For canonical DAO and token records, use{" "}
          <a href="https://medialane.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            medialane.org <ExternalLink className="inline h-3 w-3" />
          </a>.
        </p>
      </div>

      <div className="space-y-5">
        {CHANGES.map(({ date, title, items }) => (
          <div key={`${date}-${title}`} className="bento-cell p-5 space-y-3">
            <div className="space-y-1">
              <p className="text-xs font-mono text-primary/70">{date}</p>
              <h3 className="font-semibold">{title}</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              {items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bento-cell p-5 text-sm text-muted-foreground leading-relaxed">
        Planned next: task-first quickstarts, canonical fees documentation, deeper contract references,
        SDK/API examples, security evidence, and troubleshooting guides. See the implementation plan in{" "}
        <Link href="/docs" className="text-primary hover:underline">Docs</Link> for current ownership boundaries.
      </div>
    </div>
  );
}
