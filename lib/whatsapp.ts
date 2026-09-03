import type { Product } from "@/types/product";
import { siteConfig } from "@/data/site";
import { formatPrice } from "@/lib/utils";

/**
 * Strips all non-digit characters from phoneNumber and constructs
 * an encoded https://wa.me/ click-to-chat URL.
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
}): string {
  const digits = phoneNumber.replace(/\D/g, "");
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
  product: Product,
  productUrl: string
): string {
  return [
    `Hello ${siteConfig.name},`,
    ``,
    `I am interested in the following product:`,
    ``,
    `Product: ${product.name}`,
    `ID: ${product.id}`,
    `Price: ${formatPrice(product.priceInr)}`,
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
