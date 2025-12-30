import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { INDUSTRIES, createSlug } from '@/lib/seo-data';
import styles from '../[slug]/page.module.css';

export const dynamic = 'force-static';
export const revalidate = false;

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: 'Sector-specific CCTV solutions for Delhi NCR across industries.',
  alternates: { canonical: 'https://www.camharbor.in/industries' },
};

export default function IndustriesIndexPage() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Industries We Serve</h1>
          <p className={styles.subtitle}>Browse sectors for tailored CCTV installation and operations.</p>
        </div>
      </header>
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <div className={styles.breadcrumbContent}>
          <Link href="/" className={styles.link}>Home</Link> &gt;{' '}
          <span className={styles.activeBreadcrumb}>Industries</span>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.contentSection}>
          <section>
            <h2 className={styles.sectionTitle}>Popular Sectors</h2>
            <div className={styles.featuresGrid}>
              {INDUSTRIES.map((ind, i) => (
                <Link key={i} href={`/industries/${createSlug(ind)}`} className={styles.featureCard} aria-label={`View ${ind} cities`}>
                  <span className={styles.checkIcon}>🏢</span>
                  <span className={styles.featureText}>{ind}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

