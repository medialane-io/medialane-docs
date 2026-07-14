/**
 * Canonical Medialane contract addresses.
 *
 * Chain is a first-class dimension of the protocol — every entry is
 * chain-qualified, never assumed (see
 * `medialane-core/docs/architecture/08-chain-sovereignty.md`). Today's
 * deployments live on Starknet (the chain currently filling the
 * prover/trust-anchor role); the registry is structured so peer chains can be
 * added without restructuring. Do not publish chain sequencing/roadmap.
 *
 * Single source for the Contracts (`/dev/contracts`) and Protocol
 * (`/dev/protocol`) reference pages — render from here, never re-list
 * addresses inline.
 *
 * Upstream source of truth is `@medialane/sdk` `src/chains.ts` (`getCoordinates("STARKNET")`).
 * This repo pins an old SDK, so the addresses are mirrored here as literals;
 * after any contract redeploy, reconcile this file against the SDK constants.
 * Last reconciled against SDK 0.51.0 (2026-07-06).
 */

export type ContractCategory = "Marketplace" | "Collections & Launchpad" | "Creator Coin";

export interface ContractInfo {
  name: string;
  /** Chain the contract is deployed on (first-class, never assumed). */
  chain: string;
  address: string;
  category: ContractCategory;
  desc: string;
}

export const CONTRACTS: ContractInfo[] = [
  {
    category: "Marketplace",
    name: "Medialane721 — Marketplace Venue (ERC-721)",
    chain: "Starknet",
    address: "0x03eda9a2b6ad90845a43591bac8083ebaf677d51fdf20f503b2c01889e3131fc",
    desc: "Listing, offer, fulfillment, and cancellation venue for standard (ERC-721) NFTs. Orders are SNIP-12 typed data (domain version 5); only the listing/offer and cancellation are signed — fulfillment is an unsigned call by the buyer. Royalties are paid on-chain per EIP-2981, capped by a royalty_max_bps the signer agrees to. A per-offerer counter enables bulk cancellation. Atomic settlement with a reentrancy guard and payment-before-delivery ordering. Redeployed 2026-06-26 (core protocol redeploy; supersedes the 2026-05-31 venue).",
  },
  {
    category: "Marketplace",
    name: "Medialane1155 — Marketplace Venue (ERC-1155)",
    chain: "Starknet",
    address: "0x07c4ce1c19ea48cc11135ed22b19ff745f5aec508c3828593002e4f76fdb1b38",
    desc: "Multi-edition trading venue for ERC-1155 assets. Same redesigned order protocol as Medialane721 (SNIP-12 domain version 4), keeping the single-amount order shape while preserving edition quantities — a single listing can be filled by multiple buyers across transactions. On-chain EIP-2981 royalties, per-offerer counter, unsigned fulfillment, reentrancy-guarded settlement. Redeployed 2026-06-26 (core protocol redeploy; supersedes the 2026-05-31 venue).",
  },
  {
    category: "Marketplace",
    name: "NFTComments",
    chain: "Starknet",
    address: "0x02cdac70c94447189af0389dfea63f4d5e4154ea8a563de288a5ab1c39e37843",
    desc: "Permissionless on-chain comment contract. Any wallet can post a comment on any token. Comments are permanent, censorship-resistant, and indexed by the Medialane indexer.",
  },
  {
    category: "Collections & Launchpad",
    name: "MIP IPCollection Registry (ERC-721 Factory)",
    chain: "Starknet",
    address: "0x0225c3ae09506b8d97adc39649ca740dad5aac195b7f5f0441cc1852947acaea",
    desc: "Immutable registry + factory for ERC-721 IP collections. Each create_collection() call deploys a dedicated immutable IPNft ERC-721 contract, assigns a sequential numeric collectionId, and emits CollectionCreated. Tokens carry permanent provenance (original creator + registration timestamp) and per-token EIP-2981 royalties (receiver = creator, set once at mint, immutable). Redeployed 2026-06-26 (core protocol redeploy; supersedes the MIP v0.4.0 registry).",
  },
  {
    category: "Collections & Launchpad",
    name: "IP-Programmable ERC-1155 Factory",
    chain: "Starknet",
    address: "0x015368976d46fae5bfa1c58600f641d5aa5dbbf53ebc6b78aa3922194aad3551",
    desc: "Factory for deploying ERC-1155 multi-edition collections with programmable IP traits at mint time. Each collection is a separate contract owned by the creator. Edition ids are assigned sequentially on-chain. Redeployed 2026-06-26 (core protocol redeploy; supersedes the v0.3.0 factory).",
  },
  {
    category: "Collections & Launchpad",
    name: "Collection Drop Factory",
    chain: "Starknet",
    address: "0x03587f42e29daee1b193f6cf83bf8627908ed6632d0d83fcb26225c50547d800",
    desc: "Factory for timed NFT drop campaigns. Enforces supply caps, mint windows, per-wallet limits, allowlists, and mint prices entirely on-chain. No admin can override these parameters after deploy.",
  },
  {
    category: "Collections & Launchpad",
    name: "POP Protocol Factory",
    chain: "Starknet",
    address: "0x00b32c34b427d8f346b5843ada6a37bd3368d879fc752cd52b68a87287f60111",
    desc: "Factory for Proof-of-Participation campaigns. Each campaign deploys a soulbound (non-transferable) ERC-721 credential contract. Credentials are claimable by eligible wallets and permanently on-chain.",
  },
  {
    category: "Collections & Launchpad",
    name: "IP Tickets Factory",
    chain: "Starknet",
    address: "0x059802639b41e9c6449c3d557703e610ef639a91866dc1dd44216f9f37111ac5",
    desc: "Ownerless factory deploying one ERC-1155 tickets collection per creator — each ticket carries its own supply, validity window, and royalty, verifiable on-chain and tradeable like any asset. Deployed 2026-07-14.",
  },
  {
    category: "Collections & Launchpad",
    name: "IP Club Registry",
    chain: "Starknet",
    address: "0x00e189c619b6bb07d78973a149641c59c37eb0716f8584d7520bce12d303eede",
    desc: "Ownerless registry deploying one soulbound (non-transferable) IP Club NFT membership card per club. Deployed 2026-07-02.",
  },
  {
    category: "Collections & Launchpad",
    name: "IP Sponsorship",
    chain: "Starknet",
    address: "0x044d9b9c3bb29b94685b0a3fe27a5e2dfa30a3637ab55979c718ebcd3268bc2f",
    desc: "Direct-settlement sponsorship bidding — offers, bids, and license validity, no escrow. Deployed 2026-07-02.",
  },
  {
    category: "Creator Coin",
    name: "Creator Coin Factory",
    chain: "Starknet",
    address: "0x50fa807b5274079fb19374673d7bab6d2dc3af7e1032ea43eb6e44bcbde4c3c",
    desc: "Deploys fixed-supply standard ERC-20 Creator Coins and launches them on Ekubo. Faithful fork of unruggable.meme, Ekubo-only. Ownership is renounced at launch. Trades on external Ekubo — not a Medialane venue; Medialane settles no coin trades. Deployed mainnet 2026-06-04.",
  },
  {
    category: "Creator Coin",
    name: "EkuboLauncher",
    chain: "Starknet",
    address: "0x4f7fceb5ac10f12f9544a09580592e5bdf1b7f04f48765eecf12286d8ccb7b4",
    desc: "Permanently locks each Creator Coin's liquidity position on Ekubo at launch.",
  },
];

export interface ContractGroup {
  category: ContractCategory;
  items: ContractInfo[];
}

/** `CONTRACTS` grouped by category, preserving first-seen category order. */
export const CONTRACTS_BY_CATEGORY: ContractGroup[] = CONTRACTS.reduce<ContractGroup[]>(
  (groups, contract) => {
    const group = groups.find((g) => g.category === contract.category);
    if (group) group.items.push(contract);
    else groups.push({ category: contract.category, items: [contract] });
    return groups;
  },
  [],
);
