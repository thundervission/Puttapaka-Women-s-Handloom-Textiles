import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublicProducts, getProductBySlug } from "@/data/products";
import { getCategoryBySlug } from "@/data/categories";
import { siteConfig } from "@/data/site";
import { buildProductMetadata } from "@/lib/seo";
import { createProductWhatsAppMessage, createWhatsAppUrl } from "@/lib/whatsapp";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ProductGallery from "@/components/product/ProductGallery";
import ProductDetails from "@/components/product/ProductDetails";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Next.js static export params generation.
 * Generates dynamic routes at build time for all public, non-hidden products.
 */
export async function generateStaticParams() {
  return getPublicProducts().map((product) => ({
    slug: product.slug,
  }));
}

/**
 * Dynamic metadata generation for product pages.
 */
export async function generateMetadata(
  props: ProductPageProps
): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  const productUrl = `${siteConfig.siteUrl}/product/${product.slug}`;
  return buildProductMetadata(product, productUrl);
}

/**
 * Product Detail Page — Server Component.
 * Dynamic route for displaying individual product details, image gallery, and WhatsApp inquiry CTA.
 */
export default async function ProductPage(props: ProductPageProps) {
  const { slug } = await props.params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const productUrl = `${siteConfig.siteUrl}/product/${product.slug}`;
  const whatsappMessage = createProductWhatsAppMessage(product, productUrl);
  const whatsappUrl = createWhatsAppUrl({
    phoneNumber: siteConfig.whatsappNumber,
    message: whatsappMessage,
  });

  const category = getCategoryBySlug(product.categorySlug);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    ...(category ? [{ label: category.name, href: "/shop" }] : []),
    { label: product.name, href: `/product/${product.slug}` },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      {/* Navigation Breadcrumbs */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* Main 2-Column Product Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left Column: Interactive Image Gallery */}
        <div className="w-full">
          <ProductGallery images={product.images} productName={product.name} />
        </div>

        {/* Right Column: Product Metadata, Specifications & WhatsApp CTA */}
        <div className="w-full">
          <ProductDetails
            product={product}
            whatsappUrl={whatsappUrl ?? undefined}
            productUrl={productUrl}
          />
        </div>
      </div>
    </main>
  );
}
