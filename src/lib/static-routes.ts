import { createSlug } from "./seo-data";

export const BRANDS = [
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

export const REPAIR_ISSUES = [
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

export const INDUSTRIES = [
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

export interface StaticRoute {
  url: string;
  label: string;
}

export function getBrandRoutes(): StaticRoute[] {
  return BRANDS.map((brand) => ({
    url: `/brands/${createSlug(brand)}`,
    label: brand,
  }));
}

export function getRepairRoutes(): StaticRoute[] {
  return REPAIR_ISSUES.map((issue) => ({
    url: `/repairs/${issue}`,
    label: issue.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
  }));
}

export function getIndustryRoutes(): StaticRoute[] {
  return INDUSTRIES.map((industry) => ({
    url: `/industries/${createSlug(industry)}`,
    label: industry,
  }));
}


