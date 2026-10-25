import type { Metadata } from "next";
import Link from "next/link";
import { FlowPage, type FlowContent } from "@/components/docs/flow-page";

const title = "Certificate Emission | Learn | Medialane";
const description = "Learn how Certificate Emission issues non-transferable certificates to a list of recipients.";

export const metadata: Metadata = {
  alternates: { canonical: "https://docs.medialane.io/learn/certificate-emission" },
  title,
  description,
  openGraph: { title, description, url: "https://docs.medialane.io/learn/certificate-emission" },
  twitter: { title, description },
};

const content: FlowContent = {
  title: "Certificate Emission",
  lead: "Certificate Emission issues non-transferable certificates to a list of recipients. Each recipient keeps their certificate, and anyone can confirm it against the chain without asking you.",
  serviceId: "certificate-emission",
  see: (
    <>
      For soulbound proof-of-participation credentials, see <Link href="/learn/pop-protocol" className="text-primary hover:underline">POP Protocol</Link>.
    </>
  ),
  gets: [
    "Each certificate is non-transferable, so every recipient keeps the one they are issued",
    "The record lives onchain with the recipient, so there is no file to store or misplace",
    "Anyone can confirm a certificate against the chain",
    "License terms and an AI policy are recorded with the certificate",
    "Issue more certificates into the same collection later",
  ],
  steps: [
    { title: "Choose a collection", desc: "Use an existing one, or name a new one." },
    { title: "Describe the certificate", desc: "Add a name, a description and artwork." },
    { title: "Add your recipients", desc: "Paste your recipient list." },
    { title: "Pay and run", desc: "Pay once for the run, then approve each batch with your passkey." },
  ],
  resume: "A run is saved as you go. If a batch is interrupted, you resume where it stopped.",
  portalHref: "https://portal.medialane.io/launchpad/certificate-emission",
};

export default function LearnCertificateEmissionPage() {
  return <FlowPage content={content} />;
}
