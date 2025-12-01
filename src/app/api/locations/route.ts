import { NextResponse } from 'next/server';
import { CITIES, LOCALITIES, SERVICES, createSlug } from '../../../lib/seo-data';

export async function GET() {
  try {
    interface UrlEntry {
      city: string;
      cityName: string;
      locality: string;
      localityName: string;
      service: string;
      serviceName: string;
      url: string;
    }
    const urls: UrlEntry[] = [];

    // 1. City Pages: /services/[city]
    CITIES.forEach(city => {
      const citySlug = createSlug(city);
      urls.push({
        city,
        cityName: city,
        locality: '',
        localityName: '',
        service: '',
        serviceName: '',
        url: `/services/${citySlug}`
      });

      // 2. Locality Pages: /services/[city]/[locality]
      const cityLocalities = LOCALITIES[city] || [];
      cityLocalities.forEach(locality => {
        const localitySlug = createSlug(locality);
        urls.push({
          city,
          cityName: city,
          locality,
          localityName: locality,
          service: '',
          serviceName: '',
          url: `/services/${citySlug}/${localitySlug}`
        });

        // 3. Service Pages (Hierarchical): /services/[city]/[locality]/[service]
        SERVICES.forEach(service => {
          const serviceSlug = createSlug(service);
          urls.push({
            city,
            cityName: city,
            locality,
            localityName: locality,
            service,
            serviceName: service,
            url: `/services/${citySlug}/${localitySlug}/${serviceSlug}`
          });
        });
      });
    });

    // 4. Flat Service Pages (Legacy/Alternative): /[slug]
    // Example: /ip-camera-installation-in-dwarka-delhi
    CITIES.forEach(city => {
        const cityLocalities = LOCALITIES[city] || [];
        cityLocalities.forEach(locality => {
            SERVICES.forEach(service => {
                const slug = `${createSlug(service)}-in-${createSlug(locality)}-${createSlug(city)}`;
                urls.push({
                    city,
                    cityName: city,
                    locality,
                    localityName: locality,
                    service,
                    serviceName: service,
                    url: `/${slug}`
                });
            });
        });
    });

    return NextResponse.json({ success: true, data: urls });
  } catch (error) {
    console.error('Error generating URLs:', error);
    return NextResponse.json({ success: false, error: 'Failed to generate URLs' }, { status: 500 });
  }
}
