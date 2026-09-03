import type { PublishedProduct } from "@/types/product";
import ProductCard from "@/components/product/ProductCard";

interface ProductGridProps {
  products: PublishedProduct[];
  emptyMessage?: string;
}

/**
 * ProductGrid — Server Component.
 * Displays a responsive grid of ProductCard components.
 * Gracefully handles empty product collections.
 */
export default function ProductGrid({
  products,
  emptyMessage = "No products found in this collection.",
}: ProductGridProps) {
  if (!products || products.length === 0) {
    return (
      <div className="py-16 px-4 text-center bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-md)]">
        <p className="text-body-lg text-[var(--muted)]">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
      {products.map((product, index) => (
        <ProductCard
          key={product.id || product.slug}
          product={product}
          priority={index < 2}
        />
      ))}
    </div>
  );
}
