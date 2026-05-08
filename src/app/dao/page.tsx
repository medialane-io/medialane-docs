import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Scroll, Vote, Coins, ExternalLink, ArrowRight, Users, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "DAO | Medialane",
  description: "Medialane DAO — community governance, constitution, MDLN token, and the path to full platform autonomy.",
  openGraph: {
    title: "DAO | Medialane",
    description: "Medialane DAO — community governance, constitution, MDLN token, and the path to full platform autonomy.",
    url: "https://docs.medialane.io/dao",
  },
  twitter: {
    title: "DAO | Medialane",
    description: "Medialane DAO — community governance, constitution, MDLN token, and the path to full platform autonomy.",
  },
};

const PILLARS = [
  {
    icon: Scroll,
    title: "Constitution",
    description: "The founding document of Medialane DAO — defining its mission, membership structure, and core values.",
    href: "/dao/constitution",
  },
  {
    icon: Vote,
    title: "Governance Charter",
    description: "The operational rulebook — how proposals are submitted, discussed, voted on, and executed.",
    href: "/dao/governance",
  },
  {
    icon: Coins,
    title: "MDLN Token",
    description: "The governance token powering participation, voting rights, and long-term alignment for community members.",
    href: "/dao/token",
  },
];

export default function DAOPage() {
  return (
    <div className="space-y-12 max-w-4xl">

      {/* Intro */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Building2 className="h-5 w-5 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">Decentralized Autonomous Organization</span>
        </div>
        <h2 className="text-3xl font-bold leading-tight">
          Medialane DAO LLC
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-2xl">
          Medialane DAO is the governance structure for the platform — bridging on-chain token voting
          with community-driven decision making over protocol development, treasury, and the future of
          creator capital markets.
        </p>
      </div>

      {/* Status */}
      <div className="bento-cell p-6 space-y-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <p className="text-sm font-semibold">Status: Live governance</p>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Medialane DAO operates through MDLN token governance. The constitution was ratified on
          April 7, 2026, Snapshot voting is live at medialane.eth, and the MDLN token is active on
          Ethereum mainnet with Starknet bridging through StarkGate.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {[
            { label: "Token", value: "MDLN" },
            { label: "Governance", value: "MDLN + Snapshot" },
          ].map(({ label, value }) => (
            <div key={label} className="bg-muted/30 rounded-lg px-4 py-3 space-y-1">
              <p className="text-xs text-muted-foreground">{label}</p>
              <p className="text-sm font-semibold">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Three pillars */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Governance Documents</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {PILLARS.map(({ icon: Icon, title, description, href }) => (
            <Link
              key={href}
              href={href}
              className="group bento-cell p-5 hover:border-primary/40 transition-colors space-y-3"
            >
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold text-sm">{title}</p>
                  <ArrowRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Vision */}
      <div className="bento-cell p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-primary" />
          <h3 className="font-semibold">Long-Term Vision</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The ultimate goal of Medialane DAO is a platform owned and governed entirely by its community.
          Creators, collectors, developers, and autonomous agents collectively deciding the future of the
          IP economy — through on-chain proposals, transparent voting, and a community treasury that
          funds ecosystem development.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          This isn't just decentralization for its own sake. It's about aligning the incentives of every
          participant: when the community owns the platform, every improvement benefits everyone who
          contributes to it.
        </p>
      </div>

      {/* Participation */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-primary" />
          <h3 className="font-semibold">Participate</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href="https://snapshot.org/#/s:medialane.eth"
            target="_blank"
            rel="noopener noreferrer"
            className="group bento-cell p-4 hover:border-primary/40 transition-colors flex items-center justify-between gap-3"
          >
            <div>
              <p className="font-semibold text-sm">Snapshot Voting</p>
              <p className="text-xs text-muted-foreground mt-0.5">Off-chain governance votes using MDLN</p>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
          </a>
          <a
            href="https://medialane.org"
            target="_blank"
            rel="noopener noreferrer"
            className="group bento-cell p-4 hover:border-primary/40 transition-colors flex items-center justify-between gap-3"
          >
            <div>
              <p className="font-semibold text-sm">DAO Hub</p>
              <p className="text-xs text-muted-foreground mt-0.5">Open medialane.org for live DAO details</p>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
          </a>
        </div>
      </div>

    </div>
  );
}
