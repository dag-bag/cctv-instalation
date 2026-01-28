import React from 'react';
import Link from '@/components/Link';
import { Metadata } from 'next';
import { CITIES, createSlug } from '@/lib/seo-data';
import { BRAND_CONTENT, PageContent } from '@/lib/content-data';
import styles from '../../[slug]/page.module.css';

// export const dynamic = 'force-static';
// export const revalidate = false;
export const dynamicParams = false;
export const dynamic = "force-dynamic";

type Props = { params: Promise<{ brand: string }> };

function getBrandContent(slug: string): PageContent | null {
  const brandName = Object.keys(BRAND_CONTENT).find(key => createSlug(key) === slug);
  return brandName ? BRAND_CONTENT[brandName] : null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { brand: brandSlug } = await params;
  const content = getBrandContent(brandSlug);
  const brandName = content ? Object.keys(BRAND_CONTENT).find(k => createSlug(k) === brandSlug) || brandSlug : brandSlug;
  
  const title = content ? `${content.title} | Cities in Delhi NCR` : `${brandName} Installation | Cities in Delhi NCR`;
  const description = content 
    ? `Authorized ${brandName} installation & support across Delhi NCR. ${content.description.slice(0, 130)}... Book certified technicians for ${brandName} CCTV systems in your city.`
    : `Browse cities where we install and support ${brandName} CCTV systems. Expert technicians, 1-year warranty and best prices in Delhi, Gurgaon, Noida & Ghaziabad.`;
  
  return {
    title,
    description,
    alternates: { canonical: `https://www.camharbor.in/brands/${brandSlug}` },
    openGraph: { title, description, type: 'website' },
  };
}

export default async function BrandCityListPage({ params }: Props) {
  const { brand: brandSlug } = await params;
  const content = getBrandContent(brandSlug);
  
  // Fallback simple name if content not found (though it should be for known brands)
  const brandName = content ? Object.keys(BRAND_CONTENT).find(k => createSlug(k) === brandSlug) || brandSlug : brandSlug;
  const displayName = brandName.replace(/-/g, ' '); // simple cleanup fallback

  const breadcrumbSchema = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.camharbor.in' },
      { '@type': 'ListItem', position: 2, name: 'Brands', item: 'https://www.camharbor.in/brands' },
      { '@type': 'ListItem', position: 3, name: displayName, item: `https://www.camharbor.in/brands/${brandSlug}` }
    ]
  };

  return (
    <div className={styles.container}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{content?.title || `${displayName} Installation`}</h1>
          <p className={styles.subtitle}>Select a city to view supported localities.</p>
        </div>
      </header>
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <div className={styles.breadcrumbContent}>
          <Link href="/" className={styles.link}>Home</Link> &gt;{' '}
          <Link href="/brands" className={styles.link}>Brands</Link> &gt;{' '}
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
                  <h2 className={styles.subTitle}>Key Features of {displayName} Systems</h2>
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
            <h2 className={styles.sectionTitle}>Select City for {displayName} Installation</h2>
            <div className={styles.featuresGrid}>
              {CITIES.map((city, i) => (
                <Link key={i} href={`/brands/${brandSlug}/${createSlug(city)}`} className={styles.featureCard} aria-label={`View ${displayName} installation in ${city}`}>
                  <span className={styles.checkIcon}>📍</span>
                  <span className={styles.featureText}>{city}</span>
                </Link>
              ))}
            </div>
          </section>

          {content && content.faqs && content.faqs.length > 0 && (
            <section style={{ marginTop: '4rem' }}>
              <h2 className={styles.sectionTitle}>FAQs about {displayName} CCTV</h2>
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

