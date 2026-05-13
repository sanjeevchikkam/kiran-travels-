import { useEffect, useRef, useState } from "react";
import { Car, Route, Calendar, Smile } from "lucide-react";

const stats = [
  { icon: Car, value: 6, suffix: "", label: "Cars Available" },
  { icon: Route, value: 800, suffix: "+", label: "Total Trips" },
  { icon: Calendar, value: 7, suffix: "+", label: "Years Experience" },
  { icon: Smile, value: 500, suffix: "+", label: "Happy Customers" },
];

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const dur = 1600;
          const step = (t: number) => {
            const p = Math.min((t - start) / dur, 1);
            setV(Math.floor(p * end));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      });
    });
    io.observe(el);
    return () => io.disconnect();
  }, [end]);
  return <span ref={ref}>{v}{suffix}</span>;
}

export function StatsSection() {
  return (
    <section id="about" className="relative py-20 bg-navy-deep overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.78 0.13 85 / 0.4), transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.4 0.12 260 / 0.5), transparent 50%)" }} />
      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-[0.2em] text-gold uppercase mb-3">Why Choose Us</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground">Trusted by Hundreds of Travelers</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-6 rounded-2xl bg-primary-foreground/5 border border-gold/15 backdrop-blur-sm">
              <s.icon className="w-8 h-8 text-gold mx-auto" />
              <div className="mt-4 text-4xl lg:text-5xl font-bold text-gradient-gold font-display">
                <Counter end={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm font-medium text-primary-foreground/80">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
