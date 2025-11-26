import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { parseSlug, SERVICES, LOCALITIES, CITIES, createSlug, getServiceContent } from '../../../../../lib/seo-data';
import styles from '../../../../[slug]/page.module.css';
import BookingForm from '../../../../../components/BookingForm';

type Props = {
  params: Promise<{
    city: string;
    locality: string;
    service: string;
  }>;
};

// Helper to find original casing from slug
function findOriginalFromSlug(slug: string, list: string[]): string | undefined {
  return list.find(item => createSlug(item) === slug);
}

// Reusing the data fetching logic (simulated)
async function getPageData(city: string, locality: string, service: string) {
  const serviceLower = service.toLowerCase();
  
  // Get rich content from our new helper
  const richContent = getServiceContent(service);
  
  // Merge default pricing with service specific logic if needed
  const isElectrical = serviceLower.includes('electrical') || serviceLower.includes('wiring') || serviceLower.includes('power') || serviceLower.includes('mcb') || serviceLower.includes('earthing');

  const pricing = isElectrical
    ? [
        { item: 'Wiring (per meter)', price: 'Get Quote', cta: 'Call Us' },
        { item: 'Switch/Socket Installation', price: 'Get Quote', cta: 'Call Us' },
        { item: 'MCB Box Installation', price: 'Get Quote', cta: 'Call Us' },
        { item: 'Inverter Connection', price: 'Get Quote', cta: 'Call Us' },
      ]
    : [
        { item: 'IP Camera Installation', price: 'Get Quote', cta: 'Call Us' },
        { item: 'DVR/NVR Setup', price: 'Get Quote', cta: 'Call Us' },
        { item: 'Cable Laying (per meter)', price: 'Get Quote', cta: 'Call Us' },
        { item: 'Biometric Setup', price: 'Get Quote', cta: 'Call Us' },
      ];

  return {
    title: `${service} in ${locality}, ${city} | Expert Services`,
    metaDescription: `Looking for ${service} in ${locality}, ${city}? ${richContent.description.slice(0, 120)}... Call now for a free quote!`,
    heroHeading: `${service} in`,
    heroSubheading: `Secure your property in ${city} with our top-rated ${serviceLower} solutions. Fast, reliable, and affordable.`,
    features: richContent.benefits, // Use rich benefits
    pricing,
    testimonials: [
      { name: 'Rahul Sharma', location: locality, text: `Excellent ${serviceLower} service! The team was professional and finished the work on time.` },
      { name: 'Priya Singh', location: city, text: `Highly recommend their services. Very reasonable pricing and great quality work.` },
      { name: 'Amit Verma', location: locality, text: `Best service provider in ${locality}. They explained everything clearly and did a neat job.` }
    ],
    faq: [
      ...richContent.faqs, // Use rich FAQs
      {
        question: `Do you provide ${service} in ${locality}?`,
        answer: `Yes, we provide comprehensive ${service} services specifically in ${locality} and surrounding areas of ${city}.`
      },
      {
        question: `What is the cost of ${service} in ${city}?`,
        answer: `The cost varies based on your specific requirements. We offer competitive pricing. Contact us for a free quote.`
      },
      {
        question: `How soon can you start the work in ${locality}?`,
        answer: `We have a local team in ${city} ready to be deployed. In most cases, we can start the work within 24-48 hours of your booking.`
      }
    ]
  };
}

// Generate static params for all possible combinations
export async function generateStaticParams() {
  const params: { city: string; locality: string; service: string }[] = [];
  
  for (const city of CITIES) {
    const citySlug = createSlug(city);
    const localities = LOCALITIES[city] || [];
    
    for (const locality of localities) {
      const localitySlug = createSlug(locality);
      
      for (const service of SERVICES) {
        const serviceSlug = createSlug(service);
        
        params.push({
          city: citySlug,
          locality: localitySlug,
          service: serviceSlug
        });
      }
    }
  }
  
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug, locality: localitySlug, service: serviceSlug } = await params;

  const city = findOriginalFromSlug(citySlug, CITIES);
  
  if (!city) {
      return {
          title: 'City Not Found',
      }
  }

  const locality = findOriginalFromSlug(localitySlug, LOCALITIES[city] || []);
  const service = findOriginalFromSlug(serviceSlug, SERVICES);

  if (!locality || !service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service page could not be found.'
    };
  }

  const data = await getPageData(city, locality, service);

  return {
    title: data.title,
    description: data.metaDescription,
    alternates: {
      canonical: `https://www.camharbor.in/services/${citySlug}/${localitySlug}/${serviceSlug}`,
    },
  };
}

export default async function HierarchicalServicePage({ params }: Props) {
  const { city: citySlug, locality: localitySlug, service: serviceSlug } = await params;

  const city = findOriginalFromSlug(citySlug, CITIES);
  
  if (!city) {
      notFound();
  }

  const locality = findOriginalFromSlug(localitySlug, LOCALITIES[city] || []);
  const service = findOriginalFromSlug(serviceSlug, SERVICES);

  if (!locality || !service) {
    notFound();
  }

  const data = await getPageData(city, locality, service);

  // Get nearby localities (same city, excluding current)
  const nearbyLocalities = (LOCALITIES[city] || [])
    .filter(l => l !== locality)
    .slice(0, 10); // Limit to 10

  // JSON-LD Schemas
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': `${service} in ${locality}, ${city}`,
    'description': data.metaDescription,
    'url': `https://www.camharbor.in/services/${citySlug}/${localitySlug}/${serviceSlug}`,
    'areaServed': {
      '@type': 'City',
      'name': `${locality}, ${city}`
    },
    'priceRange': '₹₹',
    'openingHours': 'Mo-Su 09:00-20:00',
    'telephone': '+91-8766203976',
    'image': 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop'
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': service,
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'CamHarbor'
    },
    'areaServed': {
      '@type': 'Place',
      'name': `${locality}, ${city}`
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Service Catalog',
      'itemListElement': data.pricing.map(p => ({
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': p.item
        },
        'priceSpecification': {
          '@type': 'PriceSpecification',
          'price': '0',
          'priceCurrency': 'INR',
          'description': 'Call for Quote'
        }
      }))
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.8',
      'reviewCount': '1250',
      'bestRating': '5',
      'worstRating': '1'
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://www.camharbor.in'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': city,
        'item': `https://www.camharbor.in/services/${citySlug}`
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': locality,
        'item': `https://www.camharbor.in/services/${citySlug}/${localitySlug}`
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'name': service,
        'item': `https://www.camharbor.in/services/${citySlug}/${localitySlug}/${serviceSlug}`
      }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': data.faq.map(f => ({
      '@type': 'Question',
      'name': f.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': f.answer
      }
    }))
  };

  return (
    <div className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([localBusinessSchema, serviceSchema, breadcrumbSchema, faqSchema]) }}
      />
      
      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop"
            alt="Security Camera Background"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            {data.heroHeading} <span className={styles.highlight}>{locality}</span>, {city}
          </h1>
          <p className={styles.subtitle}>
            {data.heroSubheading}
          </p>
          <button className={styles.ctaButton}>
            Book Service Now
          </button>
        </div>
      </header>

      {/* Breadcrumbs */}
      <nav className={styles.breadcrumbs}>
        <div className={styles.breadcrumbContent}>
          <Link href="/" className={styles.link}>Home</Link> &gt;{' '}
          <Link href={`/services/${citySlug}`} className={styles.link}>{city}</Link> &gt;{' '}
          <span className={styles.activeBreadcrumb}>{locality}</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className={styles.main}>
        
        {/* Left Column: Details */}
        <div className={styles.contentSection}>
          <section>
            <h2 className={styles.sectionTitle}>Why Choose Us for {service}?</h2>
            <div className={styles.text}>
              <p>
                Residents of <strong>{locality}, {city}</strong> trust us for their security needs. 
                We provide top-notch {service.toLowerCase()} with a focus on quality, speed, and reliability. 
                Whether it's a residential complex or a commercial establishment in {locality}, our expert team is ready to assist.
              </p>
            </div>
            
            <div className={styles.featuresGrid}>
              {data.features.map((feature, index) => (
                <div key={index} className={styles.featureCard}>
                  <span className={styles.checkIcon}>
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </span>
                  <span className={styles.featureText}>{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Table */}
          <section className={styles.pricingSection}>
            <h3 className={styles.sectionTitle}>Transparent Pricing</h3>
            <div className={styles.pricingTable}>
              {data.pricing.map((item, index) => (
                <div key={index} className={styles.pricingRow}>
                  <span className={styles.pricingItem}>{item.item}</span>
                  <button className={styles.pricingButton}>
                    {item.cta}
                  </button>
                </div>
              ))}
            </div>
            <p className={styles.pricingNote}>* Prices are indicative and may vary based on site conditions.</p>
          </section>

          {/* Safety Standards */}
          <section className={styles.safetySection}>
            <h3 className={styles.sectionTitle}>Our Safety Standards</h3>
            <div className={styles.safetyGrid}>
              <div className={styles.safetyCard}>
                <div className={styles.safetyIcon}>🛡️</div>
                <h4>ISI Marked</h4>
                <p>We use only ISI marked cables and equipment.</p>
              </div>
              <div className={styles.safetyCard}>
                <div className={styles.safetyIcon}>👨‍🔧</div>
                <h4>Certified Team</h4>
                <p>Our technicians are trained and certified.</p>
              </div>
              <div className={styles.safetyCard}>
                <div className={styles.safetyIcon}>⚡</div>
                <h4>Shock Proof</h4>
                <p>Proper earthing and insulation ensured.</p>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className={styles.testimonialSection}>
            <h3 className={styles.sectionTitle}>What Our Clients Say</h3>
            <div className={styles.testimonialGrid}>
              {data.testimonials.map((t, index) => (
                <div key={index} className={styles.testimonialCard}>
                  <p className={styles.testimonialText}>"{t.text}"</p>
                  <div className={styles.testimonialAuthor}>
                    <span className={styles.authorName}>{t.name}</span>
                    <span className={styles.authorLoc}>{t.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

        {/* How it Works Section */}
        <section className={styles.howItWorksSection}>
          <div className={styles.container} style={{ background: 'transparent', minHeight: 'auto' }}>
            <h2 className={styles.sectionTitle}>How It Works</h2>
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <h3>Book Service</h3>
                <p>Call us or request a quote online.</p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <h3>Confirmation</h3>
                <p>We confirm your slot & technician.</p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <h3>Service Delivery</h3>
                <p>Expert arrives and completes the job.</p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>4</div>
                <h3>Payment</h3>
                <p>Pay after satisfied service.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className={styles.mapSection}>
          <div className={styles.container} style={{ background: 'transparent', minHeight: 'auto' }}>
            <h2 className={styles.sectionTitle}>Serving {locality} & Nearby</h2>
            <div className={styles.mapWrapper}>
              <iframe
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={`https://maps.google.com/maps?q=${encodeURIComponent(locality + ', ' + city)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              ></iframe>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <div className={styles.container} style={{ background: 'transparent', minHeight: 'auto' }}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              {data.faq.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        </div>

        {/* Right Column: Booking Form / CTA */}
        <aside className={styles.sidebar}>
          <BookingForm defaultService={service} />

          {/* Related Services */}
          <div className={styles.relatedServices}>
            <h4 className={styles.relatedTitle}>Related Services in {locality}</h4>
            <ul className={styles.relatedList}>
             {SERVICES.slice(0, 5).map((s, i) => {
                 if (s === service) return null;
                 const slug = `/services/${createSlug(city)}/${createSlug(locality)}/${createSlug(s)}`;
                 return (
                   <li key={i}>
                     <Link href={slug} className={styles.relatedLink}>{s}</Link>
                   </li>
                 );
              })}
            </ul>
          </div>

          {/* Nearby Localities */}
          <div className={styles.relatedServices}>
            <h4 className={styles.relatedTitle}>Serving Nearby Areas</h4>
            <ul className={styles.relatedList}>
              {nearbyLocalities.map((loc, i) => {
                 const slug = `/services/${createSlug(city)}/${createSlug(loc)}/${createSlug(service)}`;
                 return (
                   <li key={i}>
                     <Link href={slug} className={styles.relatedLink}>{service} in {loc}</Link>
                   </li>
                 );
              })}
            </ul>
          </div>
        </aside>

      </main>

      {/* Footer CTA */}
      <footer className={styles.footer}>
        <h2 className={styles.footerTitle}>Ready to secure your property in {locality}?</h2>
        <div className={styles.footerButtons}>
          <button className={styles.ctaButton}>
            Call Now: +91 87662 03976
          </button>
          <button className={styles.outlineButton}>
            WhatsApp Us
          </button>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className={styles.stickyMobileCTA}>
        <a href="tel:+918766203976" className={styles.stickyCallBtn}>
          📞 Call Now
        </a>
        <a href="https://wa.me/918766203976" className={styles.stickyWhatsappBtn}>
          💬 WhatsApp
        </a>
      </div>
    </div>
  );
}
