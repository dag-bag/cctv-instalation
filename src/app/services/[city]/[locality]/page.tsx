import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CITIES, LOCALITIES, SERVICES, createSlug } from '../../../../lib/seo-data';
import { getImageUrl, getImageAlt } from '../../../../config/images';
import styles from '../../../[slug]/page.module.css'; // Reusing styles
export const dynamic = 'force-static';
export const revalidate = false;

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

  const title = `Security Services in ${locality}, ${city} - CCTV Installation & Repair`;
  const description = `Expert CCTV camera installation & security services in ${locality}, ${city}. Trusted by thousands. Affordable rates, certified technicians & 24/7 support. Call +91-87662-03976 now!`;

  return {
    title,
    description,
    keywords: [`CCTV installation ${locality}`, `CCTV repair ${locality}`, `security systems ${locality}`, `camera installation ${city}`, `best cctv camera ${locality}`, `cctv camera price ${locality}`],
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

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'CamHarbor',
    'telephone': '+91-8766203976',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'House No. 110, C2 Block, Street No. 3, Mahavir Enclave Part-1, Palam',
      'addressLocality': 'New Delhi',
      'addressRegion': 'Delhi',
      'postalCode': '110045',
      'addressCountry': 'IN'
    },
    'areaServed': { '@type': 'City', 'name': `${locality}, ${city}` },
    'priceRange': '₹₹',
    'aggregateRating': { '@type': 'AggregateRating', 'ratingValue': '4.9', 'reviewCount': '500' }
  };

  return (
    <div className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, itemListSchema, localBusinessSchema]) }}
      />

      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src={getImageUrl('default', 'hero', 2070)}
            alt={getImageAlt('default', 'hero', { city, locality })}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', opacity: 0.15 }}
          />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Services in <span className={styles.highlight}>{locality}</span>, {city}
          </h1>
          <p className={styles.subtitle}>
            Expert security solutions for your home and business in {locality}.
          </p>
        </div>
      </header>

      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <div className={styles.breadcrumbContent}>
          <Link href="/" className={styles.link} aria-label="Go to Home">Home</Link> &gt;{' '}
          <Link href={`/services/${citySlug}`} className={styles.link} aria-label={`Explore services in ${city}`}>{city}</Link> &gt;{' '}
          <span className={styles.activeBreadcrumb}>{locality}</span>
        </div>
      </nav>

      <main className={styles.main}>
        <div className={styles.contentSection} style={{ width: '100%' }}>
          <section>
            <h2 className={styles.sectionTitle}>Available Services in {locality}, {city}</h2>
            <div className={styles.featuresGrid}>
              {SERVICES.map((service, index) => {
                const serviceSlug = createSlug(service);
                return (
                  <Link 
                    key={index} 
                    href={`/services/${citySlug}/${localitySlug}/${serviceSlug}`}
                    className={styles.featureCard}
                    aria-label={`Explore ${service} in ${locality}, ${city}`}
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
      <section style={{ marginTop: '4rem' }}>
        <h2 className={styles.sectionTitle}>Nearby Localities in {city}</h2>
        <div className={styles.featuresGrid}>
          {(LOCALITIES[city] || [])
            .filter(l => l !== locality)
            .slice(0, 12)
            .map((l, i) => (
              <Link
                key={i}
                href={`/services/${citySlug}/${createSlug(l)}`}
                className={styles.featureCard}
                aria-label={`Explore services in ${l}, ${city}`}
                style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
              >
                <span className={styles.checkIcon}>📍</span>
                <span className={styles.featureText}>{l}</span>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}
