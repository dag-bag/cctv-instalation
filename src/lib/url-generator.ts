import {
  CITIES,
  LOCALITIES,
  SERVICES,
  createSlug,
} from "./seo-data";

export interface UrlLink {
  url: string;
  label: string;
  category: string;
}

const BRANDS = [
  "Hikvision",
  "CP Plus",
  "Dahua",
  "Honeywell",
  "Bosch",
  "Panasonic",
  "Godrej",
  "Samsung",
  "Sony",
  "Tiandy",
  "Uniview",
  "Ezviz",
];

const REPAIR_ISSUES = [
  "camera-not-working",
  "no-signal",
  "blur-image",
  "recording-issue",
  "mobile-view-setup",
  "dvr-hard-disk-replacement",
  "password-reset",
  "online-configuration",
  "cable-repair",
  "power-supply-repair",
];

const INDUSTRIES = [
  "Hospitals & Clinics",
  "Schools & Colleges",
  "Restaurants & Cafes",
  "Retail Stores",
  "Warehouses & Manufacturing",
  "Offices & Corporate",
  "Hotels & Guesthouses",
  "Construction Sites",
  "Event Venues & Auditoriums",
  "Housing Societies",
  "Smart Homes",
  "Temples & Religious Places",
  "Transport Hubs",
  "Banks & ATMs",
  "Gyms & Fitness Centers",
  "Parking Lots",
  "Car Dealerships",
  "Co-Working Spaces",
  "Fuel Stations & Petrol Pumps",
  "Salons & Spas",
  "Coaching Centers",
  "Markets & Street Food",
  "IT Parks & Tech Hubs",
  "Wedding Halls & Banquets",
  "Pharmacies & Medical Stores",
  "Jewelry Stores",
  "E-commerce Warehouses",
];

export function generateAllLinks(): UrlLink[] {
  const links: UrlLink[] = [];

  // Top-level indexes
  links.push({ url: "/brands", label: "Brands", category: "Index" });
  links.push({ url: "/repairs", label: "Repairs", category: "Index" });
  links.push({ url: "/industries", label: "Industries", category: "Index" });

  // Brand and repair issue index pages
  BRANDS.forEach((brand) => {
    const brandSlug = createSlug(brand);
    links.push({
      url: `/brands/${brandSlug}`,
      label: `${brand} (Cities)`,
      category: "Brands",
    });
  });

  REPAIR_ISSUES.forEach((issue) => {
    links.push({
      url: `/repairs/${issue}`,
      label: `${issue.replace(/-/g, " ")} (Cities)`,
      category: "Repairs",
    });
  });

  INDUSTRIES.forEach((ind) => {
    const indSlug = createSlug(ind);
    links.push({
      url: `/industries/${indSlug}`,
      label: `${ind} (Cities)`,
      category: "Industries",
    });
  });

  // 1. Static & City Pages
  CITIES.forEach((city) => {
    const citySlug = createSlug(city);
    links.push({
      url: `/services/${citySlug}`,
      label: `${city} Services`,
      category: city,
    });

    // Brand-city and repair-city pages
    BRANDS.forEach((brand) => {
      const brandSlug = createSlug(brand);
      links.push({
        url: `/brands/${brandSlug}/${citySlug}`,
        label: `${brand} in ${city}`,
        category: city,
      });
    });
    REPAIR_ISSUES.forEach((issue) => {
      links.push({
        url: `/repairs/${issue}/${citySlug}`,
        label: `${issue.replace(/-/g, " ")} in ${city}`,
        category: city,
      });
    });
    // Industry-city pages
    INDUSTRIES.forEach((ind) => {
      const indSlug = createSlug(ind);
      links.push({
        url: `/industries/${indSlug}/${citySlug}`,
        label: `${ind} in ${city}`,
        category: city,
      });
    });

    const localities = LOCALITIES[city] || [];
    localities.forEach((locality) => {
      const localitySlug = createSlug(locality);
      links.push({
        url: `/services/${citySlug}/${localitySlug}`,
        label: `${locality}, ${city}`,
        category: city,
      });

      SERVICES.forEach((service) => {
        const serviceSlug = createSlug(service);
        links.push({
          url: `/services/${citySlug}/${localitySlug}/${serviceSlug}`,
          label: `${service} in ${locality}`,
          category: city,
        });
      });

      BRANDS.forEach((brand) => {
        const brandSlug = createSlug(brand);
        links.push({
          url: `/brands/${brandSlug}/${citySlug}/${localitySlug}`,
          label: `${brand} in ${locality}`,
          category: city,
        });
      });

      REPAIR_ISSUES.forEach((issue) => {
        links.push({
          url: `/repairs/${issue}/${citySlug}/${localitySlug}`,
          label: `${issue.replace(/-/g, " ")} in ${locality}`,
          category: city,
        });
      });
      // Industry-locality pages
      INDUSTRIES.forEach((ind) => {
        const indSlug = createSlug(ind);
        links.push({
          url: `/industries/${indSlug}/${citySlug}/${localitySlug}`,
          label: `${ind} in ${locality}`,
          category: city,
        });
      });
    });
  });

  return links;
}

