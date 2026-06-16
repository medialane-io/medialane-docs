/**
 * Canonical Medialane contract addresses on Starknet mainnet.
 *
 * Single source for the Contracts (`/dev/contracts`) and Protocol
 * (`/dev/protocol`) reference pages — render from here, never re-list
 * addresses inline.
 *
 * Upstream source of truth is `@medialane/sdk` `src/constants.ts`. This repo
 * pins an old SDK, so the addresses are mirrored here as literals; after any
 * contract redeploy, reconcile this file against the SDK constants.
 */

export type ContractCategory = "Marketplace" | "Collections & Launchpad";

export interface ContractInfo {
  name: string;
  address: string;
  category: ContractCategory;
  desc: string;
}

export const CONTRACTS: ContractInfo[] = [
  {
    category: "Marketplace",
    name: "Medialane721 — Marketplace Venue (ERC-721)",
    address: "0x069cf5391077e3ebdd9cb6aebf90ed530d29f0d6aa34a43f5afae938c0fb565e",
    desc: "Listing, offer, fulfillment, and cancellation venue for standard (ERC-721) NFTs. Orders are SNIP-12 typed data (domain version 4); only the listing/offer and cancellation are signed — fulfillment is an unsigned call by the buyer. Royalties are paid on-chain per EIP-2981, capped by a royalty_max_bps the signer agrees to. A per-offerer counter enables bulk cancellation. Atomic settlement with a reentrancy guard and payment-before-delivery ordering. Deployed 2026-05-31.",
  },
  {
    category: "Marketplace",
    name: "Medialane1155 — Marketplace Venue (ERC-1155)",
    address: "0x040cd7b3e73bb3c892166e34bdc01d1797f97ecbc356c23f1cf38033cacf0077",
    desc: "Multi-edition trading venue for ERC-1155 assets. Same redesigned order protocol as Medialane721 (SNIP-12 domain version 3), keeping the single-amount order shape while preserving edition quantities — a single listing can be filled by multiple buyers across transactions. On-chain EIP-2981 royalties, per-offerer counter, unsigned fulfillment, reentrancy-guarded settlement. Deployed 2026-05-31.",
  },
  {
    category: "Marketplace",
    name: "NFTComments",
    address: "0x02cdac70c94447189af0389dfea63f4d5e4154ea8a563de288a5ab1c39e37843",
    desc: "Permissionless on-chain comment contract. Any wallet can post a comment on any token. Comments are permanent, censorship-resistant, and indexed by the Medialane indexer.",
  },
  {
    category: "Collections & Launchpad",
    name: "MIP IPCollection Registry v0.3.0 (ERC-721 Factory)",
    address: "0x0322cb7119955e01ac778d40976eb3ba50540bb0899f812d612f9c7e63e49fd2",
    desc: "Factory for deploying ERC-721 IP NFT collections. Each deploy_collection() call deploys a new ERC-721 contract, assigns a unique numeric collectionId, and emits CollectionDeployed. v0.3.0 deployed 2026-05-22.",
  },
  {
    category: "Collections & Launchpad",
    name: "IP-Programmable ERC-1155 Factory v0.2.0",
    address: "0x067064adcaaed61e17bf50ea802ea6482336126aec5b4d032b4ff8fbb5009131",
    desc: "Factory for deploying ERC-1155 multi-edition collections with programmable IP traits at mint time. Each collection is a separate contract owned by the creator. Emits CollectionDeployed with contract address, name, symbol, and base_uri. v0.2.0 deployed 2026-05-22.",
  },
  {
    category: "Collections & Launchpad",
    name: "Collection Drop Factory",
    address: "0x03587f42e29daee1b193f6cf83bf8627908ed6632d0d83fcb26225c50547d800",
    desc: "Factory for timed NFT drop campaigns. Enforces supply caps, mint windows, per-wallet limits, allowlists, and mint prices entirely on-chain. No admin can override these parameters after deploy.",
  },
  {
    category: "Collections & Launchpad",
    name: "POP Protocol Factory",
    address: "0x00b32c34b427d8f346b5843ada6a37bd3368d879fc752cd52b68a87287f60111",
    desc: "Factory for Proof-of-Participation campaigns. Each campaign deploys a soulbound (non-transferable) ERC-721 credential contract. Credentials are claimable by eligible wallets and permanently on-chain.",
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
