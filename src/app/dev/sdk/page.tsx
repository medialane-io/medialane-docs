import type { Metadata } from "next"
import React from "react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { DocH2, DocH3, DocCodeBlock } from "@/components/docs/typography"

export const metadata: Metadata = {
  alternates: { canonical: "https://docs.medialane.io/dev/sdk" },
  title: "SDK | Medialane Docs",
  description: "@medialane/sdk: TypeScript client for the Medialane API and on-chain marketplace, minting, POP Protocol, and Collection Drop.",
  openGraph: {
    title: "SDK | Medialane Docs",
    description: "@medialane/sdk: TypeScript client for the Medialane API and on-chain marketplace, minting, POP Protocol, and Collection Drop.",
    url: "https://docs.medialane.io/dev/sdk",
  },
}

export default function SdkPage() {
  return (
    <div className="space-y-2">
      <Badge className="bg-primary/10 text-primary border-primary/30 px-3 py-1 text-xs">
        SDK
      </Badge>
      <h2 className="text-2xl font-bold">@medialane/sdk</h2>
      <p className="text-muted-foreground text-lg mb-8">
        Framework-agnostic TypeScript SDK for the Medialane API. Bundles a full REST client and on-chain marketplace helpers in one package.
      </p>

      <DocH2 id="install" border>Install</DocH2>
      <DocCodeBlock lang="bash">{`# bun
bun add @medialane/sdk starknet

# npm
npm install @medialane/sdk starknet

# yarn
yarn add @medialane/sdk starknet`}</DocCodeBlock>
      <p className="text-base text-muted-foreground">
        Peer dependency: <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">starknet &gt;= 6</code>. Chain-agnostic helpers and types import from <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">@medialane/sdk</code>; the Starknet client, services and signing helpers import from <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">@medialane/sdk/starknet</code>.
      </p>

      <DocH2 id="configure" border>Configure</DocH2>
      <p className="text-muted-foreground text-base mb-3">
        Create a <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">MedialaneClient</code> with your chain and API key.
      </p>
      <DocCodeBlock>{`import { MedialaneClient } from "@medialane/sdk/starknet"

const client = new MedialaneClient({
  chain: "STARKNET",                   // default
  rpcUrl: "https://your-starknet-rpc", // optional, defaults to the chain's registry RPC
  backendUrl: "https://api.medialane.io",
  apiKey: "ml_live_YOUR_KEY",
  // Contract addresses default to the current mainnet registry
  // Optional: configure retry for transient failures
  retryOptions: {
    maxAttempts: 3,      // default
    baseDelayMs: 300,    // default
    maxDelayMs: 5000,    // default
  },
})`}</DocCodeBlock>
      <p className="text-base text-muted-foreground">
        The <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">apiKey</code> is sent as <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">x-api-key</code> on every request. Get your key at <Link href="https://portal.medialane.io/account" className="text-primary hover:underline">/account</Link>.
      </p>

      <DocH2 id="minting" border>Minting & Launchpad</DocH2>
      <p className="text-muted-foreground text-base mb-3">
        Every onchain action (mint, create a collection, list, offer, buy, cancel, checkout) starts as an <strong>intent</strong> from the API. <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">executeIntent</code> signs it when it needs a signature and executes the resulting calls from the user&apos;s own account. Nothing is signed or sent on the user&apos;s behalf.
      </p>

      <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">A signer for executeIntent</h3>
      <DocCodeBlock>{`import { stark } from "starknet"

const signer = {
  address: account.address,
  signTypedData: async (data) => stark.formatSignature(await account.signMessage(data)),
  execute: async (calls) => ({ txHash: (await account.execute(calls)).transaction_hash }),
}`}</DocCodeBlock>

      <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Mint an asset into a collection</h3>
      <DocCodeBlock>{`import { executeIntent } from "@medialane/sdk/starknet"

const { data: intent } = await client.api.createMintIntent({
  owner: "0x0591...",       // collection owner
  collectionId: "42",
  recipient: "0x0592...",
  tokenUri: "ipfs://...",
})
const { txHash } = await executeIntent(provider, signer, client, intent)`}</DocCodeBlock>

      <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Register a new collection</h3>
      <DocCodeBlock>{`const { data: intent } = await client.api.createCollectionIntent({
  owner: "0x0591...",
  name: "My Collection",
  symbol: "MYC",
  baseUri: "ipfs://...",
})
await executeIntent(provider, signer, client, intent)`}</DocCodeBlock>

      <DocH2 id="marketplace" border>Marketplace (on-chain reads)</DocH2>
      <p className="text-muted-foreground text-base mb-3">
        Read an order or an offerer&apos;s counter directly from the marketplace contract.
      </p>
      <DocCodeBlock>{`import { resolveConfig } from "@medialane/sdk"
import { getOrderDetails, getCounter } from "@medialane/sdk/starknet"

const config = resolveConfig({ chain: "STARKNET" })
const order   = await getOrderDetails("0x04f7a1...", config)
const counter = await getCounter("0x0591...", config)`}</DocCodeBlock>

      <DocH2 id="api-client" border>API Client (REST)</DocH2>
      <p className="text-muted-foreground text-base mb-3">
        <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">client.api</code> mirrors the full REST API surface.
      </p>

      <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">List open orders</h3>
      <DocCodeBlock>{`const orders = await client.api.getOrders({ status: "ACTIVE", limit: 20 })

console.log(orders.data[0].orderHash, orders.data[0].price)`}</DocCodeBlock>

      <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Get a token with metadata</h3>
      <DocCodeBlock>{`const token = await client.api.getToken("0x05e7...", "42")

console.log(token.data.metadata?.name)`}</DocCodeBlock>

      <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Get collections by owner</h3>
      <DocCodeBlock>{`// Fetch collections owned by a wallet address
// Addresses are normalized automatically — pass any valid Starknet format
const result = await client.api.listCollections({ owner: "0x0591..." })
result.data.forEach((col) => {
  console.log(col.name, col.collectionId) // collectionId = on-chain registry ID
})`}</DocCodeBlock>

      <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Create a listing intent</h3>
      <DocCodeBlock>{`import { executeIntent } from "@medialane/sdk/starknet"

// 1. Create the intent
const { data: intent } = await client.api.createListingIntent({
  nftContract: "0x05e7...",
  tokenId: "42",
  price: "500000",
  currency: "USDC",
  offerer: walletAddress,
  endTime: Math.floor(Date.now() / 1000) + 86400 * 30,
})

// 2. Sign (when intent.requiresSignature) and execute from the user's account
const { txHash } = await executeIntent(provider, signer, client, intent)

// Every create-intent response carries requiresSignature. Listings, offers and
// cancels are true: executeIntent signs the typed data and submits it. Fulfil,
// mint and create-collection are false: their calls are ready to execute.`}</DocCodeBlock>

      <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Search</h3>
      <DocCodeBlock>{`const results = await client.api.search("genesis", 10)
results.data.tokens.forEach((t) => console.log(t.name))
results.data.collections.forEach((c) => console.log(c.name))`}</DocCodeBlock>

      <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Portal: keys and credits</h3>
      <DocCodeBlock>{`// Portal calls act for the signed-in user: pass their SIWS token (see Sign-in below)
// List your API keys
const keys = await client.api.getApiKeys(siwsToken)

// Create your API key
const newKey = await client.api.createApiKey({ label: "Agent Key" }, siwsToken)
console.log(newKey.data.plaintext) // shown once — save it!

// What your credits were spent on, and your deposits
const spend = await client.api.getSpend(siwsToken)
const deposits = await client.api.getCreditHistory(siwsToken)`}</DocCodeBlock>

      <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Sign-in</h3>
      <p className="text-muted-foreground text-base mb-3">
        Every call carries your app&apos;s API key, which identifies the app. A user signs in with their wallet (SIWS) or with an email code; an account belongs to the app it registered through.
      </p>
      <DocCodeBlock>{`import { requestSiwsToken } from "@medialane/sdk/starknet"

// Wallet sign-in: appSource makes the backend register the account at sign-in
const siwsToken = await requestSiwsToken({ backendUrl, walletAddress, signer, appSource: "MEDIALANE_STARKNET" })

// Email sign-in: a 6-digit code, then an account session
await client.api.requestEmailCode("ana@example.com")
await client.api.verifyEmailCode("ana@example.com", "482913")`}</DocCodeBlock>

      <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Accounts</h3>
      <p className="text-muted-foreground text-base mb-3">
        An account is defined by no wallet, email or app: each registration through an app is its own account, holding its wallets and email. <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">registerUser</code> uses the API key alone (e.g. on wallet connect); <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">upsertMyWallet</code> and <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">getMyWallet</code> use the user&apos;s SIWS token.
      </p>
      <DocCodeBlock>{`// Register a connected wallet in your app — idempotent
await client.api.registerUser({
  walletAddress: "0x0591...",
  walletType: "braavos",     // free-form wallet-software label, e.g. "braavos" | "ready" | "mediawallet" | "cartridge"
})

// Register the signed-in wallet; your server adds the account session (x-account-session) to link it to an email account
await client.api.upsertMyWallet(siwsToken, { walletType: "mediawallet" })

// Read the caller's account: wallet, email, emailDeadline (null until registered)
const me = await client.api.getMyWallet(siwsToken)`}</DocCodeBlock>

      <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Creator &amp; collection profiles</h3>
      <DocCodeBlock>{`// Public reads
const creators = await client.api.getCreators({ page: 1, limit: 24 })
const creator  = await client.api.getCreatorByUsername("kalamaha")
const profile  = await client.api.getCreatorProfile("0x03d0...")
const colProfile = await client.api.getCollectionProfile("0x076c...")

// Owner-only writes (require a SIWS token)
await client.api.updateCreatorProfile("0x03d0...", { displayName: "Kalamaha", bio: "..." }, siwsToken)
await client.api.updateCollectionProfile("0x076c...", { displayName: "Genesis" }, siwsToken)

// Collection ownership claim — Path 1 (on-chain) or Path 3 (manual review)
await client.api.claimCollection("0x076c...", "0x0591...", siwsToken)
await client.api.requestCollectionClaim({ contractAddress: "0x076c...", email: "me@x.com" })`}</DocCodeBlock>

      <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Vanity slugs</h3>
      <DocCodeBlock>{`// Resolve an approved slug to a full collection
const col = await client.api.getCollectionBySlug("genesis")

// Availability check (public) + submit a claim (owner, SIWS token)
const { available } = await client.api.checkCollectionSlugAvailability("genesis")
await client.api.submitCollectionSlugClaim("0x076c...", "genesis", siwsToken)
const mine = await client.api.getMyCollectionSlugClaims(siwsToken)`}</DocCodeBlock>

      <DocH2 id="comments" border>On-chain Comments</DocH2>
      <DocCodeBlock>{`// Fetch permanent on-chain comments for a token
const result = await client.api.getTokenComments("0x05e7...", "42", { limit: 20 })
result.data.forEach((c) => {
  console.log(c.author, c.content, c.postedAt)
})`}</DocCodeBlock>

      <DocH2 id="counter-offers" border>Counter-offers</DocH2>
      <DocCodeBlock>{`// Seller creates a counter-offer in response to a buyer's bid
const intent = await client.api.createCounterOfferIntent(
  {
    sellerAddress: "0x0591...",
    originalOrderHash: "0x04f7a1...",
    counterPrice: "750000",       // raw wei
    durationSeconds: 86400,       // 1 day
    message: "Best I can do!",
  },
  siwsToken
)

// Buyer fetches counter-offers for their bid
const counters = await client.api.getCounterOffers({
  originalOrderHash: "0x04f7a1...",
})
console.log(counters.data[0].price)

// Buyer accepts by fulfilling the counter-offer (it is a standard listing)
await client.api.createFulfillIntent({ fulfiller: buyerAddress, orderHash: counters.data[0].orderHash })`}</DocCodeBlock>

      <DocH2 id="remix-licensing" border>Remix Licensing</DocH2>
      <DocCodeBlock>{`import { OPEN_LICENSES } from "@medialane/sdk"

// Check if a license is open (auto-approved remix)
console.log(OPEN_LICENSES) // ["CC0", "CC BY", "CC BY-SA", "CC BY-NC"]

// Request permission to remix a token (custom offer, SIWS session JWT required)
const offer = await client.api.submitRemixOffer(
  {
    originalContract: "0x05e7...",
    originalTokenId: "42",
    licenseType: "CC BY-NC",
    commercial: false,
    derivatives: true,
    royaltyPct: 10,
    message: "Would love to remix this for my EP cover",
  },
  siwsToken
)

// Open-license tokens are auto-approved
const autoOffer = await client.api.submitAutoRemixOffer(
  { originalContract: "0x05e7...", originalTokenId: "7", licenseType: "CC0" },
  siwsToken
)

// Creator approves a pending offer
await client.api.confirmRemixOffer(offer.data.id, {
  approvedCollection: "0x06a3...",
  remixContract: "0x06a3...",
  remixTokenId: "1",
}, siwsToken)

// Creator rejects an offer
await client.api.rejectRemixOffer(offer.data.id, siwsToken)

// Owner records their own self-remix after minting
await client.api.confirmSelfRemix(
  {
    originalContract: "0x05e7...",
    originalTokenId: "42",
    remixContract: "0x06a3...",
    remixTokenId: "1",
    licenseType: "CC BY",
    commercial: true,
    derivatives: true,
  },
  siwsToken
)

// List incoming / outgoing offers
const incoming = await client.api.getRemixOffers({ role: "creator" }, siwsToken)
const outgoing = await client.api.getRemixOffers({ role: "requester" }, siwsToken)

// Get public remixes for a token (no auth needed)
const remixes = await client.api.getTokenRemixes("0x05e7...", "42")
remixes.data.forEach((r) => console.log(r.remixContract, r.remixTokenId, r.licenseType))`}</DocCodeBlock>

      <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">CollectionSort: typed sort options</h3>
      <DocCodeBlock>{`import type { CollectionSort } from "@medialane/sdk"

// "recent" | "supply" | "floor" | "volume" | "name"
const sort: CollectionSort = "floor"
await client.api.listCollections({ page: 1, limit: 20, isFeatured: true, sort })`}</DocCodeBlock>

      <DocH2 id="pop-protocol" border>POP Protocol (Proof of Participation)</DocH2>
      <p className="text-muted-foreground text-base mb-3">
        POP collections are soulbound badges for events and communities: conferences, workshops, hackathons, memberships. Anyone can create a collection and becomes its organizer. Each address can hold one badge, it cannot be transferred, and only its holder can burn it. Eligibility is a Merkle allowlist the organizer publishes onchain; the organizer can also issue badges directly. Use <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">client.services.pop</code>.
      </p>

      <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Create a collection</h3>
      <DocCodeBlock>{`import type { CreatePopCollectionParams } from "@medialane/sdk"

const params: CreatePopCollectionParams = {
  name: "Starknet Summit 2026",
  symbol: "SUMMIT26",
  baseUri: "ipfs://...",
  claimEndTime: Math.floor(Date.now() / 1000) + 86400 * 7,  // 0 = no deadline
}
const { txHash } = await client.services.pop.createCollection(account, params)`}</DocCodeBlock>

      <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Publish an allowlist and share claim links</h3>
      <DocCodeBlock>{`import { collectionHref, normalizeAddress } from "@medialane/sdk"
import { buildPopAllowlist, encodePopClaimFragment } from "@medialane/sdk/starknet"

const allowlist = buildPopAllowlist(["0x0591...", "0x06a3..."])
await client.services.pop.setAllowlistRoot(account, { collection, root: allowlist.root })  // "0x0" closes claims

// Each address claims with its own proof, carried in its claim link's fragment
const proof = allowlist.proofs[normalizeAddress("STARKNET", "0x0591...")]
const link  = "https://medialane.io" + collectionHref("STARKNET", collection) + encodePopClaimFragment(proof)`}</DocCodeBlock>

      <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Claim, issue and burn</h3>
      <DocCodeBlock>{`import { decodePopClaimFragment, popHasClaimed } from "@medialane/sdk/starknet"

// A listed address claims with the proof from its link
const proof = decodePopClaimFragment(window.location.hash) ?? []
if (!(await popHasClaimed(provider, collection, account.address))) {
  await client.services.pop.claim(account, { collection, proof })
}

// The organizer issues a badge directly (empty tokenUri uses the collection URI)
await client.services.pop.issue(account, { collection, recipient: "0x0591...", tokenUri: "" })

// The holder burns their own badge; that address cannot receive another
await client.services.pop.burn(account, { collection, tokenId: "1" })`}</DocCodeBlock>

      <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">List POP collections</h3>
      <DocCodeBlock>{`const pops = await client.api.listCollections({ service: "pop-protocol", page: 1, limit: 20, sort: "recent" })`}</DocCodeBlock>

      <DocH2 id="collection-drop" border>Collection Drop</DocH2>
      <p className="text-muted-foreground text-base mb-3">
        Collection Drops are public minting campaigns with configurable claim conditions: price, supply cap, time window, and per-wallet limits. Use <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">client.services.drop</code> for on-chain interactions and <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">client.api</code> for status queries.
      </p>

      <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Claim (public mint)</h3>
      <DocCodeBlock>{`// Check mint status for a wallet before claiming
const status = await client.api.getDropMintStatus(
  "0x03587f...",   // Drop collection address
  "0x0591...",     // wallet address
)
// status: { mintedByWallet: number; totalMinted: number }

// Claim 1 token (default)
const { txHash } = await client.services.drop.claim(account, "0x03587f...")

// Claim multiple tokens
await client.services.drop.claim(account, "0x03587f...", 3)`}</DocCodeBlock>

      <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">List Drop collections</h3>
      <DocCodeBlock>{`const drops = await client.api.listCollections({ service: "drop-collection", page: 1, limit: 20, sort: "recent" })
drops.data.forEach((col) => console.log(col.name, col.source)) // source: "COLLECTION_DROP"`}</DocCodeBlock>

      <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Deploy a new Drop</h3>
      <DocCodeBlock>{`import type { CreateDropParams, ClaimConditions } from "@medialane/sdk"

const conditions: ClaimConditions = {
  startTime: Math.floor(Date.now() / 1000),          // open now
  endTime: Math.floor(Date.now() / 1000) + 86400 * 30, // closes in 30 days
  price: BigInt("1000000"),                           // 1 USDC (6 decimals). 0 = free mint
  paymentToken: "0x033068f6...",                      // USDC contract
  maxQuantityPerWallet: BigInt(5),                    // max 5 per wallet. 0 = unlimited
}

const params: CreateDropParams = {
  name: "Genesis Drop",
  symbol: "GEN",
  baseUri: "ipfs://...",
  maxSupply: BigInt(1000),
  initialConditions: conditions,
}
const { txHash } = await client.services.drop.createDrop(account, params)
console.log("Drop deployed:", txHash)`}</DocCodeBlock>

      <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Manage an active Drop</h3>
      <DocCodeBlock>{`// Update claim conditions (price, time window, wallet limits)
await client.services.drop.setClaimConditions(account, {
  collection: "0x03587f...",
  conditions: { startTime: 0, endTime: 0, price: 0n, paymentToken: "0x0", maxQuantityPerWallet: 0n },
})

// Pause or unpause minting
await client.services.drop.setPaused(account, { collection: "0x03587f...", paused: true })

// Enable allowlist gate
await client.services.drop.setAllowlistEnabled(account, { collection: "0x03587f...", enabled: true })
await client.services.drop.batchAddToAllowlist(account, {
  collection: "0x03587f...",
  addresses: ["0x0591...", "0x06a3..."],
})

// Withdraw ERC-20 proceeds
await client.services.drop.withdrawPayments(account, { collection: "0x03587f..." })`}</DocCodeBlock>

      <DocH2 id="marketplace-1155" border>ERC-1155 Marketplace</DocH2>
      <p className="text-muted-foreground text-base mb-3">
        Multi-edition orders use the same intents with a quantity. Listings carry an edition amount and can be partly filled; listing, offer and cancellation are signed, while fulfillment is an unsigned call by the buyer.
      </p>
      <DocCodeBlock>{`import { executeIntent, build1155OrderTypedData } from "@medialane/sdk/starknet"

// List 10 editions at 50 USDC each
const { data: listing } = await client.api.createListingIntent({
  offerer: account.address,
  nftContract: "0x067064...",
  tokenId: "7",
  amount: "10",
  currency: "USDC",
  price: "50000000",        // per edition, base units
  endTime: Math.floor(Date.now() / 1000) + 86400 * 30,
})
await executeIntent(provider, signer, client, listing)

// Buy 3 editions, or cancel the order
const { data: buy } = await client.api.createFulfillIntent({ fulfiller: account.address, orderHash: "0x04f7a1...", tokenStandard: "ERC1155", quantity: "3" })
const { data: cancel } = await client.api.createCancelIntent({ offerer: account.address, orderHash: "0x04f7a1...", tokenStandard: "ERC1155" })

// For custom signers: build1155OrderTypedData / build1155CancellationTypedData`}</DocCodeBlock>

      <DocH2 id="erc1155-collection" border>ERC-1155 Collections (on-chain)</DocH2>
      <p className="text-muted-foreground text-base mb-3">
        <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">client.services.erc1155Collection</code> deploys and manages multi-edition IP collections with ERC-2981 royalties.
      </p>
      <DocCodeBlock>{`// Deploy a new ERC-1155 collection via the factory
await client.services.erc1155Collection.deployCollection(account, {
  name: "Editions",
  symbol: "EDN",
  baseUri: "ipfs://...",
})

// Mint a single edition / batch mint
await client.services.erc1155Collection.mintEdition(account, {
  collection: "0x067064...", to: "0x0591...", value: "10", tokenUri: "ipfs://...",
})
await client.services.erc1155Collection.batchMintEdition(account, {
  collection: "0x067064...", to: "0x0591...", items: [{ value: "1", tokenUri: "ipfs://..." }, { value: "1", tokenUri: "ipfs://..." }],
})

// ERC-2981 royalties
await client.services.erc1155Collection.setDefaultRoyalty(account, { collection: "0x067064...", receiver: "0x0591...", feeNumerator: 500 })
await client.services.erc1155Collection.setTokenRoyalty(account, { collection: "0x067064...", tokenId: "7", receiver: "0x0591...", feeNumerator: 250 })`}</DocCodeBlock>

      <DocH2 id="creator-coins" border>Creator Coins</DocH2>
      <p className="text-muted-foreground text-base mb-3">
        Fixed-supply standard ERC-20s with permanently-locked Ekubo liquidity (audited unruggable.meme fork).
        The creator sets both the launch price and the quote token (STRK, ETH, WBTC, USDC, or USDT); supply
        and price together set the market cap. <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">client.services.creatorCoin</code> executes
        with a starknet.js account; the account-free <strong>call builders</strong> (0.35+) return raw calls for custom
        execution pipelines (paymasters, session keys, batchers). The <strong>coin-launch math module</strong> (0.36)
        is the single source for validation and allocation math.
      </p>
      <DocCodeBlock>{`import {
  buildCreateCreatorCoinCall, buildLaunchOnEkuboCalls, parseCreatorCoinCreated,
  validateCoinName, validateCoinSymbol, validateCoinSupply,
  coinToRaw, teamCoinsRaw, buybackQuoteRaw, fdvHuman,
  priceToEkuboParams, validatePrice,
} from "@medialane/sdk/starknet"

// 1. Validate + derive the economics (pure, no chain access)
validateCoinSupply("1000000")                          // null = valid (1e3–1e12)
validatePrice(quoteDecimals, price)                    // null = valid
const supplyRaw  = coinToRaw(1000000n)                 // 18-decimal raw units
const teamRaw    = teamCoinsRaw(supplyRaw, 5)          // 5% creator allocation
const buybackRaw = buybackQuoteRaw(teamRaw, price, quoteDecimals)  // quote the creator funds
const ekubo       = priceToEkuboParams(quoteDecimals, price)       // Ekubo starting-tick for that price

// 2. Tx 1 — deploy the coin (full supply minted to the Factory)
const createCall = buildCreateCreatorCoinCall({
  owner, name: "My Coin", symbol: "COIN", initialSupply: supplyRaw,
})
// execute with your pipeline, then read the coin address from the receipt:
const coinAddress = parseCreatorCoinCreated(receipt)

// 3. Tx 2 — launch on Ekubo (quote transfer + launch_on_ekubo multicall)
const launchCalls = buildLaunchOnEkuboCalls({
  creatorCoin: coinAddress, quoteToken, initialHolders: [owner],
  initialHoldersAmounts: [teamRaw], transferRestrictionDelay: 0,
  ekubo, quoteFundAmount: buybackRaw,
})

// Or let the service execute both with an account:
await client.services.creatorCoin.createCreatorCoin(account, { owner, name, symbol, initialSupply: supplyRaw })
await client.services.creatorCoin.launchOnEkubo(account, { creatorCoin, quoteToken, ekubo, initialHolders: [], initialHoldersAmounts: [] })`}</DocCodeBlock>
      <p className="text-muted-foreground text-base mb-3">
        Coins have their own model, separate from NFT collections: list them with <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">client.api.getCoins()</code> or <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">GET /v1/coins</code>, and read one with <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">getCoin(contract)</code>. Index a fresh launch instantly with <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">client.api.syncCoin(coinAddress)</code>; the factory event poller is the backstop. Live prices come from one place, <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">client.api.getCoinPrices()</code>.
      </p>

      <DocH2 id="tickets-club" border>IP Tickets &amp; IP Club</DocH2>
      <p className="text-muted-foreground text-base mb-3">
        Ticket types and membership tiers are numbered from 1 with no gaps, so a count gives every id. Counts are read fresh, so you can use them to choose the next id right before creating one.
      </p>
      <DocCodeBlock>{`const ticketTypes = await client.api.getTicketCount(ticketContract)
const ticket      = await client.api.getTicket(ticketContract, "1")  // { maxSupply, minted, startTime, endTime, royaltyBps }

const tiers    = await client.api.getClubMembershipCount(clubContract)
const tier     = await client.api.getClubMembership(clubContract, "1")
const isMember = await client.api.isClubMember(clubContract, "1", wallet)`}</DocCodeBlock>

      <DocH2 id="launchpad-runs" border>Launchpad Runs</DocH2>
      <p className="text-muted-foreground text-base mb-3">
        A run is a paid, multi-step launch (data tokenization, IP ticketing) for your account. <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">createLaunchpadRunsClient</code> creates, pays for and executes it step by step; point <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">baseUrl</code> at the backend, or at your app&apos;s proxy to it.
      </p>
      <DocCodeBlock>{`import { createLaunchpadRunsClient } from "@medialane/sdk"

const runs = createLaunchpadRunsClient({ baseUrl: "https://api.medialane.io", getToken: async () => siwsToken })

const run  = await runs.create("ip-ticketing", spec)   // DRAFT, with its quote
await runs.checkoutWithCredits(run.id)                // or checkoutFromWallet(run.id, topUpId)
const next = (await runs.get(run.id)).next              // what the run asks for next`}</DocCodeBlock>

      <DocH2 id="platform-fee" border>Platform Fee</DocH2>
      <p className="text-muted-foreground text-base mb-3">
        The creators-fund fee (default 1%) is a <strong>platform-layer</strong> ERC-20 transfer, distinct from any on-chain protocol rule. <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">buildFeeCall</code> is the single source of truth; splice the returned <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">Call</code> into your multicall after the trade. Fail-safe: returns <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">null</code> when the fee is disabled or unconfigured, treating a missing config as a zero fee.
      </p>
      <DocCodeBlock>{`import { resolveFeeConfig } from "@medialane/sdk"
import { buildFeeCall } from "@medialane/sdk/starknet"

const feeConfig = resolveFeeConfig({
  enabled: true,
  fundAddress: "0x0123...",
  marketplaceBps: 100,   // 1%
  launchpadBps: 100,
})

const feeCall = buildFeeCall(
  { surface: "marketplace", grossAmount: 50000000n, token: "0x0330..." },
  feeConfig,
)

// feeCall is a starknet Call (or null). Append it to your trade multicall:
const calls = feeCall ? [...tradeCalls, feeCall] : tradeCalls
await account.execute(calls)`}</DocCodeBlock>

      <DocH2 id="errors" border>Error Handling</DocH2>
      <p className="text-muted-foreground text-base mb-3">
        The SDK throws <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">MedialaneError</code> for marketplace issues and <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">MedialaneApiError</code> for REST API failures. Both carry a typed <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">.code</code> field from the <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">MedialaneErrorCode</code> union.
      </p>
      <DocCodeBlock>{`import { MedialaneApiError } from "@medialane/sdk"
import { MedialaneError, executeIntent } from "@medialane/sdk/starknet"

try {
  await executeIntent(provider, signer, client, intent)
} catch (err) {
  if (err instanceof MedialaneError) {
    console.error(err.code, err.message) // e.g. "TRANSACTION_FAILED"
  }
  if (err instanceof MedialaneApiError) {
    console.error(err.code, err.status, err.message) // e.g. "TOKEN_NOT_FOUND", 404
  }
}`}</DocCodeBlock>

      <DocH3>Retries</DocH3>
      <p className="text-muted-foreground text-base mb-3">
        Reads are retried on server errors, <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">429</code> and network failures. A write is retried only on <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">429</code>, which means nothing happened. After a server error or a dropped connection the first attempt may already have taken effect, so the SDK reports the error instead of repeating the write. Check the result (e.g. read the intent or order) before trying again.
      </p>

      <DocH3>Showing an error to a user</DocH3>
      <p className="text-muted-foreground text-base mb-3">
        Three types carry text written for someone to read: <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">MedialaneApiError</code>, whose message is the reason the API gave or a plain statement of the status; <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">UserFacingError</code>, raised when the SDK got partway and stopped; and <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">PasskeyCancelledError</code>, where the prompt was dismissed and nothing was submitted.
      </p>
      <DocCodeBlock>{`import { MedialaneApiError, PasskeyCancelledError, UserFacingError } from "@medialane/sdk"

function describe(err: unknown, fallback: string): string {
  if (err instanceof PasskeyCancelledError) return "Request not completed. Nothing was submitted."
  if (err instanceof UserFacingError) return err.message
  if (err instanceof MedialaneApiError) return err.message
  return fallback
}

catch (err) {
  console.error(err)
  setError(describe(err, "We couldn't create that listing. Please try again."))
}`}</DocCodeBlock>
      <p className="text-muted-foreground text-base mb-3">
        The fallback carries the weight. An error matching none of those types says nothing a reader can act on, and its text is as likely to be a gateway response as a sentence. Your call site knows which action was attempted, so that is the message worth showing. A response body that is not ours stays in <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">err.details</code>, available while debugging without reaching a reader.
      </p>

      <DocH2 id="error-codes" border>Error Codes</DocH2>
      <p className="text-muted-foreground text-base mb-3">
        All errors expose a <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">MedialaneErrorCode</code> typed union:
      </p>
      <DocCodeBlock>{`type MedialaneErrorCode =
  | "TOKEN_NOT_FOUND"
  | "COLLECTION_NOT_FOUND"
  | "ORDER_NOT_FOUND"
  | "INTENT_NOT_FOUND"
  | "INTENT_EXPIRED"
  | "RATE_LIMITED"
  | "NETWORK_NOT_SUPPORTED"
  | "APPROVAL_FAILED"
  | "TRANSACTION_FAILED"
  | "INVALID_PARAMS"
  | "UNAUTHORIZED"
  | "UNKNOWN"`}</DocCodeBlock>

      <div className="mt-4 rounded-lg border border-foreground/10 overflow-hidden">
        <div className="grid grid-cols-[auto_1fr] text-xs">
          <div className="grid grid-cols-subgrid col-span-2 bg-foreground/5 border-b border-foreground/10 px-4 py-2 font-semibold text-foreground">
            <span>Code</span>
            <span>Trigger</span>
          </div>
          {[
            ["TOKEN_NOT_FOUND", "404 response or missing token"],
            ["COLLECTION_NOT_FOUND", "404 on collection lookup"],
            ["ORDER_NOT_FOUND", "404 on order lookup"],
            ["INTENT_NOT_FOUND", "404 on intent lookup"],
            ["INTENT_EXPIRED", "410 response: intent TTL exceeded"],
            ["RATE_LIMITED", "429 response: too many requests"],
            ["NETWORK_NOT_SUPPORTED", "Sepolia selected with no contract addresses"],
            ["APPROVAL_FAILED", "NFT approval missing before listing"],
            ["TRANSACTION_FAILED", "On-chain call reverted"],
            ["INVALID_PARAMS", "400 response: bad request parameters"],
            ["UNAUTHORIZED", "401/403: missing or invalid API key"],
            ["UNKNOWN", "Unexpected errors"],
          ].map(([code, trigger], i, arr) => (
            <div key={code} className={`grid grid-cols-subgrid col-span-2 px-4 py-2.5 items-start ${i < arr.length - 1 ? "border-b border-foreground/5" : ""}`}>
              <code className="font-mono text-primary whitespace-nowrap mr-6">{code}</code>
              <span className="text-muted-foreground">{trigger}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-base text-muted-foreground mt-3">
        Note: 4xx errors are <span className="text-foreground font-medium">not retried</span> automatically. Only transient network and 5xx errors trigger the retry logic configured via <code className="font-mono text-xs bg-foreground/10 px-1.5 py-0.5 rounded">retryOptions</code>.
      </p>

      <div className="mt-10 p-5 rounded-xl border border-primary/20 bg-primary/5">
        <p className="text-base text-muted-foreground">
          <span className="font-semibold text-foreground">Full API reference</span>: all REST endpoints, parameters, and response schemas are documented in the{" "}
          <Link href="/dev/api" className="text-primary hover:underline">API Reference</Link>.
        </p>
      </div>

      <DocH2 id="examples" border>Use Case Examples</DocH2>
      <p className="text-muted-foreground text-base mb-3">
        Common patterns you can build with the SDK:
      </p>

      <DocH3>Fetch a wallet&apos;s portfolio</DocH3>
      <DocCodeBlock lang="ts">{`// getTokensByOwner(address, page?, limit?) — positional args
const portfolio = await client.api.getTokensByOwner("0x05f9...", 1, 20);
// portfolio.data → ApiToken[] with metadata, license terms, balances`}</DocCodeBlock>

      <DocH3>Check whether an asset is open-licensed</DocH3>
      <DocCodeBlock lang="ts">{`import { OPEN_LICENSES } from "@medialane/sdk";

const { data: token } = await client.api.getToken("0x04a...", "42");
const isRemixable = OPEN_LICENSES.includes(token.metadata?.licenseType ?? "");
// OPEN_LICENSES → ["CC0", "CC BY", "CC BY-SA", "CC BY-NC", ...]`}</DocCodeBlock>

      <DocH3>Create and sign a listing intent (no private key exposure)</DocH3>
      <DocCodeBlock lang="ts">{`import { executeIntent } from "@medialane/sdk/starknet";

// 1. Create the intent — the API returns SNIP-12 typed data to sign
const { data: intent } = await client.api.createListingIntent({
  offerer: "0x05f9...",
  nftContract: "0x04a...",
  tokenId: "42",
  currency: "USDC",
  price: "50000000",        // base units (USDC has 6 decimals → 50 USDC)
  endTime: Math.floor(Date.now() / 1000) + 86400,
});

// 2. Sign in the user's wallet and execute — the key never leaves it
const { txHash } = await executeIntent(provider, signer, client, intent);`}</DocCodeBlock>

      <DocH3>Stream on-chain activity</DocH3>
      <DocCodeBlock lang="ts">{`const activity = await client.api.getActivities({
  type: "transfer",   // "transfer" | "sale" | "listing" | "offer"
  page: 1,
  limit: 50,
});`}</DocCodeBlock>

      <DocH2 id="consumer-apps" border>Built with the SDK</DocH2>
      <p className="text-muted-foreground text-base mb-4">
        Both Medialane consumer apps use the same SDK you&apos;re integrating:
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 space-y-2">
          <p className="text-base font-mono text-muted-foreground">medialane.io</p>
          <p className="text-base font-semibold text-foreground">Creator Launchpad</p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Collections, Orders, Minting, Remix Licensing, POP, Collection Drop, On-chain Comments.
            Email sign-up with a passkey-secured self-custody wallet.
          </p>
        </div>
        <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5 space-y-2">
          <p className="text-base font-mono text-muted-foreground">starknet.medialane.io</p>
          <p className="text-base font-semibold text-foreground">Permissionless dApp</p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Activities, Trade Intents, Asset Metadata. Reads directly via starknet.js, with no backend dependency for browsing.
          </p>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-foreground/10 space-y-2">
        <p className="text-base font-semibold text-foreground">Full SDK documentation</p>
        <p className="text-base text-muted-foreground">
          Complete method reference, type definitions, and advanced usage are on{" "}
          <a href="https://docs.medialane.io/dev/sdk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            docs.medialane.io/dev/sdk
          </a>
          .
        </p>
      </div>
    </div >
  )
}
