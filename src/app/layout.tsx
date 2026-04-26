import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "@medialane/ui/styles";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://docs.medialane.io"),
  title: {
    default: "Medialane Docs — Knowledge Hub",
    template: "%s | Medialane Docs",
  },
  description: "Documentation, guides, support, and institutional content for the Medialane IP marketplace and creator launchpad.",
  keywords: ["Medialane", "NFT", "IP", "Docs", "Learn", "Starknet", "Creator", "Documentation"],
  authors: [{ name: "Medialane" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Medialane Docs",
    description: "Knowledge hub for the Medialane IP marketplace — docs, guides, and support.",
    siteName: "Medialane Docs",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Medialane Docs" }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@medialane_io",
    images: ["/og-image.jpg"],
  },
};

export const viewport = {
  themeColor: "black",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
