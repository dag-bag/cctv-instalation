import React from 'react';
import Link from '@/components/Link';
import { Metadata } from 'next';
import { BUSINESS_CONFIG } from '@/config/business';
import styles from './page.module.css';
import nextDynamic from 'next/dynamic';

const ContactForm = nextDynamic(() => import('@/components/ContactForm'), {
  ssr: true,
});

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch',
  description:
    'Contact CamHarbor for professional CCTV installation and security services. Call us, email us, or fill out our contact form. We respond within 24 hours.',
  alternates: { canonical: 'https://www.camharbor.in/contact' },
  openGraph: {
    type: 'website',
    url: 'https://www.camharbor.in/contact',
    title: 'Contact Us - Security Services',
    description:
      'Get in touch with CamHarbor for CCTV installation and security solutions. Available 24/7 for emergencies.',
  },
};

export default function ContactPage() {
  // ContactPage Schema - Improves contact page visibility in search
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact CamHarbor - CCTV Installation Services",
    "description": "Contact us for professional CCTV installation, security camera repair, and all security services across Delhi NCR",
    "url": "https://www.camharbor.in/contact",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "CamHarbor",
      "telephone": BUSINESS_CONFIG.phone,
      "email": BUSINESS_CONFIG.email,
      "url": "https://www.camharbor.in",
      "address": BUSINESS_CONFIG.schemaAddress,
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "28.6139",
        "longitude": "77.2090"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": BUSINESS_CONFIG.phone,
          "contactType": "Customer Service",
          "availableLanguage": ["English", "Hindi"],
          "areaServed": "IN",
          "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": BUSINESS_CONFIG.hours.weekdays.split(' - ')[0],
            "closes": BUSINESS_CONFIG.hours.weekdays.split(' - ')[1]
          }
        },
        {
          "@type": "ContactPoint",
          "telephone": BUSINESS_CONFIG.phone,
          "contactType": "Emergency",
          "availableLanguage": ["English", "Hindi"],
          "areaServed": "IN",
          "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          }
        },
        {
          "@type": "ContactPoint",
          "telephone": BUSINESS_CONFIG.phone,
          "contactType": "Sales",
          "availableLanguage": ["English", "Hindi"],
          "areaServed": "IN"
        },
        {
          "@type": "ContactPoint",
          "telephone": BUSINESS_CONFIG.phone,
          "contactType": "Technical Support",
          "availableLanguage": ["English", "Hindi"],
          "areaServed": "IN"
        }
      ]
    }
  };

  // BreadcrumbList for better navigation understanding
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.camharbor.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact Us",
        "item": "https://www.camharbor.in/contact"
      }
    ]
  };

  return (
    <div className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([contactPageSchema, breadcrumbSchema]),
        }}
      />
      <header className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Get In Touch With Us</h1>
          <p className={styles.subtitle}>
            Have questions about our CCTV installation and security services? We&apos;re here to help! 
            Reach out to us and our team will get back to you within 24 hours.
          </p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className={styles.introSection}>
        <div className={styles.introContent}>
          <p>
            At CamHarbor, we understand that choosing the right security solution for your home or business is an important decision. 
            Whether you&apos;re looking for CCTV camera installation, access control systems, security system repairs, or annual maintenance 
            contracts, our expert team is ready to assist you every step of the way. We serve customers across Delhi, Gurgaon, Noida, 
            and the entire Delhi NCR region, providing professional security solutions tailored to your specific needs.
          </p>
          <p>
            Our experienced security consultants are available to discuss your requirements, provide detailed information about our 
            services, answer any technical questions, and offer free, no-obligation quotes. We believe in transparent communication 
            and will help you understand the best security options available for your property, budget, and security goals. From 
            initial consultation to installation and ongoing support, we&apos;re committed to delivering exceptional service and peace of mind.
          </p>
        </div>
      </section>

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
              <p className={styles.infoSubtext}>We&apos;ll respond within 24 hours</p>
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
            <p className={styles.sectionDescription}>
              Our customer service team is available during regular business hours to assist with inquiries, schedule consultations, 
              and provide support. For urgent security issues or emergency repairs, we offer 24/7 emergency services to ensure 
              your security systems are always operational when you need them most.
            </p>
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
            <p className={styles.sectionDescription}>
              When you reach out to CamHarbor, you&apos;re connecting with a team of security professionals dedicated to protecting 
              what matters most to you. We offer comprehensive security solutions including CCTV installation, dome camera setup, 
              access control systems, and ongoing maintenance services. Our commitment to excellence means you&apos;ll receive personalized 
              attention, detailed project planning, and reliable support throughout your security journey.
            </p>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>⚡</div>
                <h3>Fast Response</h3>
                <p>
                  We understand that security concerns can&apos;t wait. Our team responds to all inquiries within 24 hours, 
                  and we&apos;re available 24/7 for emergency situations. Whether you need immediate assistance or are planning 
                  a future installation, we&apos;re here to help promptly.
                </p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🎯</div>
                <h3>Expert Advice</h3>
                <p>
                  Our certified security consultants have years of experience in the industry. They&apos;ll assess your property, 
                  understand your security requirements, and recommend the most effective solutions tailored to your specific 
                  needs, budget, and property layout.
                </p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>💰</div>
                <h3>Free Quotes</h3>
                <p>
                  Get detailed, transparent pricing with no hidden costs. We provide comprehensive, no-obligation quotes for 
                  all our services, including installation, repairs, and maintenance contracts. Our competitive pricing ensures 
                  you get the best value for your investment.
                </p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🛡️</div>
                <h3>Trusted Service</h3>
                <p>
                  With years of experience serving thousands of satisfied customers across Delhi NCR, we&apos;ve built a reputation 
                  for reliability, quality workmanship, and exceptional customer service. Our track record speaks for itself, 
                  and we&apos;re committed to maintaining the highest standards.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

