"use client";

import React, { useMemo, useState, useEffect, useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import Link from "next/link";
import { UrlLink } from "../../lib/url-generator";

// Client component for the virtualized list
export default function UrlListClient({ links }: { links: UrlLink[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [listHeight, setListHeight] = useState(600);

  // Calculate height on mount and resize
  useEffect(() => {
    const updateHeight = () => {
      const height = Math.min(800, window.innerHeight - 280);
      setListHeight(height);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set<string>(["all"]);
    links.forEach((link) => cats.add(link.category));
    return Array.from(cats).sort();
  }, [links]);

  // Filter links based on search and category
  const filteredLinks = useMemo(() => {
    return links.filter((link) => {
      const matchesSearch =
        searchTerm === "" ||
        link.url.toLowerCase().includes(searchTerm.toLowerCase()) ||
        link.label.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || link.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [links, searchTerm, selectedCategory]);

  // Ref for the scrollable container
  const parentRef = useRef<HTMLDivElement>(null);

  // Virtualizer hook
  const virtualizer = useVirtualizer({
    count: filteredLinks.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 70,
    overscan: 5,
  });

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {/* Search and Filter Controls */}
      <div
        style={{
          padding: "1.5rem",
          backgroundColor: "rgba(15, 23, 42, 0.8)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            alignItems: "center",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <div style={{ flex: 1, minWidth: "200px" }}>
            <input
              type="text"
              placeholder="Search URLs or labels..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "0.5rem",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                backgroundColor: "rgba(30, 41, 59, 0.8)",
                color: "#f8fafc",
                fontSize: "0.9rem",
              }}
            />
          </div>
          <div style={{ minWidth: "200px" }}>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "0.5rem",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                backgroundColor: "rgba(30, 41, 59, 0.8)",
                color: "#f8fafc",
                fontSize: "0.9rem",
                cursor: "pointer",
              }}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "all" ? "All Categories" : cat}
                </option>
              ))}
            </select>
          </div>
          <div
            style={{
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              backgroundColor: "rgba(59, 130, 246, 0.2)",
              color: "#93c5fd",
              fontSize: "0.9rem",
              whiteSpace: "nowrap",
            }}
          >
            {filteredLinks.length.toLocaleString()} URLs
          </div>
        </div>
      </div>

      {/* Virtualized List */}
      <div
        ref={parentRef}
        style={{
          height: `${listHeight}px`,
          overflow: "auto",
          backgroundColor: "rgba(15, 23, 42, 0.5)",
        }}
      >
        {filteredLinks.length > 0 ? (
          <div
            style={{
              height: `${virtualizer.getTotalSize()}px`,
              width: "100%",
              position: "relative",
            }}
          >
            {virtualizer.getVirtualItems().map((virtualItem) => {
              const link = filteredLinks[virtualItem.index];
              if (!link) return null;

              return (
                <div
                  key={virtualItem.key}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: `${virtualItem.size}px`,
                    transform: `translateY(${virtualItem.start}px)`,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "0.75rem 1rem",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                      transition: "background-color 0.2s",
                      height: "100%",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(59, 130, 246, 0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <Link
                        href={link.url}
                        style={{
                          color: "#60a5fa",
                          textDecoration: "none",
                          fontSize: "0.9rem",
                          display: "block",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.url}
                      </Link>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          color: "#94a3b8",
                          marginTop: "0.25rem",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {link.label}
                      </div>
                    </div>
                    <div
                      style={{
                        marginLeft: "1rem",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "0.375rem",
                        fontSize: "0.75rem",
                        backgroundColor: "rgba(59, 130, 246, 0.2)",
                        color: "#93c5fd",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {link.category}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              color: "#94a3b8",
              fontSize: "1.1rem",
            }}
          >
            No URLs found matching your search
          </div>
        )}
      </div>
    </div>
  );
}

