import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCategoryBySlug } from "@/data/categories";
import { getPublicCategorySlugs, getPublicProducts } from "@/data/products";
import { filterByCategory } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { buildCollectionMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CollectionHeader from "@/components/collection/CollectionHeader";
import CollectionGrid from "@/components/collection/CollectionGrid";

interface CollectionPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Static params generator for Next.js static export.
 * Generates pre-rendered pages for all categories defined in data/categories.ts.
 */
export async function generateStaticParams() {
  return getPublicCategorySlugs().map((slug) => ({
    slug,
  }));
}

/**
 * Dynamic metadata generator for collection pages.
 */
export async function generateMetadata(
  props: CollectionPageProps
): Promise<Metadata> {
  const { slug } = await props.params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  const collectionUrl = `${siteConfig.siteUrl}/collections/${category.slug}`;
  return buildCollectionMetadata(category, collectionUrl);
}

/**
 * Collection Detail Page — Server Component.
 * Dynamic route for displaying category collection headers, product counts, and product grids.
 */
export default async function CollectionPage(props: CollectionPageProps) {
  const { slug } = await props.params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const publicProducts = getPublicProducts();
  const categoryProducts = filterByCategory(publicProducts, category.slug);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: category.name, href: `/collections/${category.slug}` },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      {/* Breadcrumbs Navigation */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* Collection Header Banner */}
      <CollectionHeader
        name={category.name}
        description={category.description}
        image={category.image}
        count={categoryProducts.length}
      />

      {/* Collection Product Grid */}
      <section aria-label={`${category.name} collection products`}>
        <CollectionGrid
          products={categoryProducts}
          categoryName={category.name}
        />
      </section>
    </main>
  );
}
