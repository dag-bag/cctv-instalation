import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { createSlug } from '@/lib/seo-data';
import styles from '../[slug]/page.module.css';

export const dynamic = 'force-static';
export const revalidate = false;

const BRANDS = ['Hikvision','CP Plus','Dahua','Honeywell','Bosch','Panasonic','Godrej','Samsung','Sony','Tiandy','Uniview','Ezviz'];

export const metadata: Metadata = {
  title: 'Brands We Install | CamHarbor',
  description: 'Explore CCTV brands we install and support across Delhi NCR.',
  alternates: { canonical: 'https://www.camharbor.in/brands' },
};

export default function BrandsIndexPage() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Brands We Install</h1>
          <p className={styles.subtitle}>Choose your preferred brand to view supported cities and localities.</p>
        </div>
      </header>
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <div className={styles.breadcrumbContent}>
          <Link href="/" className={styles.link}>Home</Link> &gt;{' '}
          <span className={styles.activeBreadcrumb}>Brands</span>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.contentSection}>
          <section>
            <h2 className={styles.sectionTitle}>Popular Brands</h2>
            <div className={styles.featuresGrid}>
              {BRANDS.map((b, i) => (
                <Link key={i} href={`/brands/${createSlug(b)}`} className={styles.featureCard} aria-label={`View ${b} installation cities`}>
                  <span className={styles.checkIcon}>🏷️</span>
                  <span className={styles.featureText}>{b}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

