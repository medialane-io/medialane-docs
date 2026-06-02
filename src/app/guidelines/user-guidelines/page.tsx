import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/docs";

export const metadata: Metadata = {
  title: "User Guidelines | Medialane",
  description: "How to use the Medialane platform responsibly — account rules, content standards, marketplace conduct, and wallet security.",
  openGraph: {
    title: "User Guidelines | Medialane",
    description: "How to use the Medialane platform responsibly — account rules, content standards, marketplace conduct, and wallet security.",
    url: "https://docs.medialane.io/guidelines/user-guidelines",
  },
  twitter: {
    title: "User Guidelines | Medialane",
    description: "How to use the Medialane platform responsibly — account rules, content standards, marketplace conduct, and wallet security.",
  },
};

export default function UserGuidelinesPage() {
  return (
    <div className="space-y-10 max-w-3xl">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">User Guidelines</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Medialane is an open platform built on trust between creators, collectors, and the
          community. These guidelines exist alongside our Terms of Use and apply to all
          users — creators, collectors, and developers.
        </p>
        <p className="text-xs text-muted-foreground">Last updated: January 2026</p>
      </div>

      <div className="space-y-8">
        <Section title="Account Rules">
          <p>
            Each user may hold one Medialane account, tied to your Clerk authentication
            identity. Sharing accounts, or using automation to create multiple accounts
            (including to circumvent a ban), is prohibited and may result in permanent
            suspension. Accounts showing signs of bot activity or automated abuse may be
            suspended without notice.
          </p>
          <p>
            You are responsible for all activity under your account. Keep your credentials
            (PIN, passkey) secure and never share them.
          </p>
        </Section>

        <Section title="Content Standards">
          <p>All content minted on Medialane must comply with the following standards:</p>
          <ul className="list-disc list-inside space-y-1.5 text-sm">
            <li>You must own or have explicit rights to the content you mint</li>
            <li>Content must not infringe the copyright or trademark of any third party</li>
            <li>Content must not be illegal in your jurisdiction or the jurisdictions of our users</li>
            <li><strong className="text-foreground">No child sexual abuse material (CSAM)</strong> — zero tolerance, permanent ban</li>
            <li>No non-consensual intimate imagery (NCII)</li>
            <li>No content designed to harass, threaten, or dox specific individuals</li>
            <li>No content that promotes violence against specific groups or individuals</li>
          </ul>
        </Section>

        <Section title="Acceptable Use">
          <ul className="list-disc list-inside space-y-1.5 text-sm">
            <li>Use Medialane only for lawful purposes and in accordance with these guidelines.</li>
            <li>Only mint or list IP to which you hold the rights — plagiarism and infringement are violations.</li>
            <li>NFT metadata (title, description, attributes) must be accurate and not misleading.</li>
            <li>Pricing must reflect genuine intent to sell.</li>
          </ul>
        </Section>

        <Section title="Intellectual Property">
          <p>
            By minting content on Medialane you represent and warrant that you are the
            original creator of the work or hold a valid license to mint it as an NFT.
            Minting content you do not own — including screenshots of others&apos; work,
            AI-generated content from models trained on unlicensed data, or remixes without
            appropriate rights — is a violation of these guidelines and may expose you to
            legal liability.
          </p>
          <p>
            If you believe your intellectual property has been infringed by content on
            Medialane, contact{" "}
            <a href="mailto:dmca@medialane.io" className="text-primary hover:underline">dmca@medialane.io</a>{" "}
            with details of the alleged infringement.
          </p>
        </Section>

        <Section title="Marketplace Conduct">
          <p>All marketplace transactions must be conducted in good faith. The following are prohibited:</p>
          <ul className="list-disc list-inside space-y-1.5 text-sm">
            <li>Wash trading — buying and selling to yourself to inflate volume metrics</li>
            <li>Shill bidding — placing offers you do not intend to honour</li>
            <li>Misleading listings — misrepresenting the content, rights, or provenance of an asset</li>
            <li>Manipulation of floor prices through coordinated activity</li>
            <li>Using the platform to launder funds or circumvent financial regulations</li>
            <li>Exploiting platform bugs for financial gain without responsible disclosure</li>
            <li>Automating interactions (bots, scrapers) without explicit API permission</li>
          </ul>
        </Section>

        <Section title="Wallet &amp; Session Security">
          <p>
            Your Medialane wallet is derived from your authentication session and secured by
            your PIN. Session keys are valid for a limited window (typically 6 hours) for your
            protection. Never share your PIN or session key, or authorize sessions on devices
            you do not control.
          </p>
          <p>
            If you suspect unauthorized access, revoke all session keys immediately via
            Portfolio → Settings and contact support.{" "}
            <strong className="text-foreground">Medialane will never ask for your PIN, seed
            phrase, private key, or passkey</strong> — by email, chat, or any other channel.
          </p>
        </Section>

        <Section title="Enforcement">
          <p>
            Violations may result in content removal, temporary suspension, or permanent
            account termination depending on severity. We reserve the right to remove content
            that violates these guidelines at our discretion. Appeals can be submitted to{" "}
            <a href="mailto:support@medialane.io" className="text-primary hover:underline">support@medialane.io</a>.
          </p>
          <p>
            See also our{" "}
            <Link href="/guidelines/community" className="text-primary hover:underline">Community Guidelines</Link>
            {" "}and{" "}
            <Link href="/guidelines/terms" className="text-primary hover:underline">Terms of Use</Link>.
          </p>
        </Section>
      </div>
    </div>
  );
}
