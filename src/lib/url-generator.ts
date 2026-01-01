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

export function generateAllLinks(): UrlLink[] {
  const links: UrlLink[] = [];

  // Static pages
  links.push({ url: "/", label: "Home", category: "Static" });
  links.push({ url: "/services", label: "Services", category: "Static" });
  links.push({ url: "/about", label: "About", category: "Static" });
  links.push({ url: "/contact", label: "Contact", category: "Static" });
  links.push({ url: "/reviews", label: "Reviews", category: "Static" });
  links.push({ url: "/why-choose-us", label: "Why Choose Us", category: "Static" });
  links.push({ url: "/privacy-policy", label: "Privacy Policy", category: "Static" });
  links.push({ url: "/terms-of-service", label: "Terms of Service", category: "Static" });

  // Only /services routes - City Pages
  CITIES.forEach((city) => {
    const citySlug = createSlug(city);
    links.push({
      url: `/services/${citySlug}`,
      label: `${city} Services`,
      category: city,
    });

    // Locality Pages
    const localities = LOCALITIES[city] || [];
    localities.forEach((locality) => {
      const localitySlug = createSlug(locality);
      
      // Create a dedicated category for this locality to group its services
      const localityCategory = `${locality}, ${city}`;

      // 1. Link to the Locality Overview Page itself
      links.push({
        url: `/services/${citySlug}/${localitySlug}`,
        label: `Overview: ${locality} Security Services`,
        category: localityCategory,
      });

      // 2. Service Pages (City + Locality + Service)
      // Use simplified labels (Just the service name) to avoid repetitive long text
      SERVICES.forEach((service) => {
        const serviceSlug = createSlug(service);
        links.push({
          url: `/services/${citySlug}/${localitySlug}/${serviceSlug}`,
          label: service, // Simplified Label: "CCTV Installation" instead of "CCTV Installation in Locality"
          category: localityCategory,
        });
      });
    });
  });

  return links;
}

