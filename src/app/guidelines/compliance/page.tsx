import type { Metadata } from "next";
import { Scale, Shield, Globe, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Compliance | Medialane",
  description: "Medialane compliance framework — KYC/AML, IP law, securities regulations, and data protection.",
  openGraph: {
    title: "Compliance | Medialane",
    description: "Medialane compliance framework — KYC/AML, IP law, securities regulations, and data protection.",
    url: "https://docs.medialane.io/guidelines/compliance",
  },
  twitter: {
    title: "Compliance | Medialane",
    description: "Medialane compliance framework — KYC/AML, IP law, securities regulations, and data protection.",
  },
};

const AREAS = [
  {
    icon: FileCheck,
    title: "Intellectual Property",
    description:
      "Medialane operates in alignment with the Berne Convention, providing automatic copyright protection in 181 countries from the moment of creation. The platform's IP registration layer is designed to complement, not replace, existing legal frameworks. DMCA takedown procedures are followed for copyright infringement reports.",
  },
  {
    icon: Scale,
    title: "KYC / AML",
    description:
      "Medialane applies Know Your Customer (KYC) and Anti-Money Laundering (AML) procedures commensurate with risk and applicable regulations. High-value transactions and certain marketplace activities may require identity verification. We monitor for and report suspicious activity as required by law.",
  },
  {
    icon: Globe,
    title: "Sanctions Screening",
    description:
      "Medialane screens users and transactions against OFAC Specially Designated Nationals (SDN) lists and other applicable sanctions lists. Users in sanctioned jurisdictions or matching sanctions lists are blocked from accessing platform services.",
  },
  {
    icon: Shield,
    title: "Data Protection",
    description:
      "We apply GDPR principles to the processing of personal data for users in the European Economic Area and follow equivalent standards globally. Data minimization, purpose limitation, and user rights (access, deletion, portability) are core to our data handling practices.",
  },
];

export default function CompliancePage() {
  return (
    <div className="space-y-10 max-w-3xl">

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Scale className="h-5 w-5 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">Legal</span>
        </div>
        <h2 className="text-2xl font-bold">Compliance</h2>
        <p className="text-muted-foreground leading-relaxed">
          Medialane is committed to operating within applicable legal frameworks. Our compliance approach
          covers intellectual property law, financial regulation, sanctions, and data protection.
        </p>
        <p className="text-xs text-muted-foreground">Last updated: January 2025</p>
      </div>

      <div className="space-y-4">
        {AREAS.map(({ icon: Icon, title, description }) => (
          <div key={title} className="bento-cell p-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <h3 className="font-semibold">{title}</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Securities Considerations</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          NFTs on Medialane represent creative intellectual property, not investment contracts. We do not
          offer, promote, or facilitate the purchase or sale of securities. The MDLN token is a governance
          token used for DAO participation. Users are responsible for understanding the regulatory treatment
          of digital assets in their own jurisdiction.
        </p>
      </div>

      <div className="bento-cell p-5 text-sm text-muted-foreground">
        For compliance inquiries, regulatory correspondence, or DMCA notices, contact{" "}
        <a href="mailto:compliance@medialane.io" className="text-primary hover:underline">compliance@medialane.io</a>.
      </div>

    </div>
  );
}
