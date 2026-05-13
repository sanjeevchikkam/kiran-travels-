import { Car, UserCheck, PartyPopper } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const services = [
  { icon: Car, title: "Self Drive", desc: "Take the wheel yourself. Flexible hours, affordable rates." },
  { icon: UserCheck, title: "Travel with Driver", desc: "Relax while our experienced driver takes you to your destination safely." },
  { icon: PartyPopper, title: "Events & Functions", desc: "Weddings, family functions, corporate events — we've got your ride covered." },
];

export function ServicesSection() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-[0.2em] text-gold uppercase mb-3">Services</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy">What We Offer</h2>
        </div>
        <div ref={ref} className="reveal grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="relative p-8 rounded-2xl bg-card border border-border hover:border-gold/40 hover:shadow-elegant transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gold/5 group-hover:bg-gold/10 transition-colors" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy to-navy-deep grid place-items-center shadow-elegant">
                  <s.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-navy">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
