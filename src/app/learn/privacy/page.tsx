import type { Metadata } from "next";
import Link from "next/link";
import { Lock, Eye, ShieldCheck, KeyRound, ScrollText, Users } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "https://docs.medialane.io/learn/privacy" },
  title: "Privacy on Medialane | Learn",
  description:
    "Public authorship, private economics: what stays visible on-chain, what a creator can keep confidential, and why.",
  openGraph: {
    title: "Privacy on Medialane | Learn",
    description:
      "Public authorship, private economics: what stays visible on-chain, what a creator can keep confidential, and why.",
    url: "https://docs.medialane.io/learn/privacy",
  },
  twitter: {
    title: "Privacy on Medialane | Learn",
    description:
      "Public authorship, private economics: what stays visible on-chain, what a creator can keep confidential, and why.",
  },
};

const ALWAYS_PUBLIC = [
  { title: "Authorship", desc: "Who created a work, and when: timestamped and Berne-verifiable." },
  { title: "Ownership history", desc: "Every transfer of a Medialane asset is on-chain and traceable." },
  { title: "Trade history", desc: "Listings, offers, and settlements are visible on-chain, which is also what keeps trading honest." },
  { title: "License terms", desc: "What a work permits (commercial use, derivatives, AI training) is metadata anyone can read." },
];

const CREATOR_DECIDES = [
  { title: "Earnings", desc: "What a creator makes from sales, subscriptions, or sponsorships." },
  { title: "Supporters", desc: "Who backs a creator: subscribers, sponsors, club members, attendees." },
  { title: "Negotiations", desc: "Terms under discussion before a deal is final: sponsorship bids, license offers." },
];

export default function LearnPrivacyPage() {
  return (
    <div className="space-y-10 max-w-3xl">

      <div className="space-y-3">
        <span className="pill-badge">Privacy</span>
        <h2 className="text-2xl font-bold">Public Authorship, Private Economics</h2>
        <p className="text-muted-foreground leading-relaxed">
          Medialane is a provenance platform: authorship, ownership, and license terms are the
          product, and they stay public and durable. Privacy on Medialane means something
          narrower and more specific: a creator&apos;s money, audience, and negotiations aren&apos;t
          an open book by default.
        </p>
      </div>

      {/* The two halves */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bento-cell p-6 space-y-3 border border-brand-blue/20">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-brand-blue/10 flex items-center justify-center">
              <Eye className="h-4.5 w-4.5 text-brand-blue" />
            </div>
            <p className="font-black text-brand-blue">Always public</p>
          </div>
          <ul className="space-y-2">
            {ALWAYS_PUBLIC.map(({ title, desc }) => (
              <li key={title} className="text-sm">
                <span className="font-semibold text-foreground">{title}.</span>{" "}
                <span className="text-muted-foreground">{desc}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bento-cell p-6 space-y-3 border border-primary/20">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center">
              <Lock className="h-4.5 w-4.5 text-primary" />
            </div>
            <p className="font-black text-primary">The creator decides</p>
          </div>
          <ul className="space-y-2">
            {CREATOR_DECIDES.map(({ title, desc }) => (
              <li key={title} className="text-sm">
                <span className="font-semibold text-foreground">{title}.</span>{" "}
                <span className="text-muted-foreground">{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Axiom framing */}
      <div className="bento-cell p-6 space-y-3">
        <div className="flex items-center gap-3">
          <ShieldCheck className="h-5 w-5 text-primary" />
          <p className="font-semibold">Information sovereignty, not secrecy</p>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          This is the Integrity Web&apos;s sixth axiom, <em>Privacy is Power</em>: a creator
          retains ownership of their own information, and cryptographic tools protect that
          ownership. Provenance and trade history stay public because that&apos;s what makes
          ownership provable and trading honest. What a creator earns, or who backs them, stays
          theirs to disclose selectively, much like a business can prove a product is real
          without publishing its bank statement.
        </p>
        <Link href="/learn/integrity-web" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
          Read the ten axioms →
        </Link>
      </div>

      {/* Worked example: gated content */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">A live example: token-gated content</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          A creator can attach holder-only content to a collection (a video, a link, a file)
          visible only to wallets that actually hold a token from it. The mechanism separates two
          questions:
        </p>
        <div className="bento-cell p-5 font-mono text-xs space-y-2 text-muted-foreground overflow-x-auto">
          <div><span className="text-primary">1. authenticate</span>: which account is asking? (a platform-layer session)</div>
          <div><span className="text-primary">2. authorize</span>: does that wallet actually hold a token, read live from the contract?</div>
          <div className="pt-1 text-foreground/80">Only a request that passes both receives the content.</div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The balance check reads the contract directly at request time, never a cached database
          value, and the content URL is never included in any public profile response. If someone
          isn&apos;t a current holder, the request is declined regardless of who they claim to be:
          the on-chain state settles it.
        </p>
        <Link href="/dev/api#gated-content" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
          See the gated-content API →
        </Link>
      </div>

      {/* Related */}
      <div className="bento-cell p-6 space-y-3">
        <div className="flex items-center gap-3">
          <KeyRound className="h-5 w-5 text-brand-purple" />
          <p className="font-semibold">Where this is heading</p>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The same split (provable on-chain facts versus information a creator controls) is
          the design basis for confidential creator economics: subscription and sponsorship
          tooling that shows a total raised or a membership count without exposing who paid what.
          Gated content today applies the same idea to access; the underlying primitive
          generalizes to earnings and negotiations as that tooling ships.
        </p>
        <div className="flex flex-wrap gap-4 pt-1">
          <Link href="/learn/zero-knowledge" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
            <ScrollText className="h-3.5 w-3.5" /> Zero-Knowledge Proofs
          </Link>
          <Link href="/learn/identity" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
            <Users className="h-3.5 w-3.5" /> Identity
          </Link>
        </div>
      </div>

    </div>
  );
}
