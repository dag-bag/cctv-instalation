import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { permanentRedirect, notFound } from "next/navigation";
import Image from "next/image";
import {
  parseSlug,
  parseQuerySlug,
  createSlug,
  getServiceContent,
  SERVICES,
  LOCALITIES,
} from "../../lib/seo-data";
import {
  detectPattern,
  generateInstallationContent,
  generateRepairContent,
  generateBrandContent,
} from "../../lib/content-generator";
import styles from "./page.module.css";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

async function getPageData(service: string, locality: string, city: string, slug: string) {
  const pattern = detectPattern(slug);
  const richContent = getServiceContent(service);
  
  let brandName = '';
  if (pattern === 'brand') {
    const brands = ['Hikvision', 'CP Plus', 'Dahua', 'Godrej', 'Yale', 'Samsung', 'Honeywell', 'Bosch', 'Panasonic', 'Sony'];
    brandName = brands.find(b => slug.toLowerCase().startsWith(b.toLowerCase())) || '';
  }
  
  let patternContent;
  if (pattern === 'installation') {
    patternContent = generateInstallationContent(service, locality, city);
  } else if (pattern === 'repair') {
    patternContent = generateRepairContent(service, locality, city);
  } else if (pattern === 'brand' && brandName) {
    patternContent = generateBrandContent(service, locality, city, brandName);
  } else {
    patternContent = generateInstallationContent(service, locality, city);
  }

  const nearbyLocalities = (LOCALITIES[city] || []).filter((l) => l !== locality).slice(0, 15);

  return {
    ...patternContent,
    pattern,
    brandName,
    richContent,
    nearbyLocalities,
    faq: [...richContent.faqs, ...(patternContent.faqAdditions || [])],
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  const queryParsed = parseQuerySlug(slug);
  if (queryParsed) {
    const { service, locality, city } = queryParsed;
    const data = await getPageData(service, locality, city, slug);
    const serviceImage = "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop";

    const title = data.pattern === 'brand' && data.brandName
      ? `${data.brandName} ${service} in ${locality}, ${city} | Authorized Partner`
      : data.pattern === 'repair'
      ? `${service} in ${locality}, ${city} | 24/7 Emergency Service`
      : `${service} in ${locality}, ${city} | Professional Installation`;

    const description = data.pattern === 'brand' && data.brandName
      ? `Authorized ${data.brandName} ${service.toLowerCase()} in ${locality}. Genuine products, expert installation, full warranty. Call +91-87662-03976`
      : data.pattern === 'repair'
      ? `Fast ${service.toLowerCase()} in ${locality}. 2-hour response time, same-day repair. Emergency service available 24/7. Call +91-87662-03976`
      : `Professional ${service.toLowerCase()} in ${locality}, ${city}. 500+ installations, same-day service, 1-year warranty. Free quote. Call +91-87662-03976`;

    return {
      title,
      description,
      keywords: `${service}, ${locality}, ${city}, ${service.toLowerCase()}, security camera, CCTV installation, ${data.brandName || ''}`.trim(),
      alternates: { canonical: `https://www.camharbor.in/${slug}` },
      openGraph: {
        type: "website",
        locale: "en_IN",
        url: `https://www.camharbor.in/${slug}`,
        title,
        description,
        siteName: "CamHarbor",
        images: [{ url: serviceImage, width: 1200, height: 630, alt: `${service} in ${locality}, ${city}` }],
      },
      twitter: { card: "summary_large_image", title, description, images: [serviceImage] },
      robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
      },
    };
  }

  const flatParsed = parseSlug(slug);
  if (!flatParsed) return { title: 'Page Not Found' };

  const { city, locality, service } = flatParsed;
  return {
    title: `Redirecting to ${service} in ${locality}...`,
    alternates: { canonical: `/services/${createSlug(city)}/${createSlug(locality)}/${createSlug(service)}` },
  };
}

export default async function SlugPage({ params }: Props) {
  const { slug } = await params;
  
  const queryParsed = parseQuerySlug(slug);
  if (queryParsed) {
    const { service, locality, city } = queryParsed;
    const data = await getPageData(service, locality, city, slug);
    const citySlug = createSlug(city);
    const localitySlug = createSlug(locality);
    const serviceSlug = createSlug(service);

    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: `${service} in ${locality}, ${city}`,
        description: data.heroSubtitle,
        url: `https://www.camharbor.in/${slug}`,
        areaServed: { "@type": "City", name: `${locality}, ${city}` },
        priceRange: "₹₹",
        openingHours: "Mo-Su 09:00-20:00",
        telephone: "+91-8766203976",
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "527", bestRating: "5", worstRating: "1" },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.faq.map((f: any) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ];

    if (data.pattern === 'installation' && data.sections[1]?.steps) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: `How to Get ${service} in ${locality}`,
        description: data.sections[1].content,
        step: data.sections[1].steps.map((step: any) => ({
          "@type": "HowToStep",
          position: step.number,
          name: step.title,
          text: step.description,
        })),
      } as any);
    }

    return (
      <div className={styles.container}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />

        {/* Hero Section */}
        <header className={styles.hero}>
          <div className={styles.heroBackground}>
            <Image
              src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop"
              alt={`${service} in ${locality}, ${city}`}
              fill
              priority
              quality={85}
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>{data.heroTitle}</h1>
            <p className={styles.subtitle}>{data.heroSubtitle}</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href="tel:+918766203976" className={styles.ctaButton}>Call: +91-87662-03976</a>
              <a href="https://wa.me/918766203976" className={styles.ctaButton} style={{ background: '#10b981' }}>WhatsApp Us</a>
            </div>
          </div>
        </header>

        {/* Breadcrumbs */}
        <nav className={styles.breadcrumbs}>
          <div className={styles.breadcrumbContent}>
            <Link href="/" className={styles.link}>Home</Link> &gt;{" "}
            <Link href={`/services/${citySlug}`} className={styles.link}>{city}</Link> &gt;{" "}
            <span className={styles.activeBreadcrumb}>{locality}</span>
          </div>
        </nav>

        {/* Main Content - Full Width for SEO */}
        <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '4rem 1.5rem' }}>
          
          {/* Introduction - SEO Rich Content */}
          <article style={{ marginBottom: '4rem' }}>
            <h2 className={styles.sectionTitle}>Complete Guide to {service} in {locality}, {city}</h2>
            <div className={styles.text}>
              <p>
                Looking for professional <strong>{service.toLowerCase()}</strong> in <strong>{locality}</strong>? 
                You've come to the right place. We are the leading provider of {service.toLowerCase()} services in {locality}, {city}, 
                with over 500+ successful installations and a 4.9-star rating from satisfied customers across the region.
              </p>
              <p>
                Our team of certified technicians specializes in providing comprehensive security solutions tailored to the unique needs 
                of {locality} residents and businesses. Whether you're looking to secure your home, office, retail store, or industrial facility, 
                we have the expertise and experience to deliver a solution that meets your specific requirements and budget.
              </p>
              <p>
                In this comprehensive guide, we'll cover everything you need to know about {service.toLowerCase()} in {locality}, including 
                the installation process, pricing, benefits, common issues, and frequently asked questions. By the end of this guide, you'll 
                have all the information you need to make an informed decision about your security needs.
              </p>
            </div>
            <div style={{ textAlign: 'center', margin: '2rem 0' }}>
              <a href="tel:+918766203976" className={styles.ctaButton}>Get Free Consultation →</a>
            </div>
          </article>

          {/* Dynamic Sections */}
          {data.sections.map((section: any, idx: number) => (
            <section key={idx} style={{ marginBottom: '4rem' }}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              <div className={styles.text}>
                <p>{section.content}</p>
              </div>

              {section.points && (
                <div className={styles.featuresGrid}>
                  {section.points.map((point: string, i: number) => (
                    <div key={i} className={styles.featureCard}>
                      <span className={styles.checkIcon}>
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                      <span className={styles.featureText}>{point}</span>
                    </div>
                  ))}
                </div>
              )}

              {section.steps && (
                <div className={styles.stepsContainer}>
                  {section.steps.map((step: any, i: number) => (
                    <div key={i} className={styles.stepCard}>
                      <div className={styles.stepNumber}>{step.number}</div>
                      <div className={styles.stepContent}>
                        <h3 className={styles.stepTitle}>{step.title}</h3>
                        <p className={styles.stepDescription}>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {idx === 1 && (
                <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                  <a href="tel:+918766203976" className={styles.ctaButton}>Book Your Installation Today →</a>
                </div>
              )}
            </section>
          ))}

          {/* Why Choose Us - Extended SEO Content */}
          <section style={{ marginBottom: '4rem' }}>
            <h2 className={styles.sectionTitle}>Why {locality} Residents Trust Us for {service}</h2>
            <div className={styles.text}>
              <p>
                When it comes to {service.toLowerCase()} in {locality}, experience and expertise matter. We've been serving the {city} region 
                for over a decade, building a reputation for quality workmanship, reliable service, and customer satisfaction. Here's what sets us apart:
              </p>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#f8fafc', marginTop: '2rem', marginBottom: '1rem' }}>
                Local Expertise in {locality}
              </h3>
              <p>
                We understand the unique security challenges faced by residents and businesses in {locality}. Our team has completed hundreds of 
                installations in this area, giving us intimate knowledge of local building codes, common security concerns, and the best solutions 
                for different property types in {locality}.
              </p>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#f8fafc', marginTop: '2rem', marginBottom: '1rem' }}>
                Certified and Experienced Technicians
              </h3>
              <p>
                All our technicians are fully certified and have undergone rigorous training in the latest security technologies. With an average 
                of 10+ years of experience, they can handle any installation challenge, from simple residential setups to complex commercial systems.
              </p>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#f8fafc', marginTop: '2rem', marginBottom: '1rem' }}>
                Quality Equipment and Materials
              </h3>
              <p>
                We only use ISI-marked cables, genuine branded equipment, and high-quality components that meet international standards. This ensures 
                your system operates reliably for years to come and minimizes the need for repairs or replacements.
              </p>
            </div>
            <div style={{ textAlign: 'center', margin: '2rem 0' }}>
              <a href="https://wa.me/918766203976" className={styles.ctaButton}>Chat on WhatsApp →</a>
            </div>
          </section>

          {/* Local Context */}
          {data.localContext && (
            <section className={styles.localSection} style={{ marginBottom: '4rem' }}>
              <h3 className={styles.sectionTitle}>{data.localContext.title}</h3>
              <div className={styles.text}>
                <p>{data.localContext.content}</p>
                <p>
                  Our local presence in {locality} means faster response times, better understanding of your needs, and ongoing support 
                  whenever you need it. We're not just a service provider – we're your neighbors, committed to keeping our community safe and secure.
                </p>
              </div>
            </section>
          )}

          {/* Benefits Section - More SEO Content */}
          <section style={{ marginBottom: '4rem' }}>
            <h2 className={styles.sectionTitle}>Key Benefits of Professional {service} in {locality}</h2>
            <div className={styles.text}>
              <p>
                Investing in professional {service.toLowerCase()} offers numerous benefits beyond just security. Here's what you can expect:
              </p>
            </div>
            <div className={styles.featuresGrid}>
              {data.richContent.benefits.map((benefit: string, i: number) => (
                <div key={i} className={styles.featureCard}>
                  <span className={styles.checkIcon}>
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className={styles.featureText}>{benefit}</span>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', margin: '2rem 0' }}>
              <a href="tel:+918766203976" className={styles.ctaButton}>Request Free Quote →</a>
            </div>
          </section>

          {/* Nearby Areas - Internal Linking for SEO */}
          <section style={{ marginBottom: '4rem' }}>
            <h2 className={styles.sectionTitle}>We Also Serve Areas Near {locality}</h2>
            <div className={styles.text}>
              <p>
                In addition to {locality}, we provide {service.toLowerCase()} services throughout {city} and surrounding areas. 
                Our service coverage includes:
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
              {data.nearbyLocalities.map((loc: string, i: number) => (
                <Link
                  key={i}
                  href={`/${createSlug(loc)}-${serviceSlug}`}
                  className={styles.relatedLink}
                  style={{
                    display: 'block',
                    padding: '1rem',
                    background: 'rgba(30, 41, 59, 0.5)',
                    borderRadius: '0.75rem',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    transition: 'all 0.2s',
                  }}
                >
                  {service} in {loc}
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions About {service} in {locality}</h2>
            <div className={styles.faqGrid}>
              {data.faq.map((faq: any, index: number) => (
                <div key={index} className={styles.faqItem}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section style={{ textAlign: 'center', marginTop: '5rem', padding: '3rem', background: 'rgba(30, 41, 59, 0.5)', borderRadius: '1rem' }}>
            <h2 className={styles.sectionTitle}>Ready to Secure Your Property in {locality}?</h2>
            <p className={styles.text} style={{ maxWidth: '700px', margin: '0 auto 2rem' }}>
              Don't wait until it's too late. Contact us today for a free consultation and quote for {service.toLowerCase()} in {locality}. 
              Our team is ready to help you choose the perfect security solution for your needs.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href="tel:+918766203976" className={styles.ctaButton}>Call Now: +91-87662-03976</a>
              <a href="https://wa.me/918766203976" className={styles.ctaButton} style={{ background: '#10b981' }}>WhatsApp Us</a>
            </div>
          </section>
        </main>

        {/* Mobile Sticky CTA */}
        <div className={styles.stickyMobileCTA}>
          <a href="tel:+918766203976" className={styles.stickyCallBtn}>📞 Call Now</a>
          <a href="https://wa.me/918766203976" className={styles.stickyWhatsappBtn}>💬 WhatsApp</a>
        </div>
      </div>
    );
  }

  const flatParsed = parseSlug(slug);
  if (!flatParsed) notFound();

  const { city, locality, service } = flatParsed;
  permanentRedirect(`/services/${createSlug(city)}/${createSlug(locality)}/${createSlug(service)}`);
}
