import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  transpilePackages: ["@medialane/ui", "@medialane/sdk"],
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  async redirects() {
    return [
      { source: "/terms",          destination: "/guidelines/terms",          permanent: true },
      { source: "/privacy",        destination: "/guidelines/privacy",        permanent: true },
      { source: "/campaign-terms", destination: "/guidelines/campaign-terms", permanent: true },
      { source: "/docs/compliance",           destination: "/guidelines/compliance",      permanent: true },
      { source: "/docs/community-guidelines",  destination: "/guidelines/community",       permanent: true },
      { source: "/docs/user-guidelines",       destination: "/guidelines/user-guidelines", permanent: true },
      { source: "/docs",                       destination: "/dev",                        permanent: true },
      { source: "/docs/:path*",                destination: "/dev/:path*",                 permanent: true },
    ];
  },
};

export default nextConfig;
