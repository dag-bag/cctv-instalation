import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true, // Enable Gzip/Brotli compression
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ],
      },
    ];
  },
  async rewrites() {
    return [
      // Pattern 2: /service/location → /location/service
      // This allows users to browse by service first
      {
        source: '/:service(installation-services|repair-services|maintenance-services|upgrade-services|wireless-cctv-installation|ip-camera-installation|dome-camera-installation|bullet-camera-installation|ptz-camera-installation|nvr-dvr-installation|electrician-services|home-automation|intercom-installation|biometric-installation|access-control-installation|alarm-system-installation|video-door-phone|network-cabling|wifi-installation|solar-cctv-installation)/:location',
        destination: '/:location/:service',
      },
    ];
  },
};

export default nextConfig;
