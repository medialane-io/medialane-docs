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
    "Every guest on your list receives a ticket",
    "You choose per ticket whether it can be passed on or stays with its original holder",
    "Tickets are verified against the chain directly, by anyone",
    "Every ticket carries its terms, including an AI policy, in its record",
    "Issue new tickets into a group you already created",
  ],
  steps: [
    { title: "Choose a ticket group", desc: "Use an existing group, or name a new one." },
    { title: "Create the ticket", desc: "Add a name, artwork, a supply and the validity window." },
    { title: "Add your guests", desc: "Paste or upload the guest list." },
    { title: "Pay and run", desc: "Pay once for the run, then approve each batch with your passkey." },
  ],
  resume: "A run is saved as you go. If a batch is interrupted, you resume where it stopped.",
  portalHref: "https://portal.medialane.io/launchpad/ip-ticketing",
};

export default function LearnIPTicketingPage() {
  return <FlowPage content={content} />;
}
