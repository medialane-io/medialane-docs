import type { Metadata } from "next";
import Link from "next/link";
import { Coins, ExternalLink, Landmark, Repeat2, ShieldCheck, Terminal, Zap } from "lucide-react";
import { CANONICAL } from "@/lib/canonical";
import { Section } from "@/components/docs";
import { PricingTable } from "@/components/docs/pricing-table";

export const metadata: Metadata = {
  alternates: { canonical: "https://docs.medialane.io/dev/fees" },
  title: "Fees & Revenue | Medialane Docs",
  description: "Canonical guide to Medialane fees, gas sponsorship, marketplace revenue, creators-fund flow, and Creator's Airdrop governance.",
  openGraph: {
    title: "Fees & Revenue | Medialane Docs",
    description: "Canonical guide to Medialane fees, gas sponsorship, marketplace revenue, creators-fund flow, and Creator's Airdrop governance.",
    url: "https://docs.medialane.io/dev/fees",
  },
  twitter: {
    title: "Fees & Revenue | Medialane Docs",
    description: "Canonical guide to Medialane fees, gas sponsorship, marketplace revenue, creators-fund flow, and Creator's Airdrop governance.",
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
    note: "The fee flows to the creators fund at the platform layer, never inside the venue contract.",
  },
  {
    action: "Creator royalties",
    cost: "Set by the creator at mint time",
    note: "Creator royalties follow the EIP-2981 standard and are paid on-chain by the marketplace venue at settlement, capped by a royalty limit the seller agrees to when signing. The 1% marketplace fee is separate: it is applied at the platform layer, never inside the venue contract, since the venue protocols themselves are zero-fee.",
  },
  {
    action: "Accept a sponsorship bid or proposal",
    cost: "1% platform fee on settlement",
    note: "Same rate and platform-layer mechanism as the marketplace fee, applied when an IP Sponsorship offer or proposal is accepted, never inside the sponsorship contract, which itself never holds funds.",
  },
  {
    action: "Remix or license fee",
    cost: "Set by the original creator when applicable",
    note: "Some licenses are free; custom commercial or derivative rights may require payment.",
  },
  {
    action: "Network gas",
    cost: "Sponsored on medialane.io; self-funded on the Starknet app",
    note: "On medialane.io, gas sponsorship can still vary by action, campaign, abuse controls, or future DAO-approved policy. On the wallet-sovereign Starknet app, users pay their own gas.",
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

export default function FeesPage() {
  return (
    <div className="space-y-10 max-w-4xl lg:max-w-5xl">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Coins className="h-5 w-5 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">Canonical Reference</span>
        </div>
        <h2 className="text-2xl font-bold">Fees & Revenue</h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
          Medialane is designed so creators can start without gas or platform fees.
          Revenue comes from two places: a share of value moving through marketplace sales,
          and metered API access for developers and agents calling the platform directly.
          Both are governed by Medialane DAO members through MDLN voting.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: Zap, label: "Creator actions", value: "Gas sponsored on io", desc: "On medialane.io, most creation and listing actions require no ETH or STRK. On the Starknet app, users pay their own gas." },
          { icon: Coins, label: "Marketplace fee", value: CANONICAL.marketplaceFee, desc: "Applied to completed marketplace sales at the platform layer and routed to the creators fund." },
          { icon: Terminal, label: "API access", value: "Pay-per-call", desc: "Developers and agents calling the API directly pay in credits (1 credit = $0.01) via x402, with no free tier." },
          { icon: Landmark, label: "Allocation", value: "DAO vote", desc: "MDLN holders decide how creators-fund revenue is used." },
        ].map(({ icon: Icon, label, value, desc }) => (
          <div key={label} className="bento-cell p-5 space-y-2">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <p className="text-base text-muted-foreground">{label}</p>
            <p className="text-2xl font-black">{value}</p>
            <p className="text-base text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      <Section title="Free Or Sponsored Actions">
        <p>
          On <strong className="text-foreground">medialane.io</strong>, the following actions are
          intended to be free to use from the product interface, with gas sponsored for normal
          creator and collector workflows. On the wallet-sovereign Starknet app, users pay their
          own gas for all of these:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {FREE_ACTIONS.map((action) => (
            <div key={action} className="bento-cell px-4 py-3 flex items-start gap-3">
              <ShieldCheck className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <p className="text-base text-foreground">{action}</p>
            </div>
          ))}
        </div>
        <p className="text-base">
          On medialane.io, sponsorship is not a promise that every possible transaction is always
          free. Abuse controls, unsupported flows, or future DAO policy may require users to pay
          Starknet gas there too.
        </p>
      </Section>

      <Section title="API Metering (x402 Credits)">
        <p>
          The two revenue streams above (marketplace fee, gas sponsorship) are about using the{" "}
          <strong className="text-foreground">product</strong>, medialane.io or the Starknet app.
          A creator or collector in either app never sees a credit balance; the app itself holds one.
        </p>
        <p>
          A developer or AI agent calling the <strong className="text-foreground">API directly</strong>{" "}
          is a separate case, priced separately: every metered request costs a small number of credits
          (1 credit = $0.01, paid in USDC via the open x402 standard). There is no free tier; the first
          unfunded call returns a standard <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">402 Payment Required</code> by
          design, and an agent can fund itself and continue automatically.
        </p>
        <PricingTable />
        <p className="text-base">
          Prices are set per action and can change; this table is live, sourced from the same
          endpoint (<code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">GET /v1/pricing</code>)
          every call is actually priced against, never a hand-maintained copy. See{" "}
          <Link href="/dev/agents" className="text-primary hover:underline">AI Agents</Link> for the full
          discovery-and-pay flow, or the <Link href="/dev/api#credits" className="text-primary hover:underline">full API reference</Link>.
        </p>
      </Section>

      <Section title="Paid Actions And Revenue Flows">
        <div className="space-y-2">
          {PAID_ACTIONS.map(({ action, cost, note }) => (
            <div key={action} className="bento-cell p-4 grid gap-2 sm:grid-cols-[1fr_220px]">
              <div className="space-y-1">
                <p className="text-base font-semibold text-foreground">{action}</p>
                <p className="text-base text-muted-foreground">{note}</p>
              </div>
              <p className="text-base font-mono text-primary sm:text-right">{cost}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Marketplace Fee">
        <p>
          Medialane charges a <strong className="text-foreground">{CANONICAL.marketplaceFee} marketplace fee</strong> on
          completed marketplace sales. The fee is separate from creator royalties and flows to the
          creators fund.
        </p>
        <p>
          Example: if an asset sells for 100 USDC, the marketplace fee is 1 USDC. Creator royalties,
          if configured, are applied separately according to the asset&apos;s royalty rules.
        </p>
        <p className="text-base">
          This fee is a platform-layer parameter, never a rule inside the marketplace venue
          contracts, since the venue protocols themselves are zero-fee. It is computed and applied by
          the platform (SDK/backend) as a separate transfer alongside settlement. The DAO governs
          the rate and how the creators fund is allocated.
        </p>
        <p className="text-base">
          The same rate and platform-layer mechanism applies when an{" "}
          <Link href="/learn/ip-sponsorship" className="text-primary hover:underline">IP Sponsorship</Link>{" "}
          offer or proposal is accepted; the sponsorship contract, like the marketplace venues,
          never holds funds or applies a fee itself.
        </p>
      </Section>

      <Section title="Royalties">
        <p>
          Creators set royalty terms in asset metadata at mint time. These terms are readable by any
          marketplace, application, or agent, but the Medialane marketplace contract does not
          automatically extract or route royalties. The only fee applied alongside a sale is the{" "}
          {CANONICAL.marketplaceFee} platform-layer marketplace fee to the creators fund.
        </p>
        <p>
          Royalty terms are separate from the marketplace fee and do not mean the same thing. Whether
          a given secondary sale honors creator royalties depends on the marketplace facilitating the
          sale and the terms agreed to by the parties involved.
        </p>
      </Section>

      <Section title="Creators Fund Allocation">
        <p>
          For year one, {CANONICAL.creatorAirdropWindow}, creators-fund revenue routes automatically to
          the <Link href="/dao/airdrop" className="text-primary hover:underline">{CANONICAL.creatorAirdropName}</Link>,
          already the DAO&apos;s adopted arrangement. From year two, allocation is community-governed:
          MDLN holders vote annually through Snapshot at{" "}
          <a href={CANONICAL.snapshotUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            {CANONICAL.snapshotEns} <ExternalLink className="inline h-3 w-3" />
          </a>{" "}
          on how revenue is used.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {REVENUE_OPTIONS.map((option) => (
            <div key={option} className="bento-cell px-4 py-3 flex items-start gap-3">
              <Repeat2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <p className="text-base text-foreground">{option}</p>
            </div>
          ))}
        </div>
      </Section>

      <div className="bento-cell p-5 text-base text-muted-foreground leading-relaxed">
        For canonical DAO, MDLN, treasury, and governance records, use{" "}
        <a href={CANONICAL.daoUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
          medialane.org <ExternalLink className="inline h-3 w-3" />
        </a>.
        For product workflows, continue with{" "}
        <Link href="/learn/marketplace" className="text-primary hover:underline">Marketplace</Link>,{" "}
        <Link href="/learn/creator-launchpad" className="text-primary hover:underline">Creator Launchpad</Link>, or{" "}
        <Link href="/dev/developers" className="text-primary hover:underline">Developer Docs</Link>.
      </div>
    </div>
  );
}
