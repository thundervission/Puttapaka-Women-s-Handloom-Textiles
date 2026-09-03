import type { Category } from "@/data/categories";
import CategoryCard from "@/components/home/CategoryCard";

interface CategoryGridProps {
  categories: Category[];
}

/**
 * CategoryGrid — Server Component.
 * Displays a responsive grid of featured category cards.
 */
export default function CategoryGrid({ categories }: CategoryGridProps) {
  if (!categories || categories.length === 0) return null;

  return (
    <section
      className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 space-y-8"
      aria-label="Featured Collections"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[var(--border)] pb-4">
        <div>
          <span className="text-ui-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
            Handloom Categories
          </span>
          <h2 className="text-display-lg text-[var(--primary)] font-normal tracking-tight mt-1">
            Featured Collections
          </h2>
        </div>
        <p className="text-body-md text-[var(--muted)] max-w-md">
          Explore our range of authentic cotton and silk handloom sarees crafted in Puttapaka.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </section>
  );
}
