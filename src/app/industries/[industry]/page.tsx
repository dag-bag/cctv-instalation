import React from 'react';
import Link from '@/components/Link';
import { Metadata } from 'next';
import { CITIES, INDUSTRIES, createSlug, getIndustryContent } from '@/lib/seo-data';
import styles from '../../[slug]/page.module.css';

export const dynamic = 'force-static';
export const revalidate = false;

type Props = { params: Promise<{ industry: string }> };

function findOriginalFromSlug(slug: string, list: string[]): string | undefined {
  return list.find(item => createSlug(item) === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry: industrySlug } = await params;
  const industry = findOriginalFromSlug(industrySlug, INDUSTRIES) || industrySlug;
  const content = getIndustryContent(industry);
  
  const title = content ? `${industry} CCTV Solutions | Cities in Delhi NCR` : `${industry} CCTV Solutions | Cities in Delhi NCR`;
  const description = content ? content.description.slice(0, 160) + '...' : `Browse cities where we provide ${industry} surveillance solutions.`;
  
  return { title, description, alternates: { canonical: `https://www.camharbor.in/industries/${industrySlug}` } };
}

export default async function IndustryCityListPage({ params }: Props) {
  const { industry: industrySlug } = await params;
  const industry = findOriginalFromSlug(industrySlug, INDUSTRIES) || industrySlug;
  const content = getIndustryContent(industry);

  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.camharbor.in' },
      { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.camharbor.in/industries' },
      { '@type': 'ListItem', position: 3, name: industry, item: `https://www.camharbor.in/industries/${industrySlug}` }
    ]
  };

  return (
    <div className={styles.container}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{industry} Security</h1>
          <p className={styles.subtitle}>Select a city to view supported localities.</p>
        </div>
      </header>
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <div className={styles.breadcrumbContent}>
          <Link href="/" className={styles.link}>Home</Link> &gt;{' '}
          <Link href="/industries" className={styles.link}>Industries</Link> &gt;{' '}
          <span className={styles.activeBreadcrumb}>{industry}</span>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.contentSection}>
          {content && (
            <section className={styles.text} style={{ marginBottom: '3rem' }}>
              <div style={{ whiteSpace: 'pre-line' }}>{content.description}</div>
              
              {content.features && content.features.length > 0 && (
                <div style={{ marginTop: '2rem' }}>
                  <h2 className={styles.subTitle}>Key Features for {industry} Surveillance</h2>
                  <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginTop: '1rem' }}>
                    {content.features.map((feature, idx) => (
                      <li key={idx} style={{ marginBottom: '0.5rem' }}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div style={{ marginTop: '3rem' }}>
                <h2 className={styles.subTitle}>Why Video Surveillance is Critical for {industry}</h2>
                <p style={{ marginBottom: '1rem' }}>
                  Security challenges in the {industry} sector are unique and demanding. Unlike standard residential setups, {industry} facilities require robust coverage, high system uptime, and often, specific intelligent analytics to function effectively.
                  At CamHarbor, we understand that protecting your assets, staff, and visitors is not just about recording video—it is about operational continuity.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  A well-designed CCTV system acts as a powerful deterrent against theft, vandalism, and unauthorized access. Beyond security, it improves operational efficiency by providing 24/7 visibility into daily workflows, ensuring compliance with safety regulations, and providing irrefutable evidence for liability claims.
                  We tailor our {industry} solutions to address your specific pain points, whether it is inventory shrinkage, perimeter security, or crowd management.
                </p>

                <h2 className={styles.subTitle} style={{ marginTop: '2rem' }}>Our Installation Process for {industry}</h2>
                <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
                  <div>
                    <strong>1. Comprehensive Site Assessment:</strong>
                    <p>We begin with a thorough walkthrough of your premises to identify high-risk zones, potential blind spots, and lighting conditions specific to {industry} environments.</p>
                  </div>
                  <div>
                    <strong>2. Custom System Design:</strong>
                    <p>We do not use a "one size fits all" approach. We select the right mix of cameras (Dome, Bullet, PTZ, or Fisheye) and storage solutions (NVR, Cloud, or Hybrid) that match the scale and compliance needs of your operations.</p>
                  </div>
                  <div>
                    <strong>3. Professional Cabling & Mounting:</strong>
                    <p>Our tailored installation ensures aesthetics and durability. We use industrial-grade cabling and conduits to ensure longevity and resistance to environmental factors, which is crucial for busy {industry} facilities.</p>
                  </div>
                  <div>
                    <strong>4. Configuration & Training:</strong>
                    <p>We configure remote access, set up intelligent alerts (like line-crossing or intrusion detection), and train your security staff or management on how to retrieve footage efficiently during an incident.</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          <section>
            <h2 className={styles.sectionTitle}>Select City for {industry} Security</h2>
            <div className={styles.featuresGrid}>
              {CITIES.map((city, i) => (
                <Link key={i} href={`/industries/${industrySlug}/${createSlug(city)}`} className={styles.featureCard} aria-label={`View ${industry} in ${city}`}>
                  <span className={styles.checkIcon}>📍</span>
                  <span className={styles.featureText}>{city}</span>
                </Link>
              ))}
            </div>
          </section>

          {content && content.faqs && content.faqs.length > 0 && (
            <section style={{ marginTop: '4rem' }}>
              <h2 className={styles.sectionTitle}>Common Questions about {industry} Security</h2>
              <div className={styles.faqGrid}>
                {content.faqs.map((faq, i) => (
                  <div key={i} className={styles.faqItem}>
                    <h3 className={styles.faqQuestion}>{faq.question}</h3>
                    <p className={styles.faqAnswer}>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
