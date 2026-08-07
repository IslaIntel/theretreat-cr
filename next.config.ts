import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import path from "path";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  transpilePackages: ["@bluemountain/brand"],
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "theretreat.cr" },
      { protocol: "https", hostname: "**.optimole.com" },
    ],
  },
  experimental: {
    // allow importing content JSON from monorepo root
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@content": path.resolve(__dirname, "../../content/retreat"),
    };
    return config;
  },
};

export default withNextIntl(nextConfig);
