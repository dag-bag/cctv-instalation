import { MetadataRoute } from 'next';
import { CITIES, LOCALITIES, SERVICES, createSlug } from '../lib/seo-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.camharbor.in';
  const urls: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];

  // 1. City Pages: /services/[city]
  CITIES.forEach(city => {
    const citySlug = createSlug(city);
    urls.push({
      url: `${baseUrl}/services/${citySlug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    });

    const localities = LOCALITIES[city] || [];
    localities.forEach(locality => {
      const localitySlug = createSlug(locality);
      
      // 2. Locality Pages: /services/[city]/[locality]
      urls.push({
        url: `${baseUrl}/services/${citySlug}/${localitySlug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });

      // 3. Service Pages: /services/[city]/[locality]/[service]
      SERVICES.forEach(service => {
        const serviceSlug = createSlug(service);
        urls.push({
          url: `${baseUrl}/services/${citySlug}/${localitySlug}/${serviceSlug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.7,
        });
      });
    });
  });

  return urls;
}
