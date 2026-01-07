import Link from '@/components/Link';
import styles from './page.module.css'; // Reusing homepage styles for consistency

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div style={{ 
        minHeight: '60vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem', color: '#e2e8f0' }}>404</h1>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#94a3b8' }}>Page Not Found</h2>
        <p style={{ maxWidth: '500px', marginBottom: '2rem', color: '#cbd5e1' }}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link href="/" style={{ 
            padding: '0.75rem 1.5rem', 
            backgroundColor: '#3b82f6', 
            color: 'white', 
            borderRadius: '0.5rem', 
            textDecoration: 'none',
            fontWeight: '600'
          }}>
            Go Home
          </Link>
          <Link href="/services/delhi" style={{ 
            padding: '0.75rem 1.5rem', 
            backgroundColor: 'transparent', 
            border: '1px solid #475569',
            color: '#e2e8f0', 
            borderRadius: '0.5rem', 
            textDecoration: 'none',
            fontWeight: '600'
          }}>
            View Services
          </Link>
        </div>
      </div>
    </div>
  );
}
