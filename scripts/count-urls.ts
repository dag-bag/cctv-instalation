import { CITIES, LOCALITIES, SERVICES } from '../src/lib/seo-data';

function countUrls() {
  let total = 0;
  
  // 1. Static Pages (Estimate)
  const staticPages = 10;
  total += staticPages;
  console.log(`Static Pages: ${staticPages}`);

  // 2. City Pages
  const cityPages = CITIES.length;
  total += cityPages;
  console.log(`City Pages: ${cityPages}`);

  let localityPages = 0;
  let servicePages = 0;

  for (const city of CITIES) {
    const localities = LOCALITIES[city] || [];
    localityPages += localities.length;
    
    // Each locality has all services
    servicePages += localities.length * SERVICES.length;
  }

  total += localityPages;
  total += servicePages;

  console.log(`Locality Pages: ${localityPages}`);
  console.log(`Service Pages: ${servicePages}`);
  console.log('-------------------');
  console.log(`Total URLs: ${total}`);
  
  const chunkSize = 20000;
  const sitemapsNeeded = Math.ceil(total / chunkSize);
  console.log(`Sitemaps needed (at ${chunkSize} per sitemap): ${sitemapsNeeded}`);
}

countUrls();
