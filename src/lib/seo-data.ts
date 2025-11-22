export const CITIES = [
  'Delhi',
  'Gurgaon',
  'Noida',
  'Ghaziabad',
  'Faridabad'
];

export const LOCALITIES: Record<string, string[]> = {
  'Delhi': [
    'Dwarka', 'Rohini', 'Janakpuri', 'Vasant Kunj', 'Lajpat Nagar', 'Saket', 'Hauz Khas', 'Greater Kailash', 'Pitampura', 'Paschim Vihar',
    'Mayur Vihar', 'Laxmi Nagar', 'Karol Bagh', 'Connaught Place', 'Chandni Chowk', 'Nehru Place', 'Okhla', 'Sarita Vihar', 'Jasola', 'Kalkaji',
    'Malviya Nagar', 'Green Park', 'Defence Colony', 'South Extension', 'Rajouri Garden', 'Punjabi Bagh', 'Model Town', 'Ashok Vihar', 'Shalimar Bagh'
  ],
  'Gurgaon': [
    'DLF Phase 1', 'DLF Phase 2', 'DLF Phase 3', 'DLF Phase 4', 'DLF Phase 5', 'Sector 14', 'Sector 15', 'Sector 21', 'Sector 22', 'Sector 23',
    'Sector 31', 'Sector 40', 'Sector 45', 'Sector 46', 'Sector 56', 'Sector 57', 'Sohna Road', 'Golf Course Road', 'MG Road', 'Sushant Lok',
    'Nirvana Country', 'South City 1', 'South City 2', 'Palam Vihar', 'Udyog Vihar', 'Manesar'
  ],
  'Noida': [
    'Sector 18', 'Sector 15', 'Sector 16', 'Sector 62', 'Sector 63', 'Sector 1', 'Sector 2', 'Sector 3', 'Sector 4', 'Sector 5',
    'Sector 10', 'Sector 11', 'Sector 12', 'Sector 19', 'Sector 20', 'Sector 21', 'Sector 22', 'Sector 23', 'Sector 24', 'Sector 25',
    'Sector 26', 'Sector 27', 'Sector 28', 'Sector 29', 'Sector 30', 'Sector 31', 'Sector 33', 'Sector 34', 'Sector 35', 'Sector 36',
    'Sector 37', 'Sector 39', 'Sector 40', 'Sector 41', 'Sector 44', 'Sector 45', 'Sector 46', 'Sector 47', 'Sector 48', 'Sector 49',
    'Sector 50', 'Sector 51', 'Sector 52', 'Sector 53', 'Sector 55', 'Sector 56', 'Sector 57', 'Sector 58', 'Sector 59', 'Sector 60',
    'Sector 61', 'Sector 70', 'Sector 71', 'Sector 72', 'Sector 73', 'Sector 74', 'Sector 75', 'Sector 76', 'Sector 77', 'Sector 78',
    'Sector 79', 'Sector 82', 'Sector 93', 'Sector 100', 'Sector 104', 'Sector 105', 'Sector 108', 'Sector 110', 'Sector 119', 'Sector 120',
    'Sector 121', 'Sector 122', 'Sector 128', 'Sector 135', 'Sector 137', 'Sector 143', 'Sector 144', 'Sector 150', 'Sector 151', 'Sector 168'
  ],
  'Ghaziabad': [
    'Indirapuram', 'Vaishali', 'Vasundhara', 'Kaushambi', 'Raj Nagar Extension', 'Crossings Republik', 'Mohan Nagar', 'Sahibabad', 'Govindpuram', 'Lal Kuan'
  ],
  'Faridabad': [
    'Sector 15', 'Sector 16', 'Sector 21', 'Sector 28', 'Sector 29', 'Sector 30', 'Sector 31', 'Sector 37', 'Sector 46', 'NIT', 'Greenfield Colony', 'Charmwood Village'
  ]
};

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
