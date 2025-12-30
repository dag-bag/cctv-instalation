import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { createSlug } from '@/lib/seo-data';
import styles from '../[slug]/page.module.css';

export const dynamic = 'force-static';
export const revalidate = false;

const BRANDS = ['Hikvision','CP Plus','Dahua','Honeywell','Bosch','Panasonic','Godrej','Samsung','Sony','Tiandy','Uniview','Ezviz'];

export const metadata: Metadata = {
  title: 'Authorized CCTV Brands Installation in Delhi NCR | Hikvision, CP Plus, Dahua & More | CamHarbor',
  description: 'Authorized dealer for Hikvision, CP Plus, Dahua, Honeywell, Bosch, Panasonic, Samsung, Sony & more. Genuine products, full warranty, expert installation, mobile setup & 24/7 support. Free quote!',
  alternates: { canonical: 'https://www.camharbor.in/brands' },
};

export default function BrandsIndexPage() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Brands We Install</h1>
          <p className={styles.subtitle}>Choose your preferred brand to view supported cities and localities.</p>
        </div>
      </header>
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <div className={styles.breadcrumbContent}>
          <Link href="/" className={styles.link}>Home</Link> &gt;{' '}
          <span className={styles.activeBreadcrumb}>Brands</span>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.contentSection}>
          <section>
            <h2 className={styles.sectionTitle}>Authorized CCTV Brand Installation</h2>
            <div className={styles.text} style={{ marginBottom: '2rem' }}>
              <p>
                CamHarbor is an authorized dealer and installer for leading CCTV brands across Delhi NCR. We work with 
                top manufacturers like Hikvision, CP Plus, Dahua, Honeywell, Bosch, Panasonic, Godrej, Samsung, Sony, 
                Tiandy, Uniview, and Ezviz to provide genuine products with full manufacturer warranty.
              </p>
              <p>
                When you choose a brand from CamHarbor, you get more than just products. We provide complete installation 
                services, mobile app setup, remote viewing configuration, and ongoing support. Our technicians are trained 
                on all major brands and know how to optimize systems for best performance.
              </p>
              <p>
                We understand that choosing the right brand is important for your security needs. Each brand has its own 
                strengths and features. Our team can help you select the best brand based on your requirements, budget, 
                and property type. We serve customers across Delhi, Gurgaon, Noida, and surrounding areas with same-day 
                installation available in most locations.
              </p>
            </div>
          </section>

          <section style={{ marginTop: '4rem' }}>
            <h2 className={styles.sectionTitle}>Popular Brands</h2>
            <div className={styles.featuresGrid}>
              {BRANDS.map((b, i) => (
                <Link key={i} href={`/brands/${createSlug(b)}`} className={styles.featureCard} aria-label={`View ${b} installation cities`}>
                  <span className={styles.checkIcon}>🏷️</span>
                  <span className={styles.featureText}>{b}</span>
                </Link>
              ))}
            </div>
          </section>

          <section style={{ marginTop: '4rem' }}>
            <h2 className={styles.sectionTitle}>Why Choose Authorized Brand Installation?</h2>
            <div className={styles.text} style={{ marginBottom: '2rem' }}>
              <p>
                Installing genuine branded CCTV systems through authorized dealers like CamHarbor ensures you get authentic 
                products with full manufacturer warranty and support. We source all products directly from authorized 
                distributors, so you can be confident about product quality and authenticity.
              </p>
              <p>
                Authorized installation also means you get proper technical support, firmware updates, and access to 
                manufacturer resources. Our team stays updated with the latest product features and installation techniques 
                for each brand, ensuring your system is set up correctly and optimized for performance.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

