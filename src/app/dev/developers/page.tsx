import type { Metadata } from "next";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Section, Code } from "@/components/docs";

export const metadata: Metadata = {
  alternates: { canonical: "https://docs.medialane.io/dev/developers" },
  title: "Developers | Medialane Docs",
  description: "Developer quickstart: portal setup, SDK integration, MDLN multiplier, and Medialane API patterns.",
  openGraph: {
    title: "Developers | Medialane Docs",
    description: "Developer quickstart: portal setup, SDK integration, MDLN multiplier, and Medialane API patterns.",
    url: "https://docs.medialane.io/dev/developers",
  },
  twitter: {
    title: "Developers | Medialane Docs",
    description: "Developer quickstart: portal setup, SDK integration, MDLN multiplier, and Medialane API patterns.",
  },
};

export default function DocsDevsPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Developer Guide</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Everything you need to integrate with Medialane, from API key setup to
          MDLN-boosted quotas.
        </p>
        <p className="text-base text-muted-foreground">
          The Medialane stack has four layers: immutable contracts on Starknet, an indexer that
          reads chain events, the SDK that wraps both, and apps on top. The API and SDK give you
          access to everything the apps can do, and nothing they do can override the contracts.
          See{" "}
          <Link href="/dev/architecture" className="text-primary hover:underline">Architecture</Link>{" "}
          for the full model.
        </p>
      </div>

      <div className="space-y-8">

        <Section title="1. Get an API Key">
          <p>
            API keys are self-service at{" "}
            <a href="https://portal.medialane.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              portal.medialane.io
            </a>.
            Sign in and create your key. An account has one key, and creating a new one replaces the current key.
            Every request is paid from your account&apos;s credits, which you fund with USDC in the portal.
          </p>
          <Code>{`# Sign in at portal.medialane.io → Account → Create key
# Copy your key, then store it securely:
export MEDIALANE_API_KEY=ml_live_your_key_here`}</Code>
          <p>Pass the key on every request:</p>
          <Code>{`curl https://api.medialane.io/v1/collections \\
  -H "x-api-key: $MEDIALANE_API_KEY"`}</Code>
        </Section>

        <Section title="2. Credits and MDLN">
          <p>
            Credits are the billing unit: 1 credit is $0.01, and every endpoint is metered in credits.
            Hold MDLN in the wallet you pay from and a multiplier is applied automatically when your
            payment is credited. The balance is read on-chain at that moment.
          </p>
          <div className="space-y-2">
            {[
              { label: "Base",    mdln: "0 MDLN",     mult: "1×",   credits: "100 credits per $1" },
              { label: "Starter", mdln: "500 MDLN",   mult: "1.2×", credits: "120 credits per $1" },
              { label: "Builder", mdln: "2,000 MDLN", mult: "1.5×", credits: "150 credits per $1" },
              { label: "Pro",     mdln: "5,000 MDLN", mult: "2×",   credits: "200 credits per $1" },
            ].map(({ label, mdln, mult, credits }) => (
              <div key={label} className="bento-cell px-4 py-2.5 flex items-center gap-4 flex-wrap text-sm">
                <span className="font-semibold w-16 shrink-0">{label}</span>
                <span className="text-muted-foreground font-mono">{mdln}</span>
                <span className="font-bold font-mono text-primary ml-auto">{mult}</span>
                <span className="text-muted-foreground text-xs w-40 text-right">{credits}</span>
              </div>
            ))}
          </div>
          <p className="text-base">
            Deposit USDC in the portal to add credits. This is also the billing model for AI agents.
            See the <Link href="/dev/agents" className="text-primary hover:underline">AI Agents guide</Link>.
          </p>
        </Section>

        <Section title="3. Install the SDK">
          <Code>{`bun add @medialane/sdk starknet
# or: npm install @medialane/sdk starknet`}</Code>
          <Code>{`import { getListableTokens } from "@medialane/sdk";
import { MedialaneClient } from "@medialane/sdk/starknet";

const client = new MedialaneClient({
  backendUrl: "https://api.medialane.io",
  apiKey: process.env.MEDIALANE_API_KEY,
});

// Fetch newest collections (sort: "recent" | "supply" | "floor" | "volume" | "name")
const { data: collections } = await client.api.listCollections({ page: 1, limit: 20, sort: "recent" });

// Fetch tokens owned by a wallet
const { data: tokens } = await client.api.getTokensByOwner("0x<wallet>");

// Supported listing currencies — a local, synchronous helper (not an API call)
const currencies = getListableTokens();
// → [{ symbol: "USDC", address: "0x...", decimals: 6 }, ...]`}</Code>
        </Section>

        <Section title="4. Common Integration Patterns">
          <p className="font-medium text-foreground text-base">Display a collection with floor price and token grid</p>
          <Code>{`const { data: collection } = await client.api.getCollection("0x<contract>");
const { data: tokens }     = await client.api.getCollectionTokens("0x<contract>");
const { data: listings }   = await client.api.getActiveOrdersForToken("0x<contract>", tokens[0].tokenId);

console.log(collection.name, collection.floorPrice);
console.log(tokens.length, "tokens");
console.log(listings[0]?.price, "cheapest listing");`}</Code>

          <p className="font-medium text-foreground text-base mt-4">Check if a wallet holds a specific token (token gating)</p>
          <Code>{`const { data: token } = await client.api.getToken("0x<contract>", "1");

// ERC-721 — single owner
const isOwner = token.balances?.[0]?.owner === walletAddress;

// ERC-1155 — check holder list
const holding = token.balances?.find(b => b.owner === walletAddress);
const amount  = holding ? parseInt(holding.amount, 10) : 0;
const hasAccess = amount > 0;`}</Code>

          <p className="font-medium text-foreground text-base mt-4">Fetch all orders for a portfolio page</p>
          <Code>{`const { data: orders } = await client.api.getOrdersByUser("0x<wallet>");
const listings = orders.filter(o => o.offerer === walletAddress && o.status === "ACTIVE");
const offers   = orders.filter(o => o.offerer !== walletAddress && o.status === "ACTIVE");`}</Code>

          <p className="font-medium text-foreground text-base mt-4">Resolve a collection from a vanity slug</p>
          <Code>{`// Check slug availability before claiming
const available = await client.api.checkCollectionSlugAvailability("my-brand");

// Resolve slug to collection (returns ApiCollection | null — not wrapped)
const collection = await client.api.getCollectionBySlug("my-brand");
console.log(collection?.contractAddress, collection?.name);`}</Code>
        </Section>

      </div>

      <div className="flex flex-wrap gap-4">
        <a href="https://portal.medialane.io" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          Open Portal <ExternalLink className="h-3.5 w-3.5" />
        </a>
        <Link href="/dev/api" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          Full API Reference <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <Link href="/dev/agents" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          AI Agent Guide <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

    </div>
  );
}
