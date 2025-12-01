'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface UrlEntry {
  city: string;
  cityName: string;
  locality: string;
  localityName: string;
  service: string;
  serviceName: string;
  url: string;
}

export default function UrlTester() {
  const [urls, setUrls] = useState<UrlEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'cities' | 'localities' | 'services'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await fetch('/api/locations');
        if (!response.ok) {
          throw new Error('Failed to fetch URLs');
        }
        const data = await response.json();
        if (data.success) {
          setUrls(data.data);
        } else {
          throw new Error(data.error || 'Failed to load URLs');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching URLs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUrls();
  }, []);

  // Get unique cities, localities, and services for filtering
  const cities = [...new Set(urls.map(entry => entry.city))];
  const localities = [...new Set(urls.map(entry => entry.locality))];
  const services = [...new Set(urls.map(entry => entry.service))];

  // Filter URLs based on active tab and search term
  const filteredUrls = urls.filter(entry => {
    const matchesSearch = 
      entry.cityName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.localityName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.url.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeTab === 'cities') {
      return matchesSearch && entry.url.split('/').length === 3;
    } else if (activeTab === 'localities') {
      return matchesSearch && entry.url.split('/').length === 4;
    } else if (activeTab === 'services') {
      return matchesSearch && entry.url.split('/').length === 5;
    }
    return matchesSearch;
  });

  // Grouping logic can be added here if needed

  if (loading) {
    return (
      <div style={styles.loading}>
        <div style={styles.spinner}></div>
        <p>Loading URLs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.error}>
        <h2>Error Loading URLs</h2>
        <p>{error}</p>
        <button 
          onClick={() => window.location.reload()}
          style={styles.retryButton}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>URL Tester</h1>
      <p style={styles.subtitle}>
        Click on any link to test if it is working. {urls.length} URLs available.
      </p>

      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search URLs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
      </div>

      <div style={styles.tabs}>
        <button
          onClick={() => setActiveTab('all')}
          style={activeTab === 'all' ? styles.activeTab : styles.tab}
        >
          All URLs ({urls.length})
        </button>
        <button
          onClick={() => setActiveTab('cities')}
          style={activeTab === 'cities' ? styles.activeTab : styles.tab}
        >
          Cities ({cities.length})
        </button>
        <button
          onClick={() => setActiveTab('localities')}
          style={activeTab === 'localities' ? styles.activeTab : styles.tab}
        >
          Localities ({localities.length})
        </button>
        <button
          onClick={() => setActiveTab('services')}
          style={activeTab === 'services' ? styles.activeTab : styles.tab}
        >
          Services ({services.length})
        </button>
      </div>

      <div style={styles.urlList}>
        {filteredUrls.length === 0 ? (
          <p style={styles.noResults}>No URLs found matching your search.</p>
        ) : (
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Type</th>
                <th style={styles.th}>City</th>
                <th style={styles.th}>Locality</th>
                <th style={styles.th}>Service</th>
                <th style={styles.th}>URL</th>
              </tr>
            </thead>
            <tbody>
              {filteredUrls.map((entry, index) => {
                const urlType = 
                  entry.url.split('/').length === 3 ? 'City' :
                  entry.url.split('/').length === 4 ? 'Locality' : 'Service';
                
                return (
                  <tr key={index} style={styles.tr}>
                    <td style={styles.td}>
                      <span style={styles[`${urlType.toLowerCase()}Badge` as keyof typeof styles]}>
                        {urlType}
                      </span>
                    </td>
                    <td style={styles.td}>{entry.cityName}</td>
                    <td style={styles.td}>{entry.localityName}</td>
                    <td style={styles.td}>{entry.serviceName || '-'}</td>
                    <td style={styles.td}>
                      <Link 
                        href={entry.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.link}
                      >
                        {entry.url}
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1rem',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    color: '#1a365d',
    marginBottom: '0.5rem',
  },
  subtitle: {
    color: '#4a5568',
    marginBottom: '2rem',
  },
  searchContainer: {
    marginBottom: '1.5rem',
  },
  searchInput: {
    width: '100%',
    padding: '0.75rem',
    fontSize: '1rem',
    border: '1px solid #e2e8f0',
    borderRadius: '0.375rem',
    outline: 'none',
  },
  tabs: {
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '1.5rem',
    overflowX: 'auto',
    paddingBottom: '0.5rem',
  },
  tab: {
    padding: '0.5rem 1rem',
    backgroundColor: '#f7fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '0.375rem',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },
  activeTab: {
    padding: '0.5rem 1rem',
    backgroundColor: '#4299e1',
    color: 'white',
    border: '1px solid #4299e1',
    borderRadius: '0.375rem',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },
  urlList: {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    backgroundColor: '#f7fafc',
    padding: '0.75rem 1rem',
    textAlign: 'left',
    borderBottom: '1px solid #e2e8f0',
    fontWeight: 600,
    color: '#4a5568',
  },
  tr: {},  
  td: {
    padding: '0.75rem 1rem',
    borderBottom: '1px solid #edf2f7',
    verticalAlign: 'middle',
  },
  link: {
    color: '#3182ce',
    textDecoration: 'none',
  },
  cityBadge: {
    display: 'inline-block',
    backgroundColor: '#ebf8ff',
    color: '#2b6cb0',
    padding: '0.25rem 0.5rem',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: 600,
  },
  localityBadge: {
    display: 'inline-block',
    backgroundColor: '#f0fff4',
    color: '#2f855a',
    padding: '0.25rem 0.5rem',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: 600,
  },
  serviceBadge: {
    display: 'inline-block',
    backgroundColor: '#fffaf0',
    color: '#c05621',
    padding: '0.25rem 0.5rem',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: 600,
  },
  loading: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
    fontFamily: 'Arial, sans-serif',
  },
  spinner: {
    border: '4px solid rgba(0, 0, 0, 0.1)',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    borderLeftColor: '#3182ce',
    animation: 'spin 1s linear infinite',
    marginBottom: '1rem',
  },
  error: {
    maxWidth: '600px',
    margin: '2rem auto',
    padding: '2rem',
    backgroundColor: '#fff5f5',
    border: '1px solid #fed7d7',
    borderRadius: '0.5rem',
    color: '#e53e3e',
    textAlign: 'center',
  },
  retryButton: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#e53e3e',
    color: 'white',
    border: 'none',
    borderRadius: '0.375rem',
    cursor: 'pointer',
  },
  noResults: {
    padding: '2rem',
    textAlign: 'center',
    color: '#718096',
  },
} as const;
