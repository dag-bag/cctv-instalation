import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { CITIES, INDUSTRIES, createSlug } from '@/lib/seo-data';
import styles from '../../[slug]/page.module.css';

export const runtime = 'edge';
export const dynamic = 'force-static';
export const revalidate = false;

type Props = { params: Promise<{ industry: string }> };

function findOriginalFromSlug(slug: string, list: string[]): string | undefined {
  return list.find(item => createSlug(item) === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry: industrySlug } = await params;
  const industry = findOriginalFromSlug(industrySlug, INDUSTRIES) || industrySlug;
  const title = `${industry} CCTV Solutions | Cities in Delhi NCR`;
  const description = `Browse cities where we provide ${industry} surveillance solutions.`;
  return { title, description, alternates: { canonical: `https://www.camharbor.in/industries/${industrySlug}` } };
}

export default async function IndustryCityListPage({ params }: Props) {
  const { industry: industrySlug } = await params;
  const industry = findOriginalFromSlug(industrySlug, INDUSTRIES) || industrySlug;
  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.camharbor.in' },
      { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.camharbor.in/industries' },
      { '@type': 'ListItem', position: 3, name: industry, item: `https://www.camharbor.in/industries/${industrySlug}` }
    ]
  };
  return (
    <div className={styles.container}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{industry}</h1>
          <p className={styles.subtitle}>Select a city to view supported localities.</p>
        </div>
      </header>
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <div className={styles.breadcrumbContent}>
          <Link href="/" className={styles.link}>Home</Link> &gt;{' '}
          <Link href="/industries" className={styles.link}>Industries</Link> &gt;{' '}
          <span className={styles.activeBreadcrumb}>{industry}</span>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.contentSection}>
          <section>
            <h2 className={styles.sectionTitle}>Select City</h2>
            <div className={styles.featuresGrid}>
              {CITIES.map((city, i) => (
                <Link key={i} href={`/industries/${industrySlug}/${createSlug(city)}`} className={styles.featureCard} aria-label={`View ${industry} in ${city}`}>
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
