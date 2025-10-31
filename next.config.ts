import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
