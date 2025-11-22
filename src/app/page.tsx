import Link from "next/link";
import { Metadata } from "next";
import { CITIES, LOCALITIES, SERVICES } from "@/lib/seo-data";
import { BUSINESS_CONFIG } from "@/config/business";
import CTAButtons from "@/components/CTAButtons";
import FloatingCTA from "@/components/FloatingCTA";
import styles from "./page.module.css";

// Metadata for homepage
export const metadata: Metadata = {
  title: `${BUSINESS_CONFIG.name} - Professional CCTV Installation & Repair Services in Delhi`,
  description: "Expert CCTV installation, repair & maintenance services across Delhi. 500+ installations, 24/7 support, affordable rates. Free consultation & same-day service available.",
  keywords: "CCTV installation Delhi, CCTV repair Delhi, security camera installation, CCTV services Delhi, home security Delhi",
  openGraph: {
    title: `${BUSINESS_CONFIG.name} - CCTV Installation & Repair in Delhi`,
    description: "Professional CCTV services across Delhi. 500+ happy customers, 10+ years experience. Call for free consultation!",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {

  // Get featured services (first 6)
  const featuredServices = SERVICES.slice(0, 6);

  return (
    <>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
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
                return (
                  <Link
                    key={city}
                    href={`/${city.toLowerCase()}`}
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
            <div className={styles.contactDetails}>
              <p>
                <strong>Call/WhatsApp:</strong> <a href={`tel:${BUSINESS_CONFIG.phone}`}>{BUSINESS_CONFIG.phone}</a>
              </p>
              <p className={styles.workingHours}>
                <strong>Working Hours:</strong> Mon-Fri: 9 AM - 8 PM | Sat-Sun: 10 AM - 6 PM | Emergency: 24/7
              </p>
            </div>
          </div>
        </section>

        <FloatingCTA />
      </div>
    </>
  );
}
