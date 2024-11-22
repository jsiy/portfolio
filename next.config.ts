import { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // Define static export output
  output: "export",

  // Add the base path for GitHub Pages
  basePath: isProd ? '/personal-website' : '',
  
  // Configure asset prefix for static files
  assetPrefix: isProd ? '/personal-website/' : '',

  // Ensure trailing slash for proper static export
  trailingSlash: true,

  // Other optional Next.js configurations
  reactStrictMode: true,
  images: {
    unoptimized: true, // Necessary if using `next/image` for static sites
  },
};

export default nextConfig;
