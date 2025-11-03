import { MetadataRoute } from 'next';
import { getAllLocationsWithLocalities } from '@/data/locations';
import { SERVICES, SERVICE_CATEGORIES } from '@/data/services';

// Helper to generate canonical URLs
const getCanonicalUrl = (path: string): string => {
  return `https://www.cctvinstallationdelhi.in${path}`.toLowerCase().replace(/\s+/g, '-');
};

type ChangeFrequency = 'daily' | 'weekly' | 'monthly' | 'yearly';

type SitemapEntry = {
  url: string;
  lastModified: Date | string;
  changeFrequency: ChangeFrequency;
  priority: number;
}

// Export as both default and named export for compatibility
export function generateSitemap(): SitemapEntry[] {
  const baseUrl = 'https://www.cctvinstallationdelhi.in';
  const routes: SitemapEntry[] = [];
  const urlSet = new Set<string>();

  // Add a URL to sitemap if it's not a duplicate
  const addUrl = (path: string, priority: number, changeFrequency: ChangeFrequency = 'weekly'): void => {
    // Ensure path starts with a slash and doesn't end with one
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    const canonicalUrl = getCanonicalUrl(normalizedPath);
    
    if (!urlSet.has(canonicalUrl)) {
      urlSet.add(canonicalUrl);
      routes.push({
        url: canonicalUrl,
        lastModified: new Date(),
        changeFrequency,
        priority,
      });
    }
  };

  // 1. Core pages
  addUrl('/', 1.0, 'daily');
  addUrl('/about', 0.8);
  addUrl('/contact', 0.8);
  addUrl('/privacy-policy', 0.3, 'yearly');
  addUrl('/terms-of-service', 0.3, 'yearly');

  // 2. Location pages
  const allLocations = getAllLocationsWithLocalities();
  allLocations.forEach(location => {
    addUrl(`/locations/${location.slug}`, 0.8);
  });

  // 3. Service pages
  SERVICES.forEach(service => {
    // Main service page
    addUrl(`/services/${service.slug}`, service.category === SERVICE_CATEGORIES.CCTV ? 0.9 : 0.8);

    // Service location pages (only for services that should have location pages)
    if (service.isLocationSpecific || service.availableLocations?.length) {
      const locations = service.availableLocations?.length 
        ? allLocations.filter(loc => service.availableLocations?.includes(loc.slug))
        : allLocations;

      locations.forEach(location => {
        addUrl(`/services/${service.slug}/${location.slug}`, 0.7);
      });
    }
  });

  return routes;
}

// Default export for Next.js
export default function sitemap(): MetadataRoute.Sitemap {
  return generateSitemap();
}
