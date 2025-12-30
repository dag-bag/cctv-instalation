import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { CITIES, LOCALITIES, SERVICES, generateQuerySlugs } from '../../lib/seo-data';
import styles from '../page.module.css';

const ITEMS_PER_PAGE = 1000;

// Calculate total links
function getTotalLinks() {
  let total = 0;
  const BRANDS = ['Hikvision','CP Plus','Dahua','Honeywell','Bosch','Panasonic','Godrej','Samsung','Sony','Tiandy','Uniview','Ezviz'];
  const REPAIR_ISSUES = ['camera-not-working','no-signal','blur-image','recording-issue','mobile-view-setup','dvr-hard-disk-replacement','password-reset','online-configuration','cable-repair','power-supply-repair'];
  const INDUSTRIES = ['Hospitals & Clinics','Schools & Colleges','Restaurants & Cafes','Retail Stores','Warehouses & Manufacturing','Offices & Corporate','Hotels & Guesthouses','Construction Sites','Event Venues & Auditoriums','Housing Societies','Smart Homes','Temples & Religious Places','Transport Hubs','Banks & ATMs','Gyms & Fitness Centers','Parking Lots','Car Dealerships','Co-Working Spaces','Fuel Stations & Petrol Pumps','Salons & Spas','Coaching Centers','Markets & Street Food','IT Parks & Tech Hubs','Wedding Halls & Banquets','Pharmacies & Medical Stores','Jewelry Stores','E-commerce Warehouses'];
  CITIES.forEach((city) => {
    total++;
    const localities = LOCALITIES[city] || [];
    localities.forEach(() => {
      total++;
      total += SERVICES.length;
      total += BRANDS.length;
      total += REPAIR_ISSUES.length;
      total += INDUSTRIES.length;
    });
  });
  total += generateQuerySlugs().length;
  return total;
}

export const metadata: Metadata = {
  title: 'Site Map - All CCTV Services | CamHarbor',
  description: 'Find all CCTV services. Browse by city or area. We work in Delhi NCR.',
  robots: 'index, follow',
  openGraph: {
    title: 'Site Map - All CCTV Services',
    description: 'Find all CCTV services by city and area',
    type: 'website',
  },
  alternates: { canonical: 'https://www.camharbor.in/html-sitemap' },
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
          <h1 className={styles.sectionTitle}>Site Map</h1>
          <p className={styles.sectionSubtitle}>
            Find all our CCTV services. Pick a city or area.
            <br />
            <span style={{ fontSize: '0.9em', opacity: 0.8 }}>
              Total links: <strong>{totalLinks.toLocaleString()}</strong>. Total pages: <strong>{totalPages}</strong>.
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
              We have <strong>{totalLinks.toLocaleString()}</strong> service pages. They are split into {totalPages} pages.
              <br />
              We work in <strong>{CITIES.length}</strong> cities. We offer <strong>{SERVICES.length}</strong> services in Delhi NCR.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
