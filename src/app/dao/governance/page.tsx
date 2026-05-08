import type { Metadata } from "next";
import { Vote, ExternalLink, Clock, CheckCircle2, Users, Landmark } from "lucide-react";

export const metadata: Metadata = {
  title: "Governance Charter | Medialane DAO",
  description: "How Medialane DAO governance works — proposals, voting, quorum, and execution.",
  openGraph: {
    title: "Governance Charter | Medialane DAO",
    description: "How Medialane DAO governance works — proposals, voting, quorum, and execution.",
    url: "https://docs.medialane.io/dao/governance",
  },
  twitter: {
    title: "Governance Charter | Medialane DAO",
    description: "How Medialane DAO governance works — proposals, voting, quorum, and execution.",
  },
};

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Temperature Check",
    description: "Any community member can post an idea in the governance forum for informal discussion. This phase lasts 5 days minimum. Ideas with community support move to a formal proposal.",
  },
  {
    step: "02",
    title: "Draft Proposal",
    description: "The proposer formalizes the idea with a title, summary, motivation, specification, and implementation plan. Draft proposals are published in the governance forum for community feedback before submission.",
  },
  {
    step: "03",
    title: "Snapshot Submission",
    description: "To submit a formal governance proposal, a Contributor-tier member must hold or have delegated to them at least 100 MDLN. This threshold prevents spam while keeping governance accessible.",
  },
  {
    step: "04",
    title: "Deliberation Period",
    description: "All proposals have a mandatory 7-day deliberation period before voting opens. This gives all stakeholders time to review the proposal, ask questions, and form their positions.",
  },
  {
    step: "05",
    title: "Voting",
    description: "Voting runs for 5 days on Snapshot (off-chain, gasless). Each MDLN token represents one vote. Members can vote Yes, No, or Abstain. Votes can be delegated to trusted community representatives.",
  },
  {
    step: "06",
    title: "Execution",
    description: "Proposals passing with simple majority (>50%) and meeting quorum are queued for execution. Treasury proposals require multi-sig execution. Protocol upgrades follow a 48-hour timelock.",
  },
];

const THRESHOLDS = [
  { type: "Standard Proposal", quorum: "Snapshot configuration", threshold: "Simple majority" },
  { type: "Treasury Allocation", quorum: "Snapshot configuration", threshold: "DAO approval + multisig execution" },
  { type: "Protocol Upgrade", quorum: "Snapshot configuration", threshold: "DAO approval + implementation review" },
  { type: "Constitutional Amendment", quorum: "Snapshot configuration", threshold: "Supermajority (>66%)" },
  { type: "Governance Charter Amendment", quorum: "Snapshot configuration", threshold: "Supermajority (>66%)" },
];

export default function GovernancePage() {
  return (
    <div className="space-y-12 max-w-3xl">

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Vote className="h-5 w-5 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">Operations</span>
        </div>
        <h2 className="text-2xl font-bold">Governance Charter</h2>
        <p className="text-muted-foreground leading-relaxed">
          The Governance Charter defines how Medialane DAO makes decisions — the proposal lifecycle,
          voting mechanics, quorum requirements, and execution process.
        </p>
        <p className="text-xs text-muted-foreground">Ratified April 7, 2026 · Snapshot: medialane.eth</p>
      </div>

      {/* Governance process */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Proposal Lifecycle</h3>
        <div className="space-y-3">
          {PROCESS_STEPS.map(({ step, title, description }) => (
            <div key={step} className="flex items-start gap-4 bento-cell p-5">
              <span className="text-2xl font-bold text-primary/30 font-mono shrink-0 leading-none pt-0.5">{step}</span>
              <div className="space-y-1.5">
                <h4 className="font-semibold text-sm">{title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Voting thresholds */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Voting Thresholds</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/60">
                <th className="text-left pb-2 text-xs font-semibold text-muted-foreground">Proposal Type</th>
                <th className="text-left pb-2 text-xs font-semibold text-muted-foreground">Quorum</th>
                <th className="text-left pb-2 text-xs font-semibold text-muted-foreground">Approval</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40">
              {THRESHOLDS.map(({ type, quorum, threshold }) => (
                <tr key={type}>
                  <td className="py-2.5 font-medium text-sm">{type}</td>
                  <td className="py-2.5 text-xs text-muted-foreground">{quorum}</td>
                  <td className="py-2.5 text-xs text-muted-foreground">{threshold}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key roles */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Key Roles</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { icon: Users, title: "Token Holders", desc: "Participate in governance by voting or delegating MDLN tokens." },
            { icon: Landmark, title: "Multi-sig Council", desc: "Elected signatories execute treasury proposals as authorized by governance." },
            { icon: CheckCircle2, title: "Delegates", desc: "Token holders who have received delegated voting power from the community." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bento-cell p-4 space-y-2">
              <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <p className="font-semibold text-sm">{title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeframes */}
      <div className="bento-cell p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-primary" />
          <h3 className="font-semibold text-sm">Standard Timeline</h3>
        </div>
        <p className="text-xs text-muted-foreground">Temperature check (5d) → Draft & feedback (7d) → Deliberation (7d) → Voting (5d) → Execution queue (48h)</p>
        <p className="text-xs text-muted-foreground">Total minimum: ~26 days from idea to execution for standard proposals.</p>
      </div>

      {/* Snapshot link */}
      <a
        href="https://snapshot.org/#/s:medialane.eth"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
      >
        Vote on Snapshot <ExternalLink className="h-4 w-4" />
      </a>

    </div>
  );
}
