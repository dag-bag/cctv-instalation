import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CITIES, LOCALITIES, SERVICES, createSlug, generateQuerySlugs } from '../../../lib/seo-data';
import styles from '../../page.module.css';

const ITEMS_PER_PAGE = 1000;

// Helper to generate all routes (same as sitemap.ts but returning objects for display)
function generateAllLinks() {
  const links: { url: string; label: string; category: string }[] = [];
  const BRANDS = [
    'Hikvision','CP Plus','Dahua','Honeywell','Bosch','Panasonic','Godrej','Samsung','Sony','Tiandy','Uniview','Ezviz'
  ];
  const REPAIR_ISSUES = [
    'camera-not-working','no-signal','blur-image','recording-issue','mobile-view-setup','dvr-hard-disk-replacement','password-reset','online-configuration','cable-repair','power-supply-repair'
  ];
  const INDUSTRIES = [
    'Hospitals & Clinics','Schools & Colleges','Restaurants & Cafes','Retail Stores','Warehouses & Manufacturing','Offices & Corporate','Hotels & Guesthouses','Construction Sites','Event Venues & Auditoriums','Housing Societies','Smart Homes','Temples & Religious Places','Transport Hubs','Banks & ATMs','Gyms & Fitness Centers','Parking Lots','Car Dealerships','Co-Working Spaces','Fuel Stations & Petrol Pumps','Salons & Spas','Coaching Centers','Markets & Street Food','IT Parks & Tech Hubs','Wedding Halls & Banquets','Pharmacies & Medical Stores','Jewelry Stores','E-commerce Warehouses'
  ];

  // Top-level indexes
  links.push({ url: '/brands', label: 'Brands', category: 'Index' });
  links.push({ url: '/repairs', label: 'Repairs', category: 'Index' });
  links.push({ url: '/industries', label: 'Industries', category: 'Index' });

  // Brand and repair issue index pages
  BRANDS.forEach((brand) => {
    const brandSlug = createSlug(brand);
    links.push({ url: `/brands/${brandSlug}`, label: `${brand} (Cities)`, category: 'Brands' });
  });

  REPAIR_ISSUES.forEach((issue) => {
    links.push({ url: `/repairs/${issue}`, label: `${issue.replace(/-/g,' ')} (Cities)`, category: 'Repairs' });
  });

  INDUSTRIES.forEach((ind) => {
    const indSlug = createSlug(ind);
    links.push({ url: `/industries/${indSlug}`, label: `${ind} (Cities)`, category: 'Industries' });
  });

  // 1. Static & City Pages
  CITIES.forEach((city) => {
    const citySlug = createSlug(city);
    links.push({
      url: `/services/${citySlug}`,
      label: `${city} Services`,
      category: city
    });

    // Brand-city and repair-city pages
    BRANDS.forEach((brand) => {
      const brandSlug = createSlug(brand);
      links.push({ url: `/brands/${brandSlug}/${citySlug}`, label: `${brand} in ${city}`, category: city });
    });
    REPAIR_ISSUES.forEach((issue) => {
      links.push({ url: `/repairs/${issue}/${citySlug}`, label: `${issue.replace(/-/g,' ')} in ${city}`, category: city });
    });
    // Industry-city pages
    INDUSTRIES.forEach((ind) => {
      const indSlug = createSlug(ind);
      links.push({ url: `/industries/${indSlug}/${citySlug}`, label: `${ind} in ${city}`, category: city });
    });

    const localities = LOCALITIES[city] || [];
    localities.forEach((locality) => {
      const localitySlug = createSlug(locality);
      links.push({
        url: `/services/${citySlug}/${localitySlug}`,
        label: `${locality}, ${city}`,
        category: city
      });

      SERVICES.forEach((service) => {
        const serviceSlug = createSlug(service);
        links.push({
          url: `/services/${citySlug}/${localitySlug}/${serviceSlug}`,
          label: `${service} in ${locality}`,
          category: city
        });
      });

      BRANDS.forEach((brand) => {
        const brandSlug = createSlug(brand);
        links.push({
          url: `/brands/${brandSlug}/${citySlug}/${localitySlug}`,
          label: `${brand} in ${locality}`,
          category: city
        });
      });

      REPAIR_ISSUES.forEach((issue) => {
        links.push({
          url: `/repairs/${issue}/${citySlug}/${localitySlug}`,
          label: `${issue.replace(/-/g,' ')} in ${locality}`,
          category: city
        });
      });
      // Industry-locality pages
      INDUSTRIES.forEach((ind) => {
        const indSlug = createSlug(ind);
        links.push({
          url: `/industries/${indSlug}/${citySlug}/${localitySlug}`,
          label: `${ind} in ${locality}`,
          category: city
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
      category: 'SEO'
    });
  });

  return links;
}

export async function generateStaticParams() {
  const allLinks = generateAllLinks();
  const totalPages = Math.ceil(allLinks.length / ITEMS_PER_PAGE);
  
  return Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));
}

export const dynamic = 'force-static';
export const revalidate = false;

export const metadata: Metadata = {
  title: 'HTML Sitemap - All Services & Locations',
  description: 'Comprehensive list of all CCTV installation and repair services across Delhi NCR locations.',
  robots: 'index, follow',
  alternates: { canonical: 'https://www.camharbor.in/html-sitemap' },
};

export default function HtmlSitemapPage(props: { params: { page: string } }) {
  const page = parseInt(props.params.page);
  
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

  return (
    <div className={styles.container}>
      <main className={styles.section}>
        <div className={styles.content}>
          <h1 className={styles.sectionTitle}>Site Index - Page {page}</h1>
          <p className={styles.sectionSubtitle}>
            Complete directory of our services across all locations.
            <br />
            <span style={{ fontSize: '0.9em', opacity: 0.8 }}>
              Total URLs: {allLinks.length.toLocaleString()} | Pages: {totalPages}
            </span>
          </p>

          <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            {page > 1 && (
              <Link href={`/html-sitemap/${page - 1}`} className={styles.button}>
                &larr; Previous
              </Link>
            )}
            <span style={{ alignSelf: 'center' }}>
              Page {page} of {totalPages}
            </span>
            {page < totalPages && (
              <Link href={`/html-sitemap/${page + 1}`} className={styles.button}>
                Next &rarr;
              </Link>
            )}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem', textAlign: 'left' }}>
            {currentLinks.map((link, index) => (
              <div key={index}>
                <Link href={link.url} className={styles.link} style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                  {link.label}
                </Link>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            {page > 1 && (
              <Link href={`/html-sitemap/${page - 1}`} className={styles.button}>
                &larr; Previous
              </Link>
            )}
            <span style={{ alignSelf: 'center' }}>
              Page {page} of {totalPages}
            </span>
            {page < totalPages && (
              <Link href={`/html-sitemap/${page + 1}`} className={styles.button}>
                Next &rarr;
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
