"use client";

import { useState, useMemo } from "react";
import type { PublishedProduct } from "@/types/product";
import type { Category } from "@/data/categories";
import { filterBySearch, filterByCategory, sortByPrice } from "@/lib/utils";
import SearchBar from "@/components/shop/SearchBar";
import FilterPanel from "@/components/shop/FilterPanel";
import ProductGrid from "@/components/product/ProductGrid";
import Button from "@/components/ui/Button";

interface ShopFiltersProps {
  products: PublishedProduct[];
  categories: Category[];
}

/**
 * ShopFilters — Client Component.
 * Coordinates search query, category selection, and price sorting state.
 * Uses lib/utils.ts helpers for filtering and renders live product results.
 */
export default function ShopFilters({
  products,
  categories,
}: ShopFiltersProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState<"default" | "asc" | "desc">(
    "default"
  );

  // Calculate active filter count for badge
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (searchQuery.trim().length > 0) count++;
    if (selectedCategory !== "") count++;
    if (sortOrder !== "default") count++;
    return count;
  }, [searchQuery, selectedCategory, sortOrder]);

  // Apply filters sequentially
  const filteredProducts = useMemo(() => {
    let result = products;

    // 1. Text search filter
    if (searchQuery.trim().length > 0) {
      result = filterBySearch(result, searchQuery);
    }

    // 2. Category filter
    if (selectedCategory !== "") {
      result = filterByCategory(result, selectedCategory);
    }

    // 3. Price sort
    if (sortOrder !== "default") {
      result = sortByPrice(result, sortOrder);
    }

    return result;
  }, [products, searchQuery, selectedCategory, sortOrder]);

  const handleReset = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setSortOrder("default");
  };

  return (
    <div className="space-y-6">
      {/* Top Search Bar & Filter Panel Section */}
      <div className="space-y-4">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          onClear={() => setSearchQuery("")}
        />

        <FilterPanel
          categories={categories}
          selectedCategory={selectedCategory}
          sortOrder={sortOrder}
          onCategoryChange={setSelectedCategory}
          onSortChange={setSortOrder}
          onReset={handleReset}
          activeFilterCount={activeFilterCount}
        />
      </div>

      {/* Results Header: Live Count Bar */}
      <div className="flex items-center justify-between py-2 border-b border-[var(--border)]/40">
        <p className="text-body-sm text-[var(--muted)]">
          Showing{" "}
          <span className="font-semibold text-[var(--foreground)]">
            {filteredProducts.length}
          </span>{" "}
          of {products.length} {products.length === 1 ? "product" : "products"}
        </p>

        {activeFilterCount > 0 && (
          <button
            type="button"
            onClick={handleReset}
            className="text-body-sm text-[var(--accent)] font-medium hover:underline"
          >
            Clear active filters
          </button>
        )}
      </div>

      {/* Product Results Grid / Zero-Results Graceful Handling */}
      {filteredProducts.length > 0 ? (
        <ProductGrid products={filteredProducts} />
      ) : (
        <div className="py-16 px-4 text-center bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-md)] space-y-4">
          <div className="max-w-md mx-auto space-y-2">
            <h3 className="text-display-md text-[var(--primary)]">
              No matching products found
            </h3>
            <p className="text-body-md text-[var(--muted)]">
              We couldn’t find any sarees or textiles matching your criteria.
              Try adjusting your search terms or filters.
            </p>
          </div>
          <div className="pt-2">
            <Button onClick={handleReset} variant="outline">
              Reset Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
