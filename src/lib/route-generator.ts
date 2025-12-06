import { CITIES, LOCALITIES, SERVICES, INDUSTRIES, createSlug, generateQuerySlugs } from './seo-data';

/**
 * Centralized route generation utilities for static export
 */

// Brands list (from brands page)
export const BRANDS = ['Hikvision', 'CP Plus', 'Dahua', 'Honeywell', 'Bosch', 'Panasonic', 'Godrej', 'Samsung', 'Sony', 'Tiandy', 'Uniview', 'Ezviz'];

// Repair issues list (from repairs page)
export const REPAIR_ISSUES = [
  'camera-not-working',
  'no-signal',
  'blur-image',
  'recording-issue',
  'mobile-view-setup',
  'dvr-hard-disk-replacement',
  'password-reset',
  'online-configuration',
  'cable-repair',
  'power-supply-repair'
];

/**
 * Generate all service city routes
 */
export function generateServiceCityRoutes() {
  return CITIES.map(city => ({
    city: createSlug(city)
  }));
}

/**
 * Generate all service city/locality routes
 */
export function generateServiceLocalityRoutes() {
  const params: { city: string; locality: string }[] = [];
  
  for (const [city, localities] of Object.entries(LOCALITIES)) {
    const citySlug = createSlug(city);
    for (const locality of localities) {
      params.push({
        city: citySlug,
        locality: createSlug(locality)
      });
    }
  }
  
  return params;
}

/**
 * Generate all service routes (city × locality × service)
 * ~230,000 routes
 */
export function generateAllServiceRoutes() {
  const params: { city: string; locality: string; service: string }[] = [];
  
  for (const [city, localities] of Object.entries(LOCALITIES)) {
    const citySlug = createSlug(city);
    for (const locality of localities) {
      const localitySlug = createSlug(locality);
      for (const service of SERVICES) {
        params.push({
          city: citySlug,
          locality: localitySlug,
          service: createSlug(service)
        });
      }
    }
  }
  
  return params;
}

/**
 * Generate all brand routes
 */
export function generateBrandRoutes() {
  return BRANDS.map(brand => ({
    brand: createSlug(brand)
  }));
}

/**
 * Generate all brand/city routes
 */
export function generateBrandCityRoutes() {
  const params: { brand: string; city: string }[] = [];
  
  for (const brand of BRANDS) {
    const brandSlug = createSlug(brand);
    for (const city of CITIES) {
      params.push({
        brand: brandSlug,
        city: createSlug(city)
      });
    }
  }
  
  return params;
}

/**
 * Generate all brand/city/locality routes
 */
export function generateBrandLocalityRoutes() {
  const params: { brand: string; city: string; locality: string }[] = [];
  
  for (const brand of BRANDS) {
    const brandSlug = createSlug(brand);
    for (const [city, localities] of Object.entries(LOCALITIES)) {
      const citySlug = createSlug(city);
      for (const locality of localities) {
        params.push({
          brand: brandSlug,
          city: citySlug,
          locality: createSlug(locality)
        });
      }
    }
  }
  
  return params;
}

/**
 * Generate all industry routes
 */
export function generateIndustryRoutes() {
  return INDUSTRIES.map(industry => ({
    industry: createSlug(industry)
  }));
}

/**
 * Generate all industry/city routes
 */
export function generateIndustryCityRoutes() {
  const params: { industry: string; city: string }[] = [];
  
  for (const industry of INDUSTRIES) {
    const industrySlug = createSlug(industry);
    for (const city of CITIES) {
      params.push({
        industry: industrySlug,
        city: createSlug(city)
      });
    }
  }
  
  return params;
}

/**
 * Generate all industry/city/locality routes
 */
export function generateIndustryLocalityRoutes() {
  const params: { industry: string; city: string; locality: string }[] = [];
  
  for (const industry of INDUSTRIES) {
    const industrySlug = createSlug(industry);
    for (const [city, localities] of Object.entries(LOCALITIES)) {
      const citySlug = createSlug(city);
      for (const locality of localities) {
        params.push({
          industry: industrySlug,
          city: citySlug,
          locality: createSlug(locality)
        });
      }
    }
  }
  
  return params;
}

/**
 * Generate all repair issue routes
 */
export function generateRepairIssueRoutes() {
  return REPAIR_ISSUES.map(issue => ({
    issue
  }));
}

/**
 * Generate all repair/city routes
 */
export function generateRepairCityRoutes() {
  const params: { issue: string; city: string }[] = [];
  
  for (const issue of REPAIR_ISSUES) {
    for (const city of CITIES) {
      params.push({
        issue,
        city: createSlug(city)
      });
    }
  }
  
  return params;
}

/**
 * Generate all repair/city/locality routes
 */
export function generateRepairLocalityRoutes() {
  const params: { issue: string; city: string; locality: string }[] = [];
  
  for (const issue of REPAIR_ISSUES) {
    for (const [city, localities] of Object.entries(LOCALITIES)) {
      const citySlug = createSlug(city);
      for (const locality of localities) {
        params.push({
          issue,
          city: citySlug,
          locality: createSlug(locality)
        });
      }
    }
  }
  
  return params;
}

/**
 * Generate all legacy slug routes
 */
export function generateLegacySlugRoutes() {
  return generateQuerySlugs().map(slug => ({
    slug
  }));
}

/**
 * Calculate total route count for verification
 */
export function calculateTotalRoutes() {
  const counts = {
    serviceCities: generateServiceCityRoutes().length,
    serviceLocalities: generateServiceLocalityRoutes().length,
    services: generateAllServiceRoutes().length,
    brands: generateBrandRoutes().length,
    brandCities: generateBrandCityRoutes().length,
    brandLocalities: generateBrandLocalityRoutes().length,
    industries: generateIndustryRoutes().length,
    industryCities: generateIndustryCityRoutes().length,
    industryLocalities: generateIndustryLocalityRoutes().length,
    repairIssues: generateRepairIssueRoutes().length,
    repairCities: generateRepairCityRoutes().length,
    repairLocalities: generateRepairLocalityRoutes().length,
    legacySlugs: generateLegacySlugRoutes().length,
  };
  
  const total = Object.values(counts).reduce((sum, count) => sum + count, 0);
  
  return {
    ...counts,
    total,
    details: counts
  };
}
