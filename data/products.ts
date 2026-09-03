/**
 * Product catalog — single source of truth for all V1 product data.
 *
 * 111 product images are ready in /public/products/ as pwt-img-001.webp
 * through pwt-img-111.webp (renamed and converted to WebP from WhatsApp photos).
 *
 * Image batches by original send time:
 *   pwt-img-001 – 016  (16 images, batch 09:28)
 *   pwt-img-017 – 028  (12 images, batch 09:29)
 *   pwt-img-029 – 059  (31 images, batch 09:30–09:31)
 *   pwt-img-060 – 079  (20 images, batch 09:41)
 *   pwt-img-080 – 111  (32 images, batch 09:51–09:53)
 *
 * TBD — product details (names, descriptions, prices, fabric, color,
 * availability, and which images belong to which product) must be confirmed
 * by the business owner before this file is populated for production.
 */
import type { Product, PublishedProduct } from "@/types/product";
import { draftProducts } from "@/data/draft-products";

export const products: Product[] = [
  {
    id: "PWT-001",
    slug: "puttapaka-handloom-cotton-saree-maroon",
    name: "Maroon Puttapaka Handloom Cotton Saree",
    description: "Authentic handloom cotton saree woven in Puttapaka village with traditional Ikkat motifs and contrast border.",
    priceInr: 1850,
    categorySlug: "cotton-sarees",
    fabric: "Handloom Cotton",
    color: "Maroon",
    dimensions: "6.3m × 1.1m",
    blouseIncluded: true,
    careInstructions: ["Dry clean only", "Store in a clean cotton bag"],
    availability: "available",
    status: "published",
    featured: true,
    newArrival: true,
    images: [
      {
        src: "/products/pwt-img-001.webp",
        alt: "Maroon Puttapaka handloom cotton saree with woven border",
      },
      {
        src: "/products/pwt-img-002.webp",
        alt: "Detail view of Maroon Puttapaka handloom cotton saree pallu",
      },
    ],
  },
  {
    id: "PWT-002",
    slug: "puttapaka-handloom-silk-saree-navy",
    name: "Navy Blue Puttapaka Handloom Silk Saree",
    description: "Fine handloom silk saree featuring traditional woven motifs and rich silk texture.",
    priceInr: 4500,
    categorySlug: "silk-sarees",
    fabric: "Handloom Silk",
    color: "Navy Blue",
    dimensions: "6.3m × 1.1m",
    blouseIncluded: true,
    careInstructions: ["Dry clean only"],
    availability: "available",
    status: "published",
    featured: true,
    newArrival: false,
    images: [
      {
        src: "/products/pwt-img-017.webp",
        alt: "Navy Blue Puttapaka handloom silk saree",
      },
    ],
  },
  ...draftProducts,
];

// ----------------------------------------------------------------
// Query helpers — used by pages and the sitemap
// ----------------------------------------------------------------

/** Returns published products that are not explicitly hidden from discovery. */
export function getPublicProducts(): PublishedProduct[] {
  return products.filter(
    (product): product is PublishedProduct =>
      product.status === "published" &&
      product.availability !== "hidden" &&
      product.categorySlug !== undefined
  );
}

/** Returns draft records for the local catalog review route only. */
export function getReviewProducts(): Product[] {
  return products.filter((product) => product.status === "draft");
}

/** Returns public products where featured === true */
export function getFeaturedProducts(): PublishedProduct[] {
  return getPublicProducts().filter((p) => p.featured === true);
}

/** Returns a single published, non-hidden product by slug, or undefined. */
export function getProductBySlug(slug: string): PublishedProduct | undefined {
  return getPublicProducts().find((p) => p.slug === slug);
}

/** Returns deduplicated category slugs present in non-hidden products */
export function getPublicCategorySlugs(): string[] {
  return [...new Set(getPublicProducts().map((p) => p.categorySlug))];
}
