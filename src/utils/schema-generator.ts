// JSON-LD Schema Generator for SEO
import { BUSINESS_CONFIG } from "@/config/business";

export interface SchemaConfig {
  businessName: string;
  serviceName: string;
  location: string;
  description: string;
  url: string;
  price?: string;
  areaServed?: {
    name: string;
    description?: string;
    coordinates?: {
      latitude: string;
      longitude: string;
    };
  };
  serviceType?: string[];
  serviceArea?: {
    name: string;
    type: 'City' | 'State' | 'Country';
  }[];
  hasOfferCatalog?: {
    name: string;
    description: string;
    price: string;
  }[];
}

// Local Business Schema
export const generateLocalBusinessSchema = (config: SchemaConfig) => {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": config.url,
    "name": config.businessName,
    "description": config.description,
    "url": config.url,
    "telephone": BUSINESS_CONFIG.phone,
    "email": BUSINESS_CONFIG.email,
    "priceRange": "$$",
    "image": "https://www.cctvinstallationdelhi.in/images/logo.png",
    "sameAs": [
      BUSINESS_CONFIG.social?.facebook,
      BUSINESS_CONFIG.social?.twitter,
      BUSINESS_CONFIG.social?.instagram,
      BUSINESS_CONFIG.social?.linkedin
    ].filter(Boolean),
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_CONFIG.address,
      "addressLocality": config.location,
      "addressRegion": "Delhi",
      "postalCode": "110001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.7041",
      "longitude": "77.1025"
    },
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
    "areaServed": {
      "@type": "City",
      "name": config.areaServed?.name || "Delhi",
      "description": config.areaServed?.description || `Professional ${config.serviceName} services in ${config.location}`,
      ...(config.areaServed?.coordinates && {
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": config.areaServed.coordinates.latitude,
          "longitude": config.areaServed.coordinates.longitude
        }
      })
    },
    "serviceArea": (config.serviceArea || []).map(area => ({
      "@type": "AdministrativeArea",
      "name": area.name,
      "containedInPlace": {
        "@type": "Country",
        "name": "India"
      }
    })),
    "hasOfferCatalog": config.hasOfferCatalog ? {
      "@type": "OfferCatalog",
      "name": "Our Services",
      "itemListElement": config.hasOfferCatalog.map((offer, index) => ({
        "@type": "OfferCatalog",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": offer.name,
              "description": offer.description
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": offer.price,
              "priceCurrency": "INR"
            }
          }
        ]
      }))
    } : undefined
  };
};

// Service Schema
export const generateServiceSchema = (config: SchemaConfig) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": config.serviceName,
    "provider": {
      "@type": "LocalBusiness",
      "name": config.businessName,
      "telephone": BUSINESS_CONFIG.phone,
      "email": BUSINESS_CONFIG.email
    },
    "areaServed": {
      "@type": "City",
      "name": config.location,
      "containedIn": "Delhi, India"
    },
    "description": config.description,
    "offers": {
      "@type": "Offer",
      "price": config.price || "Contact for pricing",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    }
  };
};

// Breadcrumb Schema
export const generateBreadcrumbSchema = (breadcrumbs: { name: string; url: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

// Organization Schema
export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": BUSINESS_CONFIG.name,
    "url": "https://www.yourbusiness.com",
    "logo": "https://www.yourbusiness.com/logo.png",
    "description": BUSINESS_CONFIG.defaultDescription,
    "telephone": BUSINESS_CONFIG.phone,
    "email": BUSINESS_CONFIG.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_CONFIG.address,
      "addressLocality": "Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110001",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": BUSINESS_CONFIG.phone,
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Hindi"],
      "areaServed": "Delhi"
    },
    "sameAs": Object.values(BUSINESS_CONFIG.social).filter(link => link)
  };
};

// FAQ Schema
export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => {
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

// Review Schema
export const generateReviewSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": BUSINESS_CONFIG.name,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "250",
      "bestRating": "5",
      "worstRating": "1"
    }
  };
};

// Article Schema
export const generateArticleSchema = (config: { title: string; description: string; url: string; datePublished: string }) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": config.title,
    "description": config.description,
    "author": {
      "@type": "Organization",
      "name": BUSINESS_CONFIG.name
    },
    "publisher": {
      "@type": "Organization",
      "name": BUSINESS_CONFIG.name,
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.yourbusiness.com/logo.png"
      }
    },
    "datePublished": config.datePublished,
    "dateModified": config.datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": config.url
    }
  };
};

// Video Schema
export const generateVideoSchema = (config: { name: string; description: string; thumbnailUrl: string; uploadDate: string; duration: string }) => {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": config.name,
    "description": config.description,
    "thumbnailUrl": config.thumbnailUrl,
    "uploadDate": config.uploadDate,
    "duration": config.duration,
    "contentUrl": "https://www.yourbusiness.com/videos"
  };
};

// Aggregate all schemas
export const generateAllSchemas = (config: SchemaConfig, additionalData?: any) => {
  const schemas = [
    generateLocalBusinessSchema(config),
    generateServiceSchema(config),
    generateOrganizationSchema(),
  ];

  if (additionalData?.breadcrumbs) {
    schemas.push(generateBreadcrumbSchema(additionalData.breadcrumbs));
  }

  if (additionalData?.faqs) {
    schemas.push(generateFAQSchema(additionalData.faqs));
  }

  schemas.push(generateReviewSchema());

  return schemas;
};
