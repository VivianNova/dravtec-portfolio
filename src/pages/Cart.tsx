import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Trash2, Minus, Plus, ShoppingBag } from 'lucide-react';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-foreground mb-2">Your cart is empty</h1>
          <p className="text-muted-foreground mb-6">Browse our marketplace to find something you love.</p>
          <Link to="/marketplace" className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors">
            Browse Marketplace
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-max">
          <h1 className="text-3xl font-bold text-foreground mb-8">Shopping Cart</h1>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {items.map(item => (
                <div key={item.product.slug + (item.selectedPlan || '')} className="glass-card p-4 flex gap-4 items-center">
                  <img src={item.product.images[0]} alt={item.product.name} className="w-20 h-20 rounded-md object-cover" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-foreground font-semibold truncate">{item.product.name}</h3>
                    {item.selectedPlan && <p className="text-xs text-primary">{item.selectedPlan} Plan</p>}
                    <p className="text-sm text-muted-foreground">
                      KES {(item.selectedPlan && item.product.plans
                        ? item.product.plans.find(p => p.name === item.selectedPlan)?.price || item.product.price
                        : item.product.price
                      ).toLocaleString()}
                      {item.product.priceType === 'subscription' && '/mo'}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQuantity(item.product.slug, item.quantity - 1)} className="w-8 h-8 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground">
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-foreground font-medium w-6 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.slug, item.quantity + 1)} className="w-8 h-8 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground">
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <button onClick={() => removeFromCart(item.product.slug)} className="text-muted-foreground hover:text-destructive transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            <div className="glass-card p-6 h-fit">
              <h2 className="text-lg font-semibold text-foreground mb-4">Order Summary</h2>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">KES {total.toLocaleString()}</span>
                </div>
                <div className="border-t border-border pt-2 flex justify-between font-semibold">
                  <span className="text-foreground">Total</span>
                  <span className="text-primary">KES {total.toLocaleString()}</span>
                </div>
              </div>
              <Link to="/checkout" className="block w-full bg-primary text-primary-foreground py-3 rounded-md font-medium text-center hover:bg-primary/90 transition-colors">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
