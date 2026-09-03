# Product Catalog Guide

This guide describes the approved workflow for adding verified catalog information to the static catalog. It does not assign product details to images and does not define business policies.

## Current organization

- `data/products.ts` composes the published catalog with the draft records from `data/draft-products.ts`.
- `data/draft-products.ts` contains AI-assisted records; records may be intentionally exposed as `status: "published", provisional: true` while the current catalog is being inspected, but they must not be treated as verified business data.
- `data/categories.ts` is the source of valid collection category slugs.
- `public/products/` contains the flat prepared image set.
- Images use the `pwt-img-XXX.webp` filename convention. There are no per-product folders in the current architecture.
- `/review/products` is the local static review workspace for records with `status: "draft"`; it is noindex and not linked from public navigation.
- `docs/product-catalog-template.csv` is a blank staging format for verified information.

Keep this organization unless the application architecture is intentionally changed later.

## Product IDs

Assign the next unused ID using the `PWT-XXX` convention, with three digits such as `PWT-003`. Check both existing IDs and the spreadsheet before assigning a new ID. An ID is permanent and must not be reused for another product.

## Image mapping

Set `image_id` to the exact asset identifier without guessing its product assignment. For example, `pwt-img-023` maps to `public/products/pwt-img-023.webp`. When a product has multiple images, put the image IDs in one CSV cell separated by commas and quote the cell when required by CSV syntax. The first image becomes the primary product image.

Only map images after the owner has supplied verified product details for that image. Never assign the remaining prepared images based on appearance, filename order, or assumptions.

## Catalog fields

The CSV columns correspond to the `Product` model:

| Field | Required | Format |
| --- | --- | --- |
| `product_id` | Yes | Unique `PWT-XXX` identifier |
| `image_id` | Yes | One or more existing `pwt-img-XXX` identifiers |
| `name` | Yes | Owner-approved display name |
| `slug` | Yes | Lowercase URL-safe words separated by hyphens |
| `description` | Yes | Owner-approved product description |
| `price_inr` | Yes | Positive integer, such as `1850`; do not include `₹` or commas |
| `category_slug` | Yes | A slug already defined in `data/categories.ts` |
| `fabric` | No | Verified fabric information |
| `color` | No | Verified color information |
| `dimensions` | No | Verified dimensions |
| `blouse_included` | No | `true` or `false` when confirmed |
| `care_instructions` | No | Verified instructions; separate multiple items with `;` |
| `availability` | Yes | One allowed value listed below |
| `status` | Yes | `draft` during review or `published` for public discovery |
| `featured` | No | `true` or `false` when intentionally featured |
| `new_arrival` | No | `true` or `false` when intentionally marked new |

Leave optional values blank when they are not confirmed. Do not use placeholder claims as product data.

## Availability values

The application accepts exactly:

- `available`
- `low_stock`
- `sold_out`
- `pre_order`
- `hidden`

Product publication is controlled separately by `status`. Use `draft` for incomplete records under review. Use `published` only after required business information has been verified. `availability` describes the published product's current stock state and must not be used as a publication flag.

To mark a product sold out, set `availability` to `sold_out`. Keep its verified record and images unchanged. To remove a product from public pages, set `availability` to `hidden`; hidden products are excluded from public product queries and the sitemap.

## Adding a verified product

1. Receive the completed spreadsheet and confirm each row has owner-provided information.
2. Run the dependency-free validator:

   ```bash
   node scripts/validate-product-catalog.mjs --csv docs/product-catalog-template.csv
   ```

3. Resolve every validation error. Do not bypass missing image, category, price, ID, slug, or availability errors.
4. Copy only verified rows into `data/products.ts` as `Product` records. Convert `image_id` values to `src` paths such as `/products/pwt-img-023.webp`.
5. Convert `care_instructions` into a string array and boolean columns into booleans. Keep `priceInr` as a number.
6. Preserve the existing product object shape and add only confirmed optional fields.
7. Validate the TypeScript source and image mapping:

   ```bash
   node scripts/validate-product-catalog.mjs
   npm run lint
   npm run build
   ```

8. Inspect the generated product page, collection page, sitemap, and WhatsApp message for the new record before publishing.

## Verification checklist

Before publishing a product, confirm:

- The ID and slug are unique.
- The image file exists and is the image the owner identified.
- The product name, description, price, category, fabric, color, dimensions, blouse information, and care instructions are verified or intentionally blank.
- The price is a positive whole number in INR.
- The category slug exists in `data/categories.ts`.
- The availability value is correct.
- Every image has meaningful visual alt text describing the actual product image.
- The product page uses the intended slug and displays the intended price and status.
- The collection page includes the product in the intended category.
- The sitemap includes the product only when it is not `hidden`.
- The WhatsApp inquiry identifies the correct product and does not claim an order is complete.

The validator checks record structure and file references. It cannot confirm the truth of business-supplied details; that confirmation remains an owner/developer review step.
