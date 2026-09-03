import type { Metadata } from "next";
import { getPublicProducts } from "@/data/products";
import { categories } from "@/data/categories";
import { siteConfig } from "@/data/site";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ShopFilters from "@/components/shop/ShopFilters";

export const metadata: Metadata = {
  title: `Shop Handloom Sarees & Textiles | ${siteConfig.shortName}`,
  description:
    "Explore our authentic collection of Puttapaka handloom cotton and silk sarees, hand-woven in Telangana by master artisans.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/shop`,
  },
  openGraph: {
    title: `Shop Handloom Sarees & Textiles | ${siteConfig.shortName}`,
    description:
      "Explore our authentic collection of Puttapaka handloom cotton and silk sarees, hand-woven in Telangana by master artisans.",
    url: `${siteConfig.siteUrl}/shop`,
    type: "website",
  },
};

/**
 * Shop Page — Server Component.
 * Primary catalog listing page for browsing products with interactive client filtering.
 */
export default async function ShopPage() {
  const products = getPublicProducts();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      {/* Navigation Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Shop", href: "/shop" }]} />

      {/* Editorial Page Header */}
      <div className="max-w-3xl space-y-3">
        <h1 className="text-display-lg sm:text-display-xl text-[var(--primary)] font-normal tracking-tight">
          Handloom Sarees & Textiles
        </h1>
        <p className="text-body-md sm:text-body-lg text-[var(--muted)] leading-relaxed">
          Explore our authentic collection of Puttapaka handloom cotton and silk
          sarees, hand-woven in Telangana by master artisans. Direct weaver
          inquiries via WhatsApp.
        </p>
      </div>

      {/* Interactive Search, Filter & Product Grid System */}
      <ShopFilters products={products} categories={categories} />
    </main>
  );
}
