import React from 'react';
import Link from '@/components/Link';
import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy - CamHarbor | Data Protection & Privacy',
  description:
    'Read CamHarbor\'s privacy policy. Learn how we collect, use, and protect your personal information when you use our CCTV installation and security services.',
  alternates: { canonical: 'https://www.camharbor.in/privacy-policy' },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.subtitle}>
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className={styles.lastUpdated}>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </header>

      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        <div className={styles.breadcrumbContent}>
          <Link href="/" className={styles.link}>Home</Link> &gt;{' '}
          <span className={styles.activeBreadcrumb}>Privacy Policy</span>
        </div>
      </nav>

      <main className={styles.main}>
        <div className={styles.content}>
          <section className={styles.section}>
            <h2>1. Information We Collect</h2>
            <p>
              When you use CamHarbor services, we may collect the following types of information:
            </p>
            <ul>
              <li><strong>Personal Information:</strong> Name, phone number, email address, and address when you request our services or contact us.</li>
              <li><strong>Service Information:</strong> Details about the CCTV installation, repair, or security services you require.</li>
              <li><strong>Technical Information:</strong> IP address, browser type, device information, and website usage data.</li>
              <li><strong>Communication Records:</strong> Records of your communications with us, including phone calls, emails, and messages.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>2. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul>
              <li>To provide, maintain, and improve our CCTV installation and security services</li>
              <li>To process your service requests and schedule appointments</li>
              <li>To communicate with you about your service requests, inquiries, and updates</li>
              <li>To send you important information about our services, promotions, and offers (with your consent)</li>
              <li>To respond to your questions, comments, and feedback</li>
              <li>To ensure the security and safety of our services</li>
              <li>To comply with legal obligations and resolve disputes</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. Information Sharing and Disclosure</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
            <ul>
              <li><strong>Service Providers:</strong> We may share information with trusted service providers who assist us in operating our business, such as payment processors and email service providers.</li>
              <li><strong>Legal Requirements:</strong> We may disclose information if required by law, court order, or government regulation.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.</li>
              <li><strong>With Your Consent:</strong> We may share your information with your explicit consent.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
            <p>
              We use industry-standard encryption and security protocols to safeguard your data. Our team is trained in data protection practices, and we regularly review and update our security measures.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Your Rights</h2>
            <p>You have the following rights regarding your personal information:</p>
            <ul>
              <li><strong>Access:</strong> You can request access to the personal information we hold about you.</li>
              <li><strong>Correction:</strong> You can request correction of inaccurate or incomplete information.</li>
              <li><strong>Deletion:</strong> You can request deletion of your personal information, subject to legal and contractual obligations.</li>
              <li><strong>Objection:</strong> You can object to the processing of your personal information for certain purposes.</li>
              <li><strong>Data Portability:</strong> You can request a copy of your data in a structured, machine-readable format.</li>
            </ul>
            <p>To exercise these rights, please contact us at <a href="mailto:info@camharbor.in">info@camharbor.in</a> or call us at <a href="tel:+918766203976">+91-87662-03976</a>.</p>
          </section>

          <section className={styles.section}>
            <h2>6. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small text files stored on your device that help us remember your preferences and improve our services.
            </p>
            <p>
              You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on this page and updating the "Last Updated" date.
            </p>
            <p>
              We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
            </p>
          </section>

          <section className={styles.section}>
            <h2>10. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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

