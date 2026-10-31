import type { Metadata } from "next";
import Link from "next/link";
import { Section, Code } from "@/components/docs";

export const metadata: Metadata = {
  alternates: { canonical: "https://docs.medialane.io/learn/remix" },
  title: "Remix & Derivatives | Learn | Medialane",
  description: "How derivative works flow through Medialane: on-chain attribution, license propagation, soft enforcement, and the remix graph.",
  openGraph: {
    title: "Remix & Derivatives | Learn | Medialane",
    description: "How derivative works flow through Medialane: on-chain attribution, license propagation, soft enforcement, and the remix graph.",
    url: "https://docs.medialane.io/learn/remix",
  },
  twitter: {
    title: "Remix & Derivatives | Learn | Medialane",
    description: "How derivative works flow through Medialane: on-chain attribution, license propagation, soft enforcement, and the remix graph.",
  },
};

const LICENSE_RULES = [
  {
    rule: "Permissionless by default",
    desc: "Anyone can create a derivative of any asset; no one needs to own the parent or ask permission. A remix is its own asset, minted into the remixer's own collection.",
  },
  {
    rule: "Attribution embedded",
    desc: "The parent asset's ID is written into the derivative's on-chain metadata automatically. The lineage is permanent and publicly verifiable; the contract records provenance, but it makes no permission claim.",
  },
  {
    rule: "The remixer sets the license",
    desc: "The remixer chooses the license for the derivative. The parent's declared terms are surfaced for transparency, but Medialane doesn't force them onto the new work; honoring them is the responsibility of the remixer as creator.",
  },
  {
    rule: "No-derivatives → request a license",
    desc: "If the parent declares Derivatives: Not Allowed, Medialane doesn't offer a direct remix in the app; instead, a license can be requested from the creator. This is an application-layer courtesy that respects the creator's stated wishes; the contract itself stays fully permissionless.",
  },
];

export default function LearnRemixPage() {
  return (
    <div className="space-y-10">

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Remix &amp; Derivatives</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          A remix is a new IP asset that builds on an existing one. Remixing is
          permissionless: anyone can build on any asset, and the relationship is
          recorded on-chain, publicly and immutably, with the parent staying linked to
          the derivative. When the creator&apos;s blessing or a paid license is needed instead,
          that is a separate, optional flow; see{" "}
          <Link href="/learn/programmable-licensing" className="text-primary hover:underline">Licensing</Link>.
        </p>
      </div>

      <div className="space-y-8">

        <Section title="The Remix Graph">
          <p>
            When a creator remixes an asset, the parent asset's ID is embedded in the
            new token's on-chain metadata. This creates a directed graph of creative
            lineage, traceable from any asset back to its root.
          </p>
          <Code>{`Asset A  (root)
  └─ Asset B  (remix of A — links to A)
       └─ Asset C  (remix of B — links to B)
            └─ Asset D  (remix of C — links to C)`}</Code>
          <p>
            Every node in the graph is a token on Starknet. The edges between them
            are on-chain records, tamper-proof and permanently verifiable by anyone.
          </p>
        </Section>

        <Section title="Soft Enforcement in Derivative Chains">
          <div className="bento-cell border border-brand-orange/20 bg-brand-orange/5 p-5 space-y-3">
            <p className="font-bold text-foreground">The contract does not revert on license violation.</p>
            <p className="text-base text-muted-foreground leading-relaxed">
              The same principle that governs licensing generally applies to remixes:
              enforcement is social and legal, not automatic contract reversion. The
              application layer prevents obvious violations at the UI level. The
              on-chain record is the evidence: it establishes what license the parent
              carried, when it was minted, and what terms the derivative was expected
              to follow.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              That record is tamper-proof. It is exactly what legal
              enforcement requires, without encoding jurisdiction-specific law into immutable contracts.
            </p>
          </div>
          <p className="text-base">
            See{" "}
            <Link href="/learn/programmable-licensing" className="text-primary hover:underline">Programmable Licensing</Link>{" "}
            for the full soft enforcement model.
          </p>
        </Section>

        <Section title="What Medialane Surfaces and Honors">
          <p>
            License terms are attributes on the parent token, readable by any third party.
            Before minting a remix, the application surfaces the parent&apos;s terms so the remixer can
            make an informed choice. The platform stays neutral and permissionless: it only
            honors the creator&apos;s explicit no-derivatives declaration (at the app layer), and
            always embeds attribution:
          </p>
          <div className="space-y-2">
            {LICENSE_RULES.map(({ rule, desc }) => (
              <div key={rule} className="bento-cell px-4 py-3 space-y-1">
                <p className="text-base font-semibold text-foreground">{rule}</p>
                <p className="text-base text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Creating a Remix">
          <p>
            Navigate to any asset page and click <strong className="text-foreground">Remix</strong>.
            The parent&apos;s license terms are shown for context before proceeding. Steps:
          </p>
          <ol className="list-decimal list-inside space-y-1.5 text-sm text-muted-foreground">
            <li>Upload the derivative work (image, audio, video, or other format).</li>
            <li>Set metadata: name, description, IP type.</li>
            <li>Choose the license for the remix; the remixer decides the terms.</li>
            <li>Sign and mint; the parent asset&apos;s ID is embedded in the new token&apos;s metadata.</li>
          </ol>
          <p>
            Minting a remix carries the same gas model as any other IP asset mint.
            There is no additional fee for creating a derivative.
          </p>
        </Section>

        <Section title="Remix vs Licensing">
          <p>
            Remix and Licensing are two distinct, independent actions:
          </p>
          <div className="space-y-2">
            <div className="bento-cell px-4 py-3 space-y-1">
              <p className="text-base font-semibold text-foreground">Remix: free, permissionless</p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Mint an attributed derivative. Free and permissionless: the remixer&apos;s work, the remixer&apos;s license.
              </p>
            </div>
            <div className="bento-cell px-4 py-3 space-y-1">
              <p className="text-base font-semibold text-foreground">Licensing: optional, by agreement</p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Propose a license deal to the creator: proposed terms plus a fee. If the creator accepts, the
                licensed derivative is minted and listed for the requester. Use it to pay or credit the
                original creator, get a formal commercial license, or remix a work the creator
                marked no-derivatives. See{" "}
                <Link href="/learn/programmable-licensing" className="text-primary hover:underline">Programmable Licensing</Link>.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Attribution on Immutable Records">
          <div className="bento-cell border border-brand-purple/20 p-5 space-y-2">
            <p className="font-bold text-foreground">Attribution is embedded in the token.</p>
            <p className="text-base text-muted-foreground leading-relaxed">
              When attribution is required by the parent's license, the original creator's
              wallet address and asset ID are written into the derivative token's structured
              metadata. This makes the attribution
              machine-readable, queryable, and as permanent as the token itself.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Because the metadata is content-addressed on IPFS or Arweave and linked
              immutably from the token, the attribution cannot be edited after minting.
              This is the same immutable-at-mint invariant that applies to license terms.
            </p>
          </div>
        </Section>

        <Section title="AI Agents and Automated Remixing">
          <p>
            The remix graph is a first-class construct for AI-generated content. An
            agent can query for assets with{" "}
            <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">derivatives: allowed</code>,
            generate a derivative work, and mint it with the parent ID linked automatically.
            The contracts make no distinction between a human and an agent: same API,
            same protocol capabilities.
          </p>
          <p className="text-base">
            See{" "}
            <Link href="/dev/agents" className="text-primary hover:underline">AI Agents</Link>{" "}
            for the agent account model and HTTP 402 billing.
          </p>
        </Section>

        <Section title="Viewing Remix History">
          <p>
            Every asset page shows its lineage, original or remix, and a link to trace
            the full provenance chain back to the root. The history is publicly verifiable
            on Starknet. It cannot be altered or deleted.
          </p>
        </Section>

      </div>
    </div>
  );
}
