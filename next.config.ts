import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Enables static export (HTML/CSS/JS only) for GitHub Pages
  output: 'export',
  
  // 2. Allows your JS scripts to run during the migration without blocking the build
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // 3. Fixes image issues on static hosts like GitHub Pages
  images: {
    unoptimized: true,
  },
};

export default nextConfig;