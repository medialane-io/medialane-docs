import type { Metadata } from "next";
import { Shield, Eye, Lock, AlertTriangle } from "lucide-react";
import { Section } from "@/components/docs";

export const metadata: Metadata = {
  title: "Security | Docs | Medialane",
  description: "Security architecture, audit reports, risk disclosure, and monitoring for the Medialane protocol.",
  openGraph: {
    title: "Security | Docs | Medialane",
    description: "Security architecture, audit reports, risk disclosure, and monitoring for the Medialane protocol.",
    url: "https://docs.medialane.io/dev/security",
  },
  twitter: {
    title: "Security | Docs | Medialane",
    description: "Security architecture, audit reports, risk disclosure, and monitoring for the Medialane protocol.",
  },
};

export default function DocsSecurityPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Security</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          This page documents the security properties of the Medialane contracts,
          the current audit status, known risks, and how to report vulnerabilities.
        </p>
      </div>

      <div className="space-y-8">
        <Section title="Security Properties">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                icon: Lock,
                title: "Immutable contracts",
                desc: "All current marketplace and factory contracts have no admin keys, no upgrade path, and no owner role. Once deployed, no one can change them. Evolution happens by redeploy, not by upgrade. Verified from the open-source Cairo code.",
              },
              {
                icon: Shield,
                title: "No custody",
                desc: "The marketplace never holds funds. Trades settle via atomic swap — both the NFT transfer and the payment happen in the same transaction, or neither does.",
              },
              {
                icon: Eye,
                title: "Open source",
                desc: "All contracts are publicly available. Anyone can read what the code does and verify the deployed bytecode matches the source.",
              },
              {
                icon: AlertTriangle,
                title: "No emergency pause",
                desc: "There is no pause function or circuit breaker. This is a deliberate design choice — no admin can stop the protocol. It also means bugs cannot be patched once deployed; fixes require redeploying a new contract.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bento-cell p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-primary" />
                  <p className="text-sm font-semibold text-foreground">{title}</p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Audit Status">
          <div className="space-y-2">
            <div className="bento-cell px-4 py-3 space-y-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-foreground">Backend &amp; SDK — P0/P1/P2 hardening cycle</p>
                <span className="text-[10px] font-medium text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">Completed May 2026</span>
              </div>
              <p className="text-xs text-muted-foreground">Internal review of medialane-backend (~16k LOC) and @medialane/sdk · May 2026</p>
              <p className="text-xs text-muted-foreground">
                Three-batch hardening pass: P0 correctness (webhook fanout, indexer stall vectors,
                BFF proxy allowlist), P1 atomicity (rate-limit single round-trip, intent batch
                lookup, transaction atomicity), P2 hygiene (SSRF integer/hex/octal block, SIWS iat
                guard, server-only API key via BFF proxy, HMAC-required key hashing). TypeScript
                strict-mode errors driven from 8 → 0 across the cycle.
              </p>
            </div>
            <div className="bento-cell px-4 py-3 space-y-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-foreground">Marketplace &amp; collection contracts — Internal Review</p>
                <span className="text-[10px] font-medium text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-full">Internal only</span>
              </div>
              <p className="text-xs text-muted-foreground">Reviewed by the core development team · May 2026</p>
              <p className="text-xs text-muted-foreground">
                Covers the redesigned marketplace venues (Medialane721 / Medialane1155 —
                independent immutable contracts with per-deployment replay binding, on-chain
                EIP-2981 royalties, and reentrancy-guarded settlement, redeployed 2026-05-31),
                the MIP IPCollection registry v0.3.0, the IP-Programmable ERC-1155 factory
                v0.2.0, the Collection Drop factory, and the POP factory. This is an internal
                review, not an independent third-party audit.
              </p>
            </div>
            <div className="bento-cell px-4 py-3 space-y-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-foreground">Independent Audit — Not yet completed</p>
                <span className="text-[10px] font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">Pending</span>
              </div>
              <p className="text-xs text-muted-foreground">
                A third-party audit has not been completed. Users should take this into account
                when deciding how much to trust the contracts with valuable assets.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Decentralized Storage">
          <p>
            All IP asset media and metadata are stored on{" "}
            <strong className="text-foreground">IPFS</strong> — a decentralized
            content-addressed storage network. A hash of every metadata JSON is committed
            to the Starknet blockchain inside the token URI, creating an immutable link
            between the on-chain record and the off-chain content.
          </p>
          <p>
            This means your IP proof is not dependent on Medialane's servers continuing to
            operate. The record exists on the Starknet blockchain and IPFS permanently,
            independent of the platform.
          </p>
        </Section>

        <Section title="Risk Disclosure">
          <div className="bento-cell p-4 border-amber-500/30 bg-amber-500/5 space-y-2">
            <p className="text-sm font-semibold text-foreground flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-500" />
              Important Notice
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Smart contracts carry inherent risks. While the Mediolano protocol and
              Medialane platform take every precaution — including audits, formal
              verification, and continuous testing — user funds and IP assets could
              theoretically be at risk due to unforeseen bugs in the protocol or the
              underlying Starknet network. Use caution and only commit assets whose
              loss you could tolerate.
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Medialane does not take custody of your assets. Your NFTs remain in
              your self-custodied wallet at all times. Marketplace orders are signed
              intents — your asset does not leave your wallet until a transaction is
              fully executed and settled on Starknet.
            </p>
          </div>
        </Section>

        <Section title="Responsible Disclosure">
          <p>
            If you discover a security vulnerability in the Medialane platform or the
            Mediolano protocol, please report it responsibly to{" "}
            <a href="mailto:security@medialane.io" className="text-primary hover:underline">
              security@medialane.io
            </a>
            . Do not disclose vulnerabilities publicly before giving the team a reasonable
            opportunity to investigate and remediate.
          </p>
        </Section>
      </div>
    </div>
  );
}
