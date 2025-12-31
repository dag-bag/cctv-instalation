import Link from 'next/link';
import { getBrandRoutes, getRepairRoutes, getIndustryRoutes } from '@/lib/static-routes';
import styles from './SiteNavigation.module.css';

export default function SiteNavigation() {
  const allBrands = getBrandRoutes();
  const allRepairs = getRepairRoutes();
  const allIndustries = getIndustryRoutes();

  return (
    <nav className={styles.siteNav} aria-label="Site Navigation for Search Engines">
      <div className={styles.container}>
        {/* Main Category Links - Always Visible */}
        <div className={styles.mainCategories}>
          <Link href="/services" className={styles.categoryLink} aria-label="Browse All Services">
            <span className={styles.categoryText}>All Services</span>
          </Link>
          <Link href="/brands" className={styles.categoryLink} aria-label="Browse CCTV Brands">
            <span className={styles.categoryText}>CCTV Brands</span>
          </Link>
          <Link href="/repairs" className={styles.categoryLink} aria-label="Browse Repair Services">
            <span className={styles.categoryText}>Repair Services</span>
          </Link>
          <Link href="/industries" className={styles.categoryLink} aria-label="Browse Industries">
            <span className={styles.categoryText}>Industries</span>
          </Link>
        </div>

        {/* Expanded Links - SEO Crawler Friendly, Compact Banner Display */}
        <div className={styles.expandedLinks}>
          {/* Services Section */}
          <section className={styles.linkGroup}>
            <span className={styles.linkGroupTitle}>Cities:</span>
            <ul className={styles.linkGroupItems}>
              <li><Link href="/services/delhi" className={styles.subLink}>Delhi</Link></li>
              <li><Link href="/services/gurgaon" className={styles.subLink}>Gurgaon</Link></li>
              <li><Link href="/services/noida" className={styles.subLink}>Noida</Link></li>
              <li><Link href="/services/ghaziabad" className={styles.subLink}>Ghaziabad</Link></li>
              <li><Link href="/services/faridabad" className={styles.subLink}>Faridabad</Link></li>
              <li><Link href="/services/greater-noida" className={styles.subLink}>Greater Noida</Link></li>
            </ul>
          </section>

          {/* Brands Section */}
          <section className={styles.linkGroup}>
            <span className={styles.linkGroupTitle}>Brands:</span>
            <ul className={styles.linkGroupItems}>
              {allBrands.map((brand) => (
                <li key={brand.url}>
                  <Link href={brand.url} className={styles.subLink} aria-label={`${brand.label} CCTV Installation`}>
                    {brand.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Repairs Section */}
          <section className={styles.linkGroup}>
            <span className={styles.linkGroupTitle}>Repairs:</span>
            <ul className={styles.linkGroupItems}>
              {allRepairs.map((repair) => (
                <li key={repair.url}>
                  <Link href={repair.url} className={styles.subLink} aria-label={`${repair.label} Repair Service`}>
                    {repair.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Industries Section */}
          <section className={styles.linkGroup}>
            <span className={styles.linkGroupTitle}>Industries:</span>
            <ul className={styles.linkGroupItems}>
              {allIndustries.map((industry) => (
                <li key={industry.url}>
                  <Link href={industry.url} className={styles.subLink} aria-label={`CCTV Services for ${industry.label}`}>
                    {industry.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </nav>
  );
}

