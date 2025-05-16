import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone', // Optimizes for production deployment
  turbopack: {
    rules: {
      // Include the default rules
      // This ensures compatibility with existing webpack configurations
      include: ['**/*'],
    },
    // Resolve modules using Node.js resolution
    resolveAlias: {
      // Add any custom aliases here if needed
    }
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
    };
    return config;
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  typescript: {
    // Handle any TypeScript compilation errors
    ignoreBuildErrors: false,
  },
  eslint: {
    // Handle any ESLint errors during build
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;

