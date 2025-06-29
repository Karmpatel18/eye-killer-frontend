import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eyekiller.s3-assets.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
