"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/collections/cotton-sarees", label: "Collections" },
  { href: "/story", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

/**
 * Mobile navigation drawer.
 * - Owns isOpen state
 * - Traps focus while open
 * - Closes on Escape key and overlay click
 */
export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);
  const previousPathnameRef = useRef(pathname);

  const closeMenu = () => setIsOpen(false);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeMenu();
        return;
      }

      if (e.key !== "Tab" || !drawerRef.current) return;
      const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Close the drawer only when the route actually changes.
  // Do not close when isOpen changes, otherwise the menu would immediately close
  // after the user opens it.
  useEffect(() => {
    const previousPathname = previousPathnameRef.current;
    previousPathnameRef.current = pathname;

    if (!isOpen || previousPathname === pathname) return;

    const timeoutId = window.setTimeout(() => setIsOpen(false), 0);

    return () => window.clearTimeout(timeoutId);
  }, [pathname, isOpen]);

  // Ensure the drawer closes when the viewport switches to desktop layout.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Move focus into the drawer and restore it to the trigger only after closing.
  // Avoid stealing focus from the page when this component first hydrates.
  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
    } else if (wasOpenRef.current) {
      triggerRef.current?.focus();
    }
    wasOpenRef.current = isOpen;
  }, [isOpen]);

  return (
    <>
      {/* Hamburger trigger */}
      <button
        ref={triggerRef}
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-drawer"
        onClick={() => setIsOpen((v) => !v)}
        className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 text-[var(--foreground)]"
      >
        <span
          className={`block w-5 h-0.5 bg-current transition-transform duration-200 ${isOpen ? "translate-y-2 rotate-45" : ""}`}
        />
        <span
          className={`block w-5 h-0.5 bg-current transition-opacity duration-200 ${isOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-5 h-0.5 bg-current transition-transform duration-200 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
        />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-40 bg-[var(--foreground)]/40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        id="mobile-nav-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`fixed top-0 left-0 z-50 h-full w-72 max-w-[85vw] bg-[var(--surface)] shadow-xl flex flex-col transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--border)]">
          <span className="text-display-md text-[var(--primary)]">
            Puttapaka
          </span>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
            className="w-8 h-8 flex items-center justify-center text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="w-5 h-5"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav aria-label="Mobile navigation" className="flex-1 px-6 py-6">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="block py-3 text-body-lg text-[var(--foreground)] hover:text-[var(--primary)] border-b border-[var(--border)] transition-colors duration-150"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer contact */}
        <div className="px-6 py-5 border-t border-[var(--border)]">
          <p className="text-body-sm text-[var(--muted)]">
            {siteConfig.location.address}
          </p>
        </div>
      </div>
    </>
  );
}
