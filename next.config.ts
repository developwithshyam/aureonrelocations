import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "aureonrelocations.ae" }],
        destination: "https://www.aureonrelocations.ae/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "aureonrelocations.ae" }],
        destination: "https://www.aureonrelocations.ae/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
