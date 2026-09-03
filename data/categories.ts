/**
 * Product categories.
 *
 * Each category slug must match at least one product.categorySlug in data/products.ts.
 * Descriptions and images are TBD — to be supplied by the business owner.
 */
export interface Category {
  /** URL-safe lowercase slug — must match product.categorySlug values */
  slug: string;
  /** Display name shown on collection pages and category cards */
  name: string;
  /** Short description for collection page header — owner-approved copy only */
  description: string;
  /** Path to category image in /public, e.g. '/products/pwt-img-001.webp' */
  image: string;
}

/**
 * TBD — populate once product data is confirmed by the business owner.
 *
 * Example structure:
 * {
 *   slug: "cotton-sarees",
 *   name: "Cotton Sarees",
 *   description: "[TBD]",
 *   image: "/products/pwt-img-001.webp",
 * }
 */
export const categories: Category[] = [];

/** Returns the category matching the given slug, or undefined if not found. */
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
