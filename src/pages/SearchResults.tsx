import { useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { services, projects, products } from '@/lib/data';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchResults() {
  const q = useQuery().get('query') || '';
  const term = q.trim().toLowerCase();

  const results = useMemo(() => {
    if (!term) return { projects: [], services: [], products: [] };
    const filterText = (text = '') => text.toLowerCase().includes(term);

    return {
      projects: projects.filter(p => filterText(p.title) || filterText(p.tagline) || p.techStack.some(t => filterText(t)) || filterText(p.problem)),
      services: services.filter(s => filterText(s.title) || filterText(s.shortDescription) || s.features.some(f => filterText(f))),
      products: products.filter(p => filterText(p.name) || p.description.some(d => filterText(d)))
    };
  }, [term]);

  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-max">
          <h1 className="text-2xl font-bold text-foreground mb-4">Search results for “{q}”</h1>

          {!term ? (
            <p className="text-muted-foreground">Please enter a search term.</p>
          ) : (
            <div className="space-y-8">
              <section>
                <h2 className="text-lg font-semibold mb-4">Projects ({results.projects.length})</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {results.projects.map(p => (
                    <Link key={p.slug} to={`/projects/${p.slug}`} className="glass-card overflow-hidden hover-lift">
                      <img src={p.thumbnail} alt={p.title} className="w-full h-40 object-cover" />
                      <div className="p-4">
                        <h3 className="font-semibold text-foreground">{p.title}</h3>
                        <p className="text-sm text-muted-foreground">{p.tagline}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-4">Services ({results.services.length})</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {results.services.map(s => (
                    <div key={s.slug} className="glass-card p-4">
                      <h3 className="font-semibold text-foreground">{s.title}</h3>
                      <p className="text-sm text-muted-foreground">{s.shortDescription}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-lg font-semibold mb-4">Products ({results.products.length})</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {results.products.map(prod => (
                    <Link key={prod.slug} to={`/marketplace/${prod.slug}`} className="glass-card overflow-hidden hover-lift">
                      <img src={prod.images?.[0] ?? ''} alt={prod.name} className="w-full h-40 object-cover" />
                      <div className="p-4">
                        <h3 className="font-semibold text-foreground">{prod.name}</h3>
                        <p className="text-sm text-muted-foreground">{prod.creator}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              {results.projects.length === 0 && results.services.length === 0 && results.products.length === 0 && (
                <p className="text-muted-foreground">No results found.</p>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
