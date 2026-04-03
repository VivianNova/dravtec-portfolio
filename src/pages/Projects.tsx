import { Link } from 'react-router-dom';
import { useState } from 'react';
import { projects } from '@/lib/data';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import FloatingIcons from '@/components/FloatingIcons';

const categories = ['All', 'Web', 'Mobile', 'Design'] as const;

export default function Projects() {
  const [filter, setFilter] = useState<string>('All');
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);
  const ref = useScrollReveal();

  return (
    <div className="pt-16 page-fade-in">
      <section className="section-padding bg-card noise-overlay">
        <div className="container-max text-center relative z-10">
          <h1 className="text-4xl font-bold text-foreground mb-4 section-heading mx-auto">Our Projects</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">A selection of work we're proud of.</p>
        </div>
      </section>
      <section ref={ref} className="section-padding noise-overlay scroll-reveal relative">
        <FloatingIcons />
        <div className="container-max relative z-10">
          <div className="flex gap-2 mb-8 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  filter === cat ? 'bg-primary text-primary-foreground' : 'bg-card border border-border text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(project => (
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
                    {project.techStack.map(t => (
                      <span key={t} className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded">{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
