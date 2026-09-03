import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `Shipping | ${siteConfig.shortName}`,
  description:
    "Current shipping information for Puttapaka Women’s Handloom Textiles: delivery details are confirmed directly through WhatsApp after an inquiry.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/shipping`,
  },
  openGraph: {
    title: `Shipping | ${siteConfig.shortName}`,
    description:
      "Current shipping information for Puttapaka Women’s Handloom Textiles: delivery details are confirmed directly through WhatsApp after an inquiry.",
    url: `${siteConfig.siteUrl}/shipping`,
    type: "website",
  },
};

export default function ShippingPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Shipping", href: "/shipping" }]} />

      <header className="space-y-4">
        <p className="text-ui-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
          Shipping
        </p>
        <h1 className="text-display-lg sm:text-display-xl text-[var(--primary)] font-normal tracking-tight">
          Shipping details are confirmed directly
        </h1>
      </header>

      <section className="space-y-5 text-body-md leading-relaxed text-[var(--foreground)]">
        <p>
          This website does not currently publish a fixed shipping fee, delivery
          timeline, or automatic checkout flow. Shipping details are discussed
          directly with the business once a customer confirms a product enquiry
          through WhatsApp.
        </p>
        <p>
          As a result, the delivery area, processing time, and final shipping
          arrangement may vary by product, location, and current availability.
          The business confirms these details through direct conversation before
          dispatch.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <article className="p-6 border border-[var(--border)] bg-[var(--surface)] rounded-[var(--radius-md)] space-y-3">
          <h2 className="text-display-md text-[var(--primary)] font-medium">1. Enquire</h2>
          <p className="text-body-sm leading-relaxed text-[var(--muted)]">
            Choose a product and send a WhatsApp message to confirm the item and
            ordering details.
          </p>
        </article>

        <article className="p-6 border border-[var(--border)] bg-[var(--surface)] rounded-[var(--radius-md)] space-y-3">
          <h2 className="text-display-md text-[var(--primary)] font-medium">2. Confirm</h2>
          <p className="text-body-sm leading-relaxed text-[var(--muted)]">
            The seller confirms availability, product details, and the next steps
            for the order.
          </p>
        </article>

        <article className="p-6 border border-[var(--border)] bg-[var(--surface)] rounded-[var(--radius-md)] space-y-3">
          <h2 className="text-display-md text-[var(--primary)] font-medium">3. Delivery</h2>
          <p className="text-body-sm leading-relaxed text-[var(--muted)]">
            Final delivery arrangements and cost details are shared directly by
            the business.
          </p>
        </article>
      </section>

      <div className="flex flex-wrap gap-3">
        <Button href="/shop" variant="primary">
          Continue shopping
        </Button>
        <Button href="/contact" variant="outline">
          Contact the seller
        </Button>
      </div>
    </main>
  );
}
