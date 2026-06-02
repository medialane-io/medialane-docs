import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/docs";

export const metadata: Metadata = {
  title: "Community Guidelines | Medialane",
  description: "Rules for community participation, content standards, fair markets, moderation, and how violations are handled on Medialane.",
  openGraph: {
    title: "Community Guidelines | Medialane",
    description: "Rules for community participation, content standards, fair markets, moderation, and how violations are handled on Medialane.",
    url: "https://docs.medialane.io/guidelines/community",
  },
  twitter: {
    title: "Community Guidelines | Medialane",
    description: "Rules for community participation, content standards, fair markets, moderation, and how violations are handled on Medialane.",
  },
};

const PROHIBITED = [
  "No harassment, hate speech, or targeted abuse toward individuals or groups.",
  "No spam, phishing links, or promotional content in community spaces without permission.",
  "No impersonation of Medialane team members, creators, or other community participants.",
  "No promotion of illegal activities, financial scams, or fraudulent NFT schemes.",
  "No coordinated manipulation of votes, sales, or rankings.",
  "No sharing of others' private information (doxxing) without their consent.",
  "No content that sexualizes minors in any form.",
  "No deliberate interference with platform operations or smart contracts.",
];

export default function CommunityGuidelinesPage() {
  return (
    <div className="space-y-10 max-w-3xl">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Community Guidelines</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Medialane is a creative community. These guidelines exist to keep it respectful,
          fair, and valuable for every creator, collector, and developer who participates.
        </p>
        <p className="text-xs text-muted-foreground">Last updated: January 2026</p>
      </div>

      <div className="space-y-8">
        <Section title="Our Values">
          <p>
            We believe in creator sovereignty, transparent markets, and open technology.
            Medialane should be a place where original work is celebrated, ownership is
            verifiable, and transactions are honest. Communicate honestly — share genuine
            feedback and accurate information; attribution and credit matter. These values
            shape every rule below.
          </p>
        </Section>

        <Section title="Respectful Participation">
          <p>Treat every member of the community with respect. The following are not tolerated:</p>
          <ul className="list-disc list-inside space-y-1.5 text-sm">
            <li>Harassment, bullying, or targeted abuse of any platform member</li>
            <li>Hate speech based on race, ethnicity, gender, sexuality, religion, or disability</li>
            <li>Sharing private information about others without consent (doxxing)</li>
            <li>Impersonating other creators, collectors, or Medialane staff</li>
            <li>Coordinated harassment campaigns against individuals or groups</li>
          </ul>
        </Section>

        <Section title="Authentic Content">
          <p>
            The integrity of the Medialane marketplace depends on authentic content and
            honest provenance. All assets must represent original or properly licensed work,
            and the creator warrants they hold the rights to the IP they register. Do not:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm">
            <li>Mint content you did not create or do not have rights to</li>
            <li>Misrepresent the origin, edition size, or rights attached to an asset</li>
            <li>Copy another creator&apos;s collection name, artwork, or brand identity to deceive buyers</li>
            <li>Use misleading descriptions or metadata to manipulate purchase decisions</li>
          </ul>
        </Section>

        <Section title="Fair Markets">
          <p>We are committed to fair and transparent markets. Prohibited market activities include:</p>
          <ul className="list-disc list-inside space-y-1.5 text-sm">
            <li>Wash trading — transacting with yourself to inflate volume or price history</li>
            <li>Coordinated price manipulation</li>
            <li>Shill bidding — placing offers you never intend to honour</li>
            <li>Artificially inflating floor prices through collusion</li>
          </ul>
        </Section>

        <Section title="Spam and Automation">
          <p>
            Do not use automated tools to spam listings, offers, or API endpoints. Do not
            mass-mint low-effort content to game discovery or search rankings. Accounts found
            engaging in spam behaviour will be rate-limited or suspended.
          </p>
        </Section>

        <Section title="Prohibited Behavior">
          <p>The following are never permitted, in any community space or on the platform:</p>
          <div className="space-y-2">
            {PROHIBITED.map((rule, i) => (
              <div key={i} className="flex items-start gap-3 px-4 py-3 rounded-lg border border-border/60 bg-muted/20">
                <span className="text-xs font-mono text-muted-foreground/60 pt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-muted-foreground leading-relaxed">{rule}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Reporting Violations">
          <p>
            If you encounter content or behaviour that violates these guidelines, report it to{" "}
            <a href="mailto:trust@medialane.io" className="text-primary hover:underline">trust@medialane.io</a>{" "}
            (or{" "}
            <a href="mailto:community@medialane.io" className="text-primary hover:underline">community@medialane.io</a>)
            with as much detail as possible — asset links, transaction hashes, or screenshots
            where relevant. Do not engage or escalate directly.
          </p>
          <p>
            For copyright infringement specifically, use{" "}
            <a href="mailto:dmca@medialane.io" className="text-primary hover:underline">dmca@medialane.io</a>.
          </p>
        </Section>

        <Section title="Enforcement">
          <p>
            Violations are handled on a case-by-case basis. Actions may include content
            removal, temporary suspension, or permanent ban — severity, intent, and prior
            history are all considered. Serious violations (illegal content, fraud, abuse)
            result in immediate permanent removal. We do not remove content based solely on
            subjective taste — only clear violations of these guidelines.
          </p>
          <p>
            Appeals can be submitted to{" "}
            <a href="mailto:support@medialane.io" className="text-primary hover:underline">support@medialane.io</a>.
            We aim to respond to all appeals within 5 business days.
          </p>
        </Section>

        <Section title="Updates to These Guidelines">
          <p>
            These guidelines may be updated as the platform evolves. Significant changes will
            be announced via our official channels. Continued use of the platform after changes
            constitutes acceptance of the updated guidelines.
          </p>
          <p>
            See also our{" "}
            <Link href="/guidelines/user-guidelines" className="text-primary hover:underline">User Guidelines</Link>
            {" "}and{" "}
            <Link href="/guidelines/terms" className="text-primary hover:underline">Terms of Use</Link>.
          </p>
        </Section>
      </div>
    </div>
  );
}
