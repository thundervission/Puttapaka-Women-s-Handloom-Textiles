import type { ProductAvailability as AvailabilityType } from "@/types/product";
import Badge from "@/components/ui/Badge";

interface ProductAvailabilityProps {
  availability?: AvailabilityType;
}

const availabilityLabels: Record<AvailabilityType, string> = {
  available: "Available",
  low_stock: "Low Stock",
  sold_out: "Sold Out",
  pre_order: "Pre-order",
  hidden: "Hidden",
};

/**
 * ProductAvailability — Server Component.
 * Displays availability status as a visual badge and an explicit text label.
 * Always ensures WCAG 2.1 compliance by never relying on color alone.
 */
export default function ProductAvailability({
  availability,
}: ProductAvailabilityProps) {
  if (!availability) return null;
  const label = availabilityLabels[availability] ?? "Unknown";
  return <Badge variant={availability} label={label} />;
}
