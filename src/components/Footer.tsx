import Link from 'next/link';
import { BUSINESS_CONFIG } from '@/config/business';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* About */}
          <div className={styles.column}>
            <h3>{BUSINESS_CONFIG.name}</h3>
            <p className={styles.text}>
              Professional CCTV installation and security solutions for homes and businesses across Delhi NCR.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h3>Quick Links</h3>
            <ul className={styles.linkList}>
              <li><Link href="/" className={styles.link}>Home</Link></li>
              <li><Link href="/services/delhi" className={styles.link}>Services</Link></li>
              <li><Link href="/html-sitemap" className={styles.link}>Site Index</Link></li>
              <li><Link href="/privacy-policy" className={styles.link}>Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.column}>
            <h3>Contact Us</h3>
            <div className={styles.contactItem}>
              <span className={styles.icon}>📞</span>
              <a href={`tel:${BUSINESS_CONFIG.phone}`} className={styles.link}>{BUSINESS_CONFIG.phone}</a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.icon}>✉️</span>
              <a href={`mailto:${BUSINESS_CONFIG.email}`} className={styles.link}>{BUSINESS_CONFIG.email}</a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.icon}>📍</span>
              <span>Delhi NCR, India</span>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          © {currentYear} {BUSINESS_CONFIG.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
