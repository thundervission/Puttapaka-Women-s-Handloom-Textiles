import type { Metadata } from "next";
import type { PublishedProduct } from "@/types/product";
import type { Category } from "@/data/categories";
import { siteConfig } from "@/data/site";

/**
 * Builds Next.js Metadata for a product detail page.
 * og:image is set to the primary product image (absolute URL).
 */
export function buildProductMetadata(
  product: PublishedProduct,
  productUrl: string
): Metadata {
  const title =
    product.seo?.title ??
    `${product.name} | ${siteConfig.shortName}`;

  const description =
    product.seo?.description ??
    `${product.name}. ${product.description?.slice(0, 120) ?? "Product details available on request."}`;

  const primaryImageSrc = product.images[0]?.src ?? "";
  // Build absolute URL for og:image
  const primaryImageUrl = primaryImageSrc
    ? `${siteConfig.siteUrl}${primaryImageSrc}`
    : undefined;

  return {
    title,
    description,
    alternates: { canonical: productUrl },
    openGraph: {
      title,
      description,
      url: productUrl,
      type: "website",
      images: primaryImageUrl ? [{ url: primaryImageUrl }] : [],
    },
  };
}

/**
 * Builds Next.js Metadata for a collection page.
 */
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
