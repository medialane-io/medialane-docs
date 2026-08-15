import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/docs";

export const metadata: Metadata = {
  title: "Funding Your Account | Learn | Medialane",
  description: "How to get tokens into your Medialane account on Starknet: buying with a card through an on-ramp, withdrawing from an exchange, or moving assets in from another chain.",
  openGraph: {
    title: "Funding Your Account | Learn | Medialane",
    description: "How to get tokens into your Medialane account on Starknet: buying with a card through an on-ramp, withdrawing from an exchange, or moving assets in from another chain.",
    url: "https://docs.medialane.io/learn/funding-your-account",
  },
  twitter: {
    title: "Funding Your Account | Learn | Medialane",
    description: "How to get tokens into your Medialane account on Starknet: buying with a card through an on-ramp, withdrawing from an exchange, or moving assets in from another chain.",
  },
};

export default function LearnFundingYourAccountPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Funding Your Account</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Your Medialane account is a real self-custody address on Starknet. To send,
          hold, or spend tokens with it, that address needs to actually hold something.
          Here are the common ways to get tokens onto Starknet and into your account.
        </p>
      </div>

      <div className="space-y-8">
        <Section title="Buy with a Card (On-Ramp)">
          <p>
            An on-ramp is a service that converts money from a debit card, credit card,
            or bank transfer directly into crypto, delivered straight to a wallet address
            you provide. This is usually the most direct path if you&apos;re starting from
            regular money and have never held crypto before.
          </p>
          <p>
            When using an on-ramp, paste your Medialane account address as the delivery
            address and select Starknet as the network, then choose the token you want
            (STRK, ETH, or USDC are all supported on Medialane).
          </p>
        </Section>

        <Section title="Withdraw from an Exchange">
          <p>
            If you already hold crypto on a centralized exchange (Coinbase, Binance,
            Kraken, and similar platforms), you can withdraw it directly to your
            Medialane account. Open the withdrawal flow on the exchange, paste your
            account address, and make sure the network selected is{" "}
            <strong className="text-foreground">Starknet</strong>.
          </p>
          <p>
            Sending on the wrong network is the single most common way people lose
            funds when moving crypto between platforms; always double-check the
            network selector matches Starknet before confirming a withdrawal.
          </p>
        </Section>

        <Section title="Bridge from Another Chain">
          <p>
            If your funds already live on another blockchain, cross-chain bridges and
            intent-based transfer services (such as NEAR Intents, or a chain&apos;s
            native Starknet bridge) can move assets over to Starknet without first
            routing through a centralized exchange. These services quote you a
            destination amount and settle the transfer directly to the Starknet
            address you provide.
          </p>
          <p>
            As with an exchange withdrawal, the address you provide is your Medialane
            account address, and the destination network is Starknet.
          </p>
        </Section>

        <Section title="Your Address, One Source of Truth">
          <p>
            Whichever path you use, the destination is always the same: the address
            shown on your account&apos;s Receive screen. That address is yours alone,
            generated and controlled by your own device key, not by Medialane.
          </p>
        </Section>

        <Section title="Learn More">
          <p>
            See{" "}
            <Link href="/learn/media-wallet" className="text-primary hover:underline">Media Wallet</Link>
            {" "}for how your account and its keys work, and{" "}
            <Link href="/learn/web3" className="text-primary hover:underline">Web3 &amp; Starknet</Link>
            {" "}for background on the network your account lives on.
          </p>
        </Section>
      </div>
    </div>
  );
}
