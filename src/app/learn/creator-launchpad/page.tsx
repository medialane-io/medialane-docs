import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/docs";

export const metadata: Metadata = {
  alternates: { canonical: "https://docs.medialane.io/learn/creator-launchpad" },
  title: "Creator Launchpad | Learn | Medialane",
  description: "Learn how to create NFTs, collections and coins on the Creator Launchpad.",
  openGraph: {
    title: "Creator Launchpad | Learn | Medialane",
    description: "Learn how to create NFTs, collections and coins on the Creator Launchpad.",
    url: "https://docs.medialane.io/learn/creator-launchpad",
  },
  twitter: {
    title: "Creator Launchpad | Learn | Medialane",
    description: "Learn how to create NFTs, collections and coins on the Creator Launchpad.",
  },
};

const FLOW_GROUPS = [
  {
    title: "NFTs",
    flows: [
      { name: "Single NFT", desc: "An immutable NFT with licensing for its content.", href: "#ip-assets" },
      { name: "Limited Edition NFT", desc: "An immutable, licensed NFT in multiple copies for an audience to collect and trade.", href: "/learn/ip-collection-1155" },
      { name: "NFT Remix", desc: "A new NFT created from an existing one, with its own license and recorded credit to the original.", href: "/learn/remix" },
    ],
  },
  {
    title: "Collections",
    flows: [
      { name: "NFT Collection", desc: "An onchain collection, owned by its creator, for a series, project or catalog.", href: "#ip-assets" },
      { name: "Limited Edition NFT Collection", desc: "A creator-owned contract for releasing multiple limited editions as one series.", href: "/learn/ip-collection-1155" },
      { name: "NFT Drop", desc: "A new collection an audience gets directly from its creator, free or at a set price.", href: "/learn/collection-drop" },
    ],
  },
  {
    title: "Coins",
    flows: [
      { name: "Creator Coin", desc: "A coin for building a community, launched with its own liquidity pair.", href: "/learn/creator-coin" },
      { name: "Existing Memecoin", desc: "An already launched memecoin, connected to a creator profile.", href: "/learn/creator-coin" },
    ],
  },
  {
    title: "Membership",
    flows: [
      { name: "POP Protocol", desc: "Soulbound certificates as lasting proof of participation and achievement.", href: "/learn/pop-protocol" },
      { name: "IP Tickets", desc: "Event tickets with verifiable ownership and validity, which holders can resell.", href: "/learn/ip-tickets" },
      { name: "IP Club", desc: "Memberships that give a community access to the benefits a creator offers.", href: "/learn/ip-club" },
    ],
  },
  {
    title: "Licensing",
    flows: [
      { name: "IP Sponsorship", desc: "An onchain deal where a sponsor pays an NFT's creator and receives a license.", href: "/learn/ip-sponsorship" },
    ],
  },
];

const LIST_FLOWS = [
  { name: "Data Tokenization", desc: "Register a whole catalog at once, with license terms attached to every item.", href: "/learn/data-tokenization" },
  { name: "IP Ticketing", desc: "Issue tickets with their own supply and validity window to a guest list.", href: "/learn/ip-ticketing" },
  { name: "Certificate Emission", desc: "Issue non-transferable certificates to a list of recipients.", href: "/learn/certificate-emission" },
];

function FlowCard({ name, desc, href }: { name: string; desc: string; href: string }) {
  return (
    <div className="bento-cell px-4 py-3 space-y-1">
      <p className="text-base font-semibold text-foreground">{name}</p>
      <p className="text-base text-muted-foreground">{desc}</p>
      <Link href={href} className="text-sm text-primary hover:underline">
        {href.startsWith("#") ? "See the steps below →" : "Learn more →"}
      </Link>
    </div>
  );
}

export default function LearnCreatorLaunchpadPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Creator Launchpad</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          The Launchpad is where something new is created and released. Each flow is built for a
          different kind of work, so each project starts from the one that fits: a collection, a drop,
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
          {FLOW_GROUPS.map((group) => (
            <div key={group.title} className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {group.flows.map((flow) => (
                  <FlowCard key={flow.name} {...flow} />
                ))}
              </div>
            </div>
          ))}
          <p>
            Every flow is permissionless, with no approval required. The contract is deployed
            directly to Starknet mainnet, owned by the creator&apos;s wallet. See{" "}
            <Link href="/learn/services" className="text-primary hover:underline">Services</Link>{" "}
            for the full registry and capability set.
          </p>
        </Section>

        <Section title="Flows for lists of people">
          <p>
            Some flows work from a list: catalog items, guests, or recipients. The list is
            prepared once and the Launchpad issues everything in batches.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {LIST_FLOWS.map((flow) => (
              <FlowCard key={flow.name} {...flow} />
            ))}
          </div>
        </Section>

        <div id="ip-assets" className="scroll-mt-24 space-y-8">
          <Section title="Single NFT: from collection to market">
            <h3 className="text-lg font-semibold text-foreground">Create an account</h3>
            <p>
              Set up a passkey (Face ID, Touch ID, Windows Hello, or a hardware security key)
              on a device. Medialane generates a self-custody Starknet wallet sealed to
              that passkey automatically: gas-free setup, skipping seed phrases and browser
              extensions entirely. The key never leaves the device.
            </p>
            <h3 className="text-lg font-semibold text-foreground">Create a collection</h3>
            <p>
              A collection is a smart contract on Starknet that groups related NFTs under
              a shared name, symbol, and identity. Think of it as a brand onchain:
              an art series, a music catalogue, a portfolio of photographs.
            </p>
            <p>
              Medialane supports two collection formats, each created from the Launchpad:
            </p>
            <div className="bento-cell px-4 py-3 space-y-1">
              <p className="text-base font-semibold text-foreground">NFT Collection (ERC-721)</p>
              <p className="text-base leading-relaxed">
                From <strong>Launchpad → NFT Collection</strong>, choose a name, symbol, and cover image.
                Medialane deploys an ERC-721 contract and registers it in the onchain registry.
                Each Single NFT created in it is a unique, 1-of-1 token with its own owner.
              </p>
            </div>
            <div className="bento-cell px-4 py-3 space-y-1">
              <p className="text-base font-semibold text-foreground">Limited Edition NFT Collection (ERC-1155)</p>
              <p className="text-base leading-relaxed">
                From <strong>Launchpad → Limited Edition NFT Collection</strong>, create an ERC-1155 contract for releasing limited editions. Each Limited Edition NFT created in it has its own copies and metadata. It suits music tracks, art series and other content meant to be owned by many people.
              </p>
            </div>
            <h3 className="text-lg font-semibold text-foreground">Create a Single NFT</h3>
            <p>
              From <strong className="text-foreground">Launchpad → Single NFT</strong>, the file
              (image, audio, video, or document) is uploaded, the title and description are
              filled in, the collection is selected, and the programmable license terms are
              defined:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>License type (All Rights Reserved, Creative Commons, Custom)</li>
              <li>Commercial use permissions</li>
              <li>Derivative work rules</li>
              <li>AI training policy</li>
              <li>Geographic scope</li>
            </ul>
            <p>
              The file is uploaded to IPFS, giving it a permanent content
              address. The metadata JSON, including the license terms, is also stored
              on IPFS and linked to the NFT onchain.
            </p>
            <h3 className="text-lg font-semibold text-foreground">List or hold</h3>
            <p>
              Once created, the NFT appears in the owner&apos;s Portfolio. It can be held as
              proof of ownership, listed for sale at a fixed price, or open to offers from
              interested collectors directly through the platform.
            </p>
          </Section>
        </div>

        <Section title="Frictionless, Gasless Experience">
          <p>
            On <strong className="text-foreground">medialane.io</strong>, everything is
            frictionless: wallet setup, minting, listing, and accepting offers are all
            gas-sponsored, so no STRK or ETH is needed in the wallet to use the platform.
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
