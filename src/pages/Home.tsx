import { Link } from 'react-router-dom';
import { ArrowDown, MapPin, Calendar, Send, Headphones, BadgePercent, LineChart, ChevronLeft, ChevronRight, Globe, Code, Palette, MessageSquare, BarChart3, Cloud, Phone, Mail, ExternalLink, Linkedin, Twitter, Github, X as XIcon, Maximize2 } from 'lucide-react';
import { services, projects, products, team, siteInfo, campaignSpotlights } from '@/lib/data';
import TeamMemberAvatar from '@/components/TeamMemberAvatar';
import { useState, useEffect } from 'react';
import type { TeamMember } from '@/lib/data';

const pillarIcons = [Headphones, BadgePercent, LineChart] as const;

const serviceIcons = [Globe, Code, Palette, MessageSquare, BarChart3, Cloud];

const heroMedia = [
  {
    type: 'video',
    src: '/hero/hero-background.mp4',
    title: 'Digital Excellence',
    subtitle: 'Transforming ideas into powerful digital experiences'
  },
  {
    type: 'image',
    src: '/hero/hero1.jpeg',
    title: 'Innovative Solutions',
    subtitle: 'Custom websites and marketing that drive results'
  },
  {
    type: 'image',
    src: '/hero/hero2.jpeg',
    title: 'Expert Team',
    subtitle: 'Quality with expertise in every project'
  },
];

const galleryImages = [
  '/gallery/all.jpeg',
  '/gallery/all1.jpeg',
  '/gallery/board.jpeg',
  '/gallery/cert.jpeg',
  '/gallery/cert2.jpeg',
  '/gallery/cert3.jpeg',
  '/gallery/cert4.jpeg',
  '/gallery/cert5.jpeg',
  '/gallery/cert6.jpeg',
  '/gallery/media.jpeg',
  '/gallery/studio1.jpeg',
  '/gallery/team.jpeg',
];

export default function Home() {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactSent, setContactSent] = useState(false);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroMedia.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSent(true);
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[90vh] flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          {heroMedia.map((media, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                index === currentHeroIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {media.type === 'video' ? (
                <video
                  autoPlay muted loop playsInline
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center top' }}
                >
                  <source src={media.src} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={media.src}
                  alt={`Hero ${index + 1}`}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center top' }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Bottom-heavy gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 z-10" />

        {/* Carousel arrows — frosted circles */}
        <button
          onClick={() => setCurrentHeroIndex((prev) => (prev - 1 + heroMedia.length) % heroMedia.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-all border border-white/20"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => setCurrentHeroIndex((prev) => (prev + 1) % heroMedia.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-all border border-white/20"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Content panel at bottom center */}
        <div className="relative z-20 mb-16 mx-4 max-w-3xl w-full bg-black/40 backdrop-blur-md rounded-2xl p-8 text-center border border-white/10">
          <p className="text-xs uppercase tracking-[0.2em] text-white/70 mb-3">
            {siteInfo.tagline}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 animate-fade-in-up">
            {heroMedia[currentHeroIndex].title}
          </h1>
          <p className="text-lg text-white/90 mb-4 max-w-xl mx-auto">
            {heroMedia[currentHeroIndex].subtitle}
          </p>
          <p className="text-sm text-white/60 italic mb-6">
            {siteInfo.conversionLine}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/projects" className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
              Explore Our Work
            </Link>
            <Link to="/marketplace" className="border border-white/40 text-white px-7 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
              Visit Marketplace
            </Link>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroMedia.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentHeroIndex ? 'bg-white w-6' : 'bg-white/40'
              }`}
            />
          ))}
        </div>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-bounce z-20 hidden sm:block">
          <ArrowDown className="w-5 h-5 text-white/60" />
        </div>
      </section>

      {/* ═══ ABOUT SNIPPET ═══ */}
      <section className="section-padding bg-card">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Who We Are</h2>
              <p className="text-muted-foreground mb-4">
                {siteInfo.legalName} is an IT services company based in {siteInfo.primaryLocation}, with a presence in{' '}
                {siteInfo.locations[1]}. Founded in {siteInfo.foundedYear}, we specialise in {siteInfo.industry}
              </p>
              <p className="text-muted-foreground mb-6">{siteInfo.growthBlurb}</p>
              <Link to="/about" className="text-primary font-medium hover:underline">Learn More →</Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 text-center hover-lift">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-3xl font-bold text-foreground">{siteInfo.foundedYear}</p>
                <p className="text-sm text-muted-foreground">Founded</p>
              </div>
              <div className="glass-card p-6 text-center hover-lift">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-3xl font-bold text-foreground">{siteInfo.locations.length}</p>
                <p className="text-sm text-muted-foreground">Locations in Kenya</p>
              </div>
            </div>
          </div>
          <p className="text-lg font-semibold text-primary mt-8 text-center">
            &ldquo;{siteInfo.tagline}.&rdquo;
          </p>
        </div>
      </section>

      {/* ═══ SERVICES — Bento Grid ═══ */}
      <section className="section-padding bg-[#F5F5F0]">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-foreground text-center mb-3">What We Do</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto text-sm">Core capabilities we bring to every engagement.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service, i) => {
              const Icon = serviceIcons[i] ?? Globe;
              return (
                <div
                  key={service.slug}
                  className="relative bg-white rounded-xl p-6 border-l-4 border-primary shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 overflow-hidden group"
                >
                  {/* Big number watermark */}
                  <span className="absolute top-2 right-4 text-7xl font-black text-black/[0.04] select-none leading-none">
                    0{i + 1}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.shortDescription}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="border-2 border-primary text-primary px-6 py-2.5 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ PROGRAM & PILLARS ═══ */}
      <section className="section-padding bg-card">
        <div className="container-max grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Our program</h2>
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
            <h2 className="text-2xl font-bold text-foreground mb-4">Why teams choose us</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {siteInfo.marketingPillars.map((label, i) => {
                const Icon = pillarIcons[i] ?? Headphones;
                return (
                  <span key={label} className="inline-flex items-center gap-2 text-sm bg-secondary text-secondary-foreground px-3 py-2 rounded-full">
                    <Icon className="w-4 h-4 text-primary" />
                    {label}
                  </span>
                );
              })}
            </div>
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">Benefits</h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {siteInfo.clientBenefits.map(b => (
                <li key={b} className="glass-card p-4 text-sm text-muted-foreground">{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ PROJECTS PREVIEW ═══ */}
      <section className="section-padding bg-card">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Work</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.slice(0, 3).map(project => (
              <Link key={project.slug} to={`/projects/${project.slug}`} className="glass-card overflow-hidden hover-lift group">
                <div className="overflow-hidden h-48">
                  <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
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
            <Link to="/projects" className="border border-primary text-primary px-6 py-2 rounded-md text-sm font-medium hover:bg-primary/10 transition-colors">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ CAMPAIGNS ═══ */}
      <section className="section-padding border-y border-border bg-card/50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">Campaigns &amp; live launches</h2>
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
                  {spot.primaryCta && (
                    <a href={spot.primaryCta.href} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                      {spot.primaryCta.label}
                    </a>
                  )}
                  {spot.meta && <p className="text-xs text-primary mt-4 font-medium">{spot.meta}</p>}
                  {spot.partner && <p className="text-xs text-muted-foreground mt-1">{spot.partner}</p>}
                  {spot.secondaryNote && <p className="text-xs text-muted-foreground mt-4">{spot.secondaryNote}</p>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRODUCTS PREVIEW ═══ */}
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

      {/* ═══ BRAND COLLATERAL ═══ */}
      <section className="section-padding bg-card">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">From our brand studio</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10 text-sm">
            Creative direction across digital marketing, business growth, and custom website storytelling.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <img src="/marketing/flyer-digital-marketing.png" alt="DravTech digital marketing flyer" className="w-full rounded-lg border border-border object-cover shadow-md" loading="lazy" />
            <img src="/marketing/flyer-business-growth.png" alt="DravTech business growth flyer" className="w-full rounded-lg border border-border object-cover shadow-md" loading="lazy" />
            <img src="/marketing/flyer-custom-websites.png" alt="DravTech custom website design flyer" className="w-full rounded-lg border border-border object-cover shadow-md" loading="lazy" />
          </div>
        </div>
      </section>

      {/* ═══ GALLERY — Static Grid ═══ */}
      <section className="section-padding bg-[#F5F5F0]">
        <div className="container-max">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-2">Gallery</h2>
            <div className="w-12 h-1 bg-primary rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer aspect-[4/3]"
              >
                <img
                  src={image}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <Maximize2 className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TEAM ═══ */}
      <section className="section-padding bg-card">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Meet the Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {team.map(member => (
              <div key={member.name} className="text-center bg-white rounded-2xl p-5 shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
                <div className="mx-auto mb-3 w-[120px] h-[120px]">
                  <TeamMemberAvatar member={member} size="md" className="!w-[120px] !h-[120px] ring-[3px] ring-primary/40 shadow-md" />
                </div>
                <h4 className="text-sm font-semibold text-foreground leading-snug">{member.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
                <p className="text-xs text-primary font-medium mt-0.5 mb-2">{member.sector}</p>
                {/* Social icons */}
                <div className="flex justify-center gap-1.5 mb-2">
                  <a href="#" className="text-muted-foreground hover:text-[#0077B5] transition-colors"><Linkedin className="w-3.5 h-3.5" /></a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter className="w-3.5 h-3.5" /></a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Github className="w-3.5 h-3.5" /></a>
                </div>
                <button
                  onClick={() => setSelectedMember(member)}
                  className="text-xs text-primary border border-primary/30 rounded-full px-3 py-1 hover:bg-primary/10 transition-colors"
                >
                  View Bio
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Bio Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setSelectedMember(null)}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div
            className="relative bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl animate-fade-in-up z-10"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <XIcon className="w-5 h-5" />
            </button>
            <div className="text-center">
              <div className="mx-auto mb-4 w-24 h-24">
                <TeamMemberAvatar member={selectedMember} size="md" className="!w-24 !h-24 ring-[3px] ring-primary/40" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{selectedMember.name}</h3>
              <p className="text-sm text-muted-foreground">{selectedMember.role}</p>
              <span className="inline-block mt-1 text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                {selectedMember.sector}
              </span>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {selectedMember.bio}
              </p>
              <div className="flex justify-center gap-3 mt-4">
                <a href="#" className="text-muted-foreground hover:text-[#0077B5] transition-colors"><Linkedin className="w-4 h-4" /></a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Github className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══ CONTACT — Split Card ═══ */}
      <section className="section-padding bg-[#F5F5F0]">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-foreground text-center mb-10">Let's Work Together</h2>
          <div className="grid md:grid-cols-2 gap-0 max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl">
            {/* Left — Form */}
            <div className="bg-white p-8 lg:p-10">
              {contactSent ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <Send className="w-10 h-10 text-primary mb-4" />
                  <p className="text-foreground font-semibold text-lg">Message sent!</p>
                  <p className="text-sm text-muted-foreground mt-1">We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleContact} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Your Name</label>
                    <input
                      type="text" required
                      value={contactForm.name} onChange={e => setContactForm(p => ({ ...p, name: e.target.value }))}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Your Email</label>
                    <input
                      type="email" required
                      value={contactForm.email} onChange={e => setContactForm(p => ({ ...p, email: e.target.value }))}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Your Message</label>
                    <textarea
                      required rows={4}
                      value={contactForm.message} onChange={e => setContactForm(p => ({ ...p, message: e.target.value }))}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                    />
                  </div>
                  <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Right — Contact Details (Navy) */}
            <div className="bg-[#0F172A] p-8 lg:p-10 text-white relative overflow-hidden">
              {/* Dot pattern */}
              <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              <div className="relative space-y-5">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-primary text-xs font-semibold uppercase tracking-wide">Phone</p>
                    <a href={siteInfo.phoneHref} className="text-white text-sm hover:text-primary transition-colors">
                      {siteInfo.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-primary text-xs font-semibold uppercase tracking-wide">WhatsApp</p>
                    <a href={siteInfo.whatsappHref} target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-primary transition-colors">
                      {siteInfo.whatsappDisplay}
                    </a>
                    <p className="text-gray-400 text-xs mt-0.5">Also: {siteInfo.whatsappAltLocal}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-primary text-xs font-semibold uppercase tracking-wide">Email</p>
                    <a href={`mailto:${siteInfo.email}`} className="text-white text-sm hover:text-primary transition-colors">
                      {siteInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-primary text-xs font-semibold uppercase tracking-wide">Web</p>
                    <a href={siteInfo.publicWebsite} target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-primary transition-colors break-all">
                      {siteInfo.publicWebsite.replace(/^https?:\/\//, '')}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ExternalLink className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-primary text-xs font-semibold uppercase tracking-wide">Timetabling Portal</p>
                    <a href={siteInfo.campusTimetablingUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-1 text-xs bg-primary/20 text-primary px-3 py-1 rounded-full hover:bg-primary/30 transition-colors">
                      Open Portal →
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-primary text-xs font-semibold uppercase tracking-wide">Locations</p>
                    {siteInfo.locations.map(loc => (
                      <p key={loc} className="text-white text-sm">{loc}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
