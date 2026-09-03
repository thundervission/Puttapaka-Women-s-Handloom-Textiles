"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  placeholder?: string;
  className?: string;
}

/**
 * SearchBar — Client Component.
 * Interactive text search input with clear action and accessible focus rings.
 */
export default function SearchBar({
  value,
  onChange,
  onClear,
  placeholder = "Search sarees by name, fabric, color, or ID...",
  className = "",
}: SearchBarProps) {
  return (
    <div className={`relative flex items-center w-full ${className}`}>
      <label htmlFor="shop-search-input" className="sr-only">
        Search products
      </label>

      {/* Search Icon */}
      <div className="absolute left-4 pointer-events-none text-[var(--muted)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>

      {/* Input Field */}
      <input
        id="shop-search-input"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-11 pr-10 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-pill)] text-body-md text-[var(--foreground)] placeholder-[var(--muted)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-1"
      />

      {/* Clear Button */}
      {value.trim().length > 0 && (
        <button
          type="button"
          onClick={onClear}
          aria-label="Clear search input"
          className="absolute right-3.5 p-1 rounded-full text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--border)]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
