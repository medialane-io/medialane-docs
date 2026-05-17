import type { Metadata } from "next";
import Link from "next/link";
import { Coins, ExternalLink, Landmark, Repeat2, ShieldCheck, Zap } from "lucide-react";
import { CANONICAL } from "@/lib/canonical";

export const metadata: Metadata = {
  title: "Fees & Revenue | Medialane Docs",
  description: "Canonical guide to Medialane fees, gas sponsorship, marketplace revenue, DAO treasury flow, and Creator's Airdrop governance.",
  openGraph: {
    title: "Fees & Revenue | Medialane Docs",
    description: "Canonical guide to Medialane fees, gas sponsorship, marketplace revenue, DAO treasury flow, and Creator's Airdrop governance.",
    url: "https://docs.medialane.io/docs/fees",
  },
  twitter: {
    title: "Fees & Revenue | Medialane Docs",
    description: "Canonical guide to Medialane fees, gas sponsorship, marketplace revenue, DAO treasury flow, and Creator's Airdrop governance.",
  },
};

const FREE_ACTIONS = [
  "Create an account",
  "Mint an IP asset",
  "Create an ERC-721 collection",
  "Create an ERC-1155 edition collection",
  "List an asset for sale",
  "Make or cancel an offer",
  "Claim eligible POP credentials",
];

const PAID_ACTIONS = [
  {
    action: "Buy or sell through the marketplace",
    cost: "1% marketplace fee on completed sales",
    note: "The fee flows to the Medialane DAO treasury.",
  },
  {
    action: "Creator royalties",
    cost: "Set by the creator at mint time",
    note: "Royalty terms are defined in the asset metadata. The 1% marketplace fee is the only fee the marketplace contract itself applies — royalty amounts are set by creators as metadata, not automatically extracted by the contract.",
  },
  {
    action: "Remix or license fee",
    cost: "Set by the original creator when applicable",
    note: "Some licenses are free; custom commercial or derivative rights may require payment.",
  },
  {
    action: "Network gas",
    cost: "Usually sponsored for creator actions",
    note: "Gas sponsorship can vary by action, campaign, abuse controls, or future DAO-approved policy.",
  },
];

const REVENUE_OPTIONS = [
  CANONICAL.creatorAirdropName,
  "Token buyback",
  "Token burn",
  "Protocol development",
  "Operations",
  "Grants or other approved DAO initiatives",
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export default function FeesPage() {
  return (
    <div className="space-y-10 max-w-4xl">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Coins className="h-5 w-5 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">Canonical Reference</span>
        </div>
        <h2 className="text-2xl font-bold">Fees & Revenue</h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
          Medialane is designed so creators can start without gas or platform fees.
          Revenue is generated when value moves through marketplace sales, then governed by
          Medialane DAO members through MDLN voting.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { icon: Zap, label: "Creator actions", value: "Gas sponsored", desc: "Most creation and listing actions require no ETH or STRK from users." },
          { icon: Coins, label: "Marketplace fee", value: CANONICAL.marketplaceFee, desc: "Applied to completed marketplace sales and routed to the DAO treasury." },
          { icon: Landmark, label: "Allocation", value: "DAO vote", desc: "MDLN holders decide how treasury revenue is used." },
        ].map(({ icon: Icon, label, value, desc }) => (
          <div key={label} className="bento-cell p-5 space-y-2">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <p className="text-xs text-muted-foreground">{label}</p>
            <p className="text-2xl font-black">{value}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      <Section title="Free Or Sponsored Actions">
        <p>
          The following actions are intended to be free to use from the product interface, with
          gas sponsored for normal creator and collector workflows:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {FREE_ACTIONS.map((action) => (
            <div key={action} className="bento-cell px-4 py-3 flex items-start gap-3">
              <ShieldCheck className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-foreground">{action}</p>
            </div>
          ))}
        </div>
        <p className="text-sm">
          Sponsorship is not a promise that every possible transaction is always free. Abuse controls,
          unsupported flows, future DAO policy, or direct contract interactions may require users to
          pay Starknet gas.
        </p>
      </Section>

      <Section title="Paid Actions And Revenue Flows">
        <div className="space-y-2">
          {PAID_ACTIONS.map(({ action, cost, note }) => (
            <div key={action} className="bento-cell p-4 grid gap-2 sm:grid-cols-[1fr_220px]">
              <div className="space-y-1">
                <p className="text-sm font-semibold text-foreground">{action}</p>
                <p className="text-xs text-muted-foreground">{note}</p>
              </div>
              <p className="text-sm font-mono text-primary sm:text-right">{cost}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Marketplace Fee">
        <p>
          Medialane charges a <strong className="text-foreground">{CANONICAL.marketplaceFee} marketplace fee</strong> on
          completed marketplace sales. The fee is separate from creator royalties and flows to the
          Medialane DAO treasury.
        </p>
        <p>
          Example: if an asset sells for 100 USDC, the marketplace fee is 1 USDC. Creator royalties,
          if configured, are applied separately according to the asset&apos;s royalty rules.
        </p>
        <p className="text-sm">
          This fee is a platform-layer parameter — it is part of how Medialane operates as a service,
          not a constant of the underlying protocol. The contracts enforce it; the DAO governs the
          rate and treasury allocation.
        </p>
      </Section>

      <Section title="Royalties">
        <p>
          Creators set royalty terms in asset metadata at mint time. These terms are readable by any
          marketplace, application, or agent — but the Medialane marketplace contract does not
          automatically extract or route royalties. The only fee the contract applies is the{" "}
          {CANONICAL.marketplaceFee} marketplace fee to the DAO treasury.
        </p>
        <p>
          Royalty terms are separate from the marketplace fee and do not mean the same thing. Whether
          a given secondary sale honors creator royalties depends on the marketplace facilitating the
          sale and the terms agreed to by the parties involved.
        </p>
      </Section>

      <Section title="DAO Treasury Allocation">
        <p>
          Treasury revenue is community-governed. MDLN holders vote through Snapshot at{" "}
          <a href={CANONICAL.snapshotUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            {CANONICAL.snapshotEns} <ExternalLink className="inline h-3 w-3" />
          </a>{" "}
          to decide how revenue should be used.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {REVENUE_OPTIONS.map((option) => (
            <div key={option} className="bento-cell px-4 py-3 flex items-start gap-3">
              <Repeat2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-foreground">{option}</p>
            </div>
          ))}
        </div>
        <p>
          The <Link href="/dao/airdrop" className="text-primary hover:underline">{CANONICAL.creatorAirdropName}</Link>{" "}
          is one possible allocation. It is not automatic, guaranteed, or pre-funded outside DAO approval.
        </p>
      </Section>

      <div className="bento-cell p-5 text-sm text-muted-foreground leading-relaxed">
        For canonical DAO, MDLN, treasury, and governance records, use{" "}
        <a href={CANONICAL.daoUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
          medialane.org <ExternalLink className="inline h-3 w-3" />
        </a>.
        For product workflows, continue with{" "}
        <Link href="/learn/marketplace" className="text-primary hover:underline">Marketplace</Link>,{" "}
        <Link href="/learn/creator-launchpad" className="text-primary hover:underline">Creator Launchpad</Link>, or{" "}
        <Link href="/docs/developers" className="text-primary hover:underline">Developer Docs</Link>.
      </div>
    </div>
  );
}
