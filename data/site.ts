/**
 * Central site configuration.
 *
 * All business contact details and environment-dependent values live here.
 * No UI component or utility should hardcode the WhatsApp number, site URL,
 * Instagram URL, or any other business contact outside this file.
 *
 * TBD fields are marked — replace before production launch.
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

  return parsedUrl.toString().replace(/\/$/, "");
}

export const siteConfig = {
  name: "Puttapaka Women's Handloom Textiles",
  shortName: "Puttapaka",
  /** TBD — replace with approved business tagline/description before launch */
  description: "[TBD — approved business description]",

  /**
   * Primary WhatsApp number — digits only, international format.
   * Jayasri: +91 99125 70179
   * Set NEXT_PUBLIC_WHATSAPP_NUMBER=919912570179 in .env.local or Cloudflare Pages env.
   */
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919912570179",

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
      phone: "9912570179",
      whatsappNumber: "919912570179",
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
    latitude: 17.11309723293222,
    longitude: 78.93280960793456,
    placeId: "ChIJ67pYBmMZyzsRm20IvVr25CI",
  },

  /** Optional Google Maps Embed API Key */
  googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",

  /** TBD — add business hours once confirmed by owner */
  businessHours: "[TBD]",
} as const;
