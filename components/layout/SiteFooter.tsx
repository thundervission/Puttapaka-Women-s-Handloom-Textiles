import Link from "next/link";
import { siteConfig } from "@/data/site";
import { createGeneralWhatsAppMessage, createWhatsAppUrl } from "@/lib/whatsapp";
import { getGoogleMapsUrl } from "@/lib/maps";

const shopLinks = [
  { href: "/shop", label: "All Sarees" },
  { href: "/collections/cotton-sarees", label: "Collections" },
];

const infoLinks = [
  { href: "/about", label: "About Us" },
  { href: "/story", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

const policyLinks = [
  { href: "/shipping", label: "Shipping" },
  { href: "/returns", label: "Returns & Exchange" },
  { href: "/privacy", label: "Privacy" },
];

/**
 * Site footer — renders on every page via root layout.
 * Three column groups on desktop: Shop, Company, Policies.
 * Single column on mobile.
 */
export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = createWhatsAppUrl({
    phoneNumber: siteConfig.whatsappNumber,
    message: createGeneralWhatsAppMessage(),
  });
  const mapsUrl = getGoogleMapsUrl();

  return (
    <footer className="bg-[var(--primary)] text-[var(--surface)] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-display-md mb-1">PUTTAPAKA</p>
            <p className="text-ui-sm text-[var(--surface)]/60 mb-4">
              WOMEN&apos;S HANDLOOM TEXTILES
            </p>
            <address className="not-italic text-body-sm text-[var(--surface)]/70 space-y-1">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--surface)] transition-colors"
              >
                {siteConfig.location.address}
              </a>
            </address>
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 text-body-sm text-[var(--surface)]/80 hover:text-[var(--surface)] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4 shrink-0"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            )}
          </div>

          {/* Shop links */}
          <div>
            <h3 className="text-ui-sm text-[var(--surface)]/50 mb-4">SHOP</h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-[var(--surface)]/80 hover:text-[var(--surface)] transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-ui-sm text-[var(--surface)]/50 mb-4">
              COMPANY
            </h3>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-[var(--surface)]/80 hover:text-[var(--surface)] transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policy links */}
          <div>
            <h3 className="text-ui-sm text-[var(--surface)]/50 mb-4">
              POLICIES
            </h3>
            <ul className="space-y-3">
              {policyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-[var(--surface)]/80 hover:text-[var(--surface)] transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--surface)]/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-body-sm text-[var(--surface)]/50">
            &copy; {currentYear} Puttapaka Women&apos;s Handloom Textiles.
            All rights reserved.
          </p>
          {siteConfig.instagramUrl !== "[TBD]" && (
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="text-body-sm text-[var(--surface)]/50 hover:text-[var(--surface)] transition-colors duration-150"
            >
              Instagram
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
