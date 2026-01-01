import React from 'react';
import Link from '@/components/Link';
import { Metadata } from 'next';
import { CITIES, LOCALITIES, createSlug, SERVICES } from '@/lib/seo-data';
import { getBrandRoutes, getRepairRoutes, getIndustryRoutes } from '@/lib/static-routes';
import styles from './page.module.css';
import { CityData } from '@/types/city';
import { getCities } from '@/lib/api';

// Stronger SEO meta: targeting CCTV installation, city, locality
export const metadata: Metadata = {
  title: 'CCTV Installation, Repair & Security Services in All Cities & Localities',
  description:
    'Find the best CCTV installation, security camera repair, access control, video door phone, and all security system services by city and locality. Book certified technicians in Delhi, Gurgaon, Noida, Ghaziabad & 100+ areas. Same-day visit, transparent pricing, 24/7 support. Start by choosing your city and locality to discover top-rated security solutions for homes, apartments, offices, shops and factories.',
  alternates: { canonical: 'https://www.camharbor.in/services' },
  openGraph: {
    type: 'website',
    url: 'https://www.camharbor.in/services',
    title: 'CCTV, Security & Electrical Services by City & Locality',
    description:
      'Search trusted CCTV installation, security repair, biometric access, and AMC services across Delhi NCR. Choose your city and locality for the best experts near you.',
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

  // SEO: Add main keyword-rich structured data for cities/services/localities
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

  // SEO CONTENT BLOCKS
  const serviceExamples = [
    { slug: '/services/delhi/adarsh-nagar/cctv-installation', label: 'CCTV Installation in Adarsh Nagar, Delhi' },
    { slug: '/services/gurgaon/sector-56/access-control-system', label: 'Access Control in Sector 56, Gurgaon' },
    { slug: '/services/noida/sector-62/cctv-camera-repair', label: 'Security Camera Repair in Sector 62, Noida' },
    { slug: '/services/ghaziabad/indirapuram/video-door-phone-installation', label: 'Video Door Phone in Indirapuram, Ghaziabad' },
    { slug: '/services/delhi/rohini/cctv-amc-service', label: 'CCTV AMC Services in Rohini, Delhi' },
    { slug: '/services/faridabad/sector-15/electrical-wiring-for-cctv', label: 'Electrical Services in Sector 15, Faridabad' },
  ];

  // WebPage Schema for voice search optimization
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "CCTV Installation & Security Services by City & Locality",
    "description": "Find the best CCTV installation, security camera repair, and all security services by city and locality across Delhi NCR",
    "url": "https://www.camharbor.in/services",
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://www.camharbor.in"
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".title", ".subtitle", ".sectionTitle"]
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.camharbor.in" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.camharbor.in/services" }
      ]
    }
  };

  return (
    <div className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, itemListCitiesSchema, offerCatalogSchema, webPageSchema]),
        }}
      />

      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title} style={{ marginBottom: 8 }}>
            CCTV Installation & Security Services By City & Locality
          </h1>
          <p className={styles.subtitle} style={{ fontWeight: 500 }}>
            Discover trusted CCTV installation, security system repair, biometric access control, door phone, and general electrical services for 100+ cities and localities across Delhi NCR.
          </p>
          <ul style={{ marginTop: 12, fontSize: '1.04rem', paddingLeft: 18, color: "#64748b" }}>
            <li>🏙️ Book certified technicians for CCTV, security, and electrical work in your own locality</li>
            <li>🗺️ Transparent rates, 1-year warranty, genuine spare parts, and 24/7 emergency support</li>
            <li>✅ Serving homes, apartments, retail stores, schools, offices, and factories</li>
            <li>🔍 Search by city and locality below, or browse <Link href="/repairs" style={{ color: '#0ea5e9', textDecoration: 'underline' }}>all repairs & AMC</Link></li>
          </ul>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.7rem' }}>
            {/* <Link href="/security" className={styles.ctaButton} aria-label="Open Security index">
              Security Index
            </Link> */}
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
          </Link>{" "}
          &gt; <span className={styles.activeBreadcrumb}>Services</span>
        </div>
      </nav>

      <main className={styles.main}>
        <div className={styles.contentSection}>
          <section>
            <h2 className={styles.sectionTitle}>Select Your City for CCTV Services</h2>
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

          {/* Browse by Category Section */}
          <section style={{ marginTop: '3rem', marginBottom: '2.5rem', background: 'rgba(15, 23, 42, 0.3)', padding: '2rem', borderRadius: '0.75rem' }}>
            <h2 className={styles.sectionTitle}>Browse Services by Category</h2>
            <p style={{ textAlign: 'center', color: '#94a3b8', marginBottom: '2rem' }}>
              Explore our services by brand, repair type, or industry
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div style={{ padding: '1.5rem', background: 'rgba(30, 41, 59, 0.6)', borderRadius: '0.5rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem', color: '#f8fafc' }}>CCTV Brands</h3>
                <Link href="/brands" style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: 500, display: 'block', marginBottom: '0.75rem' }}>
                  View All Brands →
                </Link>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {getBrandRoutes().slice(0, 5).map((brand) => (
                    <Link key={brand.url} href={brand.url} style={{ fontSize: '0.85rem', color: '#94a3b8', textDecoration: 'none' }}>
                      {brand.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div style={{ padding: '1.5rem', background: 'rgba(30, 41, 59, 0.6)', borderRadius: '0.5rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem', color: '#f8fafc' }}>Repair Services</h3>
                <Link href="/repairs" style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: 500, display: 'block', marginBottom: '0.75rem' }}>
                  View All Repairs →
                </Link>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {getRepairRoutes().slice(0, 5).map((repair) => (
                    <Link key={repair.url} href={repair.url} style={{ fontSize: '0.85rem', color: '#94a3b8', textDecoration: 'none' }}>
                      {repair.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div style={{ padding: '1.5rem', background: 'rgba(30, 41, 59, 0.6)', borderRadius: '0.5rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem', color: '#f8fafc' }}>Industries</h3>
                <Link href="/industries" style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: 500, display: 'block', marginBottom: '0.75rem' }}>
                  View All Industries →
                </Link>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {getIndustryRoutes().slice(0, 5).map((industry) => (
                    <Link key={industry.url} href={industry.url} style={{ fontSize: '0.85rem', color: '#94a3b8', textDecoration: 'none' }}>
                      {industry.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SEO: Examples for Google site-links & topics */}
          <section style={{ marginTop: '2.5rem', marginBottom: '2.5rem' }}>
            <h2 className={styles.sectionTitle} style={{ fontSize: "1.25rem", color: "#10b981" }}>
              Popular Locality Examples
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem 1.2rem" }}>
              {serviceExamples.map((example) => (
                <Link
                  key={example.slug}
                  href={example.slug}
                  className={styles.featureCard}
                  aria-label={example.label}
                  style={{
                    minWidth: 220,
                    background: "#f1f5f9",
                    color: "#334155",
                    textDecoration: "none",
                    border: "1px solid #e2e8f0"
                  }}
                >
                  <span style={{ marginRight: 8, fontSize: "1.18em" }}>⭐</span>
                  <span>{example.label}</span>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>Popular Security Services</h2>
            <div className={styles.featuresGrid}>
              {SERVICES.slice(0, 12).map((service, i) => (
                <Link
                  key={i}
                  href={`/services/delhi/adarsh-nagar/${createSlug(service)}`}
                  // For SEO and ranking: Show Delhi/Adarsh-Nagar as default example city/locality
                  className={styles.featureCard}
                  aria-label={`View ${service} in Delhi, Adarsh Nagar and all cities`}
                  style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
                >
                  <span className={styles.checkIcon}>🛡️</span>
                  <span className={styles.featureText}>{service}</span>
                </Link>
              ))}
            </div>
            <div style={{ marginTop: "1.5rem", color: "#64748b", fontSize: "1.04rem" }}>
              <strong>Get top-rated CCTV, security, and access control services in every locality!</strong><br />
              Browse detailed <Link href="/services/delhi/adarsh-nagar/cctv-installation" style={{ color: "#0ea5e9", textDecoration: "underline" }}>CCTV Installation in Adarsh Nagar, Delhi</Link> and other specific city+locality services for your area.<br />
              <span style={{ fontSize: "0.92em" }}>Not finding your city/locality? We serve the NCR and all major metros/cities — just <Link href="/contact" style={{ color: "#0ea5e9" }}>contact us</Link> for a free quote.</span>
            </div>
          </section>

          <section style={{ marginTop: '3.5rem' }}>
            <h2 className={styles.sectionTitle}>Our Service Guarantees</h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <span className={styles.featureIconLarge}>🛡️</span>
                <h3>1-Year Installation Warranty</h3>
                <p>Comprehensive coverage for CCTV and electrical work, on labor and parts</p>
              </div>
              <div className={styles.featureCard}>
                <span className={styles.featureIconLarge}>⚡</span>
                <h3>2-Hour Emergency Response</h3>
                <p>Fast assistance across all localities for breakdown, urgent repairs or threats</p>
              </div>
              <div className={styles.featureCard}>
                <span className={styles.featureIconLarge}>✅</span>
                <h3>Certified Technicians</h3>
                <p>Background verified and brand-trained experts with 5+ years experience</p>
              </div>
              <div className={styles.featureCard}>
                <span className={styles.featureIconLarge}>💬</span>
                <h3>24/7 Support</h3>
                <p>Always-on helpline & WhatsApp for booking, emergencies & support. Call now: <a href="tel:+918766203976" style={{ color: "#0284c7" }}>+91-87662-03976</a></p>
              </div>
            </div>
          </section>

          <section style={{ marginTop: '3.5rem' }}>
            <h2 className={styles.sectionTitle}>How It Works</h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <span className={styles.featureIconLarge}>📍</span>
                <h3>Select Your City & Locality</h3>
                <p>Find your exact location to view in-depth offerings and book online</p>
              </div>
              <div className={styles.featureCard}>
                <span className={styles.featureIconLarge}>🛠️</span>
                <h3>Choose a Service</h3>
                <p>CCTV, access control, alarm, repair, AMC, electrical and more</p>
              </div>
              <div className={styles.featureCard}>
                <span className={styles.featureIconLarge}>📅</span>
                <h3>Schedule a Visit</h3>
                <p>Same-day and next-day appointments available — zero hidden charges</p>
              </div>
              <div className={styles.featureCard}>
                <span className={styles.featureIconLarge}>✅</span>
                <h3>Get It Done</h3>
                <p>Work with trusted, reviewed and guaranteed technicians near you</p>
              </div>
            </div>
          </section>

          {/* SEO RICH CONTENT */}
          <section style={{ marginTop: '3rem', background: "#f2f6fa", padding: "2rem 1.2rem 1.5rem", borderRadius: 8 }}>
            <h2 className={styles.sectionTitle} style={{ color: "#0284c7", fontSize: "1.22rem" }}>
              Why Book CCTV & Security Services by City and Locality?
            </h2>
            <div style={{ fontSize: "1.06rem", color: "#475569", maxWidth: 700 }}>
              <p>
                </p><ul style={{ marginBottom: 8, paddingLeft: 22 }}>
                  <li>✔️ <strong>Ranked #1 for CCTV and Security Services</strong>: Our platform connects you to thousands of customers across {displayCities.length}+ cities, with every locality covered. All services—from consultation and installation to maintenance & support—are available at your doorstep.</li>
                  <li>✔️ <strong>Verified Technicians, Assured Guarantee</strong>: All work carries our 1-year installation/labor warranty. Every technician is thoroughly vetted, experienced and background-verified for your security.</li>
                  <li>✔️ <strong>Price Transparency</strong>: View indicative pricing on popular services, request advance quotes, and pay after job completion. No hidden charges!</li>
                  <li>✔️ <strong>24/7 Emergency Support</strong>: Our team is always on standby to help, whether it is a midnight security breakdown or an urgent repair. Book on WhatsApp or call <a href="tel:+918766203976" style={{ color: "#0ea5e9", textDecoration: "underline" }}>+91-87662-03976</a></li>
                  <li>✔️ <strong>Trusted by Apartments, Shops & Offices</strong>: We are the go-to provider for residential societies, schools, clinics, showrooms, warehouses and industry complexes in Delhi NCR.</li>
                </ul>
              <p>
                <b>Your city, your locality, your service—get the best!</b> Scroll up to pick your city (like Delhi, Gurgaon, Noida...) and get specialized, <strong>local</strong> CCTV & security experts. For any custom requirement or if your locality isn&apos;t listed, just <Link href="/contact" style={{ color: "#0ea5e9", textDecoration: "underline" }}>contact us</Link> and we&apos;ll arrange a visit within 24 hours.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
