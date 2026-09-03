import Link from "next/link";
import { siteConfig } from "@/data/site";
import { createGeneralWhatsAppMessage } from "@/lib/whatsapp";
import WhatsAppButton from "@/components/whatsapp/WhatsAppButton";
import Button from "@/components/ui/Button";

/**
 * HeroSection — Server Component.
 * Primary visual entry point for the homepage introducing Puttapaka Handloom Textiles.
 */
export default function HeroSection() {
  const whatsappMessage = createGeneralWhatsAppMessage();

  return (
    <section className="py-12 sm:py-20 bg-[var(--surface)] border-b border-[var(--border)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Headlines & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--background)] border border-[var(--border)] rounded-[var(--radius-pill)]">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            <span className="text-ui-sm font-medium text-[var(--foreground)] uppercase tracking-wider">
              Hand-woven in Telangana
            </span>
          </div>

          <h1 className="text-display-xl sm:text-[3.25rem] text-[var(--primary)] font-normal tracking-tight leading-[1.15]">
            Authentic Puttapaka Handloom Sarees & Textiles
          </h1>

          <p className="text-body-lg text-[var(--muted)] max-w-xl leading-relaxed">
            Directly woven by master artisans in Puttapaka village, Telangana.
            Discover timeless Ikkat patterns, rich heritage textures, and pure
            cotton and silk sarees.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="/shop">
              <Button variant="primary" className="!py-3.5 !px-7 text-body-md">
                Explore Collection
              </Button>
            </Link>

            <WhatsAppButton
              phoneNumber={siteConfig.whatsappNumber}
              message={whatsappMessage}
              label="Chat on WhatsApp"
              variant="outline"
              className="!py-3 !px-6 text-body-md"
            />
          </div>

          <div className="pt-4 flex items-center gap-6 text-body-sm text-[var(--muted)]">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-4 h-4 text-[var(--accent)]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span>100% Authentic Handloom</span>
            </div>

            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-4 h-4 text-[var(--accent)]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span>Direct Weaver Inquiries</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Photography */}
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/3] sm:aspect-[4/3] w-full rounded-[var(--radius-md)] overflow-hidden border border-[var(--border)] bg-[var(--background)] shadow-sm">
            <img
              src="/products/pwt-img-001.webp"
              alt="Maroon Puttapaka handloom cotton saree with traditional Ikkat woven border"
              width={800}
              height={600}
              loading="eager"
              fetchPriority="high"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
