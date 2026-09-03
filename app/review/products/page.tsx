import type { Metadata } from "next";
import { getReviewProducts } from "@/data/products";
import { categories } from "@/data/categories";
import ProductGallery from "@/components/product/ProductGallery";
import ReviewProductDetails from "@/components/product/ReviewProductDetails";
import ReviewProductPanel from "@/components/product/ReviewProductPanel";

export const metadata: Metadata = {
  title: "Catalog Review",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ReviewProductsPage() {
  const products = getReviewProducts();

  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 sm:py-12">
      <header className="space-y-3">
        <p className="text-ui-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
          Internal catalog workspace
        </p>
        <h1 className="text-display-lg text-[var(--primary)] sm:text-display-xl">
          Product review
        </h1>
        <p className="max-w-2xl text-body-md leading-relaxed text-[var(--muted)]">
          Draft records are shown here for local review only. They are not part
          of the public catalog until their status is changed to published.
        </p>
      </header>

      {products.length === 0 ? (
        <div className="border border-[var(--border)] bg-[var(--surface)] p-6 text-body-md text-[var(--muted)]">
          No draft products are currently available for review.
        </div>
      ) : (
        <div className="space-y-16">
          {products.map((product) => (
            <article
              key={product.id}
              id={product.slug}
              className="grid grid-cols-1 items-start gap-8 border-t border-[var(--border)] pt-8 md:grid-cols-2 lg:gap-12"
            >
              <ProductGallery images={product.images} productName={product.name} />
              <div className="space-y-6">
                <ReviewProductDetails product={product} />
                <div className="border border-[var(--border)] bg-[var(--background)] p-4 text-body-sm">
                  <p className="font-semibold text-[var(--primary)]">Image files</p>
                  <ul className="mt-2 space-y-1 text-[var(--muted)]">
                    {product.images.map((image) => (
                      <li key={image.src}>{image.src.split("/").pop()}</li>
                    ))}
                  </ul>
                </div>
                <ReviewProductPanel product={product} categories={categories} />
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}