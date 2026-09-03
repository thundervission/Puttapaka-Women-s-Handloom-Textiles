/**
 * Formats an integer INR amount as '₹1,850'.
 * Display layer only — never used to store or parse prices.
 */
export function formatPrice(priceInr: number): string {
  return `₹${priceInr.toLocaleString("en-IN")}`;
}

/**
 * Normalizes a search query: trim + lowercase.
 */
export function normalizeSearchQuery(query: string): string {
  return query.trim().toLowerCase();
}

/**
 * Filters products by a normalized text query against
 * name, id, fabric, color, and categorySlug fields.
 */
export function filterBySearch<
  T extends {
    name: string;
    id: string;
    fabric?: string;
    color?: string;
    categorySlug: string;
  }
>(products: T[], query: string): T[] {
  const normalized = normalizeSearchQuery(query);
  if (!normalized) return products;
  return products.filter((p) =>
    [p.name, p.id, p.fabric ?? "", p.color ?? "", p.categorySlug].some(
      (field) => field.toLowerCase().includes(normalized)
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
 * Sorts products by priceInr. Returns a new array — does not mutate input.
 */
export function sortByPrice<T extends { priceInr: number }>(
  products: T[],
  direction: "asc" | "desc"
): T[] {
  return [...products].sort((a, b) =>
    direction === "asc" ? a.priceInr - b.priceInr : b.priceInr - a.priceInr
  );
}

/**
 * Merges Tailwind class names, filtering out falsy values.
 */
export function cn(
  ...classes: (string | undefined | false | null)[]
): string {
  return classes.filter(Boolean).join(" ");
}
