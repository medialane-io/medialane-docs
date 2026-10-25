import type { Metadata } from "next";
import Link from "next/link";
import { Star, Key, Link2, Globe, Anchor, Eye, Shield, User, Bot } from "lucide-react";
import { Section } from "@/components/docs";

const description =
  "Identity on Medialane is the actor itself, not a wallet or an email: read from the chain, and built to outlive any single chain, app or venue.";

export const metadata: Metadata = {
  alternates: { canonical: "https://docs.medialane.io/learn/identity" },
  title: "Identity | Learn | Medialane",
  description,
  openGraph: {
    title: "Identity | Learn | Medialane",
    description,
    url: "https://docs.medialane.io/learn/identity",
  },
  twitter: {
    title: "Identity | Learn | Medialane",
    description,
  },
};

const WHAT_IT_IS = [
  {
    label: "The actor",
    icon: Star,
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/20",
    def: "An identity is who acts on Medialane. It carries the reputation, the work and the history, and it exists whether or not a wallet or an email is attached to it.",
    note: "People, organizations and AI agents are the same kind of identity. There are no types or roles.",
  },
  {
    label: "Wallets are infrastructure",
    icon: Key,
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
    border: "border-brand-purple/20",
    def: "A wallet is how an identity acts on a chain. It holds the key that signs transactions, and an identity can change wallets without changing who it is.",
    note: "Self-custody: your keys, your assets. Medialane cannot recover a lost wallet.",
  },
  {
    label: "Read from the chain",
    icon: Link2,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    border: "border-brand-orange/20",
    def: "What an identity has created, collected and earned is read from the chain, never from a label or a database row. Authorship, date and license terms are recorded permanently with every asset.",
    note: "The record lives on the chain, not on Medialane's servers.",
  },
];

const BUILT_TO_LAST = [
  {
    label: "Portable across chains",
    icon: Globe,
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/20",
    def: "An actor may hold wallets on several chains. Medialane is built so that signed statements, which anyone can verify, link them to one identity, and reputation stays whole instead of fragmenting per chain.",
    note: "A direction Medialane is building toward.",
  },
  {
    label: "A durable foundation",
    icon: Anchor,
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
    border: "border-brand-purple/20",
    def: "Identity, attestations and proofs are designed to live on Starknet, whose STARK cryptography is post-quantum secure, so they would outlast a break in the signatures other chains rely on.",
    note: "A direction Medialane is building toward.",
  },
];

type Card = (typeof WHAT_IT_IS)[number];

function IdentityCard({ label, icon: Icon, color, bg, border, def, note }: Card) {
  return (
    <div className={`bento-cell border ${border} p-5 space-y-3`}>
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
  );
}

export default function LearnIdentityPage() {
  return (
    <div className="space-y-10">

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Identity</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          An identity is the actor itself: a person, an organization or an AI agent. It is not a
          wallet, an email or a profile. Those are ways to reach it and act for it.
        </p>
      </div>

      <div className="space-y-8">

        <Section title="What identity is">
          <div className="space-y-3">
            {WHAT_IT_IS.map((card) => (
              <IdentityCard key={card.label} {...card} />
            ))}
          </div>
        </Section>

        <Section title="Built to last">
          <p>
            An identity is meant to outlive any single chain, app or venue. A creator&apos;s
            authorship should not depend on where it happens to be listed.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {BUILT_TO_LAST.map((card) => (
              <IdentityCard key={card.label} {...card} />
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
                Proving who is asking, with a wallet signature or by signing in to your
                Medialane account. This is a platform concern, and the protocol does not
                depend on it.
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

        <Section title="Your Medialane account">
          <div className="bento-cell border border-brand-orange/20 p-5 space-y-2">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-brand-orange" />
              <p className="font-bold text-foreground text-base">Where you sign in</p>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              Your Medialane account is where you sign in and keep your credits and, if you like,
              a profile. It makes using Medialane easy, and your identity stays yours on the
              chain either way.
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
