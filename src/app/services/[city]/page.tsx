import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CITIES, LOCALITIES, createSlug } from '../../../lib/seo-data';
import styles from '../../[slug]/page.module.css'; // Reusing styles

type Props = {
  params: Promise<{
    city: string;
  }>;
};

// Helper to find original casing from slug
function findOriginalFromSlug(slug: string, list: string[]): string | undefined {
  return list.find(item => createSlug(item) === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = findOriginalFromSlug(citySlug, CITIES);

  if (!city) {
    return {
      title: 'City Not Found',
    };
  }

  return {
    title: `CCTV & Security Services in ${city} | Expert Installation`,
    description: `Find expert CCTV installation and security services in ${city}. We cover all major localities in ${city}.`,
    alternates: {
      canonical: `https://www.camharbor.in/services/${citySlug}`,
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { city: citySlug } = await params;
  const city = findOriginalFromSlug(citySlug, CITIES);

  if (!city) {
    notFound();
  }

  const localities = LOCALITIES[city] || [];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Security Services in <span className={styles.highlight}>{city}</span>
          </h1>
          <p className={styles.subtitle}>
            Professional CCTV installation and security solutions across {city}. Select your locality below.
          </p>
        </div>
      </header>

      {/* Breadcrumbs */}
      <nav className={styles.breadcrumbs}>
        <div className={styles.breadcrumbContent}>
          <Link href="/" className={styles.link}>Home</Link> &gt;{' '}
          <span className={styles.activeBreadcrumb}>{city}</span>
        </div>
      </nav>

      <main className={styles.main}>
        <div className={styles.contentSection} style={{ width: '100%' }}>
          <section>
            <h2 className={styles.sectionTitle}>Select Your Locality in {city}</h2>
            <div className={styles.featuresGrid}>
              {localities.map((locality, index) => {
                const localitySlug = createSlug(locality);
                return (
                  <Link 
                    key={index} 
                    href={`/services/${citySlug}/${localitySlug}`}
                    className={styles.featureCard}
                    style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                  >
                    <span className={styles.checkIcon}>📍</span>
                    <span className={styles.featureText}>{locality}</span>
                  </Link>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
