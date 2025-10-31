import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
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
  generateFAQs,
  generateKeywords,
} from "@/utils/content-generator";
import { generateLocalityContent } from "@/utils/locality-api";
import { generateAllSchemas } from "@/utils/schema-generator";
import CTAButtons from "@/components/CTAButtons";
import FloatingCTA from "@/components/FloatingCTA";
import styles from "./catch-all.module.css";

// Parse single slug route - handles locations and SEO routes
function parseRoute(slug: string): { 
  type: 'location' | 'seo-route';
  location?: string;
  service?: string;
} {
  // Priority 1: Check if it's an SEO route with hyphens (e.g., "cctv-installation-in-rohini-delhi")
  if (slug.includes('-in-') || slug.endsWith('-delhi')) {
    return { type: 'seo-route', location: slug, service: slug };
  }
  
  // Priority 2: Check if it's a valid location (district or locality)
  const location = getLocationBySlug(slug);
  const locality = getLocalityDetails(slug);
  
  if (location || locality) {
    return { type: 'location', location: slug };
  }
  
  // Priority 3: Assume it's a location with hyphenated name
  return { type: 'location', location: slug };
}

// Helper for SEO routes - parses hyphenated SEO URLs
// Examples: "cctv-installation-in-rohini-delhi" or "repair-services-karol-bagh-delhi"
function parseSEORoute(seoRoute: string): { service: string; location: string } | null {
  // Split by hyphens
  const parts = seoRoute.split('-');
  
  // Remove 'delhi' suffix if present
  if (parts[parts.length - 1] === 'delhi') {
    parts.pop();
  }
  
  // Pattern 1: service-in-location (e.g., "installation-services-in-rohini")
  const inIndex = parts.indexOf('in');
  if (inIndex !== -1 && inIndex > 0) {
    const serviceParts = parts.slice(0, inIndex);
    const locationParts = parts.slice(inIndex + 1);
    return {
      service: serviceParts.join('-'),
      location: locationParts.join('-'),
    };
  }
  
  // Pattern 2: Try to match service slug at the start
  for (const service of SERVICES) {
    const serviceSlugParts = service.slug.split('-');
    
    // Check if the route starts with this service slug
    if (parts.length > serviceSlugParts.length) {
      const routeServicePart = parts.slice(0, serviceSlugParts.length).join('-');
      
      if (routeServicePart === service.slug) {
        // Extract location from remaining parts
        const locationParts = parts.slice(serviceSlugParts.length);
        const location = locationParts.join('-');
        
        return { service: service.slug, location };
      }
    }
  }
  
  return null;
}

// Generate static params for [slug] route
export async function generateStaticParams() {
  const allLocations = getAllLocationsWithLocalities();
  const params: { slug: string }[] = [];

  // Add all locations (districts and localities)
  allLocations.forEach((location) => {
    params.push({ slug: location.slug });
    
    // Add SEO routes for each location
    SERVICES.forEach((service) => {
      params.push({ slug: `${service.slug}-in-${location.slug}-delhi` });
      params.push({ slug: `${service.slug}-${location.slug}-delhi` });
    });
  });

  return params;
}

// Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const route = parseRoute(slug);

  if (route.type === 'seo-route' && route.location) {
    const parsed = parseSEORoute(route.location);
    if (parsed) {
      const service = getServiceBySlug(parsed.service);
      const locationData = getLocationBySlug(parsed.location);
      const localityData = getLocalityDetails(parsed.location);
      
      if (service && (locationData || localityData)) {
        const displayName = locationData 
          ? locationData.name 
          : localityData
          ? localityData.locality.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
          : parsed.location.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
        
        return {
          title: generatePageTitle(service.name, displayName),
          description: generateMetaDescription(service.name, displayName),
          keywords: generateKeywords(service.name, displayName),
          alternates: {
            canonical: `/${parsed.location}/${parsed.service}`,
          },
        };
      }
    }
  }

  if (route.location && route.service) {
    const service = getServiceBySlug(route.service);
    const locationData = getLocationBySlug(route.location);
    const localityData = getLocalityDetails(route.location);
    
    if (service && (locationData || localityData)) {
      const displayName = locationData 
        ? locationData.name 
        : localityData
        ? localityData.locality.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
        : route.location.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
      
      return {
        title: generatePageTitle(service.name, displayName),
        description: generateMetaDescription(service.name, displayName),
        keywords: generateKeywords(service.name, displayName),
      };
    }
  }

  if (route.location) {
    const locationData = getLocationBySlug(route.location);
    const localityData = getLocalityDetails(route.location);
    
    if (locationData || localityData) {
      const displayName = locationData 
        ? locationData.name 
        : localityData
        ? localityData.locality.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
        : route.location.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
      
      return {
        title: generatePageTitle("CCTV Installation & Repair Services", displayName),
        description: generateMetaDescription("CCTV services", displayName),
        keywords: generateKeywords("CCTV services", displayName),
      };
    }
  }

  return { title: BUSINESS_CONFIG.name };
}

// Main component
export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const route = parseRoute(slug);

  // Handle location-only pages
  if (route.type === 'location' && route.location && !route.service) {
    const location = getLocationBySlug(route.location);
    const localityDetails = getLocalityDetails(route.location);

    if (!location && !localityDetails) {
      notFound();
    }

    const displayName = location
      ? location.name
      : localityDetails
      ? localityDetails.locality.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
      : route.location.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

    return (
      <div className={styles.container}>
        <h1>{displayName} - CCTV Services</h1>
        <p>Services for {displayName} coming soon...</p>
        <CTAButtons />
        <FloatingCTA />
      </div>
    );
  }

  // Handle all service+location combinations
  let serviceSlug = route.service;
  let locationSlug = route.location;

  // Handle SEO routes
  if (route.type === 'seo-route' && route.location) {
    const parsed = parseSEORoute(route.location);
    if (parsed) {
      serviceSlug = parsed.service;
      locationSlug = parsed.location;
    }
  }

  if (!serviceSlug || !locationSlug) {
    notFound();
  }

  const service = getServiceBySlug(serviceSlug);
  const location = getLocationBySlug(locationSlug);
  const localityDetails = getLocalityDetails(locationSlug);

  if (!service || (!location && !localityDetails)) {
    notFound();
  }

  const displayName = location
    ? location.name
    : localityDetails
    ? localityDetails.locality.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    : locationSlug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  const districtSlug = location ? location.slug : localityDetails?.district.slug || locationSlug;
  
  const faqs = generateFAQs(service.name, displayName);
  const localityContent = generateLocalityContent(locationSlug, districtSlug);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: displayName, url: `/${locationSlug}` },
    { name: service.name, url: `/${locationSlug}/${serviceSlug}` },
  ];

  // Construct full URL for schema
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cctvinstallation.co.in';
  const fullUrl = `${baseUrl}/${slug}`;

  const schemas = generateAllSchemas(
    {
      businessName: BUSINESS_CONFIG.name,
      serviceName: service.name,
      location: displayName,
      description: generateMetaDescription(service.name, displayName),
      url: fullUrl,
      price: service.priceRange,
    },
    { breadcrumbs, faqs }
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
          <Link href="/">Home</Link> / <Link href={`/${locationSlug}`}>{displayName}</Link> /{" "}
          <span>{service.name}</span>
        </nav>

        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.serviceIcon}>{service.icon}</div>
            <h1 className={styles.mainHeading}>
              {service.name} in {displayName}, Delhi
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

        <section className={styles.section}>
          <div className={styles.content}>
            <h2>About {displayName}</h2>
            <p className={styles.intro}>{localityContent.overview}</p>
            <p>{localityContent.connectivity}</p>
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
          </div>
        </section>

        {/* FAQs Section */}
        {faqs && faqs.length > 0 && (
          <section className={styles.section}>
            <div className={styles.content}>
              <h2>Frequently Asked Questions</h2>
              <div className={styles.faqList}>
                {faqs.map((faq, index) => (
                  <div key={index} className={styles.faqItem}>
                    <h3 className={styles.faqQuestion}>{faq.question}</h3>
                    <p className={styles.faqAnswer}>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className={styles.ctaSection}>
          <div className={styles.content}>
            <h2>Get Started Today!</h2>
            <p>Contact us for a free consultation and quote</p>
            <CTAButtons variant="horizontal" />
            <p style={{ marginTop: '2rem' }}>
              Call/WhatsApp: <a href={`tel:${BUSINESS_CONFIG.phone}`}>{BUSINESS_CONFIG.phone}</a>
            </p>
          </div>
        </section>

        <FloatingCTA />
      </div>
    </>
  );
}
