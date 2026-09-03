import Link from "next/link";
import MobileNavigation from "@/components/layout/MobileNavigation";
import WhatsAppButton from "@/components/whatsapp/WhatsAppButton";
import { siteConfig } from "@/data/site";
import { createGeneralWhatsAppMessage } from "@/lib/whatsapp";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/collections/cotton-sarees", label: "Collections" },
  { href: "/story", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

/**
 * Site header — renders on every page via root layout.
 * Desktop: logo + nav + WhatsApp CTA in a single row.
 * Mobile: logo + hamburger + WhatsApp icon (full nav in MobileNavigation drawer).
 */
export default function SiteHeader() {
  const whatsappMessage = createGeneralWhatsAppMessage();

  return (
    <header className="sticky top-0 z-30 bg-[var(--surface)] border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Mobile: hamburger on left */}
          <MobileNavigation />

          {/* Brand logo / name */}
          <Link
            href="/"
            className="flex flex-col leading-none"
            aria-label="Puttapaka Women's Handloom Textiles — home"
          >
            <span className="text-display-md text-[var(--primary)] tracking-tight">
              PUTTAPAKA
            </span>
            <span className="hidden sm:block text-ui-sm text-[var(--muted)] tracking-widest">
              WOMEN&apos;S HANDLOOM TEXTILES
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-[var(--foreground)] hover:text-[var(--primary)] transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* WhatsApp CTA */}
          <div className="flex items-center gap-3">
            {/* Desktop: text button */}
            <div className="hidden lg:block">
              <WhatsAppButton
                phoneNumber={siteConfig.whatsappNumber}
                message={whatsappMessage}
                label="WhatsApp"
                variant="outline"
                className="!py-2 !px-4 text-body-sm"
              />
            </div>
            {/* Mobile: icon only */}
            <div className="lg:hidden">
              <WhatsAppButton
                phoneNumber={siteConfig.whatsappNumber}
                message={whatsappMessage}
                variant="icon"
                ariaLabel="Chat on WhatsApp"
              />
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
