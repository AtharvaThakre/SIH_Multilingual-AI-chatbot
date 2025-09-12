import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  // Remove problematic configurations that might cause build issues
  experimental: {
    serverComponentsExternalPackages: ['@google/generative-ai']
  }
};

export default nextConfig;
