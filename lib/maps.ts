import { siteConfig } from "@/data/site";

/**
 * Returns the canonical Google Maps URL for searching/viewing the shop location.
 * Uses the verified Place ID and coordinates from siteConfig.
 */
export function getGoogleMapsUrl(): string {
  const { placeId, latitude, longitude } = siteConfig.location;
  return `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}&query_place_id=${placeId}`;
}

/**
 * Returns the Google Maps directions URL for navigating to the shop location.
 */
export function getGoogleDirectionsUrl(): string {
  const { placeId, latitude, longitude } = siteConfig.location;
  return `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}&destination_place_id=${placeId}`;
}
