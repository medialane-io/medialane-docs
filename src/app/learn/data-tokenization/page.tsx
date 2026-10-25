import type { Metadata } from "next";
import Link from "next/link";
import { FlowPage, type FlowContent } from "@/components/docs/flow-page";

const title = "Data Tokenization | Learn | Medialane";
const description = "Learn how Data Tokenization registers a whole catalog in one run, with authorship, date, license terms and an AI policy recorded for every item.";

export const metadata: Metadata = {
  alternates: { canonical: "https://docs.medialane.io/learn/data-tokenization" },
  title,
  description,
  openGraph: { title, description, url: "https://docs.medialane.io/learn/data-tokenization" },
  twitter: { title, description },
};

const content: FlowContent = {
  title: "Data Tokenization",
  lead: "Data Tokenization registers a whole catalog in one run. Every item is minted to your own collection with its authorship, date and license terms recorded permanently, so the terms travel with each item wherever it goes.",
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
    "Every item minted to your own wallet, into a collection you own or one created as part of the run",
  ],
  steps: [
    { title: "Choose a collection", desc: "Pick one you own, or name a new one." },
    { title: "Add your items", desc: "Add a CSV with one row per item, together with the files it names. Each item has a name, a type and optional traits." },
    { title: "Set the terms", desc: "Choose the license, commercial use, territory and AI policy once. They apply to every item in the run." },
    { title: "Pay and run", desc: "Pay once for the run, then approve each batch with your passkey." },
  ],
  resume: "A run is saved as you go. If a batch is interrupted, you resume where it stopped.",
  portalHref: "https://portal.medialane.io/launchpad/data-tokenization",
};

export default function LearnDataTokenizationPage() {
  return <FlowPage content={content} />;
}
