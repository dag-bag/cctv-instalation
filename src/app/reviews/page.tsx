import React from 'react';
import Link from '@/components/Link';
import { Metadata } from 'next';
import { BUSINESS_CONFIG } from '@/config/business';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Customer Reviews & Testimonials - CamHarbor | Trusted CCTV Services',
  description:
    'Read genuine customer reviews and testimonials for CamHarbor CCTV installation services. 4.9+ rating with 500+ satisfied customers across Delhi NCR. See why we are the best!',
  alternates: { canonical: 'https://www.camharbor.in/reviews' },
  openGraph: {
    type: 'website',
    url: 'https://www.camharbor.in/reviews',
    title: 'Customer Reviews - CamHarbor Security Services',
    description:
      'Read genuine reviews from satisfied customers. 4.9+ rating with expert CCTV installation and security services.',
  },
};

const reviews = [
  {
    name: 'Rajesh Kumar',
    location: 'Rohini, Delhi',
    rating: 5,
    service: 'CCTV Installation',
    date: '2024-01-15',
    text: 'Excellent service! The team installed 8 cameras at my home with professional wiring. Very clean work and they explained everything clearly. Highly recommended!',
    verified: true,
  },
  {
    name: 'Priya Sharma',
    location: 'Sector 56, Gurgaon',
    rating: 5,
    service: 'CCTV Repair',
    date: '2024-01-10',
    text: 'My CCTV system stopped working suddenly. CamHarbor sent a technician the same day. He fixed the issue quickly and also cleaned all cameras. Great service!',
    verified: true,
  },
  {
    name: 'Amit Verma',
    location: 'Noida Sector 62',
    rating: 5,
    service: 'Access Control System',
    date: '2024-01-05',
    text: 'Installed biometric access control for our office. Professional installation, good quality products, and excellent after-sales support. Worth every rupee!',
    verified: true,
  },
  {
    name: 'Sunita Devi',
    location: 'Indirapuram, Ghaziabad',
    rating: 5,
    service: 'Video Door Phone',
    date: '2023-12-28',
    text: 'Got video door phone installed for our apartment. The technician was very polite and did the installation without any mess. The system works perfectly!',
    verified: true,
  },
  {
    name: 'Vikram Singh',
    location: 'Faridabad',
    rating: 5,
    service: 'CCTV AMC',
    date: '2023-12-20',
    text: 'Taking AMC service from CamHarbor for 2 years now. Regular maintenance, quick response, and genuine spare parts. Very satisfied with their service.',
    verified: true,
  },
  {
    name: 'Anjali Mehta',
    location: 'Dwarka, Delhi',
    rating: 5,
    service: 'CCTV Installation',
    date: '2023-12-15',
    text: 'Installed CCTV cameras for my shop. The team was professional, completed the work on time, and provided training on using the system. Excellent experience!',
    verified: true,
  },
  {
    name: 'Ramesh Patel',
    location: 'Greater Noida',
    rating: 5,
    service: 'Security Camera Repair',
    date: '2023-12-10',
    text: 'One of my cameras was not working. Called CamHarbor and they sent a technician within 2 hours. Fixed the issue and also checked all other cameras. Great service!',
    verified: true,
  },
  {
    name: 'Kavita Reddy',
    location: 'Saket, Delhi',
    rating: 5,
    service: 'CCTV Installation',
    date: '2023-12-05',
    text: 'Best CCTV installation service in Delhi! Professional team, quality products, and excellent customer support. Highly recommend CamHarbor to everyone.',
    verified: true,
  },
  {
    name: 'Mohammad Ali',
    location: 'Laxmi Nagar, Delhi',
    rating: 5,
    service: 'Electrical Services',
    date: '2023-11-28',
    text: 'Needed electrical work along with CCTV installation. CamHarbor handled everything professionally. Clean work, proper wiring, and all safety measures followed.',
    verified: true,
  },
  {
    name: 'Deepak Joshi',
    location: 'Pitampura, Delhi',
    rating: 5,
    service: 'CCTV Installation',
    date: '2023-11-20',
    text: 'Installed 12 cameras for our warehouse. The team worked efficiently, completed installation in one day, and provided mobile app access. Very happy with the service!',
    verified: true,
  },
];

const aggregateRating = {
  ratingValue: 4.9,
  reviewCount: 527,
  bestRating: 5,
  worstRating: 1,
};

export default function ReviewsPage() {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": BUSINESS_CONFIG.name,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "House No. 110, C2 Block, Street No. 3, Mahavir Enclave Part-1, Palam",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110045",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating.ratingValue.toString(),
      "reviewCount": aggregateRating.reviewCount.toString(),
      "bestRating": aggregateRating.bestRating.toString(),
      "worstRating": aggregateRating.worstRating.toString()
    },
    "review": reviews.map((review) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.name
      },
      "datePublished": review.date,
      "reviewBody": review.text,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      }
    }))
  };

  return (
    <div className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewSchema),
        }}
      />
      <header className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Customer Reviews & Testimonials</h1>
          <p className={styles.subtitle}>
            See why thousands of customers trust CamHarbor for their CCTV and security needs. 
            Genuine reviews from real customers across Delhi NCR.
          </p>
          <div className={styles.ratingBadge}>
            <div className={styles.ratingStars}>
              {'⭐'.repeat(5)}
            </div>
            <div className={styles.ratingValue}>
              <strong>{aggregateRating.ratingValue}</strong> / 5.0
            </div>
            <div className={styles.ratingCount}>
              Based on {aggregateRating.reviewCount}+ verified reviews
            </div>
          </div>
        </div>
      </header>

      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <div className={styles.breadcrumbContent}>
          <Link href="/" className={styles.link}>Home</Link> &gt;{' '}
          <span className={styles.activeBreadcrumb}>Reviews</span>
        </div>
      </nav>

      <main className={styles.main}>
        <section className={styles.reviewsSection}>
          <div className={styles.reviewsGrid}>
            {reviews.map((review, index) => (
              <div key={index} className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                  <div className={styles.reviewerInfo}>
                    <div className={styles.reviewerName}>{review.name}</div>
                    <div className={styles.reviewerLocation}>📍 {review.location}</div>
                  </div>
                  <div className={styles.reviewRating}>
                    {'⭐'.repeat(review.rating)}
                  </div>
                </div>
                <div className={styles.reviewService}>
                  Service: <strong>{review.service}</strong>
                </div>
                <p className={styles.reviewText}>{review.text}</p>
                <div className={styles.reviewFooter}>
                  <span className={styles.reviewDate}>{review.date}</span>
                  {review.verified && (
                    <span className={styles.verifiedBadge}>✓ Verified Customer</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Join Our Happy Customers!</h2>
            <p className={styles.ctaText}>
              Experience the same quality service that earned us 4.9+ stars. 
              Get a free quote today!
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.ctaButton}>
                Get Free Quote
              </Link>
              <a
                href={BUSINESS_CONFIG.googleReview}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButtonOutline}
              >
                Leave a Review
              </a>
            </div>
          </div>
        </section>

        <section className={styles.trustSection}>
          <h2 className={styles.sectionTitle}>Why Customers Trust CamHarbor</h2>
          <div className={styles.trustGrid}>
            <div className={styles.trustCard}>
              <div className={styles.trustIcon}>✓</div>
              <h3>Genuine Reviews</h3>
              <p>All reviews are from verified customers who have used our services.</p>
            </div>
            <div className={styles.trustCard}>
              <div className={styles.trustIcon}>⭐</div>
              <h3>4.9+ Rating</h3>
              <p>Consistently high ratings from hundreds of satisfied customers.</p>
            </div>
            <div className={styles.trustCard}>
              <div className={styles.trustIcon}>🛡️</div>
              <h3>Trusted Service</h3>
              <p>Years of experience serving thousands of customers across Delhi NCR.</p>
            </div>
            <div className={styles.trustCard}>
              <div className={styles.trustIcon}>💯</div>
              <h3>100% Satisfaction</h3>
              <p>We stand behind our work with 1-year warranty and excellent support.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

