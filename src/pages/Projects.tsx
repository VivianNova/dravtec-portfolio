import { Link } from 'react-router-dom';
import { useState } from 'react';
import { projects } from '@/lib/data';

const categories = ['All', 'Web', 'Mobile', 'Design'] as const;

export default function Projects() {
  const [filter, setFilter] = useState<string>('All');
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="pt-16">
      <section className="section-padding bg-card">
        <div className="container-max text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Projects</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">A selection of work we're proud of.</p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-max">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(project => (
              <Link key={project.slug} to={`/projects/${project.slug}`} className="glass-card overflow-hidden hover-lift group">
                <img src={project.thumbnail} alt={project.title} className="w-full h-48 object-cover" loading="lazy" />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{project.tagline}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.techStack.map(t => (
                      <span key={t} className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded">{t}</span>
                    ))}
                  </div>
                  <span className="text-primary text-sm font-medium">View Project →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
