import { Link } from 'react-router-dom';
import { useState } from 'react';
import { projects } from '@/lib/data';

const categories = ['All', 'Web', 'Mobile', 'Design'] as const;

export default function Projects() {
  const [filter, setFilter] = useState<string>('All');
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="page-fade-in">
      {/* Page header (no hero) */}
      <section className="bg-background py-20 px-4 sm:px-6 lg:px-8">
        <div className="container-max">
          <p className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-3">Selected Work</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-foreground mb-5">Our Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A selection of recent work across web platforms, mobile, and design partnerships.
          </p>
          <div className="flex flex-wrap gap-2 mt-10 border-b border-border">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-3 text-sm font-medium transition-colors border-b-2 -mb-px ${filter === cat ? 'border-accent text-accent' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="container-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map(project => (
            <Link key={project.slug} to={`/projects/${project.slug}`} className="project-tile bg-card group">
              <div className="aspect-[16/10] overflow-hidden bg-muted">
                <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{project.tagline}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 4).map(t => (
                    <span key={t} className="text-[11px] bg-dravtech-off border border-border text-muted-foreground px-2 py-0.5 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No projects in this category yet.</p>
        )}
      </section>
    </div>
  );
}
