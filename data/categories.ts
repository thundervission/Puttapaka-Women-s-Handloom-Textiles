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
export const categories: Category[] = [
  {
    slug: "cotton-sarees",
    name: "Cotton Sarees",
    description: "Authentic handloom cotton sarees woven with traditional Ikkat patterns in Puttapaka.",
    image: "/products/pwt-img-001.webp",
  },
  {
    slug: "silk-sarees",
    name: "Silk Sarees",
    description: "Premium handloom silk sarees featuring intricate hand-woven designs.",
    image: "/products/pwt-img-017.webp",
  },
  {
    slug: "sarees",
    name: "Sarees",
    description: "Explore our handloom saree collection from Puttapaka.",
    image: "/products/pwt-img-003.webp",
  },
  {
    slug: "handbags",
    name: "Handbags",
    description: "Explore our handloom handbag collection.",
    image: "/products/pwt-img-006.webp",
  },
  {
    slug: "textiles",
    name: "Textiles",
    description: "Explore our handloom textile collection.",
    image: "/products/pwt-img-009.webp",
  },
  {
    slug: "home-textiles",
    name: "Home Textiles",
    description: "Explore our handloom home textile collection.",
    image: "/products/pwt-img-038.webp",
  },
  {
    slug: "other",
    name: "Other Textiles",
    description: "Explore other handloom textile products.",
    image: "/products/pwt-img-016.webp",
  },
];

/** Returns the category matching the given slug, or undefined if not found. */
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
