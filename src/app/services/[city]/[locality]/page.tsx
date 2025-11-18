import { notFound } from "next/navigation";
import { getLocationBySlug, getLocalityDetails } from "@/data/locations";
import { SERVICES } from "@/data/services";

export default function LocalityPage({
  params,
}: {
  params: { city: string; locality: string };
}) {
  const location = getLocationBySlug(params.city);
  const locality = getLocalityDetails(params.locality);
  
  if (!location || !locality) notFound();

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
      fontFamily: 'sans-serif',
      padding: '2rem 1rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        padding: '2rem'
      }}>
        <h1 style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          color: '#1f2937'
        }}>
          Services in {locality.name}, {location.name}
        </h1>
        
        <p style={{
          color: '#4b5563',
          marginBottom: '2rem',
          maxWidth: '800px'
        }}>
          Professional services available in {locality.name}, {location.name}. 
          Choose from our range of high-quality services to meet your needs.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem'
        }}>
          {SERVICES.map((service) => (
            <a 
              key={service.slug}
              href={`/services/${params.city}/${params.locality}/${service.slug}`}
              style={{
                display: 'block',
                padding: '1.5rem',
                backgroundColor: '#f3f4f6',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                color: '#111827',
                transition: 'all 0.2s',
                ':hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  backgroundColor: '#e5e7eb'
                }
              }}
            >
              <h2 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: '#1d4ed8'
              }}>
                {service.name}
              </h2>
              <p style={{
                color: '#4b5563',
                margin: 0,
                fontSize: '0.9375rem'
              }}>
                {service.description || `Professional ${service.name.toLowerCase()} services in ${locality.name}`}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
