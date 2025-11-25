import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { BUSINESS_CONFIG } from "@/config/business";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
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
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ... imports ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2a5298" />
      </head>
      <body className={`${inter.variable} ${outfit.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
