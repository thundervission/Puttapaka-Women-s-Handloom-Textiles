# Requirements Document

## Introduction

Puttapaka Women's Handloom Textiles V1 is a mobile-first digital product catalog and WhatsApp commerce funnel built with Next.js 16 (App Router), React 19, Tailwind CSS 4, and TypeScript 5, targeting static export to Cloudflare Pages. The site enables customers to discover handloom sarees and related textiles, view product details, and initiate purchase inquiries via a pre-filled WhatsApp message. There is no checkout, payment gateway, or customer account system in V1. All product data is stored in a static TypeScript file. The primary conversion event is: product detail page → "Order on WhatsApp" CTA → WhatsApp conversation with the seller.

---

## Glossary

- **Website**: The Puttapaka Women's Handloom Textiles Next.js application being specified.
- **Product**: A handloom saree or related textile item described by a `Product` record in `data/products.ts`.
- **Product ID**: A stable identifier following the `PWT-XXX` pattern (e.g., `PWT-001`), unique per product.
- **Slug**: A URL-safe, human-readable string used in page routes (e.g., `puttapaka-handloom-cotton-saree-maroon`).
- **Availability**: One of five values: `available`, `low_stock`, `sold_out`, `pre_order`, or `hidden`.
- **WhatsApp CTA**: The primary action element on a product page that opens WhatsApp with a pre-filled product inquiry message.
- **WhatsApp Utility**: The centralized module (`lib/whatsapp.ts`) that constructs WhatsApp click-to-chat URLs and product inquiry messages.
- **Site Configuration**: The centralized module (`data/site.ts`) containing the business name, WhatsApp number, social links, and other cross-site constants.
- **Product Data**: The static TypeScript file `data/products.ts` that is the single source of truth for all product records in V1.
- **Static Export**: Next.js `output: 'export'` mode that generates a fully static site deployable to Cloudflare Pages without a Node.js server.
- **Server Component**: A React Server Component rendered at build time; the default for all components unless client interactivity is required.
- **Client Component**: A React component marked `'use client'`; used only when browser-side state or DOM interaction is genuinely required.
- **Design System**: The set of CSS custom properties (color tokens, typography scale, spacing scale, border-radius rules) defined globally in `app/globals.css`.
- **Open Graph**: The metadata protocol used to control how pages appear when shared on social media.
- **INR Price**: Product price stored as a plain integer representing Indian Rupees (e.g., `1850`), never as a formatted string.
- **`generateStaticParams`**: The Next.js App Router export required for dynamic route segments (`[slug]`) under static export.
- **`params` Promise**: In Next.js 16, the `params` prop in page components is a Promise and must be `await`ed before accessing route segments.
- **TBD**: A business decision or content item that has not yet been confirmed by the business owner and must not be invented.

---

## Requirements

### Requirement 1: Project Foundation and Static Export

**User Story:** As a developer, I want the Next.js project configured for static export so that the finished site deploys to Cloudflare Pages without requiring a Node.js server at runtime.

#### Acceptance Criteria

1. THE Website SHALL set `output: 'export'` in `next.config.ts` to produce a fully static build.
2. THE Website SHALL disable the built-in Next.js image optimization component and use pre-optimized images served from the `public/` directory instead.
3. WHEN a dynamic route segment (`[slug]`) is defined, THE Website SHALL export a `generateStaticParams` function from the route's `page.tsx` file so that all valid paths are generated at build time.
4. WHEN a page component accesses route parameters, THE Website SHALL `await` the `params` prop before reading any property, in conformance with the Next.js 16 Promise-based params API.
5. THE Website SHALL enable TypeScript strict mode via `tsconfig.json`.
6. THE Website SHALL pass `next build` without type errors or lint errors before any deployment.

---

### Requirement 2: Centralized Site Configuration

**User Story:** As a developer, I want all business constants and environment-dependent values in one place so that changes to the business phone number, social links, or site URL require editing a single file.

#### Acceptance Criteria

1. THE Site Configuration SHALL export a `siteConfig` object from `data/site.ts` containing at minimum: business name, short name, site description, WhatsApp number, site URL, Instagram URL, email, and location.
2. THE Site Configuration SHALL read the WhatsApp phone number from the `NEXT_PUBLIC_WHATSAPP_NUMBER` environment variable.
3. THE Site Configuration SHALL read the canonical site URL from the `NEXT_PUBLIC_SITE_URL` environment variable.
4. IF `NEXT_PUBLIC_WHATSAPP_NUMBER` is not set at build time, THEN THE Site Configuration SHALL fall back to an empty string and the WhatsApp CTA SHALL NOT render a link.
5. THE Website SHALL provide a `.env.example` file documenting all required `NEXT_PUBLIC_` environment variables with placeholder values.
6. THE Website SHALL NOT hardcode the WhatsApp phone number, site URL, Instagram URL, or other business contact details in any UI component or utility outside of `data/site.ts`.

---

### Requirement 3: Product Data Model

**User Story:** As a developer, I want a typed product data model so that all product records are consistent, type-safe, and the single source of truth for the entire catalog.

#### Acceptance Criteria

1. THE Product Data SHALL define and export a `ProductAvailability` union type in `types/product.ts` with exactly five values: `"available"`, `"low_stock"`, `"sold_out"`, `"pre_order"`, and `"hidden"`.
2. THE Product Data SHALL define and export a `Product` interface in `types/product.ts` containing at minimum: `id` (string, `PWT-XXX` pattern), `slug` (string), `name` (string), `description` (string), `priceInr` (number, integer INR), `categorySlug` (string), `availability` (ProductAvailability), and `images` (array of `ProductImage`).
3. THE Product Data SHALL define and export a `ProductImage` interface with `src` (string) and `alt` (string) fields.
4. THE Product Data SHALL store price as a plain integer in Indian Rupees with no currency symbol, comma formatting, or string representation.
5. THE Product Data SHALL assign each product a unique `id` following the `PWT-XXX` pattern.
6. THE Product Data SHALL assign each product a unique `slug` that is URL-safe, human-readable, and stable after first publication.
7. THE Product Data SHALL be exported from `data/products.ts` as a typed `Product[]` array.
8. WHEN a product's `availability` is `"hidden"`, THE Website SHALL NOT render that product on any public-facing page, collection, or sitemap entry.

---

### Requirement 4: WhatsApp Commerce Utility

**User Story:** As a developer, I want a centralized WhatsApp utility so that all product inquiry links are generated consistently and no UI component constructs WhatsApp URLs by hand.

#### Acceptance Criteria

1. THE WhatsApp Utility SHALL export a `createWhatsAppUrl` function from `lib/whatsapp.ts` that accepts a phone number string and a message string, strips non-digit characters from the phone number, and returns a properly encoded `https://wa.me/` URL.
2. THE WhatsApp Utility SHALL export a `createProductWhatsAppMessage` function that accepts a `Product` and a product page URL string, and returns a message string containing: a greeting addressed to the business name, the product name, the product ID, the formatted INR price prefixed with `₹`, the product page URL, and a request to confirm availability and ordering details.
3. THE WhatsApp Utility SHALL NOT assert that clicking the WhatsApp CTA constitutes a completed order.
4. WHEN a product page URL is passed to `createProductWhatsAppMessage`, THE WhatsApp Utility SHALL include that URL verbatim in the generated message.
5. THE Website SHALL NOT construct WhatsApp URLs using string concatenation outside of `lib/whatsapp.ts`.

---

### Requirement 5: Design System

**User Story:** As a developer, I want a consistent design token system so that colors, typography, and spacing are applied uniformly across every page and component.

#### Acceptance Criteria

1. THE Design System SHALL define CSS custom properties in `app/globals.css` for at minimum: `--background`, `--foreground`, `--primary`, `--accent`, `--muted`, `--border`, and `--surface`, using the warm-neutral starting palette (`--background: #f7f3ec`, `--primary: #29334a`, `--accent: #a65343`) as a baseline pending final brand color approval.
2. THE Design System SHALL load exactly two typefaces: one editorial serif (candidate: Cormorant Garamond) for display headings and one neutral sans-serif (candidate: Inter) for body text and UI elements.
3. THE Design System SHALL define a typographic scale using a limited set of size steps and apply it consistently across all heading and body elements.
4. THE Design System SHALL define a spacing scale based on an 8px base unit and use it consistently for padding, margin, and gap values across all components.
5. THE Design System SHALL define border-radius values with restraint: buttons may use a pill or moderate radius and image/card elements SHALL use a small or zero radius to support the editorial aesthetic.
6. THE Design System SHALL NOT use multi-color gradients, glassmorphism effects, decorative blob shapes, or excessive rounded corners (greater than 16px on card or image elements).
7. THE Design System SHALL maintain sufficient color contrast between text and background colors to meet WCAG 2.1 AA contrast ratios (minimum 4.5:1 for normal text, 3:1 for large text) as a measurable accessibility target.

---

### Requirement 6: Site Header

**User Story:** As a customer, I want a consistent site header so that I can navigate to any major section of the website from any page.

#### Acceptance Criteria

1. THE Site Header SHALL render on every page via `app/layout.tsx`.
2. WHILE the viewport width is 1024px or wider, THE Site Header SHALL display the brand logo/name, primary navigation links (Home, Shop, Collections, Our Story, Contact), and a WhatsApp CTA link in a single horizontal row.
3. WHILE the viewport width is below 1024px, THE Site Header SHALL display a hamburger/menu icon, the brand name, and a WhatsApp icon link; the full navigation SHALL be hidden behind a mobile drawer or overlay.
4. WHEN the mobile navigation trigger is activated, THE Site Header SHALL reveal the full navigation link list and allow it to be dismissed via a close control or overlay tap.
5. THE Site Header SHALL provide visible keyboard focus states on all interactive elements.
6. THE Site Header SHALL use semantic HTML: the outer element SHALL be `<header>`, navigation links SHALL be wrapped in a `<nav>` element with an accessible label.
7. THE Mobile Navigation component SHALL be a Client Component; all other header markup SHALL be Server Component output.

---

### Requirement 7: Site Footer

**User Story:** As a customer, I want a site footer with navigational and policy links so that I can find secondary pages and contact information from any page.

#### Acceptance Criteria

1. THE Site Footer SHALL render on every page via `app/layout.tsx`.
2. THE Site Footer SHALL contain: the brand name and descriptor, shop/collection navigation links, policy links (Shipping, Returns, Privacy), social links (Instagram, WhatsApp), and a copyright notice.
3. THE Site Footer SHALL use semantic HTML: the outer element SHALL be `<footer>`.
4. THE Site Footer SHALL be a Server Component.
5. THE Site Footer SHALL NOT display more than three columns of link groups on desktop to avoid visual clutter.

---

### Requirement 8: Homepage

**User Story:** As a customer arriving at the site for the first time, I want a homepage that communicates who the business is and routes me directly to products, so that I can evaluate and begin browsing within a few seconds.

#### Acceptance Criteria

1. THE Homepage SHALL render at the `/` route via `app/page.tsx`.
2. THE Homepage SHALL contain the following sections in order: Hero, Featured Categories, Featured Products, Brand Story, Craft/Handloom section, Trust signals, and a closing WhatsApp CTA.
3. THE Hero section SHALL display a headline, a supporting statement, a primary CTA linking to `/shop`, and a secondary CTA opening WhatsApp; all text SHALL use approved brand copy (TBD — must not be invented by the developer).
4. THE Hero section SHALL use a real product or brand photograph as the primary visual element.
5. THE Featured Categories section SHALL display between four and eight category cards; each card SHALL have a category image, category name, and a link to the corresponding collection page.
6. THE Featured Products section SHALL display between six and eight products where `featured: true` in Product Data; each product card SHALL show the product image, name, fabric/short attribute, and formatted INR price.
7. THE Brand Story section SHALL contain a brief narrative and a "Read our story" link to `/story`; all copy SHALL be provided by the business owner (TBD — must not be invented).
8. THE Trust signals section SHALL use only factually accurate claims provided by the business owner (TBD — must not be invented or use fabricated metrics).
9. WHEN the Homepage renders, THE Website SHALL output Next.js metadata for the page including a unique `<title>` and `<meta name="description">` and Open Graph tags.
10. THE Homepage SHALL be composed primarily of Server Components, with Client Component boundaries limited to interactive sub-sections where browser state is required.

---

### Requirement 9: Shop and Collection Listing Page

**User Story:** As a customer, I want a browsable product grid with search and filtering so that I can quickly find sarees matching my preferences without needing to scroll through unrelated products.

#### Acceptance Criteria

1. THE Shop Page SHALL render at the `/shop` route via `app/shop/page.tsx` and display all non-hidden products from Product Data.
2. THE Shop Page SHALL provide a text search input that filters the visible product grid client-side by matching the search query (trimmed, lowercased) against product name, Product ID, fabric, color, and category slug fields.
3. THE Shop Page SHALL provide category filter controls that, when a category is selected, reduce the visible product grid to products matching that `categorySlug`.
4. THE Shop Page SHALL provide a sort control offering at minimum: default order, price low-to-high, and price high-to-low.
5. WHILE the viewport is below 768px, THE Shop Page SHALL present filter controls in a collapsible drawer or bottom sheet so that filter UI does not occupy persistent horizontal space.
6. THE Shop Page SHALL render a product count indicating how many products are currently visible after active filters are applied.
7. IF no products match the active search and filter combination, THEN THE Shop Page SHALL display a clear no-results message and a control to reset filters.
8. THE Search and Filter controls SHALL be Client Components; the initial product grid data SHALL be passed as props from a Server Component parent.
9. WHEN the Shop Page renders, THE Website SHALL output Next.js metadata including a unique `<title>` and `<meta name="description">` and Open Graph tags.

---

### Requirement 10: Collection Pages

**User Story:** As a customer, I want dedicated collection pages so that I can browse a curated subset of products by category and share or bookmark a specific collection URL.

#### Acceptance Criteria

1. THE Collection Pages SHALL render at `/collections/[slug]` via `app/collections/[slug]/page.tsx`.
2. THE Collection Pages SHALL export a `generateStaticParams` function that returns one entry per unique `categorySlug` value present in non-hidden products in Product Data.
3. WHEN a valid collection slug is requested, THE Collection Page SHALL display only the non-hidden products whose `categorySlug` matches the route slug.
4. IF a requested collection slug does not correspond to any known category, THEN THE Collection Page SHALL render the Next.js 404 not-found response.
5. THE Collection Page SHALL display the collection name and a short description (TBD — descriptions to be provided by business owner).
6. WHEN a Collection Page renders, THE Website SHALL output Next.js metadata with a collection-specific `<title>`, `<meta name="description">`, and Open Graph tags.

---

### Requirement 11: Product Detail Pages

**User Story:** As a customer, I want a product detail page that shows all relevant product information and a clear WhatsApp ordering CTA so that I can make an informed decision and initiate a purchase inquiry in one step.

#### Acceptance Criteria

1. THE Product Detail Pages SHALL render at `/product/[slug]` via `app/product/[slug]/page.tsx`.
2. THE Product Detail Pages SHALL export a `generateStaticParams` function that returns one entry per non-hidden product slug in Product Data.
3. IF a requested product slug does not correspond to any non-hidden product, THEN THE Product Detail Page SHALL render the Next.js 404 not-found response.
4. WHEN a Product Detail Page renders, THE Website SHALL display: product name, formatted INR price (prefixed with `₹`), Product ID, product description, fabric (if present), color (if present), blouse information (if present), availability status, and the product image gallery.
5. WHEN a product's `availability` is `"available"` or `"pre_order"` or `"low_stock"`, THE Product Detail Page SHALL render the WhatsApp CTA using the WhatsApp Utility with a product-specific pre-filled message.
6. WHEN a product's `availability` is `"sold_out"`, THE Product Detail Page SHALL render an availability notice; the exact CTA behavior for sold-out products is TBD (business decision — must not be invented).
7. THE Product Detail Page SHALL display a product image gallery showing all images defined in `product.images`; gallery interaction (thumbnail switching) SHALL be a Client Component.
8. WHILE the viewport is below 768px, THE Product Detail Page SHALL render the image gallery above the product details in a single-column layout with the WhatsApp CTA prominently positioned below the key product attributes.
9. WHILE the viewport is 768px or wider, THE Product Detail Page SHALL render the image gallery and product details in a two-column layout.
10. WHEN a Product Detail Page renders, THE Website SHALL output Next.js metadata with a product-specific `<title>` (including product name and brand), `<meta name="description">`, canonical URL, and Open Graph tags including the primary product image.

---

### Requirement 12: About Page

**User Story:** As a customer, I want an About page that tells me who is behind the business and why they do what they do, so that I can decide whether to trust and support the business.

#### Acceptance Criteria

1. THE About Page SHALL render at the `/about` route via `app/about/page.tsx`.
2. THE About Page SHALL contain sections covering: who the business is, how it started, what it sells, and how customers can contact the business.
3. THE About Page SHALL use only content approved and supplied by the business owner (TBD — developer must not invent business history or founder details).
4. WHEN the About Page renders, THE Website SHALL output Next.js metadata with a unique `<title>` and `<meta name="description">`.

---

### Requirement 13: Story and Craft Page

**User Story:** As a customer, I want a page that explains what handloom weaving means and why it matters to this business, so that I understand the value of the products and the craft behind them.

#### Acceptance Criteria

1. THE Story Page SHALL render at the `/story` route via `app/story/page.tsx`.
2. THE Story Page SHALL describe the handloom craft and its significance to the business using only facts and claims the business owner can verify (TBD — content to be supplied by owner).
3. THE Story Page SHALL NOT contain fabricated artisan claims, invented geographic origin stories, or unverifiable certifications.
4. WHEN the Story Page renders, THE Website SHALL output Next.js metadata with a unique `<title>` and `<meta name="description">`.

---

### Requirement 14: Contact Page

**User Story:** As a customer, I want a Contact page so that I can find the business's WhatsApp number, social links, and other contact details without hunting through the site.

#### Acceptance Criteria

1. THE Contact Page SHALL render at the `/contact` route via `app/contact/page.tsx`.
2. THE Contact Page SHALL display: business name, WhatsApp/phone (from Site Configuration), email address (TBD), Instagram link (TBD), operating location (TBD), and business hours (TBD); all values must come from real business data provided by the owner.
3. THE Contact Page SHALL include a WhatsApp CTA that opens a general inquiry using the WhatsApp Utility.
4. WHEN the Contact Page renders, THE Website SHALL output Next.js metadata with a unique `<title>` and `<meta name="description">`.

---

### Requirement 15: Shipping Information Page

**User Story:** As a customer, I want a Shipping page that clearly states delivery areas, timing, and charges so that I know what to expect before placing a WhatsApp order.

#### Acceptance Criteria

1. THE Shipping Page SHALL render at the `/shipping` route via `app/shipping/page.tsx`.
2. THE Shipping Page SHALL state: delivery areas served, typical order processing time, shipping charge, estimated delivery window, and the customer process following WhatsApp order confirmation; all values must be the actual business policy (TBD — to be provided by owner).
3. THE Shipping Page SHALL NOT promise exact delivery dates or timelines the seller cannot guarantee.
4. WHEN the Shipping Page renders, THE Website SHALL output Next.js metadata with a unique `<title>` and `<meta name="description">`.

---

### Requirement 16: Returns and Exchange Page

**User Story:** As a customer, I want a Returns and Exchange page so that I understand the business's policy before I commit to a WhatsApp order.

#### Acceptance Criteria

1. THE Returns Page SHALL render at the `/returns` route via `app/returns/page.tsx`.
2. THE Returns Page SHALL state: eligible products, the time window for initiating a return or exchange, condition requirements, exclusions, the process for damaged or defective items, and how to start a return; all values must be the actual business policy (TBD — to be provided by owner).
3. THE Returns Page SHALL NOT publish a fabricated or borrowed policy from another retailer.
4. WHEN the Returns Page renders, THE Website SHALL output Next.js metadata with a unique `<title>` and `<meta name="description">`.

---

### Requirement 17: Privacy Page

**User Story:** As a customer, I want a Privacy page that honestly describes what data the website collects so that I can make an informed decision about using it.

#### Acceptance Criteria

1. THE Privacy Page SHALL render at the `/privacy` route via `app/privacy/page.tsx`.
2. THE Privacy Page SHALL accurately describe what personal data, if any, the Website collects, how it is used, and any third-party analytics or services active on the site; all content must reflect the actual V1 implementation (TBD — to be verified at launch).
3. THE Privacy Page SHALL NOT reproduce another company's privacy policy verbatim.
4. WHEN the Privacy Page renders, THE Website SHALL output Next.js metadata with a unique `<title>` and `<meta name="description">`.

---

### Requirement 18: 404 Not Found Page

**User Story:** As a customer who reaches a broken or outdated URL, I want a helpful 404 page that guides me back to browsable content rather than a bare error screen.

#### Acceptance Criteria

1. THE Website SHALL define a custom 404 not-found page at `app/not-found.tsx`.
2. THE 404 Page SHALL display a clear message indicating the page was not found, a link to `/shop`, and a link to `/` (homepage).
3. THE 404 Page SHALL match the site's visual design system and include the Site Header and Site Footer.

---

### Requirement 19: SEO Metadata and Open Graph

**User Story:** As a business owner, I want every public page to have unique, accurate SEO metadata and Open Graph tags so that the site ranks in search results and links share correctly on social media.

#### Acceptance Criteria

1. THE Website SHALL use the Next.js `metadata` export API to define page-level metadata; metadata SHALL NOT be injected via manual `<head>` manipulation.
2. THE Website SHALL output a unique `<title>` and `<meta name="description">` for every public-facing page.
3. THE Website SHALL output Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`) on every public-facing page.
4. WHEN a Product Detail Page is rendered, THE Website SHALL set `og:image` to the primary product image URL.
5. THE Website SHALL define a canonical URL tag on every public-facing page.
6. THE Website SHALL generate a `sitemap.xml` via `app/sitemap.ts` that includes the homepage, shop page, all non-hidden collection pages, all non-hidden product pages, and all static informational pages.
7. THE Website SHALL generate a `robots.txt` via `app/robots.ts` that allows indexing of all public pages and references the sitemap URL.
8. WHEN a product's `availability` is `"hidden"`, THE Website SHALL NOT include that product's URL in the sitemap; the correct strategy for indexing sold-out product pages is TBD (business decision).

---

### Requirement 20: Accessibility

**User Story:** As a customer using a keyboard, screen reader, or assistive technology, I want the website to be navigable and understandable so that I can access product information and contact the business without barriers.

#### Acceptance Criteria

1. THE Website SHALL use semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`, `<h1>`–`<h6>`) appropriately throughout all pages.
2. THE Website SHALL provide visible keyboard focus styles on all interactive elements (links, buttons, inputs, select controls).
3. THE Website SHALL ensure every page has a single `<h1>` element representing the primary page heading.
4. THE Website SHALL provide a descriptive `alt` attribute on every meaningful product image; the alt text SHALL describe the product and its visible attributes (e.g., fabric, color, pattern), not generic placeholder text.
5. WHEN a button contains only an icon with no visible text label, THE Website SHALL provide an `aria-label` attribute describing the button's action.
6. THE Website SHALL NOT use color as the sole means of conveying product availability status; availability SHALL also be communicated via visible text.
7. THE Website SHALL maintain logical tab order that follows the visual reading order on all pages.

---

### Requirement 21: Performance and Image Handling

**User Story:** As a customer on a mobile device with a typical Indian mobile data connection, I want the website to load quickly and display product images clearly so that browsing does not feel slow or frustrating.

#### Acceptance Criteria

1. THE Website SHALL pre-optimize all product images before adding them to the `public/products/` directory; images SHALL be compressed and resized for web delivery (target formats: WebP or AVIF).
2. THE Website SHALL NOT ship uncompressed original camera files in the `public/` directory.
3. THE Website SHALL use the standard HTML `<img>` element (or a wrapper component using it) with `width` and `height` attributes on all product images to prevent layout shift, as `next/image` automatic optimization is disabled under static export.
4. THE Website SHALL default to React Server Components for all page content; Client Components SHALL be used only where browser-side state or user interaction requires it, in order to minimize JavaScript payload delivered to the browser.
5. THE Website SHALL load web fonts using the Next.js font optimization API (`next/font`) to avoid render-blocking font requests.

---

### Requirement 22: Component Architecture

**User Story:** As a developer maintaining or extending the site, I want a clear component structure that separates concerns so that changes to one section do not unintentionally break others.

#### Acceptance Criteria

1. THE Website SHALL organize components under `components/` in subdirectories by concern: `layout/` (header, footer, navigation), `home/` (homepage sections), `product/` (product cards, gallery, details, availability), `collection/` (collection grid), `whatsapp/` (WhatsApp CTA button), and `ui/` (shared primitives).
2. THE Website SHALL define product TypeScript types exclusively in `types/product.ts` and import them consistently; duplicate type definitions SHALL NOT be introduced in component files.
3. THE Website SHALL define all business data (products, categories, site config) in `data/` files; components SHALL NOT contain hardcoded product names, prices, or business contact details.
4. WHEN a new component requires data from Product Data, THE Website SHALL receive that data as typed props passed from a Server Component parent rather than importing `data/products.ts` directly inside a Client Component.

---

### Requirement 23: Open Business Decisions (TBD Flags)

**User Story:** As a business owner, I want all unresolved business decisions clearly identified so that no content, policy, or behavior is invented by the developer without explicit approval.

#### Acceptance Criteria

1. THE Website SHALL mark all placeholder content that requires business owner input with a `TBD` comment in code and/or a visible placeholder in the development build; placeholder content SHALL NOT be published to production.
2. THE following decisions are formally TBD and SHALL NOT be implemented with invented values:
   - **TBD-1 — Deployment mode**: Static export (`output: 'export'`) versus Cloudflare Workers adapter; the default assumption is static export but the business/developer must confirm before launch.
   - **TBD-2 — Sold-out product CTA**: Whether sold-out products show "Ask about this product", are hidden, or display another action.
   - **TBD-3 — Low stock threshold**: How the seller defines and manages the `low_stock` availability state; there is no automated stock counter in V1.
   - **TBD-4 — Product categories**: The actual set of collection slugs and names reflecting products the business genuinely sells.
   - **TBD-5 — All business content**: Homepage copy, brand story, craft description, policies (shipping, returns, privacy), contact details (phone, email, location, hours), and Instagram URL must be supplied and approved by the business owner.
   - **TBD-6 — Sold-out product indexing**: Whether sold-out product pages should remain indexed in the sitemap or be excluded.
