import { Link } from 'react-router-dom';
import { ArrowDown, MapPin, Calendar, Send, Headphones, BadgePercent, LineChart, ChevronLeft, ChevronRight } from 'lucide-react';
import { services, projects, products, team, siteInfo, campaignSpotlights } from '@/lib/data';
import TeamMemberAvatar from '@/components/TeamMemberAvatar';
import { useState, useEffect } from 'react';

const pillarIcons = [Headphones, BadgePercent, LineChart] as const;

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
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroMedia.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSent(true);
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Carousel Media */}
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
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={media.src} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={media.src}
                  alt={`Hero ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
        
        {/* Minimal overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
        
        {/* Carousel Controls */}
        <button
          onClick={() => setCurrentHeroIndex((prev) => (prev - 1 + heroMedia.length) % heroMedia.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentHeroIndex((prev) => (prev + 1) % heroMedia.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroMedia.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentHeroIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-white mb-4 animate-fade-in-up">
            {siteInfo.tagline}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 animate-fade-in-up">
            {heroMedia[currentHeroIndex].title}
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-up animate-fade-in-up-delay-1">
            {heroMedia[currentHeroIndex].subtitle}
          </p>
          <p className="text-lg text-white/80 font-medium italic mb-10 animate-fade-in-up animate-fade-in-up-delay-2">
            {siteInfo.conversionLine}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-fade-in-up-delay-3">
            <Link to="/projects" className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
              Explore Our Work
            </Link>
            <Link to="/marketplace" className="border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white/10 transition-colors">
              Visit Marketplace
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white" />
        </div>
      </section>

      {/* About Snippet */}
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

      {/* Program & pillars from collateral */}
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

      {/* Live campaigns & partnerships */}
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
                  {spot.primaryCta ? (
                    <a
                      href={spot.primaryCta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
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

      {/* Brand collateral */}
      <section className="section-padding bg-card">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">From our brand studio</h2>
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

      {/* Gallery Section */}
      <section className="section-padding bg-card">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Gallery</h2>
          <div className="relative overflow-hidden rounded-lg">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentGalleryIndex * 100}%)` }}>
              {galleryImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
                    <img
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm font-medium">View Image</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Gallery Controls */}
            <button
              onClick={() => setCurrentGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Gallery Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentGalleryIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentGalleryIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-card">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Meet the Team</h2>
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
    { type: 'image', src: '/hero/team-meeting-1.png', alt: 'Team collaboration' },
    { type: 'image', src: '/hero/team-meeting-2.png', alt: 'Team meeting' },
    { type: 'video', src: '/videos/video.mp4', alt: 'Intro video' },
    { type: 'image', src: '/hero/team-meeting-3.png', alt: 'Team discussion' },
  ];
  const [index, setIndex] = useState(0);

  // autoplay
  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
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
