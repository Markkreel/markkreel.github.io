import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Required for GitHub Pages - generates static HTML/CSS/JS files
  // Creates an 'out' folder when you run 'npm run build'
  output: "export",

  // ✅ Required for GitHub Pages - GitHub Pages cannot optimize images
  // so this disables Next.js's built-in image optimization
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
