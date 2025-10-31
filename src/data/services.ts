// CCTV and Related Services Data

export interface Service {
  slug: string;
  name: string;
  category: string;
  icon: string;
  description: string;
  features: string[];
  priceRange?: string;
}

export const SERVICE_CATEGORIES = {
  CCTV: "cctv",
  ELECTRICIAN: "electrician",
  SECURITY: "security",
  SMART_HOME: "smart-home",
  NETWORKING: "networking",
};

export const SERVICES: Service[] = [
  // CCTV Services
  {
    slug: "installation-services",
    name: "CCTV Installation Services",
    category: SERVICE_CATEGORIES.CCTV,
    icon: "🎥",
    description: "Professional CCTV camera installation with expert setup and configuration",
    features: [
      "HD/4K Camera Installation",
      "DVR/NVR Setup",
      "Mobile App Configuration",
      "Professional Cable Management",
      "Free Site Survey",
      "1 Year Warranty",
    ],
    priceRange: "₹5,000 - ₹50,000",
  },
  {
    slug: "repair-services",
    name: "CCTV Repair Services",
    category: SERVICE_CATEGORIES.CCTV,
    icon: "🔧",
    description: "Fast and reliable CCTV repair services for all brands",
    features: [
      "Same Day Service",
      "All Brands Repair",
      "DVR/NVR Repair",
      "Camera Replacement",
      "Connection Issues",
      "Software Updates",
    ],
    priceRange: "₹500 - ₹10,000",
  },
  {
    slug: "maintenance-services",
    name: "CCTV Maintenance Services",
    category: SERVICE_CATEGORIES.CCTV,
    icon: "🛠️",
    description: "Regular CCTV maintenance and AMC services",
    features: [
      "Quarterly Maintenance",
      "Annual Contracts",
      "Lens Cleaning",
      "System Health Check",
      "Software Updates",
      "Priority Support",
    ],
    priceRange: "₹2,000 - ₹20,000/year",
  },
  {
    slug: "upgrade-services",
    name: "CCTV Upgrade Services",
    category: SERVICE_CATEGORIES.CCTV,
    icon: "📈",
    description: "Upgrade your old CCTV system to latest technology",
    features: [
      "Analog to IP Upgrade",
      "HD to 4K Upgrade",
      "Storage Expansion",
      "Cloud Integration",
      "AI Features",
      "Remote Viewing Setup",
    ],
    priceRange: "₹10,000 - ₹1,00,000",
  },
  {
    slug: "wireless-cctv-installation",
    name: "Wireless CCTV Installation",
    category: SERVICE_CATEGORIES.CCTV,
    icon: "📡",
    description: "Wire-free CCTV camera installation with WiFi connectivity",
    features: [
      "No Wire Clutter",
      "WiFi Enabled Cameras",
      "Battery Backup Options",
      "Easy Installation",
      "Mobile Monitoring",
      "Cloud Storage",
    ],
    priceRange: "₹8,000 - ₹60,000",
  },
  {
    slug: "ip-camera-installation",
    name: "IP Camera Installation",
    category: SERVICE_CATEGORIES.CCTV,
    icon: "🌐",
    description: "Network-based IP camera installation and configuration",
    features: [
      "High Resolution",
      "Network Configuration",
      "PoE Installation",
      "Remote Access",
      "Advanced Analytics",
      "Cloud Integration",
    ],
    priceRange: "₹15,000 - ₹2,00,000",
  },
  {
    slug: "dome-camera-installation",
    name: "Dome Camera Installation",
    category: SERVICE_CATEGORIES.CCTV,
    icon: "⚫",
    description: "Indoor and outdoor dome camera installation",
    features: [
      "360° Coverage",
      "Vandal Proof",
      "Day/Night Vision",
      "Weather Resistant",
      "Discreet Design",
      "Professional Setup",
    ],
    priceRange: "₹6,000 - ₹40,000",
  },
  {
    slug: "bullet-camera-installation",
    name: "Bullet Camera Installation",
    category: SERVICE_CATEGORIES.CCTV,
    icon: "📹",
    description: "Long-range bullet camera installation for outdoor surveillance",
    features: [
      "Long Range",
      "Weatherproof",
      "Infrared Night Vision",
      "Varifocal Lens",
      "Easy Mounting",
      "High Resolution",
    ],
    priceRange: "₹5,000 - ₹35,000",
  },
  {
    slug: "ptz-camera-installation",
    name: "PTZ Camera Installation",
    category: SERVICE_CATEGORIES.CCTV,
    icon: "🔄",
    description: "Pan-Tilt-Zoom camera installation with remote control",
    features: [
      "360° Pan",
      "180° Tilt",
      "Optical Zoom",
      "Auto Tracking",
      "Preset Positions",
      "Remote Control",
    ],
    priceRange: "₹20,000 - ₹1,50,000",
  },
  {
    slug: "nvr-dvr-installation",
    name: "NVR/DVR Installation",
    category: SERVICE_CATEGORIES.CCTV,
    icon: "💾",
    description: "Network Video Recorder and Digital Video Recorder setup",
    features: [
      "Multi-Channel Support",
      "Large Storage",
      "Remote Access",
      "Backup Solutions",
      "Mobile App Setup",
      "Professional Configuration",
    ],
    priceRange: "₹8,000 - ₹80,000",
  },
  
  // Electrician Services
  {
    slug: "electrician-services",
    name: "Electrician Services",
    category: SERVICE_CATEGORIES.ELECTRICIAN,
    icon: "⚡",
    description: "Professional electrician services for all electrical work",
    features: [
      "Wiring & Rewiring",
      "Switch & Socket Installation",
      "MCB/RCCB Installation",
      "Fan Installation",
      "Light Fitting",
      "Emergency Services",
    ],
    priceRange: "₹300 - ₹10,000",
  },
  {
    slug: "home-automation",
    name: "Home Automation Services",
    category: SERVICE_CATEGORIES.SMART_HOME,
    icon: "🏠",
    description: "Smart home automation installation and setup",
    features: [
      "Smart Switches",
      "Voice Control",
      "Mobile App Control",
      "Automated Lighting",
      "Climate Control",
      "Security Integration",
    ],
    priceRange: "₹15,000 - ₹3,00,000",
  },
  {
    slug: "intercom-installation",
    name: "Intercom Installation",
    category: SERVICE_CATEGORIES.SECURITY,
    icon: "📞",
    description: "Video intercom and door phone installation",
    features: [
      "Video Intercom",
      "Wireless Options",
      "Multi-Unit Support",
      "Mobile Integration",
      "Door Lock Control",
      "Recording Feature",
    ],
    priceRange: "₹8,000 - ₹50,000",
  },
  {
    slug: "biometric-installation",
    name: "Biometric System Installation",
    category: SERVICE_CATEGORIES.SECURITY,
    icon: "👆",
    description: "Fingerprint and face recognition system installation",
    features: [
      "Fingerprint Scanner",
      "Face Recognition",
      "Attendance System",
      "Access Control",
      "Multi-User Support",
      "Software Integration",
    ],
    priceRange: "₹10,000 - ₹1,00,000",
  },
  {
    slug: "access-control-installation",
    name: "Access Control System",
    category: SERVICE_CATEGORIES.SECURITY,
    icon: "🚪",
    description: "Electronic door access control system installation",
    features: [
      "Card Access",
      "Biometric Integration",
      "Remote Control",
      "Multiple Doors",
      "Time-based Access",
      "Audit Trails",
    ],
    priceRange: "₹15,000 - ₹2,00,000",
  },
  {
    slug: "alarm-system-installation",
    name: "Alarm System Installation",
    category: SERVICE_CATEGORIES.SECURITY,
    icon: "🚨",
    description: "Security alarm and intrusion detection system",
    features: [
      "Motion Sensors",
      "Door/Window Sensors",
      "Siren Alert",
      "Mobile Notifications",
      "24/7 Monitoring",
      "Professional Setup",
    ],
    priceRange: "₹8,000 - ₹60,000",
  },
  {
    slug: "video-door-phone",
    name: "Video Door Phone Installation",
    category: SERVICE_CATEGORIES.SECURITY,
    icon: "🎥",
    description: "Video door phone system for enhanced security",
    features: [
      "HD Video Quality",
      "Two-Way Audio",
      "Night Vision",
      "Recording Capability",
      "Remote Unlock",
      "Mobile App",
    ],
    priceRange: "₹6,000 - ₹40,000",
  },
  {
    slug: "network-cabling",
    name: "Network Cabling Services",
    category: SERVICE_CATEGORIES.NETWORKING,
    icon: "🔌",
    description: "Professional network and data cabling services",
    features: [
      "Cat5e/Cat6 Cabling",
      "Structured Cabling",
      "Fiber Optic",
      "Network Rack Setup",
      "Cable Testing",
      "Professional Termination",
    ],
    priceRange: "₹5,000 - ₹50,000",
  },
  {
    slug: "wifi-installation",
    name: "WiFi Installation Services",
    category: SERVICE_CATEGORIES.NETWORKING,
    icon: "📶",
    description: "WiFi router and mesh network installation",
    features: [
      "Router Configuration",
      "Mesh Network Setup",
      "Access Point Installation",
      "Coverage Optimization",
      "Security Setup",
      "Guest Network",
    ],
    priceRange: "₹2,000 - ₹30,000",
  },
  {
    slug: "solar-cctv-installation",
    name: "Solar CCTV Installation",
    category: SERVICE_CATEGORIES.CCTV,
    icon: "☀️",
    description: "Solar-powered CCTV camera installation",
    features: [
      "Solar Panel Setup",
      "Battery Backup",
      "Off-Grid Solution",
      "Eco-Friendly",
      "Cost Effective",
      "Remote Locations",
    ],
    priceRange: "₹15,000 - ₹80,000",
  },
];

// Get services by category
export const getServicesByCategory = (category: string): Service[] => {
  return SERVICES.filter(service => service.category === category);
};

// Get service by slug
export const getServiceBySlug = (slug: string): Service | undefined => {
  return SERVICES.find(service => service.slug === slug);
};

// Get all service slugs (for static path generation)
export const getAllServiceSlugs = (): string[] => {
  return SERVICES.map(service => service.slug);
};

// Popular service combinations for search keywords
export const POPULAR_SEARCH_TERMS = [
  "cctv-installation",
  "cctv-repair",
  "security-camera",
  "surveillance-system",
  "ip-camera",
  "dome-camera",
  "bullet-camera",
  "wireless-cctv",
  "night-vision-camera",
  "outdoor-camera",
  "indoor-camera",
  "home-security",
  "office-security",
  "cctv-amc",
  "cctv-maintenance",
];
