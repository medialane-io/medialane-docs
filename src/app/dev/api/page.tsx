import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { DocH2, DocH3, DocCodeBlock } from "@/components/docs/typography"
import { PricingTable } from "@/components/docs/pricing-table"

export const metadata: Metadata = {
  alternates: { canonical: "https://docs.medialane.io/dev/api" },
  title: "API Reference | Medialane Docs",
  description: "Full REST API reference for Medialane: orders, collections, minting, tokens, intents, profiles, comments, and more.",
  openGraph: {
    title: "API Reference | Medialane Docs",
    description: "Full REST API reference for Medialane: orders, collections, minting, tokens, intents, profiles, comments, and more.",
    url: "https://docs.medialane.io/dev/api",
  },
}

function MethodBadge({ method }: { method: "GET" | "POST" | "PATCH" | "DELETE" }) {
  const colors: Record<string, string> = {
    GET: "bg-green-500/15 text-green-300 border-green-500/30",
    POST: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    PATCH: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    DELETE: "bg-red-500/15 text-red-300 border-red-500/30",
  }
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-bold border ${colors[method]}`}>
      {method}
    </span>
  )
}

function Endpoint({
  method,
  path,
  description,
  params,
  curl,
  response,
}: {
  method: "GET" | "POST" | "PATCH" | "DELETE"
  path: string
  description: string
  params?: { name: string; type: string; required?: boolean; desc: string }[]
  curl: string
  response: string
}) {
  return (
    <div className="mb-10 rounded-xl border border-foreground/10 bg-foreground/[0.02] overflow-hidden">
      <div className="px-5 py-4 border-b border-foreground/10 flex items-center gap-3">
        <MethodBadge method={method} />
        <code className="font-mono text-sm text-foreground">{path}</code>
      </div>
      <div className="px-5 py-4 space-y-4">
        <p className="text-base text-muted-foreground">{description}</p>

        {params && params.length > 0 && (
          <div>
            <p className="text-base font-semibold uppercase tracking-widest text-muted-foreground mb-2">Parameters</p>
            <div className="rounded-lg border border-foreground/10 overflow-hidden">
              {params.map((p, i) => (
                <div key={p.name} className={`grid grid-cols-[auto_auto_1fr] gap-3 px-4 py-2.5 text-xs items-start ${i < params.length - 1 ? "border-b border-foreground/5" : ""}`}>
                  <code className="font-mono text-primary whitespace-nowrap">{p.name}</code>
                  <span className={`font-mono text-muted-foreground whitespace-nowrap ${p.required ? "text-red-400" : ""}`}>
                    {p.type}{p.required ? " *" : ""}
                  </span>
                  <span className="text-muted-foreground">{p.desc}</span>
                </div>
              ))}
            </div>
            <p className="text-base text-muted-foreground mt-1">* required</p>
          </div>
        )}

        <div>
          <p className="text-base font-semibold uppercase tracking-widest text-muted-foreground mb-2">cURL</p>
          <div className="rounded-lg bg-black/50 border border-foreground/10">
            <pre className="p-4 text-xs font-mono text-green-300/90 overflow-x-auto whitespace-pre">{curl}</pre>
          </div>
        </div>

        <div>
          <p className="text-base font-semibold uppercase tracking-widest text-muted-foreground mb-2">Response</p>
          <div className="rounded-lg bg-black/50 border border-foreground/10">
            <pre className="p-4 text-xs font-mono text-cyan-300/90 overflow-x-auto whitespace-pre">{response}</pre>
          </div>
        </div>
      </div>
    </div>
  )
}

const BASE = "https://api.medialane.io"
const KEY = "ml_live_YOUR_KEY"

const ERROR_CODES = [
  { code: "400", name: "Bad Request", desc: "Missing or invalid parameters" },
  { code: "401", name: "Unauthorized", desc: "Missing or invalid x-api-key, or a missing or expired sign-in token" },
  { code: "402", name: "Payment Required", desc: "Credit balance is zero; deposit USDC to continue" },
  { code: "403", name: "Forbidden", desc: "Key exists but lacks required permission" },
  { code: "404", name: "Not Found", desc: "Resource does not exist" },
  { code: "409", name: "Conflict", desc: "Duplicate resource or state conflict" },
  { code: "429", name: "Too Many Requests", desc: "Sent only by reports, remix offers and repeated wrong email codes; nothing happened, so it is safe to retry" },
  { code: "500", name: "Server Error", desc: "Internal error; try again or contact support" },
]

export default function ApiReferencePage() {
  return (
    <div className="space-y-2">
      <Badge className="bg-primary/10 text-primary border-primary/30 px-3 py-1 text-xs">
        API Reference
      </Badge>
      <h2 className="text-2xl font-bold">API Reference</h2>
      <p className="text-muted-foreground text-lg mb-8">
        Full endpoint reference for the Medialane REST API. Base URL: <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">{BASE}</code>. All endpoints are versioned under <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">/v1/</code>.
      </p>

      <DocH2 id="authentication" border>Authentication</DocH2>
      <p className="text-muted-foreground mb-3">
        Every request carries an API key in the <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">x-api-key</code> header. Keys are self-service from your <a href="https://portal.medialane.io/account" className="text-primary hover:underline">account dashboard</a>. An account has one key; creating a new key replaces the current one.
      </p>
      <DocCodeBlock lang="bash">{`curl "${BASE}/v1/orders" \\
  -H "x-api-key: ${KEY}"

# Bearer token also accepted:
# -H "Authorization: Bearer ${KEY}"`}</DocCodeBlock>
      <p className="text-muted-foreground text-base">
        Keys are prefixed <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">ml_live_</code>. Keep them secret, and treat them like passwords.
      </p>
      <p className="text-muted-foreground text-base">
        The API key identifies the app that is calling: every app is a client holding its own key, and an account belongs to the client it registered through. An account has at most one wallet and one email. When a request acts for a user, it also carries that user&apos;s sign-in, either a wallet sign-in token (<code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">Authorization: Bearer siws_...</code>) or an account session from email sign-in. See <a href="#sign-in" className="text-primary hover:underline">Sign-in</a>.
      </p>

      <DocH2 id="response-format" border>Response Format</DocH2>
      <p className="text-muted-foreground mb-3">All responses are JSON. List responses wrap rows in a <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">data</code> array with pagination in <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">meta</code>.</p>
      <DocH3>Success</DocH3>
      <DocCodeBlock>{`{
  "data": [...],
  "meta": { "total": 128, "page": 1, "limit": 20 }
}`}</DocCodeBlock>
      <DocH3>Error</DocH3>
      <DocCodeBlock>{`{
  "error": "Unauthorized",
  "message": "Invalid or missing API key"
}`}</DocCodeBlock>

      <DocH2 id="error-codes" border>Error Codes</DocH2>
      <div className="rounded-xl border border-foreground/10 overflow-hidden mb-2">
        <div className="grid grid-cols-3 px-5 py-3 bg-foreground/[0.03] border-b border-foreground/10 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          <span>Code</span>
          <span>Name</span>
          <span>Description</span>
        </div>
        {ERROR_CODES.map((row, i) => (
          <div key={row.code} className={`grid grid-cols-3 px-5 py-3 items-center text-sm ${i < ERROR_CODES.length - 1 ? "border-b border-foreground/5" : ""}`}>
            <span className="font-mono font-semibold text-red-400">{row.code}</span>
            <span className="text-foreground">{row.name}</span>
            <span className="text-muted-foreground">{row.desc}</span>
          </div>
        ))}
      </div>

      <DocH2 id="credits" border>Credits &amp; Billing</DocH2>
      <p className="text-muted-foreground mb-3 text-base">
        Credits are the billing unit: 1 credit = $0.01. Fund your balance with USDC on Starknet from your <a href="https://portal.medialane.io/account" className="text-primary hover:underline">account dashboard</a> or the <a href="/dev/agents" className="text-primary hover:underline">x402 flow</a>; credits appear within ~2 minutes and never expire. This table is live, pulled from the same endpoint every call is priced against (<code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">GET /v1/pricing</code>), never a hand-maintained copy:
      </p>
      <PricingTable />
      <p className="text-muted-foreground text-base">
        When credits run out you receive <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">402 Payment Required</code> with an <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">X-Credits-Remaining: 0</code> header. An autonomous agent can detect the 402 and top up on its own; see <a href="/dev/agents" className="text-primary hover:underline">AI Agents</a>.
      </p>

      <DocH2 id="health" border>Health</DocH2>
      <p className="text-base text-muted-foreground mb-6">
        Public uptime and system status. Use this to monitor indexer lag and database connectivity.
      </p>

      <Endpoint
        method="GET"
        path="/health"
        description="Get system health status, including database connectivity and indexer lag."
        params={[]}
        curl={`curl "${BASE}/health"`}
        response={`{
  "status": "ok",
  "timestamp": "2026-03-05T12:00:00Z",
  "database": "ok",
  "indexer": {
    "lastBlock": "6205000",
    "latestBlock": "6205005",
    "lagBlocks": 5
  }
}`}
      />

      <DocH2 id="orders" border>Orders</DocH2>
      <Endpoint
        method="GET"
        path="/v1/orders"
        description="List all open orders (listings and bids). Supports filtering, sorting, and pagination."
        params={[
          { name: "status", type: "string", desc: "Filter by status: ACTIVE | FULFILLED | CANCELLED | EXPIRED" },
          { name: "nftContract", type: "string", desc: "Filter by NFT contract address" },
          { name: "currency", type: "string", desc: "Filter by payment token: USDC | USDT | ETH | STRK | WBTC" },
          { name: "sort", type: "string", desc: "Sort field: priceRaw | createdAt" },
          { name: "order", type: "string", desc: "asc | desc (default: desc)" },
          { name: "page", type: "number", desc: "Page number (default: 1)" },
          { name: "limit", type: "number", desc: "Items per page (default: 20, max: 100)" },
        ]}
        curl={`curl "${BASE}/v1/orders?status=ACTIVE&limit=5" \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "data": [
    {
      "orderHash": "0x04f7a1...",
      "offerer": "0x0591...",
      "nftContract": "0x05e7...",
      "tokenId": "42",
      "price": "500000",
      "currency": "USDC",
      "status": "ACTIVE",
      "orderType": "LISTING",
      "createdAt": "2026-03-01T10:00:00Z"
    }
  ],
  "meta": { "total": 128, "page": 1, "limit": 5 }
}`}
      />

      <Endpoint
        method="GET"
        path="/v1/orders/:hash"
        description="Get a single order by its on-chain order hash."
        params={[
          { name: "hash", type: "string", required: true, desc: "The 0x-prefixed order hash" },
        ]}
        curl={`curl "${BASE}/v1/orders/0x04f7a1..." \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "orderHash": "0x04f7a1...",
  "offerer": "0x0591...",
  "nftContract": "0x05e7...",
  "tokenId": "42",
  "price": "500000",
  "currency": "USDC",
  "status": "ACTIVE"
}`}
      />

      <Endpoint
        method="GET"
        path="/v1/orders/token/:contract/:tokenId"
        description="Get all orders for a specific token."
        params={[
          { name: "contract", type: "string", required: true, desc: "NFT contract address" },
          { name: "tokenId", type: "string", required: true, desc: "Token ID" },
        ]}
        curl={`curl "${BASE}/v1/orders/token/0x05e7.../42" \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "data": [...],
  "meta": { "total": 3, "page": 1, "limit": 20 }
}`}
      />

      <Endpoint
        method="GET"
        path="/v1/orders/user/:address"
        description="Get all orders created by a specific user address."
        params={[
          { name: "address", type: "string", required: true, desc: "Starknet user address" },
        ]}
        curl={`curl "${BASE}/v1/orders/user/0x0591..." \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "data": [...],
  "meta": { "total": 7, "page": 1, "limit": 20 }
}`}
      />

      <Endpoint
        method="GET"
        path="/v1/orders/received/:address"
        description="Offers others made on the address's assets."
        params={[
          { name: "page", type: "number", required: false, desc: "Page, from 1" },
          { name: "limit", type: "number", required: false, desc: "Up to 100" },
        ]}
        curl={`curl "${BASE}/v1/orders/received/0x0591..." \\
  -H "x-api-key: ${KEY}"`}
        response={`{ "data": [{ "orderHash": "0x...", "status": "ACTIVE" }] }`}
      />

      <DocH2 id="minting" border>Minting</DocH2>
      <p className="text-base text-muted-foreground mb-6">
        Directly mint assets into existing collections or register new collection contracts. These operations return fully-populated calldata for immediate on-chain execution.
      </p>

      <Endpoint
        method="POST"
        path="/v1/intents/mint"
        description="Mint an NFT into an existing Medialane collection."
        params={[
          { name: "owner", type: "string", required: true, desc: "Collection owner address" },
          { name: "collectionId", type: "string", required: true, desc: "Hex or decimal collection ID" },
          { name: "recipient", type: "string", required: true, desc: "Recipient address" },
          { name: "tokenUri", type: "string", required: true, desc: "IPFS URI or metadata URL" },
          { name: "collectionContract", type: "string", desc: "Optional: registry contract override" },
        ]}
        curl={`curl -X POST "${BASE}/v1/intents/mint" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{ "owner": "0x0591...", "collectionId": "42", "recipient": "0x0591...", "tokenUri": "ipfs://..." }'`}
        response={`{ "id": "clm_mnt123", "requiresSignature": false, "calls": [...] }`}
      />

      <Endpoint
        method="POST"
        path="/v1/intents/create-collection"
        description="Register a new NFT collection, or deploy a new per-creator contract via a service's factory."
        params={[
          { name: "owner", type: "string", required: true, desc: "Requester address" },
          { name: "name", type: "string", required: true, desc: "Collection name" },
          { name: "symbol", type: "string", required: true, desc: "Collection symbol" },
          { name: "baseUri", type: "string", required: true, desc: "Base URI for tokens" },
          { name: "service", type: "string", desc: 'Omit for the shared registry (mip-erc721/ip-erc721). One of "mip-erc1155" | "ip-tickets" | "ip-club" | "pop-protocol" | "drop-collection" deploys via that service\'s factory instead.' },
          { name: "collectionContract", type: "string", desc: "Optional: registry contract override (registry path only)" },
          { name: "claimEndTimestamp", type: "number", desc: "pop-protocol only: unix seconds after which claim() stops working" },
          { name: "eventType", type: "string", desc: 'pop-protocol only: e.g. "Conference", "Workshop", "Hackathon"' },
          { name: "maxSupply", type: "string", desc: "drop-collection only: total mintable supply" },
          { name: "conditions", type: "object", desc: "drop-collection only: { startTime, endTime, price, paymentToken, maxQuantityPerWallet }" },
        ]}
        curl={`curl -X POST "${BASE}/v1/intents/create-collection" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{ "owner": "0x0591...", "name": "My Collection", "symbol": "MYC", "baseUri": "ipfs://..." }'`}
        response={`{ "id": "clm_coll123", "requiresSignature": false, "calls": [...] }`}
      />

      <DocH2 id="coins" border>Creator Coins</DocH2>
      <p className="text-muted-foreground text-base mb-3">
        Fungible coins are their own resource (since the 2026-06-14 split), distinct from collections.
        A coin has service <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">creator-coin</code> (or
        <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">external-erc20</code> for claimed coins) and
        <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">standard: "ERC20"</code>. List them with
        <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">GET /v1/coins</code>. A coin&apos;s image and
        description live on the coin (platform layer) and are editable by its creator via <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">PATCH /v1/coins/:contract</code>.
      </p>

      <Endpoint
        method="GET"
        path="/v1/coins"
        description="List indexed fungible coins (Creator Coins + claimed external ERC-20s)."
        params={[
          { name: "service", type: "string", desc: '"creator-coin" | "external-erc20"' },
          { name: "creator", type: "string", desc: "Filter by creator address (a creator's own coins)" },
          { name: "page", type: "number", desc: "Page number" },
          { name: "limit", type: "number", desc: "Items per page" },
        ]}
        curl={`curl "${BASE}/v1/coins?service=creator-coin" \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "data": [
    {
      "contractAddress": "0x04c1...",
      "service": "creator-coin",
      "standard": "ERC20",
      "name": "My Coin",
      "symbol": "COIN",
      "decimals": 18,
      "image": "ipfs://...",
      "description": "...",
      "creator": "0x0591..."
    }
  ],
  "meta": { "page": 1, "limit": 24, "total": 7 }
}`}
      />

      <Endpoint
        method="GET"
        path="/v1/coins/:contract"
        description="Fetch a single coin by contract address."
        curl={`curl "${BASE}/v1/coins/0x04c1..." \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "data": {
    "contractAddress": "0x04c1...",
    "service": "creator-coin",
    "standard": "ERC20",
    "name": "My Coin",
    "symbol": "COIN",
    "decimals": 18,
    "image": "ipfs://...",
    "description": "...",
    "creator": "0x0591..."
  }
}`}
      />

      <Endpoint
        method="PATCH"
        path="/v1/coins/:contract"
        description="Update a coin's image and/or description. Creator-authed (SIWS token); only the coin's on-chain creator may edit. The creator is set trustlessly from the factory event, never from the request body."
        params={[
          { name: "image", type: "string", desc: "ipfs:// or https:// URI (body, optional, nullable)" },
          { name: "description", type: "string", desc: "Up to 500 chars (body, optional, nullable)" },
        ]}
        curl={`curl -X PATCH "${BASE}/v1/coins/0x04c1..." \\
  -H "Authorization: Bearer <SIWS_TOKEN>" \\
  -H "Content-Type: application/json" \\
  -d '{"description": "Founding community coin"}'`}
        response={`{
  "data": {
    "contractAddress": "0x04c1...",
    "image": "ipfs://...",
    "description": "Founding community coin"
  }
}`}
      />

      <p className="text-muted-foreground text-base mb-3 mt-6">
        Deploying and launching a coin is two intents, one per on-chain transaction. The
        coin&apos;s address is only known from the deploy receipt, so launch is a separate call
        made once you have it (same shape as create-tier → mint for tickets/club).
      </p>

      <Endpoint
        method="POST"
        path="/v1/intents/create-coin"
        description="Deploy a fixed-supply Creator Coin (full supply minted to the Factory until launch)."
        params={[
          { name: "owner", type: "string", required: true, desc: "Owner of the new coin; the only address allowed to launch it" },
          { name: "name", type: "string", required: true, desc: "Coin name" },
          { name: "symbol", type: "string", required: true, desc: "Coin symbol" },
          { name: "initialSupply", type: "string", required: true, desc: "Full fixed supply, raw units (18 decimals)" },
          { name: "salt", type: "string", desc: "Deterministic deploy salt. Omitted = timestamp-derived" },
        ]}
        curl={`curl -X POST "${BASE}/v1/intents/create-coin" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{ "owner": "0x0591...", "name": "My Coin", "symbol": "COIN", "initialSupply": "1000000000000000000000000" }'`}
        response={`{ "id": "clm_coin123", "requiresSignature": false, "calls": [...] }`}
      />

      <Endpoint
        method="POST"
        path="/v1/intents/launch-coin"
        description="Launch an already-deployed Creator Coin on Ekubo (owner-only; the contract itself is the authority)."
        params={[
          { name: "owner", type: "string", required: true, desc: "Wallet that must own the coin" },
          { name: "creatorCoin", type: "string", required: true, desc: "The deployed CreatorCoin contract, from create-coin's receipt" },
          { name: "quoteToken", type: "string", required: true, desc: "Quote token (e.g. STRK). Must not itself be a Creator Coin" },
          { name: "initialHolders", type: "string[]", desc: "Team-allocation recipients (≤10% of supply, summed)" },
          { name: "initialHoldersAmounts", type: "string[]", desc: "Raw amounts, paired with initialHolders" },
          { name: "transferRestrictionDelay", type: "number", desc: "Anti-snipe window, seconds. Omitted = none" },
          { name: "maxPercentageBuyLaunch", type: "number", desc: "Max % of supply buyable per tx during the window, bps" },
          { name: "quoteFundAmount", type: "string", desc: "Quote (raw units) to transfer to the Factory in the same multicall, to fund the team-allocation buyback" },
        ]}
        curl={`curl -X POST "${BASE}/v1/intents/launch-coin" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{ "owner": "0x0591...", "creatorCoin": "0x04c1...", "quoteToken": "0x04718..." }'`}
        response={`{ "id": "clm_launch123", "requiresSignature": false, "calls": [...] }`}
      />

      <p className="text-muted-foreground text-base mb-3 mt-6">
        On-demand indexing for a freshly-launched coin:
      </p>

      <Endpoint
        method="POST"
        path="/v1/coins/sync"
        description="Index a freshly-launched Creator Coin on demand (idempotent). Verifies is_creator_coin on the Factory and reads name/symbol on-chain. The factory event poller is the backstop; trustless ownership (claimedBy) is set from the on-chain CreatorCoinCreated event when it indexes."
        params={[
          { name: "coinAddress", type: "string", desc: "The launched coin's contract address (body)" },
          { name: "owner", type: "string", desc: "Display-only owner hint (body, optional)" },
        ]}
        curl={`curl -X POST "${BASE}/v1/coins/sync" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{"coinAddress": "0x04c1..."}'`}
        response={`{
  "data": {
    "contractAddress": "0x04c1...",
    "service": "creator-coin",
    "standard": "ERC20",
    "name": "My Coin",
    "symbol": "COIN"
  }
}`}
      />

      <Endpoint
        method="GET"
        path="/v1/coins/prices"
        description="USDC price of every Creator Coin with a live market, by coin address."
        curl={`curl "${BASE}/v1/coins/prices" \\
  -H "x-api-key: ${KEY}"`}
        response={`{ "data": { "0x0abc...": { "usdc": 0.012 } } }`}
      />

      <Endpoint
        method="POST"
        path="/v1/coins/claim"
        description="Claim a Creator Coin you created, to edit its profile. Checked on-chain against the coin's owner."
        params={[
          { name: "coinAddress", type: "string", required: true, desc: "The coin contract" },
        ]}
        curl={`curl -X POST "${BASE}/v1/coins/claim" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer <SIWS_TOKEN>" \\
  -H "Content-Type: application/json" \\
  -d '{"coinAddress":"0x0abc..."}'`}
        response={`{ "verified": true }`}
      />

      <DocH2 id="collections" border>Collections</DocH2>

      <Endpoint
        method="GET"
        path="/v1/collections"
        description="List indexed NFT collections with floor price, volume, and token count."
        params={[
          { name: "page", type: "number", desc: "Page number" },
          { name: "limit", type: "number", desc: "Items per page" },
          { name: "owner", type: "string", desc: "Filter by collection owner address" },
          { name: "isKnown", type: "boolean", desc: "true = featured collections only" },
          { name: "sort", type: "string", desc: '"recent" (default) | "supply" | "floor" | "volume" | "name"' },
          { name: "service", type: "string", desc: 'Filter by service id (e.g. "mip-erc721", "pop-protocol"). Coins are a separate resource: use /v1/coins' },
          { name: "standard", type: "string", desc: 'Filter by token standard, CSV ok: "ERC721,ERC1155" (NFT-only; coins live at /v1/coins)' },
        ]}
        curl={`curl "${BASE}/v1/collections?owner=0x0591..." \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "data": [
    {
      "contract": "0x05e7...",
      "collectionId": "1",
      "name": "Medialane Collection",
      "owner": "0x0591...",
      "floorPrice": "100000",
      "floorCurrency": "USDC",
      "totalVolume": "5000000",
      "tokenCount": 512
    }
  ],
  "meta": { "total": 14, "page": 1, "limit": 20 }
}`}
      />

      <Endpoint
        method="GET"
        path="/v1/collections/:contract"
        description="Get metadata and statistics for a single collection."
        params={[
          { name: "contract", type: "string", required: true, desc: "NFT contract address" },
        ]}
        curl={`curl "${BASE}/v1/collections/0x05e7..." \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "contract": "0x05e7...",
  "collectionId": "1",
  "name": "Medialane Collection",
  "owner": "0x0591...",
  "floorPrice": "100000",
  "totalVolume": "5000000",
  "tokenCount": 512
}`}
      />

      <Endpoint
        method="GET"
        path="/v1/collections/:contract/tokens"
        description="List tokens in a collection."
        params={[
          { name: "contract", type: "string", required: true, desc: "NFT contract address" },
          { name: "page", type: "number", desc: "Page number" },
          { name: "limit", type: "number", desc: "Items per page" },
        ]}
        curl={`curl "${BASE}/v1/collections/0x05e7.../tokens?limit=10" \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "data": [...],
  "meta": { "total": 512, "page": 1, "limit": 10 }
}`}
      />

      <DocH2 id="tokens" border>Tokens</DocH2>

      <Endpoint
        method="GET"
        path="/v1/tokens/owned/:address"
        description="Get all tokens owned by a Starknet address."
        params={[
          { name: "address", type: "string", required: true, desc: "Owner's Starknet address" },
        ]}
        curl={`curl "${BASE}/v1/tokens/owned/0x0591..." \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "data": [
    {
      "contract": "0x05e7...",
      "tokenId": "42",
      "owner": "0x0591...",
      "metadata": { "name": "Genesis #42", "image": "ipfs://..." }
    }
  ],
  "meta": { "total": 3, "page": 1, "limit": 20 }
}`}
      />

      <Endpoint
        method="GET"
        path="/v1/tokens/:contract/:tokenId"
        description="Get a single token with resolved metadata. Use ?wait=true for JIT metadata resolution."
        params={[
          { name: "contract", type: "string", required: true, desc: "NFT contract address" },
          { name: "tokenId", type: "string", required: true, desc: "Token ID" },
          { name: "wait", type: "boolean", desc: "If true, blocks up to 3s to resolve missing metadata" },
        ]}
        curl={`curl "${BASE}/v1/tokens/0x05e7.../42?wait=true" \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "contract": "0x05e7...",
  "tokenId": "42",
  "owner": "0x0591...",
  "metadata": {
    "name": "Genesis #42",
    "description": "...",
    "image": "ipfs://..."
  }
}`}
      />

      <Endpoint
        method="GET"
        path="/v1/tokens/:contract/:tokenId/history"
        description="Get transfer history for a token."
        params={[
          { name: "contract", type: "string", required: true, desc: "NFT contract address" },
          { name: "tokenId", type: "string", required: true, desc: "Token ID" },
        ]}
        curl={`curl "${BASE}/v1/tokens/0x05e7.../42/history" \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "data": [
    {
      "from": "0x0000...",
      "to": "0x0591...",
      "txHash": "0xabc...",
      "blockNumber": 7000000,
      "timestamp": "2026-03-01T10:00:00Z"
    }
  ]
}`}
      />

      <Endpoint
        method="GET"
        path="/v1/tokens"
        description="List tokens, newest first, filtered by IP type or remixability."
        params={[
          { name: "page", type: "number", required: false, desc: "Page, from 1" },
          { name: "limit", type: "number", required: false, desc: "Up to 48" },
          { name: "ipType", type: "string", required: false, desc: "IP type slug, e.g. \"music\"" },
          { name: "derivatives", type: "string", required: false, desc: "\"allowed\" for tokens that may be remixed" },
        ]}
        curl={`curl "${BASE}/v1/tokens?derivatives=allowed&limit=24" \\
  -H "x-api-key: ${KEY}"`}
        response={`{ "data": [{ "contractAddress": "0x...", "tokenId": "1", "metadata": { "name": "..." } }], "meta": { "page": 1, "limit": 24, "total": 300 } }`}
      />

      <Endpoint
        method="GET"
        path="/v1/ipnft/:contract/:tokenId"
        description="On-chain registration data of a Programmable IP token: owner, metadata URI, original creator, registration time; null if unreadable."
        curl={`curl "${BASE}/v1/ipnft/0x.../1" \\
  -H "x-api-key: ${KEY}"`}
        response={`{ "data": { "owner": "0x...", "metadataUri": "ipfs://...", "originalCreator": "0x...", "registeredAt": 1780000000 } }`}
      />

      <DocH2 id="batch-tokens" border>Batch Tokens</DocH2>
      <p className="text-base text-muted-foreground mb-6">
        Fetch up to 50 tokens in a single request by providing contract+tokenId pairs. More efficient than individual token lookups when hydrating a list or cart.
      </p>

      <Endpoint
        method="GET"
        path="/v1/tokens/batch"
        description="Fetch multiple tokens by contract and tokenId pairs. Returns the same shape as the single token endpoint but as an array."
        params={[
          { name: "items", type: "string", required: true, desc: "Comma-separated contract:tokenId pairs, e.g. 0x05e7...:1,0x05e7...:2 (max 50 pairs)" },
        ]}
        curl={`curl "${BASE}/v1/tokens/batch?items=0x05e7...:1,0x05e7...:2" \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "data": [
    {
      "contract": "0x05e7...",
      "tokenId": "1",
      "owner": "0x0591...",
      "metadata": { "name": "Genesis #1", "image": "ipfs://..." }
    },
    {
      "contract": "0x05e7...",
      "tokenId": "2",
      "owner": "0x0482...",
      "metadata": { "name": "Genesis #2", "image": "ipfs://..." }
    }
  ]
}`}
      />

      <DocH2 id="activities" border>Activities</DocH2>

      <Endpoint
        method="GET"
        path="/v1/activities"
        description="List all indexed on-chain events (transfers, sales, listings, cancellations)."
        params={[
          { name: "type", type: "string", desc: "Filter: TRANSFER | SALE | LISTING | CANCEL" },
          { name: "page", type: "number", desc: "Page number" },
          { name: "limit", type: "number", desc: "Items per page" },
        ]}
        curl={`curl "${BASE}/v1/activities?type=SALE&limit=10" \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "data": [
    {
      "type": "SALE",
      "from": "0x0591...",
      "to": "0x0482...",
      "nftContract": "0x05e7...",
      "tokenId": "42",
      "price": "500000",
      "currency": "USDC",
      "txHash": "0xabc...",
      "timestamp": "2026-03-01T10:00:00Z"
    }
  ],
  "meta": { "total": 441, "page": 1, "limit": 10 }
}`}
      />

      <Endpoint
        method="GET"
        path="/v1/activities/:address"
        description="Get all activities for a specific user address."
        params={[
          { name: "address", type: "string", required: true, desc: "Starknet address" },
        ]}
        curl={`curl "${BASE}/v1/activities/0x0591..." \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "data": [...],
  "meta": { "total": 12, "page": 1, "limit": 20 }
}`}
      />

      <DocH2 id="intents" border>Intents</DocH2>
      <p className="text-base text-muted-foreground mb-6">
        Intents orchestrate marketplace transactions. Every create-intent response carries a <code>requiresSignature</code> flag. When <code>true</code> (listing, offer, cancel) the response includes <code>typedData</code> to sign client-side (SNIP-12); submit the signature to <code>/v1/intents/:id/signature</code> to get the executable calls. When <code>false</code> (fulfil, mint, create-collection) the response returns fully-populated <code>calls</code> directly, with no signing step, because the caller is the fulfiller.
      </p>

      <Endpoint
        method="POST"
        path="/v1/intents/listing"
        description="Create a listing intent. Returns typed data for SNIP-12 signing."
        params={[
          { name: "nftContract", type: "string", required: true, desc: "NFT contract address" },
          { name: "tokenId", type: "string", required: true, desc: "Token ID" },
          { name: "price", type: "string", required: true, desc: "Price in smallest denomination" },
          { name: "currency", type: "string", required: true, desc: "USDC | USDT | ETH | STRK | WBTC" },
          { name: "offerer", type: "string", required: true, desc: "Seller Starknet address" },
        ]}
        curl={`curl -X POST "${BASE}/v1/intents/listing" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "nftContract": "0x05e7...",
    "tokenId": "42",
    "price": "500000",
    "currency": "USDC",
    "offerer": "0x0591..."
  }'`}
        response={`{
  "id": "clm_abc123",
  "requiresSignature": true,
  "typedData": {
    "types": { ... },
    "primaryType": "OrderParameters",
    "domain": { "name": "Medialane", "version": "4", "revision": "1" },
    "message": { ... }
  }
}`}
      />

      <Endpoint
        method="POST"
        path="/v1/intents/offer"
        description="Create an offer (bid) intent for a specific token."
        params={[
          { name: "nftContract", type: "string", required: true, desc: "Target NFT contract" },
          { name: "tokenId", type: "string", required: true, desc: "Token ID" },
          { name: "price", type: "string", required: true, desc: "Offer amount in smallest denomination" },
          { name: "currency", type: "string", required: true, desc: "USDC | USDT | ETH | STRK | WBTC" },
          { name: "offerer", type: "string", required: true, desc: "Buyer Starknet address" },
        ]}
        curl={`curl -X POST "${BASE}/v1/intents/offer" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{ "nftContract": "0x05e7...", "tokenId": "42", "price": "400000", "currency": "USDC", "offerer": "0x0482..." }'`}
        response={`{ "id": "clm_def456", "requiresSignature": true, "typedData": { ... } }`}
      />

      <Endpoint
        method="POST"
        path="/v1/intents/fulfill"
        description="Create a fulfillment intent to buy a listing or accept an offer. Unsigned, since the caller is the fulfiller, so the response returns executable calls directly with no signing step."
        params={[
          { name: "orderHash", type: "string", required: true, desc: "Hash of the order to fulfill" },
          { name: "fulfiller", type: "string", required: true, desc: "Fulfiller Starknet address" },
          { name: "tokenStandard", type: "string", desc: "ERC721 | ERC1155 (hint if the order isn't indexed yet)" },
          { name: "quantity", type: "string", desc: "ERC-1155 only: units to buy (default 1)" },
        ]}
        curl={`curl -X POST "${BASE}/v1/intents/fulfill" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{ "orderHash": "0x04f7a1...", "fulfiller": "0x0482..." }'`}
        response={`{ "id": "clm_ghi789", "requiresSignature": false, "calls": [...] }`}
      />

      <Endpoint
        method="POST"
        path="/v1/intents/cancel"
        description="Create a cancellation intent for an open order."
        params={[
          { name: "orderHash", type: "string", required: true, desc: "Hash of the order to cancel" },
          { name: "offerer", type: "string", required: true, desc: "Original offerer address" },
        ]}
        curl={`curl -X POST "${BASE}/v1/intents/cancel" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{ "orderHash": "0x04f7a1...", "offerer": "0x0591..." }'`}
        response={`{ "id": "clm_jkl012", "requiresSignature": true, "typedData": { ... } }`}
      />

      <Endpoint
        method="GET"
        path="/v1/intents/:id"
        description="Get the status of an intent."
        params={[
          { name: "id", type: "string", required: true, desc: "Intent ID" },
        ]}
        curl={`curl "${BASE}/v1/intents/clm_abc123" \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "intentId": "clm_abc123",
  "status": "PENDING_SIGNATURE",
  "type": "LISTING"
}`}
      />

      <Endpoint
        method="PATCH"
        path="/v1/intents/:id/signature"
        description="Submit the SNIP-12 signature for an intent to trigger on-chain execution."
        params={[
          { name: "id", type: "string", required: true, desc: "Intent ID" },
          { name: "signature", type: "string[]", required: true, desc: "Starknet signature array [r, s]" },
        ]}
        curl={`curl -X PATCH "${BASE}/v1/intents/clm_abc123/signature" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{ "signature": ["0xaaa...", "0xbbb..."] }'`}
        response={`{
  "intentId": "clm_abc123",
  "status": "SUBMITTED",
  "txHash": "0xabc..."
}`}
      />

      <Endpoint
        method="POST"
        path="/v1/tx/sync"
        description="Index a transaction now instead of waiting for the indexer, e.g. right after a mint."
        params={[
          { name: "txHash", type: "string", required: true, desc: "The transaction" },
        ]}
        curl={`curl -X POST "${BASE}/v1/tx/sync" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{"txHash":"0x..."}'`}
        response={`{ "data": { "applied": 2, "contracts": ["0x..."], "pending": false } }`}
      />

      <DocH2 id="checkout-intent" border>Checkout Intent</DocH2>
      <p className="text-base text-muted-foreground mb-6">
        Create fulfillment intents for multiple orders in a single request. Useful for cart-style checkout flows. Failed items return an error field rather than aborting the whole batch.
      </p>

      <Endpoint
        method="POST"
        path="/v1/intents/checkout"
        description="Batch fulfill intent creation. Accepts up to 20 items, each an order hash with an optional quantity for ERC-1155 editions. Per-item error handling: failed items return { orderHash, error } instead of rejecting the entire request."
        params={[
          { name: "fulfiller", type: "string", required: true, desc: "Fulfiller Starknet address" },
          { name: "items", type: "{ orderHash: string, quantity?: string }[]", required: false, desc: "Orders to fulfill (max 20). quantity applies to ERC-1155 editions and defaults to 1; ERC-721 ignores it. Provide items or orderHashes." },
          { name: "orderHashes", type: "string[]", required: false, desc: "Order hashes to fulfill (max 20). Equivalent to items with no quantity. Provide items or orderHashes." },
        ]}
        curl={`curl -X POST "${BASE}/v1/intents/checkout" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "fulfiller": "0x0482...",
    "items": [
      { "orderHash": "0xabc..." },
      { "orderHash": "0xdef...", "quantity": "3" }
    ]
  }'`}
        response={`{
  "data": [
    {
      "id": "clm_xyz001",
      "orderHash": "0xabc...",
      "typedData": { "types": { ... }, "primaryType": "Order", "domain": { ... }, "message": { ... } },
      "calls": [...],
      "expiresAt": "2026-03-12T10:15:00Z"
    },
    {
      "orderHash": "0xdef...",
      "error": "Order no longer available"
    }
  ]
}`}
      />

      <DocH2 id="metadata" border>Metadata</DocH2>

      <Endpoint
        method="GET"
        path="/v1/metadata/signed-url"
        description="Get a pre-signed upload URL for pinning metadata to IPFS via Medialane CDN."
        params={[]}
        curl={`curl "${BASE}/v1/metadata/signed-url" \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "url": "https://ipfs.io/ipfs/...",
  "fields": { ... },
  "expiresAt": "2026-03-01T10:30:00Z"
}`}
      />

      <Endpoint
        method="POST"
        path="/v1/metadata/upload"
        description="Upload JSON metadata. Returns an IPFS CID."
        params={[
          { name: "metadata", type: "object", required: true, desc: "ERC-721 compatible JSON metadata" },
        ]}
        curl={`curl -X POST "${BASE}/v1/metadata/upload" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{ "metadata": { "name": "My NFT", "description": "...", "image": "ipfs://..." } }'`}
        response={`{
  "cid": "QmXyz...",
  "uri": "ipfs://QmXyz..."
}`}
      />

      <Endpoint
        method="POST"
        path="/v1/metadata/upload-file"
        description="Upload a media file. Returns an IPFS CID and gateway URL."
        params={[
          { name: "file", type: "File (multipart)", required: true, desc: "Image, audio, or video file" },
        ]}
        curl={`curl -X POST "${BASE}/v1/metadata/upload-file" \\
  -H "x-api-key: ${KEY}" \\
  -F "file=@artwork.png"`}
        response={`{
  "cid": "QmAbc...",
  "uri": "ipfs://QmAbc...",
  "gateway": "https://gateway.pinata.cloud/ipfs/QmAbc..."
}`}
      />

      <Endpoint
        method="GET"
        path="/v1/metadata/resolve"
        description="Resolve and return the metadata JSON for an IPFS URI or on-chain token."
        params={[
          { name: "uri", type: "string", required: true, desc: "ipfs:// URI or https:// URL" },
        ]}
        curl={`curl "${BASE}/v1/metadata/resolve?uri=ipfs%3A%2F%2FQmXyz..." \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "name": "My NFT",
  "description": "...",
  "image": "ipfs://QmAbc..."
}`}
      />

      <Endpoint
        method="POST"
        path="/v1/metadata/upload-directory"
        description="Pin several JSON files as one IPFS directory, e.g. a drop's token metadata. Up to 5 MB in total."
        params={[
          { name: "files", type: "{ name, content }[]", required: true, desc: "File names use letters, digits, dot, dash and underscore" },
        ]}
        curl={`curl -X POST "${BASE}/v1/metadata/upload-directory" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{"files":[{"name":"1.json","content":{"name":"Token 1"}}]}'`}
        response={`{ "data": { "cid": "bafy...", "baseUri": "ipfs://bafy.../" } }`}
      />

      <DocH2 id="infrastructure" border>Infrastructure</DocH2>

      <Endpoint
        method="POST"
        path="/v1/rpc"
        description="Starknet JSON-RPC, forwarded to Medialane's providers and returned verbatim. Methods are restricted to a read and transaction-submission allowlist. Every call is metered, so an integration needs no node of its own."
        params={[
          { name: "jsonrpc", type: "string", required: true, desc: 'Always "2.0"' },
          { name: "method", type: "string", required: true, desc: "Allowlisted Starknet method, e.g. starknet_call" },
          { name: "params", type: "object | array", required: false, desc: "Method parameters, passed through unchanged" },
          { name: "id", type: "number", required: true, desc: "JSON-RPC request id, echoed back" },
        ]}
        curl={`curl -X POST "${BASE}/v1/rpc" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{"jsonrpc":"2.0","method":"starknet_chainId","id":1}'`}
        response={`{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x534e5f4d41494e"
}`}
      />

      <Endpoint
        method="POST"
        path="/v1/swap/quote"
        description="Best available swap quote from the AVNU aggregator. Give exactly one of sellAmountRaw or buyAmountRaw, and identify each token by catalogue symbol or contract address."
        params={[
          { name: "sellSymbol", type: "string", required: false, desc: "Catalogue symbol, e.g. STRK. Use this or sellTokenAddress" },
          { name: "sellTokenAddress", type: "string", required: false, desc: "Contract address, for a coin outside the catalogue" },
          { name: "buySymbol", type: "string", required: false, desc: "Catalogue symbol. Use this or buyTokenAddress" },
          { name: "buyTokenAddress", type: "string", required: false, desc: "Contract address" },
          { name: "sellAmountRaw", type: "string", required: false, desc: "Amount in base units, fixing the sell side" },
          { name: "buyAmountRaw", type: "string", required: false, desc: "Amount in base units, fixing the buy side" },
          { name: "takerAddress", type: "string", required: false, desc: "Taker address, improves routing" },
        ]}
        curl={`curl -X POST "${BASE}/v1/swap/quote" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{"sellSymbol":"STRK","buySymbol":"USDC","sellAmountRaw":"1000000000000000000"}'`}
        response={`{
  "quote": {
    "quoteId": "04175217-...",
    "sellTokenAddress": "0x0471...",
    "buyTokenAddress": "0x0330...",
    "sellAmount": "1000000000000000000",
    "buyAmount": "421000"
  }
}`}
      />

      <Endpoint
        method="POST"
        path="/v1/swap/build"
        description="Build the calls for a swap. Same parameters as the quote endpoint, plus a required takerAddress. Returns calls ready to sign and execute."
        params={[
          { name: "takerAddress", type: "string", required: true, desc: "Address that will execute the swap" },
        ]}
        curl={`curl -X POST "${BASE}/v1/swap/build" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{"sellSymbol":"STRK","buySymbol":"USDC","sellAmountRaw":"1000000000000000000","takerAddress":"0x0482..."}'`}
        response={`{
  "calls": [ { "contractAddress": "0x...", "entrypoint": "approve", "calldata": ["..."] } ],
  "chainId": "0x534e5f4d41494e",
  "quote": { "quoteId": "04175217-..." }
}`}
      />

      <Endpoint
        method="POST"
        path="/v1/paymaster/invoke/build"
        description="Build a gas-sponsored invoke. Returns typed data for the account to sign. The account must already be deployed; a call for an undeployed account returns 422. Both the entrypoint and the target contract must be eligible for sponsorship (a fixed registry contract, or — for per-creator entrypoints like mint — a contract the indexer knows was deployed by a Medialane factory); an ineligible call returns 400."
        params={[
          { name: "userAddress", type: "string", required: true, desc: "Account that will sign and execute" },
          { name: "calls", type: "Call[]", required: true, desc: "One or more calls to execute in a single sponsored transaction" },
        ]}
        curl={`curl -X POST "${BASE}/v1/paymaster/invoke/build" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{"userAddress":"0x0482...","calls":[{"contractAddress":"0x0471...","entrypoint":"transfer","calldata":["0x0482...","0x1","0x0"]}]}'`}
        response={`{
  "typedData": { "types": { }, "primaryType": "Invoke", "domain": { }, "message": { } }
}`}
      />

      <Endpoint
        method="POST"
        path="/v1/paymaster/invoke/execute"
        description="Execute a gas-sponsored invoke using the signature over the typed data returned by the build call. calls must be byte-for-byte the same array passed to build — the typed data is checked to encode exactly those calls before anything is submitted."
        params={[
          { name: "userAddress", type: "string", required: true, desc: "Account that signed" },
          { name: "typedData", type: "object", required: true, desc: "Typed data returned by the build call" },
          { name: "signature", type: "string[]", required: true, desc: "Signature over the typed data" },
          { name: "calls", type: "Call[]", required: true, desc: "The same calls array passed to the build call" },
        ]}
        curl={`curl -X POST "${BASE}/v1/paymaster/invoke/execute" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{"userAddress":"0x0482...","typedData":{},"signature":["0x1","0x2"],"calls":[{"contractAddress":"0x0471...","entrypoint":"transfer","calldata":["0x0482...","0x1","0x0"]}]}'`}
        response={`{
  "transactionHash": "0x06f2..."
}`}
      />

      <Endpoint
        method="POST"
        path="/v1/paymaster/deploy/build"
        description="Build a gas-sponsored Media Wallet deployment. Returns typed data to sign plus the deployment payload and calls, both of which must be echoed back verbatim to the execute call."
        params={[
          { name: "ownerPubkey", type: "string", required: true, desc: "The account's owner public key" },
          { name: "ownerAddress", type: "string", required: true, desc: "The counterfactual address being deployed to" },
          { name: "salt", type: "string", desc: "Deployment salt. Defaults to 0x0." },
        ]}
        curl={`curl -X POST "${BASE}/v1/paymaster/deploy/build" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{"ownerPubkey":"0x02c1...","ownerAddress":"0x0482..."}'`}
        response={`{
  "typedData": { "types": { }, "primaryType": "Invoke", "domain": { }, "message": { } },
  "deployment": { "address": "0x0482...", "class_hash": "0x...", "salt": "0x0", "calldata": ["..."], "version": 1 },
  "calls": [ { "contractAddress": "0x...", "entrypoint": "transfer", "calldata": ["..."] } ]
}`}
      />

      <Endpoint
        method="POST"
        path="/v1/paymaster/deploy/execute"
        description="Execute a gas-sponsored Media Wallet deployment. deployment and calls must be exactly what the build call returned — a deployment for any class hash other than Media Wallet's, or one whose address doesn't match ownerAddress, is rejected."
        params={[
          { name: "ownerAddress", type: "string", required: true, desc: "The address being deployed" },
          { name: "typedData", type: "object", required: true, desc: "Typed data returned by the build call" },
          { name: "signature", type: "string[]", required: true, desc: "Signature over the typed data" },
          { name: "deployment", type: "object", required: true, desc: "The deployment payload returned by the build call" },
          { name: "calls", type: "Call[]", required: true, desc: "The same calls array returned by the build call" },
        ]}
        curl={`curl -X POST "${BASE}/v1/paymaster/deploy/execute" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{"ownerAddress":"0x0482...","typedData":{},"signature":["0x1","0x2"],"deployment":{},"calls":[]}'`}
        response={`{
  "transactionHash": "0x06f2..."
}`}
      />

      <DocH2 id="search" border>Search</DocH2>

      <Endpoint
        method="GET"
        path="/v1/search"
        description="Full-text search across tokens, collections, and users."
        params={[
          { name: "q", type: "string", required: true, desc: "Search query string" },
          { name: "type", type: "string", desc: "Filter: token | collection | user" },
          { name: "limit", type: "number", desc: "Max results (default: 10)" },
        ]}
        curl={`curl "${BASE}/v1/search?q=genesis" \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "data": [
    { "type": "collection", "contract": "0x05e7...", "name": "Medialane Collection" },
    { "type": "token", "contract": "0x05e7...", "tokenId": "1", "name": "Genesis #1" }
  ]
}`}
      />

      <DocH2 id="events" border>Events (SSE)</DocH2>
      <p className="text-base text-muted-foreground mb-6">
        Subscribe to a real-time Server-Sent Events stream for transfers, order lifecycle events, and keepalive pings. Authentication uses a query parameter since browsers cannot send custom headers with the native <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">EventSource</code> API. PREMIUM plan recommended for sustained connections.
      </p>

      <Endpoint
        method="GET"
        path="/v1/events"
        description="Open a Server-Sent Events stream. The server sends transfer, order.created, order.fulfilled, order.cancelled, and ping (keepalive every 15s) events. Automatically reconnects after 10 minutes via a reconnect event."
        params={[
          { name: "apiKey", type: "string", required: true, desc: "Your API key (query param, required because EventSource cannot send custom headers)" },
          { name: "since", type: "string", desc: "ISO 8601 timestamp; resume stream from this point in time" },
        ]}
        curl={`# Open the stream (cURL streams until closed)
curl -N "${BASE}/v1/events?apiKey=${KEY}"

# Resume from a specific timestamp
curl -N "${BASE}/v1/events?apiKey=${KEY}&since=2026-03-12T10:00:00Z"

# Resume using Last-Event-ID header (standard SSE resume)
curl -N "${BASE}/v1/events?apiKey=${KEY}" \\
  -H "Last-Event-ID: evt_abc123"`}
        response={`id: evt_001
event: transfer
data: {"contractAddress":"0x05e7...","tokenId":"42","from":"0x0000...","to":"0x0591...","txHash":"0xabc...","timestamp":"2026-03-12T10:00:01Z"}

id: evt_002
event: order.created
data: {"orderHash":"0x04f7a1...","nftContract":"0x05e7...","tokenId":"42","price":"500000","currency":"USDC","offerer":"0x0591..."}

id: evt_003
event: order.fulfilled
data: {"orderHash":"0x04f7a1...","fulfiller":"0x0482...","txHash":"0xdef..."}

id: evt_004
event: order.cancelled
data: {"orderHash":"0x04f7a1...","offerer":"0x0591..."}

id: evt_005
event: ping
data: {}

event: reconnect
data: {}`}
      />

      <div className="mb-10 space-y-4">
        <p className="text-base font-semibold uppercase tracking-widest text-muted-foreground">Browser (native EventSource)</p>
        <div className="rounded-lg bg-black/50 border border-foreground/10">
          <pre className="p-4 text-xs font-mono text-green-300/90 overflow-x-auto whitespace-pre">{`const url = \`${BASE}/v1/events?apiKey=\${YOUR_KEY}\`
const source = new EventSource(url)

source.addEventListener("transfer", (e) => {
  const transfer = JSON.parse(e.data)
  console.log("Transfer:", transfer.contractAddress, transfer.tokenId)
})

source.addEventListener("order.fulfilled", (e) => {
  const order = JSON.parse(e.data)
  console.log("Order fulfilled:", order.orderHash)
})

source.addEventListener("order.created", (e) => {
  const order = JSON.parse(e.data)
  console.log("New listing:", order.orderHash, order.price, order.currency)
})

// Reconnect with resume on error
source.addEventListener("error", () => {
  const lastId = source.lastEventId
  source.close()
  const resumeUrl = \`${BASE}/v1/events?apiKey=\${YOUR_KEY}\${lastId ? \`&since=\${lastId}\` : ""}\`
  // reconnect: new EventSource(resumeUrl)
})`}</pre>
        </div>

        <p className="text-base font-semibold uppercase tracking-widest text-muted-foreground mt-4">Node.js (eventsource npm package)</p>
        <div className="rounded-lg bg-black/50 border border-foreground/10">
          <pre className="p-4 text-xs font-mono text-green-300/90 overflow-x-auto whitespace-pre">{`import EventSource from "eventsource"

const url = \`${BASE}/v1/events?apiKey=\${YOUR_KEY}\`
const source = new EventSource(url)

source.addEventListener("order.fulfilled", (e) => {
  const order = JSON.parse(e.data)
  console.log("Order fulfilled:", order.orderHash)
})

source.addEventListener("ping", () => {
  // keepalive — no action needed
})

source.addEventListener("reconnect", () => {
  // server is closing after 10 min — reconnect
  source.close()
  new EventSource(\`${BASE}/v1/events?apiKey=\${YOUR_KEY}\`)
})

// Resume from a known point using Last-Event-ID
const resumeSource = new EventSource(url, {
  headers: { "Last-Event-ID": "evt_abc123" },
})`}</pre>
        </div>
      </div>

      <DocH2 id="portal" border>Portal (Self-service)</DocH2>
      <p className="text-base text-muted-foreground mb-6">
        Portal endpoints manage your account: API keys, credits, top-ups, launchpad runs and webhooks (PREMIUM). They act for a signed-in user, so every call also carries <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">Authorization: Bearer</code> with a wallet sign-in token or an account session. Creating or deleting a key needs a recent sign-in (within 10 minutes). These calls are never metered.
      </p>

      <Endpoint
        method="GET"
        path="/v1/portal/me"
        description="Get your account: plan, status, and live credit balance."
        params={[]}
        curl={`curl "${BASE}/v1/portal/me" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer <SIGN_IN_TOKEN>"`}
        response={`{
  "data": {
    "id": "acct_abc",
    "plan": "FREE",
    "status": "ACTIVE",
    "creditBalance": 1200
  }
}`}
      />

      <Endpoint
        method="GET"
        path="/v1/portal/credits/spend"
        description="See what your credits were spent on: recent actions, totals grouped by action, and what you have been credited against what you have used."
        params={[]}
        curl={`curl "${BASE}/v1/portal/credits/spend" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer <SIGN_IN_TOKEN>"`}
        response={`{
  "data": {
    "recent": [
      { "id": "use_abc", "actionKey": "wallet:deploy", "service": "ALL", "units": 12, "credits": 60, "createdAt": "..." }
    ],
    "byAction": [
      { "actionKey": "wallet:deploy", "credits": 60, "units": 12 }
    ],
    "credited": 2800,
    "spent": 1600,
    "drift": 0
  }
}`}
      />

      <Endpoint
        method="GET"
        path="/v1/portal/keys"
        description="The account's API key. The list holds at most one key."
        params={[]}
        curl={`curl "${BASE}/v1/portal/keys" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer <SIGN_IN_TOKEN>"`}
        response={`{
  "data": [
    { "id": "key_abc", "prefix": "ml_live_abc", "label": null, "lastUsedAt": "...", "createdAt": "..." }
  ]
}`}
      />

      <Endpoint
        method="POST"
        path="/v1/portal/keys"
        description="Create the account's API key. If the account already has a key, it is replaced: the current key stops working immediately."
        params={[
          { name: "label", type: "string", required: false, desc: "A label for this key (max 64 chars)" },
        ]}
        curl={`curl -X POST "${BASE}/v1/portal/keys" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer <SIGN_IN_TOKEN>" \\
  -H "Content-Type: application/json" \\
  -d '{ "label": "My Agent Key" }'`}
        response={`{
  "data": {
    "id": "key_new",
    "prefix": "ml_live_xxxx",
    "label": "My Agent Key",
    "plaintext": "ml_live_FULL_KEY_SHOWN_ONCE"
  }
}`}
      />

      <Endpoint
        method="DELETE"
        path="/v1/portal/keys/:id"
        description="Delete the account's API key. The key stops working immediately. This action is irreversible."
        params={[
          { name: "id", type: "string", required: true, desc: "Key ID" },
        ]}
        curl={`curl -X DELETE "${BASE}/v1/portal/keys/key_abc" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer <SIGN_IN_TOKEN>"`}
        response={`{ "data": { "id": "key_abc" } }`}
      />

      <Endpoint
        method="GET"
        path="/v1/portal/credits/history"
        description="Your last 20 credit deposits: asset, amount, credits added and status."
        curl={`curl "${BASE}/v1/portal/credits/history" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer <SIGN_IN_TOKEN>"`}
        response={`{
  "data": [
    { "id": "pay_...", "asset": "USDC", "amountAtomic": "5000000", "creditedAmount": 500, "mdlnMultiplier": 1, "txHash": "0x...", "status": "CREDITED", "createdAt": "..." }
  ]
}`}
      />

      <Endpoint
        method="POST"
        path="/v1/portal/credits/check"
        description="Credit a USDC deposit you already sent, by its transaction hash. Safe to repeat: a transfer is only counted once."
        params={[
          { name: "txHash", type: "string", required: true, desc: "The deposit transaction" },
        ]}
        curl={`curl -X POST "${BASE}/v1/portal/credits/check" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer <SIGN_IN_TOKEN>" \\
  -H "Content-Type: application/json" \\
  -d '{ "txHash": "0x..." }'`}
        response={`{ "data": { "deposits": 1 } }`}
      />

      <Endpoint
        method="GET"
        path="/v1/portal/webhooks"
        description="List registered webhooks. PREMIUM only."
        params={[]}
        curl={`curl "${BASE}/v1/portal/webhooks" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer <SIGN_IN_TOKEN>"`}
        response={`{
  "data": [
    { "id": "wh_abc", "url": "https://yourapp.com/hook", "events": ["ORDER_CREATED"], "active": true }
  ]
}`}
      />

      <Endpoint
        method="POST"
        path="/v1/portal/webhooks"
        description="Register a new webhook endpoint. PREMIUM only."
        params={[
          { name: "url", type: "string", required: true, desc: "HTTPS endpoint to receive events" },
          { name: "events", type: "string[]", required: true, desc: "ORDER_CREATED | ORDER_FULFILLED | ORDER_CANCELLED | TRANSFER" },
        ]}
        curl={`curl -X POST "${BASE}/v1/portal/webhooks" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer <SIGN_IN_TOKEN>" \\
  -H "Content-Type: application/json" \\
  -d '{ "url": "https://yourapp.com/hook", "events": ["ORDER_CREATED", "TRANSFER"] }'`}
        response={`{
  "id": "wh_new",
  "url": "https://yourapp.com/hook",
  "events": ["ORDER_CREATED", "TRANSFER"],
  "secret": "whsec_SHOWN_ONCE"
}`}
      />

      <Endpoint
        method="DELETE"
        path="/v1/portal/webhooks/:id"
        description="Delete a webhook."
        params={[
          { name: "id", type: "string", required: true, desc: "Webhook ID" },
        ]}
        curl={`curl -X DELETE "${BASE}/v1/portal/webhooks/wh_abc" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer <SIGN_IN_TOKEN>"`}
        response={`{ "success": true }`}
      />

      <DocH3>Top-ups</DocH3>
      <p className="text-muted-foreground mb-6 text-base">
        A top-up pays for credits with a method from <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">/methods</code>: create it, sign the challenge with the paying wallet, send the payment, then submit. Request bodies depend on the method; the SDK&apos;s <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">getFundingMethods</code>, <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">createFunding</code>, <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">getFundingChallenge</code>, <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">authorizeFunding</code>, <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">submitFunding</code> and <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">cancelFunding</code> build them for you. An account can have any number of top-ups open.
      </p>
      <Endpoint
        method="GET"
        path="/v1/portal/funding/methods"
        description="The payment methods available for a top-up."
        curl={`curl "${BASE}/v1/portal/funding/methods" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer <SIGN_IN_TOKEN>"`}
        response={`{ "data": [{ "id": "chain-transfer", "...": "..." }] }`}
      />

      <Endpoint
        method="POST"
        path="/v1/portal/funding"
        description="Open a top-up."
        params={[
          { name: "method", type: "string", required: true, desc: "A method id from /methods" },
          { name: "params", type: "object", required: true, desc: "Method-specific, e.g. { \"amountUsdc\": \"5\" } for chain-transfer" },
        ]}
        curl={`curl -X POST "${BASE}/v1/portal/funding" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer <SIGN_IN_TOKEN>" \\
  -H "Content-Type: application/json" \\
  -d '{ "method": "chain-transfer", "params": { "amountUsdc": "5" } }'`}
        response={`{ "data": { "id": "fi_...", "method": "chain-transfer", "status": "PENDING", "expiresAt": "..." } }`}
      />

      <Endpoint
        method="POST"
        path="/v1/portal/funding/:id/submit"
        description="Report that the payment was sent. Returns 202 while the payment is not yet visible on-chain; call again until it is SETTLED."
        curl={`curl -X POST "${BASE}/v1/portal/funding/fi_.../submit" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer <SIGN_IN_TOKEN>" \\
  -H "Content-Type: application/json" \\
  -d '{ "txHash": "0x..." }'`}
        response={`{ "data": { "status": "SETTLED", "credited": 500 } }`}
      />

      <DocH3>Launchpad runs</DocH3>
      <p className="text-muted-foreground mb-6 text-base">
        A run is a paid, multi-step launch (data tokenization, IP ticketing) for your account: create it with a spec, check out with credits or a settled top-up, then execute its steps. The SDK&apos;s <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">createLaunchpadRunsClient</code> wraps every step; the routes live under <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">/v1/portal/runs</code>.
      </p>
      <Endpoint
        method="POST"
        path="/v1/portal/runs"
        description="Create a run in DRAFT with its quote."
        params={[
          { name: "service", type: "string", required: true, desc: "\"data-tokenization-erc721\" | \"ip-ticketing\"" },
          { name: "spec", type: "object", required: true, desc: "What to launch; validated per service" },
        ]}
        curl={`curl -X POST "${BASE}/v1/portal/runs" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer <SIGN_IN_TOKEN>" \\
  -H "Content-Type: application/json" \\
  -d '{ "service": "ip-ticketing", "spec": { "...": "..." } }'`}
        response={`{ "data": { "id": "run_...", "service": "ip-ticketing", "status": "DRAFT", "quote": { "lines": [], "total": 120 } } }`}
      />

      <Endpoint
        method="POST"
        path="/v1/portal/runs/:id/checkout"
        description="Pay for a run with credits, or from a settled top-up."
        params={[
          { name: "method", type: "string", required: true, desc: "\"credits\" | \"wallet\"" },
          { name: "intentId", type: "string", required: false, desc: "The settled top-up, when method is \"wallet\"" },
        ]}
        curl={`curl -X POST "${BASE}/v1/portal/runs/run_.../checkout" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer <SIGN_IN_TOKEN>" \\
  -H "Content-Type: application/json" \\
  -d '{ "method": "credits" }'`}
        response={`{ "data": { "id": "run_...", "status": "PAID", "next": { "kind": "collection" } } }`}
      />

      <DocH2 id="claims" border>Collection Claims</DocH2>
      <p className="text-base text-muted-foreground mb-6">
        Claim ownership of an existing Starknet ERC-721 collection. Three verification paths available: automatic on-chain check (requires SIWS session JWT), SNIP-12 signature challenge, or manual email review.
      </p>

      <Endpoint
        method="POST"
        path="/v1/collections/claim"
        description="Path 1: Auto-verify ownership on-chain. Requires both an API key and a SIWS session JWT in the Authorization header. The API checks that the authenticated wallet is the on-chain owner of the contract."
        params={[
          { name: "contractAddress", type: "string", required: true, desc: "The ERC-721 contract address to claim" },
          { name: "walletAddress", type: "string", required: true, desc: "The Starknet wallet address claiming ownership" },
        ]}
        curl={`curl -X POST "${BASE}/v1/collections/claim" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer SIWS_SESSION_JWT" \\
  -H "Content-Type: application/json" \\
  -d '{ "contractAddress": "0x076c...", "walletAddress": "0x03d0..." }'`}
        response={`{
  "verified": true,
  "collection": { "contractAddress": "0x076c...", "name": "My Collection", "claimedBy": "0x03d0..." }
}

// If not verified:
{ "verified": false, "reason": "not_owner" }`}
      />

      <Endpoint
        method="POST"
        path="/v1/collections/claim/challenge"
        description="Path 2 (step 1): Request a SNIP-12 typed-data challenge for a contract address. Sign the returned typedData with your Starknet wallet, then submit to /verify."
        params={[
          { name: "contractAddress", type: "string", required: true, desc: "The ERC-721 contract address to claim" },
          { name: "walletAddress", type: "string", required: true, desc: "The wallet that will sign the challenge" },
        ]}
        curl={`curl -X POST "${BASE}/v1/collections/claim/challenge" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{ "contractAddress": "0x076c...", "walletAddress": "0x03d0..." }'`}
        response={`{
  "challengeId": "chal_abc123",
  "typedData": { "domain": { "name": "Medialane", "version": "1", "revision": "1" }, "..." },
  "expiresAt": "2026-03-15T16:00:00Z"
}`}
      />

      <Endpoint
        method="POST"
        path="/v1/collections/claim/verify"
        description="Path 2 (step 2): Submit the SNIP-12 signature from the challenge step. If valid, the collection is marked as claimed by the wallet."
        params={[
          { name: "challengeId", type: "string", required: true, desc: "Challenge ID from /claim/challenge" },
          { name: "signature", type: "object", required: true, desc: '{ r: string; s: string }, a starknet.js signature object' },
        ]}
        curl={`curl -X POST "${BASE}/v1/collections/claim/verify" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{ "challengeId": "chal_abc123", "signature": { "r": "0x...", "s": "0x..." } }'`}
        response={`{
  "verified": true,
  "collection": { "contractAddress": "0x076c...", "claimedBy": "0x03d0..." }
}`}
      />

      <Endpoint
        method="POST"
        path="/v1/collections/claim/request"
        description="Path 3: Submit a manual claim request for admin review. Requires no wallet signature; our team will verify and reach out by email."
        params={[
          { name: "contractAddress", type: "string", required: true, desc: "The ERC-721 contract address to claim" },
          { name: "email", type: "string", required: true, desc: "Email address for review correspondence" },
          { name: "walletAddress", type: "string", desc: "Optional: your Starknet wallet address" },
          { name: "notes", type: "string", desc: "Optional: context about your connection to the collection" },
        ]}
        curl={`curl -X POST "${BASE}/v1/collections/claim/request" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{ "contractAddress": "0x076c...", "email": "creator@example.com", "notes": "I deployed this contract in block 7488000" }'`}
        response={`{
  "claim": {
    "id": "clm_xyz",
    "contractAddress": "0x076c...",
    "status": "PENDING",
    "verificationMethod": "MANUAL",
    "createdAt": "2026-03-15T15:00:00Z"
  }
}`}
      />

      <DocH2 id="profiles" border>Profiles</DocH2>
      <p className="text-base text-muted-foreground mb-6">
        Enriched display metadata for collections and creators. Collection profiles can only be updated by the wallet that claimed the collection (requires SIWS session JWT). Creator profiles can be updated by the profile owner.
      </p>

      <Endpoint
        method="GET"
        path="/v1/collections/:contract/profile"
        description="Get the display profile for a collection (displayName, description, cover image, banner, social links). Returns null if no profile has been set."
        params={[
          { name: "contract", type: "string", required: true, desc: "NFT contract address" },
        ]}
        curl={`curl "${BASE}/v1/collections/0x076c.../profile" \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "contractAddress": "0x076c...",
  "chain": "STARKNET",
  "displayName": "The Revenge of Shiroi",
  "description": "Music · Video · Concept Art",
  "image": "ipfs://bafybeif2a...",
  "bannerImage": "ipfs://bafybeic...",
  "websiteUrl": "https://shiroi.io",
  "twitterUrl": "https://x.com/shiroi",
  "discordUrl": null,
  "telegramUrl": null,
  "updatedAt": "2026-03-15T15:00:00Z"
}`}
      />

      <Endpoint
        method="PATCH"
        path="/v1/collections/:contract/profile"
        description="Update the display profile for a collection. Requires a SIWS session JWT; the authenticated wallet must be the claimedBy address for this collection."
        params={[
          { name: "contract", type: "string", required: true, desc: "NFT contract address (URL param)" },
          { name: "displayName", type: "string", desc: "Display name (overrides on-chain name)" },
          { name: "description", type: "string", desc: "Collection description" },
          { name: "image", type: "string", desc: "Cover image IPFS URI (ipfs://...)" },
          { name: "bannerImage", type: "string", desc: "Banner image IPFS URI (ipfs://...)" },
          { name: "websiteUrl", type: "string", desc: "Website URL" },
          { name: "twitterUrl", type: "string", desc: "Twitter/X URL" },
          { name: "discordUrl", type: "string", desc: "Discord server URL" },
          { name: "telegramUrl", type: "string", desc: "Telegram URL" },
        ]}
        curl={`curl -X PATCH "${BASE}/v1/collections/0x076c.../profile" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer SIWS_SESSION_JWT" \\
  -H "Content-Type: application/json" \\
  -d '{ "displayName": "Shiroi Collection", "description": "Music & Concept Art", "websiteUrl": "https://shiroi.io" }'`}
        response={`{
  "contractAddress": "0x076c...",
  "displayName": "Shiroi Collection",
  "description": "Music & Concept Art",
  "websiteUrl": "https://shiroi.io",
  "updatedAt": "2026-03-15T15:05:00Z"
}`}
      />

      <Endpoint
        method="GET"
        path="/v1/creators/:wallet/profile"
        description="Get the display profile for a creator wallet (displayName, bio, avatar, social links). Returns null if no profile has been set."
        params={[
          { name: "wallet", type: "string", required: true, desc: "Starknet wallet address" },
        ]}
        curl={`curl "${BASE}/v1/creators/0x03d0.../profile" \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "walletAddress": "0x03d0...",
  "chain": "STARKNET",
  "displayName": "Kalamaha",
  "bio": "Visual artist on Starknet",
  "avatarImage": "ipfs://bafkrei...",
  "websiteUrl": "https://kalamaha.art",
  "twitterUrl": "https://x.com/kalamaha",
  "discordUrl": null,
  "telegramUrl": null,
  "updatedAt": "2026-03-15T15:00:00Z"
}`}
      />

      <Endpoint
        method="PATCH"
        path="/v1/creators/:wallet/profile"
        description="Update a creator profile. Requires a SIWS session JWT; the authenticated wallet must match the wallet URL parameter."
        params={[
          { name: "wallet", type: "string", required: true, desc: "Starknet wallet address (URL param)" },
          { name: "displayName", type: "string", desc: "Display name or handle" },
          { name: "bio", type: "string", desc: "Short bio" },
          { name: "avatarImage", type: "string", desc: "Avatar IPFS URI (ipfs://...)" },
          { name: "websiteUrl", type: "string", desc: "Website URL" },
          { name: "twitterUrl", type: "string", desc: "Twitter/X URL" },
          { name: "discordUrl", type: "string", desc: "Discord URL" },
          { name: "telegramUrl", type: "string", desc: "Telegram URL" },
        ]}
        curl={`curl -X PATCH "${BASE}/v1/creators/0x03d0.../profile" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer SIWS_SESSION_JWT" \\
  -H "Content-Type: application/json" \\
  -d '{ "displayName": "Kalamaha", "bio": "Visual artist on Starknet" }'`}
        response={`{
  "walletAddress": "0x03d0...",
  "displayName": "Kalamaha",
  "bio": "Visual artist on Starknet",
  "updatedAt": "2026-03-15T15:05:00Z"
}`}
      />

      <Endpoint
        method="GET"
        path="/v1/creators"
        description="Paginated list of creator profiles. Public."
        params={[
          { name: "page", type: "number", required: false, desc: "Page number (default 1)" },
          { name: "limit", type: "number", required: false, desc: "Page size" },
        ]}
        curl={`curl "${BASE}/v1/creators?page=1&limit=24" \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "data": [
    {
      "walletAddress": "0x03d0...",
      "username": "kalamaha",
      "displayName": "Kalamaha",
      "avatarImage": "ipfs://..."
    }
  ],
  "meta": { "page": 1, "limit": 24, "total": 61 }
}`}
      />

      <Endpoint
        method="GET"
        path="/v1/creators/by-username/:username"
        description="Resolve a creator's vanity username to their full profile. Public. Returns null if the username is unclaimed."
        params={[
          { name: "username", type: "string", required: true, desc: "Creator username" },
        ]}
        curl={`curl "${BASE}/v1/creators/by-username/kalamaha" \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "walletAddress": "0x03d0...",
  "username": "kalamaha",
  "displayName": "Kalamaha",
  "bio": "Visual artist on Starknet"
}`}
      />

      <Endpoint
        method="GET"
        path="/v1/creators/:wallet/hidden"
        description="Whether a creator page is hidden by moderation."
        curl={`curl "${BASE}/v1/creators/0x0591.../hidden" \\
  -H "x-api-key: ${KEY}"`}
        response={`{ "isHidden": false }`}
      />

      <DocH2 id="comments" border>On-chain Comments</DocH2>
      <p className="text-base text-muted-foreground mb-6">
        Permanent on-chain comments posted to the NFTComments contract on Starknet. Comments are indexed by the backend and surfaced here. The Cairo contract enforces a 60-second per-address rate limit and comments cannot be deleted on-chain, only hidden at the application layer after reports.
      </p>

      <Endpoint
        method="GET"
        path="/v1/tokens/:contract/:tokenId/comments"
        description="List indexed on-chain comments for a token, newest first. Hidden comments (3+ reports) are excluded."
        params={[
          { name: "contract", type: "string", required: true, desc: "NFT contract address" },
          { name: "tokenId", type: "string", required: true, desc: "Token ID" },
          { name: "page", type: "number", desc: "Page number (default: 1)" },
          { name: "limit", type: "number", desc: "Results per page (default: 20, max: 100)" },
        ]}
        curl={`curl "${BASE}/v1/tokens/0x05e7.../42/comments?limit=20" \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "data": [
    {
      "id": "cmt_01j...",
      "chain": "starknet",
      "contractAddress": "0x05e7...",
      "tokenId": "42",
      "author": "0x03d0...",
      "content": "This is a permanent mark on Starknet.",
      "txHash": "0x07a2...",
      "blockNumber": "789123",
      "postedAt": "2026-03-22T14:00:00Z"
    }
  ],
  "meta": { "page": 1, "limit": 20, "total": 5 }
}`}
      />

      <DocH2 id="counter-offers" border>Counter-offers</DocH2>
      <p className="text-base text-muted-foreground mb-6">
        Sellers can respond to buyer bids with a counter-offer: a new on-chain listing linked to the original bid via <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">parentOrderHash</code>. The original bid&apos;s status is unaffected; instead its <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">hasActiveCounterOffer</code> flag is set to <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">true</code> (the legacy <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">COUNTER_OFFERED</code> order status was removed). The buyer can then accept (fulfill the counter listing) or ignore it.
      </p>

      <Endpoint
        method="GET"
        path="/v1/orders/counter-offers"
        description="List counter-offer listings. Pass originalOrderHash for the buyer's view (one counter per bid) or sellerAddress for the seller's view (all counters they have sent). At least one query param is required."
        params={[
          { name: "originalOrderHash", type: "string", desc: "Original bid order hash; returns the counter-offer for this specific bid" },
          { name: "sellerAddress", type: "string", desc: "Seller address; returns all counter-offers sent by this seller" },
          { name: "page", type: "number", desc: "Page number (default: 1)" },
          { name: "limit", type: "number", desc: "Results per page (default: 20)" },
        ]}
        curl={`curl "${BASE}/v1/orders/counter-offers?originalOrderHash=0x04f7a1..." \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "data": [
    {
      "id": "ord_01j...",
      "orderHash": "0x0a1b...",
      "offerer": "0x0591...",
      "status": "ACTIVE",
      "parentOrderHash": "0x04f7a1...",
      "counterOfferMessage": "Best I can do!",
      "price": { "raw": "750000", "formatted": "0.75", "currency": "USDC", "decimals": 6 },
      "endTime": "2026-03-25T00:00:00Z",
      "token": { "name": "Genesis #42", "image": "ipfs://...", "description": null }
    }
  ],
  "meta": { "page": 1, "limit": 20, "total": 1 }
}`}
      />

      <Endpoint
        method="POST"
        path="/v1/intents/counter-offer"
        description="Create a counter-offer intent. The seller proposes a new price for the NFT in response to a buyer's active bid. Currency is derived server-side from the original bid token, so omit the currency field. Requires a SIWS session JWT for authentication; the seller address must match the consideration.recipient of the original bid."
        params={[
          { name: "sellerAddress", type: "string", required: true, desc: "Seller's wallet address" },
          { name: "originalOrderHash", type: "string", required: true, desc: "Order hash of the original buyer bid" },
          { name: "counterPrice", type: "string", required: true, desc: "Counter price as raw wei integer string" },
          { name: "durationSeconds", type: "number", required: true, desc: "Validity duration in seconds (3600–2592000)" },
          { name: "message", type: "string", desc: "Optional seller message to buyer (max 500 chars)" },
        ]}
        curl={`curl -X POST "${BASE}/v1/intents/counter-offer" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer SIWS_SESSION_JWT" \\
  -H "Content-Type: application/json" \\
  -d '{
    "sellerAddress": "0x0591...",
    "originalOrderHash": "0x04f7a1...",
    "counterPrice": "750000",
    "durationSeconds": 86400,
    "message": "Best I can do!"
  }'`}
        response={`{
  "data": {
    "id": "int_01j...",
    "typedData": { ... },
    "calls": [ ... ],
    "expiresAt": "2026-03-25T00:00:00Z"
  }
}`}
      />

      <DocH2 id="remix-licensing" border>Remix Licensing</DocH2>
      <p className="text-base text-muted-foreground mb-6">
        Creators can allow others to remix their NFTs under specific license terms. Open licenses (CC0, CC BY, CC BY-SA, CC BY-NC) are auto-approved. Custom terms require creator approval before the requester can mint. All endpoints require a SIWS session JWT except the public remixes list.
      </p>

      <Endpoint
        method="GET"
        path="/v1/tokens/:contract/:tokenId/remixes"
        description="List public remixes of a token. Price and currency fields are omitted, since this is a public endpoint. Returns minted remixes only."
        params={[
          { name: "contract", type: "string", required: true, desc: "Original NFT contract address" },
          { name: "tokenId", type: "string", required: true, desc: "Original token ID" },
          { name: "page", type: "number", desc: "Page number (default: 1)" },
          { name: "limit", type: "number", desc: "Results per page (default: 20)" },
        ]}
        curl={`curl "${BASE}/v1/tokens/0x05e7.../42/remixes" \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "data": [
    {
      "id": "rxo_01j...",
      "remixContract": "0x06a3...",
      "remixTokenId": "1",
      "licenseType": "CC BY",
      "commercial": true,
      "derivatives": true,
      "createdAt": "2026-03-23T10:00:00Z"
    }
  ],
  "meta": { "page": 1, "limit": 20, "total": 3 }
}`}
      />

      <Endpoint
        method="POST"
        path="/v1/remix-offers"
        description="Submit a custom remix offer for a token. If the token's license is not open (CC0/CC BY/CC BY-SA/CC BY-NC), the creator must approve before the requester can mint. Requires SIWS session JWT."
        params={[
          { name: "originalContract", type: "string", required: true, desc: "Original NFT contract address" },
          { name: "originalTokenId", type: "string", required: true, desc: "Original token ID" },
          { name: "licenseType", type: "string", required: true, desc: "Requested license (e.g. CC BY-NC)" },
          { name: "commercial", type: "boolean", required: true, desc: "Commercial use requested" },
          { name: "derivatives", type: "boolean", required: true, desc: "Derivatives allowed" },
          { name: "royaltyPct", type: "number", desc: "Royalty percentage (0–100)" },
          { name: "proposedPrice", type: "string", desc: "Proposed payment as raw wei integer string" },
          { name: "proposedCurrency", type: "string", desc: "Token address of proposed payment currency" },
          { name: "message", type: "string", desc: "Optional message to the creator" },
        ]}
        curl={`curl -X POST "${BASE}/v1/remix-offers" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer SIWS_SESSION_JWT" \\
  -H "Content-Type: application/json" \\
  -d '{
    "originalContract": "0x05e7...",
    "originalTokenId": "42",
    "licenseType": "CC BY-NC",
    "commercial": false,
    "derivatives": true,
    "royaltyPct": 10,
    "message": "Would love to remix this for my EP cover"
  }'`}
        response={`{
  "data": {
    "id": "rxo_01j...",
    "status": "PENDING",
    "originalContract": "0x05e7...",
    "originalTokenId": "42",
    "creatorAddress": "0x0591...",
    "requesterAddress": "0x03d0...",
    "licenseType": "CC BY-NC",
    "commercial": false,
    "derivatives": true,
    "royaltyPct": 10,
    "approvedCollection": null,
    "remixContract": null,
    "remixTokenId": null,
    "orderHash": null,
    "expiresAt": "2026-04-23T10:00:00Z",
    "createdAt": "2026-03-23T10:00:00Z"
  }
}`}
      />

      <Endpoint
        method="POST"
        path="/v1/remix-offers/auto"
        description="Submit an auto remix offer for a token with an open license (CC0, CC BY, CC BY-SA, CC BY-NC). Auto-approved immediately, with no creator action needed. Requires SIWS session JWT."
        params={[
          { name: "originalContract", type: "string", required: true, desc: "Original NFT contract address" },
          { name: "originalTokenId", type: "string", required: true, desc: "Original token ID" },
          { name: "licenseType", type: "string", required: true, desc: "Open license type (must be CC0, CC BY, CC BY-SA, or CC BY-NC)" },
        ]}
        curl={`curl -X POST "${BASE}/v1/remix-offers/auto" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer SIWS_SESSION_JWT" \\
  -H "Content-Type: application/json" \\
  -d '{ "originalContract": "0x05e7...", "originalTokenId": "7", "licenseType": "CC0" }'`}
        response={`{ "data": { "id": "rxo_01j...", "status": "AUTO_PENDING", ... } }`}
      />

      <Endpoint
        method="POST"
        path="/v1/remix-offers/self/confirm"
        description="Record a self-remix: the token owner remixing their own asset. Call after the remix has been minted on-chain. Requires SIWS session JWT."
        params={[
          { name: "originalContract", type: "string", required: true, desc: "Original NFT contract address" },
          { name: "originalTokenId", type: "string", required: true, desc: "Original token ID" },
          { name: "remixContract", type: "string", required: true, desc: "Remix NFT contract address" },
          { name: "remixTokenId", type: "string", required: true, desc: "Remix token ID" },
          { name: "licenseType", type: "string", required: true, desc: "License type applied to the remix" },
          { name: "commercial", type: "boolean", required: true, desc: "Commercial use" },
          { name: "derivatives", type: "boolean", required: true, desc: "Further derivatives allowed" },
          { name: "royaltyPct", type: "number", desc: "Royalty percentage" },
        ]}
        curl={`curl -X POST "${BASE}/v1/remix-offers/self/confirm" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer SIWS_SESSION_JWT" \\
  -H "Content-Type: application/json" \\
  -d '{ "originalContract": "0x05e7...", "originalTokenId": "42", "remixContract": "0x06a3...", "remixTokenId": "1", "licenseType": "CC BY", "commercial": true, "derivatives": true }'`}
        response={`{ "data": { "id": "rxo_01j...", "status": "SELF_MINTED", ... } }`}
      />

      <Endpoint
        method="GET"
        path="/v1/remix-offers"
        description="List remix offers for the authenticated user. Pass role=creator to see incoming offers (you are the original creator), or role=requester to see offers you made. Requires SIWS session JWT."
        params={[
          { name: "role", type: "string", required: true, desc: '"creator" or "requester"' },
          { name: "page", type: "number", desc: "Page (default: 1)" },
          { name: "limit", type: "number", desc: "Results per page (default: 20)" },
        ]}
        curl={`curl "${BASE}/v1/remix-offers?role=creator" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer SIWS_SESSION_JWT"`}
        response={`{
  "data": [ { "id": "rxo_01j...", "status": "PENDING", "requesterAddress": "0x03d0...", ... } ],
  "meta": { "page": 1, "limit": 20, "total": 2 }
}`}
      />

      <Endpoint
        method="POST"
        path="/v1/remix-offers/:id/confirm"
        description="Creator approves a pending remix offer and records the minted remix on-chain coordinates. Requires SIWS session JWT; caller must be the creator of the original token."
        params={[
          { name: "id", type: "string", required: true, desc: "Remix offer ID (URL param)" },
          { name: "approvedCollection", type: "string", required: true, desc: "Collection contract where the remix will be minted" },
          { name: "remixContract", type: "string", required: true, desc: "Remix NFT contract address (usually same as approvedCollection)" },
          { name: "remixTokenId", type: "string", required: true, desc: "Minted remix token ID" },
          { name: "orderHash", type: "string", desc: "Marketplace order hash if a payment was arranged" },
        ]}
        curl={`curl -X POST "${BASE}/v1/remix-offers/rxo_01j.../confirm" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer SIWS_SESSION_JWT" \\
  -H "Content-Type: application/json" \\
  -d '{ "approvedCollection": "0x06a3...", "remixContract": "0x06a3...", "remixTokenId": "1" }'`}
        response={`{ "data": { "id": "rxo_01j...", "status": "APPROVED", "remixContract": "0x06a3...", "remixTokenId": "1", ... } }`}
      />

      <Endpoint
        method="POST"
        path="/v1/remix-offers/:id/reject"
        description="Creator rejects a pending remix offer. Requires SIWS session JWT; caller must be the creator of the original token."
        params={[
          { name: "id", type: "string", required: true, desc: "Remix offer ID (URL param)" },
        ]}
        curl={`curl -X POST "${BASE}/v1/remix-offers/rxo_01j.../reject" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer SIWS_SESSION_JWT"`}
        response={`{ "data": { "id": "rxo_01j...", "status": "REJECTED", ... } }`}
      />

      <Endpoint
        method="GET"
        path="/v1/remix-offers/:id"
        description="One remix offer; price and message are shown only to its two parties."
        curl={`curl "${BASE}/v1/remix-offers/ro_..." \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer <SIWS_TOKEN>"`}
        response={`{ "data": { "id": "ro_...", "status": "PENDING", "price": { "raw": "5", "formatted": "5", "currency": "STRK", "decimals": 18 } } }`}
      />

      <Endpoint
        method="POST"
        path="/v1/remix-offers/:id/extend"
        description="Give a pending offer more time."
        params={[
          { name: "days", type: "number", required: true, desc: "1 to 30" },
        ]}
        curl={`curl -X POST "${BASE}/v1/remix-offers/ro_.../extend" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer <SIWS_TOKEN>" \\
  -H "Content-Type: application/json" \\
  -d '{"days":7}'`}
        response={`{ "data": { "id": "ro_...", "expiresAt": "..." } }`}
      />

      <DocH2 id="pop-protocol" border>POP Protocol</DocH2>
      <p className="text-base text-muted-foreground mb-6">
        Proof of Participation claim collections for events: conferences, workshops, hackathons, bootcamps. Each collection has one claimable token per eligible wallet. On-chain minting is handled via the SDK <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">client.services.pop</code>.
      </p>

      <Endpoint
        method="GET"
        path="/v1/pop/eligibility/:collection/:wallet"
        description="Check whether a single wallet is eligible to claim from a POP collection and whether it has already claimed."
        params={[
          { name: "collection", type: "string", required: true, desc: "POP collection contract address" },
          { name: "wallet", type: "string", required: true, desc: "Wallet address to check" },
        ]}
        curl={`curl "${BASE}/v1/pop/eligibility/0x00b32c.../0x0591..." \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "data": {
    "isEligible": true,
    "hasClaimed": false,
    "tokenId": null
  }
}`}
      />

      <Endpoint
        method="GET"
        path="/v1/pop/eligibility/:collection"
        description="Batch eligibility check: pass up to 100 wallet addresses as a comma-separated wallets query param."
        params={[
          { name: "collection", type: "string", required: true, desc: "POP collection contract address (URL param)" },
          { name: "wallets", type: "string", required: true, desc: "Comma-separated wallet addresses (max 100)" },
        ]}
        curl={`curl "${BASE}/v1/pop/eligibility/0x00b32c...?wallets=0x0591...,0x06a3..." \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "data": [
    { "wallet": "0x0591...", "isEligible": true,  "hasClaimed": false, "tokenId": null },
    { "wallet": "0x06a3...", "isEligible": false, "hasClaimed": false, "tokenId": null }
  ]
}`}
      />

      <DocH2 id="collection-drop" border>Collection Drop</DocH2>
      <p className="text-base text-muted-foreground mb-6">
        Public minting campaigns with configurable claim conditions: price, supply cap, time window, and per-wallet limits. On-chain minting and configuration are handled via the SDK <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">client.services.drop</code>.
      </p>

      <Endpoint
        method="GET"
        path="/v1/drop/mint-status/:collection/:wallet"
        description="Return how many tokens a wallet has minted from a Drop collection and the total minted across all wallets."
        params={[
          { name: "collection", type: "string", required: true, desc: "Drop collection contract address" },
          { name: "wallet", type: "string", required: true, desc: "Wallet address to check" },
        ]}
        curl={`curl "${BASE}/v1/drop/mint-status/0x03587f.../0x0591..." \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "data": {
    "mintedByWallet": 2,
    "totalMinted": 347
  }
}`}
      />

      <Endpoint
        method="GET"
        path="/v1/drop/:contract/info"
        description="Collection metadata for a drop. Public. Claim conditions are read from chain via /v1/drop/:contract/state."
        params={[
          { name: "contract", type: "string", required: true, desc: "Drop collection contract address" },
        ]}
        curl={`curl "${BASE}/v1/drop/0x03587f.../info" \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "data": {
    "contractAddress": "0x03587f...",
    "name": "Genesis Drop",
    "symbol": "GEN",
    "description": "...",
    "image": "ipfs://...",
    "owner": "0x0591...",
    "totalMinted": 347
  }
}`}
      />

      <Endpoint
        method="GET"
        path="/v1/drop/:contract/state"
        description="A drop's live on-chain state: claim conditions, minted, supply, allowlist and pause."
        curl={`curl "${BASE}/v1/drop/0x.../state" \\
  -H "x-api-key: ${KEY}"`}
        response={`{ "data": { "conditions": { "maxSupply": "1000", "price": "0", "paymentToken": "0x0", "startTime": 1780000000, "endTime": 1790000000, "maxPerWallet": "5" }, "totalMinted": 120, "maxSupply": 1000, "allowlistEnabled": false, "paused": false } }`}
      />

      <DocH2 id="tickets-club" border>IP Tickets &amp; IP Club</DocH2>
      <p className="text-base text-muted-foreground mb-6">
        Ticket types and membership tiers are read from their contracts. Tiers are numbered from 1 with no gaps, so a count tells you every id; counts are never cached, since apps use them to choose the next id.
      </p>
      <Endpoint
        method="GET"
        path="/v1/tickets/:contract/count"
        description="How many ticket types the collection has."
        curl={`curl "${BASE}/v1/tickets/0x.../count" \\
  -H "x-api-key: ${KEY}"`}
        response={`{ "data": { "count": 3 } }`}
      />

      <Endpoint
        method="GET"
        path="/v1/tickets/:contract/:tokenId"
        description="One ticket type: supply, minted, sale window, royalty. Amounts are decimal strings."
        curl={`curl "${BASE}/v1/tickets/0x.../1" \\
  -H "x-api-key: ${KEY}"`}
        response={`{ "data": { "maxSupply": "200", "minted": "12", "startTime": 1780000000, "endTime": null, "royaltyBps": 500 } }`}
      />

      <Endpoint
        method="GET"
        path="/v1/club/:contract/count"
        description="How many membership tiers the club has."
        curl={`curl "${BASE}/v1/club/0x.../count" \\
  -H "x-api-key: ${KEY}"`}
        response={`{ "data": { "count": 2 } }`}
      />

      <Endpoint
        method="GET"
        path="/v1/club/:contract/:tokenId"
        description="One membership tier, in the same shape as a ticket type."
        curl={`curl "${BASE}/v1/club/0x.../1" \\
  -H "x-api-key: ${KEY}"`}
        response={`{ "data": { "maxSupply": "100", "minted": "40", "startTime": null, "endTime": null, "royaltyBps": 0 } }`}
      />

      <Endpoint
        method="GET"
        path="/v1/club/:contract/:tokenId/member/:wallet"
        description="Whether a wallet holds the tier."
        curl={`curl "${BASE}/v1/club/0x.../1/member/0x0591..." \\
  -H "x-api-key: ${KEY}"`}
        response={`{ "data": { "isMember": true } }`}
      />

      <DocH2 id="sponsorship" border>IP Sponsorship</DocH2>
      <p className="text-base text-muted-foreground mb-6">
        Direct-settlement sponsorship deals: an asset owner posts an <strong>offer</strong> (open bidding or one invited sponsor) or a sponsor sends a fixed-terms <strong>proposal</strong> on any asset. Acceptance settles payment and mints a <strong>license</strong> (a real, transferable ERC-721) to the sponsor, atomically, in one transaction. The contract never holds funds; there is no escrow. Every write below is an unsigned intent (<code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">requiresSignature: false</code>); see <a href="#intents" className="text-primary hover:underline">Intents</a> for the general shape.
      </p>

      <Endpoint
        method="GET"
        path="/v1/sponsorship/offers"
        description="List sponsorship offers. Filter by nftContract, author, owner (current holder of the asset), or open status."
        params={[
          { name: "nftContract", type: "string", desc: "Filter by asset contract" },
          { name: "author", type: "string", desc: "Filter by the offer's author" },
          { name: "owner", type: "string", desc: "Filter to offers on assets currently held by this wallet" },
          { name: "open", type: "boolean", desc: "\"true\" | \"false\"" },
          { name: "chain", type: "string", desc: "Chain filter (default STARKNET)" },
          { name: "page", type: "number", desc: "Page number" },
          { name: "limit", type: "number", desc: "Items per page" },
        ]}
        curl={`curl "${BASE}/v1/sponsorship/offers?open=true" \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "data": [
    {
      "chain": "STARKNET",
      "contractAddress": "0x0372...",
      "offerId": "12",
      "author": "0x0591...",
      "nftContract": "0x05ebd2...",
      "tokenId": "5",
      "minAmount": "50000000",
      "duration": 7776000,
      "paymentToken": "0x0330...",
      "licenseTermsUri": "ipfs://...",
      "transferable": true,
      "royaltyBps": 250,
      "specificSponsor": null,
      "open": true
    }
  ],
  "meta": { "page": 1, "limit": 24, "total": 3 }
}`}
      />

      <Endpoint
        method="GET"
        path="/v1/sponsorship/offers/:offerId"
        description="Fetch a single sponsorship offer by id."
        params={[{ name: "offerId", type: "string", required: true, desc: "On-chain offer id" }]}
        curl={`curl "${BASE}/v1/sponsorship/offers/12" \\
  -H "x-api-key: ${KEY}"`}
        response={`{ "data": { "offerId": "12", "author": "0x0591...", "open": true, "..." : "..." } }`}
      />

      <Endpoint
        method="GET"
        path="/v1/sponsorship/offers/:offerId/bids"
        description="List standing bids on an offer."
        params={[{ name: "offerId", type: "string", required: true, desc: "On-chain offer id" }]}
        curl={`curl "${BASE}/v1/sponsorship/offers/12/bids" \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "data": [
    { "offerId": "12", "sponsor": "0x06a3...", "amount": "60000000" }
  ]
}`}
      />

      <Endpoint
        method="GET"
        path="/v1/sponsorship/proposals"
        description="List sponsor-initiated proposals. Filter by nftContract, proposer, owner (current asset holder), or open status."
        params={[
          { name: "nftContract", type: "string", desc: "Filter by asset contract" },
          { name: "proposer", type: "string", desc: "Filter by the sponsor who proposed" },
          { name: "owner", type: "string", desc: "Filter to proposals on assets currently held by this wallet" },
          { name: "open", type: "boolean", desc: "\"true\" | \"false\"" },
          { name: "chain", type: "string", desc: "Chain filter (default STARKNET)" },
          { name: "page", type: "number", desc: "Page number" },
          { name: "limit", type: "number", desc: "Items per page" },
        ]}
        curl={`curl "${BASE}/v1/sponsorship/proposals?owner=0x0591..." \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "data": [
    {
      "proposalId": "8",
      "proposer": "0x06a3...",
      "nftContract": "0x05ebd2...",
      "tokenId": "5",
      "amount": "75000000",
      "duration": 2592000,
      "validUntil": "2026-09-01T00:00:00.000Z",
      "paymentToken": "0x0330...",
      "transferable": false,
      "royaltyBps": 500,
      "open": true,
      "accepted": null
    }
  ],
  "meta": { "page": 1, "limit": 24, "total": 1 }
}`}
      />

      <Endpoint
        method="GET"
        path="/v1/sponsorship/proposals/:proposalId"
        description="Fetch a single proposal by id."
        params={[{ name: "proposalId", type: "string", required: true, desc: "On-chain proposal id" }]}
        curl={`curl "${BASE}/v1/sponsorship/proposals/8" \\
  -H "x-api-key: ${KEY}"`}
        response={`{ "data": { "proposalId": "8", "proposer": "0x06a3...", "open": true, "..." : "..." } }`}
      />

      <Endpoint
        method="GET"
        path="/v1/sponsorship/licenses"
        description="List issued sponsorship licenses (the minted ERC-721s). holder filters by current owner; author filters by the original asset owner who issued it."
        params={[
          { name: "holder", type: "string", desc: "Current holder wallet address" },
          { name: "author", type: "string", desc: "Original issuing author" },
          { name: "assetContract", type: "string", desc: "Filter by the sponsored asset's contract" },
          { name: "assetTokenId", type: "string", desc: "Filter by the sponsored asset's token id" },
          { name: "chain", type: "string", desc: "Chain filter (default STARKNET)" },
          { name: "page", type: "number", desc: "Page number" },
          { name: "limit", type: "number", desc: "Items per page" },
        ]}
        curl={`curl "${BASE}/v1/sponsorship/licenses?holder=0x06a3..." \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "data": [
    {
      "tokenId": "3",
      "author": "0x0591...",
      "recipient": "0x06a3...",
      "assetContract": "0x05ebd2...",
      "assetTokenId": "5",
      "expiresAt": "2026-11-01T00:00:00.000Z",
      "transferable": true,
      "royaltyBps": 250,
      "offerId": "12",
      "proposalId": null
    }
  ],
  "meta": { "page": 1, "limit": 24, "total": 1 }
}`}
      />

      <Endpoint
        method="GET"
        path="/v1/sponsorship/licenses/:tokenId"
        description="Fetch a single license by its token id, including currentHolder resolved from live token-balance ownership (a license is a standard transferable ERC-721, so currentHolder can differ from recipient after a transfer)."
        params={[{ name: "tokenId", type: "string", required: true, desc: "License token id" }]}
        curl={`curl "${BASE}/v1/sponsorship/licenses/3" \\
  -H "x-api-key: ${KEY}"`}
        response={`{ "data": { "tokenId": "3", "recipient": "0x06a3...", "currentHolder": "0x06a3...", "..." : "..." } }`}
      />

      <p className="text-muted-foreground text-base mb-3 mt-6">
        Writes, owner-side (offers):
      </p>

      <Endpoint
        method="POST"
        path="/v1/intents/sponsorship-offer"
        description="Create a sponsorship offer on an asset you own. Open bidding by default; pass specificSponsor to restrict acceptance to one invited address."
        params={[
          { name: "author", type: "string", required: true, desc: "Must currently own (nftContract, tokenId) on-chain" },
          { name: "nftContract", type: "string", required: true, desc: "Asset contract" },
          { name: "tokenId", type: "string", required: true, desc: "Asset token id" },
          { name: "minAmount", type: "string", required: true, desc: "Minimum accepted bid, raw token units" },
          { name: "duration", type: "number", required: true, desc: "License length in seconds, from acceptance" },
          { name: "paymentToken", type: "string", required: true, desc: "ERC-20 address" },
          { name: "licenseTermsUri", type: "string", required: true, desc: "IPFS URI for the license terms" },
          { name: "transferable", type: "boolean", required: true, desc: "Whether the issued license can be transferred" },
          { name: "royaltyBps", type: "number", desc: "EIP-2981 resale royalty, 0–10000 (default 0)" },
          { name: "specificSponsor", type: "string", desc: "Restrict acceptance to one sponsor address" },
        ]}
        curl={`curl -X POST "${BASE}/v1/intents/sponsorship-offer" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{ "author": "0x0591...", "nftContract": "0x05ebd2...", "tokenId": "5", "minAmount": "50000000", "duration": 7776000, "paymentToken": "0x0330...", "licenseTermsUri": "ipfs://...", "transferable": true, "royaltyBps": 250 }'`}
        response={`{ "id": "clm_spo123", "requiresSignature": false, "calls": [...] }`}
      />

      <Endpoint
        method="POST"
        path="/v1/intents/sponsorship-offer-open"
        description="Toggle an offer open/closed. Gates new bids and acceptance only, fully reversible."
        params={[
          { name: "author", type: "string", required: true, desc: "Must be the offer's author" },
          { name: "offerId", type: "string", required: true, desc: "On-chain offer id" },
          { name: "open", type: "boolean", required: true, desc: "New open state" },
        ]}
        curl={`curl -X POST "${BASE}/v1/intents/sponsorship-offer-open" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{ "author": "0x0591...", "offerId": "12", "open": false }'`}
        response={`{ "id": "clm_soo123", "requiresSignature": false, "calls": [...] }`}
      />

      <Endpoint
        method="POST"
        path="/v1/intents/sponsorship-bid-accept"
        description="Accept a standing bid. Author-only, re-verified on-chain. Settles the sponsor's payment (an allowance pulled from their place_bid approval, no escrow) and mints the license, atomically."
        params={[
          { name: "author", type: "string", required: true, desc: "Must be the offer's author" },
          { name: "offerId", type: "string", required: true, desc: "On-chain offer id" },
          { name: "sponsor", type: "string", required: true, desc: "The bidder whose bid is being accepted" },
        ]}
        curl={`curl -X POST "${BASE}/v1/intents/sponsorship-bid-accept" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{ "author": "0x0591...", "offerId": "12", "sponsor": "0x06a3..." }'`}
        response={`{ "id": "clm_sba123", "requiresSignature": false, "calls": [...] }`}
      />

      <p className="text-muted-foreground text-base mb-3 mt-6">
        Writes, sponsor-side (bids &amp; proposals):
      </p>

      <Endpoint
        method="POST"
        path="/v1/intents/sponsorship-bid"
        description="Place a bid on an open offer. A bid is a signal plus an open ERC-20 allowance; tokens move only once the author accepts. Returns two calls: approve, then place_bid."
        params={[
          { name: "sponsor", type: "string", required: true, desc: "The bidding wallet" },
          { name: "offerId", type: "string", required: true, desc: "On-chain offer id" },
          { name: "amount", type: "string", required: true, desc: "Bid amount, raw token units" },
          { name: "paymentToken", type: "string", required: true, desc: "The offer's payment token" },
        ]}
        curl={`curl -X POST "${BASE}/v1/intents/sponsorship-bid" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{ "sponsor": "0x06a3...", "offerId": "12", "amount": "60000000", "paymentToken": "0x0330..." }'`}
        response={`{ "id": "clm_sbi123", "requiresSignature": false, "calls": [...] }`}
      />

      <Endpoint
        method="POST"
        path="/v1/intents/sponsorship-bid-retract"
        description="Withdraw a standing bid before it's accepted."
        params={[
          { name: "sponsor", type: "string", required: true, desc: "Must be the bidding wallet" },
          { name: "offerId", type: "string", required: true, desc: "On-chain offer id" },
        ]}
        curl={`curl -X POST "${BASE}/v1/intents/sponsorship-bid-retract" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{ "sponsor": "0x06a3...", "offerId": "12" }'`}
        response={`{ "id": "clm_sbr123", "requiresSignature": false, "calls": [...] }`}
      />

      <Endpoint
        method="POST"
        path="/v1/intents/sponsorship-proposal"
        description="Propose fixed sponsorship terms on any asset, with no open offer required. Unlike a bid, the amount is take-it-or-leave-it, and the sponsor chooses the payment token."
        params={[
          { name: "proposer", type: "string", required: true, desc: "The proposing wallet; pays if accepted" },
          { name: "nftContract", type: "string", required: true, desc: "Asset contract" },
          { name: "tokenId", type: "string", required: true, desc: "Asset token id" },
          { name: "amount", type: "string", required: true, desc: "Fixed offered amount, raw token units" },
          { name: "duration", type: "number", required: true, desc: "License length in seconds, from acceptance" },
          { name: "validUntil", type: "number", desc: "Unix seconds acceptance deadline; omit for no deadline" },
          { name: "paymentToken", type: "string", required: true, desc: "ERC-20 address" },
          { name: "licenseTermsUri", type: "string", required: true, desc: "IPFS URI for the license terms" },
          { name: "transferable", type: "boolean", required: true, desc: "Whether the issued license can be transferred" },
          { name: "royaltyBps", type: "number", desc: "EIP-2981 resale royalty, 0–10000 (default 0)" },
        ]}
        curl={`curl -X POST "${BASE}/v1/intents/sponsorship-proposal" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{ "proposer": "0x06a3...", "nftContract": "0x05ebd2...", "tokenId": "5", "amount": "75000000", "duration": 2592000, "paymentToken": "0x0330...", "licenseTermsUri": "ipfs://...", "transferable": false, "royaltyBps": 500 }'`}
        response={`{ "id": "clm_spr123", "requiresSignature": false, "calls": [...] }`}
      />

      <Endpoint
        method="POST"
        path="/v1/intents/sponsorship-proposal-withdraw"
        description="Withdraw a sent proposal before it's accepted or rejected."
        params={[
          { name: "proposer", type: "string", required: true, desc: "Must be the proposing wallet" },
          { name: "proposalId", type: "string", required: true, desc: "On-chain proposal id" },
        ]}
        curl={`curl -X POST "${BASE}/v1/intents/sponsorship-proposal-withdraw" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{ "proposer": "0x06a3...", "proposalId": "8" }'`}
        response={`{ "id": "clm_spw123", "requiresSignature": false, "calls": [...] }`}
      />

      <p className="text-muted-foreground text-base mb-3 mt-6">
        Writes, owner-side (proposal response):
      </p>

      <Endpoint
        method="POST"
        path="/v1/intents/sponsorship-proposal-accept"
        description="Accept a proposal. Asset-owner-only, re-verified on-chain. A proposal binds to the asset rather than a person, so whoever owns it at acceptance is paid and issues the license. Settles payment and mints the license atomically, same as accepting a bid."
        params={[
          { name: "owner", type: "string", required: true, desc: "Must currently own the sponsored asset" },
          { name: "proposalId", type: "string", required: true, desc: "On-chain proposal id" },
        ]}
        curl={`curl -X POST "${BASE}/v1/intents/sponsorship-proposal-accept" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{ "owner": "0x0591...", "proposalId": "8" }'`}
        response={`{ "id": "clm_spa123", "requiresSignature": false, "calls": [...] }`}
      />

      <Endpoint
        method="POST"
        path="/v1/intents/sponsorship-proposal-reject"
        description="Reject a proposal. Asset-owner-only."
        params={[
          { name: "owner", type: "string", required: true, desc: "Must currently own the sponsored asset" },
          { name: "proposalId", type: "string", required: true, desc: "On-chain proposal id" },
        ]}
        curl={`curl -X POST "${BASE}/v1/intents/sponsorship-proposal-reject" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{ "owner": "0x0591...", "proposalId": "8" }'`}
        response={`{ "id": "clm_spj123", "requiresSignature": false, "calls": [...] }`}
      />

      <DocH2 id="rewards" border>Rewards</DocH2>
      <p className="text-base text-muted-foreground mb-6">
        The 50-level DAO-managed XP and badge system. Scores are computed off-chain from on-chain activity (mints, sales, comments, remixes). All weights live in DAO-adjustable tables. Reads need only an API key; scores are computed by the platform on a schedule. Scores and badges are recalculated weekly, not live per request.
      </p>

      <Endpoint
        method="GET"
        path="/v1/rewards/:address"
        description="Score, level, progress, badges, and XP breakdown for one address. Returns a zeroed Starter state for addresses not yet in the system."
        params={[
          { name: "address", type: "string", required: true, desc: "Wallet address" },
        ]}
        curl={`curl "${BASE}/v1/rewards/0x0591..." \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "data": {
    "address": "0x0591...",
    "accountId": "acc_...",
    "publicId": "ml_...",
    "totalXp": 1240,
    "currentLevel": 7,
    "currentLevelName": "Builder",
    "badgeColor": "#7c3aed",
    "nextLevel": { "level": 8, "name": "Architect", "xpRequired": 1500 },
    "progressPct": 62,
    "breakdown": { "mint": 400, "sale": 600, "comment": 240 },
    "badges": [
      { "key": "first_mint", "name": "First Mint", "description": "...", "icon": "Sparkles", "color": "#f59e0b", "category": "milestone" }
    ],
    "computedAt": "2026-05-27T12:00:00Z"
  }
}`}
      />

      <Endpoint
        method="GET"
        path="/v1/rewards"
        description="Paginated leaderboard ordered by total XP descending."
        params={[
          { name: "page", type: "number", required: false, desc: "Page number (default 1)" },
          { name: "limit", type: "number", required: false, desc: "Page size, max 100 (default 50)" },
        ]}
        curl={`curl "${BASE}/v1/rewards?page=1&limit=50" \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "data": [
    {
      "rank": 1,
      "address": "0x0591...",
      "accountId": "acc_...",
      "publicId": "ml_...",
      "totalXp": 9820,
      "currentLevel": 23,
      "currentLevelName": "Luminary",
      "badgeColor": "#ec4899"
    }
  ],
  "meta": { "page": 1, "limit": 50, "total": 508 }
}`}
      />

      <Endpoint
        method="GET"
        path="/v1/rewards/:address/events"
        description="Point-event history for one address: each scored action with its base XP, multiplier, and final XP."
        params={[
          { name: "address", type: "string", required: true, desc: "Wallet address" },
          { name: "page", type: "number", required: false, desc: "Page number (default 1)" },
          { name: "limit", type: "number", required: false, desc: "Page size, max 100 (default 20)" },
        ]}
        curl={`curl "${BASE}/v1/rewards/0x0591.../events" \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "data": [
    {
      "id": "pe_...",
      "actionType": "sale",
      "xp": 100,
      "multiplier": 1.5,
      "finalXp": 150,
      "txHash": "0x04f7a1...",
      "createdAt": "2026-05-26T09:00:00Z"
    }
  ],
  "meta": { "page": 1, "limit": 20, "total": 42 }
}`}
      />

      <Endpoint
        method="GET"
        path="/v1/rewards/config"
        description="Reward levels, actions and badges."
        curl={`curl "${BASE}/v1/rewards/config" \\
  -H "x-api-key: ${KEY}"`}
        response={`{ "data": { "levels": [], "actions": [], "badges": [] } }`}
      />

      <Endpoint
        method="GET"
        path="/v1/rewards/batch"
        description="Rewards for up to 50 addresses at once."
        params={[
          { name: "addresses", type: "string", required: true, desc: "Comma-separated, 1 to 50" },
        ]}
        curl={`curl "${BASE}/v1/rewards/batch?addresses=0x0591...,0x0abc..." \\
  -H "x-api-key: ${KEY}"`}
        response={`{ "data": [{ "address": "0x0591...", "totalXp": 120, "currentLevel": 2, "currentLevelName": "...", "badgeColor": "#64748b" }] }`}
      />

      <DocH2 id="sign-in" border>Sign-in</DocH2>
      <p className="text-base text-muted-foreground mb-6">
        Users sign in through the app they use, and every call carries that app&apos;s API key. Wallet sign-in (SIWS) proves control of a wallet and returns a token used as <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">Authorization: Bearer</code>. Email sign-in sends a 6-digit code and returns an account session.
      </p>
      <Endpoint
        method="POST"
        path="/v1/auth/siws/nonce"
        description="Start a wallet sign-in: returns a nonce and the typed data the wallet signs."
        params={[
          { name: "walletAddress", type: "string", required: true, desc: "The signing wallet" },
        ]}
        curl={`curl -X POST "${BASE}/v1/auth/siws/nonce" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{ "walletAddress": "0x0591..." }'`}
        response={`{ "nonce": "...", "typedData": { "...": "..." } }`}
      />

      <Endpoint
        method="POST"
        path="/v1/auth/siws/verify"
        description="Finish a wallet sign-in. The signature is checked on-chain by the wallet contract. With appSource, the app also registers the account at sign-in and gets an account session back."
        params={[
          { name: "walletAddress", type: "string", required: true, desc: "The signing wallet" },
          { name: "nonce", type: "string", required: true, desc: "From /nonce" },
          { name: "signature", type: "string[]", required: true, desc: "The wallet's signature over the typed data" },
          { name: "appSource", type: "string", required: false, desc: "The app declaring the registration, e.g. MEDIALANE_IO, MEDIALANE_PORTAL, MEDIALANE_STARKNET" },
        ]}
        curl={`curl -X POST "${BASE}/v1/auth/siws/verify" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{ "walletAddress": "0x0591...", "nonce": "...", "signature": ["0x..", "0x.."], "appSource": "MEDIALANE_STARKNET" }'`}
        response={`{
  "token": "siws_...",
  "accountId": "...",
  "accountToken": "..."
}`}
      />

      <Endpoint
        method="POST"
        path="/v1/auth/email/request-code"
        description="Send a 6-digit code to an email address, from the name of the app that asked."
        params={[
          { name: "email", type: "string", required: true, desc: "The address to verify" },
        ]}
        curl={`curl -X POST "${BASE}/v1/auth/email/request-code" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{ "email": "ana@example.com" }'`}
        response={`{ "ok": true }`}
      />

      <Endpoint
        method="POST"
        path="/v1/auth/email/verify-code"
        description="Verify the code. Marks the email verified, creates the account if this app has none for it, and returns an account session."
        params={[
          { name: "email", type: "string", required: true, desc: "The address" },
          { name: "code", type: "string", required: true, desc: "The 6-digit code" },
        ]}
        curl={`curl -X POST "${BASE}/v1/auth/email/verify-code" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{ "email": "ana@example.com", "code": "482913" }'`}
        response={`{ "accountToken": "..." }`}
      />

      <Endpoint
        method="GET"
        path="/v1/auth/email/exists"
        description="Whether this app has an account for the email."
        params={[
          { name: "email", type: "string", required: true, desc: "The address" },
        ]}
        curl={`curl "${BASE}/v1/auth/email/exists?email=ana@example.com" \\
  -H "x-api-key: ${KEY}"`}
        response={`{ "exists": true }`}
      />

      <Endpoint
        method="POST"
        path="/v1/auth/email/register-account"
        description="Create an account for an email in this app before it is verified. The account is PENDING until the email is verified with a code. Returns 409 if the account exists; sign in with a code instead."
        params={[
          { name: "email", type: "string", required: true, desc: "The address" },
        ]}
        curl={`curl -X POST "${BASE}/v1/auth/email/register-account" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{ "email": "ana@example.com" }'`}
        response={`{ "accountToken": "..." }`}
      />

      <DocH2 id="accounts" border>Accounts</DocH2>
      <p className="text-base text-muted-foreground mb-6">
        An account is its own record, defined by no wallet, email or app. Each registration through an app is its own account in that app: the same email or wallet registered in two apps is two accounts. An account holds its sign-in records (its wallets and email) and a status: <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">ACTIVE</code>, <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">PENDING</code> (an email account whose email is not yet verified) or <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">INACTIVE</code> (refused). Accounts have no type and no roles.
      </p>
      <Endpoint
        method="POST"
        path="/v1/users/register"
        description="Register a wallet in the calling app, authenticated by the API key alone. Idempotent: returns the existing account if this app already has the wallet."
        params={[
          { name: "walletAddress", type: "string", required: true, desc: "Starknet wallet address" },
          { name: "walletType", type: "string", required: false, desc: "Free-form wallet-software label, e.g. \"braavos\" | \"ready\" | \"mediawallet\" | \"cartridge\"" },
          { name: "chain", type: "string", required: false, desc: "Defaults to STARKNET" },
        ]}
        curl={`curl -X POST "${BASE}/v1/users/register" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{"walletAddress":"0x0591...","walletType":"braavos"}'`}
        response={`{
  "accountId": "...",
  "publicId": "acc_...",
  "walletAddress": "0x0591...",
  "chain": "STARKNET",
  "provider": "braavos",
  "createdAt": "2026-10-01T12:00:00Z"
}`}
      />

      <Endpoint
        method="POST"
        path="/v1/users/me"
        description="Register the signed-in wallet in the calling app (the wallet comes from the token, never the body). Pass an accountToken to add the wallet to an existing account, such as one created by email sign-in. Pass email to attach an email and send it a code. Returns 409 wallet_already_attached when the account in the session already has a wallet; use generate-wallet to replace it."
        params={[
          { name: "walletType", type: "string", required: false, desc: "Defaults to UNKNOWN" },
          { name: "chain", type: "string", required: false, desc: "STARKNET only in v1" },
          { name: "accountToken", type: "string", required: false, desc: "Account session from email sign-in" },
          { name: "email", type: "string", required: false, desc: "An email to attach and verify" },
        ]}
        curl={`curl -X POST "${BASE}/v1/users/me" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer <SIWS_TOKEN>" \\
  -H "Content-Type: application/json" \\
  -d '{"walletType":"mediawallet","chain":"STARKNET"}'`}
        response={`{ "walletAddress": "0x0591..." }`}
      />

      <Endpoint
        method="GET"
        path="/v1/users/me"
        description="The signed-in wallet's account in the calling app, with its email and whether it is verified; 404 if the app has no account for the wallet."
        curl={`curl "${BASE}/v1/users/me" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer <SIWS_TOKEN>"`}
        response={`{
  "walletAddress": "0x0591...",
  "accountId": "...",
  "publicId": "acc_...",
  "email": "ana@example.com",
  "emailVerified": true
}`}
      />

      <Endpoint
        method="POST"
        path="/v1/users/me/email"
        description="Change the account's email; a code is sent to the new address. 409 if another account in this app already uses it."
        params={[
          { name: "email", type: "string", required: true, desc: "The new address" },
        ]}
        curl={`curl -X POST "${BASE}/v1/users/me/email" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer <SIWS_TOKEN>" \\
  -H "Content-Type: application/json" \\
  -d '{"email":"ana@example.com"}'`}
        response={`{ "email": "ana@example.com", "emailVerified": false }`}
      />

      <Endpoint
        method="POST"
        path="/v1/users/me/wallet"
        description="The wallet of the account behind an account session, or null if it has none yet. When needsKeySetup is true, set up the user's key with /v1/users/me/wallet/key."
        params={[
          { name: "accountToken", type: "string", required: true, desc: "Account session from email sign-in" },
        ]}
        curl={`curl -X POST "${BASE}/v1/users/me/wallet" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{"accountToken":"..."}'`}
        response={`{ "walletAddress": "0x0591...", "needsKeySetup": false }`}
      />

      <Endpoint
        method="POST"
        path="/v1/users/me/generate-wallet"
        description="Replace the account's wallet with a new one the user has just created and signed in with. Assets stay in the old wallet."
        params={[
          { name: "newWalletSiwsToken", type: "string", required: true, desc: "Sign-in token of the new wallet" },
        ]}
        curl={`curl -X POST "${BASE}/v1/users/me/generate-wallet" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer <SIWS_TOKEN>" \\
  -H "Content-Type: application/json" \\
  -d '{"newWalletSiwsToken":"siws_..."}'`}
        response={`{ "walletAddress": "0x0def..." }`}
      />

      <Endpoint
        method="POST"
        path="/v1/users/me/wallet/key"
        description="Make the user's key the only owner of the account's wallet. Returns 409 when the wallet is already set up."
        params={[
          { name: "accountToken", type: "string", required: true, desc: "Account session from email sign-in" },
          { name: "newOwnerPubkey", type: "string", required: true, desc: "The user's own owner key" },
          { name: "signature", type: "string[]", required: true, desc: "The new key's owner-alive signature for the wallet" },
          { name: "expiration", type: "number", required: true, desc: "Expiry of the owner-alive signature (unix seconds)" },
        ]}
        curl={`curl -X POST "${BASE}/v1/users/me/wallet/key" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{"accountToken":"...","newOwnerPubkey":"0x...","signature":["0x..","0x.."],"expiration":1790000000}'`}
        response={`{ "walletAddress": "0x0abc..." }`}
      />

      <Endpoint
        method="GET"
        path="/v1/users/count"
        description="Number of accounts, with optional filters. An account with any matching sign-in record is counted once."
        params={[
          { name: "chain", type: "string", required: false, desc: "Filter by wallet chain" },
          { name: "appId", type: "string", required: false, desc: "Filter by the app the account registered through, e.g. MEDIALANE_IO" },
          { name: "walletType", type: "string", required: false, desc: "Filter by wallet type" },
          { name: "since", type: "string", required: false, desc: "ISO date; accounts created on or after" },
        ]}
        curl={`curl "${BASE}/v1/users/count?since=2026-10-01" \\
  -H "x-api-key: ${KEY}"`}
        response={`{ "count": 166, "filters": { "since": "2026-10-01" } }`}
      />

      <Endpoint
        method="GET"
        path="/v1/wallet-activity"
        description="A wallet's recent activity: SEND, RECEIVE, SWAP, DEPLOY and guardian changes."
        params={[
          { name: "address", type: "string", required: true, desc: "The wallet" },
          { name: "chain", type: "string", required: false, desc: "Defaults to STARKNET" },
        ]}
        curl={`curl "${BASE}/v1/wallet-activity?address=0x0591..." \\
  -H "x-api-key: ${KEY}"`}
        response={`{ "data": [{ "type": "RECEIVE", "tokenAddress": "0x...", "amount": "5000000", "counterparty": "0x...", "txHash": "0x...", "blockNumber": "123456", "timestamp": "..." }] }`}
      />

      <DocH2 id="business" border>Business</DocH2>
      <p className="text-base text-muted-foreground mb-6">
        A business can give people wallets and assets before they have signed up. A person who already has a wallet keeps getting assets in it.
      </p>
      <Endpoint
        method="POST"
        path="/v1/business/provisioning"
        description="Give a recipient a wallet: reuses the one they already have (200, reusedExistingWallet), or deploys a new one (201)."
        params={[
          { name: "email", type: "string", required: true, desc: "The recipient's email address" },
          { name: "chain", type: "string", required: false, desc: "STARKNET" },
        ]}
        curl={`curl -X POST "${BASE}/v1/business/provisioning" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{"email":"ana@example.com"}'`}
        response={`{ "data": { "chain": "STARKNET", "walletAddress": "0x0abc..." } }`}
      />

      <Endpoint
        method="POST"
        path="/v1/business/issuance/emission"
        description="Build the mint calls that issue an asset to up to 500 provisioned recipients, in batches to execute from your wallet."
        params={[
          { name: "service", type: "string", required: true, desc: "A minting service id" },
          { name: "owner", type: "string", required: true, desc: "Your wallet, the collection owner" },
          { name: "recipients", type: "string[]", required: true, desc: "Up to 500 recipient emails" },
          { name: "collectionId", type: "string", required: false, desc: "Collection to mint into" },
          { name: "tokenUri", type: "string", required: false, desc: "Token metadata" },
          { name: "batchSize", type: "number", required: false, desc: "Calls per batch, 1 to 100" },
        ]}
        curl={`curl -X POST "${BASE}/v1/business/issuance/emission" \\
  -H "x-api-key: ${KEY}" \\
  -H "Content-Type: application/json" \\
  -d '{"service":"mip-erc721","owner":"0x0591...","recipients":["ana@example.com"],"tokenUri":"ipfs://..."}'`}
        response={`{ "data": { "service": "mip-erc721", "recipientCount": 1, "callCount": 1, "batches": [[{ "contractAddress": "0x...", "entrypoint": "mint", "calldata": [] }]] } }`}
      />

      <DocH2 id="gated-content" border>Gated Content &amp; Slugs</DocH2>
      <p className="text-base text-muted-foreground mb-6">
        Holder-only collection content and vanity-slug resolution.
      </p>

      <Endpoint
        method="GET"
        path="/v1/collections/:contract/gated-content"
        description="Return a collection's holder-only content (title, url, type) to verified holders. Requires a SIWS token; the caller's balance is read live from the contract (balance_of for ERC-721, balance_of_batch for ERC-1155), never from the indexer cache, so access reflects current on-chain ownership. Non-holders get 403; the gatedContentUrl is never exposed via the public profile endpoint."
        params={[
          { name: "contract", type: "string", required: true, desc: "Collection contract address" },
        ]}
        curl={`curl "${BASE}/v1/collections/0x076c.../gated-content" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer <SIWS_TOKEN>"`}
        response={`{
  "title": "Behind the scenes",
  "url": "https://...",
  "type": "VIDEO"
}`}
      />

      <Endpoint
        method="GET"
        path="/v1/collections/by-slug/:slug"
        description="Resolve an approved vanity slug to a full collection (with profile). Public. Returns 404 if the slug is not claimed/approved."
        params={[
          { name: "slug", type: "string", required: true, desc: "Vanity slug (case-insensitive)" },
        ]}
        curl={`curl "${BASE}/v1/collections/by-slug/genesis" \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "data": {
    "contractAddress": "0x076c...",
    "name": "Genesis",
    "slug": "genesis",
    "profile": { "displayName": "Genesis", "slug": "genesis" }
  }
}`}
      />

      <DocH2 id="stats" border>Stats</DocH2>
      <p className="text-base text-muted-foreground mb-6">
        Platform-wide aggregate counts. Publicly cacheable.
      </p>

      <Endpoint
        method="GET"
        path="/v1/stats"
        description="Platform totals: indexed collections, indexed tokens, and completed sales (order fills)."
        params={[]}
        curl={`curl "${BASE}/v1/stats" \\
  -H "x-api-key: ${KEY}"`}
        response={`{
  "data": {
    "collections": 108,
    "tokens": 1977,
    "sales": 342
  }
}`}
      />

      <DocH2 id="reports" border>Reports</DocH2>
      <p className="text-base text-muted-foreground mb-6">
        Community moderation. Any authenticated wallet can report a collection, token, creator, or comment. After 3 unique reports a target is auto-hidden. Rate-limited to 5 reports per wallet per hour.
      </p>

      <Endpoint
        method="POST"
        path="/v1/reports"
        description="Submit a report. Requires a SIWS token (identity auth) in addition to the API key. 409 if the caller already reported this target; 429 if the per-wallet hourly limit is hit."
        params={[
          { name: "targetType", type: "string", required: true, desc: "COLLECTION | TOKEN | CREATOR | COMMENT" },
          { name: "targetKey", type: "string", required: true, desc: "Stable target key (e.g. COMMENT::<id>)" },
          { name: "categories", type: "string[]", required: true, desc: "COPYRIGHT_PIRACY | VIOLENCE_GRAPHIC | HATE_SPEECH | SCAM_FRAUD | SPAM | NSFW | OTHER" },
          { name: "targetContract", type: "string", required: false, desc: "For TOKEN/COLLECTION targets" },
          { name: "targetTokenId", type: "string", required: false, desc: "For TOKEN targets" },
          { name: "targetAddress", type: "string", required: false, desc: "For CREATOR targets" },
          { name: "description", type: "string", required: false, desc: "Free text, max 500 chars" },
        ]}
        curl={`curl -X POST "${BASE}/v1/reports" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer <SIWS_TOKEN>" \\
  -H "Content-Type: application/json" \\
  -d '{"targetType":"TOKEN","targetKey":"0x05e7...:42","targetContract":"0x05e7...","targetTokenId":"42","categories":["SCAM_FRAUD"]}'`}
        response={`{
  "data": {
    "id": "rep_...",
    "targetType": "TOKEN",
    "status": "PENDING",
    "createdAt": "2026-05-27T12:00:00Z"
  }
}`}
      />

      <DocH2 id="claims-naming" border>Username &amp; Slug Claims</DocH2>
      <p className="text-base text-muted-foreground mb-6">
        Vanity usernames (per wallet) and collection slugs (per contract). Availability checks are public; submissions require a SIWS token and are reviewed by an admin before the name goes live.
      </p>

      <Endpoint
        method="GET"
        path="/v1/username-claims/check/:username"
        description="Public availability check for a username. Validates format and checks for taken profiles or pending/approved claims."
        params={[
          { name: "username", type: "string", required: true, desc: "Candidate username" },
        ]}
        curl={`curl "${BASE}/v1/username-claims/check/satoshi" \\
  -H "x-api-key: ${KEY}"`}
        response={`{ "available": false, "reason": "Already taken" }`}
      />

      <Endpoint
        method="POST"
        path="/v1/username-claims"
        description="Submit a username claim. Requires a SIWS token. One pending claim per wallet at a time."
        params={[
          { name: "username", type: "string", required: true, desc: "Requested username" },
          { name: "notifyEmail", type: "string", required: false, desc: "Email to notify on review" },
        ]}
        curl={`curl -X POST "${BASE}/v1/username-claims" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer <SIWS_TOKEN>" \\
  -H "Content-Type: application/json" \\
  -d '{"username":"satoshi"}'`}
        response={`{
  "claim": {
    "id": "ucl_...",
    "username": "satoshi",
    "status": "PENDING",
    "createdAt": "2026-05-27T12:00:00Z"
  }
}`}
      />

      <Endpoint
        method="GET"
        path="/v1/username-claims/me"
        description="Return all username claims submitted by the authenticated wallet. Requires a SIWS token."
        params={[]}
        curl={`curl "${BASE}/v1/username-claims/me" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer <SIWS_TOKEN>"`}
        response={`{
  "username": "satoshi",
  "claim": { "id": "ucl_...", "username": "satoshi", "status": "APPROVED" }
}`}
      />

      <Endpoint
        method="GET"
        path="/v1/collection-slug-claims/check/:slug"
        description="Public availability check for a collection slug. Same format + reserved-word rules as usernames."
        params={[
          { name: "slug", type: "string", required: true, desc: "Candidate slug" },
        ]}
        curl={`curl "${BASE}/v1/collection-slug-claims/check/genesis" \\
  -H "x-api-key: ${KEY}"`}
        response={`{ "available": true }`}
      />

      <Endpoint
        method="POST"
        path="/v1/collection-slug-claims"
        description="Submit a collection slug claim. Requires a SIWS token; the caller must be the collection owner (owner or claimedBy). One pending claim per collection at a time."
        params={[
          { name: "contractAddress", type: "string", required: true, desc: "Collection contract address" },
          { name: "slug", type: "string", required: true, desc: "Requested slug" },
          { name: "notifyEmail", type: "string", required: false, desc: "Email to notify on review" },
        ]}
        curl={`curl -X POST "${BASE}/v1/collection-slug-claims" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer <SIWS_TOKEN>" \\
  -H "Content-Type: application/json" \\
  -d '{"contractAddress":"0x076c...","slug":"genesis"}'`}
        response={`{
  "claim": {
    "id": "scl_...",
    "slug": "genesis",
    "contractAddress": "0x076c...",
    "status": "PENDING"
  }
}`}
      />

      <Endpoint
        method="GET"
        path="/v1/collection-slug-claims/me"
        description="Return all collection slug claims submitted by the authenticated wallet. Requires a SIWS token."
        params={[]}
        curl={`curl "${BASE}/v1/collection-slug-claims/me" \\
  -H "x-api-key: ${KEY}" \\
  -H "Authorization: Bearer <SIWS_TOKEN>"`}
        response={`{
  "claims": [
    { "id": "scl_...", "slug": "genesis", "status": "APPROVED" }
  ]
}`}
      />

      <DocH2 id="technical" border>Technical Details</DocH2>

      <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">SNIP-12 Domain</h3>
      <p className="text-base text-muted-foreground mb-4">
        Medialane uses SNIP-12 for off-chain message signing. If you are building your own signer, use the following domain:
      </p>
      <DocCodeBlock>{`{
  "name": "Medialane",
  "version": "1",
  "revision": "1"
}`}</DocCodeBlock>

      <h3 className="text-lg font-semibold text-foreground mt-6 mb-2">Address Normalization</h3>
      <p className="text-base text-muted-foreground mb-4">
        The API normalizes all addresses server-side to 64-character lowercase hex strings (prefixed with <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">0x</code>). You can pass any valid Starknet address format (short, long, or mixed-case) and the API will handle normalization automatically. The <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">@medialane/sdk</code> also normalizes addresses before every API call.
      </p>
    </div>
  )
}
