import { Phone, MessageCircle, MapPin, User } from "lucide-react";

const WA = "https://wa.me/919391378889?text=Hi%2C%20I%20want%20to%20rent%20a%20car";
const TEL = "tel:+919391378889";
const MAP = "https://maps.app.goo.gl/8Q6kjBYyrf5r3mTV7";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-[0.2em] text-gold uppercase mb-3">Get In Touch</p>
          <h2 className="text-4xl lg:text-6xl font-bold text-navy">Ready to Hit the Road?</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Contact us now for the best car rental experience in East Godavari.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <a href={WA} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-whatsapp text-white font-semibold hover:scale-[1.02] transition-transform">
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </a>
            <a href={TEL} className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-navy text-primary-foreground font-semibold hover:bg-navy-deep transition-colors">
              <Phone className="w-5 h-5" /> Call Now
            </a>
            <a href={MAP} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-gold to-gold/80 text-navy-deep font-semibold shadow-gold hover:scale-[1.02] transition-transform">
              <MapPin className="w-5 h-5" /> Get Directions
            </a>
          </div>
        </div>

        <div className="mt-16 grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-elegant border border-border bg-card aspect-video lg:aspect-auto">
            <iframe
              title="Kiran Travels Location"
              src="https://www.google.com/maps?q=Vadapalli+Merlapalam+East+Godavari&output=embed"
              className="w-full h-full min-h-[320px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="lg:col-span-2 rounded-2xl bg-navy-deep text-primary-foreground p-8 shadow-elegant flex flex-col justify-between">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-gold uppercase">Owner</p>
              <h3 className="mt-3 text-3xl font-bold">Kiran</h3>
              <p className="mt-2 text-primary-foreground/70">Founder · Kiran Travels</p>
            </div>
            <div className="mt-8 space-y-4">
              <a href={TEL} className="flex items-center gap-3 group">
                <span className="grid place-items-center w-10 h-10 rounded-full bg-gold/15 text-gold group-hover:bg-gold group-hover:text-navy-deep transition-colors">
                  <Phone className="w-4 h-4" />
                </span>
                <span className="font-semibold">+91 93913 78889</span>
              </a>
              <a href={MAP} target="_blank" rel="noopener" className="flex items-start gap-3 group">
                <span className="grid place-items-center w-10 h-10 rounded-full bg-gold/15 text-gold group-hover:bg-gold group-hover:text-navy-deep transition-colors shrink-0">
                  <MapPin className="w-4 h-4" />
                </span>
                <span className="font-medium leading-snug">Vadapalli (Merlapalam),<br />East Godavari, AP</span>
              </a>
              <div className="flex items-center gap-3">
                <span className="grid place-items-center w-10 h-10 rounded-full bg-gold/15 text-gold">
                  <User className="w-4 h-4" />
                </span>
                <span className="font-medium">Trusted local operator</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
