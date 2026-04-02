import { useParams, Link } from 'react-router-dom';
import { getProjectBySlug, getRelatedProjects } from '@/lib/data';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug || '');
  const related = getRelatedProjects(slug || '');

  if (!project) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Project not found</h1>
          <Link to="/projects" className="text-primary hover:underline">← Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <section className="section-padding bg-card">
        <div className="container-max">
          <img src={project.thumbnail} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-6" />
          <h1 className="text-4xl font-bold text-foreground mb-2">{project.title}</h1>
          <p className="text-muted-foreground mb-4">{project.tagline}</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map(t => (
              <span key={t} className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-3xl space-y-10">
          {[
            { title: 'Problem', content: project.problem },
            { title: 'Approach', content: project.approach },
            { title: 'Solution', content: project.solution },
            { title: 'Outcome', content: project.outcome },
          ].map(s => (
            <div key={s.title}>
              <h2 className="text-2xl font-bold text-foreground mb-3">{s.title}</h2>
              <p className="text-muted-foreground">{s.content}</p>
            </div>
          ))}

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">Team</h2>
            <div className="flex flex-wrap gap-2">
              {project.team.map(name => (
                <span key={name} className="text-sm bg-card border border-border px-3 py-1 rounded-md text-muted-foreground">{name}</span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-3">Gallery</h2>
            <div className="grid grid-cols-3 gap-3">
              {project.images.map((img, i) => (
                <img key={i} src={img} alt={`${project.title} screenshot ${i + 1}`} className="w-full h-32 object-cover rounded-md" loading="lazy" />
              ))}
            </div>
          </div>

          <div className="glass-card p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">Have a similar project?</h3>
            <p className="text-muted-foreground mb-4">Let's talk about how we can help.</p>
            <Link to="/demo" className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors">
              Let's Talk
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-foreground mb-8">Related Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map(p => (
              <Link key={p.slug} to={`/projects/${p.slug}`} className="glass-card overflow-hidden hover-lift">
                <img src={p.thumbnail} alt={p.title} className="w-full h-40 object-cover" loading="lazy" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
