import React from 'react';
import Link from '@/components/Link';
import { Metadata } from 'next';
import { CITIES, LOCALITIES, createSlug } from '@/lib/seo-data';
import styles from '../../../[slug]/page.module.css';

export const dynamic = 'force-static';
export const revalidate = false;

type Props = { params: Promise<{ brand: string; city: string }> };

function findOriginalFromSlug(slug: string, list: string[]): string | undefined {
  return list.find(item => createSlug(item) === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { brand, city: citySlug } = await params;
  const city = findOriginalFromSlug(citySlug, CITIES) || citySlug;
  const title = `${brand} Installation in ${city} | Localities`;
  const description = `Authorized ${brand} CCTV installation across all localities in ${city}. Genuine products, full warranty, expert technicians, mobile app setup & 24/7 support. Same-day service available. Free quote!`;
  return {
    title,
    description,
    alternates: { canonical: `https://www.camharbor.in/brands/${brand}/${citySlug}` },
    openGraph: { title, description, type: 'website' },
  };
}

export default async function BrandLocalityListPage({ params }: Props) {
  const { brand, city: citySlug } = await params;
  const city = findOriginalFromSlug(citySlug, CITIES) || citySlug;
  const localities = LOCALITIES[city] || [];
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{brand} in {city}</h1>
          <p className={styles.subtitle}>Select a locality to view detailed installation options.</p>
        </div>
      </header>
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <div className={styles.breadcrumbContent}>
          <Link href="/" className={styles.link}>Home</Link> &gt;{' '}
          <Link href="/brands" className={styles.link}>Brands</Link> &gt;{' '}
          <Link href={`/brands/${createSlug(brand)}`} className={styles.link}>{brand}</Link> &gt;{' '}
          <span className={styles.activeBreadcrumb}>{city}</span>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.contentSection}>
          <section>
            <h2 className={styles.sectionTitle}>Select {brand} Locality in {city}</h2>
            <div className={styles.featuresGrid}>
              {localities.map((locality, i) => (
                <Link key={i} href={`/brands/${createSlug(brand)}/${citySlug}/${createSlug(locality)}`} className={styles.featureCard} aria-label={`View ${brand} in ${locality}, ${city}`}>
                  <span className={styles.checkIcon}>🏠</span>
                  <span className={styles.featureText}>{locality}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

