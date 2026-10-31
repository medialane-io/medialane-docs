import type { Metadata } from "next";
import { Section } from "@/components/docs";

export const metadata: Metadata = {
  alternates: { canonical: "https://docs.medialane.io/learn/web3" },
  title: "Web3 & Starknet | Learn | Medialane",
  description: "A beginner-friendly introduction to blockchain, Web3, Starknet, and zero-knowledge proof technology.",
  openGraph: {
    title: "Web3 & Starknet | Learn | Medialane",
    description: "A beginner-friendly introduction to blockchain, Web3, Starknet, and zero-knowledge proof technology.",
    url: "https://docs.medialane.io/learn/web3",
  },
  twitter: {
    title: "Web3 & Starknet | Learn | Medialane",
    description: "A beginner-friendly introduction to blockchain, Web3, Starknet, and zero-knowledge proof technology.",
  },
};

export default function LearnWeb3Page() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Web3 & Starknet</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Medialane is built on Starknet, a Layer 2 blockchain secured by zero-knowledge
          proofs. This page explains what that means and why it matters for creators.
        </p>
      </div>

      <div className="space-y-8">
        <Section title="What is a Blockchain?">
          <p>
            A blockchain is a shared database maintained by thousands of computers worldwide.
            Once data is written to a blockchain, it stays: every entry is permanent and publicly visible, and no single party controls the network.
          </p>
          <p>
            This makes blockchains ideal for recording ownership. If a name is on the
            blockchain as the owner of an asset, that record stands without requiring anyone
            to trust a platform, registry, or intermediary to maintain it.
          </p>
        </Section>

        <Section title="What is Web3?">
          <p>
            Web3 is the name for the emerging internet built on public blockchains. In Web2
            (the current internet), data is owned by platforms: Instagram, YouTube,
            Spotify. In Web3, assets and identity are stored onchain and travel
            with their owner across applications.
          </p>
          <p>
            A wallet address on a blockchain is like an email address that the holder controls through a cryptographic key pair.
            Medialane generates this key pair on the holder&apos;s own device and seals it behind the
            device passkey (Face ID, Touch ID, Windows Hello), so the holder gets real Web3
            ownership without ever having to write down or manage a seed phrase.
          </p>
        </Section>

        <Section title="What is Starknet?">
          <p>
            Starknet is a Layer 2 (L2) network built on top of Ethereum. Ethereum is the
            most secure public blockchain in the world, but it can be slow and expensive
            to use directly. Starknet processes transactions off-chain in batches and
            submits a single cryptographic proof to Ethereum, inheriting its security
            at a fraction of the cost.
          </p>
          <p>
            Starknet is where Medialane&apos;s smart contracts live. Minting an NFT,
            listing an asset, and accepting an offer all happen as transactions on Starknet and
            are settled with finality on Ethereum.
          </p>
        </Section>

        <Section title="What are Zero-Knowledge Proofs?">
          <p>
            A zero-knowledge proof (ZKP) is a cryptographic technique that lets one party
            prove to another that something is true without revealing the underlying
            information. Starknet uses STARK proofs, a specific type of ZKP, to prove
            that all transactions in a batch are valid without re-executing every one
            on Ethereum.
          </p>
          <p>
            For users, this means: lower fees, faster finality, and the same level of
            security as Ethereum mainnet. For developers, it means a programmable
            environment that can scale to millions of transactions per day.
          </p>
        </Section>

        <Section title="Smart Contracts and Cairo">
          <p>
            Smart contracts are programs that run on the blockchain. They execute automatically
            when certain conditions are met, with no intermediary required. The Medialane
            marketplace contract validates signatures and executes asset transfers entirely
            through code, not through a human decision.
          </p>
          <p>
            Starknet smart contracts are written in <strong className="text-foreground">Cairo</strong>,
            a programming language designed specifically for generating STARK proofs.
            Medialane&apos;s contracts are open source and auditable by anyone.
          </p>
        </Section>

        <Section title="Account Abstraction">
          <p>
            Starknet natively supports account abstraction, a model where wallets are
            smart contracts themselves. Medialane&apos;s wallet is
            exactly this: a smart-contract account with a single passkey-sealed owner key.
            The standalone MediaWallet app deploys and operates it permissionlessly, funded
            by the user, and operates independently of any Medialane-run service, which gives first-principles self-custody. On medialane.io every transaction is gas-sponsored, so the wallet needs no STRK or ETH, on top of the same account model.
          </p>
          <p>
            Every action (minting, listing, buying) is signed directly by the
            device passkey, no separate password or PIN. Nothing is delegated to a third
            party: the device is the only place the key ever exists.
          </p>
        </Section>
      </div>
    </div>
  );
}
