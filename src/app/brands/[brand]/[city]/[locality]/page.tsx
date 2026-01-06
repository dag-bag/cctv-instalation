import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CITIES, LOCALITIES, SERVICES, createSlug } from '@/lib/seo-data';
import { BUSINESS_CONFIG } from '@/config/business';
import { getImageUrl, getImageAlt } from '@/config/images';
import styles from '../../../../[slug]/page.module.css';
export const dynamic = 'force-static';
export const revalidate = false;

type Props = {
  params: Promise<{ brand: string; city: string; locality: string }>
};

function findOriginalFromSlug(slug: string, list: string[]): string | undefined {
  return list.find(item => createSlug(item) === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { brand, city: citySlug, locality: localitySlug } = await params;
  const city = findOriginalFromSlug(citySlug, CITIES) || citySlug;
  const locality = findOriginalFromSlug(localitySlug, LOCALITIES[city] || []) || localitySlug;
  const title = `${brand} Installation in ${locality}, ${city}`;
  const description = `Authorized ${brand} installation and setup in ${locality}, ${city}. Genuine products, expert technicians, mobile view configuration, and warranty.`;
  return {
    title,
    description,
    alternates: { canonical: `https://www.camharbor.in/brands/${brand}/${citySlug}/${localitySlug}` },
    openGraph: { title, description, type: 'website', url: `https://www.camharbor.in/brands/${brand}/${citySlug}/${localitySlug}` },
  };
}

export default async function BrandPage({ params }: Props) {
  const { brand, city: citySlug, locality: localitySlug } = await params;
  const city = findOriginalFromSlug(citySlug, CITIES) || citySlug;
  const locality = findOriginalFromSlug(localitySlug, LOCALITIES[city] || []) || localitySlug;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.camharbor.in' },
      { '@type': 'ListItem', position: 2, name: city, item: `https://www.camharbor.in/services/${citySlug}` },
      { '@type': 'ListItem', position: 3, name: `${brand} in ${locality}`, item: `https://www.camharbor.in/brands/${brand}/${citySlug}/${localitySlug}` }
    ]
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org', '@type': 'LocalBusiness',
    'name': `CamHarbor - ${brand} Installation`, 'telephone': '+91-8766203976',
    'address': BUSINESS_CONFIG.schemaAddress,
    'areaServed': { '@type': 'City', 'name': `${locality}, ${city}` },
    'aggregateRating': { '@type': 'AggregateRating', 'ratingValue': '4.9', 'reviewCount': '500' }
  };

  return (
    <div className={styles.container}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, localBusinessSchema]) }} />
      <header className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src={getImageUrl('brandInstallation', 'hero', 2070)}
            alt={getImageAlt('brandInstallation', 'hero', { city, locality, service: brand })}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', opacity: 0.15 }}
          />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{brand} Installation in <span className={styles.highlight}>{locality}</span>, {city}</h1>
          <p className={styles.subtitle}>Authorized setup, genuine products, mobile view configuration, and warranty-backed service.</p>
        </div>
      </header>
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <div className={styles.breadcrumbContent}>
          <Link href="/" className={styles.link}>Home</Link> &gt;{' '}
          <Link href={`/services/${citySlug}`} className={styles.link}>{city}</Link> &gt;{' '}
          <span className={styles.activeBreadcrumb}>{brand} in {locality}</span>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.contentSection}>
          <section>
            <h2 className={styles.sectionTitle}>Professional {brand} Installation in {locality}, {city}</h2>
            <div className={styles.text} style={{ marginBottom: '2rem' }}>
              <p>
                Looking for {brand} CCTV installation in {locality}, {city}? CamHarbor is your trusted partner for all 
                {brand} security solutions. We are authorized dealers and installers of {brand} products, ensuring you 
                get genuine equipment with full manufacturer warranty. Our team has extensive experience installing 
                {brand} cameras, DVRs, NVRs, and access control systems across {locality} and surrounding areas.
              </p>
              <p>
                When you choose {brand} from CamHarbor in {locality}, you get more than just products. We provide complete 
                installation services, mobile app setup, remote viewing configuration, and ongoing support. Our technicians 
                are trained on {brand} systems and know how to optimize them for your specific needs. Whether you need 
                residential security, office surveillance, or industrial monitoring, we have the right {brand} solution.
              </p>
              <p>
                We serve customers throughout {locality} and nearby areas in {city}. Our same-day installation service 
                means you can have your {brand} security system up and running quickly. We also offer maintenance contracts 
                to keep your system running smoothly. Contact us today for a free consultation and quote for {brand} 
                installation in {locality}.
              </p>
            </div>
          </section>

          <section style={{ marginTop: '4rem' }}>
            <h2 className={styles.sectionTitle}>Popular {brand} Services in {locality}, {city}</h2>
            <div className={styles.featuresGrid}>
              {SERVICES.slice(0,6).map((s, i) => (
                <Link key={i} href={`/services/${citySlug}/${localitySlug}/${createSlug(s)}`} className={styles.featureCard}>
                  <span className={styles.checkIcon}>🎥</span>
                  <span className={styles.featureText}>{s}</span>
                </Link>
              ))}
            </div>
          </section>

          <section style={{ marginTop: '4rem' }}>
            <h2 className={styles.sectionTitle}>Why Choose {brand} in {locality}, {city}?</h2>
            <div className={styles.text} style={{ marginBottom: '2rem' }}>
              <p>
                {brand} is a leading brand in security technology, known for quality, reliability, and advanced features. 
                When you install {brand} systems in {locality}, you get cutting-edge security solutions backed by expert 
                installation and support from CamHarbor. Here are the key benefits of choosing {brand} for your security needs.
              </p>
            </div>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}><span className={styles.checkIcon}>📷</span><span className={styles.featureText}>ColorVu / Starlight Low-Light Cameras</span></div>
              <div className={styles.featureCard}><span className={styles.checkIcon}>🧠</span><span className={styles.featureText}>AcuSense / AI Motion Detection</span></div>
              <div className={styles.featureCard}><span className={styles.checkIcon}>🗃️</span><span className={styles.featureText}>NVR/DVR 4/8/16/32 Channel Options</span></div>
              <div className={styles.featureCard}><span className={styles.checkIcon}>🔗</span><span className={styles.featureText}>PoE Networking and Clean Wiring</span></div>
              <div className={styles.featureCard}><span className={styles.checkIcon}>📱</span><span className={styles.featureText}>Mobile View and Cloud Access</span></div>
              <div className={styles.featureCard}><span className={styles.checkIcon}>🛡️</span><span className={styles.featureText}>Warranty and After-Sales Support</span></div>
            </div>
          </section>

          <section style={{ marginTop: '4rem' }}>
            <h2 className={styles.sectionTitle}>Our {brand} Installation Process in {locality}, {city}</h2>
            <div className={styles.text} style={{ marginBottom: '2rem' }}>
              <p>
                When you choose {brand} installation from CamHarbor in {locality}, we follow a comprehensive process to 
                ensure your system is set up correctly. First, we conduct a site survey to understand your property layout 
                and security needs. Our team then designs a customized solution using {brand} products that best fit your 
                requirements and budget.
              </p>
              <p>
                During installation, our certified technicians handle everything from camera mounting to system configuration. 
                We ensure proper cable management, power supply setup, and network configuration for optimal performance. 
                After installation, we configure mobile apps, remote viewing, and provide complete training so you can use 
                your {brand} system effectively. We also offer ongoing support and maintenance to keep your system running 
                smoothly.
              </p>
            </div>
          </section>

          <section style={{ marginTop: '4rem' }}>
            <h2 className={styles.sectionTitle}>{brand} FAQs for {locality}, {city} Customers</h2>
            <div className={styles.text} style={{ marginBottom: '2rem' }}>
              <p>
                Here are answers to frequently asked questions about {brand} installation and services in {locality}, 
                {city}. If you need more information, our team is ready to help you understand all aspects of {brand} 
                security systems and find the best solution for your property.
              </p>
            </div>
            <div className={styles.faqGrid}>
              {[
                { q: `Do you provide original ${brand} products?`, a: 'Yes, we supply and install only genuine products with manufacturer warranty.' },
                { q: 'Can I upgrade my DVR/NVR later?', a: 'Yes, we design scalable systems; you can add cameras or upgrade the recorder anytime.' },
                { q: 'Do you set up mobile view?', a: 'We configure secure remote viewing on Android/iOS along with user training.' },
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
