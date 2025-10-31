# Test Routes for CCTV Installation Website

## Test these URLs in your browser:

### ✅ Homepage
- http://localhost:3000/

### ✅ Location Pages
- http://localhost:3000/east-delhi
- http://localhost:3000/central-delhi
- http://localhost:3000/rohini
- http://localhost:3000/karol-bagh

### ✅ SEO Routes (Main Focus)
These are the hyphenated routes you wanted to work:

1. **With "in" keyword:**
   - http://localhost:3000/installation-services-in-east-delhi-delhi
   - http://localhost:3000/installation-services-in-rohini-delhi
   - http://localhost:3000/installation-services-in-karol-bagh-delhi
   - http://localhost:3000/repair-services-in-central-delhi-delhi
   - http://localhost:3000/cctv-camera-installation-in-loknayak-puram-delhi

2. **Without "in" keyword:**
   - http://localhost:3000/installation-services-east-delhi-delhi
   - http://localhost:3000/repair-services-rohini-delhi
   - http://localhost:3000/installation-services-karol-bagh-delhi

### ✅ Service-Location Pages
- http://localhost:3000/service/east-delhi
- http://localhost:3000/service/rohini

---

## What to Check:

### For Each Route:
1. ✅ Page loads without errors
2. ✅ Title is location-specific
3. ✅ Service details are shown correctly
4. ✅ FAQ section appears
5. ✅ Breadcrumb navigation works
6. ✅ Meta description is relevant
7. ✅ Canonical URL is set (for SEO routes)

### Developer Tools Check:
1. Open browser DevTools (F12)
2. Check Console - should have NO errors
3. Check Network tab - all resources load
4. View Page Source - check meta tags
5. Use Google Rich Results Test for structured data

---

## Expected Behavior:

### Example: `/installation-services-in-rohini-delhi`

**Should display:**
- Title: "CCTV Installation Services in Rohini | [Business Name] | Call [Phone]"
- H1: "CCTV Installation Services in Rohini, Delhi"
- About Rohini section
- Service features (6-8 items)
- FAQ section (4-6 questions)
- CTA buttons (Call, WhatsApp)
- Breadcrumb: Home / Rohini / CCTV Installation Services

**Canonical URL:**
- Should point to: `/rohini/installation-services`

---

## Test Results:

| URL | Status | Notes |
|-----|--------|-------|
| `/` | ✅ | Homepage loads |
| `/east-delhi` | ✅ | Location page |
| `/installation-services-in-rohini-delhi` | ✅ | SEO route works |
| `/repair-services-karol-bagh-delhi` | ✅ | SEO route works |

---

## If You See Errors:

1. **404 Not Found** 
   - Run `npm run build` to regenerate static pages
   - Clear `.next` folder and rebuild

2. **Type errors**
   - Check that all changes were saved
   - Restart the dev server

3. **CSS not loading**
   - Check file path in import statement
   - Verify CSS module name matches

4. **Missing content**
   - Verify data files exist: `src/data/locations.ts`, `src/data/services.ts`
   - Check content generator functions

---

## Build for Production:

```bash
# Stop dev server (Ctrl+C)
npm run build

# Should see:
# ✓ Generating static pages (X/Y)
# ✓ Finalizing page optimization
```

Expected output:
- 2,300+ pages generated
- No errors
- Bundle size optimized
