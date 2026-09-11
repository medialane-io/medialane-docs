import type { Metadata } from "next";
import Link from "next/link";
import { Coins, Vote, Lock, Users, TrendingUp, Gift, Zap } from "lucide-react";
import { CANONICAL } from "@/lib/canonical";

export const metadata: Metadata = {
  alternates: { canonical: "https://docs.medialane.io/dao/token" },
  title: "MDLN Token | Medialane DAO",
  description: "The MDLN governance token: fixed supply, DAO treasury, voting rights, and participation for Medialane DAO members.",
  openGraph: {
    title: "MDLN Token | Medialane DAO",
    description: "The MDLN governance token: fixed supply, DAO treasury, voting rights, and participation for Medialane DAO members.",
    url: "https://docs.medialane.io/dao/token",
  },
  twitter: {
    title: "MDLN Token | Medialane DAO",
    description: "The MDLN governance token: fixed supply, DAO treasury, voting rights, and participation for Medialane DAO members.",
  },
};

const UTILITIES = [
  {
    icon: Vote,
    title: "Governance Voting",
    description: "MDLN holders vote on protocol upgrades, treasury allocations, community initiatives, and governance rule changes. One token equals one vote.",
  },
  {
    icon: Users,
    title: "Delegation",
    description: "Token holders can delegate their voting power to trusted community members who participate actively in governance on their behalf.",
  },
  {
    icon: Gift,
    title: "Contributor Rewards",
    description: "Contributors, creators, and active community members may receive grants or rewards when approved through DAO governance.",
  },
  {
    icon: Lock,
    title: "Membership Tiers",
    description: "MDLN holdings define DAO participation tiers: Observer, Contributor, and Guardian.",
  },
  {
    icon: Zap,
    title: "Platform Multiplier",
    description: "MDLN holders receive more credits for what they deposit: 1.2× at 100,000 MDLN, 1.5× at 200,000, and 2× at 500,000. Autonomous AI agents holding MDLN benefit on equal terms.",
  },
  {
    icon: TrendingUp,
    title: "Creators Fund Governance",
    description: `The ${CANONICAL.marketplaceFee} marketplace fee flows to the creators fund at the platform layer, funding the ${CANONICAL.creatorAirdropName} for year one. From year two, MDLN holders vote annually on allocation: ${CANONICAL.creatorAirdropName}, buyback, burn, development, or operations.`,
  },
];

const DISTRIBUTION = [
  { category: "Vested DAO Treasury", pct: "90%", desc: "18,900,000 MDLN time-locked for 9 years, releasing 2,100,000 MDLN per year to the DAO treasury." },
  { category: "Operational Runway", pct: "10%", desc: "2,100,000 MDLN available for protocol operations through the DAO treasury." },
  { category: "VC Allocation", pct: "0%", desc: "No venture capital allocation, no private sale, and no preferential investor tranche." },
  { category: "Team Allocation", pct: "0%", desc: "No separate founder or team allocation outside DAO-governed treasury operations." },
];

const PLATFORM_MULTIPLIER_TIERS = [
  { label: "Base",    mdln: "0 MDLN",       mult: "1×",   rate: "$0.010 / credit" },
  { label: "Starter", mdln: "100,000 MDLN", mult: "1.2×", rate: "$0.0083 / credit" },
  { label: "Builder", mdln: "200,000 MDLN", mult: "1.5×", rate: "$0.0067 / credit" },
  { label: "Pro",     mdln: "500,000 MDLN", mult: "2×",   rate: "$0.0050 / credit" },
];

const MEMBERSHIP_TIERS = [
  { tier: "Observer", requirement: "1+ MDLN", rights: "View proposals and join community discussions." },
  { tier: "Contributor", requirement: "100+ MDLN", rights: "Vote on Snapshot and submit governance proposals." },
  { tier: "Guardian", requirement: "1,000+ MDLN", rights: "Council nomination and working group leadership." },
];

export default function TokenPage() {
  return (
    <div className="space-y-12">

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Coins className="h-5 w-5 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">Governance Token</span>
        </div>
        <h2 className="text-2xl font-bold">MDLN Token</h2>
        <p className="text-muted-foreground leading-relaxed">
          MDLN is the governance token of Medialane DAO. Holders vote directly on platform
          decisions: treasury allocations, protocol changes, community initiatives, and governance rules.
        </p>
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            Live on Ethereum &amp; Starknet
          </span>
          <span className="text-xs text-muted-foreground">Bridged via StarkGate · Liquidity pool on Ekubo</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "Ticker",     value: "MDLN" },
          { label: "Ethereum",   value: "ERC-20" },
          { label: "Starknet",   value: "ERC-20 (StarkGate)" },
          { label: "Max Supply", value: CANONICAL.mdln.totalSupply },
        ].map(({ label, value }) => (
          <div key={label} className="bento-cell px-4 py-3 space-y-1">
            <p className="text-base text-muted-foreground">{label}</p>
            <p className="font-semibold text-base">{value}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Token Utility</h3>
        <div className="space-y-3">
          {UTILITIES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bento-cell p-5 flex items-start gap-4">
              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-base">{title}</h4>
                <p className="text-base text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Token Distribution</h3>
        <p className="text-base text-muted-foreground">MDLN has a fixed {CANONICAL.mdln.totalSupply} token supply. 100% is DAO-controlled, with no VC allocation, no team allocation, and no insider pre-mine.</p>
        <div className="space-y-2">
          {DISTRIBUTION.map(({ category, pct, desc }) => (
            <div key={category} className="bento-cell p-4 flex items-start gap-4">
              <span className="text-sm font-bold text-primary shrink-0 w-12">{pct}</span>
              <div className="space-y-0.5">
                <p className="text-base font-semibold">{category}</p>
                <p className="text-base text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Membership Tiers</h3>
        <div className="space-y-2">
          {MEMBERSHIP_TIERS.map(({ tier, requirement, rights }) => (
            <div key={tier} className="bento-cell p-4 flex items-start gap-4">
              <span className="text-xs font-mono text-primary shrink-0 w-20">{requirement}</span>
              <div className="space-y-0.5">
                <p className="text-base font-semibold">{tier}</p>
                <p className="text-base text-muted-foreground">{rights}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Developer Portal Multiplier</h3>
        <p className="text-base text-muted-foreground leading-relaxed">
          MDLN holders receive more credits for the same deposit. The multiplier applies
          the moment credits are added in the{" "}
          <a href="https://portal.medialane.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            developer portal
          </a>. The multiplier applies equally to human developers and autonomous AI agents.
        </p>
        <div className="space-y-2">
          {PLATFORM_MULTIPLIER_TIERS.map(({ label, mdln, mult, rate }) => (
            <div key={label} className="bento-cell px-4 py-3 flex items-center gap-4 flex-wrap text-sm">
              <span className="font-semibold w-16 shrink-0">{label}</span>
              <span className="text-muted-foreground font-mono flex-1">{mdln}</span>
              <span className="font-bold font-mono text-primary">{mult}</span>
              <span className="text-xs text-muted-foreground w-32 text-right">{rate}</span>
            </div>
          ))}
        </div>
        <p className="text-base text-muted-foreground">
          Your MDLN balance on Starknet is read on-chain each time credits are added, so a
          larger balance applies to your next deposit with nothing to lock up or stake.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Ethereum Deployment &amp; StarkGate Bridge</h3>
        <p className="text-base text-muted-foreground leading-relaxed">
          MDLN is deployed on Ethereum mainnet as an ERC-20 token and bridgeable to Starknet
          via StarkGate, the same model used by the STRK token. Ethereum was chosen for the
          DAO&apos;s primary token deployment because of its security, deep liquidity, and the
          maturity of its governance tooling.
        </p>
        <div className="space-y-2">
          {[
            { label: "Ethereum", desc: "Primary deployment. ERC-20. Where MDLN is minted, held, and voted with on Snapshot." },
            { label: "StarkGate bridge", desc: "The canonical bridge between Ethereum and Starknet, the same infrastructure used by the Starknet Foundation for STRK. Trustless, no custodian." },
            { label: "Starknet", desc: "Bridged MDLN (ERC-20) for use in developer portal multipliers, on-chain tooling, and future protocol integrations." },
            { label: "Ekubo", desc: "Liquidity pool on Starknet. Bridged MDLN is tradeable onchain without returning to Ethereum." },
          ].map(({ label, desc }) => (
            <div key={label} className="bento-cell px-4 py-3 space-y-1">
              <p className="text-base font-semibold text-foreground">{label}</p>
              <p className="text-base text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <p className="text-base text-muted-foreground">
          The Medialane protocol runs on Starknet. The DAO is anchored on Ethereum for security
          and liquidity. Censorship resistance comes from Starknet&apos;s ZK proofs and account
          abstraction, with immutable contracts that no party can alter.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">{CANONICAL.creatorAirdropName}</h3>
        <p className="text-base text-muted-foreground leading-relaxed">
          A {CANONICAL.marketplaceFee} marketplace fee flows to the creators fund at the platform layer.
          For year one, {CANONICAL.creatorAirdropWindow}, that revenue routes automatically to the{" "}
          {CANONICAL.creatorAirdropName}, already the DAO&apos;s adopted arrangement. From year two, MDLN
          holders vote annually on Snapshot to decide how revenue is used: {CANONICAL.creatorAirdropName},
          token buyback, token burn, protocol development, or operations.
          See <Link href="/dev/fees" className="text-primary hover:underline">Fees &amp; Revenue</Link>{" "}
          for the canonical breakdown.
        </p>
        <div className="space-y-3">
          {[
            {
              phase: `${CANONICAL.creatorAirdropName} (year one)`,
              trigger: CANONICAL.creatorAirdropWindow,
              desc: "The marketplace fee routes automatically to the creators fund, airdropped to participants as it accrues. This is the operative arrangement now, not pending a vote.",
            },
            {
              phase: "Annual cycle",
              trigger: "From year two onward",
              desc: `Each year after the campaign, DAO members vote on Snapshot on whether revenue funds the ${CANONICAL.creatorAirdropName}, buyback, burn, development, operations, or another approved use.`,
            },
          ].map(({ phase, trigger, desc }) => (
            <div key={phase} className="bento-cell p-5 space-y-2">
              <div className="flex items-start justify-between gap-3">
                <p className="font-semibold text-base">{phase}</p>
                <span className="text-xs text-muted-foreground shrink-0">{trigger}</span>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bento-cell p-5 text-sm text-muted-foreground leading-relaxed space-y-2">
        <p className="font-semibold text-foreground text-base">Disclaimer</p>
        <p>
          MDLN is a governance token intended for participation in Medialane DAO governance. It is not
          intended to be an investment or security. Token holders should understand applicable regulations
          in their jurisdiction. This page does not constitute financial or legal advice.
        </p>
      </div>

    </div>
  );
}
