import { Link } from 'react-router-dom';
import { services, siteInfo } from '@/lib/data';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import FloatingIcons from '@/components/FloatingIcons';

export default function Services() {
  const ref = useScrollReveal();
  return (
    <div className="pt-16">
      <section className="section-padding bg-card">
        <div className="container-max text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">{siteInfo.tagline}</p>
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Services</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {siteInfo.programItems.join(' · ')}. {siteInfo.conversionLine}
          </p>
        </div>
      </section>
      <section ref={ref} className="section-padding noise-overlay scroll-reveal relative">
        <FloatingIcons />
        <div className="container-max relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => (
              <div key={service.slug} className="glass-card p-6 hover-lift flex flex-col group">
                <div className="icon-glow w-14 h-14 flex items-center justify-center mb-4">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{service.shortDescription}</p>
                <Link to={`/services/${service.slug}`} className="text-primary text-sm font-medium hover:underline">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
