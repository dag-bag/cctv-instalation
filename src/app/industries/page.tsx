import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { INDUSTRIES, createSlug } from '@/lib/seo-data';
import styles from '../[slug]/page.module.css';

export const dynamic = 'force-static';
export const revalidate = false;

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: 'Sector-specific CCTV solutions for Delhi NCR across industries.',
  alternates: { canonical: 'https://www.camharbor.in/industries' },
};

export default function IndustriesIndexPage() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Industries We Serve</h1>
          <p className={styles.subtitle}>Browse sectors for tailored CCTV installation and operations.</p>
        </div>
      </header>
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <div className={styles.breadcrumbContent}>
          <Link href="/" className={styles.link}>Home</Link> &gt;{' '}
          <span className={styles.activeBreadcrumb}>Industries</span>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.contentSection}>
          <section>
            <h2 className={styles.sectionTitle}>Industry-Specific Security Solutions</h2>
            <div className={styles.text} style={{ marginBottom: '2rem' }}>
              <p>
                At CamHarbor, we understand that different industries have unique security needs. That is why we offer 
                specialized CCTV and security solutions tailored to each sector. Whether you run a hospital, school, 
                retail store, warehouse, or any other business, we design security systems that meet your specific 
                requirements and challenges.
              </p>
              <p>
                Our industry-specific approach means we consider factors like foot traffic, critical areas, compliance 
                requirements, and operational needs when planning your security system. We work with businesses across 
                Delhi NCR to provide comprehensive security solutions that protect assets, ensure safety, and support 
                smooth operations.
              </p>
              <p>
                From high-resolution cameras for retail stores to advanced monitoring systems for warehouses, we have 
                the expertise and experience to deliver security solutions that work for your industry. Browse the 
                sectors below to learn more about our specialized services for each industry type.
              </p>
            </div>
          </section>

          <section style={{ marginTop: '4rem' }}>
            <h2 className={styles.sectionTitle}>Popular Sectors</h2>
            <div className={styles.featuresGrid}>
              {INDUSTRIES.map((ind, i) => (
                <Link key={i} href={`/industries/${createSlug(ind)}`} className={styles.featureCard} aria-label={`View ${ind} cities`}>
                  <span className={styles.checkIcon}>🏢</span>
                  <span className={styles.featureText}>{ind}</span>
                </Link>
              ))}
            </div>
          </section>

          <section style={{ marginTop: '4rem' }}>
            <h2 className={styles.sectionTitle}>Why Choose Industry-Specific Solutions?</h2>
            <div className={styles.text} style={{ marginBottom: '2rem' }}>
              <p>
                Generic security systems often fail to address the unique challenges of different industries. Our 
                industry-specific approach ensures that your security system is designed with your business needs in 
                mind. We consider factors like regulatory compliance, operational workflows, and industry best practices 
                to deliver solutions that truly protect your business.
              </p>
              <p>
                Our team has experience working with various industries across Delhi NCR, giving us deep insights into 
                what works best for each sector. We stay updated with the latest security technologies and industry 
                standards to ensure your system meets current requirements and can adapt to future needs.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

