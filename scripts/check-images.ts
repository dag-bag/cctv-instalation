/**
 * Script to verify that all image URLs are loading properly
 * Run with: npx tsx scripts/check-images.ts
 */

import { HERO_IMAGES, INDUSTRY_IMAGES, SERVICE_IMAGES } from '../src/config/images';

interface ImageCheckResult {
  key: string;
  url: string;
  status: 'success' | 'error';
  message?: string;
}

async function checkImage(url: string): Promise<{ status: number; ok: boolean }> {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return { status: response.status, ok: response.ok };
  } catch (error) {
    return { status: 0, ok: false };
  }
}

async function checkAllImages() {
  const results: ImageCheckResult[] = [];
  
  console.log('🔍 Checking Hero Images...\n');
  for (const [key, config] of Object.entries(HERO_IMAGES)) {
    const result = await checkImage(config.url);
    results.push({
      key: `hero:${key}`,
      url: config.url,
      status: result.ok ? 'success' : 'error',
      message: result.ok ? `✅ OK (${result.status})` : `❌ Failed (${result.status})`
    });
    console.log(`${key}: ${result.ok ? '✅' : '❌'} ${result.status}`);
  }
  
  console.log('\n🔍 Checking Industry Images...\n');
  for (const [key, config] of Object.entries(INDUSTRY_IMAGES)) {
    const result = await checkImage(config.url);
    results.push({
      key: `industry:${key}`,
      url: config.url,
      status: result.ok ? 'success' : 'error',
      message: result.ok ? `✅ OK (${result.status})` : `❌ Failed (${result.status})`
    });
    console.log(`${key}: ${result.ok ? '✅' : '❌'} ${result.status}`);
  }
  
  console.log('\n🔍 Checking Service Images...\n');
  for (const [key, config] of Object.entries(SERVICE_IMAGES)) {
    const result = await checkImage(config.url);
    results.push({
      key: `service:${key}`,
      url: config.url,
      status: result.ok ? 'success' : 'error',
      message: result.ok ? `✅ OK (${result.status})` : `❌ Failed (${result.status})`
    });
    console.log(`${key}: ${result.ok ? '✅' : '❌'} ${result.status}`);
  }
  
  const failed = results.filter(r => r.status === 'error');
  const success = results.filter(r => r.status === 'success');
  
  console.log('\n📊 Summary:');
  console.log(`✅ Success: ${success.length}`);
  console.log(`❌ Failed: ${failed.length}`);
  console.log(`📈 Total: ${results.length}`);
  
  if (failed.length > 0) {
    console.log('\n❌ Failed Images:');
    failed.forEach(f => {
      console.log(`  - ${f.key}: ${f.url}`);
    });
    process.exit(1);
  } else {
    console.log('\n✨ All images are loading properly!');
    process.exit(0);
  }
}

checkAllImages().catch(console.error);

