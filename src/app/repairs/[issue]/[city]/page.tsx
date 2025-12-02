import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { CITIES, LOCALITIES, createSlug } from '@/lib/seo-data';
import styles from '../../../[slug]/page.module.css';

export const dynamic = 'force-static';
export const revalidate = false;

type Props = { params: Promise<{ issue: string; city: string }> };

function findOriginalFromSlug(slug: string, list: string[]): string | undefined {
  return list.find(item => createSlug(item) === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { issue, city: citySlug } = await params;
  const city = findOriginalFromSlug(citySlug, CITIES) || citySlug;
  const title = `${issue.replace(/-/g,' ')} Repair in ${city} | Localities`;
  const description = `Browse localities in ${city} for ${issue.replace(/-/g,' ')} repair service.`;
  return {
    title,
    description,
    alternates: { canonical: `https://www.camharbor.in/repairs/${issue}/${citySlug}` },
    openGraph: { title, description, type: 'website' },
  };
}

export default async function RepairLocalityListPage({ params }: Props) {
  const { issue, city: citySlug } = await params;
  const city = findOriginalFromSlug(citySlug, CITIES) || citySlug;
  const localities = LOCALITIES[city] || [];
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{issue.replace(/-/g,' ')} in {city}</h1>
          <p className={styles.subtitle}>Select a locality to view detailed repair availability.</p>
        </div>
      </header>
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <div className={styles.breadcrumbContent}>
          <Link href="/" className={styles.link}>Home</Link> &gt;{' '}
          <Link href="/repairs" className={styles.link}>Repairs</Link> &gt;{' '}
          <Link href={`/repairs/${issue}`} className={styles.link}>{issue.replace(/-/g,' ')}</Link> &gt;{' '}
          <span className={styles.activeBreadcrumb}>{city}</span>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.contentSection}>
          <section>
            <h2 className={styles.sectionTitle}>Select Locality</h2>
            <div className={styles.featuresGrid}>
              {localities.map((locality, i) => (
                <Link key={i} href={`/repairs/${issue}/${citySlug}/${createSlug(locality)}`} className={styles.featureCard} aria-label={`View ${issue.replace(/-/g,' ')} in ${locality}, ${city}`}>
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

