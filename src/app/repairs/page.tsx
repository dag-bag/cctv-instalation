import React from 'react';
import Link from '@/components/Link';
import { Metadata } from 'next';
import styles from '../[slug]/page.module.css';

export const dynamic = 'force-static';
export const revalidate = false;

const REPAIR_ISSUES = ['camera-not-working','no-signal','blur-image','recording-issue','mobile-view-setup','dvr-hard-disk-replacement','password-reset','online-configuration','cable-repair','power-supply-repair'];

export const metadata: Metadata = {
  title: 'CCTV Repairs | Common Issues We Fix',
  description: 'Fast CCTV repair services across Delhi NCR. Fix camera issues, no signal, blur images, recording problems & more. Same-day service, genuine parts, warranty included. Call now!',
  alternates: { canonical: 'https://www.camharbor.in/repairs' },
};

export default function RepairsIndexPage() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>CCTV Repairs</h1>
          <p className={styles.subtitle}>Select an issue to find service availability across locations.</p>
        </div>
      </header>
      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <div className={styles.breadcrumbContent}>
          <Link href="/" className={styles.link}>Home</Link> &gt;{' '}
          <span className={styles.activeBreadcrumb}>Repairs</span>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.contentSection}>
          <section>
            <h2 className={styles.sectionTitle}>Professional CCTV Repair Services</h2>
            <div className={styles.text} style={{ marginBottom: '2rem' }}>
              <p>
                Is your CCTV system not working properly? CamHarbor provides fast and reliable repair services for all 
                types of security camera issues. Our expert technicians can diagnose and fix problems quickly, getting 
                your security system back up and running in no time. We serve customers across Delhi, Gurgaon, Noida, 
                and the entire Delhi NCR region.
              </p>
              <p>
                Common CCTV problems include cameras not working, no signal issues, blurry images, recording problems, 
                mobile view setup, DVR hard disk replacement, password resets, online configuration, cable repairs, 
                and power supply issues. Whatever the problem, our trained technicians have the skills and tools to fix 
                it efficiently.
              </p>
              <p>
                We understand that security system failures can be stressful and disruptive. That is why we offer 
                same-day service in most areas and carry common spare parts to minimize downtime. Our repair services 
                come with warranty, and we use only genuine parts to ensure long-lasting fixes.
              </p>
            </div>
          </section>

          <section style={{ marginTop: '4rem' }}>
            <h2 className={styles.sectionTitle}>Common Issues We Fix</h2>
            <div className={styles.featuresGrid}>
              {REPAIR_ISSUES.map((issue, i) => (
                <Link key={i} href={`/repairs/${issue}`} className={styles.featureCard} aria-label={`View repair for ${issue.replace(/-/g,' ')}`}>
                  <span className={styles.checkIcon}>🛠️</span>
                  <span className={styles.featureText}>{issue.replace(/-/g,' ')}</span>
                </Link>
              ))}
            </div>
          </section>

          <section style={{ marginTop: '4rem' }}>
            <h2 className={styles.sectionTitle}>Our Repair Process</h2>
            <div className={styles.text} style={{ marginBottom: '2rem' }}>
              <p>
                When you contact us for CCTV repair, we follow a systematic process to ensure your system is fixed 
                correctly. First, we diagnose the problem by checking cameras, cables, power supply, and recording 
                equipment. Then we explain the issue and provide a clear estimate before starting any work.
              </p>
              <p>
                Our technicians carry common spare parts like BNC connectors, power supplies, hard disks, and tested 
                cables, so many repairs can be completed on the spot. For more complex issues, we may need to order 
                specific parts, but we keep you informed throughout the process. After the repair, we test the entire 
                system to ensure everything is working properly.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
