import type { Metadata } from "next";
import { ExternalLink, History } from "lucide-react";

export const metadata: Metadata = {
  title: "Changelog | Medialane Docs",
  description: "Protocol, SDK, API, governance, and documentation changes that affect Medialane users and builders.",
  openGraph: {
    title: "Changelog | Medialane Docs",
    description: "Protocol, SDK, API, governance, and documentation changes that affect Medialane users and builders.",
    url: "https://docs.medialane.io/dev/changelog",
  },
  twitter: {
    title: "Changelog | Medialane Docs",
    description: "Protocol, SDK, API, governance, and documentation changes that affect Medialane users and builders.",
  },
};

const CHANGES = [
  {
    date: "2026-06-13",
    title: "Trade any coin both ways + the top Starknet memecoins, live",
    items: [
      "Buy and sell on every coin page: a Buy/Sell toggle lets you swap into or out of any coin in one place, showing the live exchange rate, the minimum you'll receive, the price impact, and adjustable price protection. Gas is sponsored; trades settle on the open Ekubo market.",
      "Coins now have their own home and a plain-language page. Each coin lives at its own address (/coins/…) with a page that explains what a Creator Coin is in three guarantees — you own it (it stays in your wallet, never held by us), the price is set by the open market, and it's safe by design (the trading funds can't be pulled and no extra coins can be minted) — each one verifiable on the block explorer in a tap.",
      "The biggest Starknet memecoins are now on Medialane: STARKNET BROTHER, SISTER, Slinky, Brother Eli (SLAY), SCHIZODIO, and Pain au lait (PAL) are live to trade. Every coin is verified on-chain as a genuine Unruggable launch before it's listed — never an address taken on trust.",
      "Bringing your own coin is friendlier: already launched on Starknet? Connect your wallet right from the claim page, paste your contract, and it's team-reviewed before going live on the Coins page and your creator profile.",
      "A cleaner coin discovery grid: the Marketplace Tokens tab shows real coin identities (a logo, or the symbol's initials when there's no logo yet), consistent labels, and honest stats — no more misleading zeros where a figure isn't available yet.",
    ],
  },
  {
    date: "2026-06-12",
    title: "Document proof of authorship + one design system across both apps",
    items: [
      "Documents, Patents, Publications, and Software assets can now carry the work itself: upload a PDF or document (up to 20 MB) when creating the asset and it's pinned to IPFS as an immutable, timestamped copy — evidence of authorship under the Berne Convention, where protection exists from the moment a work is fixed. Asset pages show it as a “View document” card linking to the original file.",
      "Uploads got reliable and honest: images and documents now upload straight to IPFS via short-lived signed URLs (no more silent failures on larger files), a declined wallet signature says exactly that — it's a one-time, free sign-in signature, not a transaction — and a failed upload clears the preview instead of pretending a file is attached.",
      "Wallet integrity on the dApp: signatures and transactions now always come from the wallet you explicitly connected — a lingering session from another sign-in method can never sign on its behalf.",
      "Discover was rebuilt around exploration: Collections, market Activity, Community, and Creators are all horizontal carousels you can swipe through, with activity rendered as artwork cards instead of a list.",
      "Both apps now render the Launchpad, Discover, the homepage service strip, and the asset-page overview from one shared design system (@medialane/ui) — medialane.io and the dApp stay visually and functionally in lockstep, and improvements land on both at once.",
    ],
  },
  {
    date: "2026-06-11",
    title: "Creator Coin Launch Studio",
    items: [
      "Launching a Creator Coin is now a studio, not a form: a three-step flow (your coin / economics / review) with a live preview that builds the coin as you type \u2014 image, name, symbol, starting market cap, and your allocation split.",
      "Coins now carry a feature image and description. These live on the platform layer (the coin's profile \u2014 the contract stays a clean, standard ERC-20) and are editable anytime; they show on the Coins page, the coin's page, and your creator profile.",
      "Trustless coin ownership for profile edits: the indexer reads the launcher's address from the factory's on-chain CreatorCoinCreated event (launched coins renounce their owner by design), so only the real launcher can edit a coin's profile. Never derived from a request parameter.",
      "Collection list API responses now include profile image, display name, and description \u2014 discovery surfaces render platform-layer identity without extra requests.",
      "Resilience: app error screens auto-recover from stale-deploy chunk errors, and IPFS image uploads time out after 60s with a clear retry prompt instead of an endless spinner.",
    ],
  },
  {
    date: "2026-06-10",
    title: "Creator Coins live + the redesigned Launchpad",
    items: [
      "Creator Coins are live on both apps: launch a fixed-supply standard ERC-20 paired with permanently-locked Ekubo liquidity (audited unruggable.meme fork). Launch price is fixed at 0.01 quote/coin \u2014 supply sets the market cap; up to 10% creator allocation, funded by the creator at launch. Gasless with PIN/passkey on medialane.io; wallet-signed on the dApp.",
      "Coin discovery on the dApp: the /coins page and a marketplace NFTs | Tokens toggle list creator coins and claimed memecoins with live Ekubo prices, market cap, and holders. Already launched a coin elsewhere? Claim it \u2014 team-reviewed, then live on /coins and your profile.",
      "The Launchpad was redesigned around creators: services grouped by what you're making (Single Editions, Limited Editions, Creator Coins, Collection Drop, POP Protocol, Licensing & Remix, Claims), one plain-language sentence per card, and the whole card is the action. Shared across both apps from @medialane/ui.",
      "ERC-1155 Limited Editions v0.3.0: edition ids are now assigned on-chain (sequential from 1) and supply can be topped up later with add_supply. New ownerless factory at 0x0083543c\u2026.",
      "@medialane/sdk 0.34\u20130.36: ERC-1155 v3 service (mint_edition/add_supply), account-free creator-coin call builders + receipt parser, and the coin-launch math module (validation, allocation, buyback) \u2014 one source for every app.",
      "Fixed: paid Collection Drop mints on medialane.io had been silently failing since 2026-05-06 (a session whitelist gap); restored per the original audit's contingency.",
    ],
  },
  {
    date: "2026-06-01",
    title: "Permissionless remix and an independent Licensing service",
    items: [
      "Remixing is now fully permissionless: anyone can mint an attributed derivative of any asset — Medialane-native or external — without owning the parent or asking permission. The parent is linked on-chain; provenance, not permission, is what the protocol guarantees.",
      "The platform stays a neutral tool. It honors a creator's explicit \"Derivatives: Not Allowed\" declaration at the application layer only (it doesn't offer a direct remix and points you to Licensing instead) — never on-chain. The contract is always permissionless; assets are surfaced and flagged via reports, never blocked.",
      "Licensing is now its own service with a dedicated flow, separate from Remix. Propose license terms and a fee to a creator; if they accept, the licensed derivative is minted and listed for you. Use it to pay or credit the original creator, get a formal commercial license, or remix a work marked no-derivatives.",
      "Asset pages now show Remix and License as independent actions, and the remix flow is a clean mint (no bundled listing step).",
    ],
  },
  {
    date: "2026-06-01",
    title: "Marketplace protocol upgrade, intent contract, and streamlined onboarding",
    items: [
      "Marketplace upgraded to the redesigned venues (@medialane/sdk 0.26.0), deployed as new immutable contracts on 2026-05-31 — Medialane721 (0x069cf539…) and Medialane1155 (0x040cd7b3…). Orders use a single-amount schema with on-chain EIP-2981 royalties capped by a seller-agreed limit, plus a per-offerer counter; fulfilment is now unsigned — the buyer is the fulfiller, so buying takes one signature less. SNIP-12 domain v4 (ERC-721) / v3 (ERC-1155).",
      "@medialane/sdk 0.27.0: every create-intent response carries a requiresSignature flag, modelled as a discriminated union (ApiIntentCreated) — signed intents (listing, offer, cancel) return typedData to sign; unsigned intents (fulfil, mint, create-collection) return executable calls directly. The type makes reading the wrong field a compile error.",
      "Onboarding streamlined: sign up or sign in, secure your account once (passkey or PIN), then continue to exactly where you were headed. One flow across the whole platform — sign-ups from a campaign or mint page always return to that page, no dead ends.",
    ],
  },
  {
    date: "2026-05-27",
    title: "Onboarding audit, wallet-connect overhaul, gated-content architecture fix",
    items: [
      "Wallet onboarding restored on medialane-dapp. A stale client-side guard introduced during the 2026-05-24 BFF-proxy migration short-circuited the registration hook in the browser, so no new Account / Wallet / Identity rows were written between 2026-05-24 and 2026-05-27. The guard now only checks for a connected address; the proxy injects the server-side API key as designed.",
      "Counterfactual Starknet wallets (Ready, Argent, Braavos smart accounts whose contract isn't deployed until first tx) now get a typed 400 response from POST /v1/auth/siws/verify with message \"Check if your wallet is deployed on Starknet.\" instead of a generic invalid-signature 401 — the dapp surfaces this directly in the upload toast.",
      "Gated content authorization now reads on-chain balance_of (ERC-721) / balance_of_batch (ERC-1155) instead of the indexer's TokenBalance cache, closing the 07-identity §V violation that had caused prior holder lock-outs when the indexer was momentarily behind. On RPC failure the route returns 503 — it never silently falls back to stale DB state.",
      "Account model carries the chain field end-to-end: backend POST /v1/users/me accepts an optional chain (currently STARKNET-only in v1, validated at the route), the SDK exports a typed ApiChain union and a chain option on upsertMyWallet, and medialane-io passes it explicitly on every call. The chain field is carried through the v1 API surface without changing today's behavior.",
      "medialane-dapp wallet-connect consolidated: one shared <ConnectWallet /> dialog (Ready / Braavos / Cartridge / Email & Social) replaces the legacy starknetkit-modal path on every launchpad page and reusable mint button. Removes the silent-pick-Braavos failure mode where the rebranded Ready extension's wallet.id wasn't recognised.",
      "medialane-dapp launchpad service-card copy synced with medialane-io. External-link defaults: ERC-1155 create-collection now defaults to the creator's medialane.io profile (parity with ERC-721); ERC-1155 mint-asset defaults the external_url to the collection page rather than the unminted asset URL.",
      "medialane-docs migrated to the cmdk command palette navigation (matches medialane-io / medialane-dapp). About page wrapped in the shared page container; the dapp's stale /learn and /docs redirects now point to docs.medialane.io.",
      "SDK 0.25.0 published.",
    ],
  },
  {
    date: "2026-05-26",
    title: "Backend + SDK hardening cycle complete",
    items: [
      "P0 correctness fixes: webhook fanout no longer returns undefined for ERC-1155 transfers; the indexer tick can no longer stall on a destructured undefined payload.",
      "P1 atomicity: FREE-tier rate limit collapsed to one atomic Postgres round-trip; intent checkout batch lookup + parallel build; SSRF guard now blocks integer/hex/octal IPv4 hostnames.",
      "P2 hygiene: SIWS tokens reject future or missing iat; the legacy plain-SHA-256 ApiKey fallback was removed (HMAC_KEY now required); metadata upload returns 400 (not 500) on malformed JSON.",
      "BFF proxy auth audit: server-only API key via /api/proxy on medialane.io, plus method + path allowlist with audit-driven scope (GET wildcard for /v1/*, explicit POST/PATCH enumeration).",
      "47 focused unit tests added to medialane-backend; TypeScript strict-mode errors driven from 8 to 0 across the cycle.",
      "SDK 0.21–0.23: ApiOrder.hasActiveCounterOffer + parentOrderHash, OrderStatus.COUNTER_OFFERED removed from the union (replaced by the boolean flag).",
    ],
  },
  {
    date: "2026-05-22",
    title: "Collection contracts v0.2.0 / v0.3.0 deployed",
    items: [
      "MIP IPCollection registry v0.3.0 (ERC-721 factory) deployed at 0x0322cb71… on Starknet mainnet.",
      "IP-Programmable ERC-1155 factory v0.2.0 deployed at 0x067064ad… — programmable IP traits at mint time.",
      "Collection.service is now NOT NULL at the database level — fixes a class of silent classification bugs that produced 108 mislabeled rows in production.",
      "TokenStandard.UNKNOWN removed from the enum — standard is now ERC721 or ERC1155, no phantom-state defensive code allowed.",
      "Service IDs are typed against the SDK ServiceId union (≥ 0.20.0); typos like pop_protocol fail at compile time.",
    ],
  },
  {
    date: "2026-05-20",
    title: "Account model, atomic execution, and creators' fund fee",
    items: [
      "Account model redesign shipped: the legacy User table is replaced by Account + Wallet + Identity + AccountProfile. The Wallet signs, the Account carries reputation, the Profile carries the public face — conflating them is now a structural impossibility.",
      "ChipiPay transaction execution moved to TxBuilder.sendSponsored() — atomic batches. One call reverting now reverts the whole transaction (the previous hosted relayer swallowed per-call reverts).",
      "Creators' fund platform fee shipped — 1% applied at the platform layer only, never in any contract. Fee is computed by a single SDK builder (buildFeeCall) and spliced at exactly seven call sites; activation is env-only and fail-safe.",
      "Per-app API keys for attribution + isolation (ApiKey.appSource).",
    ],
  },
  {
    date: "2026-05-05",
    title: "Docs and DAO content aligned",
    items: [
      "Updated docs to treat medialane.org as the canonical source for DAO, MDLN, treasury, Snapshot, and constitution facts.",
      "Aligned MDLN copy with the live fixed 21,000,000 supply and DAO-controlled distribution model.",
      "Clarified that the 1% marketplace fee flows to the DAO treasury and that Creator's Airdrop allocations require MDLN holder approval.",
      "Replaced stale API examples with https://api.medialane.io.",
      "Updated protocol docs to reference current marketplace v2, POP, and Drop factory addresses.",
      "Reinforced the platform positioning: creator capital markets, not generic IP/NFT marketplace framing.",
    ],
  },
  {
    date: "2026-05-01",
    title: "Creator's Airdrop governance model",
    items: [
      "Creator's Airdrop documented as a DAO-governed allocation option.",
      "Participation tiers and milestone cycles documented for future DAO-approved distributions.",
      "Revenue allocation language updated to avoid implying automatic payouts.",
    ],
  },
  {
    date: "2026-04-07",
    title: "Medialane DAO constitution ratified",
    items: [
      "Medialane DAO constitution and governance charter ratified.",
      "Snapshot governance identified as medialane.eth.",
      "DAO hub established at medialane.org for canonical governance and MDLN information.",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <div className="space-y-10 max-w-3xl">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <History className="h-5 w-5 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/70">Changelog</span>
        </div>
        <h2 className="text-2xl font-bold">Documentation Changelog</h2>
        <p className="text-muted-foreground leading-relaxed">
          High-signal changes that affect how users, builders, and DAO members understand Medialane.
          For canonical DAO and token records, use{" "}
          <a href="https://medialane.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            medialane.org <ExternalLink className="inline h-3 w-3" />
          </a>.
        </p>
      </div>

      <div className="space-y-5">
        {CHANGES.map(({ date, title, items }) => (
          <div key={`${date}-${title}`} className="bento-cell p-5 space-y-3">
            <div className="space-y-1">
              <p className="text-xs font-mono text-primary/70">{date}</p>
              <h3 className="font-semibold">{title}</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              {items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>
  );
}
