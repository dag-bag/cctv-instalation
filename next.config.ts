import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enable static HTML export
  trailingSlash: true, // Add trailing slashes to all routes for static export
  compress: true, // Enable Gzip/Brotli compression
  images: {
    // unoptimized: true, // Required for static export as image optimization requires a server
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Note: headers() and rewrites() are not supported with output: 'export'
  // These features require a server and are removed for static export
};

export default nextConfig;
