/**
 * Central site configuration.
 *
 * All business contact details and environment-dependent values live here.
 * No UI component or utility should hardcode the WhatsApp number, site URL,
 * Instagram URL, or any other business contact outside this file.
 *
 * TBD fields are marked — replace before production launch.
 */
export const siteConfig = {
  name: "Puttapaka Women's Handloom Textiles",
  shortName: "Puttapaka",
  /** TBD — replace with approved business tagline/description before launch */
  description: "[TBD — approved business description]",

  /**
   * Primary WhatsApp number — digits only, international format.
   * +91 99125 70419
   * Set NEXT_PUBLIC_WHATSAPP_NUMBER=919912570419 in .env.local or Cloudflare Pages env.
   * Falls back to empty string; WhatsApp CTAs render null when this is empty.
   */
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",

  /**
   * Secondary contact number.
   * +91 83175 11866
   */
  whatsappNumberSecondary: "918317511866",

  /**
   * Canonical site URL — no trailing slash.
   * Set NEXT_PUBLIC_SITE_URL in .env.local or Cloudflare Pages env.
   */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "",

  /** TBD — add Instagram profile URL once confirmed */
  instagramUrl: "[TBD]",

  /** TBD — add business email once confirmed */
  email: "[TBD]",

  /** Confirmed business address */
  location: "Puttapaka Village, Nalgonda, Telangana – 508 253",

  /** TBD — add business hours once confirmed by owner */
  businessHours: "[TBD]",
} as const;
