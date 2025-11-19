import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { SERVICES, getServiceBySlug } from '@/data/services';
import { getLocationBySlug, getLocalityDetails } from '@/data/locations';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get('host') || 'www.cctvinstallationdelhi.in';
  
  // Skip if it's already a known path or static file
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname === '/'
  ) {
    return NextResponse.next();
  }

  // Handle www redirect
  if (hostname === 'cctvinstallationdelhi.in') {
    const url = new URL(`https://www.${hostname}${pathname}`);
    return NextResponse.redirect(url, 301);
  }

  // Handle HTTP to HTTPS redirect
  if (request.headers.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV === 'production') {
    const url = new URL(`https://${hostname}${pathname}`);
    return NextResponse.redirect(url, 301);
  }

  // Handle legacy /service/<location>/<service> routes
  const legacyServiceMatch = pathname.match(/^\/service\/([^/]+)\/([^/]+)$/);
  if (legacyServiceMatch) {
    const [, legacyLocation, legacyService] = legacyServiceMatch;
    const service = getServiceBySlug(legacyService);
    const target = resolveCityAndLocality(legacyLocation);

    if (service && target) {
      return NextResponse.redirect(
        new URL(
          `/services/${target.citySlug}/${target.localitySlug}/${legacyService}`,
          request.url
        ),
        301
      );
    }
  }

  // Handle legacy /services/<service>/<location> routes
  const invertedServicesMatch = pathname.match(/^\/services\/([^/]+)\/([^/]+)$/);
  if (invertedServicesMatch) {
    const [, legacyService, legacyLocation] = invertedServicesMatch;
    const service = getServiceBySlug(legacyService);
    const target = resolveCityAndLocality(legacyLocation);

    if (service && target) {
      return NextResponse.redirect(
        new URL(
          `/services/${target.citySlug}/${target.localitySlug}/${legacyService}`,
          request.url
        ),
        301
      );
    }
  }

  // Handle SEO-friendly URLs (e.g., cctv-installation-in-karol-bagh)
  if (pathname.includes('-in-') || pathname.endsWith('-delhi')) {
    const slug = pathname.slice(1); // Remove leading /
    const parsed = parseSEORoute(slug);

    if (parsed) {
      const service = getServiceBySlug(parsed.service);
      const target = resolveCityAndLocality(parsed.location);

      if (service && target) {
        return NextResponse.redirect(
          new URL(
            `/services/${target.citySlug}/${target.localitySlug}/${parsed.service}`,
            request.url
          ),
          301
        );
      }
    }
  }

  return NextResponse.next();
}

function parseSEORoute(seoRoute: string): { service: string; location: string } | null {
  const parts = seoRoute.split('-');

  // Remove 'delhi' from the end if present
  if (parts[parts.length - 1] === 'delhi') {
    parts.pop();
  }

  // Find 'in' separator
  const inIndex = parts.indexOf('in');

  if (inIndex !== -1) {
    // Pattern: service-in-location
    const serviceParts = parts.slice(0, inIndex);
    const locationParts = parts.slice(inIndex + 1);

    return {
      service: serviceParts.join('-'),
      location: locationParts.join('-'),
    };
  }

  // Try to match known service patterns
  for (const service of SERVICES) {
    if (seoRoute.startsWith(service.slug)) {
      const location = seoRoute
        .substring(service.slug.length + 1)
        .replace(/-delhi$/, '');
      return {
        service: service.slug,
        location: location,
      };
    }
  }

  return null;
}

function resolveCityAndLocality(localitySlug: string) {
  const localityDetails = getLocalityDetails(localitySlug);
  if (localityDetails) {
    return {
      citySlug: localityDetails.district.slug,
      localitySlug: localityDetails.locality,
    };
  }

  const location = getLocationBySlug(localitySlug);
  if (location) {
    return {
      citySlug: location.slug,
      localitySlug: location.slug,
    };
  }

  return null;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     * - API routes
     * - Already rewritten paths
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.|api/).*)',
  ],
};
