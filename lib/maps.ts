import { siteConfig } from "@/data/site";

/**
 * Returns the canonical Google Maps URL for searching/viewing the shop location.
 * Uses the verified Place ID and coordinates from siteConfig.
 */
export function getGoogleMapsUrl(): string {
  return siteConfig.location.mapsUrl;
}

/**
 * Returns the Google Maps directions URL for navigating to the shop location.
 */
export function getGoogleDirectionsUrl(): string {
  return siteConfig.location.mapsUrl;
}
