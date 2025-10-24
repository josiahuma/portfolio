import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // 👈 Enables static export
  images: {
    unoptimized: true, // 👈 Allows Next/Image to work without server
  },
  trailingSlash: true, // 👈 Optional, helps with static hosting
};

export default nextConfig;
