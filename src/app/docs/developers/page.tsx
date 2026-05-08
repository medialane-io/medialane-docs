import type { Metadata } from "next";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Developers | Medialane Docs",
  description: "Developer quickstart — portal setup, SDK integration, MDLN multiplier, webhooks, and Medialane API patterns.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

function Code({ children }: { children: string }) {
  return (
    <pre className="bento-cell p-4 text-xs font-mono overflow-x-auto text-foreground/80 leading-relaxed whitespace-pre">
      {children}
    </pre>
  );
}

const WEBHOOK_EVENTS = [
  { event: "order.created",     desc: "A new listing or offer is activated." },
  { event: "order.fulfilled",   desc: "A listing is purchased or offer accepted." },
  { event: "order.cancelled",   desc: "An order is cancelled by the offerer." },
  { event: "token.minted",      desc: "A new NFT is minted in any indexed collection." },
  { event: "token.transferred", desc: "Token ownership changes hands (non-sale transfer)." },
  { event: "comment.posted",    desc: "An on-chain comment is posted to a token." },
];

export default function DocsDevsPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Developer Guide</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Everything you need to integrate with Medialane — from API key setup to
          real-time webhooks and MDLN-boosted quotas.
        </p>
      </div>

      <div className="space-y-8">

        <Section title="1. Get an API Key">
          <p>
            API keys are self-service at{" "}
            <a href="https://portal.medialane.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              portal.medialane.io
            </a>.
            Sign in, create a project, and copy your key. The free tier provides 50 requests per calendar month —
            no credit card required.
          </p>
          <Code>{`# Sign in at portal.medialane.io → Projects → New Key
# Copy your key, then store it securely:
export MEDIALANE_API_KEY=ml_live_your_key_here`}</Code>
          <p>Pass the key on every request:</p>
          <Code>{`curl https://api.medialane.io/v1/collections \\
  -H "x-api-key: $MEDIALANE_API_KEY"`}</Code>
        </Section>

        <Section title="2. Boost Your Quota with MDLN">
          <p>
            Hold MDLN tokens and register them in the portal to unlock a quota multiplier.
            The multiplier is checked on-chain when your key is registered — you keep the
            boost for the remainder of the billing period.
          </p>
          <div className="space-y-2">
            {[
              { label: "Free",    mdln: "0 MDLN",    mult: "1×",   limit: "50 req / month" },
              { label: "Starter", mdln: "500 MDLN",  mult: "1.2×", limit: "60 req / month" },
              { label: "Builder", mdln: "2,000 MDLN",mult: "1.5×", limit: "75 req / month" },
              { label: "Pro",     mdln: "5,000 MDLN",mult: "2×",   limit: "100 req / month" },
            ].map(({ label, mdln, mult, limit }) => (
              <div key={label} className="bento-cell px-4 py-2.5 flex items-center gap-4 flex-wrap text-sm">
                <span className="font-semibold w-16 shrink-0">{label}</span>
                <span className="text-muted-foreground font-mono">{mdln}</span>
                <span className="font-bold font-mono text-primary ml-auto">{mult}</span>
                <span className="text-muted-foreground text-xs w-32 text-right">{limit}</span>
              </div>
            ))}
          </div>
          <p className="text-sm">
            For higher-volume use cases, deposit USDC credits in the portal for pay-per-call billing
            on top of your base quota. This is the primary billing model for AI agents.
            See the <Link href="/docs/agents" className="text-primary hover:underline">AI Agents guide</Link>.
          </p>
        </Section>

        <Section title="3. Install the SDK">
          <Code>{`bun add @medialane/sdk starknet
# or: npm install @medialane/sdk starknet`}</Code>
          <Code>{`import { MedialaneClient } from "@medialane/sdk";

const client = new MedialaneClient({
  backendUrl: "https://api.medialane.io",
  apiKey: process.env.MEDIALANE_API_KEY,
});

// Fetch newest collections
const { data: collections } = await client.api.getCollections(1, 20, { sort: "createdAt" });

// Fetch tokens owned by a wallet
const tokens = await client.api.getTokensByOwner("0x<wallet>");

// Fetch supported currencies for listings
const currencies = await client.api.getListableTokens();
// → [{ symbol: "USDC", address: "0x...", decimals: 6 }, ...]`}</Code>
        </Section>

        <Section title="4. Set Up Webhooks">
          <p>
            Register a webhook endpoint in the portal to receive real-time push events
            whenever activity occurs on the platform. The indexer delivers events within
            seconds of on-chain confirmation.
          </p>
          <Code>{`// Register a webhook via API
POST https://api.medialane.io/v1/portal/webhooks
x-api-key: ml_live_...
Content-Type: application/json

{
  "url": "https://your-app.com/webhooks/medialane",
  "events": ["order.created", "order.fulfilled", "token.minted"],
  "secret": "whsec_your_signing_secret"
}`}</Code>
          <p>All webhook payloads are signed with HMAC-SHA256 using your webhook secret:</p>
          <Code>{`// Verify webhook signature (Node.js / Bun)
import { createHmac } from "crypto";

function verifyWebhook(body: string, sig: string, secret: string) {
  const expected = createHmac("sha256", secret)
    .update(body)
    .digest("hex");
  return sig === \`sha256=\${expected}\`;
}

// Express / Hono handler
app.post("/webhooks/medialane", async (req) => {
  const sig = req.headers["x-medialane-signature"];
  if (!verifyWebhook(req.rawBody, sig, process.env.WEBHOOK_SECRET!)) {
    return res.status(401).send("Invalid signature");
  }
  const event = req.body;  // { type, data, timestamp }
  // handle event...
});`}</Code>
          <div className="space-y-2">
            <p className="text-sm font-medium text-foreground">Available event types:</p>
            {WEBHOOK_EVENTS.map(({ event, desc }) => (
              <div key={event} className="bento-cell px-4 py-2.5 flex items-center gap-3">
                <code className="text-xs font-mono text-foreground/80 shrink-0 w-36">{event}</code>
                <span className="text-xs text-muted-foreground">{desc}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section title="5. Common Integration Patterns">
          <p className="font-medium text-foreground text-sm">Display a collection with floor price and token grid</p>
          <Code>{`const collection = await client.api.getCollection("0x<contract>");
const tokens     = await client.api.getCollectionTokens("0x<contract>");
const listings   = await client.api.getTokenListings("0x<contract>", tokens[0].tokenId);

console.log(collection.name, collection.floorPrice);
console.log(tokens.length, "tokens");
console.log(listings[0]?.price, "cheapest listing");`}</Code>

          <p className="font-medium text-foreground text-sm mt-4">Check if a wallet holds a specific token (token gating)</p>
          <Code>{`const token = await client.api.getToken("0x<contract>", "1");

// ERC-721 — single owner
const isOwner = token.balances?.[0]?.owner === walletAddress;

// ERC-1155 — check holder list
const holding = token.balances?.find(b => b.owner === walletAddress);
const amount  = holding ? parseInt(holding.amount, 10) : 0;
const hasAccess = amount > 0;`}</Code>

          <p className="font-medium text-foreground text-sm mt-4">Fetch all orders for a portfolio page</p>
          <Code>{`const orders = await client.api.getUserOrders("0x<wallet>");
const listings = orders.filter(o => o.offerer === walletAddress && o.status === "ACTIVE");
const offers   = orders.filter(o => o.offerer !== walletAddress && o.status === "ACTIVE");`}</Code>

          <p className="font-medium text-foreground text-sm mt-4">Resolve a collection from a vanity slug</p>
          <Code>{`// Check slug availability before claiming
const available = await client.api.checkCollectionSlugAvailability("my-brand");

// Resolve slug to collection
const collection = await client.api.getCollectionBySlug("my-brand");
console.log(collection.contract, collection.name);`}</Code>
        </Section>

      </div>

      <div className="flex flex-wrap gap-4">
        <a href="https://portal.medialane.io" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          Open Portal <ExternalLink className="h-3.5 w-3.5" />
        </a>
        <Link href="/docs/api" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          Full API Reference <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <Link href="/docs/agents" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          AI Agent Guide <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

    </div>
  );
}
