import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getAllLocationsWithLocalities,
  getLocationBySlug,
  getLocalityDetails,
} from "@/data/locations";
import { SERVICES, getServiceBySlug } from "@/data/services";
import { BUSINESS_CONFIG } from "@/config/business";
import {
  generatePageTitle,
  generateMetaDescription,
  generateHeadline,
  generateServicePageContent,
  generateTestimonials,
  generateKeywords,
} from "@/utils/content-generator";
import { generateAllSchemas } from "@/utils/schema-generator";
import CTAButtons from "@/components/CTAButtons";
import FloatingCTA from "@/components/FloatingCTA";
import styles from "./service.module.css";
import { CITY_CONFIG, CITY_SLUGS, isValidCity } from "@/data/cities";

const getDisplayName = (localitySlug: string) => {
  const location = getLocationBySlug(localitySlug);
  const localityDetails = getLocalityDetails(localitySlug);

  if (location) {
    return location.name;
  }

  if (localityDetails) {
    return localityDetails.locality
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  }

  return localitySlug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
};

const doesLocalityExist = (localitySlug: string) => {
  return Boolean(getLocationBySlug(localitySlug) || getLocalityDetails(localitySlug));
};

export async function generateStaticParams() {
  const allLocations = getAllLocationsWithLocalities();
  const params: { city: string; locality: string; service: string }[] = [];

  CITY_SLUGS.forEach((city) => {
    allLocations.forEach((location) => {
      SERVICES.forEach((service) => {
        params.push({
          city,
          locality: location.slug,
          service: service.slug,
        });
      });
    });
  });

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; locality: string; service: string }>;
}): Promise<Metadata> {
  const { city, locality, service: serviceSlug } = await params;

  if (!isValidCity(city)) {
    return { title: "City Not Found" };
  }

  if (!doesLocalityExist(locality)) {
    return { title: "Location Not Found" };
  }

  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  const locationName = getDisplayName(locality);
  const cityName = CITY_CONFIG[city].name;

  const title = generatePageTitle(service.name, `${locationName}, ${cityName}`);
  const description = generateMetaDescription(service.name, `${locationName}, ${cityName}`);
  const keywords = generateKeywords(service.name, `${locationName}, ${cityName}`);

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
      canonical: `/services/${city}/${locality}/${serviceSlug}`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ city: string; locality: string; service: string }>;
}) {
  const { city, locality: localitySlug, service: serviceSlug } = await params;

  if (!isValidCity(city)) {
    notFound();
  }

  const service = getServiceBySlug(serviceSlug);
  const location = getLocationBySlug(localitySlug);
  const localityDetails = getLocalityDetails(localitySlug);

  if (!service || (!location && !localityDetails)) {
    notFound();
  }

  const displayName = getDisplayName(localitySlug);
  const cityName = CITY_CONFIG[city].name;

  const districtName = location?.district || localityDetails?.district.name;
  const landmarks = location?.landmarks || localityDetails?.district.landmarks || [];
  const nearbyLocalities =
    (location?.localities || localityDetails?.district.localities || []).filter(
      (slug) => slug !== localitySlug
    );

  const dynamicContent = generateServicePageContent({
    serviceName: service.name,
    serviceSlug,
    serviceCategory: service.category,
    serviceFeatures: service.features,
    cityName,
    citySlug: city,
    localityName: displayName,
    localitySlug,
    districtName,
    landmarks,
    nearbyLocalities,
  });

  const testimonials = generateTestimonials(displayName, service.name);

  const canonicalPath = `/services/${city}/${localitySlug}/${serviceSlug}`;

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: cityName, url: `/services/${city}` },
    { name: displayName, url: `/services/${city}/${localitySlug}` },
    { name: service.name, url: canonicalPath },
  ];

  const schemas = generateAllSchemas(
    {
      businessName: BUSINESS_CONFIG.name,
      serviceName: service.name,
      location: `${displayName}, ${cityName}`,
      description: generateMetaDescription(service.name, `${displayName}, ${cityName}`),
      url: canonicalPath,
      price: service.priceRange,
    },
    { breadcrumbs, faqs: dynamicContent.faqs }
  );

  const relatedServices = SERVICES.filter(
    (s) => s.category === service.category && s.slug !== service.slug
  ).slice(0, 3);

  return (
    <>
      {/* JSON-LD Schemas */}
      {/* {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))} */}

      <div className={styles.container}>
        {/* Breadcrumb */}
        <nav className={styles.breadcrumb}>
          <Link href="/">Home</Link> / <Link href="/services">Services</Link> /{" "}
          <Link href={`/services/${city}`}>{cityName}</Link> /{" "}
          <Link href={`/services/${city}/${localitySlug}`}>{displayName}</Link> / <span>{service.name}</span>
        </nav>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.serviceIcon}>{service.icon}</div>
            <h1 className={styles.mainHeading}>
              {generateHeadline(service.name, `${displayName}, ${cityName}`)}
            </h1>
            <p className={styles.heroKicker}>{dynamicContent.heroSubtitle}</p>
            <p className={styles.subheading}>{service.description}</p>
            {service.priceRange && (
              <div className={styles.priceTag}>
                <span className={styles.priceLabel}>Starting from</span>
                <span className={styles.price}>{service.priceRange}</span>
              </div>
            )}
            <CTAButtons variant="horizontal" />
            <div className={styles.heroStats}>
              {dynamicContent.heroStats.map((stat) => (
                <div key={stat.label} className={styles.stat}>
                  <span className={styles.statNumber}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className={styles.section}>
          <div className={styles.content}>
            <h2>About {service.name} in {displayName}</h2>
            <p className={styles.intro}>{dynamicContent.introParagraph}</p>
            <p>{dynamicContent.locationSnippet}</p>
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
            {dynamicContent.serviceHighlights.length > 0 && (
              <ul className={styles.highlightList}>
                {dynamicContent.serviceHighlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {/* Service Benefits */}
        <section className={styles.section}>
          <div className={styles.content}>
            <h2>Why Choose Our {service.name}?</h2>
            <div className={styles.benefitsList}>
              {dynamicContent.whyChoose.map((benefit, index) => (
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
              {dynamicContent.faqs.map((faq, index) => (
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
                    href={`/services/${city}/${localitySlug}/${relatedService.slug}`}
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
              <Link href={`/services/${city}/${localitySlug}`} className={styles.allServicesButton}>
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
              {dynamicContent.cta.body}
            </p>
            <CTAButtons variant="horizontal" />
            <p className={styles.contactInfo}>
              {dynamicContent.cta.phoneLine}{" "}
              <a href={`tel:${BUSINESS_CONFIG.phone}`}>{BUSINESS_CONFIG.phone}</a>
            </p>
          </div>
        </section>

        <FloatingCTA />
      </div>
    </>
  );
}

