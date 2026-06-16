import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { DOCS_NAV } from "@/lib/docs-nav"

export const metadata: Metadata = {
  title: "Developers | Medialane Docs",
  description:
    "Build on Medialane — the protocol, SDK, API, and contracts. Permissionless and verifiable, for people and AI agents alike.",
  openGraph: {
    title: "Developers | Medialane Docs",
    description:
      "Build on Medialane — the protocol, SDK, API, and contracts. Permissionless and verifiable, for people and AI agents alike.",
    url: "https://docs.medialane.io/dev",
  },
}

export default function DeveloperHubPage() {
  return (
    <div className="space-y-10">
      <div className="max-w-2xl">
        <p className="text-muted-foreground leading-relaxed">
          Medialane is an open protocol — a set of immutable contracts and the SDK and API that
          expose them. Anyone can build on it without asking, and everything the apps do is
          available to you and to autonomous agents on the same terms. The contract is the only
          authority; every claim here is something you can verify on-chain.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {DOCS_NAV.map(({ href, title, description, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-white/20 hover:bg-white/[0.04]"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-4" />
              </span>
              <span className="font-semibold text-white">{title}</span>
              <ArrowUpRight className="ml-auto size-4 text-muted-foreground/40 transition-colors group-hover:text-white" />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
