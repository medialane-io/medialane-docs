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
  description: "Documentation, guides, support, and institutional content for the Medialane creator capital markets platform on Starknet.",
  keywords: ["Medialane", "NFT", "IP", "Docs", "Learn", "Starknet", "Creator", "Documentation", "DAO", "MDLN", "Smart Contracts"],
  authors: [{ name: "Medialane" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Medialane Docs — Knowledge Hub",
    description: "Documentation, guides, and institutional content for Medialane creator capital markets on Starknet.",
    siteName: "Medialane Docs",
    url: "https://docs.medialane.io",
  },
  twitter: {
    card: "summary_large_image",
    site: "@medialane_io",
    creator: "@medialane_io",
    title: "Medialane Docs — Knowledge Hub",
    description: "Documentation, guides, and institutional content for Medialane creator capital markets on Starknet.",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://docs.medialane.io/#website",
                  "url": "https://docs.medialane.io",
                  "name": "Medialane Docs",
                  "description": "Documentation, guides, and institutional content for Medialane creator capital markets on Starknet.",
                  "publisher": { "@id": "https://docs.medialane.io/#organization" },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://docs.medialane.io/search?q={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "Organization",
                  "@id": "https://docs.medialane.io/#organization",
                  "name": "Medialane",
                  "url": "https://medialane.io",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://docs.medialane.io/icon.png",
                    "width": 512,
                    "height": 512,
                  },
                  "sameAs": [
                    "https://x.com/medialane_io",
                    "https://medialane.org",
                    "https://portal.medialane.io",
                  ],
                },
              ],
            }),
          }}
        />
        {/* Google Translate — loaded once, triggered by TranslateButton */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="//translate.google.com/translate_a/element.js?cb=googleTranslateInit" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateInit() {
                new google.translate.TranslateElement({
                  pageLanguage: 'en',
                  autoDisplay: false,
                }, 'google_translate_element');
              }
            `,
          }}
        />
        <style>{`
          /* Hide all Google Translate chrome — we drive it via TranslateButton */
          #google_translate_element { display: none !important; }
          .goog-te-banner-frame.skiptranslate { display: none !important; }
          .goog-te-gadget { display: none !important; }
          .goog-tooltip { display: none !important; }
          .goog-tooltip:hover { display: none !important; }
          .goog-text-highlight { background-color: transparent !important; box-shadow: none !important; }
          /* Counteract the body top offset Google Translate injects */
          body { top: 0 !important; }
          /* Hide the translation attribution bar Google injects at the top */
          .skiptranslate { display: none !important; }
        `}</style>
      </head>
      <body className={inter.className}>
        {/* Hidden anchor for Google Translate widget */}
        <div id="google_translate_element" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
