import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { CITIES, LOCALITIES, INDUSTRIES, createSlug } from '@/lib/seo-data';
import styles from '../../../[slug]/page.module.css';

export const dynamic = 'force-static';
export const revalidate = false;

type Props = { params: Promise<{ industry: string; city: string }> };

function findOriginalFromSlug(slug: string, list: string[]): string | undefined {
  return list.find(item => createSlug(item) === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry: industrySlug, city: citySlug } = await params;
  const industry = findOriginalFromSlug(industrySlug, INDUSTRIES) || industrySlug;
  const city = findOriginalFromSlug(citySlug, CITIES) || citySlug;
  const title = `${industry} in ${city} | Localities`;
  const description = `Browse localities in ${city} for ${industry} deployments.`;
  return { title, description, alternates: { canonical: `https://www.camharbor.in/industries/${industrySlug}/${citySlug}` } };
}

export default async function IndustryLocalityListPage({ params }: Props) {
  const { industry: industrySlug, city: citySlug } = await params;
  const industry = findOriginalFromSlug(industrySlug, INDUSTRIES) || industrySlug;
  const city = findOriginalFromSlug(citySlug, CITIES) || citySlug;
  const localities = LOCALITIES[city] || [];
  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.camharbor.in' },
      { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.camharbor.in/industries' },
      { '@type': 'ListItem', position: 3, name: industry, item: `https://www.camharbor.in/industries/${industrySlug}` },
      { '@type': 'ListItem', position: 4, name: city, item: `https://www.camharbor.in/industries/${industrySlug}/${citySlug}` }
    ]
  };
  return (
    <div className={styles.container}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{industry} in {city}</h1>
          <p className={styles.subtitle}>Select a locality for detailed planning and pricing.</p>
        </div>
      </header>
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <div className={styles.breadcrumbContent}>
          <Link href="/" className={styles.link}>Home</Link> &gt;{' '}
          <Link href="/industries" className={styles.link}>Industries</Link> &gt;{' '}
          <Link href={`/industries/${industrySlug}`} className={styles.link}>{industry}</Link> &gt;{' '}
          <span className={styles.activeBreadcrumb}>{city}</span>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.contentSection}>
          <section>
            <h2 className={styles.sectionTitle}>Select Locality</h2>
            <div className={styles.featuresGrid}>
              {localities.map((locality, i) => (
                <Link key={i} href={`/industries/${industrySlug}/${citySlug}/${createSlug(locality)}`} className={styles.featureCard} aria-label={`View ${industry} in ${locality}, ${city}`}>
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
