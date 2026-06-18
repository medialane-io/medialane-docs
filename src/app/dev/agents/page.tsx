import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { DocH2, DocH3, DocCodeBlock } from "@/components/docs/typography"

export const metadata: Metadata = {
  title: "AI Agents | Medialane Docs",
  description: "Build autonomous AI agents on Medialane — wallet identity, pay-per-use x402 micropayments in USDC on Starknet, and MDLN credit bonuses. No email, no OAuth, no human in the loop.",
  openGraph: {
    title: "AI Agents | Medialane Docs",
    description: "Build autonomous AI agents on Medialane — wallet identity, pay-per-use x402 micropayments in USDC on Starknet, and MDLN credit bonuses.",
    url: "https://docs.medialane.io/dev/agents",
  },
}

export default function AgentsPage() {
  return (
    <div className="space-y-2">
      <Badge className="bg-primary/10 text-primary border-primary/30 px-3 py-1 text-xs">
        Agents
      </Badge>

      <h1 className="text-4xl font-extrabold text-white leading-tight">
        Agent Quickstart
      </h1>

      <p className="text-muted-foreground text-lg mt-2 mb-8">
        The Medialane API is built to be consumed by autonomous AI agents. A wallet keypair is your identity, you pay per request in USDC on Starknet, and billing speaks the open <strong className="text-white">x402</strong> standard — machine-readable <code className="font-mono text-xs bg-white/10 px-1.5 py-0.5 rounded">402 Payment Required</code>, no human in the loop.
      </p>

      {/* Why agents */}
      <DocH2 id="why">Why agents work here</DocH2>
      <p className="text-muted-foreground mb-4 text-sm">
        Traditional API platforms require email, OAuth, or a credit card — all designed for humans. Medialane uses permissionless primitives instead:
      </p>
      <ul className="space-y-2 text-sm text-muted-foreground mb-6 list-disc list-inside">
        <li><strong className="text-white">Identity</strong> — a Starknet wallet keypair. No email, no OAuth provider, no third-party dependency.</li>
        <li><strong className="text-white">Payment</strong> — USDC on Starknet, paid per use. Your wallet pays the API directly.</li>
        <li><strong className="text-white">Billing protocol</strong> — the open <strong className="text-white">x402</strong> standard: an unfunded request returns <code className="font-mono text-xs bg-white/10 px-1.5 py-0.5 rounded">402</code> with machine-readable payment instructions, your agent pays and retries.</li>
        <li><strong className="text-white">No gate, no free tier</strong> — pay only for what you use. The first unfunded call returns <code className="font-mono text-xs bg-white/10 px-1.5 py-0.5 rounded">402</code> by design — that is the protocol working, not an error.</li>
        <li><strong className="text-white">MDLN bonus</strong> — hold MDLN in the paying wallet and your credits-per-USDC multiply automatically (see below).</li>
      </ul>

      {/* API key */}
      <DocH2 id="api-key">Get an API key</DocH2>
      <p className="text-muted-foreground mb-4 text-sm">
        Create a tenant API key at <a href="https://portal.medialane.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">portal.medialane.io</a> — connect a Starknet wallet and create a key in the API Keys tab. The key is shown once; store it securely. Keys look like <code className="font-mono text-xs bg-white/10 px-1.5 py-0.5 rounded">ml_live_…</code> and authenticate every request:
      </p>
      <DocCodeBlock lang="ts">{`const BASE = "https://api.medialane.io";
const headers = { "x-api-key": process.env.ML_API_KEY! };`}</DocCodeBlock>

      {/* Discovery */}
      <DocH2 id="discovery">Discover pricing</DocH2>
      <p className="text-muted-foreground mb-4 text-sm">
        Everything an agent needs to pay is published, unauthenticated, at the well-known endpoint:
      </p>
      <DocCodeBlock lang="bash">{`curl https://api.medialane.io/.well-known/x402`}</DocCodeBlock>
      <DocCodeBlock lang="json">{`{
  "x402Version": 1,
  "schemes": ["starknet-transfer"],
  "network": "starknet",
  "asset": "0x033068f6539f8e6e6b131e6b2b814e6c34a5224bc66947c47dab9dfee93b35fb",
  "payTo": "0x064c51746dbcb7498cc6e4b8abfcacd60805c0762b0411bb0515c611b5ae8223",
  "creditsPerUsdc": 100,
  "pricing": { "default": 1 }
}`}</DocCodeBlock>
      <p className="text-muted-foreground mb-4 text-sm">
        <code className="font-mono text-xs bg-white/10 px-1.5 py-0.5 rounded">asset</code> is USDC on Starknet, <code className="font-mono text-xs bg-white/10 px-1.5 py-0.5 rounded">payTo</code> is where you send it, and <code className="font-mono text-xs bg-white/10 px-1.5 py-0.5 rounded">1 USDC = 100 credits</code> (1 credit per read; some operations cost more).
      </p>

      {/* The flow */}
      <DocH2 id="flow">Pay-per-use with x402</DocH2>
      <p className="text-muted-foreground mb-4 text-sm">
        Call any endpoint with your key. If your balance can&apos;t cover the call, you get <code className="font-mono text-xs bg-white/10 px-1.5 py-0.5 rounded">402</code> with a <code className="font-mono text-xs bg-white/10 px-1.5 py-0.5 rounded">paymentRequirements</code> body:
      </p>
      <DocCodeBlock lang="json">{`HTTP/1.1 402 Payment Required
X-Credits-Remaining: 0

{
  "x402Version": 1,
  "accepts": [{
    "scheme": "starknet-transfer",
    "network": "starknet",
    "asset": "0x033068f6…",
    "maxAmountRequired": "10000",   // USDC atomic units (6dp) → 0.01 USDC = 1 credit
    "payTo": "0x064c5174…",
    "nonce": "…",
    "resource": "/v1/orders"
  }]
}`}</DocCodeBlock>

      <DocH3>Handle it: pay, then retry with X-PAYMENT</DocH3>
      <p className="text-muted-foreground mb-4 text-sm">
        Send USDC to <code className="font-mono text-xs bg-white/10 px-1.5 py-0.5 rounded">payTo</code>, then retry the <em>same</em> request with an <code className="font-mono text-xs bg-white/10 px-1.5 py-0.5 rounded">X-PAYMENT</code> header (base64 JSON). The API verifies the transfer on-chain, credits your tenant, and serves the response. One on-chain transfer credits exactly once — safe to retry the same proof.
      </p>
      <DocCodeBlock lang="ts">{`const BASE = "https://api.medialane.io";

async function call(path: string, init: RequestInit = {}): Promise<Response> {
  const headers = { "x-api-key": process.env.ML_API_KEY!, ...(init.headers ?? {}) };
  let res = await fetch(\`\${BASE}\${path}\`, { ...init, headers });

  if (res.status === 402) {
    const { accepts } = await res.json();
    const req = accepts[0]; // { scheme, network, payTo, maxAmountRequired, nonce }

    // Fund a chunk (more than one call's worth) so later calls just spend down.
    const txHash = await payUsdc(req.payTo, 1_000_000n); // 1 USDC → ~100 credits

    const xPayment = Buffer.from(JSON.stringify({
      scheme: req.scheme,
      network: req.network,
      txHash,
      nonce: req.nonce,
    })).toString("base64");

    res = await fetch(\`\${BASE}\${path}\`, {
      ...init,
      headers: { ...headers, "x-payment": xPayment },
    });
  }
  return res;
}`}</DocCodeBlock>

      <DocH3>Paying USDC on Starknet</DocH3>
      <DocCodeBlock lang="ts">{`import { Account, RpcProvider } from "starknet";

// Circle-native USDC on Starknet (the asset from /.well-known/x402)
const USDC = "0x033068f6539f8e6e6b131e6b2b814e6c34a5224bc66947c47dab9dfee93b35fb";

async function payUsdc(payTo: string, amountAtomic: bigint): Promise<string> {
  const provider = new RpcProvider({ nodeUrl: process.env.STARKNET_RPC_URL! });
  const account = new Account(
    provider,
    process.env.AGENT_WALLET_ADDRESS!,
    process.env.AGENT_PRIVATE_KEY!,
  );
  const { transaction_hash } = await account.execute([{
    contractAddress: USDC,
    entrypoint: "transfer",
    calldata: [payTo, amountAtomic.toString(), "0"], // u256: low, high
  }]);
  await provider.waitForTransaction(transaction_hash); // wait for finality before retry
  return transaction_hash;
}`}</DocCodeBlock>
      <p className="text-muted-foreground mb-4 text-sm">
        After funding, subsequent calls return <code className="font-mono text-xs bg-white/10 px-1.5 py-0.5 rounded">200</code> and spend down your balance — no payment per call. Check it any time via <code className="font-mono text-xs bg-white/10 px-1.5 py-0.5 rounded">GET /v1/portal/me</code> (<code className="font-mono text-xs bg-white/10 px-1.5 py-0.5 rounded">creditBalance</code>) and your payment history via <code className="font-mono text-xs bg-white/10 px-1.5 py-0.5 rounded">GET /v1/portal/credits/history</code>.
      </p>

      {/* MDLN multipliers */}
      <DocH2 id="mdln">MDLN credit bonus</DocH2>
      <p className="text-muted-foreground mb-4 text-sm">
        If the wallet that paid holds MDLN, the multiplier is applied automatically when your payment is credited — no configuration. The on-chain balance is read at credit time.
      </p>
      <div className="rounded-xl border border-white/10 overflow-hidden bg-white/[0.02] text-sm">
        <div className="grid grid-cols-3 px-5 py-3 bg-white/[0.03] border-b border-white/10 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          <span>MDLN held</span>
          <span className="text-center">Multiplier</span>
          <span className="text-center">Credits per $1 USDC</span>
        </div>
        {[
          ["0 MDLN", "1.0×", "100"],
          ["500+ MDLN", "1.2×", "120"],
          ["2,000+ MDLN", "1.5×", "150"],
          ["5,000+ MDLN", "2.0×", "200"],
        ].map(([range, mult, credits], i, arr) => (
          <div key={range} className={`grid grid-cols-3 px-5 py-3 items-center ${i < arr.length - 1 ? "border-b border-white/5" : ""}`}>
            <span className="text-muted-foreground">{range}</span>
            <span className="text-center text-white font-medium">{mult}</span>
            <span className="text-center text-primary font-medium">{credits}</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-3">
        Learn more about MDLN at{" "}
        <a href="https://medialane.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
          medialane.org
        </a>. Hold MDLN in the same wallet you pay from.
      </p>

      {/* Next steps */}
      <DocH2 id="next">Next steps</DocH2>
      <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
        <li><Link href="/dev/api" className="text-primary hover:underline">API Reference</Link> — all available endpoints and their credit costs</li>
        <li><Link href="/dev/sdk" className="text-primary hover:underline">SDK Docs</Link> — typed TypeScript client (@medialane/sdk)</li>
        <li><a href="https://portal.medialane.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Portal</a> — create API keys and watch usage</li>
      </ul>
    </div>
  )
}
