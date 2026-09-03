import Link from "next/link";
import type { Category } from "@/data/categories";

interface CategoryCardProps {
  category: Category;
}

/**
 * CategoryCard — Server Component.
 * Displays a single handloom textile category card linking to its collection page.
 */
export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <article className="group flex flex-col h-full bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-md)] overflow-hidden transition-transform duration-200 hover:scale-[1.02]">
      <Link
        href={`/collections/${category.slug}`}
        className="flex flex-col h-full focus-visible:outline-2 focus-visible:outline-[var(--primary)] focus-visible:outline-offset-2"
        aria-label={`Explore ${category.name} collection`}
      >
        {/* Aspect 16:9 Image Container */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--background)]">
          <img
            src={category.image || "/products/pwt-img-001.webp"}
            alt={`${category.name} collection preview`}
            width={600}
            height={337}
            loading="lazy"
            className="w-full h-full object-cover transition-opacity duration-200 group-hover:opacity-95"
          />
        </div>

        {/* Category Details */}
        <div className="flex flex-col flex-1 p-5 sm:p-6">
          <span className="text-ui-sm text-[var(--accent)] font-medium uppercase tracking-wider mb-1">
            Collection
          </span>

          <h3 className="text-display-md text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors mb-2">
            {category.name}
          </h3>

          {category.description && (
            <p className="text-body-sm text-[var(--muted)] line-clamp-2 mb-4 leading-relaxed">
              {category.description}
            </p>
          )}

          <div className="mt-auto pt-3 border-t border-[var(--border)]/60 flex items-center justify-between">
            <span className="text-body-sm font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)]">
              Browse Collection &rarr;
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
