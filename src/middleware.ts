import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getServiceBySlug, findLocation, createSlug } from './lib/seo-data';

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
    const location = findLocation(legacyLocation);

    if (service && location && location.locality) {
      const slug = `${createSlug(service)}-in-${createSlug(location.locality)}-${createSlug(location.city)}`;
      return NextResponse.redirect(new URL(`/${slug}`, request.url), 301);
    }
  }

  // Handle legacy /services/<service>/<location> routes
  const invertedServicesMatch = pathname.match(/^\/services\/([^/]+)\/([^/]+)$/);
  if (invertedServicesMatch) {
    const [, legacyService, legacyLocation] = invertedServicesMatch;
    const service = getServiceBySlug(legacyService);
    const location = findLocation(legacyLocation);

    if (service && location && location.locality) {
      const slug = `${createSlug(service)}-in-${createSlug(location.locality)}-${createSlug(location.city)}`;
      return NextResponse.redirect(new URL(`/${slug}`, request.url), 301);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.|api/).*)',
  ],
};
