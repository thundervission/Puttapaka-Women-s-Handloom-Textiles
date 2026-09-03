import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Button from "@/components/ui/Button";
import WhatsAppButton from "@/components/whatsapp/WhatsAppButton";
import { siteConfig } from "@/data/site";
import { createGeneralWhatsAppMessage } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: `Contact ${siteConfig.shortName}`,
  description:
    "Contact Puttapaka Women’s Handloom Textiles through WhatsApp or visit the business location in Puttapaka Village, Telangana.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/contact`,
  },
  openGraph: {
    title: `Contact ${siteConfig.shortName}`,
    description:
      "Contact Puttapaka Women’s Handloom Textiles through WhatsApp or visit the business location in Puttapaka Village, Telangana.",
    url: `${siteConfig.siteUrl}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  const whatsappMessage = createGeneralWhatsAppMessage();

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]} />

      <header className="space-y-4">
        <p className="text-ui-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
          Contact
        </p>
        <h1 className="text-display-lg sm:text-display-xl text-[var(--primary)] font-normal tracking-tight">
          Get in touch
        </h1>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="p-6 border border-[var(--border)] bg-[var(--surface)] rounded-[var(--radius-md)] space-y-4">
          <h2 className="text-display-md text-[var(--primary)] font-medium">
            Business details
          </h2>
          <ul className="space-y-3 text-body-sm text-[var(--foreground)]">
            <li>
              <span className="font-semibold text-[var(--primary)]">Business:</span>{" "}
              {siteConfig.name}
            </li>
            <li>
              <span className="font-semibold text-[var(--primary)]">Location:</span>{" "}
              {siteConfig.location}
            </li>
            <li>
              <span className="font-semibold text-[var(--primary)]">Business hours:</span>{" "}
              {siteConfig.businessHours === "[TBD]" ? "Pending confirmation" : siteConfig.businessHours}
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
        </article>

        <article className="p-6 border border-[var(--border)] bg-[var(--background)] rounded-[var(--radius-md)] space-y-4">
          <h2 className="text-display-md text-[var(--primary)] font-medium">
            WhatsApp inquiry
          </h2>
          <p className="text-body-sm leading-relaxed text-[var(--muted)]">
            Product availability, styles, and ordering details are confirmed
            directly through WhatsApp.
          </p>
          <WhatsAppButton
            phoneNumber={siteConfig.whatsappNumberSecondary}
            message={whatsappMessage}
            label="Chat on WhatsApp"
            variant="primary"
          />
        </article>
      </section>

      <div className="flex flex-wrap gap-3">
        <Button href="/shop" variant="primary">
          Browse products
        </Button>
        <Button href="/about" variant="outline">
          About the brand
        </Button>
      </div>
    </main>
  );
}
