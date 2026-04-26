import type { Metadata } from "next";
import { Code2, GitBranch, Shield, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Programmable IP | Medialane Learn",
  description: "How programmable intellectual property works — smart contracts, automated licensing, and on-chain rights enforcement.",
};

export default function ProgrammableIPPage() {
  return (
    <div className="space-y-10 max-w-3xl">

      <div className="space-y-3">
        <span className="pill-badge">Core Concept</span>
        <h2 className="text-2xl font-bold">Programmable IP</h2>
        <p className="text-muted-foreground leading-relaxed">
          Traditional IP is a legal document. Programmable IP is code. Instead of a lawyer-drafted
          license that requires enforcement through courts, programmable IP uses smart contracts to
          automatically enforce rights, route royalties, and govern how a creative work can be used —
          the moment a transaction happens, not months later.
        </p>
      </div>

      {/* Contrast */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bento-cell p-5 space-y-3">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Traditional IP</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="text-destructive shrink-0">✗</span> Written in legal language</li>
            <li className="flex items-start gap-2"><span className="text-destructive shrink-0">✗</span> Enforced through courts</li>
            <li className="flex items-start gap-2"><span className="text-destructive shrink-0">✗</span> Royalties paid manually</li>
            <li className="flex items-start gap-2"><span className="text-destructive shrink-0">✗</span> Jurisdiction-specific</li>
            <li className="flex items-start gap-2"><span className="text-destructive shrink-0">✗</span> Slow, expensive to enforce</li>
          </ul>
        </div>
        <div className="bento-cell p-5 space-y-3">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest">Programmable IP</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><span className="text-green-400 shrink-0">✓</span> Written in code (Cairo)</li>
            <li className="flex items-start gap-2"><span className="text-green-400 shrink-0">✓</span> Enforced automatically</li>
            <li className="flex items-start gap-2"><span className="text-green-400 shrink-0">✓</span> Royalties paid instantly</li>
            <li className="flex items-start gap-2"><span className="text-green-400 shrink-0">✓</span> Globally enforceable</li>
            <li className="flex items-start gap-2"><span className="text-green-400 shrink-0">✓</span> Zero enforcement cost</li>
          </ul>
        </div>
      </div>

      {/* How it works */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">How It Works</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: Code2, title: "License as Code", desc: "When you mint an NFT on Medialane, you attach a license template that defines allowed uses — commercial, derivative, distribution rights — encoded directly in the token." },
            { icon: Zap, title: "Automatic Enforcement", desc: "The marketplace smart contract checks license terms before executing any trade. Unauthorized uses simply cannot complete — the contract rejects them." },
            { icon: Shield, title: "Royalty Routing", desc: "Every marketplace sale automatically splits the payment: the seller receives their proceeds, the original creator receives their royalty percentage — with zero manual action required." },
            { icon: GitBranch, title: "Derivative Chains", desc: "Programmable IP enables derivative trees — a remix can be licensed, traded, and earn royalties back to the original creator, all the way up the chain." },
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

      {/* Mediolano */}
      <div className="bento-cell p-6 space-y-3">
        <h3 className="font-semibold">The Mediolano Protocol</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Programmable IP on Medialane is powered by the <strong className="text-foreground">Mediolano protocol</strong> —
          an open-source, permissionless IP protection and licensing layer built on Starknet. Mediolano is the infrastructure;
          Medialane is the marketplace built on top of it.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Mediolano is a public good: zero fees, no platform dependency, fully open source. Any developer can build
          on it. Any creator can use it. The protocol&apos;s IP records exist permanently on Starknet,
          independent of whether Medialane continues to exist.
        </p>
      </div>

    </div>
  );
}
