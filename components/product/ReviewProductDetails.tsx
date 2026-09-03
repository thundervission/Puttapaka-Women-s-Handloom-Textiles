import type { Product } from "@/types/product";
import { formatPrice } from "@/lib/utils";

interface ReviewProductDetailsProps {
  product: Product;
}

export default function ReviewProductDetails({
  product,
}: ReviewProductDetailsProps) {
  return (
    <section className="flex flex-col space-y-6" aria-labelledby="review-product-name">
      <div className="border border-[var(--accent)] bg-[var(--surface)] px-4 py-3 text-ui-sm font-semibold text-[var(--accent)]">
        CATALOG REVIEW — NOT PUBLISHED
      </div>

      <div>
        <p className="text-ui-sm font-medium tracking-wider text-[var(--muted)]">
          ID: {product.id}
        </p>
        <h1
          id="review-product-name"
          className="text-display-lg text-[var(--primary)] tracking-tight"
        >
          {product.name}
        </h1>
      </div>

      {product.review && (
        <dl className="space-y-3 border-b border-[var(--border)] pb-4 text-body-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-[var(--muted)]">AI confidence</dt>
            <dd className="font-medium text-[var(--foreground)]">
              {product.review.confidence}
            </dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-[var(--muted)]">Product type</dt>
            <dd className="text-right font-medium text-[var(--foreground)]">
              {product.review.productType}
            </dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-[var(--muted)]">Visible colors</dt>
            <dd className="text-right font-medium text-[var(--foreground)]">
              {product.review.detectedColors}
            </dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-[var(--muted)]">Visible pattern</dt>
            <dd className="text-right font-medium text-[var(--foreground)]">
              {product.review.detectedPattern}
            </dd>
          </div>
        </dl>
      )}

      {product.description && (
        <p className="text-body-md leading-relaxed text-[var(--foreground)]">
          {product.description}
        </p>
      )}

      <dl className="space-y-3 border-y border-[var(--border)] py-4 text-body-sm">
        {product.categorySlug && (
          <div className="flex justify-between gap-4">
            <dt className="text-[var(--muted)]">Category</dt>
            <dd className="font-medium text-[var(--foreground)]">
              {product.categorySlug}
            </dd>
          </div>
        )}
        {product.fabric && (
          <div className="flex justify-between gap-4">
            <dt className="text-[var(--muted)]">Fabric</dt>
            <dd className="font-medium text-[var(--foreground)]">
              {product.fabric}
            </dd>
          </div>
        )}
        {product.color && (
          <div className="flex justify-between gap-4">
            <dt className="text-[var(--muted)]">Color</dt>
            <dd className="font-medium text-[var(--foreground)]">
              {product.color}
            </dd>
          </div>
        )}
        {product.dimensions && (
          <div className="flex justify-between gap-4">
            <dt className="text-[var(--muted)]">Dimensions</dt>
            <dd className="font-medium text-[var(--foreground)]">
              {product.dimensions}
            </dd>
          </div>
        )}
        {product.priceInr !== undefined && (
          <div className="flex justify-between gap-4">
            <dt className="text-[var(--muted)]">Price</dt>
            <dd className="font-medium text-[var(--foreground)]">
              {formatPrice(product.priceInr)}
            </dd>
          </div>
        )}
        {product.availability && (
          <div className="flex justify-between gap-4">
            <dt className="text-[var(--muted)]">Availability</dt>
            <dd className="font-medium text-[var(--foreground)]">
              {product.availability}
            </dd>
          </div>
        )}
      </dl>

      <p className="text-body-sm leading-relaxed text-[var(--muted)]">
        Review this image, the product identity, and all business fields before
        changing this record to published.
      </p>
    </section>
  );
}
