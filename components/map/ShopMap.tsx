import { siteConfig } from "@/data/site";
import { getGoogleMapsUrl, getGoogleDirectionsUrl } from "@/lib/maps";

interface ShopMapProps {
  apiKey?: string;
}

export default function ShopMap({ apiKey = siteConfig.googleMapsApiKey }: ShopMapProps) {
  const mapsUrl = getGoogleMapsUrl();
  const directionsUrl = getGoogleDirectionsUrl();

  if (!apiKey) {
    return (
      <div className="p-6 border border-[var(--border)] bg-[var(--background)] rounded-[var(--radius-md)] space-y-4">
        <div className="space-y-1">
          <p className="text-ui-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
            Shop location
          </p>
          <p className="text-body-md font-semibold text-[var(--primary)]">
            {siteConfig.location.name}
          </p>
          <p className="text-body-sm text-[var(--muted)]">
            {siteConfig.location.address}
          </p>
        </div>
        <div>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-2.5 text-body-sm font-medium text-[var(--surface)] hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-[var(--primary)] focus-visible:outline-offset-2"
          >
            View this location on Google Maps
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full space-y-4">
      <div className="w-full h-72 sm:h-96 rounded-[var(--radius-md)] overflow-hidden border border-[var(--border)] bg-[var(--surface)] relative">
        <iframe
          title="Puttapaka Women's Handloom Textiles Location"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(apiKey)}&q=place_id:${siteConfig.location.placeId}`}
          className="w-full h-full"
        />
      </div>
      <div>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-2.5 text-body-sm font-medium text-[var(--surface)] hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-[var(--primary)] focus-visible:outline-offset-2"
        >
          Get Directions
        </a>
      </div>
    </div>
  );
}
