"use client";

import { useState } from "react";
import type { Category } from "@/data/categories";

interface FilterPanelProps {
  categories: Category[];
  selectedCategory: string;
  sortOrder: "featured" | "name-asc";
  onCategoryChange: (slug: string) => void;
  onSortChange: (sort: "featured" | "name-asc") => void;
  onReset: () => void;
  activeFilterCount?: number;
}

/**
 * FilterPanel — Client Component.
 * Responsive filter controls for shop catalog (desktop horizontal bar, mobile collapsible sheet).
 */
export default function FilterPanel({
  categories,
  selectedCategory,
  sortOrder,
  onCategoryChange,
  onSortChange,
  onReset,
  activeFilterCount = 0,
}: FilterPanelProps) {
  const [isOpen, setIsOpen] = useState(false);

  const hasActiveFilters =
    selectedCategory !== "" || sortOrder !== "featured" || activeFilterCount > 0;

  return (
    <div className="w-full">
      {/* Mobile Filter Toggle Button (< 768px) */}
      <div className="md:hidden flex items-center justify-between gap-3 mb-4">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-filter-drawer"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-md)] text-body-sm font-medium text-[var(--primary)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0m-9.75 0h9.75"
            />
          </svg>
          <span>Filters</span>
          {activeFilterCount > 0 && (
            <span className="ml-1 px-2 py-0.5 text-ui-sm font-bold bg-[var(--accent)] text-white rounded-full">
              {activeFilterCount}
            </span>
          )}
        </button>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={onReset}
            className="text-body-sm text-[var(--accent)] font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
          >
            Reset All
          </button>
        )}
      </div>

      {/* Mobile Filter Collapsible Panel */}
      {isOpen && (
        <div
          id="mobile-filter-drawer"
          className="md:hidden p-5 mb-6 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-md)] space-y-5 animate-in fade-in duration-150"
        >
          {/* Categories */}
          <div>
            <span className="block text-ui-sm font-semibold text-[var(--primary)] uppercase tracking-wider mb-2">
              Categories
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => onCategoryChange("")}
                className={`px-3 py-1.5 rounded-[var(--radius-pill)] text-body-sm transition-colors ${
                  selectedCategory === ""
                    ? "bg-[var(--primary)] text-white font-medium"
                    : "bg-[var(--background)] text-[var(--foreground)] border border-[var(--border)]"
                }`}
              >
                All Products
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  type="button"
                  onClick={() => onCategoryChange(cat.slug)}
                  className={`px-3 py-1.5 rounded-[var(--radius-pill)] text-body-sm transition-colors ${
                    selectedCategory === cat.slug
                      ? "bg-[var(--primary)] text-white font-medium"
                      : "bg-[var(--background)] text-[var(--foreground)] border border-[var(--border)]"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="mobile-sort-select"
              className="block text-ui-sm font-semibold text-[var(--primary)] uppercase tracking-wider mb-2"
            >
              Sort
            </label>
            <select
              id="mobile-sort-select"
              value={sortOrder}
              onChange={(event) =>
                onSortChange(event.target.value as "featured" | "name-asc")
              }
              className="w-full px-3 py-2 bg-[var(--background)] border border-[var(--border)] rounded-[var(--radius-md)] text-body-sm text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
            >
              <option value="featured">Featured</option>
              <option value="name-asc">Name A–Z</option>
            </select>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-2 border-t border-[var(--border)]">
            <button
              type="button"
              onClick={onReset}
              className="text-body-sm text-[var(--accent)] font-medium hover:underline"
            >
              Reset Filters
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-[var(--primary)] text-white rounded-[var(--radius-md)] text-body-sm font-medium"
            >
              Close filters
            </button>
          </div>
        </div>
      )}

      {/* Desktop Filter Bar (>= 768px) */}
      <div className="hidden md:flex items-center justify-between gap-4 py-3 border-b border-[var(--border)] mb-6">
        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto py-1">
          <span className="text-ui-sm font-medium text-[var(--muted)] uppercase tracking-wider mr-1 shrink-0">
            Category:
          </span>
          <button
            type="button"
            onClick={() => onCategoryChange("")}
            className={`px-3 py-1.5 rounded-[var(--radius-pill)] text-body-sm transition-colors shrink-0 ${
              selectedCategory === ""
                ? "bg-[var(--primary)] text-white font-medium"
                : "bg-[var(--surface)] text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--muted)]"
            }`}
          >
            All Products
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              type="button"
              onClick={() => onCategoryChange(cat.slug)}
              className={`px-3 py-1.5 rounded-[var(--radius-pill)] text-body-sm transition-colors shrink-0 ${
                selectedCategory === cat.slug
                  ? "bg-[var(--primary)] text-white font-medium"
                  : "bg-[var(--surface)] text-[var(--foreground)] border border-[var(--border)] hover:border-[var(--muted)]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <div className="flex items-center gap-2">
            <label
              htmlFor="desktop-sort-select"
              className="text-ui-sm font-medium text-[var(--muted)] uppercase tracking-wider shrink-0"
            >
              Sort:
            </label>
            <select
              id="desktop-sort-select"
              value={sortOrder}
              onChange={(event) =>
                onSortChange(event.target.value as "featured" | "name-asc")
              }
              className="px-3 py-1.5 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-md)] text-body-sm text-[var(--foreground)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
            >
              <option value="featured">Featured</option>
              <option value="name-asc">Name A–Z</option>
            </select>
          </div>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={onReset}
              className="text-body-sm text-[var(--accent)] font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
            >
              Reset
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
