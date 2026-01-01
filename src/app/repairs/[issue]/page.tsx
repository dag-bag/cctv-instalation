import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { CITIES, createSlug } from '@/lib/seo-data';
import { REPAIR_CONTENT } from '@/lib/content-data';
import styles from '../../[slug]/page.module.css';

export const dynamic = 'force-static';
export const revalidate = false;

type Props = { params: Promise<{ issue: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { issue } = await params;
  const content = REPAIR_CONTENT[issue];
  
  const title = content ? `${content.title} | Service Areas` : `${issue.replace(/-/g,' ')} Repair | Service Areas`;
  const description = content
    ? `Expert fix for ${issue.replace(/-/g,' ')} across Delhi NCR. ${content.description.slice(0, 120)}... We provide fast, affordable CCTV repair services in your city.`
    : `Browse cities where we fix ${issue.replace(/-/g,' ')} issues for CCTV systems. Professional troubleshooting, genuine spare parts, and 24/7 support availability.`;

  return {
    title,
    description,
    alternates: { canonical: `https://www.camharbor.in/repairs/${issue}` },
    openGraph: { title, description, type: 'website' },
  };
}

export default async function RepairCityListPage({ params }: Props) {
  const { issue } = await params;
  const content = REPAIR_CONTENT[issue];
  const displayName = issue.replace(/-/g, ' ');

  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.camharbor.in' },
      { '@type': 'ListItem', position: 2, name: 'Repairs', item: 'https://www.camharbor.in/repairs' },
      { '@type': 'ListItem', position: 3, name: displayName, item: `https://www.camharbor.in/repairs/${issue}` }
    ]
  };

  return (
    <div className={styles.container}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{content?.title || `${displayName} Repair Service`}</h1>
          <p className={styles.subtitle}>Select a location to book a technician.</p>
        </div>
      </header>
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <div className={styles.breadcrumbContent}>
          <Link href="/" className={styles.link}>Home</Link> &gt;{' '}
          <Link href="/repairs" className={styles.link}>Repairs</Link> &gt;{' '}
          <span className={styles.activeBreadcrumb}>{displayName}</span>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.contentSection}>
          {content && (
            <section className={styles.text} style={{ marginBottom: '3rem' }}>
              <div style={{ whiteSpace: 'pre-line' }}>{content.description}</div>
              
              {content.features && content.features.length > 0 && (
                <div style={{ marginTop: '2rem' }}>
                  <h2 className={styles.subTitle}>Included in {displayName} Repair</h2>
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
            <h2 className={styles.sectionTitle}>Select City for {issue.replace(/-/g,' ')} Repair</h2>
            <div className={styles.featuresGrid}>
              {CITIES.map((city, i) => (
                <Link key={i} href={`/repairs/${issue}/${createSlug(city)}`} className={styles.featureCard} aria-label={`View ${issue.replace(/-/g,' ')} in ${city}`}>
                  <span className={styles.checkIcon}>📍</span>
                  <span className={styles.featureText}>{city}</span>
                </Link>
              ))}
            </div>
          </section>

          {content && content.faqs && content.faqs.length > 0 && (
            <section style={{ marginTop: '4rem' }}>
              <h2 className={styles.sectionTitle}>Common Questions about {displayName} Repair</h2>
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
