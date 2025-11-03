import { Location } from "@/data/locations";
import { Service } from "@/data/services";

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogType: string;
  structuredData: any;
}

export const generateLocationServiceMetadata = (
  location: Location,
  service: Service,
  baseUrl: string
): SEOMetadata => {
  const locationName = location.name;
  const serviceName = service.name;
  const serviceSlug = service.slug;
  const locationSlug = location.slug;

  // Generate dynamic title and description
  const title = service.seoTitle?.replace('{location}', locationName) || 
    `Best ${serviceName} in ${locationName} | Professional & Affordable`;
  
  const description = service.seoDescription?.replace('{location}', locationName) || 
    `Professional ${serviceName} services in ${locationName}. ${service.description} Call ${process.env.NEXT_PUBLIC_PHONE} for a free quote!`;

  // Generate keywords
  const baseKeywords = [
    serviceName.toLowerCase(),
    `${serviceName} in ${locationName}`,
    `${serviceName} near me`,
    `best ${serviceName} in ${locationName}`,
    `affordable ${serviceName} in ${locationName}`
  ];

  // Add location-specific keywords
  const locationKeywords = [
    ...location.landmarks?.map(landmark => `${serviceName} near ${landmark}`) || [],
    ...location.localities?.map(locality => `${serviceName} in ${locality}`) || [],
    ...(location.popularFor?.map(item => `${serviceName} for ${item}`) || [])
  ];

  // Add service-specific keywords
  const serviceKeywords = service.keywords || [];
  
  // Combine and dedupe keywords
  const keywords = Array.from(new Set([
    ...baseKeywords,
    ...locationKeywords,
    ...serviceKeywords,
    'professional service',
    'expert technicians',
    'same day service',
    '24/7 support'
  ]));

  // Generate structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": title,
    "description": description,
    "url": `${baseUrl}/service/${locationSlug}/${serviceSlug}`,
    "telephone": process.env.NEXT_PUBLIC_PHONE,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": locationName,
      "addressRegion": "Delhi",
      "addressCountry": "IN"
    },
    "geo": location.coordinates ? {
      "@type": "GeoCoordinates",
      "latitude": location.coordinates.latitude,
      "longitude": location.coordinates.longitude
    } : undefined,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "10:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "$$",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": serviceName,
            "description": service.description
          }
        }
      ]
    }
  };

  return {
    title,
    description,
    keywords,
    canonicalUrl: `${baseUrl}/service/${locationSlug}/${serviceSlug}`,
    ogType: 'website',
    structuredData
  };
};

// Generate location-specific content sections
export const generateLocationContent = (location: Location, service: Service) => {
  const sections = [
    {
      title: `Why Choose Us for ${service.name} in ${location.name}?`,
      content: `We are the leading provider of ${service.name} services in ${location.name} with over 10 years of experience. Our certified technicians ensure top-quality service for all your needs.`
    },
    {
      title: `Our ${service.name} Services in ${location.name}`,
      content: `We offer comprehensive ${service.name} solutions including installation, maintenance, and repair services across ${location.name} and surrounding areas.`
    },
    {
      title: `Areas We Serve in ${location.name}`,
      content: `We provide ${service.name} services in all major areas of ${location.name} including ${location.localities?.slice(0, 5).join(', ')} and more.`
    }
  ];

  if (location.landmarks?.length) {
    sections.push({
      title: `${service.name} Services Near Popular Landmarks in ${location.name}`,
      content: `Conveniently located near ${location.landmarks.slice(0, 3).join(', ')} and other major landmarks in ${location.name}.`
    });
  }

  return sections;
};

// Generate FAQ schema
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

// Generate review schema
export const generateReviewSchema = (reviews: Array<{
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}>) => {
  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "CCTV Installation Services",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "127"
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewBody": review.reviewBody,
      "datePublished": review.datePublished
    }))
  };
};
