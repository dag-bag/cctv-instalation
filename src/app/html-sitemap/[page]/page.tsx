import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CITIES,
  LOCALITIES,
  SERVICES,
  createSlug,
  generateQuerySlugs,
} from "../../../lib/seo-data";
import styles from "../../page.module.css";

const ITEMS_PER_PAGE = 1000;

// Helper to generate all routes (same as sitemap.ts but returning objects for display)
function generateAllLinks() {
  const links: { url: string; label: string; category: string }[] = [];
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

  // 2. Hyphen-based SEO Query Slugs (legacy/alternative flat routes)
  const querySlugs = generateQuerySlugs();
  querySlugs.forEach((slug) => {
    links.push({
      url: `/${slug}`,
      label: slug,
      category: "SEO",
    });
  });

  return links;
}

// export async function generateStaticParams() {
//   const allLinks = generateAllLinks();
//   const totalPages = Math.ceil(allLinks.length / ITEMS_PER_PAGE);

//   return Array.from({ length: totalPages }, (_, i) => ({
//     page: (i + 1).toString(),
//   }));
// }

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }): Promise<Metadata> {
  const { page } = await params;
  const title = `Site Map Page ${page} - All Services`;
  const description =
    `Page ${page} of our site map. Find CCTV services. Pick a city or area.`;

  // set canonical to /html-sitemap if on page 1, else /html-sitemap/[page]
  const canonical =
    `https://www.camharbor.in/html-sitemap/${page}`;

  return {
    title,
    description,
    robots: "index, follow",
    alternates: { canonical },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function HtmlSitemapPage(props: {
  params: Promise<{ page: string }>;
}) {
  const { page: pageStr } = await props.params;
  const page = parseInt(pageStr);

  if (isNaN(page) || page < 1) {
    notFound();
  }

  const allLinks = generateAllLinks();
  const totalPages = Math.ceil(allLinks.length / ITEMS_PER_PAGE);

  if (page > totalPages) {
    notFound();
  }

  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const currentLinks = allLinks.slice(start, end);

  // Group links by category for better organization
  const linksByCategory: Record<string, typeof currentLinks> = {};
  currentLinks.forEach((link) => {
    if (!linksByCategory[link.category]) {
      linksByCategory[link.category] = [];
    }
    linksByCategory[link.category].push(link);
  });

  return (
    <div className={styles.container}>
      <main className={styles.section}>
        <div className={styles.content}>
          <h1 className={styles.sectionTitle}>Site Map - Page {page}</h1>
          <p className={styles.sectionSubtitle}>
            Find all our CCTV services. Pick a city or area.
            <br />
            We install cameras. We fix cameras. We work in Delhi NCR.
            <br />
            <span style={{ fontSize: "0.9em", opacity: 0.8 }}>
              Total links: {allLinks.length.toLocaleString()}. Total pages: {totalPages}.
            </span>
          </p>

          <div
            style={{
              marginBottom: "2rem",
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            {page > 1 && (
              <Link
                href={`/html-sitemap/${page - 1}`}
                className={styles.button}
              >
                &larr; Previous
              </Link>
            )}
            <span style={{ alignSelf: "center" }}>
              Page {page} of {totalPages}
            </span>
            {page < totalPages && (
              <Link
                href={`/html-sitemap/${page + 1}`}
                className={styles.button}
              >
                Next &rarr;
              </Link>
            )}
          </div>

          {Object.entries(linksByCategory).map(([category, links], categoryIndex) => {
            // Calculate the position of this category section on the current page
            const firstLinkInCategory = links[0];
            const firstLinkGlobalIndex = allLinks.findIndex(link => 
              link.url === firstLinkInCategory.url && link.label === firstLinkInCategory.label
            );
            const categoryStartIndex = firstLinkGlobalIndex + 1; // 1-based index
            const categoryEndIndex = categoryStartIndex + links.length - 1;
            const totalInCategory = allLinks.filter(link => link.category === category).length;
            
            // Create simple H2 heading for each page and category
            let categoryTitle = "";
            if (category === "Index") {
              categoryTitle = `Main Pages - Page ${page}`;
            } else if (category === "Brands") {
              categoryTitle = `CCTV Brands - Page ${page}`;
            } else if (category === "Repairs") {
              categoryTitle = `Repair Services - Page ${page}`;
            } else if (category === "SEO") {
              categoryTitle = `Search Pages - Page ${page}`;
            } else {
              categoryTitle = `${category} Services - Page ${page}`;
            }
            
            return (
            <section key={`${category}-${page}-${categoryIndex}`} style={{ marginBottom: "3rem" }}>
              <h2 style={{ 
                fontSize: "1.5rem", 
                fontWeight: 600, 
                marginBottom: "1rem",
                color: "#f8fafc",
                borderBottom: "2px solid #3b82f6",
                paddingBottom: "0.5rem"
              }}>
                {categoryTitle}
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap: "1rem",
                  textAlign: "left",
                }}
              >
                {links.map((link, index) => (
                  <div key={index}>
                    <Link
                      href={link.url}
                      className={styles.link}
                      style={{ fontSize: "0.9rem", color: "#94a3b8" }}
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
              </div>
            </section>
            );
          })}

          <div
            style={{
              marginTop: "3rem",
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            {page > 1 && (
              <Link
                href={`/html-sitemap/${page - 1}`}
                className={styles.button}
              >
                &larr; Previous
              </Link>
            )}
            <span style={{ alignSelf: "center" }}>
              Page {page} of {totalPages}
            </span>
            {page < totalPages && (
              <Link
                href={`/html-sitemap/${page + 1}`}
                className={styles.button}
              >
                Next &rarr;
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
export const dynamic = "force-static";
export const revalidate = false;
