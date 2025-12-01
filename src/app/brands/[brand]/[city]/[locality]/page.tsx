import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { CITIES, LOCALITIES, SERVICES, createSlug } from '@/lib/seo-data';
import styles from '../../../../[slug]/page.module.css';

type Props = {
  params: Promise<{ brand: string; city: string; locality: string }>
};

function findOriginalFromSlug(slug: string, list: string[]): string | undefined {
  return list.find(item => createSlug(item) === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { brand, city: citySlug, locality: localitySlug } = await params;
  const city = findOriginalFromSlug(citySlug, CITIES) || citySlug;
  const locality = findOriginalFromSlug(localitySlug, LOCALITIES[city] || []) || localitySlug;
  const title = `${brand} Installation in ${locality}, ${city} | CamHarbor`;
  const description = `Authorized ${brand} installation and setup in ${locality}, ${city}. Genuine products, expert technicians, mobile view configuration, and warranty.`;
  return {
    title,
    description,
    alternates: { canonical: `https://www.camharbor.in/brands/${brand}/${citySlug}/${localitySlug}` },
    openGraph: { title, description, type: 'website', url: `https://www.camharbor.in/brands/${brand}/${citySlug}/${localitySlug}` },
  };
}

export default async function BrandPage({ params }: Props) {
  const { brand, city: citySlug, locality: localitySlug } = await params;
  const city = findOriginalFromSlug(citySlug, CITIES) || citySlug;
  const locality = findOriginalFromSlug(localitySlug, LOCALITIES[city] || []) || localitySlug;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.camharbor.in' },
      { '@type': 'ListItem', position: 2, name: city, item: `https://www.camharbor.in/services/${citySlug}` },
      { '@type': 'ListItem', position: 3, name: `${brand} in ${locality}`, item: `https://www.camharbor.in/brands/${brand}/${citySlug}/${localitySlug}` }
    ]
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org', '@type': 'LocalBusiness',
    'name': `CamHarbor - ${brand} Installation`, 'telephone': '+91-8766203976',
    'areaServed': { '@type': 'City', 'name': `${locality}, ${city}` },
    'aggregateRating': { '@type': 'AggregateRating', 'ratingValue': '4.9', 'reviewCount': '500' }
  };

  return (
    <div className={styles.container}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, localBusinessSchema]) }} />
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{brand} Installation in <span className={styles.highlight}>{locality}</span>, {city}</h1>
          <p className={styles.subtitle}>Authorized setup, mobile view configuration, and warranty-backed service.</p>
        </div>
      </header>
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <div className={styles.breadcrumbContent}>
          <Link href="/" className={styles.link}>Home</Link> &gt;{' '}
          <Link href={`/services/${citySlug}`} className={styles.link}>{city}</Link> &gt;{' '}
          <span className={styles.activeBreadcrumb}>{brand} in {locality}</span>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.contentSection}>
          <section>
            <h2 className={styles.sectionTitle}>Popular {brand} Services</h2>
            <div className={styles.featuresGrid}>
              {SERVICES.slice(0,6).map((s, i) => (
                <Link key={i} href={`/services/${citySlug}/${localitySlug}/${createSlug(s)}`} className={styles.featureCard}>
                  <span className={styles.checkIcon}>🎥</span>
                  <span className={styles.featureText}>{s}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
