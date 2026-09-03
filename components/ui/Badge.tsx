import type { ProductAvailability } from "@/types/product";

interface BadgeProps {
  variant: ProductAvailability;
  label: string;
}

const variantStyles: Record<ProductAvailability, string> = {
  available:  "bg-emerald-50 text-emerald-800 border border-emerald-200",
  low_stock:  "bg-amber-50 text-amber-800 border border-amber-200",
  sold_out:   "bg-stone-100 text-stone-600 border border-stone-200",
  pre_order:  "bg-blue-50 text-blue-800 border border-blue-200",
  hidden:     "bg-stone-100 text-stone-500 border border-stone-200",
};

/**
 * Availability badge.
 * Always renders both a colored background AND a visible text label —
 * never relies on color alone to convey status (accessibility requirement).
 */
export default function Badge({ variant, label }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-ui-sm font-medium ${variantStyles[variant]}`}
    >
      {label}
    </span>
  );
}
