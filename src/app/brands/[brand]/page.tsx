import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { CITIES, createSlug } from '@/lib/seo-data';
import styles from '../../[slug]/page.module.css';

export const runtime = 'edge';
export const dynamic = 'force-static';
export const revalidate = false;

type Props = { params: Promise<{ brand: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { brand } = await params;
  const title = `${brand} Installation | Cities in Delhi NCR`;
  const description = `Browse cities where we install and support ${brand} CCTV systems.`;
  return {
    title,
    description,
    alternates: { canonical: `https://www.camharbor.in/brands/${brand}` },
    openGraph: { title, description, type: 'website' },
  };
}

export default async function BrandCityListPage({ params }: Props) {
  const { brand } = await params;
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{brand} Installation</h1>
          <p className={styles.subtitle}>Select a city to view supported localities.</p>
        </div>
      </header>
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <div className={styles.breadcrumbContent}>
          <Link href="/" className={styles.link}>Home</Link> &gt;{' '}
          <Link href="/brands" className={styles.link}>Brands</Link> &gt;{' '}
          <span className={styles.activeBreadcrumb}>{brand}</span>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.contentSection}>
          <section>
            <h2 className={styles.sectionTitle}>Select City</h2>
            <div className={styles.featuresGrid}>
              {CITIES.map((city, i) => (
                <Link key={i} href={`/brands/${createSlug(brand)}/${createSlug(city)}`} className={styles.featureCard} aria-label={`View ${brand} installation in ${city}`}>
                  <span className={styles.checkIcon}>📍</span>
                  <span className={styles.featureText}>{city}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

