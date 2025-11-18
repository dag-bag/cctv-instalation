import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocationBySlug, getLocalityDetails } from "@/data/locations";
import { SERVICES, getServiceBySlug } from "@/data/services";
import { BUSINESS_CONFIG } from "@/config/business";
import { generatePageTitle, generateMetaDescription } from "@/utils/content-generator";

export async function generateMetadata({
  params,
}: {
  params: { city: string; locality: string; service: string };
}): Promise<Metadata> {
  const location = getLocationBySlug(params.city);
  const service = getServiceBySlug(params.service);
  
  if (!location || !service) notFound();
  
  const title = generatePageTitle(service.name, params.locality, params.city);
  const description = generateMetaDescription(service.name, params.locality, params.city);
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${BUSINESS_CONFIG.websiteUrl}/services/${params.city}/${params.locality}/${params.service}`,
      type: 'website',
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: { city: string; locality: string; service: string };
}) {
  const location = getLocationBySlug(params.city);
  const service = getServiceBySlug(params.service);
  const localityDetails = getLocalityDetails(params.locality);
  
  if (!location || !service || !localityDetails) notFound();

  const features = [
    `Professional ${service.name} in ${params.locality}`,
    `24/7 Emergency ${service.name} Services`,
    `Certified ${service.name} Experts`,
    `Affordable ${service.name} Solutions`,
    `Free Consultation & Quote`
  ];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f9fafb',
      fontFamily: 'sans-serif',
      lineHeight: '1.5'
    }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(to right, #2563eb, #1d4ed8)',
        color: 'white',
        padding: '4rem 0',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            lineHeight: '1.2'
          }}>
            {service.name} Services in {params.locality}, {params.city}
          </h1>
          <p style={{
            fontSize: '1.25rem',
            marginBottom: '2rem',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Professional and reliable {service.name.toLowerCase()} services for {params.locality} and surrounding areas.
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center'
          }}>
            <a href={`tel:${BUSINESS_CONFIG.phone.replace(/\D/g, '')}`} style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: 'white',
              color: '#1d4ed8',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.375rem',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'background-color 0.2s',
              cursor: 'pointer'
            }}>
              Call Now
            </a>
            <a href={`tel:${BUSINESS_CONFIG.phone.replace(/\D/g, '')}`} style={{
              display: 'inline-flex',
              alignItems: 'center',
              border: '1px solid white',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.375rem',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'background-color 0.2s',
              cursor: 'pointer'
            }}>
              Get Free Quote
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 1rem',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '2rem'
      }}>
        {/* Left Column */}
        <div style={{
          display: 'grid',
          gap: '2rem',
          gridColumn: '1 / -1'
        }}>
          {/* About Section */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            overflow: 'hidden'
          }}>
            <div style={{
              padding: '1.5rem',
              borderBottom: '1px solid #e5e7eb'
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                margin: 0
              }}>About Our {service.name} Services</h2>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <p style={{
                margin: '0 0 1rem 0',
                lineHeight: '1.625'
              }}>
                Welcome to our premium {service.name.toLowerCase()} services in {params.locality}, {params.city}. 
                We specialize in providing top-quality {service.name.toLowerCase()} solutions for both residential and commercial properties.
              </p>
              <p style={{
                margin: '1rem 0 0 0',
                lineHeight: '1.625'
              }}>
                Our team of certified professionals is committed to delivering exceptional service with a focus on quality, 
                reliability, and customer satisfaction. We use only the highest quality materials and the latest techniques 
                to ensure your complete peace of mind.
              </p>
            </div>
          </div>

          {/* Process Section */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            overflow: 'hidden'
          }}>
            <div style={{
              padding: '1.5rem',
              borderBottom: '1px solid #e5e7eb'
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                margin: 0
              }}>Our {service.name} Process</h2>
            </div>
            <div style={{ padding: '1.5rem' }}>
              {[
                'Initial Consultation & Assessment',
                'Customized Solution Design',
                'Professional Installation',
                'Thorough Testing',
                'Customer Walkthrough'
              ].map((step, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  marginBottom: '1rem',
                  paddingBottom: '1rem',
                  borderBottom: index < 4 ? '1px solid #e5e7eb' : 'none'
                }}>
                  <div style={{
                    backgroundColor: '#dbeafe',
                    borderRadius: '9999px',
                    padding: '0.25rem',
                    marginRight: '1rem',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '24px',
                    height: '24px'
                  }}>
                    <span style={{
                      color: '#2563eb',
                      fontWeight: 'bold'
                    }}>✓</span>
                  </div>
                  <div>
                    <h3 style={{
                      margin: '0 0 0.25rem 0',
                      fontWeight: '500'
                    }}>{step}</h3>
                    <p style={{
                      margin: 0,
                      fontSize: '0.875rem',
                      color: '#4b5563'
                    }}>
                      Our team will guide you through each step of the process.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div style={{
          display: 'grid',
          gap: '1.5rem',
          gridColumn: '1 / -1'
        }}>
          {/* Service Area */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            overflow: 'hidden'
          }}>
            <div style={{
              padding: '1rem 1.5rem',
              borderBottom: '1px solid #e5e7eb'
            }}>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                margin: 0
              }}>Service Area</h3>
            </div>
            <div style={{
              padding: '1.5rem',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '9999px',
                backgroundColor: '#dbeafe',
                color: '#2563eb',
                marginRight: '1rem',
                flexShrink: 0
              }}>
                📍
              </span>
              <div>
                <p style={{
                  margin: '0 0 0.25rem 0',
                  fontWeight: '500'
                }}>Serving {params.locality} and surrounding areas</p>
                <p style={{
                  margin: 0,
                  fontSize: '0.875rem',
                  color: '#4b5563'
                }}>Including nearby neighborhoods in {params.city}</p>
              </div>
            </div>
          </div>

          {/* Service Features */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            overflow: 'hidden'
          }}>
            <div style={{
              padding: '1rem 1.5rem',
              borderBottom: '1px solid #e5e7eb'
            }}>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                margin: 0
              }}>Service Features</h3>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <ul style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
                display: 'grid',
                gap: '0.75rem'
              }}>
                {features.map((feature, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '1.25rem',
                      height: '1.25rem',
                      borderRadius: '9999px',
                      backgroundColor: '#dcfce7',
                      color: '#16a34a',
                      marginRight: '0.75rem',
                      flexShrink: 0,
                      fontSize: '0.75rem'
                    }}>
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Emergency Service */}
          <div style={{
            backgroundColor: '#eff6ff',
            borderRadius: '0.5rem',
            border: '1px solid #bfdbfe',
            overflow: 'hidden'
          }}>
            <div style={{
              padding: '1rem 1.5rem',
              borderBottom: '1px solid #bfdbfe'
            }}>
              <h3 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                margin: 0,
                color: '#1e40af'
              }}>24/7 Emergency Service</h3>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  backgroundColor: '#dbeafe',
                  borderRadius: '9999px',
                  padding: '0.75rem',
                  marginRight: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '3rem',
                  height: '3rem'
                }}>
                  <span style={{
                    color: '#2563eb',
                    fontSize: '1.5rem'
                  }}>⏰</span>
                </div>
                <div>
                  <p style={{
                    margin: '0 0 0.25rem 0',
                    fontWeight: '500',
                    color: '#1e40af'
                  }}>Available 24/7</p>
                  <p style={{
                    margin: 0,
                    fontSize: '0.875rem',
                    color: '#3b82f6'
                  }}>Immediate response for urgent situations</p>
                </div>
              </div>
              <a href={`tel:${BUSINESS_CONFIG.phone.replace(/\D/g, '')}`} style={{
                display: 'block',
                width: '100%',
                backgroundColor: '#2563eb',
                color: 'white',
                textAlign: 'center',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.375rem',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'background-color 0.2s',
                cursor: 'pointer'
              }}>
                Call for Emergency Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
