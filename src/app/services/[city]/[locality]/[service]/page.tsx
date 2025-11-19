import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getLocationBySlug,
  getLocalityDetails,
} from "@/data/locations";
import { SERVICES, getServiceBySlug } from "@/data/services";
import { BUSINESS_CONFIG } from "@/config/business";
import {
  generatePageTitle,
  generateMetaDescription,
  generateHeadline,
  generateKeywords,
  generateTestimonials,
  generateServicePageContent,
} from "@/utils/content-generator";
import { generateAllSchemas } from "@/utils/schema-generator";
import CTAButtons from "@/components/CTAButtons";
import FloatingCTA from "@/components/FloatingCTA";
import styles from "./service.module.css";
import {
  CITY_CONFIG,
  CITY_SLUGS,
  isValidCity,
} from "@/data/cities";

const formatSlug = (slug: string): string =>
  slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const isLocalityInCity = (citySlug: string, localitySlug: string): boolean => {
  if (citySlug === localitySlug) return true;
  return CITY_CONFIG[citySlug]?.localities.includes(localitySlug) ?? false;
};

const getDisplayName = (
  citySlug: string,
  localitySlug: string
): string => {
  if (citySlug === localitySlug) {
    return CITY_CONFIG[citySlug]?.name ?? formatSlug(localitySlug);
  }

  const localityDetails = getLocalityDetails(localitySlug);
  if (localityDetails) {
    return localityDetails.name;
  }

  const location = getLocationBySlug(localitySlug);
  if (location) {
    return location.name;
  }

  return formatSlug(localitySlug);
};

const getBaseUrl = () =>
  (process.env.NEXT_PUBLIC_DOMAIN || "https://yourbrand.com").replace(
    /\/$/,
    ""
  );

export async function generateMetadata({
  params,
}: {
  params: { city: string; locality: string; service: string };
}): Promise<Metadata> {
  const { city, locality, service: serviceSlug } = params;

  if (!isValidCity(city) || !isLocalityInCity(city, locality)) {
    return { title: "Location Not Found" };
  }

  const service = getServiceBySlug(serviceSlug);
  if (!service) {
    return { title: "Service Not Found" };
  }

  const cityName = CITY_CONFIG[city].name;
  const locationName = getDisplayName(city, locality);
  const title = generatePageTitle(service.name, `${locationName}, ${cityName}`);
  const description = generateMetaDescription(
    service.name,
    `${locationName}, ${cityName}`
  );
  const keywords = generateKeywords(service.name, `${locationName}, ${cityName}`);
  const canonicalPath = `/services/${city}/${locality}/${serviceSlug}`;
  const baseUrl = getBaseUrl();

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `${baseUrl}${canonicalPath}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: { city: string; locality: string; service: string };
}) {
  const { city, locality: localitySlug, service: serviceSlug } = params;

  if (!isValidCity(city) || !isLocalityInCity(city, localitySlug)) {
    notFound();
  }

  const cityLocation = getLocationBySlug(city);
  if (!cityLocation) {
    notFound();
  }

  const service = getServiceBySlug(serviceSlug);
  if (!service) {
    notFound();
  }

  const localityDetails =
    localitySlug === city ? undefined : getLocalityDetails(localitySlug);

  if (localitySlug !== city && (!localityDetails || localityDetails.parent !== city)) {
    notFound();
  }

  const displayName = getDisplayName(city, localitySlug);
  const cityName = cityLocation.name;
  const canonicalPath = `/services/${city}/${localitySlug}/${serviceSlug}`;

  const parentLocation =
    localityDetails && localityDetails.parent
      ? getLocationBySlug(localityDetails.parent)
      : cityLocation;

  const landmarks = parentLocation?.landmarks ?? [];
  const nearbyLocalities =
    parentLocation?.localities.filter(
      (slug) => slug !== localityDetails?.slug
    ) ?? [];

  const dynamicContent = generateServicePageContent({
    serviceName: service.name,
    serviceSlug,
    serviceCategory: service.category,
    serviceFeatures: service.features,
    cityName,
    citySlug: city,
    localityName: displayName,
    localitySlug,
    districtName: cityName,
    landmarks,
    nearbyLocalities,
  });

  const testimonials = generateTestimonials(displayName, service.name);
  const faqs = dynamicContent.faqs;

  const schemas = generateAllSchemas(
    {
      businessName: BUSINESS_CONFIG.name,
      serviceName: service.name,
      location: `${displayName}, ${cityName}`,
      description: dynamicContent.introParagraph,
      url: canonicalPath,
      price: service.priceRange,
    },
    { breadcrumbs: [
        { name: "Home", url: "/" },
        { name: cityName, url: `/services/${city}` },
        { name: displayName, url: `/services/${city}/${localitySlug}` },
        { name: service.name, url: canonicalPath },
      ],
      faqs,
    }
  );

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <div className={styles.container}>
        <nav className={styles.breadcrumb}>
          <Link href="/">Home</Link> / <Link href="/services">Services</Link> /{" "}
          <Link href={`/services/${city}`}>{cityName}</Link> /{" "}
          <Link href={`/services/${city}/${localitySlug}`}>{displayName}</Link> /{" "}
          <span>{service.name}</span>
        </nav>

        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroKicker}>Serving {displayName}</div>
            <div className={styles.serviceIcon}>{service.icon}</div>
            <h1 className={styles.mainHeading}>
              {generateHeadline(service.name, `${displayName}, ${cityName}`)}
            </h1>
            <p className={styles.subheading}>{dynamicContent.heroSubtitle}</p>
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

        <section className={styles.section}>
          <div className={styles.content}>
            <h2>About {service.name} in {displayName}</h2>
            <p className={styles.intro}>{dynamicContent.introParagraph}</p>
            <p>{dynamicContent.locationSnippet}</p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.content}>
            <h2>What's Included</h2>
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

        {SERVICES.length > 1 && (
          <section className={styles.section}>
            <div className={styles.content}>
              <h2>Related Services in {displayName}</h2>
              <div className={styles.relatedGrid}>
                {SERVICES.filter((s) => s.slug !== service.slug)
                  .slice(0, 3)
                  .map((related) => (
                    <Link
                      key={related.slug}
                      href={`/services/${city}/${localitySlug}/${related.slug}`}
                      className={styles.relatedCard}
                    >
                      <div className={styles.relatedIcon}>{related.icon}</div>
                      <h3>{related.name}</h3>
                      <p>{related.description}</p>
                      <span className={styles.relatedLink}>Learn More →</span>
                    </Link>
                  ))}
              </div>
            </div>
          </section>
        )}

        <section className={styles.section}>
          <div className={styles.content}>
            <div className={styles.allServicesCard}>
              <h3>Looking for Other Services in {displayName}?</h3>
              <p>Explore all our CCTV and security services</p>
              <Link
                href={`/services/${city}/${localitySlug}`}
                className={styles.allServicesButton}
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.content}>
            <h2>Ready for {service.name} in {displayName}?</h2>
            <p className={styles.ctaText}>{dynamicContent.cta.body}</p>
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
