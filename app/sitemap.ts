import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";
import { getPublicProducts } from "@/data/products";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

const staticPaths = [
  "/",
  "/shop",
  "/about",
  "/story",
  "/contact",
  "/shipping",
  "/returns",
  "/privacy",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");
  const publicProducts = getPublicProducts();
  const publicCategorySlugs = new Set(
    publicProducts.map((product) => product.categorySlug)
  );
  const validCategories = categories.filter((category) =>
    publicCategorySlugs.has(category.slug)
  );

  const staticPages = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));

  const collectionPages = validCategories.map((category) => ({
    url: `${baseUrl}/collections/${category.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const productPages = publicProducts.map((product) => ({
    url: `${baseUrl}/product/${product.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...collectionPages, ...productPages];
}
