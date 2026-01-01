import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { CITIES, LOCALITIES, INDUSTRIES, createSlug, getIndustryContent } from '@/lib/seo-data';
import { getImageUrl, getImageAlt } from '@/config/images';
import styles from '../../../../[slug]/page.module.css';

export const dynamic = 'force-static';
export const revalidate = false;

type Props = { params: Promise<{ industry: string; city: string; locality: string }> };

function findOriginalFromSlug(slug: string, list: string[]): string | undefined {
  return list.find(item => createSlug(item) === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry: industrySlug, city: citySlug, locality: localitySlug } = await params;
  const industry = findOriginalFromSlug(industrySlug, INDUSTRIES) || industrySlug;
  const city = findOriginalFromSlug(citySlug, CITIES) || citySlug;
  const locality = findOriginalFromSlug(localitySlug, LOCALITIES[city] || []) || localitySlug;
  const title = `${industry} in ${locality}, ${city}`;
  const description = `Sector-specific CCTV deployment for ${industry} across ${locality}, ${city}. Planning, installation, and secure remote view.`;
  return {
    title,
    description,
    alternates: { canonical: `https://www.camharbor.in/industries/${industrySlug}/${citySlug}/${localitySlug}` },
    openGraph: { title, description, type: 'website', url: `https://www.camharbor.in/industries/${industrySlug}/${citySlug}/${localitySlug}` },
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { industry: industrySlug, city: citySlug, locality: localitySlug } = await params;
  const industry = findOriginalFromSlug(industrySlug, INDUSTRIES) || industrySlug;
  const city = findOriginalFromSlug(citySlug, CITIES) || citySlug;
  const locality = findOriginalFromSlug(localitySlug, LOCALITIES[city] || []) || localitySlug;
  const content = getIndustryContent(industry);

  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.camharbor.in' },
      { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.camharbor.in/industries' },
      { '@type': 'ListItem', position: 3, name: industry, item: `https://www.camharbor.in/industries/${industrySlug}` },
      { '@type': 'ListItem', position: 4, name: city, item: `https://www.camharbor.in/industries/${industrySlug}/${citySlug}` },
      { '@type': 'ListItem', position: 5, name: `${industry} in ${locality}`, item: `https://www.camharbor.in/industries/${industrySlug}/${citySlug}/${localitySlug}` }
    ]
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org', '@type': 'LocalBusiness',
    'name': `CamHarbor - ${industry}`, 'telephone': '+91-8766203976',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'House No. 110, C2 Block, Street No. 3, Mahavir Enclave Part-1, Palam',
      'addressLocality': 'New Delhi',
      'addressRegion': 'Delhi',
      'postalCode': '110045',
      'addressCountry': 'IN'
    },
    'areaServed': { '@type': 'City', 'name': `${locality}, ${city}` },
    'aggregateRating': { '@type': 'AggregateRating', 'ratingValue': '4.8', 'reviewCount': '420' }
  };

  return (
    <div className={styles.container}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, localBusinessSchema]) }} />
      <header className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src={getImageUrl(industry, 'industry', 2070)}
            alt={getImageAlt(industry, 'industry', { city, locality })}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', opacity: 0.15 }}
          />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{industry} in <span className={styles.highlight}>{locality}</span>, {city}</h1>
          <p className={styles.subtitle}>{content.description}</p>
        </div>
      </header>
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <div className={styles.breadcrumbContent}>
          <Link href="/" className={styles.link}>Home</Link> &gt;{' '}
          <Link href="/industries" className={styles.link}>Industries</Link> &gt;{' '}
          <Link href={`/industries/${industrySlug}`} className={styles.link}>{industry}</Link> &gt;{' '}
          <Link href={`/industries/${industrySlug}/${citySlug}`} className={styles.link}>{city}</Link> &gt;{' '}
          <span className={styles.activeBreadcrumb}>{locality}</span>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.contentSection}>
          <section>
            <h2 className={styles.sectionTitle}>Specialized {industry} Security Solutions in {locality}</h2>
            <div className={styles.text} style={{ marginBottom: '2rem' }}>
              <p>
                {industry} in {locality}, {city} require specialized security solutions that understand the unique needs 
                of this industry. CamHarbor provides custom CCTV and security systems designed specifically for 
                {industry.toLowerCase()}. We have experience working with {industry.toLowerCase()} across {city} and 
                understand the security challenges you face.
              </p>
              <p>
                Our security solutions for {industry.toLowerCase()} in {locality} include high-resolution cameras, 
                strategic placement for maximum coverage, remote monitoring capabilities, and secure data storage. 
                We work with you to identify critical areas that need monitoring and design a system that fits your 
                budget and requirements. Our team ensures proper installation, configuration, and training so you can 
                use your security system effectively.
              </p>
              <p>
                Whether you run a small {industry.toLowerCase()} or a large facility in {locality}, we 
                have the right security solution. We offer flexible packages that can grow with your business. Our 
                maintenance services keep your system running smoothly, and our 24/7 support ensures help is available 
                when you need it. Contact us today to discuss your {industry.toLowerCase()} security needs in {locality}.
              </p>
            </div>
          </section>

          <section style={{ marginTop: '4rem' }}>
            <h2 className={styles.sectionTitle}>Key Features for {industry} in {locality}</h2>
            <div className={styles.text} style={{ marginBottom: '2rem' }}>
              <p>
                Our {industry.toLowerCase()} security solutions in {locality} come with features designed to meet the 
                specific needs of your business. We use high-quality cameras, reliable recording systems, and advanced 
                monitoring capabilities to ensure comprehensive coverage and protection. Our team works closely with you to 
                understand your operational requirements and design a system that integrates seamlessly with your business 
                processes.
              </p>
            </div>
            <div className={styles.featuresGrid}>
              {content.features.map((f, i) => (
                <div key={i} className={styles.featureCard}>
                  <span className={styles.checkIcon}>✔️</span>
                  <span className={styles.featureText}>{f}</span>
                </div>
              ))}
            </div>
          </section>
          <section style={{ marginTop: '4rem' }}>
            <h2 className={styles.sectionTitle}>FAQs About {industry} Security in {locality}</h2>
            <div className={styles.text} style={{ marginBottom: '2rem' }}>
              <p>
                Here are answers to common questions about our {industry.toLowerCase()} security solutions in {locality}, 
                {city}. Our team is always available to discuss your specific needs and help you choose the right security 
                system for your {industry.toLowerCase()}.
              </p>
            </div>
            <div className={styles.faqGrid}>
              {content.faqs.map((f, i) => (
                <div key={i} className={styles.faqItem}>
                  <h3>{f.question}</h3>
                  <p>{f.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
