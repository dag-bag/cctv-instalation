import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CITIES, LOCALITIES, SERVICES, createSlug } from '../../../../lib/seo-data';
import styles from '../../../[slug]/page.module.css'; // Reusing styles

type Props = {
  params: Promise<{
    city: string;
    locality: string;
  }>;
};

// Helper to find original casing from slug
function findOriginalFromSlug(slug: string, list: string[]): string | undefined {
  return list.find(item => createSlug(item) === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug, locality: localitySlug } = await params;
  const city = findOriginalFromSlug(citySlug, CITIES);
  
  if (!city) {
      return { title: 'City Not Found' };
  }

  const locality = findOriginalFromSlug(localitySlug, LOCALITIES[city] || []);

  if (!locality) {
    return {
      title: 'Locality Not Found',
    };
  }

  return {
    title: `Security Services in ${locality}, ${city}`,
    description: `Professional CCTV and security services in ${locality}, ${city}. View our complete list of services.`,
    alternates: {
      canonical: `https://www.camharbor.in/services/${citySlug}/${localitySlug}`,
    },
  };
}

export default async function LocalityPage({ params }: Props) {
  const { city: citySlug, locality: localitySlug } = await params;
  const city = findOriginalFromSlug(citySlug, CITIES);

  if (!city) {
    notFound();
  }

  const locality = findOriginalFromSlug(localitySlug, LOCALITIES[city] || []);

  if (!locality) {
    notFound();
  }

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Services in <span className={styles.highlight}>{locality}</span>, {city}
          </h1>
          <p className={styles.subtitle}>
            Expert security solutions for your home and business in {locality}.
          </p>
        </div>
      </header>

      {/* Breadcrumbs */}
      <nav className={styles.breadcrumbs}>
        <div className={styles.breadcrumbContent}>
          <Link href="/" className={styles.link}>Home</Link> &gt;{' '}
          <Link href={`/services/${citySlug}`} className={styles.link}>{city}</Link> &gt;{' '}
          <span className={styles.activeBreadcrumb}>{locality}</span>
        </div>
      </nav>

      <main className={styles.main}>
        <div className={styles.contentSection} style={{ width: '100%' }}>
          <section>
            <h2 className={styles.sectionTitle}>Available Services</h2>
            <div className={styles.featuresGrid}>
              {SERVICES.map((service, index) => {
                const serviceSlug = createSlug(service);
                return (
                  <Link 
                    key={index} 
                    href={`/services/${citySlug}/${localitySlug}/${serviceSlug}`}
                    className={styles.featureCard}
                    style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                  >
                    <span className={styles.checkIcon}>🛡️</span>
                    <span className={styles.featureText}>{service}</span>
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
