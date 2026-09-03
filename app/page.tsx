import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    type: "website",
  },
};

/**
 * Homepage — TBD.
 * Sections will be built in Phase D (task 18):
 * Hero → Categories → Featured Products → Brand Story → Craft → Trust → WhatsApp CTA
 *
 * Content (copy, hero image, featured products) must be approved by
 * the business owner before this page goes to production.
 */
export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h1 className="text-display-xl text-[var(--primary)] mb-4">
        Puttapaka Women&apos;s Handloom Textiles
      </h1>
      <p className="text-body-lg text-[var(--muted)] mb-2">
        Puttapaka Village, Nalgonda, Telangana – 508 253
      </p>
      <p className="text-body-md text-[var(--muted)] mb-8">
        Homepage sections coming soon — product data needed from business owner.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="/shop"
          className="inline-flex items-center px-8 py-3 bg-[var(--primary)] text-[var(--surface)] rounded-[var(--radius-pill)] text-body-md font-medium hover:opacity-90 transition-opacity"
        >
          Browse Sarees
        </a>
        <a
          href="/contact"
          className="inline-flex items-center px-8 py-3 border border-[var(--primary)] text-[var(--primary)] rounded-[var(--radius-md)] text-body-md font-medium hover:bg-[var(--primary)] hover:text-[var(--surface)] transition-colors"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
