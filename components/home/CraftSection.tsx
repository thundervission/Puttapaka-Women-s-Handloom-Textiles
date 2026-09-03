/**
 * CraftSection — Server Component.
 * Explains the 3-stage handloom weaving process using factual textile steps.
 */
export default function CraftSection() {
  const steps = [
    {
      step: "01",
      title: "Yarn Preparation & Dyeing",
      description:
        "Cotton and silk yarns are meticulously measured and tie-dyed using traditional Ikkat resist-dyeing methods to form precise geometric patterns.",
    },
    {
      step: "02",
      title: "Handloom Weaving",
      description:
        "Dyed warp and weft yarns are set on traditional pit looms where weavers align each thread manually to bring the intricate designs to life.",
    },
    {
      step: "03",
      title: "Finishing & Direct Delivery",
      description:
        "Completed sarees are inspected for weave consistency, finished with tassel details, and packed securely for direct shipping across India.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-ui-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
          Textile Artistry
        </span>
        <h2 className="text-display-lg text-[var(--primary)] font-normal tracking-tight">
          The Puttapaka Weaving Process
        </h2>
        <p className="text-body-md text-[var(--muted)]">
          Every saree undergoes a meticulous multi-step handloom creation process that requires immense patience and skill.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {steps.map((s) => (
          <div
            key={s.step}
            className="p-6 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-md)] space-y-3"
          >
            <span className="text-display-md font-semibold text-[var(--accent)] font-mono">
              {s.step}
            </span>
            <h3 className="text-display-md text-[var(--primary)] font-medium">
              {s.title}
            </h3>
            <p className="text-body-sm text-[var(--muted)] leading-relaxed">
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
