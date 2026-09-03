# Design Document

## Puttapaka Women's Handloom Textiles — V1 Website

---

## Overview

The website is a statically exported Next.js 16 (App Router) application that functions as a digital product catalog and WhatsApp commerce funnel. There is no backend, no checkout, and no authentication. The full site builds to a set of static HTML/CSS/JS files that deploy to Cloudflare Pages.

The primary user flow is:

```
Customer arrives (Instagram / Google / referral)
        ↓
Homepage — understands the brand in seconds
        ↓
Shop / Collection page — browses products
        ↓
Product detail page — evaluates the product
        ↓
"Order on WhatsApp" CTA — opens WhatsApp with pre-filled message
        ↓
WhatsApp conversation with seller
```

All product data is a TypeScript array in `data/products.ts`. The WhatsApp phone number and site URL come from environment variables set at build time on Cloudflare Pages.

---

## Architecture

### Rendering Model

```
next build
    │
    ├── Server Components render to static HTML at build time
    ├── Client Components hydrate in the browser (minimal — only interactive UI)
    └── out/ directory → deployed to Cloudflare Pages CDN
```

No Node.js server runs at runtime. Every page is pre-generated HTML. Client-side JavaScript is limited to interactive UI islands: the mobile navigation drawer, the product image gallery thumbnail switcher, and the shop page search/filter controls.

### Dependency Graph

```
app/layout.tsx
    ├── data/site.ts              ← siteConfig
    ├── components/layout/SiteHeader
    │       └── components/layout/MobileNavigation  ['use client']
    │       └── components/whatsapp/WhatsAppButton
    └── components/layout/SiteFooter

app/page.tsx (Homepage)
    ├── data/products.ts          ← getPublicProducts(), getFeaturedProducts()
    ├── data/categories.ts        ← categories[]
    ├── components/home/*         ← all Server Components
    └── lib/whatsapp.ts           ← createWhatsAppUrl

app/shop/page.tsx
    ├── data/products.ts          ← getPublicProducts()
    └── components/collection/CollectionGrid
           └── components/ui/SearchBar          ['use client']
           └── components/ui/FilterPanel        ['use client']

app/collections/[slug]/page.tsx
    ├── data/products.ts          ← getPublicProducts(), generateStaticParams
    ├── data/categories.ts        ← getCategoryBySlug()
    └── components/collection/*

app/product/[slug]/page.tsx
    ├── data/products.ts          ← getPublicProducts(), generateStaticParams
    ├── lib/whatsapp.ts           ← createWhatsAppUrl, createProductWhatsAppMessage
    ├── lib/seo.ts                ← buildProductMetadata
    └── components/product/*
           └── components/product/ProductGallery  ['use client']

app/sitemap.ts
    └── data/products.ts, data/categories.ts, data/site.ts

app/robots.ts
    └── data/site.ts
```

### Static Export Constraints (Next.js 16)

- `output: 'export'` in `next.config.ts` — produces `out/` at build time
- `images.unoptimized: true` — disables the default optimizer; product images use plain `<img>` tags with explicit `width` and `height`
- `params` is `Promise<{ slug: string }>` — every dynamic page must `await params` before reading route segments
- `generateStaticParams` must be exported from every `[slug]` page
- No Server Actions, no cookies, no rewrites, no Route Handlers that read Request — all unsupported under static export
- `dynamicParams: false` on dynamic route segments to return 404 for unknown slugs (default behavior under static export)

---

## File Structure

```
app/
  layout.tsx                   ← Root layout: fonts, header, footer, metadata defaults
  globals.css                  ← Design tokens (CSS custom properties)
  page.tsx                     ← Homepage
  not-found.tsx                ← Global 404
  sitemap.ts                   ← Sitemap generation
  robots.ts                    ← Robots.txt generation
  shop/
    page.tsx
  collections/
    [slug]/
      page.tsx
  product/
    [slug]/
      page.tsx
  about/
    page.tsx
  story/
    page.tsx
  contact/
    page.tsx
  shipping/
    page.tsx
  returns/
    page.tsx
  privacy/
    page.tsx

components/
  layout/
    SiteHeader.tsx             ← Server Component wrapper
    MobileNavigation.tsx       ← 'use client' — drawer state
    SiteFooter.tsx             ← Server Component
  home/
    HeroSection.tsx
    CategoryGrid.tsx
    CategoryCard.tsx
    FeaturedProducts.tsx
    BrandStorySection.tsx
    CraftSection.tsx
    TrustSection.tsx
    HomepageWhatsAppCTA.tsx
  product/
    ProductCard.tsx
    ProductGrid.tsx
    ProductGallery.tsx         ← 'use client' — thumbnail switching
    ProductDetails.tsx
    ProductAvailability.tsx
  collection/
    CollectionHeader.tsx
    CollectionGrid.tsx
  whatsapp/
    WhatsAppButton.tsx
    WhatsAppFloatingButton.tsx
  ui/
    Button.tsx
    Badge.tsx
    Breadcrumbs.tsx
    SearchBar.tsx              ← 'use client'
    FilterPanel.tsx            ← 'use client'

data/
  products.ts                  ← Product[] — single source of truth
  categories.ts                ← Category[] + getCategoryBySlug()
  site.ts                      ← siteConfig

lib/
  whatsapp.ts                  ← createWhatsAppUrl, createProductWhatsAppMessage
  seo.ts                       ← buildProductMetadata, buildCollectionMetadata
  utils.ts                     ← formatPrice, cn (class merging), normalizeSearchQuery

types/
  product.ts                   ← ProductAvailability, ProductImage, Product

public/
  brand/                       ← Logo, brand assets
  products/                    ← Pre-optimized product images (WebP/AVIF)
  icons/                       ← UI icons (SVG)

.env.example
```

---

## Data Models

### `types/product.ts`

```typescript
export type ProductAvailability =
  | "available"
  | "low_stock"
  | "sold_out"
  | "pre_order"
  | "hidden";

export interface ProductImage {
  src: string;  // path relative to public/, e.g. '/products/pwt-001-main.webp'
  alt: string;  // descriptive alt text, e.g. 'Puttapaka handloom cotton saree in indigo with zari border'
}

export interface Product {
  id: string;                    // 'PWT-001' — stable, unique
  slug: string;                  // 'puttapaka-handloom-cotton-saree-indigo' — URL-safe, stable
  name: string;
  description: string;
  priceInr: number;              // positive integer, e.g. 1850
  categorySlug: string;          // matches a slug in data/categories.ts
  fabric?: string;               // e.g. 'Handloom Cotton'
  color?: string;                // e.g. 'Indigo'
  dimensions?: string;           // e.g. '6.3m x 1.1m'
  blouseIncluded?: boolean;
  careInstructions?: string[];
  availability: ProductAvailability;
  featured?: boolean;
  newArrival?: boolean;
  images: ProductImage[];        // first image is primary (og:image, product card)
  seo?: {
    title?: string;              // override default '<name> | Puttapaka'
    description?: string;        // override default description
  };
}
```

### `data/categories.ts`

```typescript
export interface Category {
  slug: string;       // URL-safe, matches product.categorySlug values
  name: string;       // display name, e.g. 'Cotton Sarees'
  description: string; // TBD — to be provided by business owner
  image: string;      // path to category image in public/
}

export const categories: Category[] = [
  // populated with real data from business owner
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
```

### `data/products.ts`

```typescript
import type { Product } from "@/types/product";

export const products: Product[] = [
  // populated with real product data
];

/** Returns all products except those with availability === 'hidden' */
export function getPublicProducts(): Product[] {
  return products.filter((p) => p.availability !== "hidden");
}

/** Returns public products with featured === true */
export function getFeaturedProducts(): Product[] {
  return getPublicProducts().filter((p) => p.featured === true);
}

/** Returns a single non-hidden product by slug, or undefined */
export function getProductBySlug(slug: string): Product | undefined {
  return getPublicProducts().find((p) => p.slug === slug);
}

/** Returns unique category slugs present in public products */
export function getPublicCategorySlugs(): string[] {
  return [...new Set(getPublicProducts().map((p) => p.categorySlug))];
}
```

### `data/site.ts`

```typescript
export const siteConfig = {
  name: "Puttapaka Women's Handloom Textiles",
  shortName: "Puttapaka",
  description: "[TBD — approved business description]",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  instagramUrl: "[TBD]",
  email: "[TBD]",
  location: "[TBD]",
  businessHours: "[TBD]",
} as const;
```

---

## Utility Modules

### `lib/whatsapp.ts`

```typescript
import type { Product } from "@/types/product";
import { siteConfig } from "@/data/site";
import { formatPrice } from "@/lib/utils";

/**
 * Strips all non-digit characters from phoneNumber, then constructs
 * an encoded https://wa.me/ click-to-chat URL.
 */
export function createWhatsAppUrl({
  phoneNumber,
  message,
}: {
  phoneNumber: string;
  message: string;
}): string {
  const digits = phoneNumber.replace(/\D/g, "");
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${digits}?text=${encoded}`;
}

/**
 * Builds the pre-filled WhatsApp inquiry message for a product.
 * Does NOT imply an order is placed — only opens an inquiry conversation.
 */
export function createProductWhatsAppMessage(
  product: Product,
  productUrl: string
): string {
  return [
    `Hello ${siteConfig.name},`,
    ``,
    `I am interested in the following product:`,
    ``,
    `Product: ${product.name}`,
    `ID: ${product.id}`,
    `Price: ${formatPrice(product.priceInr)}`,
    `Link: ${productUrl}`,
    ``,
    `Could you please confirm availability and share details on how to order?`,
  ].join("\n");
}
```

### `lib/utils.ts`

```typescript
/**
 * Formats an integer INR amount as '₹1,850'.
 * Never used to store or parse prices — display layer only.
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
 * name, id, fabric, color, and categorySlug.
 */
export function filterBySearch<T extends {
  name: string;
  id: string;
  fabric?: string;
  color?: string;
  categorySlug: string;
}>(products: T[], query: string): T[] {
  const normalized = normalizeSearchQuery(query);
  if (!normalized) return products;
  return products.filter((p) =>
    [p.name, p.id, p.fabric ?? "", p.color ?? "", p.categorySlug]
      .some((field) => field.toLowerCase().includes(normalized))
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
 * Sorts products by priceInr.
 */
export function sortByPrice<T extends { priceInr: number }>(
  products: T[],
  direction: "asc" | "desc"
): T[] {
  return [...products].sort((a, b) =>
    direction === "asc" ? a.priceInr - b.priceInr : b.priceInr - a.priceInr
  );
}

/** Utility for merging Tailwind class names */
export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
```

### `lib/seo.ts`

```typescript
import type { Metadata } from "next";
import type { Product } from "@/types/product";
import { Category } from "@/data/categories";
import { siteConfig } from "@/data/site";
import { formatPrice } from "@/lib/utils";

export function buildProductMetadata(
  product: Product,
  productUrl: string
): Metadata {
  const title = product.seo?.title ?? `${product.name} | ${siteConfig.shortName}`;
  const description =
    product.seo?.description ??
    `${product.name} — ${formatPrice(product.priceInr)}. ${product.description.slice(0, 120)}`;
  const primaryImage = product.images[0]?.src ?? "";

  return {
    title,
    description,
    alternates: { canonical: productUrl },
    openGraph: {
      title,
      description,
      url: productUrl,
      type: "website",
      images: primaryImage ? [{ url: primaryImage }] : [],
    },
  };
}

export function buildCollectionMetadata(
  category: Category,
  collectionUrl: string
): Metadata {
  const title = `${category.name} | ${siteConfig.shortName}`;
  const description = category.description;
  return {
    title,
    description,
    alternates: { canonical: collectionUrl },
    openGraph: {
      title,
      description,
      url: collectionUrl,
      type: "website",
    },
  };
}
```

---

## Components and Interfaces

### Server / Client Boundary Summary

| Component | Directive | Reason |
|---|---|---|
| `app/layout.tsx` | Server | Static shell, font loading |
| `SiteHeader` | Server | Static nav links, reads siteConfig |
| `MobileNavigation` | `'use client'` | Drawer open/close state |
| `SiteFooter` | Server | Static links, copyright |
| All `home/` components | Server | No interactivity required |
| `ProductCard` | Server | Static data display |
| `ProductGrid` | Server | Receives filtered array as props |
| `ProductDetails` | Server | Static product data display |
| `ProductAvailability` | Server | Static availability badge + text |
| `ProductGallery` | `'use client'` | Thumbnail switching state |
| `CollectionHeader` | Server | Static category info |
| `CollectionGrid` | Server | Receives product array as props |
| `SearchBar` | `'use client'` | Controlled input state |
| `FilterPanel` | `'use client'` | Filter/sort state |
| `WhatsAppButton` | Server | Static link, no state |
| `WhatsAppFloatingButton` | Server | Static link |
| `Button`, `Badge`, `Breadcrumbs` | Server | Presentational |

### Key Component Interfaces

```typescript
// ProductCard — used in grids and featured sections
interface ProductCardProps {
  product: Product;
}

// ProductGrid — receives pre-filtered data from Server Component parent
interface ProductGridProps {
  products: Product[];
}

// ProductGallery — Client Component for thumbnail switching
interface ProductGalleryProps {
  images: ProductImage[];
  productName: string;
}

// ProductDetails — full detail panel
interface ProductDetailsProps {
  product: Product;
  whatsappUrl: string; // pre-built by page.tsx, not by this component
}

// ProductAvailability — badge + text, never color-only
interface ProductAvailabilityProps {
  availability: ProductAvailability;
}

// CollectionGrid — server-receives filtered products
interface CollectionGridProps {
  products: Product[];
  categoryName: string;
}

// WhatsAppButton
interface WhatsAppButtonProps {
  phoneNumber: string;  // from siteConfig, passed as prop
  message: string;      // pre-built by caller
  label?: string;       // button text
  ariaLabel?: string;   // for icon-only variant
  variant?: "primary" | "outline" | "icon";
}

// SearchBar + FilterPanel — Client Components
// receive initial data from Server Component parent via props
interface ShopFiltersProps {
  products: Product[];       // all non-hidden products, passed from server parent
  categories: Category[];    // for filter chips
}
```

---

## Page Designs

### Root Layout (`app/layout.tsx`)

```typescript
// Loads Cormorant Garamond (display) + Inter (body) via next/font/google
// Defines default metadata with siteConfig values
// Renders <SiteHeader /> and <SiteFooter /> around {children}
// Applies CSS custom property classes to <html>
```

TypeScript type: `LayoutProps<"/">` — params resolves to `{}` for the root layout.

### Dynamic Route Pages — params Pattern

Both `app/collections/[slug]/page.tsx` and `app/product/[slug]/page.tsx` follow this pattern:

```typescript
// TypeScript helper — globally available after next dev/build
export default async function Page(props: PageProps<'/product/[slug]'>) {
  const { slug } = await props.params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  // ...
}

export async function generateStaticParams() {
  return getPublicProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<'/product/[slug]'>
): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  const productUrl = `${siteConfig.siteUrl}/product/${product.slug}`;
  return buildProductMetadata(product, productUrl);
}
```

Note: `PageProps<'/product/[slug]'>` is a globally available TypeScript helper generated by `next dev`/`next build`. It types `params` as `Promise<{ slug: string }>` and `searchParams` as a Promise. No import is needed.

### Shop Page (`app/shop/page.tsx`)

The shop page uses a server/client split. The Server Component fetches all non-hidden products and passes them as props to the Client Component filter/search shell:

```typescript
// app/shop/page.tsx — Server Component
export default async function ShopPage() {
  const products = getPublicProducts();
  const cats = categories;
  return (
    <main>
      <h1>Shop</h1>
      {/* CollectionGrid is a Client Component island that owns filter state */}
      <ShopFilters products={products} categories={cats} />
    </main>
  );
}
```

`ShopFilters` is a `'use client'` component that:
- Owns `searchQuery`, `activeCategory`, `sortOrder` state
- Runs `filterBySearch`, `filterByCategory`, `sortByPrice` from `lib/utils` in-browser
- Renders `SearchBar`, `FilterPanel`, and `ProductGrid` (a Server-rendered inner component via props)
- Displays the live product count

### Sitemap (`app/sitemap.ts`)

```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;
  const staticPages = ['/', '/shop', '/about', '/story', '/contact',
    '/shipping', '/returns', '/privacy'].map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: path === '/' ? 1.0 : 0.7,
    }));

  const productPages = getPublicProducts().map((p) => ({
    url: `${base}/product/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const collectionPages = getPublicCategorySlugs().map((slug) => ({
    url: `${base}/collections/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...productPages, ...collectionPages];
}
```

---

## Design System

### CSS Custom Properties (`app/globals.css`)

```css
:root {
  /* Color tokens — warm neutral palette */
  --background: #f7f3ec;
  --foreground: #171717;
  --primary:    #29334a;
  --accent:     #a65343;
  --muted:      #756f67;
  --border:     #ded7cc;
  --surface:    #fffdf8;

  /* Typography */
  --font-display: var(--font-cormorant-garamond), Georgia, serif;
  --font-body:    var(--font-inter), system-ui, sans-serif;

  /* Spacing scale — 8px base unit */
  --space-1:  0.5rem;   /* 8px  */
  --space-2:  1rem;     /* 16px */
  --space-3:  1.5rem;   /* 24px */
  --space-4:  2rem;     /* 32px */
  --space-6:  3rem;     /* 48px */
  --space-8:  4rem;     /* 64px */
  --space-12: 6rem;     /* 96px */
  --space-16: 8rem;     /* 128px */

  /* Border radius */
  --radius-sm:   4px;
  --radius-md:   8px;    /* max for cards and image elements */
  --radius-pill: 9999px; /* for pill buttons only */
}
```

### Typography Scale

| Token | Font | Size | Weight | Use |
|---|---|---|---|---|
| `text-display-xl` | Cormorant Garamond | 3.5rem / 56px | 400 | Hero headline |
| `text-display-lg` | Cormorant Garamond | 2.5rem / 40px | 400 | Section headings, page h1 |
| `text-display-md` | Cormorant Garamond | 1.75rem / 28px | 500 | Product name, card title |
| `text-body-lg` | Inter | 1.125rem / 18px | 400 | Lead paragraph text |
| `text-body-md` | Inter | 1rem / 16px | 400 | Body, description |
| `text-body-sm` | Inter | 0.875rem / 14px | 400 | Labels, captions, badges |
| `text-ui-sm` | Inter | 0.75rem / 12px | 500 | Tiny tags, product ID |

### Breakpoints

```
Mobile first:
  base:   360–430px   — single column, vertical stack
  sm:     640px       — minor layout adjustments
  md:     768px       — product detail 2-col layout
  lg:     1024px      — desktop nav, wider grids
  xl:     1280px      — max content width cap
  2xl:    1440px      — large desktop
```

### Prohibited Patterns

- No CSS gradients with more than one hue
- No `backdrop-filter: blur` (glassmorphism)
- No decorative SVG blobs or shape overlays
- No border-radius > 8px on card or image elements
- No CSS `animation` lasting > 400ms on load
- Subtle animations only: `opacity` fade-in on images, `transform: scale(1.02)` on card hover

---

## Error Handling

### 404 / Not Found

- `app/not-found.tsx` — global fallback for unmatched routes
- `notFound()` called in product and collection pages when slug has no match
- Both surfaces render with the site header and footer for a consistent experience

### Missing Business Data (TBD)

All TBD content slots use a `{/* TBD: description */}` comment in JSX and render a visible `[TBD]` placeholder in development. A build-time ESLint rule or CI check will flag TBD strings to prevent publishing placeholder content to production.

### Missing WhatsApp Number

When `NEXT_PUBLIC_WHATSAPP_NUMBER` is an empty string (not set at build time), `WhatsAppButton` and `WhatsAppFloatingButton` render `null` — they do not produce a broken `href`. This is a graceful degradation path for local development without env vars.

```typescript
// WhatsAppButton.tsx
if (!phoneNumber) return null;
```

### Image Loading

Product images use `<img>` with `width`, `height`, and `loading="lazy"` (except the hero and primary product image above-the-fold which use `loading="eager"`). Missing `src` values surface a TypeScript error at build time due to the required `ProductImage.src` field.

---

## SEO and Open Graph

Every page sets metadata via the Next.js `metadata` export API. No manual `<head>` tags are used.

### Metadata Hierarchy

```
app/layout.tsx        → default metadata (site name, description, og:type=website)
    └── page.tsx      → page-specific metadata (title, description, og tags, canonical)
```

### Product Pages

```typescript
title:       "<product.name> | Puttapaka"   (or seo.title override)
description: "<product.description[:120]>"   (or seo.description override)
canonical:   "https://{siteUrl}/product/{slug}"
og:title:    same as title
og:description: same as description
og:url:      canonical
og:type:     "website"
og:image:    product.images[0].src  (absolute URL)
```

### Collection Pages

```typescript
title:       "<category.name> | Puttapaka"
description: category.description
canonical:   "https://{siteUrl}/collections/{slug}"
og tags:     title, description, url, type
```

---

## Accessibility Design Decisions

1. **Single `<h1>` per page** — enforced by component convention; page-level headings are in the page component, not in reusable layout components.
2. **Availability status** — `ProductAvailability` renders both a colored badge (visual) and a text label (e.g., "Available", "Low Stock", "Sold Out"). Color is never the sole indicator.
3. **Icon-only buttons** — `WhatsAppButton` with `variant="icon"` and mobile nav hamburger always carry `aria-label`.
4. **Focus styles** — Tailwind's `focus-visible:ring-2 focus-visible:ring-[var(--primary)]` applied to all interactive elements via a global base style in `globals.css`.
5. **Keyboard navigation** — mobile nav drawer traps focus while open; closes on Escape key.
6. **Alt text** — `ProductImage.alt` is a required field; data/products.ts entries must describe the product visually, not use generic text like "product image".
7. **Tab order** — layout follows visual reading order; no `tabindex` greater than 0 is used.

---

## Performance Design Decisions

1. **Server Components by default** — no client-side JS shipped for pages that don't need it.
2. **Image format** — all product images pre-optimized to WebP or AVIF before adding to `public/products/`. No raw camera files.
3. **Font loading** — `next/font/google` with `display: 'swap'` for Cormorant Garamond and Inter; font CSS inlined at build time, no render-blocking requests.
4. **Static export** — every page is a pre-rendered HTML file; Cloudflare CDN serves from edge with no server round-trips.
5. **Client JS budget** — three Client Component islands: `MobileNavigation`, `ProductGallery`, `ShopFilters`. The rest of the page JS is the Next.js runtime only.
6. **LCP image** — hero section and product detail primary image use `loading="eager"` and `fetchpriority="high"` to prioritize largest contentful paint.

---

## Testing Strategy

### Dual Testing Approach

**Unit / example tests** verify concrete behavior with specific inputs:
- `siteConfig` fields exist and env variable fallback works
- `WhatsAppButton` renders `null` when `phoneNumber` is empty
- Product detail page calls `notFound()` for unknown slugs
- Footer contains all required link groups
- Metadata exports produce expected title/description for known products

**Property-based tests** verify universal invariants across generated inputs (minimum 100 iterations each):
- All properties in the Correctness Properties section below
- Use a PBT framework appropriate to the test environment (e.g., fast-check for TypeScript)
- Tag format: `Feature: puttapaka-v1-website, Property {N}: {property_title}`

**Smoke tests** verify configuration and build-time constraints:
- `next build` completes without errors
- `next.config.ts` sets `output: 'export'`
- `tsconfig.json` has `strict: true`
- `.env.example` documents all `NEXT_PUBLIC_` variables
- No `wa.me` string literals outside `lib/whatsapp.ts`
- No hardcoded phone numbers or URLs in component files

### Client Component Testing Notes

`ShopFilters`, `MobileNavigation`, and `ProductGallery` require a browser-capable test environment (jsdom or Playwright). Property tests for the pure utility functions (`filterBySearch`, `filterByCategory`, `sortByPrice`, `filterBySearch`, `createWhatsAppUrl`, `createProductWhatsAppMessage`) run in Node.js without a DOM.

---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: generateStaticParams Completeness

*For any* non-hidden product in the product catalog, its `slug` must appear in the array returned by the `generateStaticParams` export of `app/product/[slug]/page.tsx`. Similarly, *for any* unique `categorySlug` present in non-hidden products, it must appear in the array returned by `generateStaticParams` of `app/collections/[slug]/page.tsx`.

**Validates: Requirements 1.3, 10.2, 11.2**

### Property 2: Product Data Integrity

*For any* `Product` object in `data/products.ts`:
- `id` matches the pattern `/^PWT-[A-Za-z0-9-]+$/`
- `slug` matches the pattern `/^[a-z0-9-]+$/` (URL-safe lowercase)
- `priceInr` is a positive integer (i.e., `Number.isInteger(priceInr) && priceInr > 0`)
- `id` is unique across the entire products array
- `slug` is unique across the entire products array
- `availability` is one of the five valid `ProductAvailability` values

**Validates: Requirements 3.4, 3.5, 3.6**

### Property 3: Hidden Product Exclusion

*For any* `Product` with `availability === "hidden"`, calling `getPublicProducts()` must return an array that does not contain that product. The product must additionally not appear in `generateStaticParams` output for any route, in sitemap entries, or in `getFeaturedProducts()`.

**Validates: Requirements 3.8, 9.1, 11.2, 19.8**

### Property 4: WhatsApp URL Generation

*For any* phone number string (including strings with spaces, dashes, parentheses, or country code prefixes) and any message string, `createWhatsAppUrl({ phoneNumber, message })` must return a string that:
- Starts with `https://wa.me/`
- Contains only digit characters in the path segment following `wa.me/`
- Contains the URL-encoded message as the `text` query parameter
- Is a valid absolute URL (parseable by `new URL(...)`)

**Validates: Requirements 4.1**

### Property 5: WhatsApp Message Completeness

*For any* `Product` (with any valid field values) and any non-empty `productUrl` string, `createProductWhatsAppMessage(product, productUrl)` must return a string that:
- Contains `product.name`
- Contains `product.id`
- Contains the `₹` character followed by the formatted price
- Contains `productUrl` verbatim (unmodified)
- Does NOT contain phrases claiming an order is confirmed or placed

**Validates: Requirements 4.2, 4.3, 4.4**

### Property 6: Text Search Filter Correctness

*For any* non-empty search query string and *for any* array of `Product` objects, `filterBySearch(products, query)` must return a subset of the input array where every element has the normalized query (trimmed, lowercased) present in at least one of: `name`, `id`, `fabric`, `color`, or `categorySlug`. The function must never return a product that does not match, and must never return a product not present in the original input array.

**Validates: Requirements 9.2**

### Property 7: Category Filter Correctness

*For any* `categorySlug` string and *for any* array of `Product` objects, `filterByCategory(products, categorySlug)` must return a subset of the input where every element has `product.categorySlug === categorySlug`. No product with a different `categorySlug` may appear in the result.

**Validates: Requirements 9.3, 10.3**

### Property 8: Price Sort Ordering

*For any* non-empty array of `Product` objects:
- `sortByPrice(products, 'asc')` returns an array of the same length where `result[i].priceInr <= result[i+1].priceInr` for all valid indices
- `sortByPrice(products, 'desc')` returns an array of the same length where `result[i].priceInr >= result[i+1].priceInr` for all valid indices
- Both calls must return arrays containing exactly the same products as the input (no products added or removed)

**Validates: Requirements 9.4**

### Property 9: Product Page Metadata Completeness

*For any* non-hidden `Product`, `buildProductMetadata(product, productUrl)` must return a `Metadata` object where:
- `title` is a non-empty string containing `product.name`
- `description` is a non-empty string
- `alternates.canonical` equals `productUrl`
- `openGraph.url` equals `productUrl`
- `openGraph.images` is non-empty when `product.images` is non-empty, with the first image URL matching `product.images[0].src`

**Validates: Requirements 11.10, 19.2, 19.3, 19.4, 19.5**

### Property 10: ProductImage Alt Text Non-Empty

*For any* `ProductImage` object in any product's `images` array, the `alt` field must be a non-empty string (i.e., `alt.trim().length > 0`). Generic placeholder strings like `"product image"`, `"image"`, or `"photo"` are invalid and must not be present in production data.

**Validates: Requirements 20.4**
