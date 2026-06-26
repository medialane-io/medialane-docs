import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/docs";

export const metadata: Metadata = {
  title: "Creator Coins | Learn | Medialane",
  description: "Launch your own coin with permanently-locked liquidity — or claim a coin you already launched on Starknet.",
  openGraph: {
    title: "Creator Coins | Learn | Medialane",
    description: "Launch your own coin with permanently-locked liquidity — or claim a coin you already launched on Starknet.",
    url: "https://docs.medialane.io/learn/creator-coin",
  },
  twitter: {
    title: "Creator Coins | Learn | Medialane",
    description: "Launch your own coin with permanently-locked liquidity — or claim a coin you already launched on Starknet.",
  },
};

export default function LearnCreatorCoinPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Creator Coins</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          A Creator Coin is your own coin — a standard token tied to your creative work,
          launched with a public liquidity pool that is locked forever. Your community can
          back you by holding it; you stay in control of what it means.
        </p>
        <p className="text-sm text-muted-foreground">
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
            unruggable.meme model). At launch, the entire supply is paired with a public
            liquidity pool on Ekubo — and that liquidity is <strong>permanently locked</strong>.
            Nobody can pull it: not the creator, not Medialane, not anyone.
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm">
            <li><strong>Standard token</strong> — no special transfer rules, no hidden switches. It works everywhere ERC-20s work.</li>
            <li><strong>Locked liquidity</strong> — the pool can never be drained ("rugged"). This is enforced by the contract, not a promise.</li>
            <li><strong>Renounced ownership</strong> — after launch, the coin has no admin. The contract is the only authority.</li>
            <li><strong>Tradable immediately</strong> — the market opens the moment the coin launches.</li>
          </ul>
        </Section>

        <Section title="Launching your coin">
          <p>
            The Launch Studio walks you through three steps — design, economics, launch —
            with a live preview of your coin as you type:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm">
            <li>
              <strong>Your coin</strong> — name, symbol, a feature image, and a description.
              The image and description live on your coin&apos;s Medialane page (you can edit
              them anytime); the name and symbol are recorded on-chain forever.
            </li>
            <li>
              <strong>Economics</strong> — choose the total supply and the quote currency
              (STRK or ETH). The launch price is fixed at 0.01 quote per coin, so your supply
              sets the starting market cap: 1,000,000 coins opens at a 10,000 STRK market cap.
            </li>
            <li>
              <strong>Your allocation</strong> — up to 10% of the supply can go straight to
              your wallet at launch. You fund this share yourself (it is bought out of the
              pool at the launch price), which keeps the launch fair for everyone else.
              The rest belongs to the market.
            </li>
          </ul>
          <p>
            On medialane.io the launch is gasless — two on-chain steps confirmed with your
            PIN or passkey. On the web3 dApp your own wallet signs each step.
          </p>
        </Section>

        <Section title="Already launched a coin? Claim it">
          <p>
            If you launched a coin on Starknet elsewhere (an unruggable.meme coin or a partner
            launch), you can claim it on Medialane. Paste the coin&apos;s address, our team
            reviews the claim, and once approved the coin appears on the Coins page and your
            creator profile — with the same image and description tools as a native launch.
          </p>
        </Section>

        <Section title="Trading & discovery">
          <p>
            Coins are listed on the Coins page with live prices read directly from
            their Ekubo pool — price, supply, and market cap. Trading settles on Ekubo,
            an external public exchange: Medialane never holds your coins or your funds.
          </p>
        </Section>

        <Section title="What Medialane never does">
          <ul className="list-disc list-inside space-y-1.5 text-sm">
            <li>No custody — your coins live in your wallet, the pool lives on Ekubo.</li>
            <li>No admin keys — launched coins have no owner and cannot be changed.</li>
            <li>No fees inside the contract — the coin is a clean, standard token.</li>
            <li>No gatekeeping — launching is permissionless; the contract is the only authority.</li>
          </ul>
        </Section>
      </div>
    </div>
  );
}
