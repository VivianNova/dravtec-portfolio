import { useParams, Link } from 'react-router-dom';
import { getProductBySlug, getRelatedProducts } from '@/lib/data';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';
import { ShoppingCart, Check } from 'lucide-react';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || '');
  const related = getRelatedProducts(slug || '');
  const { addToCart } = useCart();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Product not found</h1>
          <Link to="/marketplace" className="text-primary hover:underline">← Back to Marketplace</Link>
        </div>
      </div>
    );
  }

  const handleAdd = () => {
    addToCart(product, selectedPlan || undefined);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-max">
          {/* Image gallery */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-3">
              <img src={product.images[0]} alt={product.name} className="w-full h-72 object-cover rounded-lg" />
              <div className="grid grid-cols-3 gap-3">
                {product.images.map((img, i) => (
                  <img key={i} src={img} alt="" className="w-full h-20 object-cover rounded-md" loading="lazy" />
                ))}
              </div>
            </div>
            <div>
              <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded">{product.category}</span>
              <h1 className="text-3xl font-bold text-foreground mt-2 mb-1">{product.name}</h1>
              <p className="text-muted-foreground text-sm mb-4">by {product.creator} · {product.creatorRole}</p>
              
              {product.priceType === 'one-time' && (
                <p className="text-2xl font-bold text-primary mb-6">KES {product.price.toLocaleString()}</p>
              )}

              {product.description.map((p, i) => (
                <p key={i} className="text-sm text-muted-foreground mb-3">{p}</p>
              ))}

              {!product.plans && (
                <button onClick={handleAdd} className="w-full bg-primary text-primary-foreground py-3 rounded-md font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 mt-4">
                  {added ? <><Check className="w-4 h-4" /> Added!</> : <><ShoppingCart className="w-4 h-4" /> Add to Cart</>}
                </button>
              )}
            </div>
          </div>

          {/* Pricing Plans */}
          {product.plans && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Choose a Plan</h2>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {product.plans.map(plan => (
                  <div
                    key={plan.name}
                    onClick={() => setSelectedPlan(plan.name)}
                    className={`glass-card p-6 cursor-pointer transition-all ${
                      selectedPlan === plan.name ? 'ring-2 ring-primary border-primary' : ''
                    } hover-lift`}
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-1">{plan.name}</h3>
                    <p className="text-2xl font-bold text-primary mb-4">KES {plan.price}<span className="text-sm text-muted-foreground font-normal">/mo</span></p>
                    <ul className="space-y-2">
                      {plan.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-0.5">✓</span>{f}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={(e) => { e.stopPropagation(); setSelectedPlan(plan.name); handleAdd(); }}
                      className={`w-full mt-4 py-2 rounded-md font-medium text-sm transition-colors ${
                        selectedPlan === plan.name
                          ? 'bg-primary text-primary-foreground'
                          : 'border border-primary text-primary hover:bg-primary/10'
                      }`}
                    >
                      {added && selectedPlan === plan.name ? 'Added!' : 'Choose Plan'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Creator */}
          <div className="glass-card p-6 max-w-sm mb-12">
            <h3 className="text-sm text-muted-foreground mb-3">Created by</h3>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                <span className="text-primary font-bold text-xs">{product.creator.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <div>
                <p className="text-foreground font-semibold text-sm">{product.creator}</p>
                <p className="text-xs text-muted-foreground">{product.creatorRole}</p>
              </div>
            </div>
          </div>

          {/* Related */}
          <h2 className="text-2xl font-bold text-foreground mb-6">Related Products</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map(p => (
              <Link key={p.slug} to={`/marketplace/${p.slug}`} className="glass-card overflow-hidden hover-lift">
                <img src={p.images[0]} alt={p.name} className="w-full h-40 object-cover" loading="lazy" />
                <div className="p-4">
                  <h3 className="text-foreground font-semibold mb-1">{p.name}</h3>
                  <p className="text-sm text-muted-foreground">by {p.creator}</p>
                  <p className="text-primary font-semibold text-sm mt-1">
                    {p.priceType === 'subscription' ? `From KES ${p.price}/mo` : `KES ${p.price.toLocaleString()}`}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
