import React from 'react';
import Link from 'next/link';
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
                  <h3 className={styles.subTitle}>Key Features</h3>
                  <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginTop: '1rem' }}>
                    {content.features.map((feature, idx) => (
                      <li key={idx} style={{ marginBottom: '0.5rem' }}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
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
              <h2 className={styles.sectionTitle}>Common Questions</h2>
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
