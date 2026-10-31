import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/docs";

export const metadata: Metadata = {
  alternates: { canonical: "https://docs.medialane.io/learn/funding-your-account" },
  title: "Funding an Account | Learn | Medialane",
  description: "How to get tokens into an account on Starknet: buying with a card through an on-ramp, withdrawing from an exchange, or moving assets in from another chain.",
  openGraph: {
    title: "Funding an Account | Learn | Medialane",
    description: "How to get tokens into an account on Starknet: buying with a card through an on-ramp, withdrawing from an exchange, or moving assets in from another chain.",
    url: "https://docs.medialane.io/learn/funding-your-account",
  },
  twitter: {
    title: "Funding an Account | Learn | Medialane",
    description: "How to get tokens into an account on Starknet: buying with a card through an on-ramp, withdrawing from an exchange, or moving assets in from another chain.",
  },
};

export default function LearnFundingYourAccountPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Funding an Account</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          An account is a real self-custody address on Starknet. To send, hold, or spend
          tokens with it, that address needs to actually hold something. These are the
          common ways to get tokens onto Starknet and into an account.
        </p>
      </div>

      <div className="space-y-8">
        <Section title="Buy with a Card (On-Ramp)">
          <p>
            An on-ramp is a service that converts money from a debit card, credit card,
            or bank transfer directly into crypto, delivered straight to a wallet address.
            This is usually the most direct path when starting from regular money with no
            prior crypto.
          </p>
          <p>
            With an on-ramp, the account address is pasted in as the delivery address,
            Starknet is selected as the network, and the token is chosen (STRK, ETH, or USDC
            are all supported on Medialane).
          </p>
        </Section>

        <Section title="Withdraw from an Exchange">
          <p>
            Crypto held on a centralized exchange (Coinbase, Binance, Kraken, and similar
            platforms) can be withdrawn directly to an account. In the exchange&apos;s
            withdrawal flow, the account address is pasted in and the selected network must
            be{" "}
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
            Funds that already live on another blockchain can move over with cross-chain
            bridges and
            intent-based transfer services (such as NEAR Intents, or a chain&apos;s
            native Starknet bridge) without first routing through a centralized exchange.
            These services quote a destination amount and settle the transfer directly to
            the Starknet address provided.
          </p>
          <p>
            As with an exchange withdrawal, the address provided is the account address,
            and the destination network is Starknet.
          </p>
        </Section>

        <Section title="One Source of Truth for the Address">
          <p>
            Whichever path is used, the destination is always the same: the address shown
            on the account&apos;s Receive screen. That address belongs to the account holder
            alone, generated and controlled by the holder&apos;s own device key, not by
            Medialane.
          </p>
        </Section>

        <Section title="Learn More">
          <p>
            See{" "}
            <Link href="/learn/media-wallet" className="text-primary hover:underline">Media Wallet</Link>
            {" "}for how an account and its keys work, and{" "}
            <Link href="/learn/web3" className="text-primary hover:underline">Web3 &amp; Starknet</Link>
            {" "}for background on the network an account lives on.
          </p>
        </Section>
      </div>
    </div>
  );
}
