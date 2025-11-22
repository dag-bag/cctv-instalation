import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { CITIES, LOCALITIES, SERVICES, createSlug } from '../../lib/seo-data';
import styles from '../page.module.css'; // Reuse homepage styles for consistency

export const metadata: Metadata = {
  title: 'HTML Sitemap - All Services & Locations',
  description: 'Comprehensive list of all CCTV installation and repair services across Delhi NCR locations.',
  robots: 'noindex, follow', // We want bots to follow links, but maybe not index this utility page itself high in rankings
};

export default function HtmlSitemap() {
  return (
    <div className={styles.container}>
      <main className={styles.section}>
        <div className={styles.content}>
          <h1 className={styles.sectionTitle}>Site Index</h1>
          <p className={styles.sectionSubtitle}>
            Complete directory of our services across all locations.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {CITIES.map((city) => (
              <div key={city} className={styles.locationCard} style={{ textAlign: 'left', cursor: 'default' }}>
                <h2 className={styles.locationName} style={{ borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>
                  <Link href={`/services/${createSlug(city)}`} className={styles.locationLink}>
                    {city}
                  </Link>
                </h2>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem', marginTop: '1.5rem' }}>
                  {(LOCALITIES[city] || []).map((locality) => (
                    <div key={locality}>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#cbd5e1', marginBottom: '0.5rem' }}>
                        <Link href={`/services/${createSlug(city)}/${createSlug(locality)}`} className={styles.link}>
                          {locality}
                        </Link>
                      </h3>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {SERVICES.map((service) => (
                          <li key={service} style={{ marginBottom: '0.25rem' }}>
                            <Link 
                              href={`/services/${createSlug(city)}/${createSlug(locality)}/${createSlug(service)}`}
                              style={{ fontSize: '0.9rem', color: '#94a3b8', textDecoration: 'none' }}
                              className={styles.link}
                            >
                              {service}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
