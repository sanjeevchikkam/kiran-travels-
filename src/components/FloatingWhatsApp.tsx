import { MessageCircle } from "lucide-react";

const WA = "https://wa.me/919391378889?text=Hi%2C%20I%20want%20to%20rent%20a%20car";

export function FloatingWhatsApp() {
  return (
    <a
      href={WA}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid place-items-center w-14 h-14 rounded-full bg-whatsapp text-white shadow-elegant hover:scale-110 transition-transform"
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-30" />
      <MessageCircle className="w-6 h-6 relative" />
    </a>
  );
}
