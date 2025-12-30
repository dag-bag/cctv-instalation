/**
 * SEO-Friendly Stock Images Configuration
 * All images are from Unsplash - high quality, free to use, optimized for web
 * Each image includes proper dimensions and SEO-optimized URLs
 */

export interface ImageConfig {
  url: string;
  alt: string;
  width?: number;
  height?: number;
  description?: string;
}

/**
 * Main hero images for different page types
 */
export const HERO_IMAGES: Record<string, ImageConfig> = {
  // General CCTV Installation
  default: {
    url: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop',
    alt: 'Professional CCTV Camera Installation and Security Services',
    width: 2070,
    height: 1380,
    description: 'Modern security camera installation on building exterior'
  },
  
  // CCTV Installation Service
  cctvInstallation: {
    url: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop',
    alt: 'CCTV Camera Installation Service by Expert Technicians',
    width: 2070,
    height: 1380,
    description: 'Professional installing CCTV camera system'
  },
  
  // CCTV Repair Service
  cctvRepair: {
    url: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop',
    alt: 'CCTV Camera Repair and Maintenance Services',
    width: 2070,
    height: 1380,
    description: 'Technician repairing CCTV camera system'
  },
  
  // IP Camera Installation
  ipCamera: {
    url: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop',
    alt: 'IP Camera Installation and Network Security Setup',
    width: 2070,
    height: 1380,
    description: 'Modern IP security camera system'
  },
  
  // Access Control System
  accessControl: {
    url: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop',
    alt: 'Access Control System Installation and Biometric Security',
    width: 2070,
    height: 1380,
    description: 'Biometric access control system'
  },
  
  // Video Door Phone
  videoDoorPhone: {
    url: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop',
    alt: 'Video Door Phone Installation and Intercom System',
    width: 2070,
    height: 1380,
    description: 'Video door phone and intercom system'
  },
  
  // Home Security
  homeSecurity: {
    url: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=2070&auto=format&fit=crop',
    alt: 'Home Security Camera Installation and Smart Home Integration',
    width: 2070,
    height: 1380,
    description: 'Smart home security system'
  },
  
  // Commercial Security
  commercialSecurity: {
    url: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=2070&auto=format&fit=crop',
    alt: 'Commercial CCTV Installation for Offices and Businesses',
    width: 2070,
    height: 1380,
    description: 'Commercial building security system'
  },
  
  // Brand Installation
  brandInstallation: {
    url: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop',
    alt: 'Authorized CCTV Brand Installation with Genuine Products',
    width: 2070,
    height: 1380,
    description: 'Professional brand CCTV installation'
  }
};

/**
 * Industry-specific hero images
 */
export const INDUSTRY_IMAGES: Record<string, ImageConfig> = {
  'Hospitals & Clinics': {
    url: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2070&auto=format&fit=crop',
    alt: 'Hospital CCTV Installation for Patient Safety and Security',
    width: 2070,
    height: 1380,
    description: 'Medical facility security system'
  },
  'Schools & Colleges': {
    url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070&auto=format&fit=crop',
    alt: 'School CCTV Installation for Campus Safety and Security',
    width: 2070,
    height: 1380,
    description: 'Educational institution security'
  },
  'Restaurants & Cafes': {
    url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop',
    alt: 'Restaurant CCTV Installation for Food Safety and Security',
    width: 2070,
    height: 1380,
    description: 'Restaurant security system'
  },
  'Retail Stores': {
    url: 'https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=2070&auto=format&fit=crop',
    alt: 'Retail Store CCTV Installation for Theft Prevention',
    width: 2070,
    height: 1380,
    description: 'Retail security monitoring'
  },
  'Warehouses & Manufacturing': {
    url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
    alt: 'Warehouse CCTV Installation for Inventory and Safety Monitoring',
    width: 2070,
    height: 1380,
    description: 'Warehouse security system'
  },
  'Offices & Corporate': {
    url: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=2070&auto=format&fit=crop',
    alt: 'Office CCTV Installation for Corporate Security',
    width: 2070,
    height: 1380,
    description: 'Corporate office security'
  },
  'Hotels & Guesthouses': {
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop',
    alt: 'Hotel CCTV Installation for Guest Safety and Security',
    width: 2070,
    height: 1380,
    description: 'Hotel security system'
  },
  'Construction Sites': {
    url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop',
    alt: 'Construction Site CCTV Installation for Material and Safety Monitoring',
    width: 2070,
    height: 1380,
    description: 'Construction site security'
  },
  'Event Venues & Auditoriums': {
    url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop',
    alt: 'Event Venue CCTV Installation for Crowd Control and Security',
    width: 2070,
    height: 1380,
    description: 'Event venue security'
  },
  'Housing Societies': {
    url: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop',
    alt: 'Housing Society CCTV Installation for Resident Safety',
    width: 2070,
    height: 1380,
    description: 'Residential society security'
  },
  'Smart Homes': {
    url: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=2070&auto=format&fit=crop',
    alt: 'Smart Home CCTV Installation with Home Automation Integration',
    width: 2070,
    height: 1380,
    description: 'Smart home security system'
  },
  'Temples & Religious Places': {
    url: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop',
    alt: 'Temple CCTV Installation for Security and Crowd Management',
    width: 2070,
    height: 1380,
    description: 'Religious place security'
  },
  'Transport Hubs': {
    url: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop',
    alt: 'Transport Hub CCTV Installation with License Plate Recognition',
    width: 2070,
    height: 1380,
    description: 'Transport hub security'
  },
  'Banks & ATMs': {
    url: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop',
    alt: 'Bank CCTV Installation for High-Security Financial Facilities',
    width: 2070,
    height: 1380,
    description: 'Bank security system'
  },
  'Gyms & Fitness Centers': {
    url: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=2070&auto=format&fit=crop',
    alt: 'Gym CCTV Installation for Member Safety and Security',
    width: 2070,
    height: 1380,
    description: 'Fitness center security'
  },
  'Parking Lots': {
    url: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop',
    alt: 'Parking Lot CCTV Installation with License Plate Recognition',
    width: 2070,
    height: 1380,
    description: 'Parking lot security'
  },
  'Car Dealerships': {
    url: 'https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=2070&auto=format&fit=crop',
    alt: 'Car Dealership CCTV Installation for Showroom Security',
    width: 2070,
    height: 1380,
    description: 'Car dealership security'
  },
  'Co-Working Spaces': {
    url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop',
    alt: 'Co-Working Space CCTV Installation with Access Control',
    width: 2070,
    height: 1380,
    description: 'Co-working space security'
  },
  'Fuel Stations & Petrol Pumps': {
    url: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop',
    alt: 'Fuel Station CCTV Installation for Forecourt Security',
    width: 2070,
    height: 1380,
    description: 'Fuel station security'
  },
  'Salons & Spas': {
    url: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop',
    alt: 'Salon CCTV Installation for Reception and Security',
    width: 2070,
    height: 1380,
    description: 'Salon security system'
  },
  'Coaching Centers': {
    url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070&auto=format&fit=crop',
    alt: 'Coaching Center CCTV Installation for Student Safety',
    width: 2070,
    height: 1380,
    description: 'Coaching center security'
  },
  'Markets & Street Food': {
    url: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop',
    alt: 'Market CCTV Installation for Stall and Crowd Security',
    width: 2070,
    height: 1380,
    description: 'Market security system'
  },
  'IT Parks & Tech Hubs': {
    url: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2070&auto=format&fit=crop',
    alt: 'IT Park CCTV Installation for Enterprise Security',
    width: 2070,
    height: 1380,
    description: 'IT park security'
  },
  'Wedding Halls & Banquets': {
    url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2070&auto=format&fit=crop',
    alt: 'Wedding Hall CCTV Installation for Event Security',
    width: 2070,
    height: 1380,
    description: 'Wedding hall security'
  },
  'Pharmacies & Medical Stores': {
    url: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2070&auto=format&fit=crop',
    alt: 'Pharmacy CCTV Installation for Counter and Storage Security',
    width: 2070,
    height: 1380,
    description: 'Pharmacy security system'
  },
  'Jewelry Stores': {
    url: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop',
    alt: 'Jewelry Store CCTV Installation with High-Resolution Cameras',
    width: 2070,
    height: 1380,
    description: 'Jewelry store security'
  },
  'E-commerce Warehouses': {
    url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
    alt: 'E-commerce Warehouse CCTV Installation for Inventory Security',
    width: 2070,
    height: 1380,
    description: 'E-commerce warehouse security'
  }
};

/**
 * Service-specific images
 */
export const SERVICE_IMAGES: Record<string, ImageConfig> = {
  'CCTV Camera Installation': HERO_IMAGES.cctvInstallation,
  'IP Camera Installation': HERO_IMAGES.ipCamera,
  'CCTV Repair': HERO_IMAGES.cctvRepair,
  'Access Control System': HERO_IMAGES.accessControl,
  'Biometric Installation': HERO_IMAGES.accessControl,
  'Video Door Phone Installation': HERO_IMAGES.videoDoorPhone,
  // Fallback to default for any service not explicitly listed
  'default': HERO_IMAGES.default,
};

/**
 * Get image configuration by key
 */
export function getImageConfig(key: string, type: 'hero' | 'industry' | 'service' = 'hero'): ImageConfig {
  if (type === 'industry' && INDUSTRY_IMAGES[key]) {
    return INDUSTRY_IMAGES[key];
  }
  if (type === 'service' && SERVICE_IMAGES[key]) {
    return SERVICE_IMAGES[key];
  }
  if (HERO_IMAGES[key]) {
    return HERO_IMAGES[key];
  }
  return HERO_IMAGES.default;
}

/**
 * Get image URL with proper SEO parameters
 */
export function getImageUrl(key: string, type: 'hero' | 'industry' | 'service' = 'hero', width: number = 2070): string {
  const config = getImageConfig(key, type);
  // Update width parameter in URL if needed
  if (config.url.includes('w=')) {
    return config.url.replace(/w=\d+/, `w=${width}`);
  }
  return `${config.url}&w=${width}`;
}

/**
 * Get SEO-optimized alt text
 */
export function getImageAlt(key: string, type: 'hero' | 'industry' | 'service' = 'hero', context?: { city?: string; locality?: string; service?: string }): string {
  const config = getImageConfig(key, type);
  let alt = config.alt;
  
  if (context) {
    if (context.locality && context.city) {
      alt = `${alt} in ${context.locality}, ${context.city}`;
    } else if (context.city) {
      alt = `${alt} in ${context.city}`;
    }
    if (context.service) {
      alt = `${context.service} - ${alt}`;
    }
  }
  
  return alt;
}

