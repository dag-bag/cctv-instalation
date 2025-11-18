import { MetadataRoute } from 'next';
import { getAllLocationsWithLocalities } from '@/data/locations';
import { SERVICES, SERVICE_CATEGORIES } from '@/data/services';
import { CITY_SLUGS } from '@/data/cities';

// Helper to generate canonical URLs
const getCanonicalUrl = (path: string): string => {
  return `${process.env.NEXT_PUBLIC_DOMAIN}${path}`.toLowerCase().replace(/\s+/g, '-');
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

  // City and locality summary pages under /services
  CITY_SLUGS.forEach(city => {
    addUrl(`/services/${city}`, 0.8);
    allLocations.forEach(location => {
      addUrl(`/services/${city}/${location.slug}`, 0.75);
    });
  });

  // 3. Service pages
  SERVICES.forEach(service => {
    // Main service page
    addUrl(`/services/${service.slug}`, service.category === SERVICE_CATEGORIES.CCTV ? 0.9 : 0.8);

    const locations = service.availableLocations?.length 
      ? allLocations.filter(loc => service.availableLocations?.includes(loc.slug))
      : allLocations;

    CITY_SLUGS.forEach(city => {
      locations.forEach(location => {
        addUrl(`/services/${city}/${location.slug}/${service.slug}`, 0.65);
      });
    });
  });

  return routes;
}

// Default export for Next.js
export default function sitemap(): MetadataRoute.Sitemap {
  return generateSitemap();
}
