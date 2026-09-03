import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { categories } from "@/data/categories";
import { getFeaturedProducts } from "@/data/products";
import HeroSection from "@/components/home/HeroSection";
import CategoryGrid from "@/components/home/CategoryGrid";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BrandStorySection from "@/components/home/BrandStorySection";
import CraftSection from "@/components/home/CraftSection";
import TrustSection from "@/components/home/TrustSection";
import HomepageWhatsAppCTA from "@/components/home/HomepageWhatsAppCTA";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Handloom Sarees from Telangana`,
  description:
    "Explore authentic handloom cotton and silk sarees woven in Puttapaka village, Telangana. Direct weaver inquiries via WhatsApp.",
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    title: `${siteConfig.name} | Handloom Sarees from Telangana`,
    description:
      "Explore authentic handloom cotton and silk sarees woven in Puttapaka village, Telangana. Direct weaver inquiries via WhatsApp.",
    url: siteConfig.siteUrl,
    type: "website",
  },
};

/**
 * Homepage — Server Component.
 * Primary brand introduction and conversion entry point for Puttapaka Women's Handloom Textiles.
 */
export default async function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <main className="space-y-4 sm:space-y-8">
      {/* 1. Hero Banner */}
      <HeroSection />

      {/* 2. Featured Categories */}
      <CategoryGrid categories={categories} />

      {/* 3. Featured Products */}
      <FeaturedProducts products={featuredProducts} />

      {/* 4. Brand & Heritage Story */}
      <BrandStorySection />

      {/* 5. Craft Process */}
      <CraftSection />

      {/* 6. Factual Business Trust Signals */}
      <TrustSection />

      {/* 7. Conversion WhatsApp CTA */}
      <HomepageWhatsAppCTA />
    </main>
  );
}
