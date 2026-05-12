import { Link } from 'react-router-dom';
import { Search, Palette, ShoppingBag, Download } from 'lucide-react';
import { useState } from 'react';
import { products } from '@/lib/data';

const sections = [
  {
    key: 'Artwork' as const,
    label: 'Arts',
    icon: Palette,
    headline: 'Arts',
    blurb: 'Digital artworks, illustrations and creative visual assets from our studio.',
    bg: 'bg-[#FFF7F0]',
    accentDot: 'bg-orange-400',
  },
  {
    key: 'Merchandise' as const,
    label: 'Merchandise',
    icon: ShoppingBag,
    headline: 'Merchandise',
    blurb: 'Branded physical products — t-shirts, mugs and team essentials.',
    bg: 'bg-dravtech-off',
    accentDot: 'bg-foreground',
  },
  {
    key: 'Digital Products' as const,
    label: 'Digital Products',
    icon: Download,
    headline: 'Digital Products',
    blurb: 'Templates, tools and downloads to ship faster.',
    bg: 'bg-[#EEF4FF]',
    accentDot: 'bg-dravtech-blue',
  },
];

export default function Marketplace() {
  const [search, setSearch] = useState('');

  const inSearch = (p: typeof products[number]) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.creator.toLowerCase().includes(search.toLowerCase());

  return (
    <div className="page-fade-in">
      {/* Page header (no hero) */}
      <section className="bg-background py-20 px-4 sm:px-6 lg:px-8">
        <div className="container-max">
          <p className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-3">Shop</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-foreground mb-5">Marketplace</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            Three categories: Arts, Merchandise and Digital Products — built and curated by the DravTech team.
          </p>
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products or creators..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-background border border-border rounded-full pl-10 pr-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
            />
          </div>
        </div>
      </section>

      {sections.map(section => {
        const items = products.filter(p => p.category === section.key && inSearch(p));
        const Icon = section.icon;
        return (
          <section key={section.key} className={`${section.bg} py-20 px-4 sm:px-6 lg:px-8 border-t border-border`}>
            <div className="container-max">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-dt-navy text-white flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-3">
                  <span className={`w-2.5 h-2.5 rounded-full ${section.accentDot}`} />
                  <p className="text-xs uppercase tracking-[0.25em] text-foreground/70 font-semibold">Category</p>
                </div>
              </div>
              <h2 className="font-display text-4xl font-bold text-foreground mb-3">{section.headline}</h2>
              <p className="text-muted-foreground max-w-2xl mb-10">{section.blurb}</p>

              {items.length === 0 ? (
                <p className="text-muted-foreground italic">No products in this category yet.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map(product => (
                    <Link key={product.slug} to={`/marketplace/${product.slug}`} className="bg-background border border-border rounded-xl overflow-hidden transition-all hover:-translate-y-1 hover:border-accent group">
                      <div className="aspect-[4/3] overflow-hidden bg-muted">
                        <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                      </div>
                      <div className="p-5">
                        <h3 className="font-display text-lg font-semibold text-foreground mb-1">{product.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3">by {product.creator}</p>
                        <div className="flex items-center justify-between">
                          <p className="text-accent font-bold">
                            {product.priceType === 'subscription' ? `From KES ${product.price}/mo` : `KES ${product.price.toLocaleString()}`}
                          </p>
                          <span className="text-xs bg-accent-orange text-white px-3 py-1.5 rounded-full font-medium">Add to Cart</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      })}
    </div>
  );
}
