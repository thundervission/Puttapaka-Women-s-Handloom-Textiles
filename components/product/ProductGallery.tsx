"use client";

import { useState } from "react";
import type { ProductImage } from "@/types/product";

interface ProductGalleryProps {
  images: ProductImage[];
  productName: string;
}

/**
 * ProductGallery — Client Component.
 * Interactive gallery for switching between product images via thumbnail selection.
 * Eagerly loads main image, lazily loads thumbnails, and prevents layout shift.
 */
export default function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const safeImages: ProductImage[] =
    images && images.length > 0
      ? images
      : [
          {
            src: "/products/pwt-img-001.webp",
            alt: productName,
          },
        ];

  const activeImage = safeImages[activeIndex] ?? safeImages[0];

  return (
    <div className="flex flex-col gap-4">
      {/* Primary Main Image Display Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-md)]">
        <img
          key={activeImage.src}
          src={activeImage.src}
          alt={activeImage.alt}
          width={800}
          height={1066}
          loading="eager"
          fetchPriority="high"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnail Selector List */}
      {safeImages.length > 1 && (
        <div
          role="region"
          aria-label={`${productName} image gallery thumbnails`}
          className="flex flex-wrap gap-3"
        >
          {safeImages.map((image, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={`${image.src}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View image ${index + 1} of ${safeImages.length} for ${productName}`}
                aria-pressed={isActive}
                className={`relative w-20 aspect-[3/4] rounded-[var(--radius-sm)] overflow-hidden border-2 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-[var(--primary)] focus-visible:outline-offset-2 ${
                  isActive
                    ? "border-[var(--primary)] ring-2 ring-[var(--primary)]/20"
                    : "border-[var(--border)] opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width={150}
                  height={200}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
