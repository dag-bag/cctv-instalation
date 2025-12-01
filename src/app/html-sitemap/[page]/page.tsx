import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { CITIES, LOCALITIES, SERVICES, createSlug, generateQuerySlugs } from '../../../lib/seo-data';
import styles from '../../page.module.css';

const ITEMS_PER_PAGE = 1000;

// Helper to generate all routes (same as sitemap.ts but returning objects for display)
function generateAllLinks() {
  const links: { url: string; label: string; category: string }[] = [];

  // 1. Static & City Pages
  CITIES.forEach((city) => {
    const citySlug = createSlug(city);
    links.push({
      url: `/services/${citySlug}`,
      label: `${city} Services`,
      category: city
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

export const metadata: Metadata = {
  title: 'HTML Sitemap - All Services & Locations',
  description: 'Comprehensive list of all CCTV installation and repair services across Delhi NCR locations.',
  robots: 'index, follow',
};

export default async function HtmlSitemapPage(props: { params: Promise<{ page: string }> }) {
  const params = await props.params;
  const page = parseInt(params.page);
  
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
