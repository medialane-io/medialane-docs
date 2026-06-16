import type { Metadata } from "next";
import Link from "next/link";
import { Key, Star, User, Shield, Eye, Bot } from "lucide-react";
import { Section } from "@/components/docs";

export const metadata: Metadata = {
  title: "Identity | Learn | Medialane",
  description: "How identity works on Medialane — Wallet, Account, and Profile, roles, authentication vs. authorization, and AI agent accounts.",
  openGraph: {
    title: "Identity | Learn | Medialane",
    description: "How identity works on Medialane — Wallet, Account, and Profile, roles, authentication vs. authorization, and AI agent accounts.",
    url: "https://docs.medialane.io/learn/identity",
  },
  twitter: {
    title: "Identity | Learn | Medialane",
    description: "How identity works on Medialane — Wallet, Account, and Profile, roles, authentication vs. authorization, and AI agent accounts.",
  },
};

const FACETS = [
  {
    label: "Wallet",
    icon: Key,
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
    border: "border-brand-purple/20",
    def: "The cryptographic key. The only thing that signs transactions. Your wallet is your proof of identity on-chain — no username, no password, no account recovery through Medialane.",
    note: "Self-custody: your keys, your assets. Medialane cannot recover a lost wallet.",
  },
  {
    label: "Account",
    icon: Star,
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/20",
    def: "Your on-chain history. Work you have created, assets you have collected, credentials you have earned. Your primary wallet address is your account.",
    note: "Account state is protocol state — it passes the rebuild test. It is your permanent, verifiable on-chain record.",
  },
  {
    label: "Profile",
    icon: User,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    border: "border-brand-orange/20",
    def: "Your public face. Name, bio, avatar, social handles. This is off-chain enrichment — editable, optional, separate from your protocol identity. Losing your profile loses nothing protocol-critical.",
    note: "Profiles are platform state, not protocol state. They make you discoverable. They do not define what you own.",
  },
];

const ROLES = [
  { role: "Creator", desc: "Has deployed at least one collection or minted IP assets. Unlocks creation-focused tools in the app UI." },
  { role: "Collector", desc: "Holds IP assets in their wallet. The default role for anyone purchasing or receiving creative work." },
  { role: "Organization", desc: "A multi-wallet entity — a brand, label, or DAO operating on the platform. Managed through the portal." },
  { role: "Agent", desc: "An AI or automated system operating via the API. Identical protocol capabilities to human accounts." },
];

export default function LearnIdentityPage() {
  return (
    <div className="space-y-10">

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Identity</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Identity on Medialane is three separate things: a wallet that signs, an account
          that holds your on-chain history, and a profile that is your public face.
          Understanding the difference matters.
        </p>
      </div>

      <div className="space-y-8">

        <Section title="Three Separate Things">
          <div className="space-y-3">
            {FACETS.map(({ label, icon: Icon, color, bg, border, def, note }) => (
              <div key={label} className={`bento-cell border ${border} p-5 space-y-3`}>
                <div className="flex items-center gap-3">
                  <div className={`h-9 w-9 rounded-xl ${bg} flex items-center justify-center shrink-0`}>
                    <Icon className={`h-5 w-5 ${color}`} />
                  </div>
                  <p className={`font-bold ${color}`}>{label}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{def}</p>
                <div className="border-t border-border/40 pt-2">
                  <p className="text-xs text-muted-foreground italic">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Roles">
          <p>
            Roles describe what you do on Medialane — not what the protocol allows.
            Medialane is permissionless: anyone with a wallet can mint, list, or transfer.
            Roles gate what the UI surfaces to you, not what the contracts permit.
          </p>
          <div className="space-y-2">
            {ROLES.map(({ role, desc }) => (
              <div key={role} className="bento-cell px-4 py-3 flex items-start gap-3">
                <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded shrink-0 mt-0.5">
                  {role}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Authentication vs. Authorization">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bento-cell border border-brand-blue/20 p-5 space-y-2">
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4 text-brand-blue" />
                <p className="font-bold text-foreground text-sm">Authentication</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Proving who you are. On Medialane, authentication is SIWS — Sign In With
                Starknet. You sign a message with your wallet. The API verifies the signature.
                No password, no email, no third-party identity provider.
              </p>
            </div>
            <div className="bento-cell border border-brand-purple/20 p-5 space-y-2">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-brand-purple" />
                <p className="font-bold text-foreground text-sm">Authorization</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Proving what you can do. Authorization is determined by on-chain state —
                what assets you hold, what contracts record about your wallet. Medialane does
                not grant permissions. The contract is the authority.
              </p>
            </div>
          </div>
          <p className="text-sm">
            These are separate concerns. Authentication identifies you. Authorization
            checks the chain. Medialane can verify who you are without controlling
            what you can do.
          </p>
        </Section>

        <Section title="AI Agents">
          <div className="bento-cell border border-brand-rose/20 bg-brand-rose/5 p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-brand-rose" />
              <p className="font-bold text-foreground">First-class accounts</p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              An AI agent&apos;s wallet is a first-class Medialane account. The contracts make
              no distinction between a human signing a transaction and an agent doing the same.
              Same API surface. Same fee model. Same protocol capabilities.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Agents authenticate with SIWS and use the same REST API as human users.
              The developer portal adds HTTP 402 credit billing for agent-to-agent automation.
              See{" "}
              <Link href="/dev/agents" className="text-primary hover:underline">AI Agents documentation</Link>.
            </p>
          </div>
        </Section>

      </div>
    </div>
  );
}
