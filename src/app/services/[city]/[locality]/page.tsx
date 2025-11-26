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

  const title = `CCTV Installation in ${locality}, ${city} | Best Security Services`;
  const description = `Expert CCTV camera installation, repair, and security systems in ${locality}, ${city}. Fast service, best prices, and certified technicians. Book now!`;

  return {
    title,
    description,
    keywords: [`CCTV installation ${locality}`, `CCTV repair ${locality}`, `security systems ${locality}`, `camera installation ${city}`],
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://www.camharbor.in/services/${citySlug}/${localitySlug}`,
      siteName: 'CamHarbor',
      locale: 'en_IN',
    },
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

  // Schema Markup
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://www.camharbor.in'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': city,
        'item': `https://www.camharbor.in/services/${citySlug}`
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': locality,
        'item': `https://www.camharbor.in/services/${citySlug}/${localitySlug}`
      }
    ]
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': SERVICES.map((service, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'url': `https://www.camharbor.in/services/${citySlug}/${localitySlug}/${createSlug(service)}`,
      'name': service
    }))
  };

  return (
    <div className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, itemListSchema]) }}
      />

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

          {/* Why Choose Us Section */}
          <section style={{ marginTop: '4rem' }}>
            <h2 className={styles.sectionTitle}>Security Services in {locality}</h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <span className={styles.checkIcon}>⚡</span>
                <span className={styles.featureText}>Quick Response in {locality}</span>
              </div>
              <div className={styles.featureCard}>
                <span className={styles.checkIcon}>👨‍🔧</span>
                <span className={styles.featureText}>Certified Experts</span>
              </div>
              <div className={styles.featureCard}>
                <span className={styles.checkIcon}>✅</span>
                <span className={styles.featureText}>Quality Guaranteed</span>
              </div>
            </div>
            <div className={styles.text} style={{ marginTop: '2rem' }}>
              <p>
                Residents and businesses in <strong>{locality}</strong> rely on CamHarbor for top-tier security installations. 
                From residential CCTV setups to complex commercial access control systems, we provide tailored solutions that meet your specific needs. 
                Our local team in {city} ensures prompt service and ongoing support for all our clients in {locality}.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
