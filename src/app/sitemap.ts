import { MetadataRoute } from 'next';
import { CITIES, LOCALITIES, SERVICES, createSlug } from '../lib/seo-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yourdomain.com';
  const urls: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];

  // Generate URLs for all Service + Locality + City combinations
  SERVICES.forEach(service => {
    const serviceSlug = createSlug(service);
    
    CITIES.forEach(city => {
      const citySlug = createSlug(city);
      const localities = LOCALITIES[city] || [];

      // Add City-level service page (e.g., cctv-installation-in-delhi)
      // Note: This assumes you have a route for city-level services or it's handled by the same slug logic
      // If your slug logic expects locality, we might skip this or ensure the slug parser handles it.
      // Based on current slug parser: [service]-in-[locality]-[city], so city-only might need a different pattern or be skipped if not supported.
      // For now, we focus on the locality combinations as requested.

      localities.forEach(locality => {
        const localitySlug = createSlug(locality);
        const slug = `${serviceSlug}-in-${localitySlug}-${citySlug}`;
        
        urls.push({
          url: `${baseUrl}/${slug}`,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.8,
        });
      });
    });
  });

  return urls;
}
