import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "dedicated-pleasure-920f043aa1.strapiapp.comhttps",
      },
      {
        hostname: "dedicated-pleasure-920f043aa1.media.strapiapp.com",
      },
    ],
  },
  eslint:{
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
