import { NextResponse } from 'next/server';
import { getAllLocationsWithLocalities, getLocationBySlug } from '@/data/locations';
import { SERVICES } from '@/data/services';

interface LocationEntry {
  slug: string;
  name: string;
  isLocality: boolean;
  parent?: string;
}

export async function GET() {
  try {
    const locationsData = getAllLocationsWithLocalities();
    
    // Group localities by their parent city
    const localitiesByCity = locationsData.reduce((acc, item) => {
      if (item.isLocality && item.parent) {
        if (!acc[item.parent]) {
          acc[item.parent] = [];
        }
        acc[item.parent].push(item);
      }
      return acc;
    }, {} as Record<string, LocationEntry[]>);
    
    // Generate all possible city-locality-service combinations
    const combinations = [];
    
    // Process each city
    for (const city of locationsData.filter(item => !item.isLocality)) {
      // Add city page
      combinations.push({
        city: city.slug,
        cityName: city.name,
        locality: '',
        localityName: '',
        service: '',
        serviceName: '',
        url: `/services/${city.slug}`
      });
      
      // Get localities for this city
      const localities = localitiesByCity[city.slug] || [];
      
      // Add locality pages and service combinations
      for (const locality of localities) {
        // Add locality page
        combinations.push({
          city: city.slug,
          cityName: city.name,
          locality: locality.slug,
          localityName: locality.name,
          service: '',
          serviceName: '',
          url: `/services/${city.slug}/${locality.slug}`
        });
        
        // Add service pages for this locality
        for (const service of SERVICES) {
          combinations.push({
            city: city.slug,
            cityName: city.name,
            locality: locality.slug,
            localityName: locality.name,
            service: service.slug,
            serviceName: service.name,
            url: `/services/${city.slug}/${locality.slug}/${service.slug}`
          });
        }
      }
    }

    return NextResponse.json({
      success: true,
      data: combinations
    });
  } catch (error) {
    console.error('Error generating location combinations:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to generate location combinations' },
      { status: 500 }
    );
  }
}
