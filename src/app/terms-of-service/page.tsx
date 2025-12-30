import React from 'react';
import Link from '@/components/Link';
import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Terms of Service - CamHarbor | Service Terms & Conditions',
  description:
    'Read CamHarbor\'s terms of service. Understand the terms and conditions for using our CCTV installation and security services.',
  alternates: { canonical: 'https://www.camharbor.in/terms-of-service' },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.subtitle}>
            Please read these terms carefully before using our services.
          </p>
          <p className={styles.lastUpdated}>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </header>

      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <div className={styles.breadcrumbContent}>
          <Link href="/" className={styles.link}>Home</Link> &gt;{' '}
          <span className={styles.activeBreadcrumb}>Terms of Service</span>
        </div>
      </nav>

      <main className={styles.main}>
        <div className={styles.content}>
          <section className={styles.section}>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using CamHarbor services, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Services Description</h2>
            <p>
              CamHarbor provides professional CCTV installation, repair, maintenance, and security system services 
              across Delhi NCR. Our services include but are not limited to:
            </p>
            <ul>
              <li>CCTV camera installation and configuration</li>
              <li>Security camera repair and maintenance</li>
              <li>Access control system installation</li>
              <li>Video door phone installation</li>
              <li>Electrical services related to security systems</li>
              <li>Annual Maintenance Contracts (AMC)</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. Service Booking and Payment</h2>
            <p>
              <strong>Booking:</strong> Service bookings can be made through our website, phone, or WhatsApp. 
              We will confirm your appointment and provide an estimated time of arrival.
            </p>
            <p>
              <strong>Payment:</strong> Payment terms will be discussed and agreed upon before service commencement. 
              We accept cash, UPI, and bank transfers. Full payment is typically due upon completion of service, 
              unless otherwise agreed.
            </p>
            <p>
              <strong>Quotes:</strong> All quotes are valid for 30 days and are subject to change based on site 
              conditions and requirements discovered during inspection.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. Warranty and Guarantee</h2>
            <p>
              <strong>Installation Warranty:</strong> We provide a 1-year warranty on all installation work, 
              covering both labor and parts (for parts supplied by us).
            </p>
            <p>
              <strong>Product Warranty:</strong> Products come with manufacturer warranties. We will assist 
              you in claiming manufacturer warranties if needed.
            </p>
            <p>
              <strong>Warranty Limitations:</strong> Warranty does not cover damage caused by:
            </p>
            <ul>
              <li>Misuse, abuse, or unauthorized modifications</li>
              <li>Natural disasters, accidents, or acts of God</li>
              <li>Power surges or electrical issues beyond our control</li>
              <li>Normal wear and tear</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>5. Customer Responsibilities</h2>
            <p>As a customer, you agree to:</p>
            <ul>
              <li>Provide accurate information about your service requirements</li>
              <li>Ensure safe and accessible work areas for our technicians</li>
              <li>Obtain necessary permissions and approvals for installation work</li>
              <li>Make timely payments as agreed</li>
              <li>Follow usage instructions provided by our technicians</li>
              <li>Report any issues or concerns promptly</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>6. Service Limitations</h2>
            <p>
              While we strive to provide the best service, we cannot guarantee:
            </p>
            <ul>
              <li>Exact arrival times due to traffic, weather, or unforeseen circumstances</li>
              <li>Compatibility with all existing systems or infrastructure</li>
              <li>Results if customer-provided equipment is faulty or incompatible</li>
              <li>Service in areas outside our service coverage</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>7. Cancellation and Refund Policy</h2>
            <p>
              <strong>Cancellation:</strong> You may cancel or reschedule your appointment with at least 24 hours notice. 
              Cancellations made less than 24 hours before the scheduled time may incur a cancellation fee.
            </p>
            <p>
              <strong>Refunds:</strong> Refunds are provided in accordance with our refund policy:
            </p>
            <ul>
              <li>Full refund if service is cancelled before work begins</li>
              <li>Partial refund based on work completed if service is cancelled mid-way</li>
              <li>No refund for completed services unless covered under warranty</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>8. Liability and Indemnification</h2>
            <p>
              <strong>Limitation of Liability:</strong> Our liability is limited to the value of the service provided. 
              We are not liable for indirect, incidental, or consequential damages.
            </p>
            <p>
              <strong>Indemnification:</strong> You agree to indemnify and hold CamHarbor harmless from any claims, 
              damages, or expenses arising from your use of our services or violation of these terms.
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. Intellectual Property</h2>
            <p>
              All content on our website, including text, graphics, logos, and software, is the property of 
              CamHarbor and is protected by copyright and other intellectual property laws. You may not reproduce, 
              distribute, or use our content without written permission.
            </p>
          </section>

          <section className={styles.section}>
            <h2>10. Privacy</h2>
            <p>
              Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy 
              to understand how we collect, use, and protect your information.
            </p>
          </section>

          <section className={styles.section}>
            <h2>11. Dispute Resolution</h2>
            <p>
              In case of any disputes, we encourage you to contact us first to resolve the issue amicably. 
              If a resolution cannot be reached, disputes will be subject to the jurisdiction of courts in Delhi, India.
            </p>
          </section>

          <section className={styles.section}>
            <h2>12. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective 
              immediately upon posting on our website. Your continued use of our services after changes 
              constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className={styles.section}>
            <h2>13. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us:
            </p>
            <div className={styles.contactInfo}>
              <p><strong>CamHarbor</strong></p>
              <p>Email: <a href="mailto:info@camharbor.in">info@camharbor.in</a></p>
              <p>Phone: <a href="tel:+918766203976">+91-87662-03976</a></p>
              <p>Address: Delhi NCR, India</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

