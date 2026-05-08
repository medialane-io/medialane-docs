import type { Metadata } from "next";
import { Users, Heart, Flag, Gavel, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Community Guidelines | Medialane",
  description: "Rules and standards for participation in the Medialane community.",
  openGraph: {
    title: "Community Guidelines | Medialane",
    description: "Rules and standards for participation in the Medialane community.",
    url: "https://docs.medialane.io/guidelines/community",
  },
  twitter: {
    title: "Community Guidelines | Medialane",
    description: "Rules and standards for participation in the Medialane community.",
  },
};

const PRINCIPLES = [
  {
    icon: Heart,
    title: "Be Respectful",
    description: "Treat all community members with respect regardless of background, experience, or opinion. Constructive disagreement is welcome; harassment, hate speech, and personal attacks are not.",
  },
  {
    icon: MessageSquare,
    title: "Communicate Honestly",
    description: "Share genuine feedback and accurate information. Do not spread misinformation about the platform, other projects, or community members. Attribution and credit matter.",
  },
  {
    icon: Flag,
    title: "Report Violations",
    description: "If you see content or behavior that violates these guidelines, report it using the in-platform reporting tools or by emailing community@medialane.io. Do not engage or escalate directly.",
  },
  {
    icon: Gavel,
    title: "Understand Enforcement",
    description: "Violations may result in content removal, temporary suspension, or permanent ban depending on severity and history. Serious violations (illegal content, fraud, abuse) result in immediate permanent removal.",
  },
];

const RULES = [
  { rule: "No harassment, hate speech, or targeted abuse toward individuals or groups." },
  { rule: "No spam, phishing links, or promotional content in community spaces without permission." },
  { rule: "No impersonation of Medialane team members, creators, or other community participants." },
  { rule: "No promotion of illegal activities, financial scams, or fraudulent NFT schemes." },
  { rule: "No coordinated manipulation of votes, sales, or rankings." },
  { rule: "No sharing of others' private information (doxxing) without their consent." },
  { rule: "No content that sexualizes minors in any form." },
  { rule: "No deliberate interference with platform operations or smart contracts." },
];

export default function CommunityGuidelinesPage() {
  return (
    <div className="space-y-10 max-w-3xl">

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">Community</span>
        </div>
        <h2 className="text-2xl font-bold">Community Guidelines</h2>
        <p className="text-muted-foreground leading-relaxed">
          Medialane is built on the idea that creators and collectors deserve a fair, transparent marketplace.
          These guidelines exist to keep our community safe, respectful, and productive for everyone.
        </p>
        <p className="text-xs text-muted-foreground">Last updated: January 2025</p>
      </div>

      {/* Core principles */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Core Principles</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PRINCIPLES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bento-cell p-5 space-y-3">
              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <h4 className="font-semibold text-sm">{title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Rules list */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Prohibited Behavior</h3>
        <div className="space-y-2">
          {RULES.map(({ rule }, i) => (
            <div key={i} className="flex items-start gap-3 px-4 py-3 rounded-lg border border-border/60 bg-muted/20">
              <span className="text-xs font-mono text-muted-foreground/60 pt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-sm text-muted-foreground leading-relaxed">{rule}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Content standards */}
      <div className="bento-cell p-6 space-y-3">
        <h3 className="font-semibold">Content Standards</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          All NFTs listed on Medialane must represent original or properly licensed creative work. The creator warrants they
          hold the rights to mint the IP they register. Content that infringes on third-party rights, contains illegal material,
          or violates platform terms will be removed. Repeat violators will be permanently banned.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          For DMCA / copyright takedown requests, email <a href="mailto:dmca@medialane.io" className="text-primary hover:underline">dmca@medialane.io</a>.
        </p>
      </div>

    </div>
  );
}
