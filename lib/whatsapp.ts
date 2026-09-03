import type { PublishedProduct } from "@/types/product";
import { siteConfig } from "@/data/site";
import { formatPrice } from "@/lib/utils";

/**
 * Normalizes a phone number for WhatsApp's international URL format.
 * Returns null when the value cannot identify a plausible phone number.
 */
export function normalizeWhatsAppNumber(phoneNumber?: string): string | null {
  const digits = phoneNumber?.replace(/\D/g, "") ?? "";
  return digits.length >= 7 && digits.length <= 15 ? digits : null;
}

/**
 * Constructs an encoded https://wa.me/ click-to-chat URL.
 *
 * This is the ONLY place WhatsApp URLs are constructed.
 * No component or utility should concatenate wa.me strings directly.
 */
export function createWhatsAppUrl({
  phoneNumber,
  message,
}: {
  phoneNumber: string;
  message: string;
}): string | null {
  const digits = normalizeWhatsAppNumber(phoneNumber);
  if (!digits) return null;

  const encoded = encodeURIComponent(message);
  return `https://wa.me/${digits}?text=${encoded}`;
}

/**
 * Builds the pre-filled WhatsApp inquiry message for a specific product.
 *
 * Deliberately does NOT say an order is placed — this opens an inquiry
 * conversation. The seller confirms availability, payment, and shipping.
 */
export function createProductWhatsAppMessage(
  product: PublishedProduct,
  productUrl: string
): string {
  return [
    `Hello ${siteConfig.name},`,
    ``,
    `I am interested in the following product:`,
    ``,
    `Product: ${product.name}`,
    `ID: ${product.id}`,
    ...(product.priceInr !== undefined
      ? [`Price: ${formatPrice(product.priceInr)}`]
      : []),
    `Link: ${productUrl}`,
    ``,
    `Could you please confirm availability and share details on how to order?`,
    ``,
    `Thank you.`,
  ].join("\n");
}

/**
 * Builds a general inquiry message (not product-specific).
 * Used for header CTA, contact page, and floating button.
 */
export function createGeneralWhatsAppMessage(): string {
  return [
    `Hello ${siteConfig.name},`,
    ``,
    `I would like to know more about your handloom sarees and textiles.`,
    ``,
    `Could you please share details about your current collection?`,
  ].join("\n");
}
