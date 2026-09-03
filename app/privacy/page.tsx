import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `Privacy | ${siteConfig.shortName}`,
  description:
    "Privacy information for the Puttapaka Women’s Handloom Textiles website: what personal information is collected and how it is used.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/privacy`,
  },
  openGraph: {
    title: `Privacy | ${siteConfig.shortName}`,
    description:
      "Privacy information for the Puttapaka Women’s Handloom Textiles website: what personal information is collected and how it is used.",
    url: `${siteConfig.siteUrl}/privacy`,
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy", href: "/privacy" }]} />

      <header className="space-y-4">
        <p className="text-ui-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
          Privacy
        </p>
        <h1 className="text-display-lg sm:text-display-xl text-[var(--primary)] font-normal tracking-tight">
          Privacy and information handling
        </h1>
      </header>

      <section className="space-y-5 text-body-md leading-relaxed text-[var(--foreground)]">
        <p>
          This website is a static catalogue intended to help customers browse
          handloom products and contact the business through WhatsApp. It is not
          a transactional platform with customer accounts, order storage, or a
          payment gateway.
        </p>
        <p>
          The website does not currently maintain a customer database or a custom
          backend for order management. Any personal information shared between a
          customer and the business is handled through direct WhatsApp and other
          agreed business contact methods.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="p-6 border border-[var(--border)] bg-[var(--surface)] rounded-[var(--radius-md)] space-y-3">
          <h2 className="text-display-md text-[var(--primary)] font-medium">What is collected</h2>
          <p className="text-body-sm leading-relaxed text-[var(--muted)]">
            The site itself does not currently collect personal data through a
            form, account system, or checkout process. Product information and
            product images are presented for browsing.
          </p>
        </article>

        <article className="p-6 border border-[var(--border)] bg-[var(--surface)] rounded-[var(--radius-md)] space-y-3">
          <h2 className="text-display-md text-[var(--primary)] font-medium">How it is used</h2>
          <p className="text-body-sm leading-relaxed text-[var(--muted)]">
            Information is used to help present the product catalogue and support
            direct customer communication through WhatsApp and other approved
            business contact channels.
          </p>
        </article>
      </section>

      <section className="p-6 border border-[var(--border)] bg-[var(--background)] rounded-[var(--radius-md)] space-y-3">
        <h2 className="text-display-md text-[var(--primary)] font-medium">Analytics and third parties</h2>
        <p className="text-body-sm leading-relaxed text-[var(--muted)]">
          No analytics service or third-party tracking script is currently
          implemented in the project codebase. If analytics is added later, the
          business should review and confirm the configuration before it is used
          in production.
        </p>
      </section>

      <div className="flex flex-wrap gap-3">
        <Button href="/contact" variant="primary">
          Contact the business
        </Button>
        <Button href="/shop" variant="outline">
          Continue browsing
        </Button>
      </div>
    </main>
  );
}
