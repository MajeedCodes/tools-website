import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/sitemap",
      },
    ];
  },
};


export default nextConfig;
