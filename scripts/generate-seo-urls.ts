import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { SERVICES } from "../src/data/services";
import { getAllLocationsWithLocalities } from "../src/data/locations";
import { CITY_CONFIG, CITY_SLUGS } from "../src/data/cities";

const DEFAULT_DOMAIN = "https://yourbrand.com";
const baseDomain = (process.env.NEXT_PUBLIC_DOMAIN || DEFAULT_DOMAIN).replace(/\/$/, "");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.resolve(__dirname, "../generated");

type SeoEntry = {
  citySlug: string;
  cityName: string;
  localitySlug: string;
  localityName: string;
  serviceSlug: string;
  serviceName: string;
  legacyPath: string;
  canonicalPath: string;
  legacyUrl: string;
  canonicalUrl: string;
  headline: string;
  keyword: string;
};

const allLocations = getAllLocationsWithLocalities();
const seoEntries: SeoEntry[] = [];

CITY_SLUGS.forEach((citySlug) => {
  const cityConfig = CITY_CONFIG[citySlug];
  if (!cityConfig) return;

  allLocations.forEach((location) => {
    const localitySlug = location.slug;
    const localityName = location.name;

    SERVICES.forEach((service) => {
      const legacyPath = `/${service.slug}-in-${localitySlug}-${citySlug}`;
      const canonicalPath = `/services/${citySlug}/${localitySlug}/${service.slug}`;

      seoEntries.push({
        citySlug,
        cityName: cityConfig.name,
        localitySlug,
        localityName,
        serviceSlug: service.slug,
        serviceName: service.name,
        legacyPath,
        canonicalPath,
        legacyUrl: `${baseDomain}${legacyPath}`,
        canonicalUrl: `${baseDomain}${canonicalPath}`,
        headline: `${service.name} in ${localityName}, ${cityConfig.name}`,
        keyword: `${service.name} ${localityName}`,
      });
    });
  });
});

if (!seoEntries.length) {
  console.warn("No SEO entries generated. Check city and location data.");
  process.exit(0);
}

fs.mkdirSync(outputDir, { recursive: true });

const textOutput = seoEntries
  .map((entry) => `${entry.legacyUrl} -> ${entry.canonicalUrl}`)
  .join("\n");

fs.writeFileSync(path.join(outputDir, "seo-urls.txt"), textOutput, "utf8");
fs.writeFileSync(
  path.join(outputDir, "seo-urls.json"),
  JSON.stringify(seoEntries, null, 2),
  "utf8"
);

console.log(
  `Generated ${seoEntries.length.toLocaleString()} SEO-friendly URLs in ${outputDir}`
);

