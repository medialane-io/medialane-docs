import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/docs";

export const metadata: Metadata = {
  alternates: { canonical: "https://docs.medialane.io/learn/creator-launchpad" },
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

const FLOWS = [
  { name: "IP Asset", desc: "Deploy your own collection and mint 1-of-1 IP assets, each with its own license terms.", href: "#ip-assets" },
  { name: "IP Collection 1155", desc: "Multi-edition releases: mint editions into an ERC-1155 collection, each with its own supply, metadata, and price.", href: "/learn/ip-collection-1155" },
  { name: "Collection Drop", desc: "Launch a fixed-supply drop with a timed mint window and an optional allowlist.", href: "/learn/collection-drop" },
  { name: "POP Protocol", desc: "Issue soulbound proof-of-participation credentials for events, communities, and milestones.", href: "/learn/pop-protocol" },
  { name: "IP Tickets", desc: "Create verifiable on-chain tickets with their own supply and validity window, and mint them to your audience.", href: "/learn/ip-tickets" },
  { name: "IP Club", desc: "Run a membership club with tiered on-chain membership cards.", href: "/learn/ip-club" },
  { name: "IP Sponsorship", desc: "Offer or propose a sponsorship license that settles directly between the two sides.", href: "/learn/ip-sponsorship" },
  { name: "Creator Coin", desc: "Launch your own fixed-supply coin with permanently locked liquidity, or claim one you already launched.", href: "/learn/creator-coin" },
];

const RUNS = [
  { name: "Data Tokenization", desc: "Register a whole catalog in one run, with license terms attached to every item.", href: "https://portal.medialane.io/services/data-tokenization" },
  { name: "IP Ticketing", desc: "Issue tickets with their own supply and validity window to a guest list.", href: "https://portal.medialane.io/services/tickets" },
  { name: "Certificate Emission", desc: "Issue non-transferable certificates to a list of recipients.", href: "https://portal.medialane.io/services/certificates" },
];

function FlowCard({ name, desc, href }: { name: string; desc: string; href: string }) {
  const external = href.startsWith("http");
  return (
    <div className="bento-cell px-4 py-3 space-y-1">
      <p className="text-base font-semibold text-foreground">{name}</p>
      <p className="text-base text-muted-foreground">{desc}</p>
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
          Open on the portal →
        </a>
      ) : (
        <Link href={href} className="text-sm text-primary hover:underline">
          {href.startsWith("#") ? "See the steps below →" : "Learn more →"}
        </Link>
      )}
    </div>
  );
}

export default function LearnCreatorLaunchpadPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Creator Launchpad</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          The Launchpad is where you create and release something new. Each flow is built for a
          different kind of work, so you start from the one that fits: a collection, a drop,
          tickets, credentials, a coin, and more. No coding or prior blockchain experience is
          needed.
        </p>
        <p className="text-base text-muted-foreground">
          For gas sponsorship, marketplace fees, royalties, and creators-fund flow, see{" "}
          <Link href="/dev/fees" className="text-primary hover:underline">Fees &amp; Revenue</Link>.
        </p>
      </div>

      <div className="space-y-8">
        <Section title="Choose a flow">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {FLOWS.map((flow) => (
              <FlowCard key={flow.name} {...flow} />
            ))}
          </div>
          <p>
            Every flow is permissionless, with no approval required. Your contract is deployed
            directly to Starknet mainnet, owned by your wallet. See{" "}
            <Link href="/learn/services" className="text-primary hover:underline">Services</Link>{" "}
            for the full registry and capability set.
          </p>
        </Section>

        <Section title="Runs for lists of people">
          <p>
            Some flows work from a list: your catalog items, your guests, or your recipients.
            You prepare the list once and the Launchpad issues everything in batches.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {RUNS.map((flow) => (
              <FlowCard key={flow.name} {...flow} />
            ))}
          </div>
        </Section>

        <div id="ip-assets" className="scroll-mt-24 space-y-8">
          <Section title="IP Asset: from collection to market">
            <h3 className="text-lg font-semibold text-foreground">Create an account</h3>
            <p>
              Set up a passkey (Face ID, Touch ID, Windows Hello, or a hardware security key)
              on your device. Medialane generates a self-custody Starknet wallet sealed to
              that passkey automatically: gas-free setup, skipping seed phrases and browser
              extensions entirely. The key never leaves your device.
            </p>
            <h3 className="text-lg font-semibold text-foreground">Deploy a collection</h3>
            <p>
              A collection is a smart contract on Starknet that groups related NFTs under
              a shared name, symbol, and identity. Think of it as your brand onchain:
              an art series, a music catalogue, a portfolio of photographs.
            </p>
            <p>
              Medialane supports two collection formats, each deployed from the Launchpad:
            </p>
            <div className="bento-cell px-4 py-3 space-y-1">
              <p className="text-base font-semibold text-foreground">ERC-721 Collection</p>
              <p className="text-base leading-relaxed">
                From <strong>Create → Collection</strong>, choose a name, symbol, and cover image.
                Medialane deploys an ERC-721 contract and registers it in the onchain registry.
                Each asset you mint into it will be a unique, 1-of-1 token with its own owner.
              </p>
            </div>
            <div className="bento-cell px-4 py-3 space-y-1">
              <p className="text-base font-semibold text-foreground">IP Collection 1155: Multi-Edition</p>
              <p className="text-base leading-relaxed">
                From <strong>Launchpad → IP Collection 1155 → Create Collection</strong>, deploy an
                ERC-1155 contract for multi-edition releases. Once deployed, the collection appears
                in your Launchpad with a <em>Mint</em> button, letting you mint new token editions
                directly into it, each with its own supply, metadata, and price. Best for music tracks,
                art series, or any creative work you want multiple people to own.
              </p>
            </div>
            <h3 className="text-lg font-semibold text-foreground">Mint an IP asset</h3>
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
              Your file is uploaded to IPFS, giving it a permanent content
              address. The metadata JSON, including your license terms, is also stored
              on IPFS and linked to the NFT onchain.
            </p>
            <h3 className="text-lg font-semibold text-foreground">List or hold</h3>
            <p>
              Once minted, your asset appears in your Portfolio. You can hold it as proof
              of ownership, list it for sale at a fixed price, or receive offers from
              interested collectors directly through the platform.
            </p>
          </Section>
        </div>

        <Section title="Frictionless, Gasless Experience">
          <p>
            On <strong className="text-foreground">medialane.io</strong>, everything is
            frictionless: wallet setup, minting, listing, and accepting offers are all
            gas-sponsored, so you never need STRK or ETH in your wallet to use the platform.
            On the wallet-sovereign Starknet app, users pay their own gas.
          </p>
          <p>
            Sponsorship applies to normal creator workflows and may be limited by abuse
            controls, unsupported flows, or future DAO policy. See{" "}
            <Link href="/dev/fees" className="text-primary hover:underline">Fees &amp; Revenue</Link>{" "}
            for the canonical fee model.
          </p>
        </Section>
      </div>
    </div>
  );
}
