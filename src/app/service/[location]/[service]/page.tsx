import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  LOCATIONS,
  getAllLocationsWithLocalities,
  getLocationBySlug,
  getLocalityDetails,
} from "@/data/locations";
import { SERVICES, getServiceBySlug, Service } from "@/data/services";
import { BUSINESS_CONFIG } from "@/config/business";
import {
  generatePageTitle,
  generateMetaDescription,
  generateHeadline,
  generateIntroContent,
  generateServiceBenefits,
  generateLocationContent,
  generateFAQs,
  generateTestimonials,
  generateKeywords,
} from "@/utils/content-generator";
import {
  generateAllSchemas,
} from "@/utils/schema-generator";
import CTAButtons from "@/components/CTAButtons";
import FloatingCTA from "@/components/FloatingCTA";
import styles from "./service.module.css";

// Generate static params for all location + service combinations
export async function generateStaticParams() {
  const allLocations = getAllLocationsWithLocalities();
  const params: { location: string; service: string }[] = [];

  allLocations.forEach((location) => {
    SERVICES.forEach((service) => {
      params.push({
        location: location.slug,
        service: service.slug,
      });
    });
  });

  return params;
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string; service: string }>;
}): Promise<Metadata> {
  const { location: locationSlug, service: serviceSlug } = await params;
  const location = getLocationBySlug(locationSlug);
  const localityDetails = getLocalityDetails(locationSlug);
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  const displayName = location
    ? location.name
    : localityDetails
    ? localityDetails.locality.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    : locationSlug;

  const title = generatePageTitle(service.name, displayName);
  const description = generateMetaDescription(service.name, displayName);
  const keywords = generateKeywords(service.name, displayName);

  return {
    title,
    description,
    keywords,
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
      canonical: `/${locationSlug}/${serviceSlug}`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ location: string; service: string }>;
}) {
  const { location: locationSlug, service: serviceSlug } = await params;
  const location = getLocationBySlug(locationSlug);
  const localityDetails = getLocalityDetails(locationSlug);
  const service = getServiceBySlug(serviceSlug);

  if (!service || (!location && !localityDetails)) {
    notFound();
  }

  const displayName = location
    ? location.name
    : localityDetails
    ? localityDetails.locality.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    : locationSlug;

  const faqs = generateFAQs(service.name, displayName);
  const testimonials = generateTestimonials(displayName);
  const benefits = generateServiceBenefits(service);

  // Generate JSON-LD schemas
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: displayName, url: `/${locationSlug}` },
    { name: service.name, url: `/${locationSlug}/${serviceSlug}` },
  ];

  const schemas = generateAllSchemas(
    {
      businessName: BUSINESS_CONFIG.name,
      serviceName: service.name,
      location: displayName,
      description: generateMetaDescription(service.name, displayName),
      url: `/${locationSlug}/${serviceSlug}`,
      price: service.priceRange,
    },
    { breadcrumbs, faqs }
  );

  // Get related services
  const relatedServices = SERVICES.filter(
    (s) => s.category === service.category && s.slug !== service.slug
  ).slice(0, 3);

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
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb}>
          <Link href="/">Home</Link> / <Link href={`/${locationSlug}`}>{displayName}</Link> /{" "}
          <span>{service.name}</span>
        </nav>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.serviceIcon}>{service.icon}</div>
            <h1 className={styles.mainHeading}>
              {generateHeadline(service.name, displayName)}
            </h1>
            <p className={styles.subheading}>{service.description}</p>
            {service.priceRange && (
              <div className={styles.priceTag}>
                <span className={styles.priceLabel}>Starting from</span>
                <span className={styles.price}>{service.priceRange}</span>
              </div>
            )}
            <CTAButtons variant="horizontal" />
          </div>
        </section>

        {/* Introduction */}
        <section className={styles.section}>
          <div className={styles.content}>
            <h2>About {service.name} in {displayName}</h2>
            <p className={styles.intro}>{generateIntroContent(service.name, displayName)}</p>
            <p>{generateLocationContent(displayName)}</p>
          </div>
        </section>

        {/* Service Features */}
        <section className={styles.section}>
          <div className={styles.content}>
            <h2>What's Included in Our {service.name}</h2>
            <div className={styles.featuresGrid}>
              {service.features.map((feature, index) => (
                <div key={index} className={styles.featureCard}>
                  <span className={styles.featureIcon}>✓</span>
                  <h3>{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Benefits */}
        <section className={styles.section}>
          <div className={styles.content}>
            <h2>Why Choose Our {service.name}?</h2>
            <div className={styles.benefitsList}>
              {benefits.map((benefit, index) => (
                <div key={index} className={styles.benefitItem}>
                  <span className={styles.checkmark}>✓</span>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className={styles.section}>
          <div className={styles.content}>
            <h2>Our Service Process</h2>
            <div className={styles.processGrid}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>1</div>
                <h3>Contact Us</h3>
                <p>Call or WhatsApp us for a free consultation. We'll understand your requirements.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>2</div>
                <h3>Free Site Survey</h3>
                <p>Our expert technician visits your location for assessment and planning.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>3</div>
                <h3>Get Quote</h3>
                <p>Receive a detailed, transparent quote with no hidden charges.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>4</div>
                <h3>Professional Installation</h3>
                <p>Our certified technicians complete the installation with precision.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>5</div>
                <h3>Testing & Training</h3>
                <p>We test the system thoroughly and train you on how to use it.</p>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>6</div>
                <h3>Ongoing Support</h3>
                <p>Get 24/7 support and optional AMC for regular maintenance.</p>
              </div>
            </div>
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

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className={styles.section}>
            <div className={styles.content}>
              <h2>Related Services in {displayName}</h2>
              <div className={styles.relatedGrid}>
                {relatedServices.map((relatedService) => (
                  <Link
                    key={relatedService.slug}
                    href={`/${locationSlug}/${relatedService.slug}`}
                    className={styles.relatedCard}
                  >
                    <div className={styles.relatedIcon}>{relatedService.icon}</div>
                    <h3>{relatedService.name}</h3>
                    <p>{relatedService.description}</p>
                    <span className={styles.relatedLink}>Learn More →</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Services Link */}
        <section className={styles.section}>
          <div className={styles.content}>
            <div className={styles.allServicesCard}>
              <h3>Looking for Other Services in {displayName}?</h3>
              <p>Explore all our CCTV and security services</p>
              <Link href={`/${locationSlug}`} className={styles.allServicesButton}>
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.content}>
            <h2>Ready for {service.name} in {displayName}?</h2>
            <p className={styles.ctaText}>
              Contact us now for a free consultation and quote. Our expert team is ready to help!
            </p>
            <CTAButtons variant="horizontal" />
            <p className={styles.contactInfo}>
              <strong>24/7 Support Available</strong>
              <br />
              Call: <a href={`tel:${BUSINESS_CONFIG.phone}`}>{BUSINESS_CONFIG.phone}</a>
            </p>
          </div>
        </section>

        <FloatingCTA />
      </div>
    </>
  );
}
