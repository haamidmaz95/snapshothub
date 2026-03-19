"use client";

import { useState, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SearchFilter } from "@/components/ui/SearchFilter";
import { SnapshotCard } from "@/components/ui/SnapshotCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { SNAPSHOTS } from "@/lib/data";

export function Catalog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return SNAPSHOTS.filter((s) => {
      const matchesSearch =
        search === "" ||
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.industry.toLowerCase().includes(search.toLowerCase()) ||
        s.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || s.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <SectionWrapper id="catalog">
      <FadeIn>
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Find Your <span className="text-primary">Industry Snapshot</span>
          </h2>
          <p className="text-foreground-muted max-w-xl mx-auto">
            Every snapshot is a complete, ready-to-use GHL system tailored to a
            specific industry.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mb-10">
          <SearchFilter
            search={search}
            onSearchChange={setSearch}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((snapshot) => (
            <SnapshotCard key={snapshot.id} snapshot={snapshot} />
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-foreground-muted">
          <p className="text-lg">No snapshots found matching your search.</p>
          <button
            onClick={() => {
              setSearch("");
              setActiveCategory("All");
            }}
            className="mt-3 text-primary hover:text-primary-hover transition-colors cursor-pointer"
          >
            Clear filters
          </button>
        </div>
      )}
    </SectionWrapper>
  );
}
