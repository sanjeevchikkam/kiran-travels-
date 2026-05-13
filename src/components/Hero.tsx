import { useEffect, useState } from "react";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import hero1 from "@/assets/hero-1.jpeg";
import hero2 from "@/assets/hero-2.jpeg";
import hero3 from "@/assets/hero-3.jpeg";
import hero4 from "@/assets/hero-4.jpeg";
import hero5 from "@/assets/hero-5.jpeg";

const slides = [hero5, hero3, hero2, hero4, hero1];
const WA = "https://wa.me/919391378889?text=Hi%2C%20I%20want%20to%20rent%20a%20car";
const TEL = "tel:+919391378889";

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
      {slides.map((src, idx) => (
        <div
          key={idx}
          className="absolute inset-0 transition-opacity duration-[1500ms]"
          style={{ opacity: i === idx ? 1 : 0 }}
        >
          <img src={src} alt="" className={`w-full h-full object-cover ${i === idx ? "ken-burns" : ""}`} />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 min-h-[100svh] flex flex-col justify-center pt-24 pb-16">
        <div className="max-w-3xl reveal in-view">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-foreground/10 border border-gold/30 backdrop-blur-sm mb-6">
            <MapPin className="w-3.5 h-3.5 text-gold" />
            <span className="text-xs font-medium text-primary-foreground tracking-wide">Near Vadapalli (Merlapalam), East Godavari</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.05]">
            Your Ride, Your Way —{" "}
            <span className="text-gradient-gold italic">Across India</span>
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-primary-foreground/85 max-w-2xl">
            Self Drive <span className="text-gold">·</span> Driver Service{" "}
            <span className="text-gold">·</span> Cab Services{" "}
            <span className="text-gold">·</span> Events & Functions
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a href={WA} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-to-r from-gold to-gold/80 text-navy-deep font-semibold shadow-gold hover:scale-[1.02] transition-transform">
              <MessageCircle className="w-5 h-5" />
              Book on WhatsApp · 9391378889
            </a>
            <a href={TEL} className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-primary-foreground/10 backdrop-blur border border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/20 transition-colors">
              <Phone className="w-5 h-5" />
              Call Now: 9391378889
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-gold" : "w-2 bg-primary-foreground/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
