/**
 * Normalizes a search query for customer-friendly matching. Separators such
 * as spaces and hyphens are treated alike, so "Home Textiles" matches the
 * `home-textiles` catalog category.
 */
export function normalizeSearchQuery(query: string): string {
  return query.trim().toLowerCase().replace(/[\s_-]+/g, " ");
}

/**
 * Filters products by a normalized text query against
 * name, ID, fabric, colour, category, description, and public pattern text.
 */
export function filterBySearch<
  T extends {
    name: string;
    id: string;
    fabric?: string;
    color?: string;
    categorySlug: string;
    description?: string;
    review?: { detectedPattern?: string };
  }
>(products: T[], query: string): T[] {
  const normalized = normalizeSearchQuery(query);
  if (!normalized) return products;
  return products.filter((p) =>
    [
      p.name,
      p.id,
      p.fabric ?? "",
      p.color ?? "",
      p.categorySlug,
      p.description ?? "",
      p.review?.detectedPattern ?? "",
    ].some((field) =>
      normalizeSearchQuery(field).includes(normalized)
    )
  );
}

/**
 * Filters products by exact categorySlug match.
 */
export function filterByCategory<T extends { categorySlug: string }>(
  products: T[],
  categorySlug: string
): T[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

/**
 * Merges Tailwind class names, filtering out falsy values.
 */
export function cn(
  ...classes: (string | undefined | false | null)[]
): string {
  return classes.filter(Boolean).join(" ");
}
