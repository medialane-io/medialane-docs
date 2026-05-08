import type { Metadata } from "next";
import { Scroll } from "lucide-react";

export const metadata: Metadata = {
  title: "Constitution | Medialane DAO",
  description: "The founding document of Medialane DAO — mission, membership, and core values.",
  openGraph: {
    title: "Constitution | Medialane DAO",
    description: "The founding document of Medialane DAO — mission, membership, and core values.",
    url: "https://docs.medialane.io/dao/constitution",
  },
  twitter: {
    title: "Constitution | Medialane DAO",
    description: "The founding document of Medialane DAO — mission, membership, and core values.",
  },
};

const ARTICLES = [
  {
    article: "Article I",
    title: "Name and Purpose",
    content:
      "The organization shall be known as Medialane DAO, a Decentralized Autonomous Organization. Its purpose is to govern, fund, and advance Medialane creator capital markets and the open protocol infrastructure they depend on — ensuring that intellectual property ownership, licensing, and trading remain transparent, permissionless, and creator-first.",
  },
  {
    article: "Article II",
    title: "Mission",
    content:
      "Medialane DAO exists to build, maintain, and govern IP infrastructure that is open, permanent, and not controlled by any single entity. Every creative work should have a verifiable record of authorship and machine-readable terms for how it can be used. The DAO funds and directs the technology that makes this possible.",
  },
  {
    article: "Article III",
    title: "Membership",
    content:
      "Membership in Medialane DAO is open to all holders of the MDLN governance token. Membership rights include participation in governance votes, submission of proposals, and access to community resources. Membership obligations include acting in good faith, disclosing conflicts of interest, and adhering to the community guidelines and this constitution.",
  },
  {
    article: "Article IV",
    title: "Governance",
    content:
      "Governance shall be conducted through the mechanisms defined in the Governance Charter. All significant decisions affecting the platform — including treasury allocations, protocol upgrades, and policy changes — must go through the on-chain or Snapshot governance process. The DAO shall not act unilaterally against the expressed will of a properly constituted governance vote.",
  },
  {
    article: "Article V",
    title: "Treasury",
    content:
      "The DAO treasury holds assets received from platform fees, grants, and community contributions. A 1% marketplace fee flows to the treasury. Treasury funds may only be disbursed pursuant to a passed governance proposal. Multi-sig signatories execute treasury transactions only as authorized. Public treasury records shall be maintained for full transparency.",
  },
  {
    article: "Article VI",
    title: "Amendments",
    content:
      "This constitution may be amended by a supermajority governance vote (67% or greater of participating voting power) with a minimum quorum of 10% of total MDLN supply. Constitutional amendments shall have a minimum 14-day deliberation period before going to a vote. Emergency amendments may be expedited with a 90% approval threshold.",
  },
  {
    article: "Article VII",
    title: "Dissolution",
    content:
      "Dissolution of Medialane DAO requires a supermajority vote (80% or greater) with a minimum 30-day deliberation period. Upon dissolution, treasury assets shall be distributed to MDLN token holders on a pro-rata basis after satisfying all outstanding legal obligations. The open-source protocol shall remain publicly available regardless of DAO status.",
  },
];

export default function ConstitutionPage() {
  return (
    <div className="space-y-8 max-w-3xl">

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Scroll className="h-5 w-5 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">Founding Document</span>
        </div>
        <h2 className="text-2xl font-bold">Constitution</h2>
        <p className="text-muted-foreground leading-relaxed">
          The constitution of Medialane DAO is the foundational document governing the organization&apos;s
          purpose, membership, governance structure, and values.
        </p>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span>Ratified April 7, 2026</span>
          <span>·</span>
          <span>Canonical version at medialane.org</span>
        </div>
      </div>

      <div className="space-y-6">
        {ARTICLES.map(({ article, title, content }) => (
          <div key={article} className="bento-cell p-6 space-y-3">
            <div className="space-y-1">
              <p className="text-xs font-semibold text-primary/70 uppercase tracking-widest">{article}</p>
              <h3 className="font-bold text-base">{title}</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{content}</p>
          </div>
        ))}
      </div>

      <div className="bento-cell p-5 space-y-2 text-sm text-muted-foreground">
        <p className="font-semibold text-foreground">Status: Ratified</p>
        <p>
          This summary mirrors the ratified Medialane DAO constitution. For the authoritative
          document, token addresses, and live governance links, use the DAO hub at{" "}
          <a href="https://medialane.org/docs/Constitution-of-Medialane-DAO" className="text-primary hover:underline">
            medialane.org
          </a>. For the current fee and revenue model, see{" "}
          <a href="/docs/fees" className="text-primary hover:underline">Fees &amp; Revenue</a>.
        </p>
      </div>

    </div>
  );
}
