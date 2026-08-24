import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/docs";

export const metadata: Metadata = {
  alternates: { canonical: "https://docs.medialane.io/learn/creator-coin" },
  title: "Creator Coins | Learn | Medialane",
  description: "Launch your own coin with permanently-locked liquidity, or claim a coin you already launched on Starknet.",
  openGraph: {
    title: "Creator Coins | Learn | Medialane",
    description: "Launch your own coin with permanently-locked liquidity, or claim a coin you already launched on Starknet.",
    url: "https://docs.medialane.io/learn/creator-coin",
  },
  twitter: {
    title: "Creator Coins | Learn | Medialane",
    description: "Launch your own coin with permanently-locked liquidity, or claim a coin you already launched on Starknet.",
  },
};

export default function LearnCreatorCoinPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Creator Coins</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          A Creator Coin is your own coin, a standard token tied to your creative work,
          launched with a public liquidity pool that is locked forever. Your community can
          back you by holding it; you stay in control of what it means.
        </p>
        <p className="text-base text-muted-foreground">
          Service IDs:{" "}
          <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">creator-coin</code>{" "}
          (launched on Medialane) and{" "}
          <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">external-erc20</code>{" "}
          (claimed coins launched elsewhere). See{" "}
          <Link href="/learn/services" className="text-primary hover:underline">Services</Link>{" "}
          for the full capability set.
        </p>
      </div>

      <div className="space-y-8">
        <Section title="What is a Creator Coin?">
          <p>
            A Creator Coin is a standard ERC-20 token with a fixed supply, deployed from
            Medialane&apos;s audited Creator Coin Factory (a faithful fork of the
            unruggable.meme model). At launch, the entire supply pairs with a public
            liquidity pool on Ekubo, and that liquidity locks permanently in a dedicated
            locker contract, with only trading fees left collectible.
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm">
            <li><strong>Fixed supply forever</strong>: minting is disabled the moment the coin is created; the contract exposes no mint function beyond that.</li>
            <li><strong>Purchased at market price</strong>: the creator&apos;s allocation is capped at 10% and bought from the pool at the coin&apos;s own launch price, not minted for free.</li>
            <li><strong>Ownership renounced</strong>: control transfers away automatically at launch, verifiable on any explorer.</li>
            <li><strong>Creator-chosen pair</strong>: the creator sets both the launch price and the quote currency.</li>
            <li><strong>Tradable immediately</strong>: the market opens the moment the coin launches.</li>
          </ul>
        </Section>

        <Section title="Launching your coin">
          <p>
            The Launch Studio walks through a coin&apos;s design, its economics, and the
            launch itself, with a live preview updating as you type:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm">
            <li>
              <strong>Your coin</strong>: name, symbol, a feature image, and a description.
              The image and description live on your coin&apos;s Medialane page and can be
              edited anytime; the name and symbol are recorded on-chain forever.
            </li>
            <li>
              <strong>Economics</strong>: choose the total supply, the launch price, and the
              quote currency (STRK, ETH, WBTC, USDC, or USDT). Supply and price together set
              the starting market cap.
            </li>
            <li>
              <strong>Your allocation</strong>: up to 10% of the supply can go to the
              creator&apos;s wallet at launch, capped and bought from the pool at the coin&apos;s
              own launch price. That purchase is what funds the coin&apos;s starting
              liquidity. The rest belongs to the market.
            </li>
          </ul>
          <p>
            On medialane.io the launch is gasless: two on-chain steps confirmed with your
            passkey. On the web3 dApp your own wallet signs each step.
          </p>
        </Section>

        <Section title="Already launched a coin? Claim it">
          <p>
            If you launched a coin on Starknet elsewhere (an unruggable.meme coin or a partner
            launch), you can claim it on Medialane. Paste the coin&apos;s address, our team
            reviews the claim, and once approved the coin appears on the Coins page and your
            creator profile, with the same image and description tools as a native launch.
          </p>
        </Section>

        <Section title="Trading & discovery">
          <p>
            Coins are listed on the Coins page with live prices read directly from
            their Ekubo pool: price, supply, and market cap. Trading settles on Ekubo, an
            external public exchange, with Medialane holding no custody of coins or funds.
          </p>
        </Section>

        <Section title="What the contract guarantees">
          <p className="text-base text-muted-foreground">
            Every guarantee below is enforced by the Creator Coin Factory contract itself,
            verifiable on any Starknet explorer, not a claim made by Medialane.
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm">
            <li>Fixed supply: minting is disabled the moment a coin is created, permanently.</li>
            <li>Creator allocation capped at 10%, purchased from the pool at market price.</li>
            <li>Ownership renounces automatically at launch.</li>
            <li>Liquidity locks permanently in a dedicated locker contract; only trading fees stay collectible.</li>
            <li>Launching is permissionless, open to anyone, with the contract as the only authority.</li>
          </ul>
        </Section>
      </div>
    </div>
  );
}
