import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "@/components/Link";
import { notFound } from "next/navigation";
import { CITIES, LOCALITIES, createSlug } from "../../../lib/seo-data";
import { BUSINESS_CONFIG } from "../../../config/business";
import { getImageUrl, getImageAlt } from "../../../config/images";
import styles from "../../[slug]/page.module.css"; // Reusing styles
// export const dynamic = 'force-static';
// export const revalidate = false;
export const dynamicParams = false;
export const dynamic = "force-dynamic";
type Props = {
  params: Promise<{
    city: string;
  }>;
};

// Helper to find original casing from slug
function findOriginalFromSlug(
  slug: string,
  list: string[],
): string | undefined {
  return list.find((item) => createSlug(item) === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = findOriginalFromSlug(citySlug, CITIES);

  if (!city) {
    return {
      title: "City Not Found",
    };
  }

  const title = `CCTV Camera Installation & Repair in ${city}`;
  const description = `Leading CCTV installation and security camera services in ${city}. We serve all localities with expert technicians, best prices & 24/7 support. Book your service today! Call +91-87662-03976.`;

  return {
    title,
    description,
    keywords: [
      `CCTV installation ${city}`,
      `CCTV repair ${city}`,
      `security camera installation ${city}`,
      `CCTV camera price ${city}`,
      `best cctv company in ${city}`,
      `cctv camera dealers in ${city}`,
    ],
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://www.camharbor.in/services/${citySlug}`,
      siteName: "CamHarbor",
      locale: "en_IN",
    },
    alternates: {
      canonical: `https://www.camharbor.in/services/${citySlug}`,
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { city: citySlug } = await params;
  const city = findOriginalFromSlug(citySlug, CITIES);

  if (!city) {
    notFound();
  }

  const localities = LOCALITIES[city] || [];
  const firstLocality = localities[0] || "";

  // Schema Markup
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.camharbor.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: city,
        item: `https://www.camharbor.in/services/${citySlug}`,
      },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: localities.map((locality, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://www.camharbor.in/services/${citySlug}/${createSlug(locality)}`,
      name: locality,
    })),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "CamHarbor",
    telephone: "+91-8766203976",
    address: BUSINESS_CONFIG.schemaAddress,
    areaServed: { "@type": "City", name: city },
    priceRange: "₹₹",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "500",
    },
  };

  return (
    <div className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema,
            itemListSchema,
            localBusinessSchema,
          ]),
        }}
      />

      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src={getImageUrl("default", "hero", 2070)}
            alt={getImageAlt("default", "hero", { city })}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", opacity: 0.15 }}
          />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            CCTV Installation and Security Services in{" "}
            <span className={styles.highlight}>{city}</span>
          </h1>
          <p className={styles.subtitle}>
            Professional CCTV installation and security solutions across {city}.
            Select your locality below.
          </p>
        </div>
      </header>

      {/* Breadcrumbs */}
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <div className={styles.breadcrumbContent}>
          <Link href="/" className={styles.link}>
            Home
          </Link>{" "}
          &gt; <span className={styles.activeBreadcrumb}>{city}</span>
        </div>
      </nav>

      <main className={styles.main}>
        <div className={styles.contentSection} style={{ width: "100%" }}>
          <section>
            <h2 className={styles.sectionTitle}>
              Select Your Locality in {city}
            </h2>
            <div className={styles.featuresGrid}>
              {localities.map((locality, index) => {
                const localitySlug = createSlug(locality);
                return (
                  <Link
                    key={index}
                    href={`/services/${citySlug}/${localitySlug}`}
                    className={styles.featureCard}
                    aria-label={`Open ${locality} services in ${city}`}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <span className={styles.checkIcon}>📍</span>
                    <span className={styles.featureText}>{locality}</span>
                  </Link>
                );
              })}
            </div>
          </section>

          <section style={{ marginTop: "4rem" }}>
            <h2 className={styles.sectionTitle}>Top Services in {city}</h2>
            <div className={styles.featuresGrid}>
              {[
                "CCTV Camera Installation",
                "IP Camera Installation",
                "CCTV Repair",
                "Access Control System",
                "Biometric Installation",
                "Video Door Phone Installation",
              ].map((service, i) => (
                <Link
                  key={i}
                  href={
                    firstLocality
                      ? `/services/${citySlug}/${createSlug(firstLocality)}/${createSlug(service)}`
                      : `/services/${citySlug}`
                  }
                  className={styles.featureCard}
                  aria-label={`Explore ${service} in ${city}`}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    cursor: "pointer",
                  }}
                >
                  <span className={styles.checkIcon}>🛡️</span>
                  <span className={styles.featureText}>{service}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section style={{ marginTop: "4rem" }}>
            <h2 className={styles.sectionTitle}>
              Why Choose CamHarbor in {city}?
            </h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <span className={styles.checkIcon}>⚡</span>
                <span className={styles.featureText}>
                  Fast Service in {city}
                </span>
              </div>
              <div className={styles.featureCard}>
                <span className={styles.checkIcon}>👨‍🔧</span>
                <span className={styles.featureText}>Expert Technicians</span>
              </div>
              <div className={styles.featureCard}>
                <span className={styles.checkIcon}>💰</span>
                <span className={styles.featureText}>Affordable Pricing</span>
              </div>
              <div className={styles.featureCard}>
                <span className={styles.checkIcon}>📞</span>
                <span className={styles.featureText}>24/7 Support</span>
              </div>
            </div>
            <div className={styles.text} style={{ marginTop: "2rem" }}>
              <p>
                We are the leading provider of security solutions in{" "}
                <strong>{city}</strong>. Whether you need a new CCTV camera
                installation, repair of existing systems, or advanced biometric
                access controls, our team is ready to serve every locality in{" "}
                {city}. We ensure high-quality workmanship and reliable
                after-sales support.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
