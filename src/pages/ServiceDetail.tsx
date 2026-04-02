import { useParams, Link } from 'react-router-dom';
import { getServiceBySlug, getRelatedServices } from '@/lib/data';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || '');
  const related = getRelatedServices(slug || '');

  if (!service) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Service not found</h1>
          <Link to="/services" className="text-primary hover:underline">← Back to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-padding bg-card">
        <div className="container-max text-center">
          <span className="text-5xl mb-4 block">{service.icon}</span>
          <h1 className="text-4xl font-bold text-foreground mb-4">{service.title}</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">{service.shortDescription}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-3xl">
          {service.description.map((p, i) => (
            <p key={i} className="text-muted-foreground mb-4">{p}</p>
          ))}

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">What's Included</h2>
          <ul className="space-y-3">
            {service.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-muted-foreground">{f}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Use Cases</h2>
          <div className="space-y-4">
            {service.useCases.map((uc, i) => (
              <div key={i} className="glass-card p-4">
                <p className="text-muted-foreground">{uc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="glass-card p-8 text-center mt-12">
            <h3 className="text-xl font-bold text-foreground mb-2">Ready to get started?</h3>
            <p className="text-muted-foreground mb-4">Let's discuss how we can help your organization.</p>
            <Link to="/demo" className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors">
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section-padding bg-card">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-foreground mb-8">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map(s => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="glass-card p-6 hover-lift">
                <span className="text-3xl mb-3 block">{s.icon}</span>
                <h3 className="text-lg font-semibold text-foreground mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.shortDescription}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
