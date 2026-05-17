import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Remix & Derivatives | Learn | Medialane",
  description: "How derivative works flow through Medialane — on-chain attribution, license propagation, soft enforcement, and the remix graph.",
  openGraph: {
    title: "Remix & Derivatives | Learn | Medialane",
    description: "How derivative works flow through Medialane — on-chain attribution, license propagation, soft enforcement, and the remix graph.",
    url: "https://docs.medialane.io/learn/remix",
  },
  twitter: {
    title: "Remix & Derivatives | Learn | Medialane",
    description: "How derivative works flow through Medialane — on-chain attribution, license propagation, soft enforcement, and the remix graph.",
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

function Code({ children }: { children: string }) {
  return (
    <pre className="bento-cell p-4 text-xs font-mono overflow-x-auto text-foreground/80 leading-relaxed whitespace-pre">
      {children}
    </pre>
  );
}

const LICENSE_RULES = [
  {
    rule: "ShareAlike (viral)",
    desc: "If the parent uses CC BY-SA, any derivative must carry the same license. You cannot relicense a viral work under more permissive terms.",
  },
  {
    rule: "Attribution",
    desc: "If the parent requires attribution, the derivative's metadata embeds the original creator's address and asset ID automatically. The record is on-chain.",
  },
  {
    rule: "Commercial rights",
    desc: "The most restrictive commercial terms in the ancestor chain apply. A parent marked non-commercial cannot grant commercial rights to derivatives.",
  },
  {
    rule: "No-derivatives",
    desc: "If the parent carries a no-derivatives flag, remixing is not permitted. The application layer blocks mint attempts that reference ND-licensed parents.",
  },
];

export default function LearnRemixPage() {
  return (
    <div className="space-y-10">

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Remix &amp; Derivatives</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          A remix is a new IP asset that builds on an existing one. The relationship
          is recorded on-chain — permanently, publicly, and without requiring anyone
          to trust the creator's word. License terms travel with the asset through
          every generation of the derivative chain.
        </p>
      </div>

      <div className="space-y-8">

        <Section title="The Remix Graph">
          <p>
            When a creator remixes an asset, the parent asset's ID is embedded in the
            new token's on-chain metadata. This creates a directed graph of creative
            lineage — traceable from any asset back to its root.
          </p>
          <Code>{`Asset A  (root — CC BY-SA)
  └─ Asset B  (remix of A — must carry CC BY-SA)
       └─ Asset C  (remix of B — must carry CC BY-SA)
            └─ Asset D  (remix of C — must carry CC BY-SA)`}</Code>
          <p>
            Every node in the graph is a token on Starknet. The edges between them
            are on-chain records — tamper-proof and permanently verifiable by anyone.
          </p>
        </Section>

        <Section title="Soft Enforcement in Derivative Chains">
          <div className="bento-cell border border-brand-orange/20 bg-brand-orange/5 p-5 space-y-3">
            <p className="font-bold text-foreground">The contract does not revert on license violation.</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The same principle that governs licensing generally applies to remixes:
              enforcement is social and legal, not automatic contract reversion. The
              application layer prevents obvious violations at the UI level. But the
              on-chain record is the evidence — it establishes what license the parent
              carried, when it was minted, and what terms the derivative was expected
              to follow.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              That record is tamper-proof. It is exactly what you need for legal
              enforcement without encoding jurisdiction-specific law into immutable contracts.
            </p>
          </div>
          <p className="text-sm">
            See{" "}
            <Link href="/learn/programmable-licensing" className="text-primary hover:underline">Programmable Licensing</Link>{" "}
            for the full soft enforcement model.
          </p>
        </Section>

        <Section title="How License Terms Propagate">
          <p>
            License terms are attributes on the parent token — readable by any third party.
            Before minting a remix, the application surfaces the parent's terms. Certain
            incompatibilities are blocked at the UI level:
          </p>
          <div className="space-y-2">
            {LICENSE_RULES.map(({ rule, desc }) => (
              <div key={rule} className="bento-cell px-4 py-3 space-y-1">
                <p className="text-sm font-semibold text-foreground">{rule}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Creating a Remix">
          <p>
            Navigate to any asset page and click <strong className="text-foreground">Remix</strong>.
            You will be shown the parent's license terms before proceeding. Steps:
          </p>
          <ol className="list-decimal list-inside space-y-1.5 text-sm text-muted-foreground">
            <li>Review the parent asset's license terms and confirm eligibility.</li>
            <li>Upload your derivative work (image, audio, video, or other format).</li>
            <li>Set metadata — name, description, IP type.</li>
            <li>Choose a license for your remix (constrained by what the parent permits).</li>
            <li>Sign and mint — the parent asset's ID is embedded in your new token's metadata.</li>
          </ol>
          <p>
            Minting a remix carries the same gas model as any other IP asset mint.
            There is no additional fee for creating a derivative.
          </p>
        </Section>

        <Section title="Attribution on Immutable Records">
          <div className="bento-cell border border-brand-purple/20 p-5 space-y-2">
            <p className="font-bold text-foreground">Attribution is embedded in the token, not the description.</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              When attribution is required by the parent's license, the original creator's
              wallet address and asset ID are written into the derivative token's structured
              metadata — not a freeform description field. This makes the attribution
              machine-readable, queryable, and as permanent as the token itself.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
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
            The contracts make no distinction between a human and an agent — same API,
            same protocol capabilities.
          </p>
          <p className="text-sm">
            See{" "}
            <Link href="/docs/agents" className="text-primary hover:underline">AI Agents</Link>{" "}
            for the agent account model and HTTP 402 billing.
          </p>
        </Section>

        <Section title="Viewing Remix History">
          <p>
            Every asset page shows its lineage — original or remix, and a link to trace
            the full provenance chain back to the root. The history is publicly verifiable
            on Starknet. It cannot be altered or deleted.
          </p>
        </Section>

      </div>
    </div>
  );
}
