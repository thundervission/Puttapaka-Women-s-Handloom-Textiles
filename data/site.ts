/**
 * Central site configuration.
 *
 * All business contact details and environment-dependent values live here.
 * No UI component or utility should hardcode the WhatsApp number, site URL,
 * Instagram URL, or any other business contact outside this file.
 *
 */
function getSiteUrl(): string {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() ?? "";

  if (!configuredUrl || configuredUrl.includes("your-domain-here")) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL must be set to the public site URL before building."
    );
  }

  let parsedUrl: URL;
  try {
    parsedUrl = new URL(configuredUrl);
  } catch {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL must be a valid absolute HTTP or HTTPS URL."
    );
  }

  if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL must use the HTTP or HTTPS protocol."
    );
  }

  if (process.env.NODE_ENV === "production" && parsedUrl.hostname === "localhost") {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL must not use localhost for a production build."
    );
  }

  return parsedUrl.toString().replace(/\/$/, "");
}

export const siteConfig = {
  name: "Puttapaka Women's Handloom Textiles",
  shortName: "Puttapaka",
  description:
    "Handloom sarees and textiles from Puttapaka, Telangana.",

  /**
   * Primary WhatsApp number — digits only, international format.
   * Jayasri: +91 99125 70419
   * Set NEXT_PUBLIC_WHATSAPP_NUMBER=919912570419 in .env.local or Cloudflare Pages env.
   */
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919912570419",

  /**
   * Secondary contact number.
   * Shashirekha: +91 83175 11866
   */
  whatsappNumberSecondary: "918317511866",

  /**
   * Verified Business Contacts.
   * Note: No roles, titles, or designations assigned.
   */
  contacts: [
    {
      name: "Jayasri",
      phone: "9912570419",
      whatsappNumber: "919912570419",
    },
    {
      name: "Shashirekha",
      phone: "8317511866",
      whatsappNumber: "918317511866",
    },
  ],

  /**
   * Canonical site URL — no trailing slash.
   * Set NEXT_PUBLIC_SITE_URL in .env.local or Cloudflare Pages env.
   */
  siteUrl: getSiteUrl(),

  /** TBD — add Instagram profile URL once confirmed */
  instagramUrl: "[TBD]",

  /** TBD — add business email once confirmed */
  email: "[TBD]",

  /** Verified shop location data */
  location: {
    name: "Puttapaka Women's Handloom Textiles",
    address: "Puttapaka, Telangana 508253, India",
    latitude: 17.113942472113134,
    longitude: 78.93276200439975,
    mapsUrl: "https://maps.app.goo.gl/nfhLdQ4ibWNCpBgs7",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2332.7596707064513!2d78.93276200439975!3d17.113942472113134!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb1920701c9255%3A0x5d70e97ec7b5a7fe!2sPuttapaka%20Women's%20Handloom%20Textiles!5e0!3m2!1sen!2sin!4v1788624507856!5m2!1sen!2sin",
  },

  /** Optional Google Maps Embed API Key */
  googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",

  /** TBD — add business hours once confirmed by owner */
  businessHours: "[TBD]",
} as const;
