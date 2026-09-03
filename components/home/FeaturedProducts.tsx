import Link from "next/link";
import type { PublishedProduct } from "@/types/product";
import ProductGrid from "@/components/product/ProductGrid";
import Button from "@/components/ui/Button";

interface FeaturedProductsProps {
  products: PublishedProduct[];
}

/**
 * FeaturedProducts — Server Component.
 * Displays a curated grid of featured sarees using the core ProductGrid system.
 */
export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  if (!products || products.length === 0) return null;

  return (
    <section
      className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 space-y-8"
      aria-label="Featured Sarees"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[var(--border)] pb-4">
        <div>
          <span className="text-ui-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
            Curated Selection
          </span>
          <h2 className="text-display-lg text-[var(--primary)] font-normal tracking-tight mt-1">
            Featured Sarees
          </h2>
        </div>

        <Link href="/shop" className="shrink-0">
          <Button variant="outline" className="text-body-sm">
            View All Products &rarr;
          </Button>
        </Link>
      </div>

      <ProductGrid products={products} />
    </section>
  );
}
