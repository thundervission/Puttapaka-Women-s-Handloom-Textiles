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
import type { Product } from "@/types/product";

export const products: Product[] = [
  // ----------------------------------------------------------------
  // Add products here once the business owner confirms:
  //   - Which images belong to each product
  //   - Product name, fabric, color
  //   - Price (integer INR, e.g. 1850)
  //   - Availability
  //   - Blouse included yes/no
  //
  // Template:
  // {
  //   id: "PWT-001",
  //   slug: "puttapaka-handloom-saree-[color]",
  //   name: "[TBD]",
  //   description: "[TBD — owner-approved description]",
  //   priceInr: 0,              // TBD
  //   categorySlug: "[TBD]",   // must match a slug in categories.ts
  //   fabric: "[TBD]",
  //   color: "[TBD]",
  //   blouseIncluded: true,
  //   availability: "available",
  //   featured: true,
  //   images: [
  //     { src: "/products/pwt-img-XXX.webp", alt: "[TBD — descriptive alt]" },
  //   ],
  // },
  // ----------------------------------------------------------------
];

// ----------------------------------------------------------------
// Query helpers — used by pages and the sitemap
// ----------------------------------------------------------------

/** Returns all products where availability !== 'hidden' */
export function getPublicProducts(): Product[] {
  return products.filter((p) => p.availability !== "hidden");
}

/** Returns public products where featured === true */
export function getFeaturedProducts(): Product[] {
  return getPublicProducts().filter((p) => p.featured === true);
}

/** Returns a single non-hidden product by slug, or undefined */
export function getProductBySlug(slug: string): Product | undefined {
  return getPublicProducts().find((p) => p.slug === slug);
}

/** Returns deduplicated category slugs present in non-hidden products */
export function getPublicCategorySlugs(): string[] {
  return [...new Set(getPublicProducts().map((p) => p.categorySlug))];
}
