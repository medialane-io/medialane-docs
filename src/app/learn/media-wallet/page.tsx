import type { Metadata } from "next";
import Link from "next/link";
import { Fingerprint, KeyRound, Lock, Wallet, Smartphone, Shield } from "lucide-react";
import { Section } from "@/components/docs";

export const metadata: Metadata = {
  alternates: { canonical: "https://docs.medialane.io/learn/media-wallet" },
  title: "Media Wallet | Learn | Medialane",
  description: "Media Wallet: Medialane's self-custody account contract on Starknet, passkey-based keys, no seed phrase, live on mainnet.",
  openGraph: {
    title: "Media Wallet | Learn | Medialane",
    description: "Media Wallet: Medialane's self-custody account contract on Starknet, passkey-based keys, no seed phrase, live on mainnet.",
    url: "https://docs.medialane.io/learn/media-wallet",
  },
  twitter: {
    title: "Media Wallet | Learn | Medialane",
    description: "Media Wallet: Medialane's self-custody account contract on Starknet, passkey-based keys, no seed phrase, live on mainnet.",
  },
};

const KEY_STEPS = [
  {
    label: "Register a passkey",
    icon: Fingerprint,
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
    border: "border-brand-purple/20",
    def: "Face ID, Touch ID, or Windows Hello registers a WebAuthn passkey bound to the app's origin, requesting the PRF (hmac-secret) extension.",
  },
  {
    label: "Generate and seal the key",
    icon: Lock,
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/20",
    def: "A Stark-curve private key is generated on-device. The passkey's PRF secret derives an AES key via HKDF-SHA-256, which seals the private key with AES-GCM before it ever touches storage.",
  },
  {
    label: "Unseal only to sign",
    icon: KeyRound,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    border: "border-brand-orange/20",
    def: "Signing a transaction runs a fresh passkey assertion, decrypts the private key into memory for that single operation, then discards it. The key is never persisted unsealed and never transmitted.",
  },
];

export default function LearnMediaWalletPage() {
  return (
    <div className="space-y-10">

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Media Wallet</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Media Wallet is Medialane&apos;s self-custody account standard: an audited
          account contract deployed on Starknet mainnet, paired with a passkey-based
          key model. No seed phrase, no server-side signer, no key Medialane can access.
        </p>
      </div>

      <div className="space-y-8">

        <Section title="The Account Contract">
          <p>
            The Media Wallet contract is an audited fork of Argent&apos;s v0.5.0 account,
            live on Starknet mainnet. Every account it creates has a single Stark-curve
            owner key, an optional guardian for recovery, support for session keys, and
            SNIP-9 outside execution, the mechanism that lets a transaction be signed
            without the signer paying gas directly.
          </p>
          <p>
            The class and factory hashes are pinned in{" "}
            <code className="font-mono text-sm bg-muted/40 px-1.5 py-0.5 rounded">@medialane/sdk</code>,
            not hardcoded per app, so every client that deploys a Media Wallet account
            derives the same address from the same owner key.
          </p>
        </Section>

        <Section title="How the Key Works">
          <div className="space-y-3">
            {KEY_STEPS.map(({ label, icon: Icon, color, bg, border, def }) => (
              <div key={label} className={`bento-cell border ${border} p-5 space-y-3`}>
                <div className="flex items-center gap-3">
                  <div className={`h-9 w-9 rounded-xl ${bg} flex items-center justify-center shrink-0`}>
                    <Icon className={`h-5 w-5 ${color}`} />
                  </div>
                  <p className={`font-bold ${color}`}>{label}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{def}</p>
              </div>
            ))}
          </div>
          <p className="text-sm">
            The account address is counterfactual: it can be computed, and funded,
            before the account is ever deployed on-chain. The first signed transaction
            deploys it.
          </p>
        </Section>

        <Section title="Where You Meet It Today">
          <div className="bento-cell border border-brand-rose/20 bg-brand-rose/5 p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Smartphone className="h-5 w-5 text-brand-rose" />
              <p className="font-bold text-foreground">medialane.io, today&apos;s client</p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              medialane.io&apos;s built-in wallet creates and manages accounts under this
              contract for anyone signing up there. A standalone Media Wallet app is
              planned as a second client of the same contract, later.
            </p>
          </div>
        </Section>

        <Section title="Not the Same as the dApp&apos;s Wallets">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bento-cell border border-brand-blue/20 p-5 space-y-2">
              <div className="flex items-center gap-2">
                <Wallet className="h-4 w-4 text-brand-blue" />
                <p className="font-bold text-foreground text-sm">starknet.medialane.io</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Connects to a wallet you already have: Ready, Braavos, an injected
                extension, Cartridge, or Privy. You choose and control the wallet.
              </p>
            </div>
            <div className="bento-cell border border-brand-purple/20 p-5 space-y-2">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-brand-purple" />
                <p className="font-bold text-foreground text-sm">Media Wallet</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Is the account: created from a passkey, self-custody by construction,
                with no separate wallet app to install or connect.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Learn More">
          <p>
            See{" "}
            <Link href="/learn/identity" className="text-primary hover:underline">Identity</Link>
            {" "}for how a Media Wallet account relates to your Medialane account and
            profile, and{" "}
            <Link href="/dev/security" className="text-primary hover:underline">Security</Link>
            {" "}for the platform&apos;s broader security model.
          </p>
        </Section>

      </div>
    </div>
  );
}
