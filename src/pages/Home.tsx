import { Link } from 'react-router-dom';
import { ArrowDown, MapPin, Calendar, Send, Headphones, BadgePercent, LineChart, Users, CheckCircle, Clock } from 'lucide-react';
import { services, projects, products, team, siteInfo, campaignSpotlights } from '@/lib/data';
import TeamMemberAvatar from '@/components/TeamMemberAvatar';
import ParticleBackground from '@/components/ParticleBackground';
import SectionDivider from '@/components/SectionDivider';
import FloatingIcons from '@/components/FloatingIcons';
import TechMarquee from '@/components/TechMarquee';
import Testimonials from '@/components/Testimonials';
import { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';

const pillarIcons = [Headphones, BadgePercent, LineChart] as const;

export default function Home() {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactSent, setContactSent] = useState(false);

  const aboutRef = useScrollReveal();
  const servicesRef = useScrollReveal();
  const projectsRef = useScrollReveal();
  const productsRef = useScrollReveal();
  const teamRef = useScrollReveal();
  const contactRef = useScrollReveal();

  const stat1 = useCountUp(6);
  const stat2 = useCountUp(10);
  const stat3 = useCountUp(3);
  const stat4 = useCountUp(100);

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSent(true);
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="page-fade-in">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden scanline-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-accent/40 animate-gradient" />
        <ParticleBackground />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,_hsl(18_89%_52%_/_0.12)_0%,_transparent_50%),radial-gradient(ellipse_at_20%_80%,_hsl(191_48%_42%_/_0.1)_0%,_transparent_45%)]" />
        
        <HeroCarousel />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 animate-fade-in-up">
            {siteInfo.tagline}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up" style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}>
            Websites &amp; Digital Marketing{' '}
            <span className="text-gradient">That Convert</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto animate-fade-in-up animate-fade-in-up-delay-1">
            {siteInfo.heroBlurb}
          </p>
          <p className="text-lg text-primary/90 font-medium italic mb-10 animate-fade-in-up animate-fade-in-up-delay-1">
            {siteInfo.conversionLine}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-fade-in-up-delay-2">
            <Link to="/projects" className="btn-shimmer bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
              Explore Our Work
            </Link>
            <Link to="/marketplace" className="btn-shimmer border border-primary text-primary px-8 py-3 rounded-md font-medium hover:bg-primary/10 transition-colors">
              Visit Marketplace
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>

      <SectionDivider />

      {/* About Snippet */}
      <section ref={aboutRef} className="section-padding bg-card noise-overlay scroll-reveal">
        <div className="container-max relative z-10">
          <FloatingIcons />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4 section-heading">Who We Are</h2>
              <p className="text-muted-foreground mb-4">
                {siteInfo.legalName} is an IT services company based in {siteInfo.primaryLocation}, with a presence in{' '}
                {siteInfo.locations[1]}. Founded in {siteInfo.foundedYear}, we specialise in {siteInfo.industry}
              </p>
              <p className="text-muted-foreground mb-6">{siteInfo.growthBlurb}</p>
              <Link to="/about" className="text-primary font-medium hover:underline">Learn More →</Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div ref={stat1.ref} className="glass-card p-6 text-center hover-lift">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-3xl font-bold text-foreground">{stat1.value}</p>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </div>
              <div ref={stat2.ref} className="glass-card p-6 text-center hover-lift">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-3xl font-bold text-foreground">{stat2.value}+</p>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </div>
              <div ref={stat3.ref} className="glass-card p-6 text-center hover-lift">
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-3xl font-bold text-foreground">{stat3.value}</p>
                <p className="text-sm text-muted-foreground">Years Building</p>
              </div>
              <div ref={stat4.ref} className="glass-card p-6 text-center hover-lift">
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-3xl font-bold text-foreground">{stat4.value}%</p>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </div>
          <p className="text-lg font-semibold text-primary mt-8 text-center">
            &ldquo;{siteInfo.tagline}.&rdquo;
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Services Preview */}
      <section ref={servicesRef} className="section-padding noise-overlay scroll-reveal relative">
        <FloatingIcons />
        <div className="container-max relative z-10">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12 section-heading mx-auto">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.slice(0, 3).map(service => (
              <div key={service.slug} className="glass-card p-6 hover-lift group">
                <div className="icon-glow w-14 h-14 flex items-center justify-center mb-4">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.shortDescription}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="btn-shimmer border border-primary text-primary px-6 py-2 rounded-md text-sm font-medium hover:bg-primary/10 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Program & pillars from collateral */}
      <section className="section-padding bg-card noise-overlay">
        <div className="container-max relative z-10 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 section-heading">Our program</h2>
            <p className="text-muted-foreground text-sm mb-6">
              Core capabilities we bring to every engagement — from first concept to launch and beyond.
            </p>
            <ul className="space-y-3">
              {siteInfo.programItems.map(item => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 section-heading">Why teams choose us</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {siteInfo.marketingPillars.map((label, i) => {
                const Icon = pillarIcons[i] ?? Headphones;
                return (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 text-sm bg-secondary text-secondary-foreground px-3 py-2 rounded-full"
                  >
                    <Icon className="w-4 h-4 text-primary" />
                    {label}
                  </span>
                );
              })}
            </div>
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">Benefits</h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {siteInfo.clientBenefits.map(b => (
                <li key={b} className="glass-card p-4 text-sm text-muted-foreground">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Projects Preview */}
      <section ref={projectsRef} className="section-padding bg-card noise-overlay scroll-reveal relative">
        <FloatingIcons />
        <div className="container-max relative z-10">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12 section-heading mx-auto">Our Work</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.slice(0, 3).map(project => (
              <Link key={project.slug} to={`/projects/${project.slug}`} className="glass-card overflow-hidden hover-lift group">
                <div className="project-card-img relative h-48">
                  <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-primary text-sm font-medium">View Project →</span>
                  </div>
                </div>
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
            <Link to="/projects" className="btn-shimmer border border-primary text-primary px-6 py-2 rounded-md text-sm font-medium hover:bg-primary/10 transition-colors">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Live campaigns & partnerships */}
      <section className="section-padding border-y border-border bg-card/50 noise-overlay">
        <div className="container-max relative z-10">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4 section-heading mx-auto">Campaigns &amp; live launches</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-sm">
            Product updates and on-air partnerships — quality with expertise, in the open.
          </p>
          <div className="grid md:grid-cols-2 gap-10">
            {campaignSpotlights.map(spot => (
              <article key={spot.slug} className="glass-card overflow-hidden hover-lift flex flex-col">
                <img src={spot.image} alt={spot.imageAlt} className="w-full object-cover max-h-72 sm:max-h-80" loading="lazy" />
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{spot.headline}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{spot.body}</p>
                  {spot.primaryCta ? (
                    <a
                      href={spot.primaryCta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-shimmer inline-flex w-fit items-center bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      {spot.primaryCta.label}
                    </a>
                  ) : null}
                  {spot.meta ? <p className="text-xs text-primary mt-4 font-medium">{spot.meta}</p> : null}
                  {spot.partner ? <p className="text-xs text-muted-foreground mt-1">{spot.partner}</p> : null}
                  {spot.secondaryNote ? <p className="text-xs text-muted-foreground mt-4">{spot.secondaryNote}</p> : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Tech Stack Marquee */}
      <TechMarquee />

      <SectionDivider />

      {/* Products Preview */}
      <section ref={productsRef} className="section-padding noise-overlay scroll-reveal">
        <div className="container-max relative z-10">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12 section-heading mx-auto">From Our Marketplace</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {products.slice(0, 3).map(product => (
              <Link key={product.slug} to={`/marketplace/${product.slug}`} className="glass-card overflow-hidden hover-lift marketplace-card">
                <div className="relative">
                  <img src={product.images[0]} alt={product.name} className="w-full h-44 object-cover" loading="lazy" />
                  <span className="absolute top-3 right-3 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded">{product.category}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-[10px] font-bold text-primary">{product.creator[0]}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{product.creator}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{product.name}</h3>
                  <p className="text-primary font-bold">
                    {product.priceType === 'subscription' ? (
                      <span className="flex items-center gap-1">⚡ From KES {product.price}/mo</span>
                    ) : (
                      `KES ${product.price.toLocaleString()}`
                    )}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/marketplace" className="btn-shimmer bg-primary text-primary-foreground px-6 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Testimonials */}
      <Testimonials />

      <SectionDivider />

      {/* Brand collateral */}
      <section className="section-padding bg-card noise-overlay">
        <div className="container-max relative z-10">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4 section-heading mx-auto">From our brand studio</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 text-sm">
            Creative direction across digital marketing, business growth, and custom website storytelling.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <img
              src="/marketing/flyer-digital-marketing.png"
              alt="DravTech digital marketing flyer: expert support, affordable pricing, and website analytics"
              className="w-full rounded-lg border border-border object-cover shadow-md"
              loading="lazy"
            />
            <img
              src="/marketing/flyer-business-growth.png"
              alt="DravTech business growth flyer: mobile-first design, credibility, efficiency, and security"
              className="w-full rounded-lg border border-border object-cover shadow-md"
              loading="lazy"
            />
            <img
              src="/marketing/flyer-custom-websites.png"
              alt="DravTech custom website design and development program overview"
              className="w-full rounded-lg border border-border object-cover shadow-md"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Team */}
      <section ref={teamRef} className="section-padding bg-card noise-overlay scroll-reveal">
        <div className="container-max relative z-10">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12 section-heading mx-auto">Meet the Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {team.map(member => (
              <div key={member.name} className="text-center hover-lift poster-glow rounded-xl p-4 bg-card border border-border">
                <TeamMemberAvatar member={member} size="md" className="mx-auto mb-3 ring-2 ring-primary/10" />
                <h4 className="text-sm font-semibold text-foreground leading-snug">{member.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
                <p className="text-xs text-primary font-medium mt-0.5">{member.sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Contact */}
      <section ref={contactRef} className="section-padding noise-overlay scroll-reveal">
        <div className="container-max relative z-10">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12 section-heading mx-auto">Let's Work Together</h2>
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
                  <button type="submit" className="btn-shimmer w-full bg-primary text-primary-foreground py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
                    Send Message
                  </button>
                </>
              )}
            </form>
            <div className="space-y-6">
              <div>
                <h4 className="text-foreground font-semibold mb-1">Phone</h4>
                <a href={siteInfo.phoneHref} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  {siteInfo.phoneDisplay} <span className="text-xs">({siteInfo.phoneLocal})</span>
                </a>
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-1">WhatsApp</h4>
                <a
                  href={siteInfo.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {siteInfo.whatsappDisplay} <span className="text-xs">({siteInfo.whatsappLocal})</span>
                </a>
                <p className="text-xs text-muted-foreground mt-1">
                  Also reachable on WhatsApp: {siteInfo.whatsappAltLocal}
                </p>
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-1">Email</h4>
                <a href={`mailto:${siteInfo.email}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  {siteInfo.email}
                </a>
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-1">Campus timetabling portal</h4>
                <p className="text-xs text-muted-foreground mb-1">{siteInfo.campusTimetablingCta}</p>
                <a
                  href={siteInfo.campusTimetablingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors break-all"
                >
                  {siteInfo.campusTimetablingUrl.replace(/^https?:\/\//, '')}
                </a>
                <div className="flex flex-wrap gap-3 mt-2 text-xs">
                  <a href={siteInfo.phoneTimetablingHref} className="text-muted-foreground hover:text-primary">
                    {siteInfo.phoneTimetablingDisplay}
                  </a>
                  <a href={siteInfo.phoneTimetablingWhatsappHref} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    WhatsApp {siteInfo.phoneTimetablingLocal}
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-1">Web</h4>
                <a
                  href={siteInfo.publicWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors break-all"
                >
                  {siteInfo.publicWebsite.replace(/^https?:\/\//, '')}
                </a>
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-1">Locations</h4>
                <ul className="text-muted-foreground text-sm space-y-1">
                  {siteInfo.locations.map(loc => (
                    <li key={loc}>{loc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function HeroCarousel() {
  const slides = [
    { type: 'image' as const, src: '/hero/team-meeting-1.png', alt: 'Team collaboration' },
    { type: 'image' as const, src: '/hero/team-meeting-2.png', alt: 'Team meeting' },
    { type: 'video' as const, src: '/videos/video.mp4', alt: 'Intro video' },
    { type: 'image' as const, src: '/hero/team-meeting-3.png', alt: 'Team discussion' },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100 z-[6]' : 'opacity-0 z-0 pointer-events-none'}`}
        >
          {s.type === 'image' ? (
            <div className="absolute top-10 left-10 w-96 h-64 opacity-25">
              <img src={s.src} alt={s.alt} className="w-full h-full object-cover rounded-lg shadow-lg" />
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <video className="w-[min(80%,1200px)] rounded-lg shadow-lg" src={s.src} controls preload="metadata" />
            </div>
          )}
        </div>
      ))}

      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20">
        <button
          aria-label="Previous"
          onClick={() => setIndex(i => (i - 1 + slides.length) % slides.length)}
          className="bg-background/80 text-foreground p-2 rounded-md shadow-sm"
        >
          ‹
        </button>
        <button
          aria-label="Next"
          onClick={() => setIndex(i => (i + 1) % slides.length)}
          className="bg-background/80 text-foreground p-2 rounded-md shadow-sm"
        >
          ›
        </button>
      </div>
    </div>
  );
}
