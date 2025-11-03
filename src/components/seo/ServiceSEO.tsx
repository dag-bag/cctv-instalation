import React from 'react';
import Head from 'next/head';
import { Service } from '@/data/services';
import { Location } from '@/data/locations';

export interface ServiceSEOProps {
  service: Service;
  location: Location;
  baseUrl: string;
}

const ServiceSEO: React.FC<ServiceSEOProps> = ({ service, location, baseUrl }) => {
  // Generate canonical URL
  const canonicalUrl = `${baseUrl}/service/${location.slug}/${service.slug}`;
  
  // Generate page title and description
  const pageTitle = service.seoTitle || `${service.name} in ${location.name} | Professional & Affordable`;
  const pageDescription = service.seoDescription || 
    `Professional ${service.name} services in ${location.name}. ${service.description} Call us today for a free quote!`;

  // Generate keywords
  const defaultKeywords = [
    service.name.toLowerCase(),
    `${service.name} in ${location.name}`,
    `${service.name} near me`,
    `best ${service.name} in ${location.name}`,
    ...(service.keywords || [])
  ];

  // Generate structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    provider: {
      "@type": "LocalBusiness",
      name: "Your Company Name",
      address: {
        "@type": "PostalAddress",
        addressLocality: location.name,
        addressRegion: "Delhi",
        addressCountry: "IN"
      },
      telephone: process.env.NEXT_PUBLIC_PHONE,
      email: process.env.NEXT_PUBLIC_EMAIL
    },
    serviceType: service.serviceTypes || [service.name],
    areaServed: {
      "@type": "City",
      name: location.name,
      containedIn: {
        "@type": "State",
        name: "Delhi NCR"
      }
    },
    ...(service.rating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: service.rating.value.toString(),
        ratingCount: service.rating.count.toString(),
        bestRating: "5",
        worstRating: "1"
      }
    }),
    ...(service.faqs && service.faqs.length > 0 && {
      mainEntity: service.faqs.map(faq => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer
        }
      }))
    })
  };

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={Array.from(new Set(defaultKeywords)).join(', ')} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={`${baseUrl}/images/og-image.jpg`} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={`${baseUrl}/images/og-image.jpg`} />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {service.faqs && service.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: service.faqs.map(faq => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer
                }
              }))
            })
          }}
        />
      )}
      
      {service.rating && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              name: service.name,
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: service.rating.value.toString(),
                reviewCount: service.rating.count.toString(),
                bestRating: "5",
                worstRating: "1"
              }
            })
          }}
        />
      )}
    </Head>
  );
};

export default ServiceSEO;
