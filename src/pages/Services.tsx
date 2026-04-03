import { Link } from 'react-router-dom';
import { services, siteInfo } from '@/lib/data';

export default function Services() {
  return (
    <div className="pt-16">
      <section className="section-padding bg-card">
        <div className="container-max text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">{siteInfo.tagline}</p>
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Services</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {siteInfo.programItems.join(' · ')}. {siteInfo.conversionLine}
          </p>
          <div className="mt-8 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4">
              <img
                src="/hero/hero1.jpeg"
                alt="Team collaboration"
                className="w-full h-48 object-cover rounded-lg border border-border shadow-lg"
                loading="lazy"
              />
              <img
                src="/marketing/dravtech-digital-marketing.png"
                alt="DravTech Digital Marketing Services - Expert Support Team, Affordable Pricing, Website Analytics"
                className="w-full h-48 object-cover rounded-lg border border-border shadow-lg"
                loading="lazy"
              />
              <img
                src="/hero/hero2.jpeg"
                alt="Team meeting"
                className="w-full h-48 object-cover rounded-lg border border-border shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => (
              <div key={service.slug} className="glass-card p-6 hover-lift flex flex-col">
                <span className="text-3xl mb-4">{service.icon}</span>
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
