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

const DEFAULT_CITY_SLUG = "delhi";

// Parse single slug route - handles locations and SEO routes
function parseRoute(slug: string): { 
  type: 'location' | 'seo-route';
  location?: string;
  service?: string;
} {
  // Priority 1: Check if it's a valid location (district or locality) FIRST
  // This prevents valid locations like "north-west-delhi" from being treated as SEO routes
  const location = getLocationBySlug(slug);
  const locality = getLocalityDetails(slug);
  
  if (location || locality) {
    return { type: 'location', location: slug };
  }
  
  // Priority 2: Check if it's an SEO route with hyphens (e.g., "cctv-installation-in-rohini-delhi")
  // Only treat as SEO route if it contains '-in-' or ends with '-delhi' AND is not a valid location
  if (slug.includes('-in-') || (slug.endsWith('-delhi') && !location && !locality)) {
    return { type: 'seo-route', location: slug, service: slug };
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

    const locationSlug = route.location;
    const districtSlug = location ? location.slug : localityDetails?.district.slug || locationSlug;
    
    // Get all services available for this location
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
          <Link href="/">Home</Link> / <span>{displayName}</span>
        </nav>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.serviceIcon}>🏠</div>
            <h1 className={styles.mainHeading}>
              CCTV & Security Services in {displayName}
            </h1>
            <p className={styles.subheading}>
              Professional security solutions for homes and businesses in {displayName}. 
              Get expert CCTV installation, repair, and maintenance services with free site surveys and competitive pricing.
            </p>
            <CTAButtons variant="horizontal" />
          </div>
        </section>

        {/* About Location Section */}
        <section className={styles.section}>
          <div className={styles.content}>
            <h2>Why Choose Us in {displayName}?</h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <span className={styles.featureIcon}>✓</span>
                <h3>Local Experts</h3>
                <p>Extensive experience serving {displayName} and surrounding areas</p>
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
            <h2>Our Services in {displayName}</h2>
            <p className={styles.intro} style={{ textAlign: 'center', marginBottom: '3rem' }}>
              Explore our comprehensive range of CCTV and security services available in {displayName}. 
              Click on any service to learn more and get a free quote.
            </p>
            
            {Object.entries(servicesByCategory).map(([category, services]) => (
              <div key={category} style={{ marginBottom: '4rem' }}>
                <h3 style={{ 
                  fontSize: '1.75rem', 
                  fontWeight: 600, 
                  color: '#1e3c72', 
                  marginBottom: '2rem',
                  textTransform: 'capitalize'
                }}>
                  {category.replace(/-/g, ' ')}
                </h3>
                <div className={styles.featuresGrid}>
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${DEFAULT_CITY_SLUG}/${locationSlug}/${service.slug}`}
                      style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                    >
                      <div className={styles.featureCard} style={{ cursor: 'pointer' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                        <h3 style={{ marginBottom: '0.75rem' }}>{service.name}</h3>
                        <p style={{ 
                          color: '#666', 
                          fontSize: '0.95rem', 
                          lineHeight: '1.6',
                          marginBottom: '1rem',
                          flexGrow: 1
                        }}>
                          {service.description}
                        </p>
                        {service.priceRange && (
                          <div style={{ 
                            color: '#2a5298', 
                            fontWeight: 600, 
                            fontSize: '0.9rem',
                            marginBottom: '0.75rem'
                          }}>
                            {service.priceRange}
                          </div>
                        )}
                        <div style={{ 
                          color: '#2a5298', 
                          fontWeight: 600, 
                          marginTop: 'auto',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.5rem',
                          paddingTop: '0.5rem'
                        }}>
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
            <h2>Ready to Secure Your Property in {displayName}?</h2>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.95 }}>
              Contact us today for a free consultation and quote. Our expert team is ready to help!
            </p>
            <CTAButtons variant="horizontal" />
            <p style={{ marginTop: '2rem', fontSize: '1rem', opacity: 0.9 }}>
              Call/WhatsApp: <a href={`tel:${BUSINESS_CONFIG.phone}`} style={{ color: '#ffd700', fontWeight: 600 }}>{BUSINESS_CONFIG.phone}</a>
            </p>
          </div>
        </section>

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

  redirect(`/services/${DEFAULT_CITY_SLUG}/${locationSlug}/${serviceSlug}`);
}
