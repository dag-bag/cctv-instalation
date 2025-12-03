import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { CITIES, LOCALITIES, INDUSTRIES, createSlug, getIndustryContent } from '@/lib/seo-data';
import styles from '../../../../[slug]/page.module.css';

export const dynamic = 'force-static';
export const revalidate = false;

type Props = { params: { industry: string; city: string; locality: string } };

function findOriginalFromSlug(slug: string, list: string[]): string | undefined {
  return list.find(item => createSlug(item) === slug);
}

export function generateMetadata({ params }: Props): Metadata {
  const { industry: industrySlug, city: citySlug, locality: localitySlug } = params;
  const industry = findOriginalFromSlug(industrySlug, INDUSTRIES) || industrySlug;
  const city = findOriginalFromSlug(citySlug, CITIES) || citySlug;
  const locality = findOriginalFromSlug(localitySlug, LOCALITIES[city] || []) || localitySlug;
  const title = `${industry} in ${locality}, ${city} | CamHarbor`;
  const description = `Sector-specific CCTV deployment for ${industry} across ${locality}, ${city}. Planning, installation, and secure remote view.`;
  return {
    title,
    description,
    alternates: { canonical: `https://www.camharbor.in/industries/${industrySlug}/${citySlug}/${localitySlug}` },
    openGraph: { title, description, type: 'website', url: `https://www.camharbor.in/industries/${industrySlug}/${citySlug}/${localitySlug}` },
  };
}

export default function IndustryDetailPage({ params }: Props) {
  const { industry: industrySlug, city: citySlug, locality: localitySlug } = params;
  const industry = findOriginalFromSlug(industrySlug, INDUSTRIES) || industrySlug;
  const city = findOriginalFromSlug(citySlug, CITIES) || citySlug;
  const locality = findOriginalFromSlug(localitySlug, LOCALITIES[city] || []) || localitySlug;
  const content = getIndustryContent(industry);

  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.camharbor.in' },
      { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.camharbor.in/industries' },
      { '@type': 'ListItem', position: 3, name: industry, item: `https://www.camharbor.in/industries/${industrySlug}` },
      { '@type': 'ListItem', position: 4, name: city, item: `https://www.camharbor.in/industries/${industrySlug}/${citySlug}` },
      { '@type': 'ListItem', position: 5, name: `${industry} in ${locality}`, item: `https://www.camharbor.in/industries/${industrySlug}/${citySlug}/${localitySlug}` }
    ]
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org', '@type': 'LocalBusiness',
    'name': `CamHarbor - ${industry}`, 'telephone': '+91-8766203976',
    'areaServed': { '@type': 'City', 'name': `${locality}, ${city}` },
    'aggregateRating': { '@type': 'AggregateRating', 'ratingValue': '4.8', 'reviewCount': '420' }
  };

  return (
    <div className={styles.container}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, localBusinessSchema]) }} />
      <header className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src={content.heroImage}
            alt={`${industry} CCTV solutions in ${locality}, ${city}`}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', opacity: 0.15 }}
          />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{industry} in <span className={styles.highlight}>{locality}</span>, {city}</h1>
          <p className={styles.subtitle}>{content.description}</p>
        </div>
      </header>
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <div className={styles.breadcrumbContent}>
          <Link href="/" className={styles.link}>Home</Link> &gt;{' '}
          <Link href="/industries" className={styles.link}>Industries</Link> &gt;{' '}
          <Link href={`/industries/${industrySlug}`} className={styles.link}>{industry}</Link> &gt;{' '}
          <Link href={`/industries/${industrySlug}/${citySlug}`} className={styles.link}>{city}</Link> &gt;{' '}
          <span className={styles.activeBreadcrumb}>{locality}</span>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.contentSection}>
          <section>
            <h2 className={styles.sectionTitle}>Key Features</h2>
            <div className={styles.featuresGrid}>
              {content.features.map((f, i) => (
                <div key={i} className={styles.featureCard}>
                  <span className={styles.checkIcon}>✔️</span>
                  <span className={styles.featureText}>{f}</span>
                </div>
              ))}
            </div>
          </section>
          <section style={{ marginTop: '4rem' }}>
            <h2 className={styles.sectionTitle}>FAQs</h2>
            <div className={styles.faqGrid}>
              {content.faqs.map((f, i) => (
                <div key={i} className={styles.faqItem}>
                  <h3>{f.question}</h3>
                  <p>{f.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
