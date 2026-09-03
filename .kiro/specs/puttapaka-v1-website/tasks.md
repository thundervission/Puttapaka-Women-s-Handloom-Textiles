# Implementation Plan: Puttapaka Women's Handloom Textiles — V1 Website

## Overview

Build a statically exported Next.js 16 (App Router) digital product catalog and WhatsApp commerce funnel for Puttapaka Women's Handloom Textiles. The implementation follows the master spec build order: **Foundation → Design System → Commerce Catalog → Conversion → Trust/Content → Discoverability → Production**.

All product data lives in a static TypeScript file. The only conversion event is: product detail page → "Order on WhatsApp" CTA → WhatsApp conversation with the seller. No payment, authentication, cart, database, CMS, or V2/V3 features are included.

Language: **TypeScript** (Next.js 16 + React 19 + Tailwind CSS 4).

---

## Tasks

---

### Phase A — Foundation

- [x] 1. Configure Next.js for static export and strict TypeScript
  - [x] 1.1 Add `output: 'export'` and `images: { unoptimized: true }` to `next.config.ts`
    - Set `output: 'export'` so `next build` produces a static `out/` directory deployable to Cloudflare Pages
    - Set `images: { unoptimized: true }` because `next/image` optimization is unsupported under static export
    - _Requirements: 1.1, 1.2_
  - [x] 1.2 Enable TypeScript strict mode in `tsconfig.json`
    - Set `"strict": true` in `tsconfig.json` compiler options
    - _Requirements: 1.5_
  - [x] 1.3 Create `.env.example` documenting all required environment variables
    - Include `NEXT_PUBLIC_WHATSAPP_NUMBER` and `NEXT_PUBLIC_SITE_URL` with placeholder values
    - _Requirements: 2.5_

- [x] 2. Define TypeScript types in `types/product.ts`
  - [x] 2.1 Create `types/product.ts` with `ProductAvailability`, `ProductImage`, and `Product` types
    - Export `ProductAvailability` union type with exactly five values: `"available"`, `"low_stock"`, `"sold_out"`, `"pre_order"`, `"hidden"`
    - Export `ProductImage` interface with required `src: string` and `alt: string` fields
    - Export `Product` interface with all fields: `id`, `slug`, `name`, `description`, `priceInr`, `categorySlug`, `fabric?`, `color?`, `dimensions?`, `blouseIncluded?`, `careInstructions?`, `availability`, `featured?`, `newArrival?`, `images`, `seo?`
    - Price stored as `number` (positive integer INR), never a string
    - _Requirements: 3.1, 3.2, 3.3, 3.4_
  - [ ]* 2.2 Write property test for Product Data Integrity (Property 2)
    - **Property 2: Product Data Integrity**
    - **Validates: Requirements 3.4, 3.5, 3.6**
    - Use `fast-check` to generate arbitrary `Product`-shaped objects and assert: `id` matches `/^PWT-[A-Za-z0-9-]+$/`, `slug` matches `/^[a-z0-9-]+$/`, `priceInr` is a positive integer, `availability` is one of the five valid values
    - Also assert uniqueness of `id` and `slug` across the real `products` array

- [x] 3. Create static data files
  - [x] 3.1 Create `data/site.ts` exporting `siteConfig`
    - Read `NEXT_PUBLIC_WHATSAPP_NUMBER` and `NEXT_PUBLIC_SITE_URL` from `process.env`, falling back to empty string
    - Include: `name`, `shortName`, `description`, `whatsappNumber`, `siteUrl`, `instagramUrl`, `email`, `location`, `businessHours` — all TBD fields use `"[TBD]"` placeholder strings
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.6_
  - [x] 3.2 Create `data/categories.ts` with `Category` interface, `categories` array, and `getCategoryBySlug` helper
    - Export `Category` interface: `slug`, `name`, `description`, `image`
    - Export `categories: Category[]` array — initially empty, populated with real data later
    - Export `getCategoryBySlug(slug: string): Category | undefined`
    - _Requirements: 10.5, 22.3_
  - [x] 3.3 Create `data/products.ts` with `Product[]` array and all query helpers
    - Export `products: Product[]` typed array — initially empty (at least two placeholder products to unblock development)
    - Export `getPublicProducts()` — filters out `availability === 'hidden'`
    - Export `getFeaturedProducts()` — returns public products with `featured === true`
    - Export `getProductBySlug(slug)` — finds non-hidden product by slug
    - Export `getPublicCategorySlugs()` — unique category slugs from public products
    - _Requirements: 3.7, 3.8_
  - [ ]* 3.4 Write property test for Hidden Product Exclusion (Property 3)
    - **Property 3: Hidden Product Exclusion**
    - **Validates: Requirements 3.8, 9.1, 11.2, 19.8**
    - For any `Product` with `availability === 'hidden'`, assert it does not appear in `getPublicProducts()`, `getFeaturedProducts()`, or `getPublicCategorySlugs()` output

- [x] 4. Checkpoint — Foundation
  - Ensure all tests pass, `next build` succeeds with no TypeScript or lint errors, and `.env.example` is present. Ask the user if questions arise.

---

### Phase B — Design System

- [ ] 5. Implement design tokens and global styles in `app/globals.css`
  - [ ] 5.1 Define CSS custom properties for the full design token set
    - Color tokens: `--background: #f7f3ec`, `--foreground: #171717`, `--primary: #29334a`, `--accent: #a65343`, `--muted: #756f67`, `--border: #ded7cc`, `--surface: #fffdf8`
    - Spacing scale: `--space-1` through `--space-16` (8px base unit)
    - Border radius: `--radius-sm: 4px`, `--radius-md: 8px`, `--radius-pill: 9999px`
    - Typography variables: `--font-display`, `--font-body`
    - _Requirements: 5.1, 5.4, 5.5_
  - [ ] 5.2 Apply global base styles and focus styles
    - Set `background`, `color`, `font-family` on `body` using CSS custom properties
    - Apply `focus-visible:ring-2 focus-visible:ring-[var(--primary)]` as a global base style on all interactive elements
    - Add Tailwind utility classes for the typography scale tokens (`text-display-xl`, `text-display-lg`, `text-display-md`, `text-body-lg`, `text-body-md`, `text-body-sm`, `text-ui-sm`)
    - Prohibit: no CSS gradients with more than one hue, no `backdrop-filter: blur`, no border-radius > 8px on cards or images, no animations > 400ms on load
    - _Requirements: 5.3, 5.6, 5.7, 20.2_

- [ ] 6. Load fonts and set up root layout in `app/layout.tsx`
  - [ ] 6.1 Load Cormorant Garamond and Inter via `next/font/google` and apply to `<html>`
    - Use `next/font/google` with `display: 'swap'` to avoid render-blocking requests
    - Apply CSS variable names (`--font-cormorant-garamond`, `--font-inter`) to the `<html>` element class
    - _Requirements: 5.2, 21.5_
  - [ ] 6.2 Wire `SiteHeader` and `SiteFooter` into the root layout
    - Import and render `<SiteHeader />` and `<SiteFooter />` in `app/layout.tsx` around `{children}`
    - Wrap `{children}` in a `<main>` element
    - Set default metadata: site `title` template, `description`, and Open Graph `type: 'website'` using `siteConfig`
    - _Requirements: 6.1, 7.1, 19.1_

- [ ] 7. Build shared UI primitives in `components/ui/`
  - [ ] 7.1 Create `components/ui/Button.tsx` — Server Component
    - Props: `variant: "primary" | "outline" | "ghost"`, `size?: "sm" | "md" | "lg"`, `className?`, plus all standard `<a>` or `<button>` props
    - Apply design system tokens; pill radius for primary variant
    - Visible `focus-visible` ring; `aria-label` support
    - _Requirements: 5.5, 20.2, 20.5_
  - [ ] 7.2 Create `components/ui/Badge.tsx` — Server Component
    - Props: `label: string`, `variant: "available" | "low_stock" | "sold_out" | "pre_order"`
    - Renders both a colored background AND a visible text label — never color alone
    - _Requirements: 20.6_
  - [ ] 7.3 Create `components/ui/Breadcrumbs.tsx` — Server Component
    - Props: `items: Array<{ label: string; href?: string }>`
    - Uses `<nav aria-label="Breadcrumb">` with `<ol>` list markup
    - _Requirements: 20.1_

- [ ] 8. Build site layout components
  - [ ] 8.1 Create `components/layout/SiteFooter.tsx` — Server Component
    - Render `<footer>` with: brand name + descriptor, shop/collection nav links, policy links (Shipping, Returns, Privacy), social links (Instagram, WhatsApp), copyright notice
    - Read all contact data from `siteConfig`, never hardcoded
    - Maximum three column groups on desktop
    - _Requirements: 7.2, 7.3, 7.4, 7.5, 2.6_
  - [ ] 8.2 Create `components/layout/MobileNavigation.tsx` — `'use client'`
    - Owns `isOpen` state; toggles on hamburger click
    - Shows full nav link list in a drawer/overlay when open
    - Traps focus when open; closes on `Escape` key and overlay click
    - `aria-label` on the hamburger button; uses `aria-expanded` attribute
    - _Requirements: 6.3, 6.4, 6.5, 20.5_
  - [ ] 8.3 Create `components/layout/SiteHeader.tsx` — Server Component wrapper
    - `<header>` element containing brand name, `<nav aria-label="Main navigation">` with primary links, desktop WhatsApp CTA link, and `<MobileNavigation />`
    - Desktop nav (≥1024px): single horizontal row with brand + nav links + WhatsApp CTA
    - Mobile nav (<1024px): brand name + hamburger + WhatsApp icon link; full nav hidden in `MobileNavigation`
    - _Requirements: 6.1, 6.2, 6.3, 6.5, 6.6, 6.7_

- [ ] 9. Checkpoint — Design System
  - Ensure all tests pass, layout renders correctly, fonts load without FOUT, and focus states are visible on interactive elements. Ask the user if questions arise.

---

### Phase C — Commerce Catalog

- [ ] 10. Build utility modules
  - [ ] 10.1 Create `lib/utils.ts` with `formatPrice`, `normalizeSearchQuery`, `filterBySearch`, `filterByCategory`, `sortByPrice`, and `cn`
    - `formatPrice(priceInr: number): string` — returns `₹1,850` format using `toLocaleString('en-IN')`
    - `normalizeSearchQuery(query: string): string` — trim + lowercase
    - `filterBySearch<T>(products, query)` — matches trimmed/lowercased query against `name`, `id`, `fabric`, `color`, `categorySlug`
    - `filterByCategory<T>(products, categorySlug)` — exact `categorySlug` match
    - `sortByPrice<T>(products, direction: 'asc' | 'desc')` — stable sort, returns new array
    - `cn(...classes)` — Tailwind class merging utility
    - _Requirements: 9.2, 9.3, 9.4_
  - [ ]* 10.2 Write property test for Text Search Filter Correctness (Property 6)
    - **Property 6: Text Search Filter Correctness**
    - **Validates: Requirements 9.2**
    - Use `fast-check` to generate arbitrary non-empty query strings and product arrays; assert every returned product has the normalized query in at least one of the five fields; assert no product outside the input appears in the result
  - [ ]* 10.3 Write property test for Category Filter Correctness (Property 7)
    - **Property 7: Category Filter Correctness**
    - **Validates: Requirements 9.3, 10.3**
    - For any `categorySlug` and any product array, assert every returned product has `categorySlug` equal to the filter slug, and no product with a different slug appears
  - [ ]* 10.4 Write property test for Price Sort Ordering (Property 8)
    - **Property 8: Price Sort Ordering**
    - **Validates: Requirements 9.4**
    - For any non-empty product array, assert `sortByPrice(products, 'asc')` produces a non-decreasing sequence of `priceInr`; assert `sortByPrice(products, 'desc')` produces a non-increasing sequence; assert both results contain exactly the same products as the input (same length, same members)

- [ ] 11. Build product display components
  - [ ] 11.1 Create `components/product/ProductAvailability.tsx` — Server Component
    - Props: `availability: ProductAvailability`
    - Renders `<Badge />` with matching variant AND a visible text label ("Available", "Low Stock", "Sold Out", "Pre-order")
    - Never conveys status through color alone
    - _Requirements: 20.6, 20.1_
  - [ ] 11.2 Create `components/product/ProductCard.tsx` — Server Component
    - Props: `product: Product`
    - Shows: primary product image (`<img>` with `width`, `height`, `loading="lazy"`, descriptive `alt`), product name, fabric/short attribute, formatted INR price prefixed with `₹`, availability badge
    - Links to `/product/[slug]`
    - Apply `transform: scale(1.02)` hover on card, `opacity` fade-in on image; respect design system constraints (no radius > 8px on image)
    - _Requirements: 8.6, 11.4, 21.3, 20.4_
  - [ ] 11.3 Create `components/product/ProductGrid.tsx` — Server Component
    - Props: `products: Product[]`
    - Renders a responsive CSS grid of `<ProductCard />` components
    - _Requirements: 22.1_
  - [ ] 11.4 Create `components/product/ProductGallery.tsx` — `'use client'`
    - Props: `images: ProductImage[]`, `productName: string`
    - Manages `activeIndex` state for thumbnail switching
    - Primary image: `loading="eager"`, `fetchpriority="high"`
    - Thumbnail images: `loading="lazy"`
    - All images have descriptive `alt` text from `ProductImage.alt`
    - _Requirements: 11.7, 21.3, 20.4, 21.6_
  - [ ] 11.5 Create `components/product/ProductDetails.tsx` — Server Component
    - Props: `product: Product`, `whatsappUrl: string`
    - Renders: product name, formatted price, product ID (`text-ui-sm` style), description, fabric (if present), color (if present), dimensions (if present), blouse information (if present), care instructions (if present), `<ProductAvailability />`, `<WhatsAppButton />` (when availability is not `sold_out`)
    - `whatsappUrl` is pre-built by the page; this component does not construct it
    - _Requirements: 11.4, 11.5, 11.6, 22.4_

- [ ] 12. Build WhatsApp CTA components
  - [ ] 12.1 Create `components/whatsapp/WhatsAppButton.tsx` — Server Component
    - Props: `phoneNumber: string`, `message: string`, `label?: string`, `ariaLabel?: string`, `variant?: "primary" | "outline" | "icon"`
    - When `phoneNumber` is empty string, renders `null` (graceful degradation)
    - Constructs href by importing `createWhatsAppUrl` from `lib/whatsapp.ts` — never constructs URL by hand
    - `aria-label` on icon-only variant
    - _Requirements: 2.4, 4.5, 22.4, 20.5_
  - [ ] 12.2 Create `components/whatsapp/WhatsAppFloatingButton.tsx` — Server Component
    - Fixed-position floating WhatsApp icon for persistent mobile access
    - Reads phone number from `siteConfig`, generates general inquiry message
    - Renders `null` when phone number is empty
    - _Requirements: 2.4, 2.6_

- [ ] 13. Build collection display components
  - [ ] 13.1 Create `components/collection/CollectionHeader.tsx` — Server Component
    - Props: `categoryName: string`, `description: string`
    - Renders collection name as `<h1>`, description as lead paragraph
    - _Requirements: 10.5, 20.3_
  - [ ] 13.2 Create `components/collection/CollectionGrid.tsx` — Server Component
    - Props: `products: Product[]`, `categoryName: string`
    - Wraps `<ProductGrid />` with the collection context
    - _Requirements: 22.1_

- [ ] 14. Build the Shop page with search and filtering
  - [ ] 14.1 Create `components/ui/SearchBar.tsx` — `'use client'`
    - Props: `value: string`, `onChange: (value: string) => void`
    - Controlled input; `aria-label` on the input element
    - _Requirements: 9.2, 20.2_
  - [ ] 14.2 Create `components/ui/FilterPanel.tsx` — `'use client'`
    - Props: `categories: Category[]`, `activeCategory: string`, `onCategoryChange: (slug: string) => void`, `sortOrder: string`, `onSortChange: (order: string) => void`
    - Category filter chips; sort select control (default, price low–high, price high–low)
    - On mobile (<768px): renders in a collapsible drawer/bottom sheet, not persistent horizontal space
    - _Requirements: 9.3, 9.4, 9.5_
  - [ ] 14.3 Create a `ShopFilters` client island component (in `components/ui/ShopFilters.tsx` or co-located with shop page)
    - `'use client'`; owns `searchQuery`, `activeCategory`, `sortOrder` state
    - Runs `filterBySearch`, `filterByCategory`, `sortByPrice` in-browser on product data passed as props
    - Renders `<SearchBar />`, `<FilterPanel />`, live product count, `<ProductGrid />` with filtered results
    - When no products match: displays no-results message and a reset-filters control
    - Receives `products: Product[]` and `categories: Category[]` as props from Server Component parent
    - _Requirements: 9.2, 9.3, 9.4, 9.5, 9.6, 9.7, 9.8_
  - [ ] 14.4 Create `app/shop/page.tsx` — Server Component
    - Calls `getPublicProducts()` and passes all non-hidden products + categories to `<ShopFilters />`
    - Exports `metadata` for the shop page (title, description, Open Graph tags)
    - `<h1>Shop</h1>` in the page
    - _Requirements: 9.1, 9.8, 9.9, 19.2, 19.3, 20.3_

- [ ] 15. Build Collection pages
  - [ ] 15.1 Create `app/collections/[slug]/page.tsx`
    - `await props.params` before reading `slug` (Next.js 16 Promise-based params API)
    - Export `generateStaticParams` returning one entry per unique `categorySlug` in non-hidden products via `getPublicCategorySlugs()`
    - Export `export const dynamicParams = false`
    - Call `notFound()` when slug has no matching category
    - Render `<CollectionHeader />` and `<CollectionGrid />` with products filtered by `categorySlug`
    - Export `generateMetadata` using `buildCollectionMetadata`
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 1.3, 1.4_
  - [ ]* 15.2 Write property test for generateStaticParams Completeness — collections (Property 1, part 2)
    - **Property 1: generateStaticParams Completeness (collection routes)**
    - **Validates: Requirements 1.3, 10.2**
    - For every unique `categorySlug` in `getPublicProducts()`, assert it appears in the array returned by the collection page's `generateStaticParams`

- [ ] 16. Build Product Detail pages
  - [ ] 16.1 Create `lib/whatsapp.ts` with `createWhatsAppUrl` and `createProductWhatsAppMessage`
    - `createWhatsAppUrl({ phoneNumber, message })`: strip non-digit chars from `phoneNumber` with `.replace(/\D/g, '')`, `encodeURIComponent(message)`, return `https://wa.me/${digits}?text=${encoded}`
    - `createProductWhatsAppMessage(product, productUrl)`: builds multi-line message with greeting (business name), product name, ID, `₹` price, product URL, availability inquiry — does NOT claim an order is placed
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_
  - [ ]* 16.2 Write property test for WhatsApp URL Generation (Property 4)
    - **Property 4: WhatsApp URL Generation**
    - **Validates: Requirements 4.1**
    - Use `fast-check` to generate arbitrary phone strings (with spaces, dashes, parentheses, country code prefixes) and message strings; assert result starts with `https://wa.me/`, path segment after `wa.me/` contains only digits, `text` query param equals `encodeURIComponent(message)`, and `new URL(result)` does not throw
  - [ ]* 16.3 Write property test for WhatsApp Message Completeness (Property 5)
    - **Property 5: WhatsApp Message Completeness**
    - **Validates: Requirements 4.2, 4.3, 4.4**
    - Use `fast-check` to generate arbitrary valid `Product` objects and non-empty URL strings; assert result contains `product.name`, `product.id`, the `₹` character followed by formatted price, `productUrl` verbatim; assert result does not contain "order confirmed", "order placed", or similar phrases
  - [ ] 16.4 Create `lib/seo.ts` with `buildProductMetadata` and `buildCollectionMetadata`
    - `buildProductMetadata(product, productUrl)`: returns Next.js `Metadata` with `title`, `description`, `alternates.canonical`, `openGraph` (title, description, url, type, images)
    - `buildCollectionMetadata(category, collectionUrl)`: returns `Metadata` with title, description, canonical, openGraph
    - _Requirements: 11.10, 19.2, 19.3, 19.4, 19.5_
  - [ ]* 16.5 Write property test for Product Page Metadata Completeness (Property 9)
    - **Property 9: Product Page Metadata Completeness**
    - **Validates: Requirements 11.10, 19.2, 19.3, 19.4, 19.5**
    - For any non-hidden `Product` and any `productUrl`, assert `buildProductMetadata` returns: non-empty `title` containing `product.name`, non-empty `description`, `alternates.canonical === productUrl`, `openGraph.url === productUrl`, `openGraph.images` is non-empty when `product.images` is non-empty with first URL matching `product.images[0].src`
  - [ ] 16.6 Create `app/product/[slug]/page.tsx`
    - `await props.params` before reading `slug`
    - Export `generateStaticParams` returning one entry per non-hidden product slug via `getPublicProducts()`
    - Export `export const dynamicParams = false`
    - Call `notFound()` when slug has no matching non-hidden product
    - Pre-build `whatsappUrl` using `createWhatsAppUrl` + `createProductWhatsAppMessage`; pass it as prop to `<ProductDetails />`
    - Render `<Breadcrumbs />`, `<ProductGallery />`, `<ProductDetails />`
    - Mobile layout (<768px): gallery above details, single column, WhatsApp CTA prominent below key attributes
    - Desktop layout (≥768px): gallery and details in two-column grid
    - Export `generateMetadata` using `buildProductMetadata`
    - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7, 11.8, 11.9, 11.10, 1.3, 1.4_
  - [ ]* 16.7 Write property test for generateStaticParams Completeness — products (Property 1, part 1)
    - **Property 1: generateStaticParams Completeness (product routes)**
    - **Validates: Requirements 1.3, 11.2**
    - For every slug in `getPublicProducts()`, assert it appears in the array returned by the product page's `generateStaticParams`

- [ ] 17. Checkpoint — Commerce Catalog
  - Ensure all tests pass, `next build` succeeds, shop search/filter/sort work in-browser, product detail pages render with correct layout at mobile and desktop viewports, and no `wa.me` URL literal exists outside `lib/whatsapp.ts`. Ask the user if questions arise.

---

### Phase D — Conversion

- [ ] 18. Build homepage sections
  - [ ] 18.1 Create `components/home/HeroSection.tsx` — Server Component
    - Props: `whatsappUrl: string`
    - Renders: `<h1>` headline (TBD — copy from business owner), supporting statement (TBD), primary CTA linking to `/shop`, secondary CTA opening WhatsApp
    - Real product/brand photograph as primary visual; `loading="eager"`, `fetchpriority="high"` on hero image
    - _Requirements: 8.3, 8.4, 21.6_
  - [ ] 18.2 Create `components/home/CategoryCard.tsx` — Server Component
    - Props: `category: Category`
    - Shows category image, category name, links to `/collections/[slug]`
    - _Requirements: 8.5_
  - [ ] 18.3 Create `components/home/CategoryGrid.tsx` — Server Component
    - Props: `categories: Category[]`
    - Displays 4–8 category cards in a responsive grid
    - _Requirements: 8.5_
  - [ ] 18.4 Create `components/home/FeaturedProducts.tsx` — Server Component
    - Props: `products: Product[]`
    - Displays 6–8 featured products (passed from page, not fetched here) using `<ProductCard />`
    - _Requirements: 8.6_
  - [ ] 18.5 Create `components/home/BrandStorySection.tsx` — Server Component
    - Renders brief brand narrative (TBD — owner-supplied copy) and "Read our story" link to `/story`
    - _Requirements: 8.7_
  - [ ] 18.6 Create `components/home/CraftSection.tsx` — Server Component
    - Handloom craft section with owner-supplied copy and imagery (TBD)
    - _Requirements: 8.2_
  - [ ] 18.7 Create `components/home/TrustSection.tsx` — Server Component
    - Trust signals using only factually accurate claims supplied by business owner (TBD — no fabricated metrics)
    - _Requirements: 8.8_
  - [ ] 18.8 Create `components/home/HomepageWhatsAppCTA.tsx` — Server Component
    - Closing WhatsApp CTA section; renders `<WhatsAppButton />` for general inquiry
    - _Requirements: 8.2_
  - [ ] 18.9 Create `app/page.tsx` — Homepage
    - Assembles all homepage sections in order: Hero, CategoryGrid, FeaturedProducts, BrandStory, Craft, Trust, HomepageWhatsAppCTA
    - Calls `getFeaturedProducts()`, `categories` from data files at build time; passes as props to section components
    - Pre-builds general `whatsappUrl` using `createWhatsAppUrl`; passes to `HeroSection` and `HomepageWhatsAppCTA`
    - Exports `metadata` for homepage (title, description, Open Graph tags)
    - Primarily Server Components; Client Component boundaries only where browser state is required
    - _Requirements: 8.1, 8.2, 8.9, 8.10, 19.2, 19.3, 20.3_

- [ ] 19. Checkpoint — Conversion
  - Verify WhatsApp CTA links open `wa.me` with a correctly pre-filled message on a real mobile device or browser. Confirm hero image loads with high priority (no LCP degradation). Ask the user if questions arise.

---

### Phase E — Trust/Content

- [ ] 20. Build informational pages
  - [ ] 20.1 Create `app/about/page.tsx`
    - Sections: who the business is, how it started, what it sells, how to contact; all copy TBD (owner-supplied)
    - Exports `metadata` with unique title and description
    - _Requirements: 12.1, 12.2, 12.3, 12.4_
  - [ ] 20.2 Create `app/story/page.tsx`
    - Describes the handloom craft and its significance using only owner-verified facts (TBD)
    - No fabricated artisan claims, invented geographic origin stories, or unverifiable certifications
    - Exports `metadata` with unique title and description
    - _Requirements: 13.1, 13.2, 13.3, 13.4_
  - [ ] 20.3 Create `app/contact/page.tsx`
    - Displays: business name, WhatsApp/phone (from `siteConfig`), email (TBD), Instagram link (TBD), location (TBD), business hours (TBD)
    - Includes a general-inquiry `<WhatsAppButton />` using `createWhatsAppUrl`
    - Exports `metadata` with unique title and description
    - _Requirements: 14.1, 14.2, 14.3, 14.4_
  - [ ] 20.4 Create `app/shipping/page.tsx`
    - Content: delivery areas, processing time, shipping charges, estimated delivery window, post-confirmation process (all TBD — actual business policy from owner)
    - No invented promises of specific delivery timelines
    - Exports `metadata` with unique title and description
    - _Requirements: 15.1, 15.2, 15.3, 15.4_
  - [ ] 20.5 Create `app/returns/page.tsx`
    - Content: eligible products, return window, condition requirements, exclusions, damaged/defective process, how to initiate (all TBD — actual business policy from owner)
    - No fabricated or borrowed policy
    - Exports `metadata` with unique title and description
    - _Requirements: 16.1, 16.2, 16.3, 16.4_
  - [ ] 20.6 Create `app/privacy/page.tsx`
    - Accurately describes what personal data V1 collects, how it is used, any third-party analytics active on the site (TBD — verified at launch)
    - No verbatim reproduction of another company's policy
    - Exports `metadata` with unique title and description
    - _Requirements: 17.1, 17.2, 17.3, 17.4_

- [ ] 21. Create `app/not-found.tsx` — global 404 page
  - [ ] 21.1 Implement the custom 404 page
    - Renders within site layout (Header + Footer) matching the design system
    - Clear "page not found" message, link to `/shop`, link to `/` (homepage)
    - Single `<h1>` on the page
    - _Requirements: 18.1, 18.2, 18.3, 20.3_

- [ ] 22. Checkpoint — Trust/Content
  - Ensure all static pages render, 404 page loads with header and footer, no hardcoded contact values exist in any component file (all come from `siteConfig`), and TBD placeholders are visible in dev but not blocking the build. Ask the user if questions arise.

---

### Phase F — Discoverability

- [ ] 23. Implement SEO infrastructure
  - [ ] 23.1 Create `app/sitemap.ts`
    - Generate entries for: `/`, `/shop`, `/about`, `/story`, `/contact`, `/shipping`, `/returns`, `/privacy`
    - Generate entries for all non-hidden products at `/product/[slug]` via `getPublicProducts()`
    - Generate entries for all non-hidden collection slugs at `/collections/[slug]` via `getPublicCategorySlugs()`
    - Hidden products (`availability === 'hidden'`) are excluded
    - Use `siteConfig.siteUrl` as the base URL
    - _Requirements: 19.6, 19.8_
  - [ ] 23.2 Create `app/robots.ts`
    - Allow indexing of all public pages
    - Reference the sitemap URL
    - Use `siteConfig.siteUrl` as the base
    - _Requirements: 19.7_
  - [ ]* 23.3 Write property test for generateStaticParams Completeness — full (Property 1, integration)
    - **Property 1: generateStaticParams Completeness (combined)**
    - **Validates: Requirements 1.3, 10.2, 11.2**
    - Assert that the union of all slugs from product and collection `generateStaticParams` exactly covers all non-hidden products and all unique category slugs respectively
  - [ ]* 23.4 Write property test for ProductImage Alt Text Non-Empty (Property 10)
    - **Property 10: ProductImage Alt Text Non-Empty**
    - **Validates: Requirements 20.4**
    - For every `ProductImage` in every product in `data/products.ts`, assert `alt.trim().length > 0` and that the value is not one of the generic disallowed strings: `"product image"`, `"image"`, `"photo"`, `"img"`

- [ ] 24. Verify metadata coverage across all pages
  - [ ] 24.1 Audit all page-level `metadata` exports
    - Confirm every public-facing page exports a unique `<title>` and `<meta name="description">` — no duplicate titles
    - Confirm every page includes Open Graph tags (`og:title`, `og:description`, `og:url`, `og:type`)
    - Confirm every page has `alternates.canonical` set
    - Product pages: confirm `og:image` is set to the primary product image URL (absolute)
    - Use the Next.js `metadata` export API only — no manual `<head>` tags
    - _Requirements: 19.1, 19.2, 19.3, 19.4, 19.5_

- [ ] 25. Checkpoint — Discoverability
  - Run `next build`, inspect the generated `out/sitemap.xml` and `out/robots.txt`. Verify no hidden product appears in the sitemap. Confirm Open Graph tags appear in built HTML. Ask the user if questions arise.

---

### Phase G — Production

- [ ] 26. Accessibility and semantic HTML audit
  - [ ] 26.1 Verify semantic HTML structure across all pages
    - Every page has exactly one `<h1>` — no page has zero or multiple `<h1>` elements
    - `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>` used correctly throughout
    - `<nav>` elements carry descriptive `aria-label` (e.g., "Main navigation", "Breadcrumb")
    - Tab order follows visual reading order; no `tabindex > 0` anywhere
    - _Requirements: 20.1, 20.3, 20.7_
  - [ ] 26.2 Verify icon-only button accessibility
    - All icon-only buttons (hamburger, WhatsApp icon variant) carry `aria-label`
    - All interactive elements have visible `focus-visible` ring
    - _Requirements: 20.2, 20.5_
  - [ ]* 26.3 Write property test for ProductImage Alt Text Non-Empty — re-run against production data (Property 10)
    - **Property 10: ProductImage Alt Text Non-Empty (production data)**
    - **Validates: Requirements 20.4**
    - Same assertion as 23.4, now run against the fully populated `data/products.ts`; confirm no generic alt text strings exist in the final dataset

- [ ] 27. Performance and image optimization
  - [ ] 27.1 Verify all product images in `public/products/` are pre-optimized
    - All images must be WebP or AVIF format
    - No raw camera files (`.jpg` > 2MB, `.png` originals, `.tiff`, `.raw`) in `public/`
    - Every `<img>` in product components has explicit `width` and `height` attributes to prevent CLS
    - Hero and primary product images have `loading="eager"` and `fetchpriority="high"`
    - All other images have `loading="lazy"`
    - _Requirements: 21.1, 21.2, 21.3, 21.6_
  - [ ] 27.2 Minimize Client Component surface area
    - Audit all components: only `MobileNavigation`, `ProductGallery`, `ShopFilters`, `SearchBar`, `FilterPanel` should be `'use client'`
    - All other components must be Server Components — no unnecessary `'use client'` directives
    - _Requirements: 21.4, 22.1_

- [ ] 28. Final build and smoke tests
  - [ ] 28.1 Run `next build` and confirm zero errors
    - No TypeScript errors
    - No ESLint errors
    - `out/` directory is generated
    - `out/sitemap.xml` and `out/robots.txt` are present
    - _Requirements: 1.6_
  - [ ]* 28.2 Run all property-based tests against production data
    - Execute the full test suite including all 10 property tests
    - All properties must pass with the final populated `data/products.ts` dataset
    - Properties tested: 1 (generateStaticParams completeness), 2 (data integrity), 3 (hidden exclusion), 4 (WhatsApp URL), 5 (WhatsApp message), 6 (search filter), 7 (category filter), 8 (price sort), 9 (metadata completeness), 10 (alt text)
    - _Requirements: 1.6_
  - [ ] 28.3 Verify no hardcoded business values in component files
    - No `wa.me` string literal outside `lib/whatsapp.ts`
    - No hardcoded phone numbers, site URLs, or Instagram URLs outside `data/site.ts`
    - No hardcoded product names or prices outside `data/products.ts`
    - _Requirements: 2.6, 4.5_

- [ ] 29. Final checkpoint — Production ready
  - Ensure all tests pass, `next build` is clean, sitemap contains the expected pages, and the WhatsApp CTAs work end-to-end in a browser. Ask the user if questions arise.

---

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP; all 10 correctness properties are recommended before launch
- Every task references specific requirements for traceability
- TBD content slots (hero copy, brand story, trust signals, policies, contact details) must be supplied by the business owner before launch — use `[TBD]` placeholder strings in code and a `{/* TBD: description */}` JSX comment in components
- V2/V3 features explicitly excluded: payment, authentication, admin panel, cart, database, CMS
- The `params` prop in Next.js 16 dynamic route pages is a `Promise` — always `await props.params` before accessing segments
- Test framework recommended: `fast-check` for property-based tests + `vitest` as the runner (Node environment for utility functions, jsdom environment for Client Components)
- Run tests with `vitest --run` (single execution, no watch mode) in CI

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "1.2", "1.3"] },
    { "id": 1, "tasks": ["2.1", "3.1", "3.2"] },
    { "id": 2, "tasks": ["2.2", "3.3"] },
    { "id": 3, "tasks": ["3.4", "5.1", "5.2"] },
    { "id": 4, "tasks": ["6.1", "7.1", "7.2", "7.3", "10.1"] },
    { "id": 5, "tasks": ["6.2", "8.1", "10.2", "10.3", "10.4"] },
    { "id": 6, "tasks": ["8.2", "11.1", "16.1"] },
    { "id": 7, "tasks": ["8.3", "11.2", "11.3", "12.1", "16.2", "16.3", "16.4"] },
    { "id": 8, "tasks": ["11.4", "11.5", "12.2", "13.1", "13.2", "14.1", "14.2", "16.5", "16.7"] },
    { "id": 9, "tasks": ["14.3", "14.4", "15.1", "15.2", "16.6", "18.1", "18.2"] },
    { "id": 10, "tasks": ["18.3", "18.4", "18.5", "18.6", "18.7", "18.8", "20.1", "20.2", "20.3", "20.4", "20.5", "20.6"] },
    { "id": 11, "tasks": ["18.9", "21.1", "23.1", "23.2"] },
    { "id": 12, "tasks": ["23.3", "23.4", "24.1"] },
    { "id": 13, "tasks": ["26.1", "26.2", "27.1", "27.2"] },
    { "id": 14, "tasks": ["26.3", "28.1", "28.3"] },
    { "id": 15, "tasks": ["28.2"] }
  ]
}
```
