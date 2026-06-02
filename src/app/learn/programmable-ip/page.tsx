import type { Metadata } from "next";
import Link from "next/link";
import { Code2, GitBranch, Shield, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Programmable IP | Medialane Learn",
  description: "How programmable intellectual property works — on-chain authorship records, machine-readable licensing terms, and verifiable provenance.",
  openGraph: {
    title: "Programmable IP | Medialane Learn",
    description: "How programmable intellectual property works — on-chain authorship records, machine-readable licensing terms, and verifiable provenance.",
    url: "https://docs.medialane.io/learn/programmable-ip",
  },
  twitter: {
    title: "Programmable IP | Medialane Learn",
    description: "How programmable intellectual property works — on-chain authorship records, machine-readable licensing terms, and verifiable provenance.",
  },
};

export default function ProgrammableIPPage() {
  return (
    <div className="space-y-10 max-w-3xl">

      <div className="space-y-3">
        <h2 className="text-2xl font-semibold">Programmable IP</h2>
        <p className="text-muted-foreground leading-relaxed">
          Traditional IP is a legal document. Programmable IP is structured data anchored
          onchain. Instead of a license stored in a file or a lawyer&apos;s database, the
          terms are embedded directly in the token — readable by any application, agent, or
          contract, and permanent from the moment of minting.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          This does not replace legal copyright or eliminate the need for enforcement in
          the traditional sense. What it changes is the evidence layer: authorship, timing,
          and license terms are recorded in a way that is tamper-proof and independently
          verifiable by anyone.
        </p>
      </div>

      {/* Contrast */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bento-cell p-5 space-y-3">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Traditional IP</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="text-destructive shrink-0">✗</span> License stored in a document or database</li>
            <li className="flex items-start gap-2"><span className="text-destructive shrink-0">✗</span> Authorship requires witnesses or registration</li>
            <li className="flex items-start gap-2"><span className="text-destructive shrink-0">✗</span> Terms don&apos;t travel with the work</li>
            <li className="flex items-start gap-2"><span className="text-destructive shrink-0">✗</span> Licensing requires intermediaries</li>
            <li className="flex items-start gap-2"><span className="text-destructive shrink-0">✗</span> No machine-readable format</li>
          </ul>
        </div>
        <div className="bento-cell p-5 space-y-3">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest">Programmable IP</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="text-green-400 shrink-0">✓</span> License embedded in the token itself</li>
            <li className="flex items-start gap-2"><span className="text-green-400 shrink-0">✓</span> Timestamped authorship record on-chain</li>
            <li className="flex items-start gap-2"><span className="text-green-400 shrink-0">✓</span> Terms travel with every transfer</li>
            <li className="flex items-start gap-2"><span className="text-green-400 shrink-0">✓</span> Permissionless — no approval required</li>
            <li className="flex items-start gap-2"><span className="text-green-400 shrink-0">✓</span> Machine-readable by applications and agents</li>
          </ul>
        </div>
      </div>

      {/* How it works */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">What it actually does</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              icon: FileText,
              title: "License terms as structured data",
              desc: "When you mint an NFT on Medialane, you attach a license — commercial use, derivative rights, AI training policy, geographic scope — encoded as structured metadata in the token. The terms are permanent and travel with the token through every transfer.",
            },
            {
              icon: Code2,
              title: "On-chain authorship record",
              desc: "Minting creates an immutable, timestamped record on Starknet: your wallet address, the content hash, and the time of creation. This is publicly verifiable evidence of when a work existed and who published it.",
            },
            {
              icon: Shield,
              title: "Independent of the platform",
              desc: "The record exists on Starknet and IPFS — not on Medialane's servers. Even if the platform goes offline, the authorship record and license terms remain accessible and verifiable from the blockchain.",
            },
            {
              icon: GitBranch,
              title: "Remix provenance chain",
              desc: "Derivative works record their parent asset on-chain. This creates a traceable provenance chain from any remix back to the original source — publicly visible and tamper-proof.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bento-cell p-5 space-y-3">
              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <h4 className="font-semibold text-sm">{title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What it doesn't do */}
      <div className="bento-cell p-6 space-y-3 border-amber-500/20 border">
        <h3 className="font-semibold text-sm">What programmable IP does not do</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The license terms in token metadata are not automatically enforced at the legal level.
          If someone copies your work and uses it outside the terms you set, the marketplace
          contract does not prevent that — it has no visibility into activity outside of
          on-chain transactions. What the record provides is evidence: a timestamped, immutable,
          publicly verifiable document of your authorship and your stated terms.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Enforcing IP rights against infringement still requires the same tools it always has —
          legal process, takedown requests, and in some cases litigation. The on-chain record
          strengthens your position by providing clear, undeniable evidence of prior authorship.
        </p>
      </div>

      {/* Mediolano */}
      <div className="bento-cell p-6 space-y-3">
        <h3 className="font-semibold text-sm">The Mediolano Protocol</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The IP record infrastructure on Medialane is built on the{" "}
          <strong className="text-foreground">Mediolano protocol</strong> — an open-source,
          permissionless, <strong className="text-foreground">zero-fee</strong> IP tokenization
          layer on Starknet, built for compliance with the{" "}
          <strong className="text-foreground">Berne Convention</strong> so authorship is
          recognized across its 181 member countries. Mediolano is a separate, independent
          public good that predates Medialane; Medialane builds its commercial layer on top.
          Its records exist on-chain regardless of whether Medialane continues to operate, and
          any developer can build on it without permission or payment.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Learn more about{" "}
          <Link href="/learn/protect-your-ip" className="text-primary hover:underline">IP protection &amp; the Berne Convention</Link>{" "}
          and{" "}
          <Link href="/learn/programmable-licensing" className="text-primary hover:underline">programmable licensing</Link>.
        </p>
      </div>

    </div>
  );
}
