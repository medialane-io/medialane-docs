import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Support | Medialane",
  description:
    "Get help with Medialane — frequently asked questions about wallets, PIN, marketplace, minting, POP Protocol, and Collection Drop.",
  openGraph: {
    title: "Support | Medialane",
    description:
      "Get help with Medialane — FAQs, wallet and PIN troubleshooting, marketplace help, and support tickets.",
    url: "https://docs.medialane.io/support",
  },
  twitter: {
    title: "Support | Medialane",
    description:
      "Get help with Medialane — FAQs, wallet and PIN troubleshooting, marketplace help, and support tickets.",
  },
}

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
