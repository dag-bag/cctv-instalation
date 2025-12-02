import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from '../[slug]/page.module.css';

export const dynamic = 'force-static';
export const revalidate = false;

const REPAIR_ISSUES = ['camera-not-working','no-signal','blur-image','recording-issue','mobile-view-setup','dvr-hard-disk-replacement','password-reset','online-configuration','cable-repair','power-supply-repair'];

export const metadata: Metadata = {
  title: 'CCTV Repairs | Common Issues We Fix',
  description: 'Browse common CCTV repair issues and select your city and locality.',
  alternates: { canonical: 'https://www.camharbor.in/repairs' },
};

export default function RepairsIndexPage() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>CCTV Repairs</h1>
          <p className={styles.subtitle}>Select an issue to find service availability across locations.</p>
        </div>
      </header>
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <div className={styles.breadcrumbContent}>
          <Link href="/" className={styles.link}>Home</Link> &gt;{' '}
          <span className={styles.activeBreadcrumb}>Repairs</span>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.contentSection}>
          <section>
            <h2 className={styles.sectionTitle}>Common Issues</h2>
            <div className={styles.featuresGrid}>
              {REPAIR_ISSUES.map((issue, i) => (
                <Link key={i} href={`/repairs/${issue}`} className={styles.featureCard} aria-label={`View repair for ${issue.replace(/-/g,' ')}`}>
                  <span className={styles.checkIcon}>🛠️</span>
                  <span className={styles.featureText}>{issue.replace(/-/g,' ')}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
