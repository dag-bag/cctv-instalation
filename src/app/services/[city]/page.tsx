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

  const title = `CCTV Camera Installation & Repair in ${city} | CamHarbor`;
  const description = `Looking for professional CCTV installation in ${city}? We offer expert security camera services, repair, and maintenance across all localities in ${city}. Call now!`;

  return {
    title,
    description,
    keywords: [`CCTV installation ${city}`, `CCTV repair ${city}`, `security camera installation ${city}`, `CCTV camera price ${city}`],
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://www.camharbor.in/services/${citySlug}`,
      siteName: 'CamHarbor',
      locale: 'en_IN',
    },
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
      }
    ]
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': localities.map((locality, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'url': `https://www.camharbor.in/services/${citySlug}/${createSlug(locality)}`,
      'name': locality
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

          {/* Why Choose Us Section */}
          <section style={{ marginTop: '4rem' }}>
            <h2 className={styles.sectionTitle}>Why Choose CamHarbor in {city}?</h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <span className={styles.checkIcon}>⚡</span>
                <span className={styles.featureText}>Fast Service in {city}</span>
              </div>
              <div className={styles.featureCard}>
                <span className={styles.checkIcon}>👨‍🔧</span>
                <span className={styles.featureText}>Expert Technicians</span>
              </div>
              <div className={styles.featureCard}>
                <span className={styles.checkIcon}>💰</span>
                <span className={styles.featureText}>Affordable Pricing</span>
              </div>
              <div className={styles.featureCard}>
                <span className={styles.checkIcon}>📞</span>
                <span className={styles.featureText}>24/7 Support</span>
              </div>
            </div>
            <div className={styles.text} style={{ marginTop: '2rem' }}>
              <p>
                We are the leading provider of security solutions in <strong>{city}</strong>. 
                Whether you need a new CCTV camera installation, repair of existing systems, or advanced biometric access controls, 
                our team is ready to serve every locality in {city}. We ensure high-quality workmanship and reliable after-sales support.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
