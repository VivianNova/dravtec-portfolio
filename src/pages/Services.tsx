import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowRight, Globe, Code, Palette, MessageSquare, BarChart3, Cloud } from 'lucide-react';
import { services, siteInfo } from '@/lib/data';

const filters = [
  { label: 'All', match: () => true },
  { label: 'Web', match: (s: any) => /web|site|cloud|system/i.test(s.title) },
  { label: 'Design', match: (s: any) => /design|brand|ui|ux/i.test(s.title) },
  { label: 'Marketing', match: (s: any) => /market|social|digital/i.test(s.title) },
  { label: 'Consulting', match: (s: any) => /data|analyt|consult/i.test(s.title) },
];

const serviceIcons = [Globe, Code, Palette, MessageSquare, BarChart3, Cloud];

export default function Services() {
  const [active, setActive] = useState('All');
  const f = filters.find(x => x.label === active)!;
  const list = services.filter(f.match);

  useEffect(() => {
    const els = document.querySelectorAll('.scroll-reveal');
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add('revealed')), { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [active]);

  return (
    <div className="page-fade-in">
      {/* Page header (no hero) */}
      <section className="bg-background py-20 px-4 sm:px-6 lg:px-8">
        <div className="container-max">
          <p className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-3">{siteInfo.tagline}</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-foreground mb-5 max-w-3xl">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {siteInfo.programItems.join(' · ')}. {siteInfo.conversionLine}
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mt-10 border-b border-border">
            {filters.map(f => (
              <button
                key={f.label}
                onClick={() => setActive(f.label)}
                className={`px-5 py-3 text-sm font-medium transition-colors border-b-2 -mb-px ${active === f.label ? 'border-accent text-accent' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Numbered service rows, alternating bg */}
      <section className="pb-20">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          {list.map((s, i) => {
            const Icon = serviceIcons[i % serviceIcons.length];
            const reverse = i % 2 === 1;
            return (
              <div key={s.slug} className={`scroll-reveal py-14 sm:py-20 border-b border-border ${reverse ? 'bg-dravtech-off -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-none' : 'bg-background'}`}>
                <div className={`grid lg:grid-cols-12 gap-8 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`lg:col-span-2 ${reverse ? 'lg:order-3' : ''}`}>
                    <div className="font-display font-extrabold text-7xl text-accent/20 leading-none">0{i + 1}</div>
                  </div>
                  <div className={`lg:col-span-2 ${reverse ? 'lg:order-2' : ''}`}>
                    <div className="w-20 h-20 rounded-2xl bg-dt-navy text-white flex items-center justify-center">
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>
                  <div className={`lg:col-span-8 ${reverse ? 'lg:order-1' : ''}`}>
                    <h2 className="font-display text-3xl font-bold text-foreground mb-3">{s.title}</h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{s.description[0]}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {s.features.slice(0, 4).map(feat => (
                        <span key={feat} className="text-xs bg-background border border-border text-muted-foreground px-3 py-1 rounded-full">{feat}</span>
                      ))}
                    </div>
                    <Link to={`/services/${s.slug}`} className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
