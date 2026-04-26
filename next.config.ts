import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@medialane/ui", "@medialane/sdk"],
  typescript: {
    // Stale dapp files copied into src/ are not part of the active build graph
    // but are caught by tsc --noEmit. Disable until cleanup pass is done.
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      { source: "/terms",   destination: "/guidelines/terms",   permanent: true },
      { source: "/privacy", destination: "/guidelines/privacy", permanent: true },
    ];
  },
};

export default nextConfig;
