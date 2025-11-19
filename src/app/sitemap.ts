import { MetadataRoute } from 'next';
import { SERVICES } from '@/data/services';
import { CITY_CONFIG, CITY_SLUGS } from '@/data/cities';

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

  // 2. City, locality, and service pages
  CITY_SLUGS.forEach(city => {
    addUrl(`/services/${city}`, 0.8);
    const localities = CITY_CONFIG[city]?.localities || [];

    localities.forEach(locality => {
      addUrl(`/services/${city}/${locality}`, 0.7);

      SERVICES.forEach(service => {
        addUrl(
          `/services/${city}/${locality}/${service.slug}`,
          0.9,
          'weekly'
        );
      });
    });
  });

  return routes;
}

// Default export for Next.js
export default function sitemap(): MetadataRoute.Sitemap {
  return generateSitemap();
}
