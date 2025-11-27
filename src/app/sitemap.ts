import { MetadataRoute } from "next";
import { CITIES, LOCALITIES, SERVICES, createSlug } from "../lib/seo-data";

const BASE_URL = "https://www.camharbor.in";
const ITEMS_PER_SITEMAP = 20000;

// Helper to generate all routes
function generateAllRoutes(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  // 1. Static & City Pages
  routes.push({
    url: BASE_URL,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  });

  CITIES.forEach((city) => {
    const citySlug = createSlug(city);
    routes.push({
      url: `${BASE_URL}/services/${citySlug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    });

    const localities = LOCALITIES[city] || [];
    localities.forEach((locality) => {
      const localitySlug = createSlug(locality);
      routes.push({
        url: `${BASE_URL}/services/${citySlug}/${localitySlug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      });

      SERVICES.forEach((service) => {
        const serviceSlug = createSlug(service);
        routes.push({
          url: `${BASE_URL}/services/${citySlug}/${localitySlug}/${serviceSlug}`,
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.7,
        });
      });
    });
  });

  return routes;
}

export async function generateSitemaps() {
  // Calculate total routes to determine how many sitemaps we need
  const allRoutes = generateAllRoutes();
  const totalSitemaps = Math.ceil(allRoutes.length / ITEMS_PER_SITEMAP);
  
  return Array.from({ length: totalSitemaps }, (_, i) => ({ id: i }));
}

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  const allRoutes = generateAllRoutes();
  const start = id * ITEMS_PER_SITEMAP;
  const end = start + ITEMS_PER_SITEMAP;
  
  return allRoutes.slice(start, end);
}

