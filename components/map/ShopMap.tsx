import { siteConfig } from "@/data/site";
import { getGoogleMapsUrl, getGoogleDirectionsUrl } from "@/lib/maps";

export default function ShopMap() {
  const mapsUrl = getGoogleMapsUrl();
  const directionsUrl = getGoogleDirectionsUrl();

  return (
    <div className="w-full space-y-4">
      <div className="w-full h-72 sm:h-96 rounded-[var(--radius-md)] overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
        <iframe
          title="Puttapaka Women's Handloom Textiles Location"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          src={siteConfig.location.embedUrl}
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-wrap gap-3">
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-2.5 text-body-sm font-medium text-[var(--surface)] hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-[var(--primary)] focus-visible:outline-offset-2"
        >
          Get Directions
        </a>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-[var(--radius-md)] border border-[var(--primary)] px-5 py-2.5 text-body-sm font-medium text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--surface)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--primary)] focus-visible:outline-offset-2"
        >
          View on Google Maps
        </a>
      </div>
    </div>
  );
}
