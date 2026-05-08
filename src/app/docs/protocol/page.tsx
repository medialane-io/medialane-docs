import type { Metadata } from "next";
import { Network } from "lucide-react";

export const metadata: Metadata = {
  title: "Protocol | Medialane Docs",
  description: "Technical specification of the Medialane onchain protocol — SNIP-12 typed data signing, atomic swaps, ERC-2981 royalties, SNIP-9 session keys, indexer, and event model.",
  openGraph: {
    title: "Protocol | Medialane Docs",
    description: "Technical specification of the Medialane onchain protocol — SNIP-12 typed data signing, atomic swaps, ERC-2981 royalties, SNIP-9 session keys, indexer, and event model.",
    url: "https://docs.medialane.io/docs/protocol",
  },
  twitter: {
    title: "Protocol | Medialane Docs",
    description: "Technical specification of the Medialane onchain protocol — SNIP-12 typed data signing, atomic swaps, ERC-2981 royalties, SNIP-9 session keys, indexer, and event model.",
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

const EVENTS = [
  { name: "Transfer (ERC-721)", desc: "Single-token ownership transfer. Emitted on mint, sale, and manual transfer." },
  { name: "TransferSingle (ERC-1155)", desc: "Single-edition transfer with from, to, id, and value fields. Used for ERC-1155 balance tracking." },
  { name: "TransferBatch (ERC-1155)", desc: "Batch ERC-1155 transfer — multiple token IDs and values in one event." },
  { name: "OrderCreated", desc: "Emitted when a new listing or offer is activated on the marketplace contract." },
  { name: "OrderFulfilled", desc: "Emitted when a listing is purchased or an offer is accepted." },
  { name: "OrderCancelled", desc: "Emitted when an order is cancelled by the offerer." },
  { name: "CollectionDeployed", desc: "Emitted by factory contracts when a new collection, drop, or POP campaign is deployed." },
];

export default function DocsProtocolPage() {
  return (
    <div className="space-y-10">

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Network className="h-5 w-5 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">Protocol</span>
        </div>
        <h2 className="text-2xl font-bold">Protocol Specification</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          The Medialane protocol consists of immutable Starknet mainnet contracts and
          an off-chain indexer/API layer. This document covers the order lifecycle,
          atomic swap mechanics, event model, and indexer design.
        </p>
      </div>

      <div className="space-y-8">

        <Section title="Deployed Contracts (Starknet Mainnet)">
          <div className="space-y-2">
            {[
              { name: "Marketplace v3 (ERC-721)",   address: "0x004387e58d469f19332dd5d20846b10339ddc49ef208025ec7d5bef294a8daf3" },
              { name: "Marketplace v3 (ERC-1155)",  address: "0x035836932ba1d219e00b8e42cd9a433fb2b211a08edcaa8bae40232f335f777d" },
              { name: "NFTComments",                address: "0x024f97eb5abe659fb650bf162b5fc16501f8f3863a7369901ce6099462e62799" },
              { name: "Collection Registry",        address: "0x05c49ee5d3208a2c2e150fdd0c247d1195ed9ab54fa2d5dea7a633f39e4b205b" },
              { name: "ERC-1155 Collection Factory",address: "0x006b2dc7ca7c4f466bb4575ba043d934310f052074f849caf853a86bcb819fd6" },
              { name: "Collection Drop Factory",    address: "0x03587f42e29daee1b193f6cf83bf8627908ed6632d0d83fcb26225c50547d800" },
              { name: "POP Protocol Factory",       address: "0x00b32c34b427d8f346b5843ada6a37bd3368d879fc752cd52b68a87287f60111" },
            ].map(({ name, address }) => (
              <div key={name} className="bento-cell px-4 py-3 space-y-1">
                <p className="text-sm font-semibold text-foreground">{name}</p>
                <p className="font-mono text-xs text-primary/70 break-all">{address}</p>
              </div>
            ))}
          </div>
          <p className="text-xs">
            Indexer scans from block <code className="font-mono bg-muted px-1 py-0.5 rounded">9130000</code>.
            All contracts are immutable — no admin account, no upgrade path. See{" "}
            <a href="/docs/contracts" className="text-primary hover:underline">Contracts</a> for details.
          </p>
        </Section>

        <Section title="Order Lifecycle (SNIP-12 Typed Data)">
          <p>
            Marketplace orders are off-chain signed, on-chain enforced. The flow prevents
            signature replay, ensures order validity without a pending transaction, and
            allows gasless cancellation of unmatched orders.
          </p>
          <Code>{`1. Creator calls POST /v1/orders/intent/listing
   ← { typedData: { domain, types, primaryType, message }, orderHash }

2. Creator signs typedData with their Starknet account (SNIP-12)
   ← { r, s } signature

3. Creator calls POST /v1/orders/signature
   → { orderHash, signature }
   ← Order is now ACTIVE in the indexer

4. Buyer calls POST /v1/orders/intent/fulfill
   ← { calls: [ approve_erc20, fulfill_order ] }   ← atomic

5. Buyer submits calls via their wallet (ChipiPay / Argent / Braavos)
   ← OrderFulfilled event emitted on-chain
   ← Royalties distributed automatically (ERC-2981)
   ← Order status → FULFILLED in indexer (~6s)`}</Code>
        </Section>

        <Section title="SNIP-12 Typed Data Signing">
          <p>
            SNIP-12 is Starknet&apos;s structured typed-data signing standard — the equivalent
            of Ethereum&apos;s EIP-712. Medialane uses it so that marketplace orders are
            human-readable when presented in a wallet UI, and so the on-chain contract
            can verify the signature without trusting any off-chain intermediary.
          </p>
          <p>
            A SNIP-12 message has three parts: a <strong className="text-foreground">domain separator</strong> that
            identifies the application, a <strong className="text-foreground">type definition</strong> that
            describes the message structure, and the <strong className="text-foreground">message itself</strong>.
            All three are hashed together to produce a unique digest that the signer&apos;s
            private key signs.
          </p>
          <Code>{`// Domain separator — ties the signature to Medialane specifically
{
  "name":     "Medialane",
  "version":  "1",
  "revision": "1",     // SNIP-12 revision, not semver
  "chainId":  "SN_MAIN"
}

// Order type definition
types: {
  Order: [
    { name: "offerer",      type: "ContractAddress" },
    { name: "nftContract",  type: "ContractAddress" },
    { name: "tokenId",      type: "u256"            },
    { name: "price",        type: "u256"            },
    { name: "currency",     type: "ContractAddress" },
    { name: "amount",       type: "u128"            }, // ERC-1155 quantity
    { name: "salt",         type: "felt252"         }, // replay protection
    { name: "endTime",      type: "u64"             },
    { name: "orderType",    type: "felt252"         }, // LISTING | OFFER
    { name: "itemType",     type: "felt252"         }, // ERC721 | ERC1155
  ]
}`}</Code>
          <Code>{`// Message hash derivation (Poseidon)
message_hash = h(
  "StarkNet Message",  // prefix
  domain_hash,         // h(name, version, revision, chainId)
  sender_address,
  type_hash,           // h(type_string)
  message_content_hash // h(all field values)
)

// Signed on the client using starknet.js
const sig = await account.signMessage(typedData)
// → { r: "0x...", s: "0x..." }

// Verified on-chain by the marketplace contract
is_valid_signature(offerer, message_hash, [r, s])
// uses account.is_valid_signature() — works with any Starknet account type`}</Code>
          <p>
            The <code className="font-mono bg-muted px-1 py-0.5 rounded text-xs">salt</code> field
            is a random felt generated server-side for each intent. It makes every order hash unique
            even if all other fields are identical, preventing signature replay across separate
            listing attempts. The <code className="font-mono bg-muted px-1 py-0.5 rounded text-xs">endTime</code> field
            encodes expiry — the marketplace contract rejects orders past their end time at
            the Cairo level.
          </p>
        </Section>

        <Section title="Atomic Swap — No Escrow, No Custody">
          <p>
            Every purchase executes as a pair of calls submitted atomically in a single
            Starknet transaction. Either both succeed or both revert — there is no
            intermediate state where the buyer&apos;s funds are held by the marketplace contract.
          </p>
          <Code>{`// Atomic call batch (submitted by buyer's wallet):
[
  {
    to:       "0x<erc20_token>",           // e.g. USDC contract
    selector: "approve",
    calldata: [marketplace_contract, amount],
  },
  {
    to:       "0x<marketplace_contract>",
    selector: "fulfill_order",
    calldata: [orderHash, buyer_address],
  }
]`}</Code>
          <p>
            The marketplace contract calls <code className="font-mono bg-muted px-1 py-0.5 rounded text-xs">transfer_from</code> on the
            ERC-20 after verifying the order signature. If the seller is no longer the token owner
            or the approve fails for any reason, the entire transaction reverts.
          </p>
        </Section>

        <Section title="ERC-1155 Partial Fills">
          <p>
            ERC-1155 listings specify an <code className="font-mono bg-muted px-1 py-0.5 rounded text-xs">amount</code> (number of editions for sale)
            and a unit <code className="font-mono bg-muted px-1 py-0.5 rounded text-xs">price</code>.
            Each fulfillment decrements <code className="font-mono bg-muted px-1 py-0.5 rounded text-xs">remainingAmount</code>.
            The order stays <code className="font-mono bg-muted px-1 py-0.5 rounded text-xs">ACTIVE</code> until{" "}
            <code className="font-mono bg-muted px-1 py-0.5 rounded text-xs">remainingAmount == 0</code>,
            then transitions to <code className="font-mono bg-muted px-1 py-0.5 rounded text-xs">FULFILLED</code>.
          </p>
          <Code>{`// ERC-1155 order state
{
  "standard": "ERC1155",
  "amount": "10",           // original listing quantity
  "remainingAmount": "7",   // still available
  "status": "ACTIVE",
  "pricePerUnit": "1000000" // USDC, 6 decimals
}`}</Code>
        </Section>

        <Section title="Indexer & Event Model">
          <p>
            The off-chain indexer polls Starknet RPC for new blocks (~6s cadence),
            parses contract events, and writes to a PostgreSQL database that backs
            the REST API. The indexer is the only write path to the API state — it
            does not accept user-submitted transaction data.
          </p>
          <div className="space-y-2">
            {EVENTS.map(({ name, desc }) => (
              <div key={name} className="bento-cell px-4 py-2.5 flex items-start gap-3">
                <code className="text-xs font-mono text-foreground/80 shrink-0 mt-0.5 w-52">{name}</code>
                <span className="text-xs text-muted-foreground">{desc}</span>
              </div>
            ))}
          </div>
          <p className="text-xs">
            ERC-1155 balance tracking uses <code className="font-mono bg-muted px-1 py-0.5 rounded">TransferSingle</code> and{" "}
            <code className="font-mono bg-muted px-1 py-0.5 rounded">TransferBatch</code> exclusively.
            The <code className="font-mono bg-muted px-1 py-0.5 rounded">Transfer</code> event is deduplicated at ingestion time
            to prevent double-counting on contracts that emit both event types.
          </p>
        </Section>

        <Section title="Session Keys (SNIP-9)">
          <p>
            The Medialane app uses SNIP-9 session keys to enable gasless, PIN-authorized
            transactions without exposing the account&apos;s master private key on every action.
          </p>
          <Code>{`// Session key scope (registered on-chain)
{
  validUntil: now + 6 * 60 * 60,          // 6 hours
  allowedMethods: [
    { contractAddress: marketplace_721,  selector: "create_order" },
    { contractAddress: marketplace_721,  selector: "cancel_order" },
    { contractAddress: marketplace_1155, selector: "create_order" },
    { contractAddress: marketplace_1155, selector: "cancel_order" },
    { contractAddress: nftcomments,      selector: "post_comment" },
    // approve and set_approval_for_all are intentionally excluded
  ]
}`}</Code>
          <p>
            Session key approval and sponsored gas are managed by ChipiPay on the
            consumer app. The dApp (app.medialane.io) accepts any Starknet wallet
            and uses standard account signing instead.
          </p>
        </Section>

      </div>
    </div>
  );
}
