import { Phone, MessageCircle, MapPin, Car, Menu, X } from "lucide-react";
import { useState } from "react";

const WA = "https://wa.me/919391378889?text=Hi%2C%20I%20want%20to%20rent%20a%20car";
const TEL = "tel:+919391378889";
const MAP = "https://maps.app.goo.gl/8Q6kjBYyrf5r3mTV7";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#cars", label: "Cars" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-navy-deep/85 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-2 text-primary-foreground">
            <span className="grid place-items-center w-9 h-9 rounded-full bg-gradient-to-br from-gold to-gold/70 text-navy-deep">
              <Car className="w-5 h-5" strokeWidth={2.5} />
            </span>
            <span className="font-display text-xl lg:text-2xl font-bold tracking-tight">
              Kiran <span className="text-gradient-gold">Travels</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-primary-foreground/80 hover:text-gold transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={TEL} aria-label="Call now" className="grid place-items-center w-10 h-10 rounded-full bg-gold text-navy-deep hover:scale-110 transition-transform shadow-gold">
              <Phone className="w-4 h-4" />
            </a>
            <a href={WA} target="_blank" rel="noopener" aria-label="WhatsApp" className="grid place-items-center w-10 h-10 rounded-full bg-whatsapp text-white hover:scale-110 transition-transform">
              <MessageCircle className="w-4 h-4" />
            </a>
            <a href={MAP} target="_blank" rel="noopener" aria-label="Location" className="grid place-items-center w-10 h-10 rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 hover:scale-110 transition-all">
              <MapPin className="w-4 h-4" />
            </a>
            <button onClick={() => setOpen(!open)} className="lg:hidden ml-1 text-primary-foreground p-2" aria-label="Menu">
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="lg:hidden pb-4 flex flex-col gap-2 border-t border-gold/10 pt-3">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-primary-foreground/85 hover:text-gold py-1.5 text-sm font-medium">
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
