import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://picsum.photos/id/**')],
  },
  cacheComponents: true
};

export default nextConfig;
