import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Webpack configuration for rate-limiter-flexible
  webpack: (config) => {
    // Add ignore-loader for .d.ts files
    config.module.rules.push({
      test: /\.d\.ts$/,
      use: 'ignore-loader',
    });
    
    return config;
  },
};

export default nextConfig;
