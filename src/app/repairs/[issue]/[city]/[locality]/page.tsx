import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { CITIES, LOCALITIES, createSlug } from '@/lib/seo-data';
import styles from '../../../../[slug]/page.module.css';

type Props = { params: Promise<{ issue: string; city: string; locality: string }> };

function findOriginalFromSlug(slug: string, list: string[]): string | undefined {
  return list.find(item => createSlug(item) === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { issue, city: citySlug, locality: localitySlug } = await params;
  const city = findOriginalFromSlug(citySlug, CITIES) || citySlug;
  const locality = findOriginalFromSlug(localitySlug, LOCALITIES[city] || []) || localitySlug;
  const title = `${issue.replace(/-/g,' ')} Repair in ${locality}, ${city} | CamHarbor`;
  const description = `Fast onsite repair for ${issue.replace(/-/g,' ')} in ${locality}, ${city}. Quick diagnosis, DVR/NVR checks, cable fixes, and testing.`;
  return {
    title,
    description,
    alternates: { canonical: `https://www.camharbor.in/repairs/${issue}/${citySlug}/${localitySlug}` },
    openGraph: { title, description, type: 'website', url: `https://www.camharbor.in/repairs/${issue}/${citySlug}/${localitySlug}` },
  };
}

export default async function RepairPage({ params }: Props) {
  const { issue, city: citySlug, locality: localitySlug } = await params;
  const city = findOriginalFromSlug(citySlug, CITIES) || citySlug;
  const locality = findOriginalFromSlug(localitySlug, LOCALITIES[city] || []) || localitySlug;

  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.camharbor.in' },
      { '@type': 'ListItem', position: 2, name: city, item: `https://www.camharbor.in/services/${citySlug}` },
      { '@type': 'ListItem', position: 3, name: `${issue.replace(/-/g,' ')} in ${locality}`, item: `https://www.camharbor.in/repairs/${issue}/${citySlug}/${localitySlug}` }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    'mainEntity': [
      { '@type': 'Question', 'name': `How fast can you fix ${issue.replace(/-/g,' ')}?`, 'acceptedAnswer': { '@type': 'Answer', 'text': 'Same-day service available with 2-hour response in most cases.' } },
      { '@type': 'Question', 'name': 'Do you provide warranty on repairs?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we provide warranty depending on the repair type and parts used.' } }
    ]
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org', '@type': 'LocalBusiness',
    'name': 'CamHarbor - CCTV Repair', 'telephone': '+91-8766203976',
    'areaServed': { '@type': 'City', 'name': `${locality}, ${city}` },
    'aggregateRating': { '@type': 'AggregateRating', 'ratingValue': '4.9', 'reviewCount': '500' }
  };

  return (
    <div className={styles.container}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, faqSchema, localBusinessSchema]) }} />
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{issue.replace(/-/g,' ')} Repair in <span className={styles.highlight}>{locality}</span>, {city}</h1>
          <p className={styles.subtitle}>Quick diagnosis and repair. DVR/NVR checks, cable fixes, configuration, and testing.</p>
        </div>
      </header>
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <div className={styles.breadcrumbContent}>
          <Link href="/" className={styles.link}>Home</Link> &gt;{' '}
          <Link href={`/services/${citySlug}`} className={styles.link}>{city}</Link> &gt;{' '}
          <span className={styles.activeBreadcrumb}>{issue.replace(/-/g,' ')} in {locality}</span>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.contentSection}>
          <section>
            <h2 className={styles.sectionTitle}>Related Services</h2>
            <div className={styles.featuresGrid}>
              {["CCTV Repair","DVR/NVR Configuration","Mobile View Setup","Cable Replacement"].map((s, i) => (
                <Link key={i} href={`/services/${citySlug}/${localitySlug}/${createSlug(s)}`} className={styles.featureCard}>
                  <span className={styles.checkIcon}>🛠️</span>
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
