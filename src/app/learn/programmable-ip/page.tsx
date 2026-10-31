import type { Metadata } from "next";
import Link from "next/link";
import { Code2, GitBranch, Shield, FileText } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "https://docs.medialane.io/learn/programmable-ip" },
  title: "Programmable IP | Medialane Learn",
  description: "How programmable intellectual property works: on-chain authorship records, machine-readable licensing terms, and verifiable provenance.",
  openGraph: {
    title: "Programmable IP | Medialane Learn",
    description: "How programmable intellectual property works: on-chain authorship records, machine-readable licensing terms, and verifiable provenance.",
    url: "https://docs.medialane.io/learn/programmable-ip",
  },
  twitter: {
    title: "Programmable IP | Medialane Learn",
    description: "How programmable intellectual property works: on-chain authorship records, machine-readable licensing terms, and verifiable provenance.",
  },
};

export default function ProgrammableIPPage() {
  return (
    <div className="space-y-10">

      <div className="space-y-3">
        <h2 className="text-2xl font-bold">Programmable IP</h2>
        <p className="text-muted-foreground leading-relaxed">
          Programmable IP is structured data anchored onchain. The terms of a work are
          embedded directly in its token, readable by any application, agent, or contract,
          and permanent from the moment of minting.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Authorship, timing, and license terms are recorded in a way that is tamper-proof
          and independently verifiable by anyone.
        </p>
      </div>

      <div className="bento-cell p-5 space-y-3">
        <p className="text-base font-semibold text-primary uppercase tracking-widest">At a glance</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2"><span className="text-green-400 shrink-0">✓</span> License embedded in the token itself</li>
          <li className="flex items-start gap-2"><span className="text-green-400 shrink-0">✓</span> Timestamped authorship record on-chain</li>
          <li className="flex items-start gap-2"><span className="text-green-400 shrink-0">✓</span> Terms travel with every transfer</li>
          <li className="flex items-start gap-2"><span className="text-green-400 shrink-0">✓</span> Permissionless, no approval required</li>
          <li className="flex items-start gap-2"><span className="text-green-400 shrink-0">✓</span> Machine-readable by applications and agents</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">What it does</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              icon: FileText,
              title: "License terms as structured data",
              desc: "Minting an NFT attaches a license (commercial use, derivative rights, AI training policy, geographic scope) encoded as structured metadata in the token. The terms are permanent and travel with the token through every transfer.",
            },
            {
              icon: Code2,
              title: "On-chain authorship record",
              desc: "Minting creates an immutable, timestamped record on Starknet: the wallet address, the content hash, and the time of creation. This is publicly verifiable evidence of when a work existed and who published it.",
            },
            {
              icon: Shield,
              title: "Verifiable by anyone",
              desc: "The record lives on Starknet and IPFS, so the authorship record and license terms stay accessible and verifiable from the blockchain at any time.",
            },
            {
              icon: GitBranch,
              title: "Remix provenance chain",
              desc: "Derivative works record their parent asset on-chain. This creates a traceable provenance chain from any remix back to the original source, publicly visible and tamper-proof.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bento-cell p-5 space-y-3">
              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <h4 className="font-semibold text-base">{title}</h4>
              <p className="text-base text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bento-cell p-6 space-y-3">
        <h3 className="font-semibold text-base">The Mediolano Protocol</h3>
        <p className="text-base text-muted-foreground leading-relaxed">
          The IP record infrastructure on Medialane is built on the{" "}
          <strong className="text-foreground">Mediolano protocol</strong>, an open-source,
          permissionless, <strong className="text-foreground">zero-fee</strong> IP tokenization
          layer on Starknet, built for compliance with the{" "}
          <strong className="text-foreground">Berne Convention</strong> so authorship is
          recognized across its 181 member countries. Medialane builds its commercial
          layer on top. Its records live on-chain, and any developer can build on it without
          permission or payment.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed">
          Learn more about{" "}
          <Link href="/learn/protect-your-ip" className="text-primary hover:underline">IP protection &amp; the Berne Convention</Link>{" "}
          and{" "}
          <Link href="/learn/programmable-licensing" className="text-primary hover:underline">programmable licensing</Link>.
        </p>
      </div>

    </div>
  );
}
