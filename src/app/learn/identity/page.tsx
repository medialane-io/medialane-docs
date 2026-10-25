import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/docs";

export const metadata: Metadata = {
  alternates: { canonical: "https://docs.medialane.io/learn/identity" },
  title: "Identity | Learn | Medialane",
  description: "How identity works on Medialane: your account, and signing in with a wallet or an email code.",
  openGraph: {
    title: "Identity | Learn | Medialane",
    description: "How identity works on Medialane: your account, and signing in with a wallet or an email code.",
    url: "https://docs.medialane.io/learn/identity",
  },
  twitter: {
    title: "Identity | Learn | Medialane",
    description: "How identity works on Medialane: your account, and signing in with a wallet or an email code.",
  },
};

export default function LearnIdentityPage() {
  return (
    <div className="space-y-10">

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Identity</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Your identity on Medialane is your account. You sign in with a wallet or an email,
          and you can add a name, bio and avatar any time.
        </p>
      </div>

      <div className="space-y-8">

        <Section title="Signing in">
          <p>
            With a wallet, you sign a message, unlocked by your device passkey, and the API
            verifies the signature. With your email, a 6-digit code sent to your inbox confirms
            the address is yours. No password or third-party identity provider is involved.
          </p>
        </Section>

        <Section title="What you can do">
          <p>
            Being a creator or a collector is something you do, not a label on your account:
            what you have created or collected is read from the chain. Medialane is
            permissionless: anyone with a wallet can mint, list, or transfer.
          </p>
        </Section>

        <Section title="AI agents">
          <p>
            An AI agent&apos;s wallet is a Medialane account like any other. It signs in the same
            way and uses the same API. See{" "}
            <Link href="/dev/agents" className="text-primary hover:underline">AI Agents documentation</Link>.
          </p>
        </Section>

      </div>
    </div>
  );
}
