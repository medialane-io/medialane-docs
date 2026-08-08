import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/docs";

export const metadata: Metadata = {
  title: "Creator Launchpad | Learn | Medialane",
  description: "Learn how to deploy collections, mint IP assets, and launch your creative work on Medialane.",
  openGraph: {
    title: "Creator Launchpad | Learn | Medialane",
    description: "Learn how to deploy collections, mint IP assets, and launch your creative work on Medialane.",
    url: "https://docs.medialane.io/learn/creator-launchpad",
  },
  twitter: {
    title: "Creator Launchpad | Learn | Medialane",
    description: "Learn how to deploy collections, mint IP assets, and launch your creative work on Medialane.",
  },
};

export default function LearnCreatorLaunchpadPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Creator Launchpad</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          On the Medialane Creator Launchpad you deploy your own NFT collection, mint
          individual IP assets, and bring your creative work onchain yourself, with no coding
          or prior blockchain experience.
        </p>
        <p className="text-sm text-muted-foreground">
          For gas sponsorship, marketplace fees, royalties, and creators-fund flow, see{" "}
          <Link href="/dev/fees" className="text-primary hover:underline">Fees &amp; Revenue</Link>.
        </p>
      </div>

      <div className="space-y-8">
        <Section title="Step 1: Create an Account">
          <p>
            Set up a passkey (Face ID, Touch ID, Windows Hello, or a hardware security key)
            on your device. Medialane generates a self-custody Starknet wallet sealed to
            that passkey automatically: gas-free setup, skipping seed phrases and browser
            extensions entirely. The key never leaves your device.
          </p>
        </Section>

        <Section title="Step 2: Deploy a Collection">
          <p>
            A collection is a smart contract on Starknet that groups related NFTs under
            a shared name, symbol, and identity. Think of it as your brand onchain:
            an art series, a music catalogue, a portfolio of photographs.
          </p>
          <p>
            Medialane supports two collection formats, each deployed from the Launchpad:
          </p>
          <div className="bento-cell px-4 py-3 space-y-1">
            <p className="text-sm font-semibold text-foreground">ERC-721 Collection</p>
            <p className="text-xs leading-relaxed">
              From <strong>Create → Collection</strong>, choose a name, symbol, and cover image.
              Medialane deploys an ERC-721 contract and registers it in the onchain registry.
              Each asset you mint into it will be a unique, 1-of-1 token with its own owner.
            </p>
          </div>
          <div className="bento-cell px-4 py-3 space-y-1">
            <p className="text-sm font-semibold text-foreground">IP Collection 1155: Multi-Edition</p>
            <p className="text-xs leading-relaxed">
              From <strong>Launchpad → IP Collection 1155 → Create Collection</strong>, deploy an
              ERC-1155 contract for multi-edition releases. Once deployed, the collection appears
              in your Launchpad with a <em>Mint</em> button, letting you mint new token editions
              directly into it, each with its own supply, metadata, and price. Best for music tracks,
              art series, or any creative work you want multiple people to own.
            </p>
          </div>
        </Section>

        <Section title="Step 3: Mint an IP Asset">
          <p>
            From <strong className="text-foreground">Create → Asset</strong>, upload your
            file (image, audio, video, or document), fill in the title and description,
            select the collection, and define the programmable license terms:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>License type (All Rights Reserved, Creative Commons, Custom)</li>
            <li>Commercial use permissions</li>
            <li>Derivative work rules</li>
            <li>AI training policy</li>
            <li>Geographic scope</li>
          </ul>
          <p>
            Your file is uploaded to IPFS via Pinata, giving it a permanent content
            address. The metadata JSON, including your license terms, is also stored
            on IPFS and linked to the NFT onchain.
          </p>
        </Section>

        <Section title="Step 4: List or Hold">
          <p>
            Once minted, your asset appears in your Portfolio. You can hold it as proof
            of ownership, list it for sale at a fixed price, or receive offers from
            interested collectors directly through the platform.
          </p>
        </Section>

        <Section title="Frictionless, Gasless Experience">
          <p>
            On <strong className="text-foreground">medialane.io</strong>, everything is
            frictionless: wallet setup, minting, listing, and accepting offers are all
            gas-sponsored, so you never need STRK or ETH in your wallet to use the platform.
            On the wallet-sovereign Starknet app, gas sponsorship runs through a separate
            mechanism (AVNU) that may or may not be active at any given time, and real
            transactions there can cost real gas.
          </p>
          <p>
            Sponsorship applies to normal creator workflows and may be limited by abuse
            controls, unsupported flows, or future DAO policy. See{" "}
            <Link href="/dev/fees" className="text-primary hover:underline">Fees &amp; Revenue</Link>{" "}
            for the canonical fee model.
          </p>
        </Section>

        <Section title="Launchpad Services">
          <p>
            Beyond collections and individual assets, creators reach a growing suite of
            onchain services through the Launchpad. Each service has a stable ID used by the
            protocol and SDK:
          </p>
          <div className="space-y-2">
            {[
              { id: "mip-erc721", name: "IP Asset (ERC-721)", desc: "Single-edition IP assets: 1-of-1 tokens with their own owner and license terms." },
              { id: "mip-erc1155", name: "IP Collection 1155", desc: "Multi-edition ERC-1155 collections. Multiple collectors own the same work." },
              { id: "pop-protocol", name: "POP Protocol", desc: "Issue soulbound credentials for events, bootcamps, and milestones." },
              { id: "drop-collection", name: "Collection Drop", desc: "Launch a fixed-supply ERC-721 drop with a timed mint window and optional allowlist." },
              { id: "ip-tickets", name: "IP Tickets", desc: "Create verifiable on-chain tickets with their own supply and validity window, mint them to your audience, trade them like any collection." },
              { id: "ip-club", name: "IP Club", desc: "Run a membership club with an onchain NFT membership card." },
              { id: "ip-sponsorship", name: "IP Sponsorship", desc: "Sell, or propose, a direct-settlement sponsorship license, no escrow." },
              { id: "creator-coin", name: "Creator Coin", desc: "Launch your own fixed-supply coin with permanently locked liquidity, tradeable on a public pool." },
            ].map(({ id, name, desc }) => (
              <div key={id} className="bento-cell px-4 py-3 flex items-start gap-3">
                <span className="font-mono text-xs bg-primary/10 text-primary px-2 py-1 rounded-md shrink-0 mt-0.5">{id}</span>
                <div className="space-y-0.5">
                  <p className="text-sm font-semibold text-foreground">{name}</p>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p>
            All services are permissionless, no approval required. Your contract is
            deployed directly to Starknet mainnet, owned by your wallet. See{" "}
            <Link href="/learn/services" className="text-primary hover:underline">Services</Link>{" "}
            for the full registry and capability set.
          </p>
        </Section>
      </div>
    </div>
  );
}
