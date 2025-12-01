import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { CITIES, LOCALITIES, SERVICES, generateQuerySlugs } from '../../lib/seo-data';
import styles from '../page.module.css';

const ITEMS_PER_PAGE = 1000;

// Calculate total links
function getTotalLinks() {
  let total = 0;
  CITIES.forEach((city) => {
    total++; // City page
    const localities = LOCALITIES[city] || [];
    localities.forEach(() => {
      total++; // Locality page
      total += SERVICES.length; // Service pages
    });
  });
  // Include hyphen-based SEO query slugs
  total += generateQuerySlugs().length;
  return total;
}

export const metadata: Metadata = {
  title: 'HTML Sitemap - All CCTV Installation Services & Locations | Complete Site Index',
  description: 'Complete HTML sitemap of all CCTV installation, repair, and security camera services across Delhi NCR. Browse all cities, localities, and services for easy navigation and SEO.',
  robots: 'index, follow',
  openGraph: {
    title: 'HTML Sitemap - All CCTV Services & Locations',
    description: 'Complete directory of CCTV installation services across Delhi NCR',
    type: 'website',
  },
};

export default function HtmlSitemapIndex() {
  const totalLinks = getTotalLinks();
  const totalPages = Math.ceil(totalLinks / ITEMS_PER_PAGE);
  
  // Generate page numbers array
  const pageLinks = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.container}>
      <main className={styles.section}>
        <div className={styles.content}>
          <h1 className={styles.sectionTitle}>HTML Sitemap</h1>
          <p className={styles.sectionSubtitle}>
            Complete directory of all our CCTV installation and repair services across Delhi NCR.
            <br />
            <span style={{ fontSize: '0.9em', opacity: 0.8 }}>
              Total URLs: <strong>{totalLinks.toLocaleString()}</strong> | Organized across <strong>{totalPages}</strong> pages
            </span>
          </p>

          <div style={{ marginTop: '3rem' }}>
            <h2 
              className={styles.sectionTitle} 
              style={{ fontSize: '1.5rem', marginBottom: '2rem' }}
            >
              Browse All Pages
            </h2>
            <div 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', 
                gap: '1rem',
                maxWidth: '1200px',
                margin: '0 auto'
              }}
            >
              {pageLinks.map((pageNum) => (
                <Link
                  key={pageNum}
                  href={`/html-sitemap/${pageNum}`}
                  className={styles.button}
                  style={{
                    padding: '1.5rem',
                    textAlign: 'center',
                    fontSize: '1rem',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    background: 'rgba(59, 130, 246, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                  }}
                >
                  <div style={{ fontWeight: '600', marginBottom: '0.5rem' }}>
                    Page {pageNum}
                  </div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.7 }}>
                    URLs: {((pageNum - 1) * ITEMS_PER_PAGE + 1).toLocaleString()} - {Math.min(pageNum * ITEMS_PER_PAGE, totalLinks).toLocaleString()}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* SEO Footer */}
          <div 
            style={{ 
              marginTop: '4rem', 
              padding: '2rem', 
              background: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '8px',
              textAlign: 'center' 
            }}
          >
            <p style={{ fontSize: '0.9rem', opacity: 0.8, margin: '0' }}>
              📍 All <strong>{totalLinks.toLocaleString()}</strong> service pages are organized across {totalPages} sitemap pages for optimal performance and SEO.
              <br />
              Covering <strong>{CITIES.length}</strong> cities with <strong>{SERVICES.length}</strong> different services across Delhi NCR.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
