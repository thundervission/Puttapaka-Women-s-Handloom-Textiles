import Link from "next/link";
import type { PublicCatalogProduct } from "@/types/product";
import ProductAvailability from "@/components/product/ProductAvailability";

interface ProductCardProps {
  product: PublicCatalogProduct;
  priority?: boolean;
}

/**
 * ProductCard — Server Component.
 * Displays a single product in shop grids, collection lists, and featured sections.
 * Links to /product/[slug].
 */
export default function ProductCard({
  product,
  priority = false,
}: ProductCardProps) {
  const primaryImage = product.images[0] ?? {
    src: "/products/pwt-img-001.webp",
    alt: product.name,
  };

  return (
    <article className="group flex flex-col h-full bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-md)] overflow-hidden transition-transform duration-200 hover:scale-[1.02]">
      <Link
        href={`/product/${product.slug}`}
        className="flex flex-col h-full focus-visible:outline-2 focus-visible:outline-[var(--primary)] focus-visible:outline-offset-2"
        aria-label={product.name}
      >
        {/* Aspect 3:4 Image Container */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-[var(--background)]">
          <img
            src={primaryImage.src}
            alt={primaryImage.alt}
            width={600}
            height={800}
            loading={priority ? "eager" : "lazy"}
            className="w-full h-full object-cover transition-opacity duration-200 group-hover:opacity-95"
          />
          <div className="absolute top-3 right-3">
            <ProductAvailability availability={product.availability} />
          </div>
        </div>

        {/* Card Content Body */}
        <div className="flex flex-col flex-1 p-4 sm:p-5">
          {product.fabric && (
            <span className="text-ui-sm text-[var(--muted)] mb-1 uppercase tracking-wider">
              {product.fabric}
            </span>
          )}

          <h3 className="text-display-md text-[var(--primary)] line-clamp-2 mb-2 group-hover:text-[var(--accent)] transition-colors">
            {product.name}
          </h3>

          <div className="mt-auto pt-3 flex items-center justify-between border-t border-[var(--border)]/60">
            <span className="text-body-lg font-semibold text-[var(--foreground)]">
              Price on request
            </span>
            <span className="text-body-sm text-[var(--accent)] font-medium underline-offset-4 group-hover:underline">
              View details &rarr;
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
