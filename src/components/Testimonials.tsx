import { Star } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const testimonials = [
  { quote: "DravTech built our platform in record time. Clean code, clean design.", name: "James M.", company: "Startup Founder" },
  { quote: "The team understood our vision from day one. Highly recommend.", name: "Faith K.", company: "NGO Director" },
  { quote: "Professional, fast, and genuinely talented engineers.", name: "Brian O.", company: "Product Manager" },
];

export default function Testimonials() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} className="section-padding scroll-reveal">
      <div className="container-max">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12 section-heading">What People Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card p-6 hover-lift">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-primary text-primary" />)}
              </div>
              <p className="text-muted-foreground text-sm italic mb-4">"{t.quote}"</p>
              <p className="text-foreground font-semibold text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
