import React from "react";
import { generateAllLinks } from "../../lib/url-generator";
import styles from "../page.module.css";
import UrlListClient from "./UrlListClient";

// Server component wrapper
export default function AllUrlsPage() {
  const allLinks = generateAllLinks();

  return (
    <div className={styles.container}>
      <main className={styles.section}>
        <div className={styles.content}>
          <h1 className={styles.sectionTitle}>All URLs</h1>
          <p className={styles.sectionSubtitle}>
            Browse all {allLinks.length.toLocaleString()} URLs in the site.
            <br />
            Use the search and filter to find specific URLs quickly.
          </p>

          <div
            style={{
              marginTop: "2rem",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "0.75rem",
              overflow: "hidden",
              backgroundColor: "rgba(15, 23, 42, 0.3)",
            }}
          >
            <UrlListClient links={allLinks} />
          </div>

          {/* Info Footer */}
          <div
            style={{
              marginTop: "2rem",
              padding: "1.5rem",
              backgroundColor: "rgba(255, 255, 255, 0.02)",
              borderRadius: "0.5rem",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "0.9rem", opacity: 0.8, margin: 0 }}>
              Total URLs: <strong>{allLinks.length.toLocaleString()}</strong> • 
              This page uses virtualization to handle large lists efficiently
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

