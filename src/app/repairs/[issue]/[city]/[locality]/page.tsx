import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CITIES, LOCALITIES, createSlug } from '@/lib/seo-data';
import { BUSINESS_CONFIG } from '@/config/business';
import { getImageUrl, getImageAlt } from '@/config/images';
import styles from '../../../../[slug]/page.module.css';
export const dynamic = 'force-static';
export const revalidate = false;

type Props = { params: Promise<{ issue: string; city: string; locality: string }> };

function findOriginalFromSlug(slug: string, list: string[]): string | undefined {
  return list.find(item => createSlug(item) === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { issue, city: citySlug, locality: localitySlug } = await params;
  const city = findOriginalFromSlug(citySlug, CITIES) || citySlug;
  const locality = findOriginalFromSlug(localitySlug, LOCALITIES[city] || []) || localitySlug;
  const title = `${issue.replace(/-/g,' ')} Repair in ${locality}, ${city}`;
  const description = `Fast onsite repair for ${issue.replace(/-/g,' ')} in ${locality}, ${city}. Quick diagnosis, DVR/NVR checks, cable fixes, and testing.`;
  return {
    title,
    description,
    alternates: { canonical: `https://www.camharbor.in/repairs/${issue}/${citySlug}/${localitySlug}` },
    openGraph: { title, description, type: 'website', url: `https://www.camharbor.in/repairs/${issue}/${citySlug}/${localitySlug}` },
  };
}

export default async function RepairPage({ params }: Props) {
  const { issue, city: citySlug, locality: localitySlug } = await params;
  const city = findOriginalFromSlug(citySlug, CITIES) || citySlug;
  const locality = findOriginalFromSlug(localitySlug, LOCALITIES[city] || []) || localitySlug;

  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.camharbor.in' },
      { '@type': 'ListItem', position: 2, name: city, item: `https://www.camharbor.in/services/${citySlug}` },
      { '@type': 'ListItem', position: 3, name: `${issue.replace(/-/g,' ')} in ${locality}`, item: `https://www.camharbor.in/repairs/${issue}/${citySlug}/${localitySlug}` }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    'mainEntity': [
      { '@type': 'Question', 'name': `How fast can you fix ${issue.replace(/-/g,' ')}?`, 'acceptedAnswer': { '@type': 'Answer', 'text': 'Same-day service available with 2-hour response in most cases.' } },
      { '@type': 'Question', 'name': 'Do you provide warranty on repairs?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes, we provide warranty depending on the repair type and parts used.' } }
    ]
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org', '@type': 'LocalBusiness',
    'name': 'CamHarbor - CCTV Repair', 'telephone': '+91-8766203976',
    'address': BUSINESS_CONFIG.schemaAddress,
    'areaServed': { '@type': 'City', 'name': `${locality}, ${city}` },
    'aggregateRating': { '@type': 'AggregateRating', 'ratingValue': '4.9', 'reviewCount': '500' }
  };

  const serviceSchema = {
    '@context': 'https://schema.org', '@type': 'Service',
    'name': `${issue.replace(/-/g,' ')} Repair`,
    'provider': { '@type': 'LocalBusiness', 'name': 'CamHarbor', 'address': BUSINESS_CONFIG.schemaAddress },
    'areaServed': { '@type': 'Place', 'name': `${locality}, ${city}` }
  };

  return (
    <div className={styles.container}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, faqSchema, localBusinessSchema, serviceSchema]) }} />
      <header className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src={getImageUrl('cctvRepair', 'hero', 2070)}
            alt={getImageAlt('cctvRepair', 'hero', { city, locality, service: issue.replace(/-/g,' ') })}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', opacity: 0.15 }}
          />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{issue.replace(/-/g,' ')} Repair in <span className={styles.highlight}>{locality}</span>, {city}</h1>
          <p className={styles.subtitle}>Quick diagnosis and repair. DVR/NVR checks, cable fixes, configuration, and testing.</p>
        </div>
      </header>
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <div className={styles.breadcrumbContent}>
          <Link href="/" className={styles.link}>Home</Link> &gt;{' '}
          <Link href={`/services/${citySlug}`} className={styles.link}>{city}</Link> &gt;{' '}
          <span className={styles.activeBreadcrumb}>{issue.replace(/-/g,' ')} in {locality}</span>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.contentSection}>
          <section>
            <h2 className={styles.sectionTitle}>Professional {issue.replace(/-/g,' ')} Repair Service in {locality}</h2>
            <div className={styles.text} style={{ marginBottom: '2rem' }}>
              <p>
                If you are facing issues with {issue.replace(/-/g,' ')} in {locality}, {city}, CamHarbor is here to help. 
                Our expert technicians provide fast and reliable repair services for all CCTV and security system problems. 
                We understand how important it is to have working security systems, so we offer same-day service in most areas.
              </p>
              <p>
                Our team in {city} has years of experience fixing {issue.replace(/-/g,' ')} issues. We carry common spare 
                parts and can diagnose problems quickly. Whether it is a hardware issue, software problem, or configuration 
                error, we have the skills and tools to fix it. We serve homes, offices, shops, and factories across {locality} 
                and nearby areas.
              </p>
              <p>
                When you call us for {issue.replace(/-/g,' ')} repair in {locality}, we send a certified technician to your 
                location. They will check your system, find the problem, and fix it on the spot when possible. We provide 
                warranty on all repairs and use only genuine parts. Our goal is to get your security system working again 
                quickly and reliably.
              </p>
            </div>
          </section>

          <section style={{ marginTop: '4rem' }}>
            <h2 className={styles.sectionTitle}>Other Services We Offer in {locality}</h2>
            <div className={styles.featuresGrid}>
              {["CCTV Repair","DVR/NVR Configuration","Mobile View Setup","Cable Replacement"].map((s, i) => (
                <Link key={i} href={`/services/${citySlug}/${localitySlug}/${createSlug(s)}`} className={styles.featureCard}>
                  <span className={styles.checkIcon}>🛠️</span>
                  <span className={styles.featureText}>{s}</span>
                </Link>
              ))}
            </div>
          </section>
          <section style={{ marginTop: '4rem' }}>
            <h2 className={styles.sectionTitle}>How We Fix {issue.replace(/-/g,' ')} in {locality}</h2>
            <div className={styles.text} style={{ marginBottom: '2rem' }}>
              <p>
                Our repair process is simple and efficient. When you contact us for {issue.replace(/-/g,' ')} repair in 
                {locality}, we follow a proven four-step method to ensure your system is fixed correctly and quickly.
              </p>
            </div>
            <div className={styles.stepsContainer}>
              {[
                { n: 1, t: 'Diagnosis', d: 'Check camera feed, cables, power supply, and recorder logs.' },
                { n: 2, t: 'Rectification', d: 'Replace faulty connectors, crimp cables, clean lenses, update firmware.' },
                { n: 3, t: 'Configuration', d: 'Reset ports, optimize recording schedule, setup remote view securely.' },
                { n: 4, t: 'Testing', d: 'Run full system test and handover with training.' },
              ].map((s, i) => (
                <div key={i} className={styles.stepCard}>
                  <div className={styles.stepNumber}>{s.n}</div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>{s.t}</h3>
                    <p className={styles.stepDescription}>{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginTop: '4rem' }}>
            <h2 className={styles.sectionTitle}>Why Choose Professional Repair in {locality}</h2>
            <div className={styles.text} style={{ marginBottom: '2rem' }}>
              <p>
                Choosing professional repair service for {issue.replace(/-/g,' ')} in {locality} offers several advantages. 
                Our certified technicians have the right tools and knowledge to diagnose problems accurately the first time. 
                This saves you time and money compared to trial-and-error fixes. We also provide warranty on our work, giving 
                you peace of mind that the repair will last.
              </p>
              <p>
                Professional repair ensures your security system is restored to optimal performance. We test all components 
                after repair to make sure everything works together properly. Our team also provides training on how to use 
                your system effectively and prevent future issues. With our maintenance support, you can keep your security 
                system running smoothly for years to come.
              </p>
            </div>
          </section>

          <section style={{ marginTop: '4rem' }}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions About {issue.replace(/-/g,' ')} in {locality}</h2>
            <div className={styles.text} style={{ marginBottom: '2rem' }}>
              <p>
                Here are answers to common questions about our {issue.replace(/-/g,' ')} repair service in {locality}, {city}. 
                If you have more questions, feel free to call us anytime. We are here to help you understand our services 
                and get your security system working again.
              </p>
            </div>
            <div className={styles.faqGrid}>
              {[
                { q: 'Do you provide spare parts?', a: 'Yes, we carry common spares like BNCs, SMPS, HDDs, and tested cables.' },
                { q: 'How fast can you reach?', a: 'Usually within 2 hours in most areas; same-day service available.' },
                { q: 'Is there a repair warranty?', a: 'Yes, warranty is provided based on the repair type and parts used.' },
              ].map((f, i) => (
                <div key={i} className={styles.faqItem}>
                  <h3>{f.q}</h3>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
