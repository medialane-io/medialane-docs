import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "API Reference | Medialane Docs",
  description: "Full REST API reference — endpoints, authentication, rate limits, MDLN multiplier tiers, and response types.",
  openGraph: {
    title: "API Reference | Medialane Docs",
    description: "Full REST API reference — endpoints, authentication, rate limits, MDLN multiplier tiers, and response types.",
    url: "https://docs.medialane.io/docs/api",
  },
  twitter: {
    title: "API Reference | Medialane Docs",
    description: "Full REST API reference — endpoints, authentication, rate limits, MDLN multiplier tiers, and response types.",
  },
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

type Method = "GET" | "POST" | "PATCH" | "DELETE";

const METHOD_COLORS: Record<Method, string> = {
  GET:    "bg-blue-500/10 text-blue-400",
  POST:   "bg-emerald-500/10 text-emerald-400",
  PATCH:  "bg-amber-500/10 text-amber-400",
  DELETE: "bg-destructive/10 text-destructive",
};

function EndpointRow({ method, path, desc }: { method: Method; path: string; desc: string }) {
  return (
    <div className="bento-cell px-3 py-2.5 flex items-center gap-3 flex-wrap">
      <span className={`font-mono text-[10px] px-2 py-0.5 rounded shrink-0 ${METHOD_COLORS[method]}`}>{method}</span>
      <span className="font-mono text-xs text-foreground/80">{path}</span>
      <span className="text-muted-foreground text-xs ml-auto text-right">{desc}</span>
    </div>
  );
}

const RATE_TIERS = [
  { label: "Free",    mdln: "0 MDLN",    mult: "1×",   limit: "50 req / month",  color: "text-muted-foreground" },
  { label: "Starter", mdln: "500 MDLN",  mult: "1.2×", limit: "60 req / month",  color: "text-blue-400" },
  { label: "Builder", mdln: "2,000 MDLN",mult: "1.5×", limit: "75 req / month",  color: "text-purple-400" },
  { label: "Pro",     mdln: "5,000 MDLN",mult: "2×",   limit: "100 req / month", color: "text-primary" },
];

export default function DocsAPIPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">API Reference</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Full REST API for the Medialane platform. All endpoints return JSON.
          Read-only endpoints are public. Write operations and higher rate limits require an API key
          from{" "}
          <a href="https://portal.medialane.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            portal.medialane.io
          </a>.
        </p>
      </div>

      <div className="space-y-8">

        <Section title="Base URL">
          <Code>https://api.medialane.io/v1</Code>
          <p>All HTTPS. Include your API key on every authenticated request:</p>
          <Code>x-api-key: ml_live_your_key_here</Code>
        </Section>

        <Section title="Rate Limits & MDLN Multiplier">
          <p>
            Limits apply per API key on a rolling calendar month. Hold MDLN tokens and
            register them in the portal to unlock a multiplier on your base quota.
            Every response includes rate limit headers.
          </p>
          <div className="space-y-2">
            {RATE_TIERS.map(({ label, mdln, mult, limit, color }) => (
              <div key={label} className="bento-cell px-4 py-2.5 flex items-center gap-4 flex-wrap">
                <span className={`font-semibold text-xs w-16 shrink-0 ${color}`}>{label}</span>
                <span className="text-xs text-muted-foreground font-mono">{mdln}</span>
                <span className={`text-xs font-bold font-mono ml-auto ${color}`}>{mult}</span>
                <span className="text-xs text-muted-foreground w-32 text-right">{limit}</span>
              </div>
            ))}
          </div>
          <Code>{`X-RateLimit-Limit: 50
X-RateLimit-Remaining: 48
X-RateLimit-Reset: 1714521600
X-RateLimit-Multiplier: 1.0`}</Code>
          <p>
            Portal endpoints (<code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">/v1/portal/*</code>) are
            billed from a separate USDC credit balance — not from the monthly request quota.
            AI agents can deposit credits programmatically. See the{" "}
            <Link href="/docs/agents" className="text-primary hover:underline">AI Agents guide</Link>.
          </p>
        </Section>

        <Section title="Collections">
          <div className="space-y-2">
            <EndpointRow method="GET" path="/v1/collections" desc="List all collections (paginated, sortable)" />
            <EndpointRow method="GET" path="/v1/collections/:contract" desc="Single collection by contract address" />
            <EndpointRow method="GET" path="/v1/collections/:contract/tokens" desc="Tokens in a collection (paginated)" />
            <EndpointRow method="GET" path="/v1/collections/:contract/gated-content" desc="Holder-only content for a collection (requires JWT)" />
            <EndpointRow method="GET" path="/v1/collections/by-slug/:slug" desc="Resolve a vanity slug to a collection" />
          </div>
          <p>
            Query params for <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">/v1/collections</code>:{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">page</code>,{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">limit</code>,{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">sort</code> (createdAt | totalSupply | floorPrice | totalVolume),{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">owner</code>,{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">isFeatured</code>.
          </p>
        </Section>

        <Section title="Tokens">
          <div className="space-y-2">
            <EndpointRow method="GET" path="/v1/tokens/:contract/:tokenId" desc="Single token — metadata, balances, active orders" />
            <EndpointRow method="GET" path="/v1/tokens/owned/:address" desc="All tokens owned by a wallet" />
            <EndpointRow method="GET" path="/v1/tokens/:contract/:tokenId/history" desc="Transfer and order history for a token" />
            <EndpointRow method="GET" path="/v1/tokens/:contract/:tokenId/comments" desc="On-chain comments for a token" />
          </div>
          <p>
            For ERC-1155 tokens, <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">token.balances</code> lists
            every holder with their quantity.{" "}
            <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">token.owner</code> is deprecated and always{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">null</code>.
          </p>
        </Section>

        <Section title="Orders">
          <div className="space-y-2">
            <EndpointRow method="GET"  path="/v1/orders" desc="List orders — filter by status, sort, currency, collection" />
            <EndpointRow method="GET"  path="/v1/orders/:orderHash" desc="Single order by hash" />
            <EndpointRow method="GET"  path="/v1/orders/user/:address" desc="All orders for a wallet (buy + sell)" />
            <EndpointRow method="GET"  path="/v1/orders/token/:contract/:tokenId" desc="Active orders for a specific token" />
            <EndpointRow method="POST" path="/v1/orders/intent/listing" desc="Create a listing intent (returns SNIP-12 typed data)" />
            <EndpointRow method="POST" path="/v1/orders/intent/offer" desc="Create an offer intent" />
            <EndpointRow method="POST" path="/v1/orders/intent/fulfill" desc="Create a fulfill intent for buying a listing" />
            <EndpointRow method="POST" path="/v1/orders/intent/cancel" desc="Create a cancel intent" />
            <EndpointRow method="POST" path="/v1/orders/signature" desc="Submit a signed intent — activates the order" />
          </div>
          <p>
            Order intents use SNIP-12 typed data signing. The listing/offer intent endpoints
            return <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">{"{ typedData, orderHash }"}</code>.
            Sign with your wallet and submit the signature via <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">/v1/orders/signature</code>.
          </p>
        </Section>

        <Section title="Activities">
          <div className="space-y-2">
            <EndpointRow method="GET" path="/v1/activities" desc="Global activity feed — all event types, all wallets" />
            <EndpointRow method="GET" path="/v1/activities/:address" desc="Activity feed for a specific wallet" />
          </div>
          <p>
            Event types: <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">mint</code>,{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">listing</code>,{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">sale</code>,{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">offer</code>,{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">transfer</code>,{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">cancelled</code>.
          </p>
        </Section>

        <Section title="Portal Endpoints (API key required)">
          <div className="space-y-2">
            <EndpointRow method="GET"    path="/v1/portal/keys" desc="List your API keys" />
            <EndpointRow method="POST"   path="/v1/portal/keys" desc="Create a new API key" />
            <EndpointRow method="GET"    path="/v1/portal/usage" desc="Current period usage and quota" />
            <EndpointRow method="POST"   path="/v1/portal/credits/deposit" desc="Deposit USDC credits for pay-per-call billing" />
            <EndpointRow method="GET"    path="/v1/portal/credits/balance" desc="Current USDC credit balance" />
            <EndpointRow method="GET"    path="/v1/portal/webhooks" desc="List configured webhook endpoints" />
            <EndpointRow method="POST"   path="/v1/portal/webhooks" desc="Register a new webhook endpoint" />
            <EndpointRow method="DELETE" path="/v1/portal/webhooks/:id" desc="Remove a webhook endpoint" />
          </div>
          <p>
            Portal endpoints use a per-call USDC credit model, separate from the monthly quota.
            This allows AI agents to pre-fund an account and operate autonomously without per-request human approval.
            See the <Link href="/docs/agents" className="text-primary hover:underline">AI Agents guide</Link> for the 402 billing flow.
          </p>
        </Section>

        <Section title="Response Format">
          <Code>{`// List response
{
  "data": [...],
  "meta": { "page": 1, "limit": 20, "total": 142 }
}

// Single item — returned directly (no wrapper)
{ "contract": "0x...", "tokenId": "1", "name": "...", ... }

// Error response
{ "error": "Not found", "statusCode": 404 }

// 402 Payment Required — credit balance exhausted (AI agent billing)
{
  "error": "Insufficient credits",
  "statusCode": 402,
  "creditRequired": 0.001,
  "depositUrl": "https://portal.medialane.io/credits"
}`}</Code>
        </Section>

        <Section title="Address Format">
          <p>
            All Starknet addresses in requests and responses are normalised to
            64-character zero-padded hex with <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">0x</code> prefix.
            The SDK normalises automatically. If calling the API directly, pad short-form addresses
            (e.g. <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">0x1</code> →{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">0x0000...0001</code>).
          </p>
        </Section>

        <Section title="IPFS & Media URLs">
          <Code>{`// Responses use ipfs:// scheme
{ "image": "ipfs://bafybeifoo..." }

// Convert to HTTP for display
const httpUrl = ipfsUri.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/");`}</Code>
        </Section>

      </div>
    </div>
  );
}
