import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowRight, Calendar, MapPin, Headphones, BadgePercent, LineChart, Globe, Code, Palette, MessageSquare, BarChart3, Cloud, X, Linkedin, Twitter, Github } from 'lucide-react';
import { services, projects, siteInfo, team, type TeamMember } from '@/lib/data';

const pillarIcons = [Headphones, BadgePercent, LineChart] as const;
const serviceIcons = [Globe, Code, Palette, MessageSquare, BarChart3, Cloud];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.scroll-reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add('revealed'));
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function Home() {
  useReveal();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  return (
    <div className="page-fade-in">
      {/* ═══ HERO ═══ */}
      <section className="relative bg-dt-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-60" aria-hidden />
        <div className="absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full bg-dravtech-blue/30 blur-3xl" aria-hidden />
        <div className="absolute -bottom-40 right-0 w-[520px] h-[520px] rounded-full bg-accent-orange/15 blur-3xl" aria-hidden />

        <div className="container-max relative px-4 sm:px-6 lg:px-8 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <p className="text-xs uppercase tracking-[0.25em] text-accent mb-5 font-semibold">{siteInfo.tagline}</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
              Innovative<br/>Solutions
            </h1>
            <p className="text-lg text-white/75 max-w-xl mb-8 leading-relaxed">
              Custom websites and marketing that drive results — built by a Kenyan team that ships quality with expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/projects" className="inline-flex items-center justify-center gap-2 bg-accent-orange text-white px-7 py-3.5 rounded-full font-semibold hover:opacity-90 transition">
                Explore Our Work <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/marketplace" className="inline-flex items-center justify-center border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white/10 transition">
                Visit Marketplace
              </Link>
            </div>
          </div>

          {/* 3D-style decorative right side */}
          <div className="relative h-[420px] hidden lg:block">
            <div className="absolute top-8 right-12 w-56 h-56 rounded-3xl bg-gradient-to-br from-dravtech-blue to-dravtech-navy3 anim-float-slow border border-white/10" style={{ transform: 'perspective(800px) rotateX(15deg) rotateY(-15deg)' }} />
            <div className="absolute bottom-6 left-6 w-44 h-44 rounded-2xl bg-gradient-to-tr from-accent-orange to-orange-400 anim-float border border-white/10" style={{ transform: 'perspective(800px) rotateX(-10deg) rotateY(20deg)' }} />
            <div className="absolute top-32 left-24 w-32 h-32 rounded-full border-2 border-accent/40 anim-spin-slow" />
            <div className="absolute bottom-24 right-32 w-20 h-20 rounded-xl bg-white/5 backdrop-blur border border-white/10 anim-float" />
            <svg className="absolute inset-0 w-full h-full anim-spin-slow opacity-30" viewBox="0 0 200 200" aria-hidden>
              <polygon points="100,15 185,60 185,140 100,185 15,140 15,60" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5"/>
              <polygon points="100,40 165,75 165,135 100,170 35,135 35,75" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5"/>
            </svg>
          </div>
        </div>
      </section>

      {/* ═══ WHO WE ARE ═══ */}
      <section id="who-we-are" className="section-padding bg-background scroll-reveal">
        <div className="container-max grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">Who We Are</p>
            <h2 className="font-display text-4xl font-bold text-foreground mb-5">A Kenyan tech team building digital that converts.</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {siteInfo.legalName} is an IT services company based in {siteInfo.primaryLocation}, with a presence in {siteInfo.locations[1]}. Founded in {siteInfo.foundedYear}, we specialise in {siteInfo.industry}
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">{siteInfo.growthBlurb}</p>
            <Link to="/services" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="p-7 rounded-2xl bg-dravtech-off border border-border">
              <Calendar className="w-7 h-7 text-accent mb-4" />
              <p className="font-display text-4xl font-bold text-foreground">{siteInfo.foundedYear}</p>
              <p className="text-sm text-muted-foreground mt-1">Founded</p>
            </div>
            <div className="p-7 rounded-2xl bg-dravtech-off border border-border">
              <MapPin className="w-7 h-7 text-accent mb-4" />
              <p className="font-display text-4xl font-bold text-foreground">{siteInfo.locations.length}</p>
              <p className="text-sm text-muted-foreground mt-1">Locations in Kenya</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider container-max" />

      {/* ═══ WHAT WE DO — Numbered rows ═══ */}
      <section className="section-padding bg-dravtech-off scroll-reveal">
        <div className="container-max">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">What We Do</p>
            <h2 className="font-display text-4xl font-bold text-foreground">Services that move the needle</h2>
          </div>
          <div className="space-y-3">
            {services.slice(0, 3).map((service, i) => {
              const Icon = serviceIcons[i] ?? Globe;
              const tinted = i % 2 === 1;
              return (
                <Link
                  to={`/services/${service.slug}`}
                  key={service.slug}
                  className={`group relative grid grid-cols-[80px_56px_1fr_auto] sm:grid-cols-[120px_64px_1fr_auto] gap-5 items-center px-6 sm:px-10 py-8 rounded-xl border border-border overflow-hidden transition-all hover:border-accent ${tinted ? 'bg-white' : 'bg-background'}`}
                >
                  <span className="num-watermark relative z-10">0{i + 1}</span>
                  <div className="w-14 h-14 rounded-xl bg-dt-navy text-white flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-1">{service.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{service.shortDescription}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-accent transition-transform group-hover:translate-x-1" />
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ FEATURED PROJECTS — Dark navy showcase ═══ */}
      <section className="section-padding bg-dt-navy-2 text-white scroll-reveal relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid opacity-40" aria-hidden />
        <div className="container-max relative">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">Featured Work</p>
              <h2 className="font-display text-4xl font-bold">Projects we're proud of</h2>
            </div>
            <Link to="/projects" className="text-accent font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="h-scroll md:grid md:grid-cols-3 md:gap-6 md:overflow-visible">
            {projects.slice(0, 6).map(project => (
              <Link key={project.slug} to={`/projects/${project.slug}`} className="block bg-dt-navy rounded-xl overflow-hidden border border-dt-soft transition-all hover:-translate-y-1 hover:border-accent group">
                <div className="aspect-[16/10] overflow-hidden bg-dt-navy-3">
                  <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-white mb-1">{project.title}</h3>
                  <p className="text-sm text-white/65 mb-3 line-clamp-2">{project.tagline}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map(t => (
                      <span key={t} className="text-[11px] bg-white/10 text-white/85 px-2 py-0.5 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="section-padding bg-background scroll-reveal">
        <div className="container-max grid lg:grid-cols-2 gap-14">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">Our Program</p>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">What every engagement includes</h2>
            <ul className="space-y-5">
              {siteInfo.programItems.map((item, i) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="font-display text-xl font-bold text-accent w-8 shrink-0">0{i + 1}</span>
                  <div>
                    <p className="font-semibold text-foreground">{item}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">Why Choose Us</p>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">Teams pick DravTech because we deliver</h2>
            <div className="space-y-4">
              {siteInfo.marketingPillars.map((label, i) => {
                const Icon = pillarIcons[i] ?? Headphones;
                return (
                  <div key={label} className="flex items-start gap-4 py-3 border-b border-border last:border-0">
                    <div className="w-11 h-11 rounded-xl bg-dravtech-off flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{label}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{siteInfo.clientBenefits[i] ?? ''}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MEET THE TEAM ═══ */}
      <section className="section-padding bg-dravtech-off scroll-reveal">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-3">Our People</p>
            <h2 className="font-display text-4xl font-bold text-foreground mb-3">Meet the Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The Kenyan engineers, designers and operators behind DravTech.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map(member => (
              <div key={member.name} className="group relative bg-background border border-border rounded-xl overflow-hidden flex flex-col">
                <div className="relative aspect-[3/4] bg-dt-navy-3 overflow-hidden">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-white/80 font-display text-6xl font-bold bg-dt-navy-2">{member.initials}</div>
                  )}
                  <div className="absolute inset-0 bg-dt-navy/85 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                    <p className="text-white/90 text-sm mb-4 line-clamp-4">{member.bio}</p>
                    <button onClick={() => setSelectedMember(member)} className="bg-accent-orange text-white px-5 py-2 rounded-full text-sm font-semibold">View Profile</button>
                  </div>
                </div>
                <div className="p-5 bg-background">
                  <h3 className="font-display text-lg font-bold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{member.role}</p>
                  <div className="flex gap-3 text-muted-foreground">
                    <a href="#" aria-label="LinkedIn" className="hover:text-accent transition"><Linkedin className="w-4 h-4" /></a>
                    <a href="#" aria-label="Twitter" className="hover:text-accent transition"><Twitter className="w-4 h-4" /></a>
                    <a href="#" aria-label="GitHub" className="hover:text-accent transition"><Github className="w-4 h-4" /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Team modal ═══ */}
      {selectedMember && (
        <div onClick={() => setSelectedMember(null)} className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div onClick={e => e.stopPropagation()} className="relative bg-dt-navy text-white rounded-2xl max-w-3xl w-full overflow-hidden grid md:grid-cols-2 border border-white/10">
            <button onClick={() => setSelectedMember(null)} className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"><X className="w-4 h-4" /></button>
            <div className="aspect-[3/4] md:aspect-auto bg-dt-navy-3">
              {selectedMember.image ? (
                <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white/80 font-display text-7xl font-bold">{selectedMember.initials}</div>
              )}
            </div>
            <div className="p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-3">{selectedMember.sector}</p>
              <h3 className="font-display text-2xl font-bold mb-1">{selectedMember.name}</h3>
              <p className="text-white/70 mb-5">{selectedMember.role}</p>
              <p className="text-white/85 leading-relaxed mb-6">{selectedMember.bio}</p>
              <div className="flex gap-3">
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent-orange flex items-center justify-center transition"><Linkedin className="w-4 h-4" /></a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent-orange flex items-center justify-center transition"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-accent-orange flex items-center justify-center transition"><Github className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══ CTA strip ═══ */}
      <section className="bg-dt-navy text-white py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold">Ready to build something that converts?</h3>
            <p className="text-white/70 mt-2">Book a quick demo — we'll walk you through what fits your goals.</p>
          </div>
          <Link to="/demo" className="bg-accent-orange text-white px-7 py-3.5 rounded-full font-semibold hover:opacity-90 transition inline-flex items-center gap-2">
            Book a Demo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
