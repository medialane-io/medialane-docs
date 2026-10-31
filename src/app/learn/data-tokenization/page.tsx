import type { Metadata } from "next";
import Link from "next/link";
import { FlowPage, type FlowContent } from "@/components/docs/flow-page";

const title = "Data Tokenization | Learn | Medialane";
const description = "Learn how Data Tokenization registers a whole catalog at once, with authorship, date, license terms and an AI policy recorded for every item.";

export const metadata: Metadata = {
  alternates: { canonical: "https://docs.medialane.io/learn/data-tokenization" },
  title,
  description,
  openGraph: { title, description, url: "https://docs.medialane.io/learn/data-tokenization" },
  twitter: { title, description },
};

const content: FlowContent = {
  title: "Data Tokenization",
  lead: "Data Tokenization registers a whole catalog at once. Every item is minted to its own collection with its authorship, date and license terms recorded permanently, so the terms travel with each item wherever it goes.",
  serviceId: "data-tokenization-erc721",
  see: (
    <>
      See <Link href="/learn/programmable-licensing" className="text-primary hover:underline">Programmable Licensing</Link> for the terms an item can carry.
    </>
  ),
  gets: [
    "Authorship and date recorded for every item, in content-addressed metadata anyone can verify",
    "License type, commercial use, derivatives, attribution, territory and royalty recorded with every item",
    "An AI policy for each item: Allowed, Training Only or Not Allowed",
    "Every item minted to the owner&apos;s own wallet, into an existing collection or one created along with it",
  ],
};

export default function LearnDataTokenizationPage() {
  return <FlowPage content={content} />;
}
