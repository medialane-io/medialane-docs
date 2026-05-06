import type { Metadata } from "next";
import { HomePage } from "@/components/home";

export const metadata: Metadata = {
  title: "Medialane Docs — Knowledge Hub",
  description:
    "Documentation, guides, support, and institutional content for Medialane creator capital markets on Starknet.",
  openGraph: {
    title: "Medialane Docs — Knowledge Hub",
    description:
      "Everything you need to understand, build on, and use the Medialane platform.",
    type: "website",
  },
};

export default function Page() {
  return <HomePage />;
}
