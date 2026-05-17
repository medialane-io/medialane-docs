import type { Metadata } from "next";
import Link from "next/link";
import { Package, Image, Music, Award, Clock, Store } from "lucide-react";
import { Section } from "@/components/docs";

export const metadata: Metadata = {
  title: "Services | Learn | Medialane",
  description: "How Medialane services work — the registry that defines what creators can do, canonical service IDs, and the full capability set.",
  openGraph: {
    title: "Services | Learn | Medialane",
    description: "How Medialane services work — the registry that defines what creators can do, canonical service IDs, and the full capability set.",
    url: "https://docs.medialane.io/learn/services",
  },
  twitter: {
    title: "Services | Learn | Medialane",
    description: "How Medialane services work — the registry that defines what creators can do, canonical service IDs, and the full capability set.",
  },
};

const SERVICES = [
  {
    id: "mip-erc721",
    label: "IP Collection (ERC-721)",
    icon: Image,
    color: "text-brand-purple",
    bg: "bg-brand-purple/10",
    border: "border-brand-purple/20",
    desc: "A standard single-edition IP collection. Each token is unique. The default service for art, photography, writing, and one-of-a-kind creative work.",
    caps: ["mint", "list", "buy", "make_offer", "transfer", "remix", "license"],
  },
  {
    id: "mip-erc1155",
    label: "Multi-Edition Collection (ERC-1155)",
    icon: Music,
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/20",
    desc: "Multiple collectors can own the same piece. Ideal for music tracks, art prints, and any work where shared ownership makes sense.",
    caps: ["mint", "list", "buy", "make_offer", "transfer", "remix", "license"],
  },
  {
    id: "pop-protocol",
    label: "POP Protocol",
    icon: Award,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    border: "border-brand-orange/20",
    desc: "Proof-of-participation credentials. Soulbound tokens issued to people who attended, contributed, or reached a milestone. Non-transferable by design.",
    caps: ["mint", "claim", "airdrop"],
  },
  {
    id: "drop-collection",
    label: "Collection Drop",
    icon: Clock,
    color: "text-brand-rose",
    bg: "bg-brand-rose/10",
    border: "border-brand-rose/20",
    desc: "Timed drops with supply caps and optional allowlists. Collectors mint directly from the drop contract during the mint window.",
    caps: ["mint", "claim"],
  },
  {
    id: "medialane-marketplace-erc721",
    label: "Marketplace (ERC-721)",
    icon: Store,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    desc: "The ERC-721 trading venue. Supports fixed-price listings, offers, and atomic swap settlement. A service with marketplace capabilities.",
    caps: ["list", "buy", "make_offer", "cancel"],
  },
  {
    id: "medialane-marketplace-erc1155",
    label: "Marketplace (ERC-1155)",
    icon: Store,
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    border: "border-brand-blue/20",
    desc: "The ERC-1155 trading venue. Supports partial fills — collectors can buy any quantity of a multi-edition listing.",
    caps: ["list", "buy", "make_offer", "cancel"],
  },
];

const ALL_CAPS = [
  { cap: "list", desc: "Create a fixed-price listing" },
  { cap: "buy", desc: "Purchase a listed asset" },
  { cap: "make_offer", desc: "Submit a bid below asking price" },
  { cap: "cancel", desc: "Revoke a listing or offer" },
  { cap: "mint", desc: "Create a new token" },
  { cap: "transfer", desc: "Move a token to another wallet" },
  { cap: "remix", desc: "Mint a licensed derivative" },
  { cap: "license", desc: "Apply or enforce license terms" },
  { cap: "claim", desc: "Collect an airdrop or credential" },
  { cap: "airdrop", desc: "Distribute tokens to a list of wallets" },
  { cap: "burn", desc: "Destroy a token permanently" },
  { cap: "subscribe", desc: "Activate a time-limited access grant" },
];

export default function LearnServicesPage() {
  return (
    <div className="space-y-10">

      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Services</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Every action on Medialane — minting, trading, dropping, issuing credentials — is
          powered by a registered service. Services are how the platform knows what creators
          can do and which contracts handle it.
        </p>
      </div>

      <div className="space-y-8">

        <Section title="What Is a Service?">
          <p>
            A service is a registry entry that describes a set of actions and the contracts
            that power them. When you deploy a collection, you choose a service. When the
            marketplace handles a listing, it operates as a service with marketplace capabilities.
          </p>
          <p>
            This design means adding a new capability to Medialane — a new collection type,
            a new marketplace, a new credential system — is a registry update, not a contract
            rewrite. Existing integrations keep working without changes.
          </p>
          <div className="bento-cell border border-brand-blue/20 bg-brand-blue/5 p-4 space-y-1">
            <p className="text-sm font-semibold text-foreground">The service registry</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              In Year 1, the registry lives in the{" "}
              <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">@medialane/sdk</code>{" "}
              package. Year 2+ moves it on-chain, making service registration permissionless —
              anyone can deploy a new service without Medialane involvement.
            </p>
          </div>
        </Section>

        <Section title="Canonical Services">
          <div className="space-y-3">
            {SERVICES.map(({ id, label, icon: Icon, color, bg, border, desc, caps }) => (
              <div key={id} className={`bento-cell border ${border} p-5 space-y-3`}>
                <div className="flex items-start gap-3">
                  <div className={`h-9 w-9 rounded-xl ${bg} flex items-center justify-center shrink-0`}>
                    <Icon className={`h-4 w-4 ${color}`} />
                  </div>
                  <div className="space-y-0.5">
                    <p className="font-bold text-foreground text-sm">{label}</p>
                    <p className={`font-mono text-xs ${color}`}>{id}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {caps.map((cap) => (
                    <span key={cap} className={`text-xs px-2 py-0.5 rounded-full ${bg} ${color} font-mono border ${border}`}>
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="The Capability Set">
          <p>
            Every service declares a bounded set of capabilities — the actions it enables.
            The set is fixed; services pick from it. This prevents free-form extension
            while keeping the system open to new services.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {ALL_CAPS.map(({ cap, desc }) => (
              <div key={cap} className="bento-cell px-4 py-3 flex items-center gap-3">
                <code className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded shrink-0">{cap}</code>
                <span className="text-xs text-muted-foreground">{desc}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Why Service IDs Never Change">
          <p>
            Service IDs are stable across contract upgrades. If the marketplace contract
            is redeployed, the service ID stays{" "}
            <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">medialane-marketplace-erc721</code>.
            There are no{" "}
            <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">-v3</code> suffixes.
          </p>
          <p>
            This means your integration — whether you are a developer reading the SDK or
            an AI agent querying the API — keeps working after upgrades. The contract
            address changes; the service ID does not.
          </p>
          <p className="text-sm">
            For developers: see{" "}
            <Link href="/docs/sdk" className="text-primary hover:underline">SDK documentation</Link>
            {" "}for{" "}
            <code className="font-mono text-xs">getService()</code> usage, and{" "}
            <Link href="/docs/architecture" className="text-primary hover:underline">Architecture</Link>
            {" "}for how the registry fits into the four-layer model.
          </p>
        </Section>

      </div>
    </div>
  );
}
