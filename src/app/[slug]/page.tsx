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
  getServiceCategory,
} from "../../lib/content-generator";
import { generateLegacySlugRoutes } from "../../lib/route-generator";
import styles from "./page.module.css";

export const dynamic = 'force-static';
export const revalidate = false;

export function generateStaticParams() {
  return generateLegacySlugRoutes();
}


type Props = {
  params: Promise<{
    slug: string;
  }>;
};

type FAQItem = { question: string; answer: string };
type StepItem = { number: number; title: string; description: string };
type SectionItem = { title: string; content: string; points?: string[]; steps?: StepItem[] };

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
      ? `${data.brandName} ${service} in ${locality}, ${city}`
      : data.pattern === 'repair'
      ? `${service} in ${locality}, ${city}`
      : `${service} in ${locality}, ${city}`;

    const description = data.pattern === 'brand' && data.brandName
      ? `Looking for authorized ${data.brandName} ${service.toLowerCase()} in ${locality}? We offer genuine products, expert installation & full warranty. Best prices in ${city}. Call +91-87662-03976`
      : data.pattern === 'repair'
      ? `Need fast ${service.toLowerCase()} in ${locality}? We offer 24/7 emergency repair, 2-hour response time & same-day service. Expert technicians. Call +91-87662-03976 now!`
      : `Looking for the best ${service.toLowerCase()} in ${locality}, ${city}? We offer top-rated installation, 500+ happy customers, same-day service & 1-year warranty. Free quote. Call +91-87662-03976`;

    return {
      title,
      description,
      keywords: `${service}, ${locality}, ${city}, Best ${service} in ${locality}, ${service} near me, ${service.toLowerCase()} price, ${data.brandName || ''} dealer ${locality}, professional ${service.toLowerCase()}`,
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
    const schemas: Array<Record<string, unknown>> = [
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
        mainEntity: (data.faq as FAQItem[]).map((f) => ({
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
        step: (data.sections[1].steps as StepItem[]).map((step) => ({
          "@type": "HowToStep",
          position: step.number,
          name: step.title,
          text: step.description,
        })),
      });
    }

    const category = getServiceCategory(service);
    const related = SERVICES.filter(s => getServiceCategory(s) === category).slice(0, 12);

    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.camharbor.in/" },
        { "@type": "ListItem", position: 2, name: city, item: `https://www.camharbor.in/services/${citySlug}` },
        { "@type": "ListItem", position: 3, name: locality, item: `https://www.camharbor.in/${slug}` }
      ]
    });

    return (
      <div className={styles.container}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
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
              <a href="tel:+918766203976" aria-label={`Call for ${service} in ${locality}`} className={styles.ctaButton}>Call: +91-87662-03976</a>
              <a href="https://wa.me/918766203976" aria-label={`WhatsApp for ${service} in ${locality}`} className={styles.ctaButton} style={{ background: '#10b981' }}>WhatsApp Us</a>
            </div>
          </div>
        </header>
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <div className={styles.breadcrumbContent}>
            <Link href="/" className={styles.link}>Home</Link> &gt;{" "}
            <Link href={`/services/${citySlug}`} className={styles.link}>{city}</Link> &gt;{" "}
            <span className={styles.activeBreadcrumb}>{locality}</span>
          </div>
        </nav>
        <main className={styles.main}>
          <div className={styles.contentSection}>
            <article style={{ marginBottom: '4rem' }}>
              <h2 className={styles.sectionTitle}>Complete Guide to {service} in {locality}, {city}</h2>
              <div className={styles.text}>
                <p>Looking for professional <strong>{service.toLowerCase()}</strong> in <strong>{locality}</strong>?</p>
                <p>We provide {service.toLowerCase()} across {locality}, {city} with same-day availability and strong warranty support.</p>
                <p>See process, pricing, benefits, nearby coverage, and FAQs tailored for {locality}.</p>
              </div>
              <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <a href="tel:+918766203976" aria-label={`Get free consultation for ${service} in ${locality}`} className={styles.ctaButton}>Get Free Consultation →</a>
              </div>
            </article>
            {(data.sections as SectionItem[]).map((section, idx: number) => (
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
                    {(section.steps as StepItem[]).map((step, i: number) => (
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
              </section>
            ))}
            <section style={{ marginBottom: '4rem' }}>
              <h2 className={styles.sectionTitle}>Transparent Pricing in {locality}</h2>
              <div className={styles.pricingSection}>
                <div className={styles.pricingTable}>
                  {category === 'cctv' && (
                    <>
                      <div className={styles.pricingRow}><span className={styles.pricingItem}>2 Camera Setup</span><button className={styles.pricingButton}>Get Price</button></div>
                      <div className={styles.pricingRow}><span className={styles.pricingItem}>4 Camera Setup</span><button className={styles.pricingButton}>Get Price</button></div>
                      <div className={styles.pricingRow}><span className={styles.pricingItem}>8 Camera Setup</span><button className={styles.pricingButton}>Get Price</button></div>
                      <div className={styles.pricingRow}><span className={styles.pricingItem}>DVR/NVR Configuration</span><button className={styles.pricingButton}>Get Price</button></div>
                    </>
                  )}
                  {category === 'lock' && (
                    <>
                      <div className={styles.pricingRow}><span className={styles.pricingItem}>Fingerprint Lock Installation</span><button className={styles.pricingButton}>Get Price</button></div>
                      <div className={styles.pricingRow}><span className={styles.pricingItem}>Smart WiFi Lock Setup</span><button className={styles.pricingButton}>Get Price</button></div>
                      <div className={styles.pricingRow}><span className={styles.pricingItem}>Access Control with EM Lock</span><button className={styles.pricingButton}>Get Price</button></div>
                    </>
                  )}
                  {category === 'dvr' && (
                    <>
                      <div className={styles.pricingRow}><span className={styles.pricingItem}>4 Channel Recorder Setup</span><button className={styles.pricingButton}>Get Price</button></div>
                      <div className={styles.pricingRow}><span className={styles.pricingItem}>8/16 Channel NVR Configuration</span><button className={styles.pricingButton}>Get Price</button></div>
                    </>
                  )}
                </div>
                <div className={styles.pricingNote}>Pricing varies by site and brand. Get an exact quote.</div>
              </div>
            </section>
            <section style={{ marginBottom: '4rem' }}>
              <h2 className={styles.sectionTitle}>Safety Standards We Follow</h2>
              <div className={styles.safetyGrid}>
                <div className={styles.safetyCard}><div className={styles.safetyIcon}>🛡️</div><h4>ISI Marked Cables</h4><p>Certified materials for reliability.</p></div>
                <div className={styles.safetyCard}><div className={styles.safetyIcon}>⚡</div><h4>Proper Earthing</h4><p>Protected from surges.</p></div>
                <div className={styles.safetyCard}><div className={styles.safetyIcon}>🔧</div><h4>Neat Wiring</h4><p>Clean installation practices.</p></div>
                <div className={styles.safetyCard}><div className={styles.safetyIcon}>🔒</div><h4>Secure Network</h4><p>Best practices for remote access.</p></div>
              </div>
            </section>
            <section className={styles.faqSection}>
              <h2 className={styles.sectionTitle}>FAQs About {service} in {locality}</h2>
              <div className={styles.faqGrid}>
                {(data.faq as FAQItem[]).map((faq, index: number) => (
                  <div key={index} className={styles.faqItem}>
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
            <section style={{ textAlign: 'center', marginTop: '5rem', padding: '3rem', background: 'rgba(30, 41, 59, 0.5)', borderRadius: '1rem' }}>
              <h2 className={styles.sectionTitle}>Ready to Secure Your Property in {locality}?</h2>
              <p className={styles.text} style={{ maxWidth: '700px', margin: '0 auto 2rem' }}>Contact us for a free consultation and quote for {service.toLowerCase()} in {locality}.</p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a href="tel:+918766203976" aria-label={`Call now for ${service} in ${locality}`} className={styles.ctaButton}>Call Now: +91-87662-03976</a>
              <a href="https://wa.me/918766203976" aria-label={`WhatsApp now for ${service} in ${locality}`} className={styles.ctaButton} style={{ background: '#10b981' }}>WhatsApp Us</a>
            </div>
            </section>
          </div>
          <aside className={styles.sidebar}>
            <div className={styles.bookingCard}>
              <div className={styles.cardTitle}>Book {service} in {locality}</div>
              <form>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Name</label>
                  <input className={styles.input} type="text" placeholder="Your name" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Phone</label>
                  <input className={styles.input} type="tel" placeholder="+91" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Service</label>
                  <select className={styles.select} defaultValue={service}>
                    {[service, ...related.filter(s => s !== service)].slice(0, 6).map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <button className={styles.submitButton} type="button">Request Callback</button>
                <div className={styles.secureText}>No spam. Secure form.</div>
              </form>
            </div>
            <div className={styles.relatedServices}>
              <div className={styles.relatedTitle}>Related Services</div>
              <ul className={styles.relatedList}>
                {related.map((s) => (
                  <li key={s}>
                    <Link className={styles.relatedLink} href={`/${createSlug(s)}-in-${localitySlug}-${citySlug}`}>{s} in {locality}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </main>
        <div className={styles.stickySpacer} aria-hidden="true"></div>
        <div className={styles.stickyMobileCTA}>
          <a href="tel:+918766203976" aria-label={`Call ${service} in ${locality}`} className={styles.stickyCallBtn}>📞 Call Now</a>
          <a href="https://wa.me/918766203976" aria-label={`WhatsApp ${service} in ${locality}`} className={styles.stickyWhatsappBtn}>💬 WhatsApp</a>
        </div>
      </div>
    );
  }

  const flatParsed = parseSlug(slug);
  if (!flatParsed) notFound();

  const { city, locality, service } = flatParsed;
  permanentRedirect(`/services/${createSlug(city)}/${createSlug(locality)}/${createSlug(service)}`);
}
