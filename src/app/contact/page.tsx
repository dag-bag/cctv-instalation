import React from 'react';
import Link from '@/components/Link';
import { Metadata } from 'next';
import { BUSINESS_CONFIG } from '@/config/business';
import styles from './page.module.css';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch | CamHarbor',
  description:
    'Contact CamHarbor for professional CCTV installation and security services. Call us, email us, or fill out our contact form. We respond within 24 hours.',
  alternates: { canonical: 'https://www.camharbor.in/contact' },
  openGraph: {
    type: 'website',
    url: 'https://www.camharbor.in/contact',
    title: 'Contact Us - CamHarbor Security Services',
    description:
      'Get in touch with CamHarbor for CCTV installation and security solutions. Available 24/7 for emergencies.',
  },
};

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Get In Touch With Us</h1>
          <p className={styles.subtitle}>
            Have questions about our CCTV installation and security services? We're here to help! 
            Reach out to us and our team will get back to you within 24 hours.
          </p>
        </div>
      </header>

      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <div className={styles.breadcrumbContent}>
          <Link href="/" className={styles.link}>Home</Link> &gt;{' '}
          <span className={styles.activeBreadcrumb}>Contact Us</span>
        </div>
      </nav>

      <main className={styles.main}>
        <div className={styles.contentWrapper}>
          {/* Contact Form Section */}
          <section className={styles.formSection}>
            <ContactForm />
          </section>

          {/* Contact Information Section */}
          <section className={styles.infoSection}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📞</div>
              <h3>Phone</h3>
              <p>
                <a href={`tel:${BUSINESS_CONFIG.phone.replace(/\D/g, '')}`} className={styles.contactLink}>
                  {BUSINESS_CONFIG.phone}
                </a>
              </p>
              <p className={styles.infoSubtext}>Available 24/7 for emergencies</p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>✉️</div>
              <h3>Email</h3>
              <p>
                <a href={`mailto:${BUSINESS_CONFIG.email}`} className={styles.contactLink}>
                  {BUSINESS_CONFIG.email}
                </a>
              </p>
              <p className={styles.infoSubtext}>We'll respond within 24 hours</p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📍</div>
              <h3>Address</h3>
              <p>{BUSINESS_CONFIG.address}</p>
              <p className={styles.infoSubtext}>Serving Delhi NCR and surrounding areas</p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>💬</div>
              <h3>WhatsApp</h3>
              <p>
                <a
                  href={`https://wa.me/${BUSINESS_CONFIG.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  Chat with us
                </a>
              </p>
              <p className={styles.infoSubtext}>Quick response via WhatsApp</p>
            </div>
          </section>

          {/* Business Hours Section */}
          <section className={styles.hoursSection}>
            <h2 className={styles.sectionTitle}>Business Hours</h2>
            <div className={styles.hoursCard}>
              <div className={styles.hoursItem}>
                <span className={styles.hoursDay}>Monday - Friday</span>
                <span className={styles.hoursTime}>{BUSINESS_CONFIG.hours.weekdays}</span>
              </div>
              <div className={styles.hoursItem}>
                <span className={styles.hoursDay}>Saturday - Sunday</span>
                <span className={styles.hoursTime}>{BUSINESS_CONFIG.hours.weekends}</span>
              </div>
              <div className={styles.hoursItem}>
                <span className={styles.hoursDay}>Emergency Services</span>
                <span className={styles.hoursTime}>{BUSINESS_CONFIG.hours.emergency}</span>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className={styles.featuresSection}>
            <h2 className={styles.sectionTitle}>Why Contact Us?</h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>⚡</div>
                <h3>Fast Response</h3>
                <p>We respond to all inquiries within 24 hours, often much sooner.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🎯</div>
                <h3>Expert Advice</h3>
                <p>Get professional guidance on the best security solutions for your needs.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>💰</div>
                <h3>Free Quotes</h3>
                <p>No obligation free quotes for all our services.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🛡️</div>
                <h3>Trusted Service</h3>
                <p>Years of experience serving thousands of satisfied customers.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

