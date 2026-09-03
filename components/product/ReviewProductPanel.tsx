"use client";

import { useState } from "react";
import type { Product } from "@/types/product";
import type { Category } from "@/data/categories";

const decisions = [
  "APPROVE",
  "EDIT",
  "SPLIT",
  "MERGE",
  "REJECT",
  "NEEDS_MORE_INFO",
] as const;

type HumanDecision = (typeof decisions)[number];

interface ReviewProductPanelProps {
  product: Product;
  categories: Category[];
}

export default function ReviewProductPanel({
  product,
  categories,
}: ReviewProductPanelProps) {
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description ?? "");
  const [categorySlug, setCategorySlug] = useState(product.categorySlug ?? "");
  const [priceInr, setPriceInr] = useState(
    product.priceInr === undefined ? "" : String(product.priceInr)
  );
  const [availability, setAvailability] = useState(product.availability ?? "");
  const [fabric, setFabric] = useState(product.fabric ?? "");
  const [dimensions, setDimensions] = useState(product.dimensions ?? "");
  const [blouseIncluded, setBlouseIncluded] = useState(
    product.blouseIncluded === undefined ? "" : String(product.blouseIncluded)
  );
  const [careInstructions, setCareInstructions] = useState(
    product.careInstructions?.join("\n") ?? ""
  );
  const [decision, setDecision] = useState<HumanDecision | "">("");
  const [message, setMessage] = useState("");

  const handlePublishCheck = () => {
    const price = Number(priceInr);
    const requiredFields = [
      ["name", name.trim()],
      ["description", description.trim()],
      ["category", categorySlug],
      ["price", Number.isInteger(price) && price > 0],
      ["availability", availability && availability !== "hidden"],
    ] as const;
    const missingFields = requiredFields
      .filter(([, value]) => !value)
      .map(([field]) => field);

    if (missingFields.length > 0) {
      setMessage(
        `Cannot publish yet. Verify: ${missingFields.join(", " )}. This workspace does not change source files.`
      );
      return;
    }

    setMessage(
      "Ready for source update. Copy these verified values into data/draft-products.ts, then change this record's status to published."
    );
  };

  return (
    <section
      aria-labelledby={`${product.id}-review-controls`}
      className="border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6"
    >
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3 border-b border-[var(--border)] pb-4">
        <div>
          <h2
            id={`${product.id}-review-controls`}
            className="text-display-md text-[var(--primary)]"
          >
            Human review
          </h2>
          <p className="mt-1 text-body-sm text-[var(--muted)]">
            Local draft edits only. Canonical data remains in the repository.
          </p>
        </div>
        <span className="text-ui-sm font-semibold text-[var(--accent)]">
          Status: {product.status}
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-body-sm text-[var(--foreground)]">
          Final name
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-1 w-full rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--background)] px-3 py-2"
          />
        </label>

        <label className="text-body-sm text-[var(--foreground)]">
          Final category
          <select
            value={categorySlug}
            onChange={(event) => setCategorySlug(event.target.value)}
            className="mt-1 w-full rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--background)] px-3 py-2"
          >
            <option value="">Select a canonical category</option>
            {categories.map((category) => (
              <option key={category.slug} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
        </label>

        <label className="text-body-sm text-[var(--foreground)] md:col-span-2">
          Final description
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            rows={3}
            className="mt-1 w-full rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--background)] px-3 py-2"
          />
        </label>

        <label className="text-body-sm text-[var(--foreground)]">
          Final price (INR)
          <input
            type="number"
            min="1"
            step="1"
            value={priceInr}
            onChange={(event) => setPriceInr(event.target.value)}
            placeholder="Enter after verification"
            className="mt-1 w-full rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--background)] px-3 py-2"
          />
        </label>

        <label className="text-body-sm text-[var(--foreground)]">
          Final availability
          <select
            value={availability}
            onChange={(event) => setAvailability(event.target.value)}
            className="mt-1 w-full rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--background)] px-3 py-2"
          >
            <option value="">Select after verification</option>
            <option value="available">Available</option>
            <option value="low_stock">Low Stock</option>
            <option value="sold_out">Sold Out</option>
            <option value="pre_order">Pre-order</option>
            <option value="hidden">Hidden</option>
          </select>
        </label>

        <label className="text-body-sm text-[var(--foreground)]">
          Final fabric
          <input
            value={fabric}
            onChange={(event) => setFabric(event.target.value)}
            placeholder="Leave blank until verified"
            className="mt-1 w-full rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--background)] px-3 py-2"
          />
        </label>

        <label className="text-body-sm text-[var(--foreground)]">
          Final dimensions
          <input
            value={dimensions}
            onChange={(event) => setDimensions(event.target.value)}
            placeholder="Leave blank until verified"
            className="mt-1 w-full rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--background)] px-3 py-2"
          />
        </label>

        <label className="text-body-sm text-[var(--foreground)]">
          Final blouse inclusion
          <select
            value={blouseIncluded}
            onChange={(event) => setBlouseIncluded(event.target.value)}
            className="mt-1 w-full rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--background)] px-3 py-2"
          >
            <option value="">Leave unconfirmed</option>
            <option value="true">Included</option>
            <option value="false">Not included</option>
          </select>
        </label>

        <label className="text-body-sm text-[var(--foreground)] md:col-span-2">
          Final care instructions
          <textarea
            value={careInstructions}
            onChange={(event) => setCareInstructions(event.target.value)}
            rows={3}
            placeholder="One verified instruction per line"
            className="mt-1 w-full rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--background)] px-3 py-2"
          />
        </label>

        <label className="text-body-sm text-[var(--foreground)]">
          Human decision
          <select
            value={decision}
            onChange={(event) => setDecision(event.target.value as HumanDecision)}
            className="mt-1 w-full rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--background)] px-3 py-2"
          >
            <option value="">Select a decision</option>
            {decisions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-[var(--border)] pt-5">
        <button
          type="button"
          onClick={handlePublishCheck}
          className="rounded-[var(--radius-md)] bg-[var(--primary)] px-4 py-2 text-body-sm font-medium text-[var(--surface)]"
        >
          Check publish readiness
        </button>
        <p role="status" className="text-body-sm text-[var(--muted)]">
          {message}
        </p>
      </div>
    </section>
  );
}
