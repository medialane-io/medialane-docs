import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://docs.medialane.io";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Core ──────────────────────────────────────────────────────────────────
    { url: BASE_URL,                                       changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE_URL}/about`,                            changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/apps`,                             changeFrequency: "monthly", priority: 0.9 },

    // ── Learn ─────────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/learn`,                            changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/learn/nft`,                        changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/learn/blockchain`,                 changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/learn/zero-knowledge`,             changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/learn/programmable-ip`,            changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/learn/tokenization`,               changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/learn/creator-launchpad`,          changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/learn/marketplace`,                changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/learn/pop-protocol`,               changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/learn/collection-drop`,            changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/learn/ip-collection-1155`,         changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/learn/remix`,                      changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/learn/web3`,                       changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/learn/protect-your-ip`,            changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/learn/programmable-licensing`,     changeFrequency: "monthly", priority: 0.7 },

    // ── Docs ──────────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/docs`,                             changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/docs/protocol`,                    changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/docs/sdk`,                         changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/docs/api`,                         changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/docs/contracts`,                   changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/docs/developers`,                  changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/docs/security`,                    changeFrequency: "monthly", priority: 0.7 },

    // ── Guidelines ────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/guidelines`,                       changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/guidelines/community`,             changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/guidelines/user-guidelines`,       changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/guidelines/terms`,                 changeFrequency: "yearly",  priority: 0.5 },
    { url: `${BASE_URL}/guidelines/privacy`,               changeFrequency: "yearly",  priority: 0.5 },
    { url: `${BASE_URL}/guidelines/compliance`,            changeFrequency: "monthly", priority: 0.6 },

    // ── Support ───────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/support`,                          changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`,                          changeFrequency: "monthly", priority: 0.6 },

    // ── DAO ───────────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/dao`,                              changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/dao/constitution`,                 changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/dao/governance`,                   changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/dao/token`,                        changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/dao/airdrop`,                      changeFrequency: "monthly", priority: 0.8 },

    // ── Links ─────────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/links`,                            changeFrequency: "monthly", priority: 0.6 },
  ];
}
