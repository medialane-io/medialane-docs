import type { Metadata } from "next";
import { Package, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SDK | Medialane Docs",
  description: "The @medialane/sdk TypeScript package — installation, client configuration, data queries, marketplace intents, and type reference.",
  openGraph: {
    title: "SDK | Medialane Docs",
    description: "The @medialane/sdk TypeScript package — installation, client configuration, data queries, marketplace intents, and type reference.",
    url: "https://docs.medialane.io/docs/sdk",
  },
  twitter: {
    title: "SDK | Medialane Docs",
    description: "The @medialane/sdk TypeScript package — installation, client configuration, data queries, marketplace intents, and type reference.",
  },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold">{title}</h3>
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

const API_METHODS = [
  { method: "getToken(contract, tokenId)", returns: "ApiToken", desc: "Single token with full metadata, balances, and active orders." },
  { method: "getTokensByOwner(address)", returns: "ApiToken[]", desc: "All tokens owned by a wallet address. ERC-1155 balances included." },
  { method: "getCollections(page, limit, opts?)", returns: "{ data, meta }", desc: "Paginated collection list. opts: sort, owner, isFeatured." },
  { method: "getCollection(contract)", returns: "ApiCollection", desc: "Single collection by contract address. Includes slug, standard, collectionId." },
  { method: "getCollectionTokens(contract)", returns: "ApiToken[]", desc: "All tokens minted in a collection." },
  { method: "getCollectionsByOwner(address)", returns: "ApiCollection[]", desc: "Collections deployed by a wallet. Returns collectionId for use with createMintIntent." },
  { method: "getOrders(query)", returns: "ApiOrder[]", desc: "Marketplace orders. query: status, sort, currency, collection, page, limit." },
  { method: "getOrder(orderHash)", returns: "ApiOrder", desc: "Single order by its on-chain hash." },
  { method: "getTokenListings(contract, tokenId)", returns: "ApiOrder[]", desc: "Active listings and offers for a specific token." },
  { method: "getUserOrders(address)", returns: "ApiOrder[]", desc: "All orders (buy + sell) for a wallet address." },
  { method: "getActivities(query)", returns: "activity[]", desc: "Global activity feed — mint, sale, offer, transfer, cancelled." },
  { method: "getActivitiesByAddress(address)", returns: "activity[]", desc: "Activity feed for a specific wallet." },
  { method: "getTokenComments(contract, tokenId, opts?)", returns: "ApiComment[]", desc: "On-chain comments for a token. Added in v0.4.8." },
  { method: "getListableTokens()", returns: "token[]", desc: "Currency tokens accepted for listings and offers: USDC, USDT, ETH, STRK, WBTC." },
  { method: "checkCollectionSlugAvailability(slug)", returns: "boolean", desc: "Returns true if a vanity slug is unclaimed. Added in v0.10.0." },
  { method: "getCollectionBySlug(slug)", returns: "ApiCollection", desc: "Resolve a vanity slug to a collection. Added in v0.10.0." },
  { method: "submitCollectionSlugClaim(params)", returns: "ApiCollectionSlugClaim", desc: "Claim a vanity slug for a collection you own. Added in v0.10.0." },
  { method: "getMyCollectionSlugClaims()", returns: "ApiCollectionSlugClaim[]", desc: "All slug claims submitted by the authenticated wallet." },
];

const MARKETPLACE_METHODS = [
  { method: "createListingIntent(params)", desc: "Create a SNIP-12 typed data payload for a new listing. Params: contract, tokenId, price, currency, duration, standard, amount?." },
  { method: "submitIntentSignature(hash, sig)", desc: "Submit a signed listing or offer intent. Returns the created order." },
  { method: "createFulfillIntent(params)", desc: "Create pre-signed calldata for buying a listing." },
  { method: "createCancelIntent(params)", desc: "Create calldata for cancelling an active order." },
  { method: "createOfferIntent(params)", desc: "Create a SNIP-12 typed data payload for an offer. Params: contract, tokenId, price, currency, duration, standard, quantity?." },
];

const TYPES = [
  { name: "ApiToken", desc: "Token with metadata, balances (ERC-721 and ERC-1155), and activeOrders. token.balances replaces deprecated token.owner." },
  { name: "ApiCollection", desc: "Collection with standard (ERC721 | ERC1155 | UNKNOWN), collectionId, slug, source, image, totalSupply, floorPrice." },
  { name: "ApiOrder", desc: "Marketplace order — offer, consideration, offerer, orderHash, status, token (ApiOrderTokenMeta), remainingAmount." },
  { name: "ApiOrderTokenMeta", desc: "Name, image, description enrichment on every order — no per-token fetch needed." },
  { name: "ApiComment", desc: "On-chain comment with commentId, author, content, txHash, timestamp." },
  { name: "ApiCollectionProfile", desc: "Extended collection identity: displayName, description, bannerImage, avatarImage, socialLinks." },
  { name: "ApiCollectionSlugClaim", desc: "Slug claim with status (PENDING | ACTIVE | REJECTED) and collectionContract." },
  { name: "IpAttribute", desc: "Token attribute from IPFS metadata — { trait_type, value }. Licensing attributes use trait_types from LICENSE_TRAIT_TYPES." },
  { name: "IpNftMetadata", desc: "Full IPFS metadata object — name, description, image, external_url, attributes: IpAttribute[]." },
  { name: "SupportedTokenSymbol", desc: "Union: 'USDC' | 'USDT' | 'ETH' | 'STRK' | 'WBTC'. Replaces deprecated SupportedCurrencySymbol (removed in v0.4.2)." },
  { name: "OrderStatus", desc: "Union: 'ACTIVE' | 'FULFILLED' | 'CANCELLED' | 'EXPIRED'." },
];

export default function SDKPage() {
  return (
    <div className="space-y-10 max-w-3xl">

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Package className="h-5 w-5 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">SDK</span>
        </div>
        <h2 className="text-2xl font-bold">@medialane/sdk</h2>
        <p className="text-muted-foreground leading-relaxed">
          The official TypeScript SDK for the Medialane platform. Provides a fully-typed
          API client, marketplace intent builders, and type definitions for all platform
          objects. Built for Node.js, Bun, Deno, and browser environments.
        </p>
        <div className="flex flex-wrap gap-2 text-xs">
          {["v0.10.0", "TypeScript", "ESM + CJS", "Starknet Mainnet"].map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-mono">{t}</span>
          ))}
        </div>
      </div>

      <Section title="Installation">
        <div className="space-y-2">
          {[
            { label: "bun", cmd: "bun add @medialane/sdk starknet" },
            { label: "npm", cmd: "npm install @medialane/sdk starknet" },
            { label: "yarn", cmd: "yarn add @medialane/sdk starknet" },
          ].map(({ label, cmd }) => (
            <div key={label} className="flex items-center gap-3 bento-cell px-4 py-3">
              <span className="text-xs text-muted-foreground font-mono w-8">{label}</span>
              <code className="text-sm font-mono text-foreground flex-1">{cmd}</code>
            </div>
          ))}
        </div>
        <p className="text-sm">
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">starknet</code> is a peer dependency required for
          on-chain operations. If you only need the API client (read queries), it is optional.
        </p>
      </Section>

      <Section title="Client Initialization">
        <Code>{`import { MedialaneClient } from "@medialane/sdk";

const client = new MedialaneClient({
  backendUrl: "https://api.medialane.io",
  apiKey: process.env.MEDIALANE_API_KEY,   // from portal.medialane.io
  // On-chain contracts (Starknet Mainnet — defaults match these values):
  marketplaceContract:    "0x004387e58d469f19332dd5d20846b10339ddc49ef208025ec7d5bef294a8daf3",
  marketplace1155Contract:"0x035836932ba1d219e00b8e42cd9a433fb2b211a08edcaa8bae40232f335f777d",
  collectionContract:     "0x05c49ee5d3208a2c2e150fdd0c247d1195ed9ab54fa2d5dea7a633f39e4b205b",
  collection1155Contract: "0x006b2dc7ca7c4f466bb4575ba043d934310f052074f849caf853a86bcb819fd6",
});`}</Code>
        <p className="text-sm">
          Contract addresses are optional — the SDK ships with the current mainnet defaults.
          Override only when testing against a local devnet or custom deployment.
          All addresses are normalised to 64-character hex internally; short-form addresses work.
        </p>
      </Section>

      <Section title="Quick Start">
        <Code>{`// Fetch the 20 newest collections
const { data: collections } = await client.api.getCollections(1, 20, { sort: "createdAt" });

// Fetch a token with its on-chain balance (ERC-721 or ERC-1155)
const token = await client.api.getToken("0x<contract>", "1");
console.log(token.balances);      // [{ owner: "0x...", amount: "1" }]
console.log(token.activeOrders);  // current listings + offers

// Fetch all active listings for a token
const listings = await client.api.getTokenListings("0x<contract>", "1");

// Resolve a vanity slug to a collection
const collection = await client.api.getCollectionBySlug("my-collection");

// Get supported payment currencies
const currencies = await client.api.getListableTokens();
// → [{ symbol: "USDC", address: "0x...", decimals: 6 }, ...]`}</Code>
      </Section>

      <Section title="client.api — Data Methods">
        <p className="text-sm">All methods return the data object directly (not wrapped). Errors throw.</p>
        <div className="space-y-2">
          {API_METHODS.map(({ method, returns, desc }) => (
            <div key={method} className="bento-cell px-4 py-3 space-y-1">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <code className="text-xs font-mono text-foreground/90">{method}</code>
                <code className="text-xs font-mono text-primary/70 shrink-0">→ {returns}</code>
              </div>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="client.marketplace — Marketplace Intents">
        <p className="text-sm">
          Marketplace write operations use a three-step flow: create intent → sign typed data (SNIP-12) → submit signature.
          These methods build the typed data payloads. Signing and on-chain execution are handled by your wallet provider (e.g. ChipiPay or Argent).
        </p>
        <div className="space-y-2">
          {MARKETPLACE_METHODS.map(({ method, desc }) => (
            <div key={method} className="bento-cell px-4 py-3 space-y-1">
              <code className="text-xs font-mono text-foreground/90">{method}</code>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
        <Code>{`// Full listing flow
const intent = await client.marketplace.createListingIntent({
  contract: "0x<collection>",
  tokenId:  "1",
  price:    "1000000",          // in token decimals (USDC = 6, ETH = 18)
  currency: "0x<usdc_address>",
  duration: 86400 * 7,          // 7 days in seconds
  standard: "ERC721",
});

// Sign with your wallet (SNIP-12 typed data)
const signature = await wallet.signTypedData(intent.typedData);

// Submit and get the created order
const order = await client.marketplace.submitIntentSignature(
  intent.orderHash,
  signature,
);
console.log(order.status); // "ACTIVE"`}</Code>
      </Section>

      <Section title="client.marketplace1155 — ERC-1155 Operations">
        <p className="text-sm">
          The <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">Medialane1155Module</code> handles
          multi-edition (ERC-1155) specific on-chain operations: partial fills, amount tracking,
          and batch transfers. Use <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">client.marketplace1155</code> for
          ERC-1155 collections; <code className="text-xs bg-muted px-1 py-0.5 rounded font-mono">client.marketplace</code> handles both standards
          for intent creation.
        </p>
      </Section>

      <Section title="Type Reference">
        <div className="space-y-2">
          {TYPES.map(({ name, desc }) => (
            <div key={name} className="bento-cell px-4 py-3 space-y-1">
              <code className="text-xs font-mono text-foreground/90">{name}</code>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
        <Code>{`import type {
  ApiToken, ApiCollection, ApiOrder, ApiOrderTokenMeta,
  ApiComment, ApiCollectionProfile, ApiCollectionSlugClaim,
  IpAttribute, IpNftMetadata, SupportedTokenSymbol, OrderStatus,
} from "@medialane/sdk";`}</Code>
      </Section>

      <div className="flex flex-wrap gap-4">
        <a
          href="https://www.npmjs.com/package/@medialane/sdk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          npm package <ExternalLink className="h-3.5 w-3.5" />
        </a>
        <Link href="/docs/api" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          API Reference <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <Link href="/docs/agents" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          AI Agent Guide <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

    </div>
  );
}
