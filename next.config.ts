import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@medialane/ui", "@medialane/sdk"],
  async redirects() {
    return [
      { source: "/terms",          destination: "/guidelines/terms",          permanent: true },
      { source: "/privacy",        destination: "/guidelines/privacy",        permanent: true },
      { source: "/campaign-terms", destination: "/guidelines/campaign-terms", permanent: true },
      { source: "/docs/compliance",           destination: "/guidelines/compliance",      permanent: true },
      { source: "/docs/community-guidelines",  destination: "/guidelines/community",       permanent: true },
      { source: "/docs/user-guidelines",       destination: "/guidelines/user-guidelines", permanent: true },
      // The technical reference moved out of the redundant /docs namespace into /dev.
      // (Keep this AFTER the /guidelines redirects above — first match wins.)
      { source: "/docs",                       destination: "/dev",                        permanent: true },
      { source: "/docs/:path*",                destination: "/dev/:path*",                 permanent: true },
    ];
  },
};

export default nextConfig;
