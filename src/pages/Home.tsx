import { Link } from 'react-router-dom';
import { ArrowDown, Users, Briefcase, Send } from 'lucide-react';
import { services, projects, products, team } from '@/lib/data';
import { useState } from 'react';

export default function Home() {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactSent, setContactSent] = useState(false);

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSent(true);
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background animate-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(43_50%_54%_/_0.08)_0%,_transparent_70%)]" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up">
            We Build Digital Products{' '}
            <span className="text-gradient">That Matter</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10 animate-fade-in-up animate-fade-in-up-delay-1">
            Software. Design. Strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-fade-in-up-delay-2">
            <Link to="/projects" className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
              Explore Our Work
            </Link>
            <Link to="/marketplace" className="border border-primary text-primary px-8 py-3 rounded-md font-medium hover:bg-primary/10 transition-colors">
              Visit Marketplace
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>

      {/* About Snippet */}
      <section className="section-padding bg-card">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Who We Are</h2>
              <p className="text-muted-foreground mb-4">
                DravTech is a Nairobi-based technology company building impactful digital solutions for organizations across Africa. We combine technical excellence with creative design to deliver products that drive real results.
              </p>
              <p className="text-muted-foreground mb-6">
                From web platforms to mobile apps, brand identity to cloud infrastructure — we handle the full spectrum of digital product development.
              </p>
              <Link to="/about" className="text-primary font-medium hover:underline">Learn More →</Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 text-center hover-lift">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-3xl font-bold text-foreground">6</p>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </div>
              <div className="glass-card p-6 text-center hover-lift">
                <Briefcase className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-3xl font-bold text-foreground">10+</p>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </div>
            </div>
          </div>
          <p className="text-lg font-semibold text-primary mt-8 text-center">
            "Empowering organizations with technology that scales."
          </p>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.slice(0, 3).map(service => (
              <div key={service.slug} className="glass-card p-6 hover-lift">
                <span className="text-3xl mb-4 block">{service.icon}</span>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.shortDescription}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="border border-primary text-primary px-6 py-2 rounded-md text-sm font-medium hover:bg-primary/10 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="section-padding bg-card">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Work</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.slice(0, 3).map(project => (
              <Link key={project.slug} to={`/projects/${project.slug}`} className="glass-card overflow-hidden hover-lift group">
                <img src={project.thumbnail} alt={project.title} className="w-full h-48 object-cover" loading="lazy" />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{project.tagline}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map(t => (
                      <span key={t} className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded">{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/projects" className="border border-primary text-primary px-6 py-2 rounded-md text-sm font-medium hover:bg-primary/10 transition-colors">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">From Our Marketplace</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {products.slice(0, 3).map(product => (
              <Link key={product.slug} to={`/marketplace/${product.slug}`} className="glass-card p-5 hover-lift">
                <img src={product.images[0]} alt={product.name} className="w-full h-40 object-cover rounded mb-4" loading="lazy" />
                <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded">{product.category}</span>
                <h3 className="text-lg font-semibold text-foreground mt-2 mb-1">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">by {product.creator}</p>
                <p className="text-primary font-semibold">
                  {product.priceType === 'subscription' ? `From KES ${product.price}/mo` : `KES ${product.price.toLocaleString()}`}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/marketplace" className="bg-primary text-primary-foreground px-6 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-card">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Meet the Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {team.map(member => (
              <div key={member.name} className="text-center hover-lift">
                <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold">{member.initials}</span>
                </div>
                <h4 className="text-sm font-semibold text-foreground">{member.name}</h4>
                <p className="text-xs text-muted-foreground">{member.role}</p>
                <p className="text-xs text-primary">{member.sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Let's Work Together</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <form onSubmit={handleContact} className="space-y-4">
              {contactSent ? (
                <div className="glass-card p-6 text-center">
                  <Send className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-foreground font-semibold">Message sent!</p>
                  <p className="text-sm text-muted-foreground">We'll get back to you soon.</p>
                </div>
              ) : (
                <>
                  <input
                    type="text" placeholder="Your Name" required
                    value={contactForm.name} onChange={e => setContactForm(p => ({ ...p, name: e.target.value }))}
                    className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <input
                    type="email" placeholder="Your Email" required
                    value={contactForm.email} onChange={e => setContactForm(p => ({ ...p, email: e.target.value }))}
                    className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <textarea
                    placeholder="Your Message" required rows={4}
                    value={contactForm.message} onChange={e => setContactForm(p => ({ ...p, message: e.target.value }))}
                    className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  />
                  <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
                    Send Message
                  </button>
                </>
              )}
            </form>
            <div className="space-y-6">
              <div>
                <h4 className="text-foreground font-semibold mb-1">Email</h4>
                <p className="text-muted-foreground text-sm">hello@dravtech.com</p>
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-1">Phone</h4>
                <p className="text-muted-foreground text-sm">+254 700 123 456</p>
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-1">Location</h4>
                <p className="text-muted-foreground text-sm">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
