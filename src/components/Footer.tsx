import { Car, Phone, MessageCircle, MapPin } from "lucide-react";

const WA = "https://wa.me/919391378889?text=Hi%2C%20I%20want%20to%20rent%20a%20car";
const MAP = "https://maps.app.goo.gl/8Q6kjBYyrf5r3mTV7";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-primary-foreground pt-16 pb-8 border-t border-gold/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid place-items-center w-9 h-9 rounded-full bg-gradient-to-br from-gold to-gold/70 text-navy-deep">
                <Car className="w-5 h-5" strokeWidth={2.5} />
              </span>
              <span className="font-display text-2xl font-bold">
                Kiran <span className="text-gradient-gold">Travels</span>
              </span>
            </div>
            <p className="mt-4 text-primary-foreground/70 italic">
              Your trusted travel partner in East Godavari.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-[0.2em] text-gold uppercase mb-4">Contact</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="tel:+919391378889" className="flex items-center gap-2 hover:text-gold"><Phone className="w-4 h-4" /> +91 93913 78889</a></li>
              <li><a href={WA} target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-gold"><MessageCircle className="w-4 h-4" /> WhatsApp Chat</a></li>
              <li><a href={MAP} target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-gold"><MapPin className="w-4 h-4" /> View on Google Maps</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-[0.2em] text-gold uppercase mb-4">Visit Us</h4>
            <p className="text-primary-foreground/80 leading-relaxed">
              Near Vadapalli (Merlapalam),<br />East Godavari, Andhra Pradesh
            </p>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/60">
          © 2025 Kiran Travels. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
