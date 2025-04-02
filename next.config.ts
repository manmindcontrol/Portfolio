import type { NextConfig } from "next";

const nextConfig = {
  experimental: {
    appDir: true, // Required for using `app/`
  },
};

export default nextConfig;
