import type { Metadata } from "next";
import { Section } from "@/components/docs";

export const metadata: Metadata = {
  alternates: { canonical: "https://docs.medialane.io/learn/ip-collection-1155" },
  title: "Limited Edition NFT | Learn | Medialane",
  description: "Learn how Limited Edition NFTs and their ERC-1155 collections work on Medialane.",
  openGraph: {
    title: "Limited Edition NFT | Learn | Medialane",
  description: "Learn how Limited Edition NFTs and their ERC-1155 collections work on Medialane.",
    url: "https://docs.medialane.io/learn/ip-collection-1155",
  },
  twitter: {
    title: "Limited Edition NFT | Learn | Medialane",
  description: "Learn how Limited Edition NFTs and their ERC-1155 collections work on Medialane.",
  },
};

export default function LearnIPCollection1155Page() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Limited Edition NFT</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          A Limited Edition NFT is an immutable, licensed NFT in multiple copies, built on the ERC-1155 token standard. Its Limited Edition NFT Collection is one contract that holds any number of them, each with its own artwork, copies and metadata.
        </p>
      </div>

      <div className="space-y-8">
        <Section title="The Printing Press Analogy">
          <p>
            Think of ERC-1155 as a printing press. A physical painting is one-of-a-kind:
            there is only one original, one owner, one provenance record. That is ERC-721.
          </p>
          <p>
            A printing press produces 100 identical copies of a magazine. Each
            reader holds an authentic copy, verifiable and owned, yet they
            are not unique from one another. That is ERC-1155.
          </p>
          <p>
            Limited Edition NFTs bring this model onchain. The creator owns the press, and chooses how many copies to create of each one.
          </p>
        </Section>

        <Section title="How It Works">
          <p>
            The flow has two steps: create the collection once, then create Limited Edition NFTs in it whenever there is new content to release.
          </p>
          <div className="bento-cell px-4 py-3 space-y-1">
            <p className="text-base font-semibold text-foreground">Step 1: Create a collection</p>
            <p className="text-base leading-relaxed">
              From <strong>Launchpad → Limited Edition NFT Collection</strong>, choose a name,
              symbol, and upload a collection image. Medialane deploys an ERC-1155 contract
              to Starknet mainnet, owned entirely by the creator&apos;s wallet. The collection appears
              in the Portfolio and under <strong>Launchpad → Limited Edition NFT</strong>.
            </p>
          </div>
          <div className="bento-cell px-4 py-3 space-y-1">
            <p className="text-base font-semibold text-foreground">Step 2: Create a Limited Edition NFT</p>
            <p className="text-base leading-relaxed">
              Under <strong>Launchpad → Limited Edition NFT</strong>, choose <strong>Create Limited Edition NFT</strong> for the collection. Upload the file, then set a title, description and number of copies. Each one gets a new token ID in the collection contract, with its metadata anchored to IPFS.
            </p>
          </div>
        </Section>

        <Section title="What to Release">
          <p>
            Content that naturally exists in multiple copies is a good fit for a Limited Edition NFT:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Music tracks: release 100 copies of a new single</li>
            <li>Art editions: limited prints of a digital artwork</li>
            <li>Photo series: a set of images, each available to multiple collectors</li>
            <li>Short films or video clips with a defined release count</li>
            <li>Writing: essays, poems or short stories</li>
            <li>Membership access passes: tiered or uniform</li>
          </ul>
        </Section>

        <Section title="ERC-1155 vs ERC-721: When to Choose Which">
          <div className="space-y-2">
            <div className="bento-cell px-4 py-3 space-y-1">
              <p className="text-base font-semibold text-foreground">Choose ERC-721 when uniqueness is the value</p>
              <p className="text-base leading-relaxed">
                1-of-1 artworks, IP certificates, high-value collectibles where provable
                scarcity is the point. Each collector owns something no one else can.
              </p>
            </div>
            <div className="bento-cell px-4 py-3 space-y-1">
              <p className="text-base font-semibold text-foreground">Choose ERC-1155 when editions are the format</p>
              <p className="text-base leading-relaxed">
                Content meant for many people to own authentically: music, prints,
                passes. Every holder owns a real, on-chain copy of the same edition.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Onchain Ownership and Provenance">
          <p>
            Every Limited Edition NFT Collection contract is deployed directly to Starknet mainnet.
            The creator&apos;s wallet address is the contract owner, and no Medialane account is required to
            hold or transfer the assets after minting.
          </p>
          <p>
            All token metadata is stored on IPFS with a content-addressed identifier (CID)
            anchored to the onchain token. The artwork and metadata cannot be changed after creation. Every transfer is permanently recorded.
          </p>
          <p>
            Collections are immediately discoverable on the Medialane marketplace and
            indexed in the platform&apos;s collection registry, visible to collectors and
            verifiable by anyone.
          </p>
        </Section>
      </div>
    </div>
  );
}
