/**
 * Product availability states.
 * - available   : in stock, ready to order
 * - low_stock   : limited units remaining
 * - sold_out    : currently unavailable
 * - pre_order   : accept inquiries, fulfil when stock arrives
 * - hidden      : never rendered on any public page or sitemap
 */
export type ProductAvailability =
  | "available"
  | "low_stock"
  | "sold_out"
  | "pre_order"
  | "hidden";

/**
 * A single image for a product.
 * `alt` is required and must describe the product visually —
 * never use generic strings like "product image" or "photo".
 */
export interface ProductImage {
  /** Path relative to /public, e.g. '/products/pwt-img-001.webp' */
  src: string;
  /** Descriptive alt text, e.g. 'Maroon Puttapaka handloom cotton saree with woven gold border' */
  alt: string;
}

/**
 * A single product record.
 * Price is stored as a plain positive integer in Indian Rupees (e.g. 1850).
 * Never store formatted strings like '₹1,850' — formatting happens at display time.
 */
export interface Product {
  /** Stable unique identifier following PWT-XXX pattern, e.g. 'PWT-001' */
  id: string;
  /** URL-safe lowercase slug, e.g. 'puttapaka-handloom-cotton-saree-maroon' */
  slug: string;
  /** Display name */
  name: string;
  /** Full product description — owner-approved copy only */
  description: string;
  /** Price in Indian Rupees as a positive integer, e.g. 1850 */
  priceInr: number;
  /** Matches a slug in data/categories.ts */
  categorySlug: string;
  /** Fabric type, e.g. 'Handloom Cotton' */
  fabric?: string;
  /** Primary colour, e.g. 'Maroon' */
  color?: string;
  /** Saree dimensions, e.g. '6.3m × 1.1m' */
  dimensions?: string;
  /** Whether a matching blouse piece is included */
  blouseIncluded?: boolean;
  /** Care instructions as a list of steps */
  careInstructions?: string[];
  /** Current availability state */
  availability: ProductAvailability;
  /** Show in featured sections on the homepage */
  featured?: boolean;
  /** Show in new arrivals section */
  newArrival?: boolean;
  /** Product images — first image is the primary (used for og:image and product cards) */
  images: ProductImage[];
  /** Optional SEO overrides for this product page */
  seo?: {
    /** Override the default '<name> | Puttapaka' title */
    title?: string;
    /** Override the default description */
    description?: string;
  };
}
