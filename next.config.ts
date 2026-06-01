import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@medialane/ui", "@medialane/sdk"],
  async redirects() {
    return [
      { source: "/terms",          destination: "/guidelines/terms",          permanent: true },
      { source: "/privacy",        destination: "/guidelines/privacy",        permanent: true },
      { source: "/campaign-terms", destination: "/guidelines/campaign-terms", permanent: true },
    ];
  },
};

export default nextConfig;
