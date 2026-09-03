import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `Our Story | ${siteConfig.shortName}`,
  description:
    "A brief look at the Puttapaka handloom context, craft traditions, and the business story currently approved for publication.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/story`,
  },
  openGraph: {
    title: `Our Story | ${siteConfig.shortName}`,
    description:
      "A brief look at the Puttapaka handloom context, craft traditions, and the business story currently approved for publication.",
    url: `${siteConfig.siteUrl}/story`,
    type: "website",
  },
};

export default function StoryPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Our Story", href: "/story" }]} />

      <header className="space-y-4">
        <p className="text-ui-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
          Our story
        </p>
        <h1 className="text-display-lg sm:text-display-xl text-[var(--primary)] font-normal tracking-tight">
          Rooted in Puttapaka handloom tradition
        </h1>
      </header>

      <section className="space-y-5 text-body-md leading-relaxed text-[var(--foreground)]">
        <p>
          Puttapaka Village in Nalgonda District, Telangana, is known for its
          handloom weaving heritage and tie-dye practices associated with Ikkat
          design traditions.
        </p>
        <p>
          Puttapaka Women&apos;s Handloom Textiles presents this craft through a
          focused catalogue of sarees and textile products. The business is
          currently presented in a clear, product-led format so customers can
          discover pieces and move quickly to direct WhatsApp inquiries.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="p-6 border border-[var(--border)] bg-[var(--surface)] rounded-[var(--radius-md)] space-y-3">
          <h2 className="text-display-md text-[var(--primary)] font-medium">
            Approved story content
          </h2>
          <p className="text-body-sm leading-relaxed text-[var(--muted)]">
            The current website reflects the verified business context and places
            of origin already approved for publication. Detailed founder or family
            history is intentionally kept out until formal approval is received.
          </p>
        </article>

        <article className="p-6 border border-[var(--border)] bg-[var(--surface)] rounded-[var(--radius-md)] space-y-3">
          <h2 className="text-display-md text-[var(--primary)] font-medium">
            What is being added later
          </h2>
          <p className="text-body-sm leading-relaxed text-[var(--muted)]">
            This page is structured to hold approved narrative content when the
            business owner confirms the story details. Until then, the site keeps
            the focus on craft, products, and direct inquiry.
          </p>
        </article>
      </section>

      <div className="flex flex-wrap gap-3">
        <Button href="/shop" variant="primary">
          See the collection
        </Button>
        <Button href="/about" variant="outline">
          About the business
        </Button>
      </div>
    </main>
  );
}
