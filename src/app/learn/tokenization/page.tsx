import type { Metadata } from "next";
import { Coins, Layers, DollarSign, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Tokenization | Medialane Learn",
  description: "What tokenization means for intellectual property — turning creative works into tradeable digital assets.",
  openGraph: {
    title: "Tokenization | Medialane Learn",
    description: "What tokenization means for intellectual property — turning creative works into tradeable digital assets.",
    url: "https://docs.medialane.io/learn/tokenization",
  },
  twitter: {
    title: "Tokenization | Medialane Learn",
    description: "What tokenization means for intellectual property — turning creative works into tradeable digital assets.",
  },
};

export default function TokenizationPage() {
  return (
    <div className="space-y-10 max-w-3xl">

      <div className="space-y-3">
        <span className="pill-badge">Concepts</span>
        <h2 className="text-2xl font-bold">Tokenization</h2>
        <p className="text-muted-foreground leading-relaxed">
          Tokenization is the process of representing a real-world asset — ownership, rights, or value —
          as a digital token on a blockchain. For creators, tokenization transforms intellectual property
          from a vague legal concept into a specific, tradeable, programmable asset.
        </p>
      </div>

      {/* What gets tokenized */}
      <div className="bento-cell p-6 space-y-4">
        <h3 className="font-semibold">What Gets Tokenized on Medialane?</h3>
        <div className="space-y-3">
          {[
            { label: "Ownership", desc: "The right to claim authorship and control over an IP asset — represented as an NFT in your wallet." },
            { label: "Licenses", desc: "Specific usage rights (commercial, derivative, distribution) encoded in a programmable license attached to the token." },
            { label: "Royalties", desc: "Creators define royalty terms (percentage and recipient) for secondary sales. Medialane's marketplace pays them on-chain at settlement via EIP-2981; third-party marketplaces honor them at their discretion." },
            { label: "Credentials", desc: "Participation records (POP Protocol) — proof you attended an event, joined a community, or reached a milestone." },
          ].map(({ label, desc }) => (
            <div key={label} className="flex items-start gap-3">
              <span className="text-xs font-semibold text-primary shrink-0 pt-0.5 w-20">{label}</span>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why it matters */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Why Tokenization Matters for Creators</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: DollarSign, title: "New Revenue Streams", desc: "Sell primary rights, license specific uses independently, and earn royalties on secondary sales — an open-ended set of ways to monetize one work." },
            { icon: Users, title: "Global Liquidity", desc: "A tokenized IP asset can be listed on a marketplace accessible by anyone, anywhere — no gallery representation or publisher deal required." },
            { icon: Coins, title: "Shared Editions", desc: "Multi-edition (ERC-1155) collections let many collectors own editions of the same work — broadening participation, no gallery or publisher required." },
            { icon: Layers, title: "Interoperable by Standards", desc: "Tokenized IP follows open NFT standards (ERC-721 / ERC-1155), so it travels across the wider ecosystem and is never locked into one platform." },
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

      {/* Medialane context */}
      <div className="bento-cell p-6 space-y-3">
        <h3 className="font-semibold">Tokenization on Medialane</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          When you mint an NFT on Medialane, you&apos;re not just creating a JPEG with a certificate.
          You&apos;re registering your IP on the Mediolano protocol, attaching programmable license terms,
          and creating a verifiable ownership record aligned with the Berne Convention.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Your tokenized IP lives in your portfolio, can be listed on the marketplace, licensed
          to other creators, or passed to the next generation of owners — with your authorship record
          and license terms permanently attached and publicly readable.
        </p>
      </div>

    </div>
  );
}
