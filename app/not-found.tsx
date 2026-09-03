import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl items-center justify-center px-4 py-12 sm:px-6 sm:py-16">
      <div className="w-full space-y-8 text-center">
        <div className="space-y-4">
          <p className="text-ui-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            404
          </p>
          <h1 className="text-display-lg sm:text-display-xl text-[var(--primary)] font-normal tracking-tight">
            Page not found
          </h1>
          <p className="mx-auto max-w-xl text-body-md leading-relaxed text-[var(--muted)]">
            The page you requested could not be found. You can return to the
            homepage or browse the current collection.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button href="/" variant="primary">
            Return Home
          </Button>
          <Button href="/shop" variant="outline">
            Browse Shop
          </Button>
        </div>
      </div>
    </main>
  );
}
