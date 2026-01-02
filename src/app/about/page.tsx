import React from 'react';
import Link from '@/components/Link';
import { Metadata } from 'next';
import { BUSINESS_CONFIG } from '@/config/business';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About Us - Professional CCTV Installation & Security Services | CamHarbor',
  description:
    'Learn about CamHarbor and our founder Virender Kumar. We provide professional CCTV installation, security camera repair, and comprehensive security solutions across Delhi NCR.',
  alternates: { canonical: 'https://www.camharbor.in/about' },
  openGraph: {
    type: 'website',
    url: 'https://www.camharbor.in/about',
    title: 'About Us - CamHarbor Security Services',
    description:
      'Professional CCTV installation and security services by Virender Kumar. Serving Delhi NCR with expert technicians and trusted solutions.',
  },
};

export default function AboutPage() {
  // Person Schema for Founder - Boosts E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Virender Kumar",
    "jobTitle": "Founder & CEO",
    "description": "Founder of CamHarbor, a leading CCTV installation and security services company in Delhi NCR with years of experience in security technology.",
    "worksFor": {
      "@type": "Organization",
      "name": "CamHarbor",
      "url": "https://www.camharbor.in"
    },
    "sameAs": [
      "https://www.instagram.com/maihu_vicky/"
    ],
    "knowsAbout": [
      "CCTV Installation",
      "Security Systems",
      "Surveillance Technology",
      "Access Control Systems",
      "Video Door Phone Installation",
      "Security Camera Repair"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Security Systems Specialist",
      "occupationLocation": {
        "@type": "City",
        "name": "Delhi"
      },
      "responsibilities": "Managing CCTV installation, security system design, and customer service operations"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Security Technology Training"
    }
  };

  // Organization Schema for the company
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CamHarbor",
    "url": "https://www.camharbor.in",
    "logo": "https://www.camharbor.in/logo-full.png",
    "founder": {
      "@type": "Person",
      "name": "Virender Kumar"
    },
    "foundingDate": "2014",
    "description": "Professional CCTV installation and security solutions provider in Delhi NCR",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "House No. 110, C2 Block, Street No. 3, Mahavir Enclave Part-1, Palam",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110045",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": BUSINESS_CONFIG.phone,
      "contactType": "Customer Service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      BUSINESS_CONFIG.social.facebook,
      BUSINESS_CONFIG.social.instagram,
      BUSINESS_CONFIG.social.twitter,
      BUSINESS_CONFIG.social.youtube
    ]
  };

  return (
    <div className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([personSchema, organizationSchema]),
        }}
      />
      <header className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>About CamHarbor</h1>
          <p className={styles.subtitle}>
            Your trusted partner for professional CCTV installation and security solutions across Delhi NCR
          </p>
        </div>
      </header>

      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <div className={styles.breadcrumbContent}>
          <Link href="/" className={styles.link}>Home</Link> &gt;{' '}
          <span className={styles.activeBreadcrumb}>About Us</span>
        </div>
      </nav>

      <main className={styles.main}>
        {/* Our Story Section */}
        <section className={styles.section}>
          <div className={styles.textContent}>
            <h2 className={styles.sectionTitle}>Our Story</h2>
            <p className={styles.text}>
              CamHarbor started with a simple goal. We want to make security easy for everyone. 
              What began as a small business is now one of Delhi NCR&apos;s trusted security companies.
            </p>
            <p className={styles.text}>
              We have installed thousands of security cameras. We help businesses protect their property. 
              We give families peace of mind. Quality work and honest service are what we stand for.
            </p>
            <p className={styles.text}>
              Today, we work across Delhi, Gurgaon, Noida, Ghaziabad, and Faridabad. We offer complete 
              security solutions. Our team uses the latest technology. We provide expert installation 
              and reliable support.
            </p>
          </div>
        </section>

        {/* Founder Section */}
        <section className={styles.section}>
          <div className={styles.founderCard}>
            <div className={styles.founderContent}>
              <h2 className={styles.sectionTitle}>Meet Our Founder</h2>
              <h3 className={styles.founderName}>Virender Kumar</h3>
              <p className={styles.text}>
                Virender Kumar is the founder of CamHarbor. He has years of experience in security and 
                technology. He saw that people in Delhi NCR needed good, affordable security services.
              </p>
              <p className={styles.text}>
                Virender loves technology. He cares about making customers happy. This has made CamHarbor 
                what it is today. The company focuses on quality work, fair prices, and great service.
              </p>
              <p className={styles.text}>
                Virender believes everyone deserves good security. This includes small homes and large 
                businesses. We work to provide the best security at fair prices. We back it up with 
                reliable support.
              </p>
              <div className={styles.socialLink}>
                <a
                  href="https://www.instagram.com/maihu_vicky/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.instagramLink}
                >
                  <span className={styles.socialIcon}>📷</span>
                  <span>Follow on Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className={styles.section}>
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <div className={styles.missionIcon}>🎯</div>
              <h3 className={styles.missionTitle}>Our Mission</h3>
              <p className={styles.missionText}>
                We provide top security solutions. We protect what matters to our customers. We make 
                professional security easy to get, affordable, and reliable for everyone in Delhi NCR.
              </p>
            </div>
            <div className={styles.missionCard}>
              <div className={styles.missionIcon}>👁️</div>
              <h3 className={styles.missionTitle}>Our Vision</h3>
              <p className={styles.missionText}>
                We want to be India&apos;s most trusted security company. We are known for new ideas, quality 
                work, and putting customers first. We see a future where every home and business has 
                reliable, smart security.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Core Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>✅</div>
              <h3>Quality First</h3>
              <p>We never cut corners on quality. Every job is done right. We use real parts and follow 
              the best methods.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🤝</div>
              <h3>Customer Trust</h3>
              <p>We want to work with you for years. We believe in being open, honest, and keeping 
              our word.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>💡</div>
              <h3>Innovation</h3>
              <p>We keep up with the newest security technology. This helps us offer you the best 
              solutions available.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>⚡</div>
              <h3>Reliability</h3>
              <p>When you need us, we are there. Our 24/7 support and fast response keep your security 
              systems working.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>💰</div>
              <h3>Affordability</h3>
              <p>Good security should not cost too much. Our fair prices make professional security 
              available to everyone.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🛡️</div>
              <h3>Security</h3>
              <p>Your safety and privacy come first. We make sure all installations meet high security 
              standards. We protect your data.</p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What We Offer</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>📹</div>
              <h3>CCTV Installation</h3>
              <p>We install security cameras for homes, offices, shops, and factories. We handle 
              everything from planning to setup.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🔧</div>
              <h3>Repair & Maintenance</h3>
              <p>We repair all major CCTV brands. We also offer AMC plans to keep your systems 
              working well.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🔐</div>
              <h3>Access Control</h3>
              <p>We install biometric and card access systems. These add extra security. They work 
              great for offices, apartments, and businesses.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🚪</div>
              <h3>Video Door Phones</h3>
              <p>Modern video door phones let you see and talk to visitors before opening the door. 
              Perfect for homes and apartments.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>⚡</div>
              <h3>Electrical Services</h3>
              <p>We provide full electrical services. This includes wiring, panel installation, and 
              repairs. All work is done by certified electricians.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>📱</div>
              <h3>24/7 Support</h3>
              <p>We offer 24/7 support for emergencies. Our team is always ready to help when you 
              need us.</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why Choose CamHarbor?</h2>
          <div className={styles.whyChooseGrid}>
            <div className={styles.whyCard}>
              <div className={styles.whyNumber}>1</div>
              <h3>Expert Technicians</h3>
              <p>All our technicians are certified and verified. They have years of experience in 
              security installation and repair.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyNumber}>2</div>
              <h3>1-Year Warranty</h3>
              <p>We back our work with a full 1-year warranty. This covers both labor and parts 
              on all installations.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyNumber}>3</div>
              <h3>Transparent Pricing</h3>
              <p>No hidden fees or surprises. We give clear prices upfront. You know exactly what 
              you are paying for.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyNumber}>4</div>
              <h3>Same-Day Service</h3>
              <p>Need urgent installation or repair? We offer same-day service in most areas across 
              Delhi NCR.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyNumber}>5</div>
              <h3>Genuine Parts</h3>
              <p>We use only real, branded parts from authorized dealers. We never compromise on 
              quality or durability.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyNumber}>6</div>
              <h3>Customer Satisfaction</h3>
              <p>We have thousands of happy customers and a 4.9+ rating. We work hard to exceed 
              your expectations.</p>
            </div>
          </div>
        </section>

        {/* Our Reach */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Reach</h2>
          <div className={styles.reachContent}>
            <p className={styles.text}>
              CamHarbor serves customers across the entire Delhi NCR region. This includes:
            </p>
            <div className={styles.citiesGrid}>
              <div className={styles.cityCard}>Delhi</div>
              <div className={styles.cityCard}>Gurgaon</div>
              <div className={styles.cityCard}>Noida</div>
              <div className={styles.cityCard}>Ghaziabad</div>
              <div className={styles.cityCard}>Faridabad</div>
              <div className={styles.cityCard}>Greater Noida</div>
            </div>
            <p className={styles.text}>
              We cover 100+ areas across these cities. Professional security is never far away. 
              Whether you are in a home area, business area, or factory zone, we are here to help.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Start Your Security Journey Today</h2>
            <p className={styles.ctaText}>
              Contact us today for a free consultation and quote. Our team is ready to help you 
              find the right security solution.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.ctaButton}>
                Contact Us
              </Link>
              <a
                href={`tel:${BUSINESS_CONFIG.phone.replace(/\D/g, '')}`}
                className={styles.ctaButtonOutline}
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

