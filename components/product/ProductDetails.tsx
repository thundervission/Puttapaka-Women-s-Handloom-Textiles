import type { PublishedProduct } from "@/types/product";
import { siteConfig } from "@/data/site";
import { createProductWhatsAppMessage } from "@/lib/whatsapp";
import ProductAvailability from "@/components/product/ProductAvailability";
import WhatsAppButton from "@/components/whatsapp/WhatsAppButton";

interface ProductDetailsProps {
  product: PublishedProduct;
  whatsappUrl?: string;
  productUrl?: string;
}

/**
 * ProductDetails — Server Component.
 * Displays all available product metadata, availability status, and WhatsApp CTA.
 * Only renders attributes that are present on the product object.
 */
export default function ProductDetails({
  product,
  whatsappUrl,
  productUrl = "",
}: ProductDetailsProps) {
  const isSoldOut = product.availability === "sold_out";

  // Construct message if pre-built whatsappUrl is not supplied
  const message = createProductWhatsAppMessage(product, productUrl);

  return (
    <div className="flex flex-col space-y-6">
      {/* Header: ID, Name, Availability */}
      <div>
        <div className="flex items-center justify-between gap-4 mb-2">
          <span className="text-ui-sm font-medium text-[var(--muted)] tracking-wider">
            ID: {product.id}
          </span>
          <ProductAvailability availability={product.availability} />
        </div>
        <h1 className="text-display-lg text-[var(--primary)] tracking-tight">
          {product.name}
        </h1>
      </div>

      {/* Price */}
      <div className="pb-4 border-b border-[var(--border)]">
        <span className="text-display-md font-semibold text-[var(--foreground)]">
          Price on request
        </span>
        <span className="block text-body-sm text-[var(--muted)] mt-0.5">
          Shipping &amp; delivery details confirmed directly via WhatsApp.
        </span>
      </div>

      {/* Description */}
      {product.description && (
        <div className="text-body-md text-[var(--foreground)] leading-relaxed">
          <p>{product.description}</p>
        </div>
      )}

      {/* Product Details Section */}
      <div className="py-4 border-t border-b border-[var(--border)] space-y-3">
        <h2 className="text-ui-sm font-semibold text-[var(--primary)] uppercase tracking-wider">
          Product Specifications
        </h2>

        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-body-sm">
          {product.fabric && (
            <div className="flex justify-between sm:justify-start sm:gap-2 border-b sm:border-b-0 border-[var(--border)]/40 pb-1 sm:pb-0">
              <dt className="text-[var(--muted)]">Fabric:</dt>
              <dd className="font-medium text-[var(--foreground)]">
                {product.fabric}
              </dd>
            </div>
          )}

          {product.color && (
            <div className="flex justify-between sm:justify-start sm:gap-2 border-b sm:border-b-0 border-[var(--border)]/40 pb-1 sm:pb-0">
              <dt className="text-[var(--muted)]">Color:</dt>
              <dd className="font-medium text-[var(--foreground)]">
                {product.color}
              </dd>
            </div>
          )}

          {product.dimensions && (
            <div className="flex justify-between sm:justify-start sm:gap-2 border-b sm:border-b-0 border-[var(--border)]/40 pb-1 sm:pb-0">
              <dt className="text-[var(--muted)]">Dimensions:</dt>
              <dd className="font-medium text-[var(--foreground)]">
                {product.dimensions}
              </dd>
            </div>
          )}

          {product.blouseIncluded !== undefined && (
            <div className="flex justify-between sm:justify-start sm:gap-2 border-b sm:border-b-0 border-[var(--border)]/40 pb-1 sm:pb-0">
              <dt className="text-[var(--muted)]">Blouse Piece:</dt>
              <dd className="font-medium text-[var(--foreground)]">
                {product.blouseIncluded ? "Included" : "Not included"}
              </dd>
            </div>
          )}
        </dl>

        {/* Care Instructions */}
        {product.careInstructions && product.careInstructions.length > 0 && (
          <div className="pt-2">
            <h3 className="text-ui-sm text-[var(--muted)] uppercase tracking-wider mb-1">
              Care Instructions
            </h3>
            <ul className="list-disc list-inside text-body-sm text-[var(--foreground)] space-y-1">
              {product.careInstructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Primary Action: WhatsApp CTA or Sold Out Notice */}
      <div className="pt-2">
        {isSoldOut ? (
          <div className="p-4 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-md)] text-center">
            <p className="text-body-md font-medium text-[var(--muted)]">
              This saree is currently sold out.
            </p>
            <p className="text-body-sm text-[var(--muted)] mt-1">
              Inquire on WhatsApp about custom re-weaving or similar products.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <WhatsAppButton
              phoneNumber={siteConfig.whatsappNumber}
              message={message}
              href={whatsappUrl}
              label={
                product.availability === "pre_order"
                  ? "Pre-order on WhatsApp"
                  : "Order on WhatsApp"
              }
              variant="primary"
              className="w-full justify-center !py-3.5 text-body-md"
            />
            <p className="text-ui-sm text-[var(--muted)] text-center">
              Direct chat with seller. We will confirm availability and payment details.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
