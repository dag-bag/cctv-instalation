import React from "react";
import Link from '@/components/Link';
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateAllLinks } from "../../../lib/url-generator";
import styles from "../../page.module.css";

const ITEMS_PER_PAGE = 250;


// export async function generateStaticParams() {
//   const allLinks = generateAllLinks();
//   const totalPages = Math.ceil(allLinks.length / ITEMS_PER_PAGE);

//   return Array.from({ length: totalPages }, (_, i) => ({
//     page: (i + 1).toString(),
//   }));
// }

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }): Promise<Metadata> {
  const { page } = await params;
  const title = `Site Map Page ${page} - All Services`;
  const description =
    `Explore Page ${page} of our comprehensive site map for CamHarbor. Quickly find CCTV installation, repair, and security services across all major cities and localities in Delhi NCR.`;

  // set canonical to /html-sitemap if on page 1, else /html-sitemap/[page]
  const canonical =
    `https://www.camharbor.in/html-sitemap/${page}`;

  return {
    title,
    description,
    robots: "index, follow",
    alternates: { canonical },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function HtmlSitemapPage(props: {
  params: Promise<{ page: string }>;
}) {
  const { page: pageStr } = await props.params;
  const page = parseInt(pageStr);

  if (isNaN(page) || page < 1) {
    notFound();
  }

  const allLinks = generateAllLinks();
  const totalPages = Math.ceil(allLinks.length / ITEMS_PER_PAGE);

  if (page > totalPages) {
    notFound();
  }

  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const currentLinks = allLinks.slice(start, end);

  // Group links by category for better organization
  const linksByCategory: Record<string, typeof currentLinks> = {};
  currentLinks.forEach((link) => {
    if (!linksByCategory[link.category]) {
      linksByCategory[link.category] = [];
    }
    linksByCategory[link.category].push(link);
  });

  return (
    <div className={styles.container}>
      <main className={styles.section}>
        <div className={styles.content}>
          <h1 className={styles.sectionTitle}>Site Map - Page {page}</h1>
          <p className={styles.sectionSubtitle}>
            Find all our CCTV services. Pick a city or area.
            <br />
            We install cameras. We fix cameras. We work in Delhi NCR.
            <br />
            <span style={{ fontSize: "0.9em", opacity: 0.8 }}>
              Total links: {allLinks.length.toLocaleString()}. Total pages: {totalPages}.
            </span>
          </p>

          <div
            style={{
              marginBottom: "2rem",
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            {page > 1 && (
              <Link
                href={`/html-sitemap/${page - 1}`}
                className={styles.button}
              >
                &larr; Previous
              </Link>
            )}
            <span style={{ alignSelf: "center" }}>
              Page {page} of {totalPages}
            </span>
            {page < totalPages && (
              <Link
                href={`/html-sitemap/${page + 1}`}
                className={styles.button}
              >
                Next &rarr;
              </Link>
            )}
          </div>

          {Object.entries(linksByCategory).map(([category, links], categoryIndex) => {
            // Create simple H2 heading for each page and category
            let categoryTitle = "";
            if (category === "Static") {
              categoryTitle = `Static Pages - Page ${page}`;
            } else {
              categoryTitle = `${category} Services - Page ${page}`;
            }
            
            return (
            <section key={`${category}-${page}-${categoryIndex}`} style={{ marginBottom: "3rem" }}>
              <h2 style={{ 
                fontSize: "1.5rem", 
                fontWeight: 600, 
                marginBottom: "1rem",
                color: "#f8fafc",
                borderBottom: "2px solid #3b82f6",
                paddingBottom: "0.5rem"
              }}>
                {categoryTitle}
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap: "1rem",
                  textAlign: "left",
                }}
              >
                {links.map((link, index) => (
                  <div key={index}>
                    <Link
                      href={link.url}
                      className={styles.link}
                      style={{ fontSize: "0.9rem", color: "#94a3b8" }}
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
              </div>
            </section>
            );
          })}

          <div
            style={{
              marginTop: "3rem",
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            {page > 1 && (
              <Link
                href={`/html-sitemap/${page - 1}`}
                className={styles.button}
              >
                &larr; Previous
              </Link>
            )}
            <span style={{ alignSelf: "center" }}>
              Page {page} of {totalPages}
            </span>
            {page < totalPages && (
              <Link
                href={`/html-sitemap/${page + 1}`}
                className={styles.button}
              >
                Next &rarr;
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
// export const dynamic = "force-static";
// export const revalidate = false;
export const dynamicParams = false;
export const dynamic = "force-dynamic";
