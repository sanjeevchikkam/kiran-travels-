import { MessageCircle } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import car1 from "@/assets/car-1.jpeg";
import car2 from "@/assets/car-2.jpeg";
import car3 from "@/assets/car-3.jpeg";
import car4 from "@/assets/car-4.jpeg";
import car5 from "@/assets/car-5.jpeg";
import car6 from "@/assets/car-6.jpeg";

const cars = [
  { name: "Hyundai i20", tag: "2800 rs", image: car1, },
  { name: "Maruti Ertiga", tag: "3000 rs", image: car2 },
  { name: "Toyota Innova Crysta", tag: "4500 rs", image: car3 },
  { name: "Maruti Ertiga (White)", tag: "3000 rs", image: car4 },
  { name: "Maruti Swift", tag: "2500 rs", image: car5 },
  { name: "Fronz", tag: "2800 rs", image: car6}
];

const wa = (name: string) =>
  `https://wa.me/919391378889?text=${encodeURIComponent(`Hi, I want to book ${name}, Let me know the Avilability`)}`;

export function CarsSection() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="cars" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-[0.2em] text-gold uppercase mb-3">Premium Fleet</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy">Our Fleet</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Five well-maintained vehicles ready for self-drive, driver service, or special events.
            Prices for 24 hrs
          </p>
        </div>

        <div ref={ref} className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <article
              key={car.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-elegant border border-border/50 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={car.image}
                  alt={`${car.name} — Kiran Travels rental car`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy">{car.name}</h3>
                <p className="text-sm text-gold font-semibold mt-1">{car.tag}</p>
                <p className="text-sm text-muted-foreground mt-3">
                  Comfortable, clean, and ready for your next journey across East Godavari and beyond.
                </p>
                <a
                  href={wa(car.name)}
                  target="_blank"
                  rel="noopener"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 px-5 py-3 rounded-full bg-navy text-primary-foreground font-semibold hover:bg-navy-deep transition-colors group-hover:bg-gradient-to-r group-hover:from-gold group-hover:to-gold/80 group-hover:text-navy-deep"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book This Car
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
