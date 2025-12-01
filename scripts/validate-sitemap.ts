import generateSitemap, { generateSitemaps } from '../src/app/sitemap';
import axios from 'axios';
import { writeFileSync } from 'fs';
import { join } from 'path';

async function validateSitemap() {
  // Get all sitemap IDs
  const sitemapIds = await generateSitemaps();
  let allUrls: Array<{ url: string }> = [];
  
  // Fetch all sitemaps
  for (const { id } of sitemapIds) {
    const sitemapUrls = await generateSitemap({ id });
    allUrls = allUrls.concat(sitemapUrls);
  }
  
  const results: Array<{ url: string; status: number; error?: string }> = [];
  
  console.log(`Validating ${allUrls.length} URLs from sitemap...`);
  
  for (const entry of allUrls) {
    const url = entry.url;
    try {
      const response = await axios.head(url, { 
        maxRedirects: 5,
        validateStatus: () => true // Don't throw on HTTP errors
      });
      
      results.push({
        url,
        status: response.status
      });
      
      console.log(`${response.status} - ${url}`);
      
      // Add a small delay to avoid overwhelming the server
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (error) {
      results.push({
        url,
        status: 0,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
      console.error(`❌ Error checking ${url}:`, error);
    }
  }
  
  // Save results to a file
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const outputFile = join(process.cwd(), `sitemap-validation-${timestamp}.json`);
  writeFileSync(outputFile, JSON.stringify(results, null, 2));
  
  // Print summary
  const errorCount = results.filter(r => r.status >= 400 || r.status === 0).length;
  console.log(`\nValidation complete!`);
  console.log(`✅ ${results.length - errorCount} URLs are accessible`);
  console.log(`❌ ${errorCount} URLs have issues`);
  console.log(`📄 Full report saved to: ${outputFile}`);
  
  if (errorCount > 0) {
    console.log('\nProblematic URLs:');
    results
      .filter(r => r.status >= 400 || r.status === 0)
      .forEach(r => console.log(`${r.status} - ${r.url}${r.error ? ` (${r.error})` : ''}`));
    process.exit(1);
  }
}

validateSitemap().catch(console.error);
