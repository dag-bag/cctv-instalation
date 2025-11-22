import Link from 'next/link';
import { BUSINESS_CONFIG } from '@/config/business';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          {BUSINESS_CONFIG.name}
        </Link>
        
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/services/delhi" className={styles.navLink}>Services</Link>
          <Link href="/html-sitemap" className={styles.navLink}>Site Index</Link>
          <a href={`tel:${BUSINESS_CONFIG.phone}`} className={styles.ctaButton}>
            Call Now
          </a>
        </nav>
      </div>
    </header>
  );
}
