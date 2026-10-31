import type { Metadata } from "next";
import Link from "next/link";
import { FlowPage, type FlowContent } from "@/components/docs/flow-page";

const title = "IP Ticketing | Learn | Medialane";
const description = "Learn how IP Ticketing issues tickets with their own supply and validity window to a guest list.";

export const metadata: Metadata = {
  alternates: { canonical: "https://docs.medialane.io/learn/ip-ticketing" },
  title,
  description,
  openGraph: { title, description, url: "https://docs.medialane.io/learn/ip-ticketing" },
  twitter: { title, description },
};

const content: FlowContent = {
  title: "IP Ticketing",
  lead: "IP Ticketing issues tickets to a guest list. Each ticket type has its own supply and validity window, and every ticket can be checked directly against the chain.",
  serviceId: "ip-ticketing",
  see: (
    <>
      For tickets created one at a time and traded on the marketplace, see <Link href="/learn/ip-tickets" className="text-primary hover:underline">IP Tickets</Link>.
    </>
  ),
  gets: [
    "Each ticket type has its own supply and a start and end time",
    "Every guest on the list receives a ticket",
    "Each ticket is set to be passed on or stay with its original holder or stays with its original holder",
    "Tickets are verified against the chain directly, by anyone",
    "Every ticket carries its terms, including an AI policy, in its record",
    "Issue new tickets into an existing group",
  ],
};

export default function LearnIPTicketingPage() {
  return <FlowPage content={content} />;
}
