import React from "react"

const BASE = "https://api.medialane.io"

const ACTION_LABELS: Record<string, string> = {
  "read": "Read / query",
  "intent:mint": "Mint an asset",
  "intent:create-collection": "Deploy a collection",
  "intent:create-tier": "Create a ticket type / membership tier",
  "intent:listing": "List an asset for sale",
  "intent:offer": "Make an offer",
  "intent:cancel": "Cancel an order",
  "intent:fulfill": "Buy / fulfill an order",
  "intent:counter-offer": "Counter an offer",
  "intent:checkout": "Checkout",
  "metadata:upload-json": "Upload metadata JSON to IPFS",
  "metadata:upload-file": "Upload a media file to IPFS",
  "rpc:call": "On-chain RPC call (nonce / fee estimate / submit / receipt)",
  "paymaster:invoke-build": "Build a gas-sponsored transaction (io wallet)",
  "paymaster:invoke-execute": "Execute a gas-sponsored transaction (io wallet)",
  "paymaster:deploy-build": "Build a gas-sponsored wallet deployment (io wallet)",
  "paymaster:deploy-execute": "Deploy a wallet, gas-sponsored (io wallet)",
}

interface PricingRule { actionKey: string; chain: string; service: string; credits: number }
interface PricingResponse { creditsPerUsdc: number; pricing: { default: number; rules: PricingRule[] } }

async function getLivePricing(): Promise<PricingResponse | null> {
  try {
    const res = await fetch(`${BASE}/v1/pricing`, { next: { revalidate: 300 } })
    if (!res.ok) return null
    return (await res.json()) as PricingResponse
  } catch {
    return null
  }
}

export async function PricingTable() {
  const pricing = await getLivePricing()
  const defaultRules = pricing?.pricing.rules.filter((r) => r.chain === "ALL" && r.service === "ALL") ?? []
  const knownKeys = Object.keys(ACTION_LABELS)
  const orderedActionKeys = [
    ...knownKeys.filter((k) => defaultRules.some((r) => r.actionKey === k)),
    ...defaultRules.map((r) => r.actionKey).filter((k) => !knownKeys.includes(k)),
  ]
  const creditRows = orderedActionKeys.map((actionKey) => {
    const rule = defaultRules.find((r) => r.actionKey === actionKey)!
    return { actionKey, label: ACTION_LABELS[actionKey] ?? actionKey, credits: rule.credits }
  })
  const overrideRows = pricing?.pricing.rules.filter((r) => {
    if (r.chain === "ALL" && r.service === "ALL") return false
    const base = defaultRules.find((d) => d.actionKey === r.actionKey)
    return base && base.credits !== r.credits
  }) ?? []

  if (creditRows.length === 0) {
    return (
      <p className="text-muted-foreground text-base">
        Live pricing is temporarily unavailable here; see{" "}
        <a href={`${BASE}/v1/pricing`} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">{BASE}/v1/pricing</a> directly.
      </p>
    )
  }

  return (
    <>
      <div className="rounded-xl border border-foreground/10 overflow-hidden mb-3">
        <div className="grid grid-cols-3 px-5 py-3 bg-foreground/[0.03] border-b border-foreground/10 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          <span>Action</span>
          <span className="text-center">Credits</span>
          <span className="text-right">USD</span>
        </div>
        {creditRows.map((row, i) => (
          <div key={row.actionKey} className={`grid grid-cols-3 px-5 py-3 items-center text-sm ${i < creditRows.length - 1 ? "border-b border-foreground/5" : ""}`}>
            <span className="text-foreground">{row.label}</span>
            <span className="text-center font-mono font-bold text-primary">{row.credits}</span>
            <span className="text-right font-mono text-muted-foreground text-xs">${(row.credits / (pricing?.creditsPerUsdc ?? 100)).toFixed(2)}</span>
          </div>
        ))}
      </div>
      {overrideRows.length > 0 && (
        <p className="text-muted-foreground text-base mb-3">
          Service-specific overrides: {overrideRows.map((r, i) => (
            <React.Fragment key={`${r.actionKey}-${r.chain}-${r.service}`}>
              {i > 0 && ", "}
              <code className="font-mono bg-foreground/10 px-1 py-0.5 rounded">{r.actionKey}</code> on <code className="font-mono bg-foreground/10 px-1 py-0.5 rounded">{r.service}</code>{r.chain !== "ALL" ? ` (${r.chain})` : ""}: {r.credits} credits
            </React.Fragment>
          ))}.
        </p>
      )}
    </>
  )
}
