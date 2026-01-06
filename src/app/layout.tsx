import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { BUSINESS_CONFIG } from "@/config/business";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS_CONFIG.name} - Professional CCTV Installation & Repair Services in Delhi`,
    template: `%s | ${BUSINESS_CONFIG.name}`,
  },
  description: BUSINESS_CONFIG.defaultDescription,
  keywords: BUSINESS_CONFIG.keywords,
  authors: [{ name: BUSINESS_CONFIG.name }],
  creator: BUSINESS_CONFIG.name,
  publisher: BUSINESS_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.camharbor.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.camharbor.in",
    siteName: BUSINESS_CONFIG.name,
    title: `${BUSINESS_CONFIG.name} - Professional CCTV Installation & Repair Services in Delhi`,
    description: BUSINESS_CONFIG.defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS_CONFIG.name} - Professional CCTV Installation & Repair Services in Delhi`,
    description: BUSINESS_CONFIG.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteNavigation from "@/components/SiteNavigation";

// ... imports ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2a5298" />
        
        {/* Geo-targeting for Local SEO */}
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi" />
        <meta name="geo.position" content="28.7041;77.1025" />
        <meta name="ICBM" content="28.7041, 77.1025" />
        
        {/* Critical Resource Hints for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className={`${inter.variable} ${outfit.variable}`}>
        <Header />
        {children}
        <div className="globalStickySpacer" aria-hidden="true"></div>
        <SiteNavigation />
        <Footer />
      </body>
    </html>
  );
}
