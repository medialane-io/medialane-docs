"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, LifeBuoy } from "lucide-react";
import Link from "next/link";
import { PageContainer } from "@/components/page-container";

const FAQS = [
  {
    q: "How do I create a wallet on Medialane?",
    a: "Enter an email to connect. On a first visit, an account is created and the flow continues straight to setting up a passkey (Face ID, Touch ID, Windows Hello, or a hardware security key). Medialane deploys a self-custody Starknet wallet sealed to that passkey automatically: gas-free, with nothing to write down or type as a password.",
  },
  {
    q: "I didn't receive my verification code.",
    a: "Check the spam or junk folder first. Once 60 seconds have passed, a new code can be requested from the same screen. If it still doesn't arrive, email dao@medialane.org for help getting signed in.",
  },
  {
    q: "Where is my private key stored? Is it safe?",
    a: "The private key is generated and encrypted directly in the browser, sealed to the device's passkey. It never leaves the device and is never sent to or stored on Medialane's servers; Medialane has no way to access or recover it.",
  },
  {
    q: "What happens if I lose my device or clear my browser data?",
    a: "Each device keeps its own signing key, so the surest protection is to use Medialane on more than one. Approve a second device from Settings → Account → Your devices while access remains, and either one can sign on its own from then on. A recovery key can also be saved from Settings → Account, or a guardian registered, both of which restore access if every device is gone. At least one of these should be set up before it is needed.",
  },
  {
    q: "My NFT minted but doesn't appear in my Portfolio.",
    a: "The Medialane indexer processes new blocks every ~6 seconds. If an asset doesn't appear within 1–2 minutes, try refreshing the page. If the issue persists after 5 minutes, contact support with the transaction hash.",
  },
  {
    q: "I listed an asset but the listing isn't showing in the Marketplace.",
    a: "Listings appear once the indexer processes the block containing the transaction. This typically takes under 30 seconds. If not visible after 2 minutes, check Portfolio → Listings to confirm the listing was recorded.",
  },
  {
    q: "Can I cancel a listing or offer?",
    a: "Yes. Go to Portfolio → Listings (for listings) or Portfolio → Offers sent (for offers). Click Cancel on any active order. Cancellation is an onchain transaction and may require a small gas fee.",
  },
  {
    q: "My session expired. Do I lose my assets?",
    a: "No. Sign-in sessions expire after 24 hours for security but have no effect on assets or wallet. A quick passkey confirmation starts a new session to continue trading.",
  },
  {
    q: "What currencies does Medialane support?",
    a: "Medialane supports STRK, ETH, USDC, USDT, and WBTC on Starknet mainnet for marketplace listings and offers. The marketplace can be filtered by token, and prices can be set in any supported currency.",
  },
  {
    q: "How do royalties work?",
    a: "Royalties are configured by the creator at mint time and enforced by the marketplace smart contract on every sale. They are distributed automatically to the creator's wallet at settlement, with no manual claim required.",
  },
  {
    q: "I think someone copied my work. How do I report it?",
    a: "Send a DMCA notice to dmca@medialane.io with links to the infringing content, the original work, and a statement of ownership. We aim to respond within 3 business days.",
  },
  {
    q: "What is the POP Protocol and how do I claim a credential?",
    a: "The POP Protocol issues soulbound (non-transferable) NFTs as proof-of-participation for events, communities, and milestones. To claim one, go to Launchpad → POP Protocol, find an active event that was attended, and click Claim. It's free, gas is sponsored. Claimed credentials appear in the Portfolio.",
  },
  {
    q: "How do I participate in a Collection Drop?",
    a: "Go to Launchpad → Collection Drop to see active and upcoming drops. Click Mint on an eligible drop and confirm with the passkey, and the NFT is sent to the wallet. Drop eligibility is enforced onchain; a wallet on the allowlist sees the option automatically.",
  },
  {
    q: "Is Medialane available worldwide?",
    a: "Medialane is a decentralised platform accessible globally. However, some features may be restricted based on local regulations. Users are responsible for compliance with the laws of their jurisdiction.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bento-cell overflow-hidden">
      <button
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium hover:bg-muted/30 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span>{q}</span>
        {open ? (
          <ChevronUp className="h-4 w-4 text-muted-foreground shrink-0" />
        ) : (
          <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-4 text-base text-muted-foreground leading-relaxed border-t border-border/60 pt-3">
          {a}
        </div>
      )}
    </div>
  );
}

export default function SupportPage() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Support ticket submitted! We'll be in touch shortly.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  }

  return (
    <PageContainer className="pb-16 space-y-12">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <LifeBuoy className="h-6 w-6 text-primary" />
          <h1 className="text-3xl font-bold">Support</h1>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          Check the FAQ below for quick answers. If an answer isn&apos;t listed,
          submit a support ticket for a reply.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {FAQS.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <div className="space-y-1">
          <h2 className="text-xl font-bold">Still need help?</h2>
          <p className="text-base text-muted-foreground">
            Submit a support ticket and a team member will respond within 1–2 business days.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="support-name" className="text-sm font-medium">Name</label>
              <input
                id="support-name"
                name="name"
                required
                placeholder="Name"
                className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="support-email" className="text-sm font-medium">Email</label>
              <input
                id="support-email"
                name="email"
                type="email"
                required
                placeholder="name@example.com"
                className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="support-category" className="text-sm font-medium">Category</label>
            <select
              id="support-category"
              name="category"
              required
              className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="" disabled>Select a category</option>
              <option value="account">Account / login</option>
              <option value="wallet">Wallet / passkey</option>
              <option value="minting">Minting issue</option>
              <option value="marketplace">Marketplace / trading</option>
              <option value="missing">Missing asset or listing</option>
              <option value="pop">POP Protocol / credentials</option>
              <option value="drop">Collection Drop</option>
              <option value="technical">Technical / API</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="support-message" className="text-sm font-medium">
              Describe the issue
            </label>
            <textarea
              id="support-message"
              name="message"
              required
              rows={5}
              placeholder="Please include any relevant transaction hashes, wallet addresses, or screenshots..."
              className="flex w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
            />
          </div>

          <Button type="submit" disabled={loading}>
            {loading ? "Submitting…" : "Submit ticket"}
          </Button>
        </form>
      </div>

      <p className="text-base text-muted-foreground">
        For copyright / DMCA notices email{" "}
        <a href="mailto:dmca@medialane.io" className="text-primary hover:underline">dmca@medialane.io</a>.
        For general contact see the{" "}
        <Link href="/contact" className="text-primary hover:underline">Contact page</Link>.
      </p>
    </PageContainer>
  );
}
