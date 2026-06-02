import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/docs";

export const metadata: Metadata = {
  title: "Compliance | Medialane",
  description: "Medialane's approach to regulatory compliance — KYC/AML, IP law, securities, taxation, sanctions, data protection, and DAO liability.",
  openGraph: {
    title: "Compliance | Medialane",
    description: "Medialane's approach to regulatory compliance — KYC/AML, IP law, securities, taxation, sanctions, data protection, and DAO liability.",
    url: "https://docs.medialane.io/guidelines/compliance",
  },
  twitter: {
    title: "Compliance | Medialane",
    description: "Medialane's approach to regulatory compliance — KYC/AML, IP law, securities, taxation, sanctions, data protection, and DAO liability.",
  },
};

export default function CompliancePage() {
  return (
    <div className="space-y-10 max-w-3xl">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Compliance</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Medialane operates at the intersection of blockchain technology, intellectual
          property law, and global financial regulation. These guidelines outline our
          approach to compliance and what it means for users of the platform.
        </p>
        <p className="text-xs text-muted-foreground">Last updated: January 2026</p>
      </div>

      <div className="space-y-8">
        <Section title="Overview">
          <p>
            Medialane is built on the{" "}
            <strong className="text-foreground">Mediolano protocol</strong> — a
            permissionless, open-source IP protection and licensing infrastructure.
            The decentralized architecture is designed to comply with applicable laws
            while preserving user privacy and sovereignty.
          </p>
        </Section>

        <Section title="Intellectual Property Law">
          <p>
            Medialane upholds international IP standards. The Mediolano protocol is
            specifically designed to align with:
          </p>
          <div className="space-y-2">
            {[
              {
                title: "Berne Convention (1886)",
                desc: "Administered by WIPO. Ensures automatic copyright protection across 181 signatory countries from the moment a work is fixed — no registration required.",
              },
              {
                title: "WIPO Copyright Treaty",
                desc: "Extends Berne Convention protections to the digital environment, covering digital works and online distribution rights.",
              },
              {
                title: "DMCA (Digital Millennium Copyright Act)",
                desc: "Medialane implements DMCA takedown procedures for its platform interface. Report infringing content to dmca@medialane.io.",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bento-cell px-4 py-3 space-y-1">
                <p className="text-sm font-semibold text-foreground">{title}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="KYC / AML Policy">
          <p>As a non-custodial platform:</p>
          <ul className="list-disc list-inside space-y-1.5 text-sm">
            <li>Medialane <strong className="text-foreground">does not hold user funds</strong> — assets remain in user-controlled wallets at all times.</li>
            <li>We do not perform Know Your Customer (KYC) checks on general users.</li>
            <li>We implement wallet screening to block addresses associated with known illicit activity.</li>
          </ul>
          <p>
            This non-custodial model means Medialane is not a money services business (MSB)
            under most jurisdictions. Users are responsible for their own compliance with
            local financial regulations.
          </p>
        </Section>

        <Section title="Securities Regulations">
          <p>
            IP tokens generated on Medialane and the Mediolano protocol are{" "}
            <strong className="text-foreground">utility tokens</strong> representing
            ownership or licensing rights over a specific creative work — not investment
            contracts or financial instruments. The MDLN token is a{" "}
            <strong className="text-foreground">governance token</strong> used for DAO
            participation, not an investment product.
          </p>
          <p>
            Users who wish to fractionalize IP tokens or sell them in ways that could
            constitute a securities offering should consult qualified legal counsel to
            ensure compliance with applicable securities laws in their jurisdiction.
          </p>
        </Section>

        <Section title="Taxation">
          <p>
            Users are responsible for determining and paying any applicable taxes on
            earnings derived from IP licensing, sales, royalties, or other platform
            activity. Medialane does not withhold taxes and does not provide tax advice.
          </p>
          <p>
            Tax treatment of NFT sales and crypto-based royalties varies significantly
            by jurisdiction. Consult a qualified tax professional in your country before
            engaging in significant trading or licensing activity.
          </p>
        </Section>

        <Section title="Sanctions Compliance">
          <p>
            Medialane screens users and transactions against OFAC (Office of Foreign
            Assets Control) Specially Designated Nationals (SDN) lists and equivalent
            international restrictions. Access by individuals or entities in sanctioned
            jurisdictions, or by sanctioned individuals, is prohibited.
          </p>
        </Section>

        <Section title="Data Protection">
          <p>
            Medialane applies <strong className="text-foreground">GDPR</strong> principles
            to personal data for users in the European Economic Area and follows equivalent
            standards globally (including <strong className="text-foreground">CCPA</strong>) —
            data minimization, purpose limitation, and user rights (access, deletion,
            portability) are core to our data-handling practices.
          </p>
          <p>
            On-chain data — transactions, wallet addresses, token metadata — is inherently
            public and permanent on Starknet. Off-platform user data (email, authentication)
            is handled by Clerk in accordance with their privacy policies. See our{" "}
            <Link href="/guidelines/privacy" className="text-primary hover:underline">Privacy Policy</Link>{" "}
            for full details.
          </p>
        </Section>

        <Section title="DAO Liability">
          <p>
            Medialane DAO is the governance organization overseeing long-term platform
            governance. The liability exposure of DAO contributors and token holders varies
            by jurisdiction and depends on how regulators classify DAOs in each location.
            Users should seek qualified legal advice in their jurisdiction before relying on
            any assumptions about liability.
          </p>
          <p>
            Decisions affecting the protocol and platform are made through transparent
            community governance. The DAO does not provide legal services or legal opinions.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Compliance inquiries and regulatory correspondence:{" "}
            <a href="mailto:compliance@medialane.io" className="text-primary hover:underline">compliance@medialane.io</a>{" "}
            or{" "}
            <a href="mailto:dao@medialane.org" className="text-primary hover:underline">dao@medialane.org</a>.
            <br />
            DMCA / copyright notices:{" "}
            <a href="mailto:dmca@medialane.io" className="text-primary hover:underline">dmca@medialane.io</a>.
          </p>
        </Section>
      </div>
    </div>
  );
}
