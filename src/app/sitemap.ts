import { MetadataRoute } from 'next';
import { LOCATIONS, getAllLocationsWithLocalities } from '@/data/locations';
import { SERVICES } from '@/data/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.yourbusiness.com'; // Update with actual domain

  // Homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];

  // Location pages
  const allLocations = getAllLocationsWithLocalities();
  allLocations.forEach((location) => {
    routes.push({
      url: `${baseUrl}/${location.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  });

  // PATTERN 1: Location + Service (/location/service)
  allLocations.forEach((location) => {
    SERVICES.forEach((service) => {
      routes.push({
        url: `${baseUrl}/${location.slug}/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      });
    });
  });

  // PATTERN 2: Service + Location (/service/location)
  SERVICES.forEach((service) => {
    allLocations.forEach((location) => {
      routes.push({
        url: `${baseUrl}/${service.slug}/${location.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      });
    });
  });

  // PATTERN 3: SEO-Friendly Routes (/service-in-location-delhi)
  SERVICES.forEach((service) => {
    allLocations.forEach((location) => {
      // Main SEO pattern: service-in-location-delhi
      routes.push({
        url: `${baseUrl}/${service.slug}-in-${location.slug}-delhi`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1.0, // Highest priority for SEO-friendly URLs
      });
      
      // Alternative pattern: service-location-delhi
      routes.push({
        url: `${baseUrl}/${service.slug}-${location.slug}-delhi`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.95,
      });
    });
  });

  return routes;
}
