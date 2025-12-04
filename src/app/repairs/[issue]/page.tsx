import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { CITIES, createSlug } from '@/lib/seo-data';
import styles from '../../[slug]/page.module.css';

export const runtime = 'edge';
export const dynamic = 'force-static';
export const revalidate = false;

type Props = { params: Promise<{ issue: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { issue } = await params;
  const title = `${issue.replace(/-/g,' ')} Repair | Cities in Delhi NCR`;
  const description = `Browse cities where we fix ${issue.replace(/-/g,' ')} issues for CCTV systems.`;
  return {
    title,
    description,
    alternates: { canonical: `https://www.camharbor.in/repairs/${issue}` },
    openGraph: { title, description, type: 'website' },
  };
}

export default async function RepairCityListPage({ params }: Props) {
  const { issue } = await params;
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{issue.replace(/-/g,' ')} Repair</h1>
          <p className={styles.subtitle}>Select a city to view localities we serve.</p>
        </div>
      </header>
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <div className={styles.breadcrumbContent}>
          <Link href="/" className={styles.link}>Home</Link> &gt;{' '}
          <Link href="/repairs" className={styles.link}>Repairs</Link> &gt;{' '}
          <span className={styles.activeBreadcrumb}>{issue.replace(/-/g,' ')}</span>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.contentSection}>
          <section>
            <h2 className={styles.sectionTitle}>Select City</h2>
            <div className={styles.featuresGrid}>
              {CITIES.map((city, i) => (
                <Link key={i} href={`/repairs/${issue}/${createSlug(city)}`} className={styles.featureCard} aria-label={`View ${issue.replace(/-/g,' ')} in ${city}`}>
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

