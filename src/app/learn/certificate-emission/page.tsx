import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/docs";

const title = "Certificate Emission | Learn | Medialane";
const description = "Learn how Certificate Emission issues non-transferable certificates to a list of recipients.";

export const metadata: Metadata = {
  alternates: { canonical: "https://docs.medialane.io/learn/certificate-emission" },
  title,
  description,
  openGraph: { title, description, url: "https://docs.medialane.io/learn/certificate-emission" },
  twitter: { title, description },
};

const certificateTraits = [
  "Issued to one recipient and non-transferable. It stays with them, and only they can remove it.",
  "One certificate per recipient in each collection.",
  "Recorded onchain with the recipient, so there is no file to store or misplace.",
  "Verifiable by anyone against the chain.",
  "Described by the name, description and artwork the issuer chooses.",
  "Issued with license terms and an AI policy recorded alongside it.",
];

export default function LearnCertificateEmissionPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Certificate Emission</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Certificate Emission issues a certificate to everyone on a list, in one go. Each recipient
          receives their own non-transferable certificate, and anyone can confirm it against the chain
          without asking the issuer.
        </p>
        <p className="text-base text-muted-foreground">
          Service ID:{" "}
          <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">certificate-emission</code>{" "}
          For proof-of-participation credentials created independently, see{" "}
          <Link href="/learn/pop-protocol" className="text-primary hover:underline">POP Protocol</Link>.
        </p>
      </div>

      <div className="space-y-8">
        <Section title="What every certificate is">
          <ul className="list-disc list-inside space-y-1.5 text-sm">
            {certificateTraits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section title="Recipients">
          <p>
            Recipients don&apos;t need a wallet beforehand. Everyone on the list receives a wallet and
            their certificate.
          </p>
        </Section>

        <Section title="Collections">
          <p>
            Certificates go into a collection. Use an existing one or create a new one, and add more
            certificates to the same collection later.
          </p>
        </Section>
      </div>
    </div>
  );
}
