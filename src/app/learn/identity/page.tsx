import type { Metadata } from "next";
import Link from "next/link";
import { Key, Star, User, Shield, Eye, Bot, Mail } from "lucide-react";
import { Section } from "@/components/docs";

export const metadata: Metadata = {
  alternates: { canonical: "https://docs.medialane.io/learn/identity" },
  title: "Identity | Learn | Medialane",
  description: "How identity works on Medialane: Wallet, Account, and Profile, accounts per app, signing in with a wallet or an email code, wallets set up for you by a business, and AI agent accounts.",
  openGraph: {
    title: "Identity | Learn | Medialane",
    description: "How identity works on Medialane: Wallet, Account, and Profile, accounts per app, signing in with a wallet or an email code, wallets set up for you by a business, and AI agent accounts.",
    url: "https://docs.medialane.io/learn/identity",
  },
  twitter: {
    title: "Identity | Learn | Medialane",
    description: "How identity works on Medialane: Wallet, Account, and Profile, accounts per app, signing in with a wallet or an email code, wallets set up for you by a business, and AI agent accounts.",
  },
};

const FACETS = [
  {
    label: "Wallet",
    icon: Key,
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
    border: "border-brand-purple/20",
    def: "The cryptographic key. The only thing that signs transactions. Your wallet is your proof of identity on-chain, standing in for a username and password, with account recovery handled by the wallet itself, not Medialane.",
    note: "Self-custody: your keys, your assets. Medialane cannot recover a lost wallet.",
  },
  {
    label: "Account",
    icon: Star,
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/20",
    def: "The logical actor: your own stable identity, distinct from any wallet address. Wallets, social/email logins, and agent keys all attach to it; none of them is the account, and an account does not require a wallet at all (a social-login user with no wallet is still a first-class account). It aggregates the work you have created, assets you have collected, and credentials you have earned across every wallet or login attached to it. Each app you sign up with gives you an account in that app.",
    note: "A wallet declares it belongs to an account via a signed statement; the account can rotate or add wallets without losing its history.",
  },
  {
    label: "Profile",
    icon: User,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    border: "border-brand-orange/20",
    def: "Your public face. Name, bio, avatar, social handles. This is off-chain enrichment: editable, optional, separate from your protocol identity. Losing your profile loses nothing protocol-critical.",
    note: "Profiles are platform state, not protocol state. They make you discoverable. They do not define what you own.",
  },
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
                <p className="text-base text-muted-foreground leading-relaxed">{def}</p>
                <div className="border-t border-border/40 pt-2">
                  <p className="text-base text-muted-foreground italic">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Accounts per app">
          <p>
            An account is not defined by a wallet, an email or an app. When you sign up
            with an app, that registration is your account in that app; signing up with
            another app gives you a separate account there, even with the same email or
            wallet. Every account is the same kind of thing: there are no account types
            or roles.
          </p>
          <p>
            Being a creator or a collector is something you do, not a label on your
            account: what you have created or collected is read from the chain. Medialane
            is permissionless: anyone with a wallet can mint, list, or transfer.
          </p>
        </Section>

        <Section title="Authentication vs. Authorization">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bento-cell border border-brand-blue/20 p-5 space-y-2">
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4 text-brand-blue" />
                <p className="font-bold text-foreground text-base">Authentication</p>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                Proving who you are. You sign in with your wallet, SIWS (Sign In With
                Starknet): you sign a message (unlocked by your device passkey) and the
                API verifies the signature. Or you sign in with your email: a 6-digit code
                sent to your inbox. No password or third-party identity provider is
                involved anywhere on the platform.
              </p>
            </div>
            <div className="bento-cell border border-brand-purple/20 p-5 space-y-2">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-brand-purple" />
                <p className="font-bold text-foreground text-base">Authorization</p>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                Proving what you can do. Authorization is determined by on-chain state:
                what assets you hold, what contracts record about your wallet. Medialane does
                not grant permissions. The contract is the authority.
              </p>
            </div>
          </div>
          <p className="text-base">
            These are separate concerns. Authentication identifies you. Authorization
            checks the chain. Medialane can verify who you are without controlling
            what you can do.
          </p>
        </Section>

        <Section title="Email sign-in">
          <p>
            When you sign up with an email, a short code sent to your inbox confirms the
            address is yours. Nothing else on the platform waits on it: holding assets,
            sending and receiving, browsing and listing are open to every account.
          </p>
          <div className="bento-cell border border-brand-orange/20 p-5 space-y-2">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand-orange" />
              <p className="font-bold text-foreground text-base">A wallet set up for you</p>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              A business can send you a ticket, a membership or any other asset before you
              have signed up: Medialane creates a wallet for your email and the assets go
              there. When you sign in with that email and confirm the code, the wallet is
              handed over to your own key, so it is fully yours. If you already have a
              wallet, new assets simply arrive in it.
            </p>
          </div>
        </Section>

        <Section title="AI Agents">
          <div className="bento-cell border border-brand-rose/20 bg-brand-rose/5 p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-brand-rose" />
              <p className="font-bold text-foreground">First-class accounts</p>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              An AI agent&apos;s wallet is a first-class Medialane account. The contracts make
              no distinction between a human signing a transaction and an agent doing the same.
              Same API surface. Same fee model. Same protocol capabilities.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
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
