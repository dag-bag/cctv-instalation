import { generateSitemap } from '../src/app/sitemap';
import { writeFileSync } from 'fs';
import { join } from 'path';
import axios from 'axios';

interface UrlCheckResult {
  url: string;
  status: number;
  error?: string;
  redirects?: string[];
}

async function checkUrl(url: string): Promise<UrlCheckResult> {
  try {
    const response = await axios.get(url, {
      maxRedirects: 5,
      validateStatus: () => true, // Don't throw on HTTP errors
    });

    return {
      url,
      status: response.status,
      redirects: response.request?._redirectable?._redirects || [],
    };
  } catch (error) {
    return {
      url,
      status: 0,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

async function checkAllUrls() {
  const sitemapUrls = generateSitemap();
  const results: UrlCheckResult[] = [];
  const maxConcurrent = 5; // Number of concurrent requests
  
  console.log(`Checking ${sitemapUrls.length} URLs from sitemap...`);
  
  // Process URLs in batches to avoid overwhelming the server
  for (let i = 0; i < sitemapUrls.length; i += maxConcurrent) {
    const batch = sitemapUrls.slice(i, i + maxConcurrent);
    const batchResults = await Promise.all(
      batch.map(entry => checkUrl(entry.url))
    );
    
    // Log progress
    batchResults.forEach(result => {
      const status = result.status >= 400 ? '❌' : '✅';
      console.log(`${status} ${result.status} - ${result.url}`);
      
      if (result.redirects && result.redirects.length > 0) {
        console.log(`   ↳ Redirects: ${result.redirects.join(' → ')}`);
      }
    });
    
    results.push(...batchResults);
    
    // Add a small delay between batches
    if (i + maxConcurrent < sitemapUrls.length) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  // Save results to a file
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const outputFile = join(process.cwd(), `sitemap-check-${timestamp}.json`);
  writeFileSync(outputFile, JSON.stringify(results, null, 2));
  
  // Print summary
  const errorCount = results.filter(r => r.status >= 400 || r.status === 0).length;
  const successCount = results.length - errorCount;
  
  console.log('\n--- Summary ---');
  console.log(`✅ ${successCount} URLs are accessible`);
  console.log(`❌ ${errorCount} URLs have issues`);
  console.log(`📄 Full report saved to: ${outputFile}`);
  
  if (errorCount > 0) {
    console.log('\nProblematic URLs:');
    results
      .filter(r => r.status >= 400 || r.status === 0)
      .forEach(r => {
        console.log(`${r.status} - ${r.url}${r.error ? ` (${r.error})` : ''}`);
        if (r.redirects && r.redirects.length > 0) {
          console.log(`   ↳ Redirects: ${r.redirects.join(' → ')}`);
        }
      });
    
    process.exit(1); // Exit with error code if there are issues
  }
}

// Run the check
checkAllUrls().catch(error => {
  console.error('Error checking URLs:', error);
  process.exit(1);
});
