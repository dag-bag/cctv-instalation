
import { getImageProps } from 'next/image';
import { BUSINESS_CONFIG } from '@/config/business';
import styles from './Header.module.css';
import Link from './Link';

export default function Header() {
  const common = { alt: BUSINESS_CONFIG.name, priority: true };
  
  const {
    props: { srcSet: desktopSrcSet, ...rest },
  } = getImageProps({
    ...common,
    width: 160,
    height: 40,
    src: '/logo/desktop.webp',
  });

  const {
    props: { srcSet: mobileSrcSet },
  } = getImageProps({
    ...common,
    width: 40,
    height: 40,
    src: '/logo/mobile.webp',
  });

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
        <div className={styles.logoWrapper}>
          <picture>
            <source media="(max-width: 768px)" srcSet={mobileSrcSet} />
            <source media="(min-width: 769px)" srcSet={desktopSrcSet} />
            <img 
              {...rest} 
              className={styles.logoImage} 
              alt={BUSINESS_CONFIG.name}
            />
          </picture>
        </div>
        </Link>
        
        <nav className={styles.nav}>
          {/* Mobile Actions */}
          <div className={styles.mobileActions}>
            <a 
              href={`tel:${BUSINESS_CONFIG.phone}`} 
              className={`${styles.mobileBtn} ${styles.mobileCall}`}
              aria-label="Call Now"
            >
              📞
            </a>
            <a 
              href={`https://wa.me/${BUSINESS_CONFIG.whatsapp.replace(/[^0-9]/g, "")}`} 
              className={`${styles.mobileBtn} ${styles.mobileWhatsapp}`}
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬
            </a>
          </div>

          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/services" className={styles.navLink}>Services</Link>
          <Link href="/html-sitemap" className={styles.navLink}>Site Index</Link>
          <a href={`tel:${BUSINESS_CONFIG.phone}`} className={styles.ctaButton}>
            Call Now
          </a>
        </nav>
      </div>
    </header>
  );
}
