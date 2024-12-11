import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  target: 'serverless',
  experimental: {
    serverlessTraceTarget: true,
  },
};

export default nextConfig;
