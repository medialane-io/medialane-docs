import type { Metadata } from "next";
import Link from "next/link";
import { Key, Star, User, Shield, Eye, Bot, Mail } from "lucide-react";
import { Section } from "@/components/docs";

export const metadata: Metadata = {
  alternates: { canonical: "https://docs.medialane.io/learn/identity" },
  title: "Identity | Learn | Medialane",
  description: "How identity works on Medialane: your account, signing in with a wallet or an email code, and AI agent accounts.",
  openGraph: {
    title: "Identity | Learn | Medialane",
    description: "How identity works on Medialane: your account, signing in with a wallet or an email code, and AI agent accounts.",
    url: "https://docs.medialane.io/learn/identity",
  },
  twitter: {
    title: "Identity | Learn | Medialane",
    description: "How identity works on Medialane: your account, signing in with a wallet or an email code, and AI agent accounts.",
  },
};

const ITEMS = [
  {
    label: "Account",
    icon: Star,
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/20",
    def: "Your account is you on Medialane. It brings together the work you have created, the assets you have collected and the credentials you have earned, and it is the one thing you sign in to.",
    note: "You sign in with a wallet or with an email.",
  },
  {
    label: "Wallet",
    icon: Key,
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
    border: "border-brand-purple/20",
    def: "A wallet holds the key that signs your transactions, and it is one way to sign in. Nothing happens on your behalf without your signature.",
    note: "Self-custody: your keys, your assets. Medialane cannot recover a lost wallet.",
  },
  {
    label: "Email",
    icon: Mail,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    border: "border-brand-orange/20",
    def: "An email is the other way to sign in. Medialane sends a 6-digit code to your inbox, you enter it, and you are in. There is no password to remember or lose.",
    note: "The code also confirms that the address is yours.",
  },
  {
    label: "Profile",
    icon: User,
    color: "text-brand-rose",
    bg: "bg-brand-rose/10",
    border: "border-brand-rose/20",
    def: "Your name, bio, avatar and social handles. A profile is optional, you can change it any time, and it makes you easier to find.",
    note: "A profile describes you. It does not decide what you own.",
  },
];

export default function LearnIdentityPage() {
  return (
    <div className="space-y-10">

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Identity</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          On Medialane, your identity is your account. It is how you are recognized and how
          you sign in, with a wallet or with an email. Adding a name, bio and avatar is up to you.
        </p>
      </div>

      <div className="space-y-8">

        <Section title="Your account">
          <div className="space-y-3">
            {ITEMS.map(({ label, icon: Icon, color, bg, border, def, note }) => (
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

        <Section title="Authentication vs. Authorization">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bento-cell border border-brand-blue/20 p-5 space-y-2">
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4 text-brand-blue" />
                <p className="font-bold text-foreground text-base">Authentication</p>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                Proving who you are. With a wallet, you sign in with SIWS (Sign In With
                Starknet): you sign a message, unlocked by your device passkey, and the
                API verifies the signature. With an email, you enter the 6-digit code sent
                to your inbox. No password or third-party identity provider is
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
