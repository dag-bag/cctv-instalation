export const CITIES = [
  'Delhi',
  'Gurgaon',
  'Noida',
  'Ghaziabad',
  'Faridabad'
];

import localitiesData from '../data/localities.json';

export const LOCALITIES: Record<string, string[]> = localitiesData;

export const SERVICES = [
  'IP Camera Installation',
  'CCTV Camera Installation',
  'CCTV Repair',
  'Biometric Installation',
  'Video Door Phone Installation',
  'Access Control System',
  'Intercom System Installation',
  'Security Alarm System',
  'Fire Alarm System',
  'Electric Fence Installation',
  'Electrical Wiring for CCTV',
  'Power Supply Installation',
  'Inverter Connection for CCTV',
  'Smart Home Automation',
  'Video Door Phone Wiring',
  'MCB Box Installation',
  'Earthing for CCTV'
];

// Helper to create a slug from text
export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric chars with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

// Helper to parse a flat slug into components
// Slug format: [service-slug]-in-[locality-slug]-[city-slug]
// Example: ip-camera-installation-in-dwarka-delhi
export function parseSlug(slug: string) {
  if (!slug.includes('-in-')) return null;

  const parts = slug.split('-in-');
  if (parts.length !== 2) return null;

  const serviceSlug = parts[0];
  const locationSlug = parts[1];

  // Find Service
  const service = SERVICES.find(s => createSlug(s) === serviceSlug);
  if (!service) return null;

  // Find City (check end of location slug)
  const city = CITIES.find(c => locationSlug.endsWith(createSlug(c)));
  if (!city) return null;

  // Extract Locality
  const citySlug = createSlug(city);
  // locality-slug-city-slug -> remove -city-slug from end
  const localitySlug = locationSlug.slice(0, -(citySlug.length + 1)); // +1 for the hyphen
  
  const locality = LOCALITIES[city]?.find(l => createSlug(l) === localitySlug);
  
  if (!locality) return null;

  return {
    service,
    city,
    locality
  };
}

// Helper to find service by slug (exact or partial match)
export function getServiceBySlug(slug: string): string | null {
  return SERVICES.find(s => createSlug(s) === slug) || null;
}

// Helper to find location (city or locality) by slug
export function findLocation(slug: string): { city: string; locality?: string } | null {
  // Check cities
  const city = CITIES.find(c => createSlug(c) === slug);
  if (city) return { city };

  // Check localities
  for (const [c, localities] of Object.entries(LOCALITIES)) {
    const locality = localities.find(l => createSlug(l) === slug);
    if (locality) {
      return { city: c, locality };
    }
  }

  return null;
}
