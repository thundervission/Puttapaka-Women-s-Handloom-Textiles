interface CollectionHeaderProps {
  name: string;
  description?: string;
  image?: string;
  count?: number;
}

/**
 * CollectionHeader — Server Component.
 * Displays category title, optional description, count, and optional visual banner.
 * Designed with restrained editorial typography matching the Puttapaka visual system.
 */
export default function CollectionHeader({
  name,
  description,
  image,
  count,
}: CollectionHeaderProps) {
  return (
    <header className="py-8 sm:py-12 px-4 sm:px-6 bg-[var(--surface)] border-b border-[var(--border)] mb-8 sm:mb-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-ui-sm uppercase tracking-widest text-[var(--accent)] font-medium">
              Handloom Collection
            </span>
            {count !== undefined && (
              <span className="text-ui-sm text-[var(--muted)]">
                &bull; {count} {count === 1 ? "Product" : "Products"}
              </span>
            )}
          </div>

          <h1 className="text-display-lg sm:text-display-xl text-[var(--primary)] font-normal tracking-tight">
            {name}
          </h1>

          {description && (
            <p className="text-body-md sm:text-body-lg text-[var(--muted)] mt-3 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {image && (
          <div className="w-full md:w-72 aspect-[16/9] md:aspect-[4/3] rounded-[var(--radius-md)] overflow-hidden border border-[var(--border)] shrink-0">
            <img
              src={image}
              alt={`${name} collection cover`}
              width={600}
              height={450}
              loading="eager"
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </header>
  );
}
