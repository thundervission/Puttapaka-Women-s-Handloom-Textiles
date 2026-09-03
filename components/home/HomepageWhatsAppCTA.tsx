import { siteConfig } from "@/data/site";
import { createGeneralWhatsAppMessage } from "@/lib/whatsapp";
import WhatsAppButton from "@/components/whatsapp/WhatsAppButton";

/**
 * HomepageWhatsAppCTA — Server Component.
 * Bottom banner CTA encouraging general WhatsApp inquiries directly with the seller.
 */
export default function HomepageWhatsAppCTA() {
  const message = createGeneralWhatsAppMessage();

  return (
    <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="p-8 sm:p-12 bg-[var(--surface)] border border-[var(--border)] rounded-[var(--radius-md)] text-center space-y-6 max-w-4xl mx-auto">
        <div className="space-y-2">
          <span className="text-ui-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
            Direct Seller Communication
          </span>
          <h2 className="text-display-lg sm:text-display-xl text-[var(--primary)] font-normal tracking-tight">
            Have Questions or Custom Weaving Requests?
          </h2>
          <p className="text-body-md sm:text-body-lg text-[var(--muted)] max-w-xl mx-auto leading-relaxed">
            Connect directly with us on WhatsApp to check stock, view more detailed saree photos, or inquire about custom pattern orders.
          </p>
        </div>

        <div className="flex justify-center pt-2">
          <WhatsAppButton
            phoneNumber={siteConfig.whatsappNumber}
            message={message}
            label="Chat with Seller on WhatsApp"
            variant="primary"
            className="!py-3.5 !px-8 text-body-md sm:text-body-lg"
          />
        </div>
      </div>
    </section>
  );
}
