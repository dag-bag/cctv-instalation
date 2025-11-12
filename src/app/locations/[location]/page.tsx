import { notFound } from 'next/navigation';
import { getLocationBySlug, getLocalityDetails } from '@/data/locations';
import { SERVICES, SERVICE_CATEGORIES } from '@/data/services';
import Link from 'next/link';
import { Metadata } from 'next';
import CTAButtons from '@/components/CTAButtons';
import FloatingCTA from '@/components/FloatingCTA';
import { BUSINESS_CONFIG } from '@/config/business';
import styles from './location.module.css';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location: locationSlug } = await params;
  const location = getLocationBySlug(locationSlug) || getLocalityDetails(locationSlug);
  
  if (!location) {
    return {};
  }

  const locationName = 'name' in location ? location.name : location.locality;
  const title = `CCTV & Security Services in ${locationName} | CCTV Installation ${locationName}`;
  const description = `Professional CCTV installation and security services in ${locationName}. Get free quotes and expert advice for your home or business security needs.`;
  
  return {
    title,
    description,
    keywords: [
      `CCTV installation ${locationName}`,
      `security cameras ${locationName}`,
      `home security ${locationName}`,
      `business security ${locationName}`,
      `CCTV services near me`,
    ],
    alternates: {
      canonical: `/locations/${locationSlug}`,
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location: locationSlug } = await params;
  const location = getLocationBySlug(locationSlug) || getLocalityDetails(locationSlug);

  if (!location) {
    notFound();
  }

  const locationName = 'name' in location ? location.name : location.locality;
  const locationServices = SERVICES.filter(service => 
    !service.availableLocations || 
    service.availableLocations.includes(locationSlug) ||
    service.isLocationSpecific
  );

  // Group services by category
  const servicesByCategory = locationServices.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof SERVICES>);

  return (
    <div className={styles.container}>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb}>
        <Link href="/">Home</Link> / <Link href="/locations">Locations</Link> / <span>{locationName}</span>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.serviceIcon}>🏠</div>
          <h1 className={styles.mainHeading}>
            CCTV & Security Services in {locationName}
          </h1>
          <p className={styles.subheading}>
            Professional security solutions for homes and businesses in {locationName}. 
            Get expert CCTV installation, repair, and maintenance services with free site surveys and competitive pricing.
          </p>
          <CTAButtons variant="horizontal" />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.section}>
        <div className={styles.content}>
          <h2>Why Choose Us in {locationName}?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>✓</span>
              <h3>Local Experts</h3>
              <p>Extensive experience serving {locationName} and surrounding areas</p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>✓</span>
              <h3>Free Site Survey</h3>
              <p>No-obligation assessment and detailed quote</p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>✓</span>
              <h3>Professional Installation</h3>
              <p>Certified technicians with quality workmanship</p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>✓</span>
              <h3>24/7 Support</h3>
              <p>Round-the-clock emergency support and maintenance</p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>✓</span>
              <h3>Competitive Pricing</h3>
              <p>Transparent pricing with no hidden charges</p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>✓</span>
              <h3>Warranty Included</h3>
              <p>1-year warranty on all installations</p>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Section */}
      <section className={styles.section}>
        <div className={styles.content}>
          <h2>Our Services in {locationName}</h2>
          <p className={styles.intro} style={{ marginBottom: '3rem' }}>
            Explore our comprehensive range of CCTV and security services available in {locationName}. 
            Click on any service to learn more and get a free quote.
          </p>
          
          {Object.entries(servicesByCategory).map(([category, services]) => (
            <div key={category} className={styles.categorySection}>
              <h3 className={styles.categoryTitle}>
                {category.replace(/-/g, ' ')}
              </h3>
              <div className={styles.featuresGrid}>
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}/${locationSlug}`}
                    style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                  >
                    <div className={styles.featureCard}>
                      <div className={styles.serviceIconLarge}>{service.icon}</div>
                      <h3>{service.name}</h3>
                      <p>{service.description}</p>
                      {service.priceRange && (
                        <div className={styles.priceRange}>
                          {service.priceRange}
                        </div>
                      )}
                      <div className={styles.learnMore}>
                        Learn More <span>→</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.content}>
          <h2>Ready to Secure Your Property in {locationName}?</h2>
          <p className={styles.ctaText}>
            Contact us today for a free consultation and quote. Our expert team is ready to help!
          </p>
          <CTAButtons variant="horizontal" />
          <p className={styles.contactInfo}>
            Call/WhatsApp: <a href={`tel:${BUSINESS_CONFIG.phone}`}>{BUSINESS_CONFIG.phone}</a>
          </p>
        </div>
      </section>

      <FloatingCTA />
    </div>
  );
}

export async function generateStaticParams() {
  return []; // This will be populated by the build process
}
