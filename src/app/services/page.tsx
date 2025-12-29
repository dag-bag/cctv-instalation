import React from 'react';
import Link from '@/components/Link';
import { Metadata } from 'next';
import { CITIES, LOCALITIES, createSlug, SERVICES } from '@/lib/seo-data';
import styles from './page.module.css';
// import { getCities } from '@/lib/api';
import { CityData } from '@/types/city';
import { getCities } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Services by City | CamHarbor',
  description:
    'Browse CCTV installation, repair, access control, and security services by city. Select your city to view localities and book certified technicians.',
  alternates: { canonical: 'https://www.camharbor.in/services' },
  openGraph: {
    type: 'website',
    url: 'https://www.camharbor.in/services',
    title: 'Services by City',
    description:
      'Explore our security services directory. Select a city to view localities and book experts.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function ServicesIndexPage() {
  const citiesResponse = await getCities();
  const apiCities: CityData[] = citiesResponse.data || [];
  const displayCities = apiCities.length > 0 ? apiCities.map(c => c.name) : CITIES;
  const apiCityByName = (name: string) => apiCities.find(c => c.name === name);
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.camharbor.in" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.camharbor.in/services" }
    ]
  };
  const itemListCitiesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: displayCities.map((city, index) => {
      const slug = apiCityByName(city)?.slug || createSlug(city);
      return {
        "@type": "ListItem",
        position: index + 1,
        name: city,
        url: `https://www.camharbor.in/services/${slug}`
      };
    })
  };
  const offerCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "CCTV & Security Services",
    itemListElement: SERVICES.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
        provider: { "@type": "Organization", name: "CamHarbor" },
        areaServed: { "@type": "AdministrativeArea", name: "Delhi NCR" }
      },
      priceSpecification: { "@type": "PriceSpecification", priceCurrency: "INR" }
    }))
  };
  return (
    <div className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, itemListCitiesSchema, offerCatalogSchema]),
        }}
      />
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Security Services by City</h1>
          <p className={styles.subtitle}>
            Choose your city to view supported localities and book certified CCTV and security experts.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/security" className={styles.ctaButton} aria-label="Open Security index">
              Security Index
            </Link>
            <Link href="/brands" className={styles.ctaButton} aria-label="Open Brands index">
              Brands
            </Link>
            <Link href="/repairs" className={styles.ctaButton} aria-label="Open Repairs index">
              Repairs
            </Link>
            <Link href="/industries" className={styles.ctaButton} aria-label="Open Industries index">
              Industries
            </Link>
            <Link href="/html-sitemap" className={styles.ctaButton} aria-label="Open HTML sitemap">
              Site Index
            </Link>
          </div>
        </div>
      </header>

      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <div className={styles.breadcrumbContent}>
          <Link href="/" className={styles.link}>
            Home
          </Link>{' '}
          &gt; <span className={styles.activeBreadcrumb}>Services</span>
        </div>
      </nav>

      <main className={styles.main}>
        <div className={styles.contentSection}>
          <section>
            <h2 className={styles.sectionTitle}>Select Your City</h2>
            <div className={styles.featuresGrid}>
              {displayCities.map((city) => {
                const citySlug = apiCityByName(city)?.slug || createSlug(city);
                const localityCountText =
                  apiCityByName(city)?.operations?.service_areas?.[0] ||
                  `${(LOCALITIES[city] || []).length}+ localities`;
                return (
                  <Link
                    key={city}
                    href={`/services/${citySlug}`}
                    className={styles.featureCard}
                    aria-label={`Open services in ${city}`}
                    style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                  >
                    <span className={styles.checkIcon}>📍</span>
                    <span className={styles.featureText}>
                      {city} ({localityCountText})
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>

          <section style={{ marginTop: '4rem' }}>
            <h2 className={styles.sectionTitle}>Popular Services</h2>
            <div className={styles.featuresGrid}>
              {SERVICES.slice(0, 12).map((service, i) => (
                <Link
                  key={i}
                  href={`/security/${createSlug(service)}`}
                  className={styles.featureCard}
                  aria-label={`View cities for ${service}`}
                  style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                >
                  <span className={styles.checkIcon}>🛡️</span>
                  <span className={styles.featureText}>{service}</span>
                </Link>
              ))}
            </div>
          </section>

          <section style={{ marginTop: '4rem' }}>
            <h2 className={styles.sectionTitle}>Our Service Guarantees</h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <span className={styles.featureIconLarge}>🛡️</span>
                <h3>1-Year Installation Warranty</h3>
                <p>Comprehensive coverage on labor and parts</p>
              </div>
              <div className={styles.featureCard}>
                <span className={styles.featureIconLarge}>⚡</span>
                <h3>2-Hour Emergency Response</h3>
                <p>Priority assistance for critical incidents</p>
              </div>
              <div className={styles.featureCard}>
                <span className={styles.featureIconLarge}>✅</span>
                <h3>Certified Technicians</h3>
                <p>Background verified and brand-trained experts</p>
              </div>
              <div className={styles.featureCard}>
                <span className={styles.featureIconLarge}>💬</span>
                <h3>24/7 Support</h3>
                <p>Always-on helpline for quick help</p>
              </div>
            </div>
          </section>

          <section style={{ marginTop: '4rem' }}>
            <h2 className={styles.sectionTitle}>How It Works</h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <span className={styles.featureIconLarge}>📍</span>
                <h3>Select Your City</h3>
                <p>Pick your location to view localities</p>
              </div>
              <div className={styles.featureCard}>
                <span className={styles.featureIconLarge}>🛠️</span>
                <h3>Choose a Service</h3>
                <p>Installation, repair, access control and more</p>
              </div>
              <div className={styles.featureCard}>
                <span className={styles.featureIconLarge}>📅</span>
                <h3>Schedule a Visit</h3>
                <p>Same-day and next-day appointments</p>
              </div>
              <div className={styles.featureCard}>
                <span className={styles.featureIconLarge}>✅</span>
                <h3>Get It Done</h3>
                <p>Verified experts deliver guaranteed work</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}

