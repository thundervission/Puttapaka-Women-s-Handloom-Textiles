import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `Returns & Exchange | ${siteConfig.shortName}`,
  description:
    "Return and exchange information for Puttapaka Women’s Handloom Textiles is shared directly with customers when a product inquiry is confirmed.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/returns`,
  },
  openGraph: {
    title: `Returns & Exchange | ${siteConfig.shortName}`,
    description:
      "Return and exchange information for Puttapaka Women’s Handloom Textiles is shared directly with customers when a product inquiry is confirmed.",
    url: `${siteConfig.siteUrl}/returns`,
    type: "website",
  },
};

export default function ReturnsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Returns & Exchange", href: "/returns" }]} />

      <header className="space-y-4">
        <p className="text-ui-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
          Returns & exchange
        </p>
        <h1 className="text-display-lg sm:text-display-xl text-[var(--primary)] font-normal tracking-tight">
          Returns are reviewed directly with the business
        </h1>
      </header>

      <section className="space-y-5 text-body-md leading-relaxed text-[var(--foreground)]">
        <p>
          This website does not currently publish a generic ecommerce return policy
          for all products. The final return or exchange terms are confirmed by
          the business directly after a product enquiry and order discussion.
        </p>
        <p>
          If there is a concern with a product, damaged item, or delivery issue,
          the customer should contact the business through WhatsApp or the listed
          contact details to discuss the next steps.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="p-6 border border-[var(--border)] bg-[var(--surface)] rounded-[var(--radius-md)] space-y-3">
          <h2 className="text-display-md text-[var(--primary)] font-medium">Before dispatch</h2>
          <p className="text-body-sm leading-relaxed text-[var(--muted)]">
            Product availability, choice, and order details are confirmed before
            the final arrangement is made. Any questions can be discussed directly.
          </p>
        </article>

        <article className="p-6 border border-[var(--border)] bg-[var(--surface)] rounded-[var(--radius-md)] space-y-3">
          <h2 className="text-display-md text-[var(--primary)] font-medium">After delivery</h2>
          <p className="text-body-sm leading-relaxed text-[var(--muted)]">
            If there is a concern after delivery, please reach out to the business
            to discuss the specific item and the appropriate next step.
          </p>
        </article>
      </section>

      <div className="flex flex-wrap gap-3">
        <Button href="/contact" variant="primary">
          Contact the business
        </Button>
        <Button href="/shipping" variant="outline">
          View shipping info
        </Button>
      </div>
    </main>
  );
}
