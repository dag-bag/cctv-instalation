import React from 'react';
import Link from '@/components/Link';
import { Metadata } from 'next';
import { BUSINESS_CONFIG } from '@/config/business';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Why Choose CamHarbor? | Best CCTV Installation Service in Delhi NCR',
  description:
    'Discover why CamHarbor is the best choice for CCTV installation and security services. Genuine service, expert technicians, 1-year warranty, and 4.9+ rating. Trusted by thousands of customers.',
  alternates: { canonical: 'https://www.camharbor.in/why-choose-us' },
  openGraph: {
    type: 'website',
    url: 'https://www.camharbor.in/why-choose-us',
    title: 'Why Choose CamHarbor - Best Security Services',
    description:
      'Genuine service, expert technicians, and trusted by thousands. See why CamHarbor is the best choice for CCTV installation.',
  },
};

const reasons = [
  {
    icon: '🛡️',
    title: 'Genuine & Trusted Service',
    description: 'We are a genuine, registered business with years of experience. Thousands of satisfied customers trust us for their security needs. No fake promises, only real results.',
  },
  {
    icon: '⭐',
    title: '4.9+ Rating with 500+ Reviews',
    description: 'Our consistent 4.9+ star rating with over 500 verified customer reviews speaks volumes about our service quality and customer satisfaction.',
  },
  {
    icon: '👨‍🔧',
    title: 'Expert Certified Technicians',
    description: 'All our technicians are certified, background-verified, and have 5+ years of experience. They are trained on the latest security technologies and installation methods.',
  },
  {
    icon: '✅',
    title: '1-Year Comprehensive Warranty',
    description: 'We stand behind our work with a 1-year warranty covering both labor and parts. Your peace of mind is our priority.',
  },
  {
    icon: '💰',
    title: 'Transparent & Competitive Pricing',
    description: 'No hidden charges, no surprise fees. We provide clear, upfront pricing with competitive rates. Quality service at fair prices.',
  },
  {
    icon: '⚡',
    title: 'Same-Day & Emergency Service',
    description: 'Need urgent installation or repair? We offer same-day service for most locations and 24/7 emergency support when you need us most.',
  },
  {
    icon: '🔧',
    title: 'Genuine Parts & Quality Products',
    description: 'We use only genuine, branded parts from authorized dealers. Quality products ensure long-lasting security solutions for your property.',
  },
  {
    icon: '📱',
    title: '24/7 Customer Support',
    description: 'Our support team is always available via phone, WhatsApp, or email. Quick response times and dedicated assistance whenever you need help.',
  },
  {
    icon: '🏆',
    title: 'Proven Track Record',
    description: 'Years of experience serving homes, offices, shops, warehouses, and industrial facilities across Delhi NCR. We know what works.',
  },
  {
    icon: '🎯',
    title: 'Customized Solutions',
    description: 'Every property is unique. We provide customized security solutions tailored to your specific needs, budget, and requirements.',
  },
  {
    icon: '🔒',
    title: 'Secure & Professional Installation',
    description: 'Professional installation with proper wiring, cable management, and security measures. Clean work that you can be proud of.',
  },
  {
    icon: '💯',
    title: '100% Customer Satisfaction',
    description: 'Your satisfaction is our success. We go the extra mile to ensure you are completely happy with our service. That\'s our commitment.',
  },
];

export default function WhyChooseUsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why should I choose CamHarbor for CCTV installation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CamHarbor offers genuine service, expert certified technicians, 1-year warranty, transparent pricing, and has a 4.9+ rating with 500+ verified reviews. We are trusted by thousands of customers across Delhi NCR."
        }
      },
      {
        "@type": "Question",
        "name": "Is CamHarbor a genuine service provider?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, CamHarbor is a registered, genuine business with years of experience. We have served thousands of satisfied customers and maintain a 4.9+ rating with verified reviews."
        }
      },
      {
        "@type": "Question",
        "name": "What warranty does CamHarbor provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide a comprehensive 1-year warranty on all installation work, covering both labor and parts (for parts supplied by us)."
        }
      }
    ]
  };

  // WebPage Schema for better search understanding
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Why Choose CamHarbor - Best CCTV Installation Service",
    "description": "Discover why CamHarbor is the best choice for CCTV installation. Genuine service, expert technicians, 1-year warranty, 4.9+ rating, trusted by thousands.",
    "url": "https://www.camharbor.in/why-choose-us",
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://www.camharbor.in"
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".title", ".reasonTitle", ".sectionTitle"]
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.camharbor.in" },
        { "@type": "ListItem", "position": 2, "name": "Why Choose Us", "item": "https://www.camharbor.in/why-choose-us" }
      ]
    }
  };

  return (
    <div className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, webPageSchema]),
        }}
      />
      <header className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Why Choose CamHarbor?</h1>
          <p className={styles.subtitle}>
            We are the best, genuine, and most trusted CCTV installation service in Delhi NCR. 
            Here&apos;s why thousands of customers choose us over others.
          </p>
        </div>
      </header>

      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <div className={styles.breadcrumbContent}>
          <Link href="/" className={styles.link}>Home</Link> &gt;{' '}
          <span className={styles.activeBreadcrumb}>Why Choose Us</span>
        </div>
      </nav>

      <main className={styles.main}>
        {/* Trust Badge Section */}
        <section className={styles.trustSection}>
          <div className={styles.trustBadge}>
            <div className={styles.badgeItem}>
              <div className={styles.badgeNumber}>4.9+</div>
              <div className={styles.badgeLabel}>Rating</div>
            </div>
            <div className={styles.badgeItem}>
              <div className={styles.badgeNumber}>500+</div>
              <div className={styles.badgeLabel}>Reviews</div>
            </div>
            <div className={styles.badgeItem}>
              <div className={styles.badgeNumber}>1000+</div>
              <div className={styles.badgeLabel}>Happy Customers</div>
            </div>
            <div className={styles.badgeItem}>
              <div className={styles.badgeNumber}>1 Year</div>
              <div className={styles.badgeLabel}>Warranty</div>
            </div>
          </div>
        </section>

        {/* Reasons Grid */}
        <section className={styles.reasonsSection}>
          <h2 className={styles.sectionTitle}>Why We Are The Best Choice</h2>
          <div className={styles.reasonsGrid}>
            {reasons.map((reason, index) => (
              <div key={index} className={styles.reasonCard}>
                <div className={styles.reasonIcon}>{reason.icon}</div>
                <h3 className={styles.reasonTitle}>{reason.title}</h3>
                <p className={styles.reasonDescription}>{reason.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Section */}
        <section className={styles.comparisonSection}>
          <h2 className={styles.sectionTitle}>CamHarbor vs Others</h2>
          <div className={styles.comparisonTable}>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonHeader}>Feature</div>
              <div className={styles.comparisonHeader}>CamHarbor</div>
              <div className={styles.comparisonHeader}>Others</div>
            </div>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCell}>Genuine Service</div>
              <div className={styles.comparisonCell}>✓ Yes</div>
              <div className={styles.comparisonCell}>❓ Not Always</div>
            </div>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCell}>Certified Technicians</div>
              <div className={styles.comparisonCell}>✓ Yes</div>
              <div className={styles.comparisonCell}>❓ Varies</div>
            </div>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCell}>1-Year Warranty</div>
              <div className={styles.comparisonCell}>✓ Yes</div>
              <div className={styles.comparisonCell}>❌ Limited</div>
            </div>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCell}>Transparent Pricing</div>
              <div className={styles.comparisonCell}>✓ Yes</div>
              <div className={styles.comparisonCell}>❓ Often Hidden</div>
            </div>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCell}>4.9+ Rating</div>
              <div className={styles.comparisonCell}>✓ Yes</div>
              <div className={styles.comparisonCell}>❓ Lower</div>
            </div>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCell}>24/7 Support</div>
              <div className={styles.comparisonCell}>✓ Yes</div>
              <div className={styles.comparisonCell}>❌ Limited Hours</div>
            </div>
            <div className={styles.comparisonRow}>
              <div className={styles.comparisonCell}>Genuine Parts</div>
              <div className={styles.comparisonCell}>✓ Yes</div>
              <div className={styles.comparisonCell}>❓ Varies</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Ready to Experience the Best?</h2>
            <p className={styles.ctaText}>
              Join thousands of satisfied customers who trust CamHarbor for their security needs. 
              Get a free quote today and see why we are the best choice!
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.ctaButton}>
                Get Free Quote
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

