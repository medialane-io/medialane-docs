import type { Metadata } from "next";
import { Bot, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Agents | Medialane Docs",
  description: "Build autonomous agents on Medialane — HTTP 402 billing, SIWS wallet auth, MDLN multiplier, webhook listeners, and permissionless API access.",
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

const AGENT_CAPABILITIES = [
  { title: "Read market state", desc: "Query collections, tokens, orders, activities, and wallet portfolios without authentication. Public read endpoints are completely open." },
  { title: "Monitor events via webhooks", desc: "Register a webhook to receive push notifications for mints, sales, and transfers in real time — no polling required." },
  { title: "Submit marketplace orders", desc: "Create listings and offers by generating SNIP-12 typed data and signing with a Starknet account controlled by the agent." },
  { title: "Pay autonomously (HTTP 402)", desc: "Pre-fund a USDC credit balance in the portal. When quota is exhausted, the API returns 402 — the agent deposits credits and retries." },
  { title: "Multiply quota with MDLN", desc: "An agent wallet holding MDLN tokens and registered in the portal receives a rate-limit multiplier (up to 2× for 5,000 MDLN)." },
];

export default function AgentsPage() {
  return (
    <div className="space-y-10 max-w-3xl">

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">AI Agents</span>
        </div>
        <h2 className="text-2xl font-bold">Building AI Agents on Medialane</h2>
        <p className="text-muted-foreground leading-relaxed">
          Medialane&apos;s permissionless, immutable design makes it a natural fit for autonomous
          software agents. Agents can read market data, react to on-chain events, submit
          marketplace orders, and pay for API access without any human in the loop.
        </p>
      </div>

      <Section title="What Agents Can Do">
        <div className="space-y-2">
          {AGENT_CAPABILITIES.map(({ title, desc }) => (
            <div key={title} className="bento-cell p-4 space-y-1">
              <p className="text-sm font-semibold text-foreground">{title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Authentication — SIWS (Sign In With Starknet)">
        <p>
          Agents that need to perform write operations (submit orders, post comments,
          manage API keys) must authenticate using{" "}
          <strong className="text-foreground">Sign In With Starknet (SIWS)</strong>.
          SIWS is a Starknet-native equivalent of EIP-4361: the agent signs a structured
          message with its Starknet private key to prove wallet ownership.
        </p>
        <Code>{`// 1. Fetch a nonce from the portal
const { nonce } = await fetch("https://api.medialane.io/v1/portal/auth/nonce").then(r => r.json());

// 2. Build the SIWS message
const message = {
  domain:    "portal.medialane.io",
  address:   agentWalletAddress,         // Starknet wallet address
  statement: "Sign in to Medialane Portal",
  nonce,
  issuedAt:  new Date().toISOString(),
};

// 3. Sign with the agent's Starknet account
const signature = await starknetAccount.signMessage(message);

// 4. Exchange for a session token
const { token } = await fetch("https://api.medialane.io/v1/portal/auth/verify", {
  method: "POST",
  body: JSON.stringify({ message, signature }),
}).then(r => r.json());

// 5. Use the session token to manage keys and credits
const keys = await fetch("https://api.medialane.io/v1/portal/keys", {
  headers: { Authorization: \`Bearer \${token}\` },
}).then(r => r.json());`}</Code>
        <p>
          For pure read-only agents, SIWS is not required — use a static API key
          generated once in the portal.
        </p>
      </Section>

      <Section title="Autonomous Billing — HTTP 402">
        <p>
          When a key&apos;s monthly quota is exhausted, the API returns{" "}
          <code className="font-mono bg-muted px-1.5 py-0.5 rounded text-xs">402 Payment Required</code>.
          Agents can intercept this status, deposit USDC credits via the portal API,
          and retry — without any human intervention.
        </p>
        <Code>{`// Robust agent request wrapper
async function apiRequest(url: string, apiKey: string): Promise<Response> {
  let res = await fetch(url, { headers: { "x-api-key": apiKey } });

  if (res.status === 402) {
    const { creditRequired } = await res.json();

    // Deposit USDC credits autonomously (agent must hold USDC on Starknet)
    await depositCredits(apiKey, creditRequired * 2);  // deposit 2× buffer

    // Retry once after deposit
    res = await fetch(url, { headers: { "x-api-key": apiKey } });
  }

  return res;
}

// Credit deposit via portal API (requires SIWS session token)
async function depositCredits(apiKey: string, usdcAmount: number) {
  await fetch("https://api.medialane.io/v1/portal/credits/deposit", {
    method: "POST",
    headers: {
      Authorization: \`Bearer \${sessionToken}\`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ apiKey, usdcAmount }),
  });
}`}</Code>
        <p>
          The credit balance is separate from the monthly request quota. Credits never expire.
          Deposited USDC is held in the portal contract until consumed by API calls.
        </p>
      </Section>

      <Section title="Rate Limit Headers">
        <p>Agents should check these headers on every response to avoid unexpected 402s:</p>
        <Code>{`X-RateLimit-Limit: 50        // total requests this period
X-RateLimit-Remaining: 3     // requests left — act before this hits 0
X-RateLimit-Reset: 1714521600 // Unix timestamp when quota resets
X-RateLimit-Multiplier: 1.5  // current MDLN multiplier active on key
X-Credits-Balance: 0.24       // remaining USDC credit balance (if using credits)`}</Code>
      </Section>

      <Section title="MDLN Multiplier for Agent Wallets">
        <p>
          An agent that controls a Starknet wallet holding MDLN tokens can register that
          wallet in the portal to receive a quota multiplier. This is the same multiplier
          available to human developers — agents are first-class citizens.
        </p>
        <Code>{`// Check current multiplier
const usage = await fetch("https://api.medialane.io/v1/portal/usage", {
  headers: { "x-api-key": apiKey },
}).then(r => r.json());

console.log(usage.multiplier);   // 1, 1.2, 1.5, or 2
console.log(usage.mdlnBalance);  // MDLN held by registered wallet
console.log(usage.remaining);    // requests left this month`}</Code>
        <div className="space-y-2">
          {[
            { mdln: "0 MDLN",    mult: "1×",   note: "Free tier — no MDLN required" },
            { mdln: "500 MDLN",  mult: "1.2×", note: "20% more requests per month" },
            { mdln: "2,000 MDLN",mult: "1.5×", note: "50% more requests per month" },
            { mdln: "5,000 MDLN",mult: "2×",   note: "Double the base quota" },
          ].map(({ mdln, mult, note }) => (
            <div key={mdln} className="bento-cell px-4 py-2.5 flex items-center gap-4 flex-wrap text-sm">
              <span className="font-mono text-foreground/80 w-24 shrink-0">{mdln}</span>
              <span className="font-bold font-mono text-primary">{mult}</span>
              <span className="text-muted-foreground text-xs ml-auto">{note}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Listening for Events (Webhooks)">
        <p>
          Instead of polling, register a webhook to receive push notifications.
          This is the recommended pattern for reactive agents that respond to market activity.
        </p>
        <Code>{`// Register webhook via portal API
const webhook = await fetch("https://api.medialane.io/v1/portal/webhooks", {
  method: "POST",
  headers: {
    Authorization: \`Bearer \${sessionToken}\`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    url: "https://my-agent.example.com/hooks",
    events: ["order.created", "order.fulfilled", "token.minted"],
    secret: crypto.randomUUID(),
  }),
}).then(r => r.json());

// Webhook payload shape
{
  "type": "order.created",
  "timestamp": 1714521600,
  "data": {
    "orderHash": "0x...",
    "contract":  "0x...",
    "tokenId":   "1",
    "price":     "1000000",
    "currency":  "USDC",
    "offerer":   "0x...",
    "status":    "ACTIVE"
  }
}`}</Code>
      </Section>

      <Section title="Submitting Orders from an Agent">
        <p>
          An agent with a funded Starknet account can list and buy NFTs autonomously.
          Use the SDK to build intents, sign with the agent&apos;s account, and submit.
        </p>
        <Code>{`import { MedialaneClient } from "@medialane/sdk";
import { Account, RpcProvider } from "starknet";

const client   = new MedialaneClient({ backendUrl: "https://api.medialane.io", apiKey });
const provider = new RpcProvider({ nodeUrl: process.env.STARKNET_RPC_URL });
const account  = new Account(provider, agentAddress, agentPrivateKey);

// Create a listing intent
const intent = await client.marketplace.createListingIntent({
  contract: "0x<collection>",
  tokenId:  "1",
  price:    "1000000",          // 1 USDC (6 decimals)
  currency: "0x<usdc_address>",
  duration: 86400 * 3,          // 3 days
  standard: "ERC721",
});

// Sign with agent account (SNIP-12)
const signature = await account.signMessage(intent.typedData);

// Activate the order
const order = await client.marketplace.submitIntentSignature(intent.orderHash, signature);
console.log("Listed:", order.status);  // "ACTIVE"`}</Code>
      </Section>

      <Section title="Permissionless & Censorship-Resistant">
        <p>
          Medialane&apos;s contracts are fully immutable — no admin can block a specific
          wallet address, freeze an order, or prevent a trade. An agent that can call
          Starknet contracts can always interact with the marketplace, regardless of
          any off-chain policy decision.
        </p>
        <p>
          The REST API adds convenience (intent creation, metadata indexing) but is
          not a prerequisite. Agents comfortable with direct Starknet contract calls
          can operate entirely on-chain: call{" "}
          <code className="font-mono bg-muted px-1 py-0.5 rounded text-xs">fulfill_order</code> directly
          with the SNIP-12 signed order hash.
        </p>
      </Section>

      <div className="flex flex-wrap gap-4">
        <a href="https://portal.medialane.io" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          Open Portal <ExternalLink className="h-3.5 w-3.5" />
        </a>
        <Link href="/docs/api" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          API Reference <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <Link href="/docs/sdk" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          SDK Docs <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <Link href="/docs/protocol" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          Protocol Spec <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

    </div>
  );
}
