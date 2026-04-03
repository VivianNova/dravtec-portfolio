import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Search } from 'lucide-react';
import { products } from '@/lib/data';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const categories = ['All', 'Digital Products', 'Artwork', 'Merchandise'] as const;

export default function Marketplace() {
  const [filter, setFilter] = useState<string>('All');
  const [search, setSearch] = useState('');
  const [showCount, setShowCount] = useState(6);
  const [loading, setLoading] = useState(true);
  const ref = useScrollReveal();

  // Simulate loading
  useState(() => {
    setTimeout(() => setLoading(false), 800);
  });

  const filtered = products
    .filter(p => filter === 'All' || p.category === filter)
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.creator.toLowerCase().includes(search.toLowerCase()));

  const visible = filtered.slice(0, showCount);

  return (
    <div className="pt-16 page-fade-in">
      <section className="section-padding bg-card noise-overlay">
        <div className="container-max text-center relative z-10">
          <h1 className="text-4xl font-bold text-foreground mb-4 section-heading mx-auto">DravTech Marketplace</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Digital products, artwork and merchandise from our team.</p>
        </div>
      </section>

      <section ref={ref} className="section-padding scroll-reveal">
        <div className="container-max">
          <div className="flex flex-col sm:flex-row gap-4 mb-8 items-start sm:items-center justify-between">
            <div className="flex gap-2 flex-wrap">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => { setFilter(cat); setShowCount(6); }}
                  className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    filter === cat ? 'bg-primary text-primary-foreground' : 'bg-card border border-border text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full bg-card border border-border rounded-md pl-9 pr-4 py-2 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="rounded-lg overflow-hidden">
                  <div className="skeleton-card h-44 w-full" />
                  <div className="p-5 space-y-3">
                    <div className="skeleton-card h-4 w-20" />
                    <div className="skeleton-card h-5 w-3/4" />
                    <div className="skeleton-card h-4 w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map(product => (
                <Link key={product.slug} to={`/marketplace/${product.slug}`} className="glass-card overflow-hidden hover-lift marketplace-card group">
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
                    <h3 className="text-lg font-semibold text-foreground mt-2 mb-1">{product.name}</h3>
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
          )}

          {visible.length < filtered.length && (
            <div className="text-center mt-8">
              <button onClick={() => setShowCount(s => s + 6)} className="btn-shimmer border border-primary text-primary px-6 py-2 rounded-md text-sm font-medium hover:bg-primary/10 transition-colors">
                Load More
              </button>
            </div>
          )}

          {filtered.length === 0 && !loading && (
            <p className="text-center text-muted-foreground py-12">No products found.</p>
          )}
        </div>
      </section>
    </div>
  );
}
