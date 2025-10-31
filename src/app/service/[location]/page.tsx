import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  LOCATIONS,
  getAllLocationsWithLocalities,
  getLocationBySlug,
  getLocalityDetails,
} from "@/data/locations";
import { SERVICES } from "@/data/services";
import { BUSINESS_CONFIG } from "@/config/business";
import {
  generatePageTitle,
  generateMetaDescription,
  generateHeadline,
  generateIntroContent,
  generateWhyChooseUs,
  generateLocationContent,
  generateFAQs,
  generateTestimonials,
  generateServiceAreas,
} from "@/utils/content-generator";
import {
  generateAllSchemas,
  generateBreadcrumbSchema,
} from "@/utils/schema-generator";
import CTAButtons from "@/components/CTAButtons";
import FloatingCTA from "@/components/FloatingCTA";
import styles from "./location.module.css";

// Generate static params for all locations and localities
export async function generateStaticParams() {
  const allLocations = getAllLocationsWithLocalities();
  return allLocations.map((location) => ({
    location: location.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location: locationSlug } = await params;
  const location = getLocationBySlug(locationSlug);
  const localityDetails = getLocalityDetails(locationSlug);
  
  const displayName = location
    ? location.name
    : localityDetails
    ? localityDetails.locality.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    : locationSlug;

  const title = generatePageTitle("CCTV Installation & Repair Services", displayName);
  const description = generateMetaDescription("CCTV services", displayName);

  return {
    title,
    description,
    keywords: `CCTV installation ${displayName}, CCTV repair ${displayName}, security camera ${displayName}, surveillance system ${displayName}, ${displayName} CCTV`,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `/${locationSlug}`,
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location: locationSlug } = await params;
  const location = getLocationBySlug(locationSlug);
  const localityDetails = getLocalityDetails(locationSlug);

  if (!location && !localityDetails) {
    notFound();
  }

  const displayName = location
    ? location.name
    : localityDetails
    ? localityDetails.locality.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    : locationSlug;

  const serviceName = "CCTV Installation & Repair Services";
  const faqs = generateFAQs(serviceName, displayName);
  const testimonials = generateTestimonials(displayName);
  const whyChooseUs = generateWhyChooseUs(displayName);
  const serviceAreas = generateServiceAreas(displayName);

  // Generate JSON-LD schemas
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: displayName, url: `/${locationSlug}` },
  ];

  const schemas = generateAllSchemas(
    {
      businessName: BUSINESS_CONFIG.name,
      serviceName,
      location: displayName,
      description: generateMetaDescription(serviceName, displayName),
      url: `/${locationSlug}`,
    },
    { breadcrumbs, faqs }
  );

  return (
    <>
      {/* JSON-LD Schemas */}
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.mainHeading}>
              {generateHeadline(serviceName, displayName)}
            </h1>
            <p className={styles.subheading}>
              Professional CCTV solutions with certified technicians and quality guarantee
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Happy Customers</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>10+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>24/7</span>
                <span className={styles.statLabel}>Support Available</span>
              </div>
            </div>
            <CTAButtons variant="horizontal" />
          </div>
        </section>

        {/* Introduction */}
        <section className={styles.section}>
          <div className={styles.content}>
            <h2>About Our Services in {displayName}</h2>
            <p className={styles.intro}>{generateIntroContent(serviceName, displayName)}</p>
            <p>{generateLocationContent(displayName)}</p>
          </div>
        </section>

        {/* Services Grid */}
        <section className={styles.section}>
          <div className={styles.content}>
            <h2>Our Services in {displayName}</h2>
            <div className={styles.servicesGrid}>
              {SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/${locationSlug}/${service.slug}`}
                  className={styles.serviceCard}
                >
                  <div className={styles.serviceIcon}>{service.icon}</div>
                  <h3 className={styles.serviceTitle}>{service.name}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <ul className={styles.serviceFeatures}>
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  {service.priceRange && (
                    <p className={styles.priceRange}>Starting from {service.priceRange}</p>
                  )}
                  <span className={styles.serviceLink}>Learn More →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className={styles.section}>
          <div className={styles.content}>
            <h2>Why Choose Us for CCTV Services in {displayName}?</h2>
            <div className={styles.benefitsGrid}>
              {whyChooseUs.map((benefit, index) => (
                <div key={index} className={styles.benefitCard}>
                  <span className={styles.checkmark}>✓</span>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className={styles.section}>
          <div className={styles.content}>
            <h2>Areas We Serve</h2>
            <div className={styles.areasGrid}>
              {serviceAreas.map((area, index) => (
                <div key={index} className={styles.areaCard}>
                  📍 {area}
                </div>
              ))}
            </div>
            {location && location.localities && (
              <>
                <h3 className={styles.localitiesHeading}>Localities in {displayName}</h3>
                <div className={styles.localitiesGrid}>
                  {location.localities.map((locality) => (
                    <Link
                      key={locality}
                      href={`/${locality}`}
                      className={styles.localityLink}
                    >
                      {locality.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* Testimonials */}
        <section className={styles.section}>
          <div className={styles.content}>
            <h2>What Our Customers Say</h2>
            <div className={styles.testimonialsGrid}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className={styles.testimonialCard}>
                  <div className={styles.rating}>
                    {"⭐".repeat(testimonial.rating)}
                  </div>
                  <p className={styles.testimonialText}>"{testimonial.text}"</p>
                  <p className={styles.testimonialAuthor}>
                    <strong>{testimonial.name}</strong>
                    <br />
                    <span className={styles.testimonialLocation}>{testimonial.location}</span>
                  </p>
                  <p className={styles.testimonialService}>{testimonial.service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className={styles.section}>
          <div className={styles.content}>
            <h2>Frequently Asked Questions</h2>
            <div className={styles.faqList}>
              {faqs.map((faq, index) => (
                <details key={index} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>{faq.question}</summary>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.content}>
            <h2>Ready to Secure Your Property in {displayName}?</h2>
            <p className={styles.ctaText}>
              Get a free consultation and quote from our expert team. Available 24/7 for your convenience.
            </p>
            <CTAButtons variant="horizontal" />
            <p className={styles.contactInfo}>
              Call us now: <a href={`tel:${BUSINESS_CONFIG.phone}`}>{BUSINESS_CONFIG.phone}</a>
            </p>
          </div>
        </section>

        <FloatingCTA />
      </div>
    </>
  );
}
