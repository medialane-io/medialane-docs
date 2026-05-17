import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programmable Licensing | Learn | Medialane",
  description: "Medialane's onchain licensing system — license terms in metadata, soft enforcement as the default, the immutable-at-mint invariant, and when contracts enforce.",
  openGraph: {
    title: "Programmable Licensing | Learn | Medialane",
    description: "Medialane's onchain licensing system — license terms in metadata, soft enforcement as the default, the immutable-at-mint invariant, and when contracts enforce.",
    url: "https://docs.medialane.io/learn/programmable-licensing",
  },
  twitter: {
    title: "Programmable Licensing | Learn | Medialane",
    description: "Medialane's onchain licensing system — license terms in metadata, soft enforcement as the default, the immutable-at-mint invariant, and when contracts enforce.",
  },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

function LicenseRow({ name, description }: { name: string; description: string }) {
  return (
    <div className="bento-cell px-4 py-3 flex items-start gap-3">
      <span className="font-mono text-xs bg-primary/10 text-primary px-2 py-1 rounded-md shrink-0 mt-0.5">{name}</span>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

const CORE_TRAITS = [
  { trait: "License", desc: "The preset: CC BY-SA (default), CC BY, CC0, All Rights Reserved, or Custom." },
  { trait: "Commercial Use", desc: "Whether the work may be used commercially — and by whom." },
  { trait: "Derivatives", desc: "Whether derivative works are permitted, and under what conditions." },
  { trait: "Attribution", desc: "Whether credit to the original creator is required." },
  { trait: "Territory", desc: "Geographic scope of the license — worldwide or specific regions." },
  { trait: "AI Policy", desc: "Explicit declaration on AI training use: allowed, not allowed, or with permission only." },
];

export default function LearnProgrammableLicensingPage() {
  return (
    <div className="space-y-10">

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Programmable Licensing</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Every IP asset minted on Medialane carries a machine-readable license embedded
          in its on-chain metadata. The terms travel with the asset — to any marketplace,
          viewer, or aggregator that reads metadata.
        </p>
      </div>

      <div className="space-y-8">

        <Section title="License as Metadata">
          <p>
            License terms are encoded as plain attributes on the token — the same attribute
            format that OpenSea, Rarible, and any other NFT viewer reads. This means the
            terms are portable: visible wherever the asset appears, not just on Medialane.
          </p>
          <p>
            Medialane extends the OpenSea metadata baseline with a structured license object.
            Third parties that don&apos;t understand the extension can still read the plain
            attributes. The floor is always the OpenSea baseline — it is never lowered.
          </p>
        </Section>

        <Section title="Soft Enforcement Is the Default">
          <div className="bento-cell border border-brand-orange/20 bg-brand-orange/5 p-5 space-y-3">
            <p className="font-bold text-foreground">The contract does not revert on license violation.</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Enforcement of license terms is social, legal, and jurisdictional — the same
              mechanisms that enforce traditional copyright. This is intentional: encoding
              jurisdiction-specific law into immutable contracts would make them globally
              unusable. Soft enforcement gives the system worldwide durability.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The on-chain record is evidence. It establishes what the creator stated, when
              they stated it, and what terms apply. That record is tamper-proof and permanently
              verifiable — which is exactly what you need for legal enforcement, even without
              automatic contract reversion.
            </p>
          </div>
        </Section>

        <Section title="The Six Core Traits">
          <p>
            License terms are expressed as a structured set of attributes. The six core traits
            are encoded on every asset and readable by any third party.
          </p>
          <div className="space-y-2">
            {CORE_TRAITS.map(({ trait, desc }) => (
              <div key={trait} className="bento-cell px-4 py-3 flex items-start gap-3">
                <span className="font-mono text-xs bg-primary/10 text-primary px-2 py-1 rounded-md shrink-0 mt-0.5">{trait}</span>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="License Presets">
          <div className="space-y-2">
            <LicenseRow name="CC BY-SA" description="Attribution + ShareAlike — the default. Free to use and adapt with credit. Derivatives must carry the same license. The most creator-protective open license." />
            <LicenseRow name="CC BY" description="Attribution — free to use and adapt with credit. Derivatives can use any license." />
            <LicenseRow name="CC0" description="Public Domain dedication. Creator waives all rights. Anyone can use for any purpose, without attribution." />
            <LicenseRow name="ARR" description="All Rights Reserved. Full copyright retained by the creator. No use permitted beyond viewing." />
            <LicenseRow name="Custom" description="Creator-defined terms specified as freeform text alongside the structured attributes." />
          </div>
        </Section>

        <Section title="Immutable at Mint">
          <div className="bento-cell border border-brand-purple/20 p-5 space-y-2">
            <p className="font-bold text-foreground">Terms cannot be edited after minting.</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Once a token is minted, its license terms are fixed. The metadata lives on IPFS
              or Arweave — content-addressed and immutable. If a creator wants to offer different
              terms, they mint a new token. There is no edit path.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This is a durability guarantee, not a limitation. Collectors know exactly what
              they purchased. The terms cannot be changed after the fact — by the creator,
              by Medialane, or by anyone else.
            </p>
          </div>
        </Section>

        <Section title="When Contracts Do Enforce">
          <p>
            Soft enforcement is the default. But services can opt into stronger mechanisms
            where it makes sense:
          </p>
          <div className="space-y-2">
            {[
              { name: "ERC-2981 royalty splits", desc: "Royalty percentages encoded in the contract. Marketplaces that implement ERC-2981 pay them automatically." },
              { name: "Escrow and time-lock", desc: "Certain services can hold funds in escrow pending license verification." },
              { name: "Revocation", desc: "Some service types support on-chain revocation for specific license categories." },
            ].map(({ name, desc }) => (
              <div key={name} className="bento-cell px-4 py-3 space-y-1">
                <p className="text-sm font-semibold text-foreground">{name}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm">
            See{" "}
            <Link href="/learn/remix" className="text-primary hover:underline">Remix &amp; Derivatives</Link>
            {" "}for how license terms propagate through derivative chains.
          </p>
        </Section>

      </div>
    </div>
  );
}
