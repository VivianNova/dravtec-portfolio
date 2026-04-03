import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Search } from 'lucide-react';
import { products } from '@/lib/data';

const categories = ['All', 'Digital Products', 'Artwork', 'Merchandise'] as const;

export default function Marketplace() {
  const [filter, setFilter] = useState<string>('All');
  const [search, setSearch] = useState('');
  const [showCount, setShowCount] = useState(6);

  const filtered = products
    .filter(p => filter === 'All' || p.category === filter)
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.creator.toLowerCase().includes(search.toLowerCase()));

  const visible = filtered.slice(0, showCount);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        {/* Hero Background */}
        <img 
          src="/hero/hero2.jpeg" 
          alt="DravTech Marketplace" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-800/40 to-transparent" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">DravTech Marketplace</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Digital products, artwork and merchandise from our team.
          </p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-max text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Shop Our Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Quality with expertise in every item we create.</p>
        </div>
      </section>

      <section className="section-padding">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map(product => (
              <Link key={product.slug} to={`/marketplace/${product.slug}`} className="glass-card overflow-hidden hover-lift group">
                <img src={product.images[0]} alt={product.name} className="w-full h-48 object-cover" loading="lazy" />
                <div className="p-5">
                  <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded">{product.category}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-2 mb-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">by {product.creator}</p>
                  <p className="text-primary font-semibold">
                    {product.priceType === 'subscription' ? `From KES ${product.price}/mo` : `KES ${product.price.toLocaleString()}`}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {visible.length < filtered.length && (
            <div className="text-center mt-8">
              <button onClick={() => setShowCount(s => s + 6)} className="border border-primary text-primary px-6 py-2 rounded-md text-sm font-medium hover:bg-primary/10 transition-colors">
                Load More
              </button>
            </div>
          )}

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No products found.</p>
          )}
        </div>
      </section>
    </div>
  );
}
