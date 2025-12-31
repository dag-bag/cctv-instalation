import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { CITIES, LOCALITIES, SERVICES, createSlug } from "@/lib/seo-data";
import { BUSINESS_CONFIG } from "@/config/business";
import { getImageUrl, getImageAlt } from "@/config/images";
import { getBrandRoutes, getRepairRoutes, getIndustryRoutes } from "@/lib/static-routes";
import CTAButtons from "@/components/CTAButtons";
import FloatingCTA from "@/components/FloatingCTA";
import styles from "./page.module.css";

// Metadata for homepage
export const metadata: Metadata = {
  title: `${BUSINESS_CONFIG.name} - CCTV Camera Installation & Repair Services in Delhi NCR`,
  description: "Top-rated CCTV installation, repair & security services in Delhi NCR. 500+ happy customers. Best prices, expert technicians & 24/7 support. Call now for a free quote!",
  keywords: "CCTV installation Delhi, CCTV repair Delhi, security camera installation, CCTV services Delhi, home security Delhi, best cctv camera installation, cctv camera price delhi",
  openGraph: {
    title: `${BUSINESS_CONFIG.name} - CCTV Installation & Repair in Delhi`,
    description: "Professional CCTV services across Delhi. 500+ happy customers, 10+ years experience. Call for free consultation!",
    type: "website",
    url: "https://www.camharbor.in",
    siteName: BUSINESS_CONFIG.name,
    locale: "en_IN",
    images: [
      {
        url: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "CCTV Installation Services",
      },
    ],
  },
  alternates: {
    canonical: "https://www.camharbor.in",
  },
};

export default function Home() {

  // Get featured services (first 6)
  const featuredServices = SERVICES.slice(0, 6);

  // Schema Markup
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': BUSINESS_CONFIG.name,
    'url': 'https://www.camharbor.in',
    'logo': 'https://www.camharbor.in/logo-full.png',
    'description': 'Professional CCTV installation and security system provider in Delhi NCR',
    'foundingDate': '2014',
    'contactPoint': [
      {
        '@type': 'ContactPoint',
        'telephone': BUSINESS_CONFIG.phone,
        'contactType': 'customer service',
        'areaServed': 'IN',
        'availableLanguage': ['en', 'hi'],
        'contactOption': '24/7 Support'
      },
      {
        '@type': 'ContactPoint',
        'telephone': BUSINESS_CONFIG.phone,
        'contactType': 'sales',
        'areaServed': 'IN',
        'availableLanguage': ['en', 'hi']
      }
    ],
    'sameAs': [
      'https://www.facebook.com/camharbor',
      'https://www.instagram.com/camharbor',
      'https://twitter.com/camharbor'
    ],
    'areaServed': {
      '@type': 'GeoCircle',
      'geoMidpoint': {
        '@type': 'GeoCoordinates',
        'latitude': '28.6139',
        'longitude': '77.2090'
      },
      'geoRadius': '50000'
    }
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': BUSINESS_CONFIG.name,
    'url': 'https://www.camharbor.in',
    'potentialAction': {
      '@type': 'SearchAction',
      'target': 'https://www.camharbor.in/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': BUSINESS_CONFIG.name,
    'image': 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop',
    'telephone': BUSINESS_CONFIG.phone,
    'email': BUSINESS_CONFIG.email,
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Delhi',
      'addressRegion': 'Delhi',
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '28.6139',
      'longitude': '77.2090'
    },
    'url': 'https://www.camharbor.in',
    'priceRange': '₹₹',
    'aggregateRating': { '@type': 'AggregateRating', 'ratingValue': '4.9', 'reviewCount': '500' },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        'opens': '00:00',
        'closes': '23:59'
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, websiteSchema, localBusinessSchema]) }}
      />
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroBackground}>
            <Image
              src={getImageUrl('default', 'hero', 2070)}
              alt={getImageAlt('default', 'hero')}
              fill
              priority
              quality={85}
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.heroContent}>
            <h1 className={styles.mainHeading}>
              Professional CCTV Installation & Repair Services in Delhi
            </h1>
            <p className={styles.subheading}>
              Expert security solutions for homes, offices & businesses | 500+ Happy Customers | 24/7 Support
            </p>
            <div className={styles.heroFeatures}>
              <div className={styles.heroFeature}>
                <span className={styles.featureIcon}>✓</span>
                <span>Free Consultation</span>
              </div>
              <div className={styles.heroFeature}>
                <span className={styles.featureIcon}>✓</span>
                <span>Same Day Service</span>
              </div>
              <div className={styles.heroFeature}>
                <span className={styles.featureIcon}>✓</span>
                <span>1 Year Warranty</span>
              </div>
              <div className={styles.heroFeature}>
                <span className={styles.featureIcon}>✓</span>
                <span>Affordable Rates</span>
              </div>
            </div>
            <CTAButtons variant="horizontal" />
          </div>
        </section>

        {/* Quick Stats */}
        <section className={styles.statsSection}>
          <div className={styles.content}>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>500+</div>
                <div className={styles.statLabel}>Installations</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>10+</div>
                <div className={styles.statLabel}>Years Experience</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>4.9★</div>
                <div className={styles.statLabel}>Customer Rating</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>24/7</div>
                <div className={styles.statLabel}>Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className={styles.section}>
          <div className={styles.content}>
            <h2 className={styles.sectionTitle}>Our Services</h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive CCTV and security solutions for all your needs
            </p>
            <div className={styles.servicesGrid}>
              {featuredServices.map((service, index) => (
                <div key={index} className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>🎥</div>
                  <h3 className={styles.serviceTitle}>{service}</h3>
                  <p className={styles.serviceDescription}>Professional {service.toLowerCase()} services</p>
                  <div className={styles.servicePrice}>Contact for Quote</div>
                </div>
              ))}
            </div>
            <div className={styles.viewAllServices}>
              <p>Looking for services in your area? Select your location below</p>
            </div>
          </div>
        </section>

        {/* Browse by Category Section */}
        <section className={styles.section} style={{ background: 'rgba(15, 23, 42, 0.5)' }}>
          <div className={styles.content}>
            <h2 className={styles.sectionTitle}>Browse by Category</h2>
            <p className={styles.sectionSubtitle}>
              Explore our services by brand, repair type, or industry
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
              {/* Services */}
              <div style={{ padding: '1.5rem', background: 'rgba(30, 41, 59, 0.6)', borderRadius: '0.75rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: '#f8fafc' }}>All Services</h3>
                <Link href="/services" style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: 500 }}>
                  Browse All Services →
                </Link>
              </div>

              {/* Brands */}
              <div style={{ padding: '1.5rem', background: 'rgba(30, 41, 59, 0.6)', borderRadius: '0.75rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: '#f8fafc' }}>CCTV Brands</h3>
                <Link href="/brands" style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: 500, display: 'block', marginBottom: '0.75rem' }}>
                  View All Brands →
                </Link>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.75rem' }}>
                  {getBrandRoutes().slice(0, 4).map((brand) => (
                    <Link key={brand.url} href={brand.url} style={{ fontSize: '0.875rem', color: '#94a3b8', textDecoration: 'none' }}>
                      {brand.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Repairs */}
              <div style={{ padding: '1.5rem', background: 'rgba(30, 41, 59, 0.6)', borderRadius: '0.75rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: '#f8fafc' }}>Repair Services</h3>
                <Link href="/repairs" style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: 500, display: 'block', marginBottom: '0.75rem' }}>
                  View All Repairs →
                </Link>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.75rem' }}>
                  {getRepairRoutes().slice(0, 4).map((repair) => (
                    <Link key={repair.url} href={repair.url} style={{ fontSize: '0.875rem', color: '#94a3b8', textDecoration: 'none' }}>
                      {repair.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Industries */}
              <div style={{ padding: '1.5rem', background: 'rgba(30, 41, 59, 0.6)', borderRadius: '0.75rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: '#f8fafc' }}>Industries</h3>
                <Link href="/industries" style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: 500, display: 'block', marginBottom: '0.75rem' }}>
                  View All Industries →
                </Link>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.75rem' }}>
                  {getIndustryRoutes().slice(0, 4).map((industry) => (
                    <Link key={industry.url} href={industry.url} style={{ fontSize: '0.875rem', color: '#94a3b8', textDecoration: 'none' }}>
                      {industry.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className={styles.section}>
          <div className={styles.content}>
            <h2 className={styles.sectionTitle}>Service Areas in Delhi</h2>
            <p className={styles.sectionSubtitle}>
              We provide CCTV services across all districts and localities in Delhi
            </p>
            <div className={styles.locationsGrid}>
              {CITIES.map((city) => {
                const localities = LOCALITIES[city] || [];
                const citySlug = createSlug(city);
                return (
                  <Link
                    key={city}
                    href={`/services/${citySlug}`}
                    className={styles.locationCard}
                  >
                    <div className={styles.locationIcon}>📍</div>
                    <h3 className={styles.locationName}>{city}</h3>
                    <p className={styles.localityCount}>
                      {localities.length}+ localities covered
                    </p>
                    <span className={styles.locationLink}>View Services →</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className={styles.section}>
          <div className={styles.content}>
            <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIconLarge}>🎯</div>
                <h3>Expert Technicians</h3>
                <p>Certified professionals with 10+ years of experience in CCTV installation and security systems</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIconLarge}>💰</div>
                <h3>Affordable Pricing</h3>
                <p>Competitive rates with transparent quotes and no hidden charges. Best value for money</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIconLarge}>⚡</div>
                <h3>Quick Service</h3>
                <p>Same-day installation available. Emergency support 24/7 for urgent requirements</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIconLarge}>🛡️</div>
                <h3>Quality Guarantee</h3>
                <p>1-year comprehensive warranty on all installations. Premium brands and quality equipment</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIconLarge}>📱</div>
                <h3>Mobile Access</h3>
                <p>Remote monitoring via mobile app. View your cameras from anywhere in the world</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIconLarge}>🤝</div>
                <h3>Customer Support</h3>
                <p>Dedicated support team available 24/7. Free training and technical assistance</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.content}>
            <h2 className={styles.ctaTitle}>Ready to Secure Your Property?</h2>
            <p className={styles.ctaText}>
              Get a free consultation and quote from our expert team. Available 24/7 for your convenience.
            </p>
            <CTAButtons variant="horizontal" />
          </div>
        </section>

        <FloatingCTA />
      </div>
    </>
  );
}
