"use client";

import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { CATEGORIES } from "@/lib/data";

interface SearchFilterProps {
  search: string;
  onSearchChange: (value: string) => void;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function SearchFilter({
  search,
  onSearchChange,
  activeCategory,
  onCategoryChange,
}: SearchFilterProps) {
  return (
    <div className="space-y-4">
      {/* Search Input */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground-muted" />
        <input
          type="text"
          placeholder="Search snapshots..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-xl border border-card-border bg-card/60 backdrop-blur-sm py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
        />
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer",
              activeCategory === category
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                : "bg-card/60 text-foreground-muted border border-card-border hover:border-primary/30 hover:text-foreground"
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
