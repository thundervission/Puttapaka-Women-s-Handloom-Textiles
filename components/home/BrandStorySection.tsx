import { siteConfig } from "@/data/site";

/**
 * BrandStorySection — Server Component.
 * Introduces the authentic background and location of Puttapaka Women's Handloom Textiles.
 * Adheres strictly to factual, verified business information.
 */
export default function BrandStorySection() {
  return (
    <section className="py-16 sm:py-24 bg-[var(--surface)] border-y border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Story Text */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-ui-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
            Our Heritage & Location
          </span>

          <h2 className="text-display-lg sm:text-display-xl text-[var(--primary)] font-normal tracking-tight">
            Directly from Weaver Families in Puttapaka
          </h2>

          <div className="space-y-4 text-body-md text-[var(--foreground)] leading-relaxed">
            <p>
              Puttapaka Village in Nalgonda District, Telangana, is renowned across India for its centuries-old tradition of handloom weaving and precision Ikkat tie-and-dye artistry.
            </p>
            <p>
              Puttapaka Women&apos;s Handloom Textiles brings these authentic woven sarees directly from local weaver families to patrons across India. Every saree in our catalog represents genuine craftsmanship, high-grade yarn, and traditional loom weaving techniques.
            </p>
          </div>

          <div className="p-4 bg-[var(--background)] border border-[var(--border)] rounded-[var(--radius-md)] space-y-1">
            <span className="text-ui-sm font-medium text-[var(--muted)] uppercase tracking-wider">
              Registered Address
            </span>
            <p className="text-body-sm font-semibold text-[var(--primary)]">
              {siteConfig.location}
            </p>
          </div>
        </div>

        {/* Story Visual */}
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/3] rounded-[var(--radius-md)] overflow-hidden border border-[var(--border)] bg-[var(--background)]">
            <img
              src="/products/pwt-img-002.webp"
              alt="Handloom weaving detail of Puttapaka saree pallu"
              width={600}
              height={450}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
