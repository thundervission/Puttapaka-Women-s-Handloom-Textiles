# Product Image Mapping Report

Generated from the current `data/products.ts` records and `public/products/` inventory. This is a read-only inventory report. It does not assign any unverified image to a product.

## Summary

- Prepared image assets: 111
- Mapped image references: 3
- Unmapped image assets: 108
- Missing image references: 0
- Duplicate image usage: none

## Mapped images

| Image | Product ID | Product slug |
| --- | --- | --- |
| `pwt-img-001.webp` | `PWT-001` | `puttapaka-handloom-cotton-saree-maroon` |
| `pwt-img-002.webp` | `PWT-001` | `puttapaka-handloom-cotton-saree-maroon` |
| `pwt-img-017.webp` | `PWT-002` | `puttapaka-handloom-silk-saree-navy` |

## Unmapped images

The following assets exist but are not referenced by a product record:

`pwt-img-003.webp` through `pwt-img-016.webp`, `pwt-img-018.webp` through `pwt-img-111.webp`.

This report intentionally does not infer product identity, image grouping, product names, prices, categories, or availability for these assets.

## Missing references

None. Every image currently referenced by `data/products.ts` exists in `public/products/`.

## Duplicate usage

None. Each mapped image is used by one product record only.
