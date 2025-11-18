import { getAllLocationsWithLocalities } from '@/data/locations';
import Link from 'next/link';

export default function ServicesPage() {
  // Get all locations and filter out localities
  const allLocations = getAllLocationsWithLocalities();
  const cities = allLocations.filter(location => !location.isLocality);

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem 1rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '2rem',
        color: '#1a365d'
      }}>
        Our Service Areas
      </h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1.5rem',
        marginTop: '1.5rem'
      }}>
        {cities.map(city => (
          <div 
            key={city.slug}
            style={{
              border: '1px solid #e2e8f0',
              borderRadius: '0.5rem',
              padding: '1.5rem',
              backgroundColor: 'white',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}
          >
            <h2 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: '#2d3748'
            }}>
              <Link 
                href={`/services/${city.slug}`}
                style={{
                  color: 'inherit',
                  textDecoration: 'none',
                  ':hover': {
                    textDecoration: 'underline',
                    color: '#2b6cb0'
                  }
                }}
              >
                {city.name}
              </Link>
            </h2>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <Link 
                href={`/services/${city.slug}`}
                style={{
                  color: '#3182ce',
                  textDecoration: 'none',
                  ':hover': {
                    textDecoration: 'underline'
                  }
                }}
              >
                View all services in {city.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
