import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `About ${siteConfig.shortName}`,
  description:
    "Learn about Puttapaka Women’s Handloom Textiles, a Telangana-based handloom business serving customers through a curated catalog and WhatsApp inquiries.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/about`,
  },
  openGraph: {
    title: `About ${siteConfig.shortName}`,
    description:
      "Learn about Puttapaka Women’s Handloom Textiles, a Telangana-based handloom business serving customers through a curated catalog and WhatsApp inquiries.",
    url: `${siteConfig.siteUrl}/about`,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]} />

      <header className="space-y-4">
        <p className="text-ui-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
          About us
        </p>
        <h1 className="text-display-lg sm:text-display-xl text-[var(--primary)] font-normal tracking-tight">
          Puttapaka Women&apos;s Handloom Textiles
        </h1>
      </header>

      <section className="space-y-5 text-body-md leading-relaxed text-[var(--foreground)]">
        <p>
          Puttapaka Women&apos;s Handloom Textiles is a business rooted in Puttapaka
          Village, Nalgonda, Telangana. It presents handloom sarees and related
          textile products through a curated catalogue and direct WhatsApp
          conversations.
        </p>
        <p>
          The website is designed as a digital showroom: customers browse the
          collection, view product details, and message the business to confirm
          availability and ordering details before proceeding.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="p-6 border border-[var(--border)] bg-[var(--surface)] rounded-[var(--radius-md)] space-y-3">
          <h2 className="text-display-md text-[var(--primary)] font-medium">
            Who the business is
          </h2>
          <p className="text-body-sm leading-relaxed text-[var(--muted)]">
            The business is based in Puttapaka Village and focuses on handloom
            sarees and related textiles. The current catalogue is presented as a
            product-first experience to help customers explore styles and inquire
            directly.
          </p>
        </article>

        <article className="p-6 border border-[var(--border)] bg-[var(--surface)] rounded-[var(--radius-md)] space-y-3">
          <h2 className="text-display-md text-[var(--primary)] font-medium">
            What it sells
          </h2>
          <p className="text-body-sm leading-relaxed text-[var(--muted)]">
            The collection includes handloom sarees and textile products in a
            range of traditional and contemporary styles. Product details and
            availability are shared in the catalogue and confirmed through
            WhatsApp.
          </p>
        </article>
      </section>

      <section className="p-6 border border-[var(--border)] bg-[var(--background)] rounded-[var(--radius-md)] space-y-4">
        <h2 className="text-display-md text-[var(--primary)] font-medium">
          Contact the business
        </h2>
        <ul className="space-y-3 text-body-sm text-[var(--foreground)]">
          <li>
            <span className="font-semibold text-[var(--primary)]">Location:</span>{" "}
            {siteConfig.location.address}
          </li>
          <li>
            <span className="font-semibold text-[var(--primary)]">Phone contacts:</span>{" "}
            {siteConfig.contacts.map((c, i) => (
              <span key={c.phone}>
                {i > 0 ? " / " : ""}
                <a href={`tel:${c.phone}`} className="underline underline-offset-2 hover:text-[var(--primary)]">
                  {c.name} ({c.phone})
                </a>
              </span>
            ))}
          </li>
          <li>
            <span className="font-semibold text-[var(--primary)]">Email:</span>{" "}
            {siteConfig.email === "[TBD]" ? "Pending confirmation" : siteConfig.email}
          </li>
          <li>
            <span className="font-semibold text-[var(--primary)]">Instagram:</span>{" "}
            {siteConfig.instagramUrl === "[TBD]" ? "Pending confirmation" : siteConfig.instagramUrl}
          </li>
        </ul>
      </section>

      <div className="flex flex-wrap gap-3">
        <Button href="/shop" variant="primary">
          Explore products
        </Button>
        <Link href="/contact" className="inline-flex items-center justify-center rounded-[var(--radius-md)] border border-[var(--primary)] px-6 py-3 text-body-md text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--surface)] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--primary)] focus-visible:outline-offset-2">
          Contact us
        </Link>
      </div>
    </main>
  );
}
