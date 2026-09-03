import type { PublishedProduct } from "@/types/product";
import ProductGrid from "@/components/product/ProductGrid";

interface CollectionGridProps {
  products: PublishedProduct[];
  categoryName?: string;
}

/**
 * CollectionGrid — Server Component.
 * Displays a collection's product list using the core ProductGrid system.
 * Handles empty collection states gracefully with custom messages.
 */
export default function CollectionGrid({
  products,
  categoryName,
}: CollectionGridProps) {
  const emptyMsg = categoryName
    ? `No sarees or handloom textiles currently available in ${categoryName}.`
    : "No products found in this collection.";

  return <ProductGrid products={products} emptyMessage={emptyMsg} />;
}
