import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { SERVICES, CITIES, LOCALITIES, createSlug } from "../src/lib/seo-data";

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


const seoEntries: SeoEntry[] = [];

CITIES.forEach((city) => {
  const citySlug = createSlug(city);
  const localities = LOCALITIES[city] || [];

  localities.forEach((locality) => {
    const localitySlug = createSlug(locality);

    SERVICES.forEach((service) => {
      const serviceSlug = createSlug(service);
      const legacyPath = `/${serviceSlug}-in-${localitySlug}-${citySlug}`;
      const canonicalPath = `/services/${citySlug}/${localitySlug}/${serviceSlug}`;

      seoEntries.push({
        citySlug,
        cityName: city,
        localitySlug,
        localityName: locality,
        serviceSlug,
        serviceName: service,
        legacyPath,
        canonicalPath,
        legacyUrl: `${baseDomain}${legacyPath}`,
        canonicalUrl: `${baseDomain}${canonicalPath}`,
        headline: `${service} in ${locality}, ${city}`,
        keyword: `${service} ${locality}`,
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

