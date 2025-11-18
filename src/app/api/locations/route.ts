import { NextResponse } from 'next/server';
import { getAllLocations } from '@/data/locations';
import { SERVICES } from '@/data/services';

export async function GET() {
  try {
    const locations = getAllLocations();
    
    // Generate all possible city-locality-service combinations
    const combinations = locations.flatMap(location => 
      location.localities.flatMap(locality =>
        SERVICES.map(service => ({
          city: location.slug,
          cityName: location.name,
          locality: typeof locality === 'string' ? locality.toLowerCase().replace(/\s+/g, '-') : locality.slug,
          localityName: typeof locality === 'string' ? locality : locality.name,
          service: service.slug,
          serviceName: service.name,
          url: `/services/${location.slug}/${typeof locality === 'string' ? locality.toLowerCase().replace(/\s+/g, '-') : locality.slug}/${service.slug}`
        }))
      )
    );

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
