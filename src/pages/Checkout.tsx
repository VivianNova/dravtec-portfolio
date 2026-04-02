import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Loader2 } from 'lucide-react';

export default function Checkout() {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', notes: '', mpesaPhone: '' });
  const [loading, setLoading] = useState(false);

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [field]: e.target.value }));

  const hasMerch = items.some(i => i.product.category === 'Merchandise');
  const inputClass = "w-full bg-card border border-border rounded-md px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      clearCart();
      navigate('/order-confirmation');
    }, 2000);
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-max max-w-5xl">
          <h1 className="text-3xl font-bold text-foreground mb-8">Checkout</h1>

          {loading ? (
            <div className="glass-card p-16 text-center">
              <Loader2 className="w-12 h-12 text-primary mx-auto mb-4 animate-spin" />
              <p className="text-foreground font-semibold text-lg">Processing M-Pesa Payment...</p>
              <p className="text-sm text-muted-foreground mt-2">Please check your phone for the STK push.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold text-foreground">Your Details</h2>
                  <input type="text" placeholder="Full Name" required value={form.name} onChange={update('name')} className={inputClass} />
                  <input type="email" placeholder="Email" required value={form.email} onChange={update('email')} className={inputClass} />
                  <input type="tel" placeholder="Phone Number" required value={form.phone} onChange={update('phone')} className={inputClass} />
                  {hasMerch && (
                    <input type="text" placeholder="Delivery Address" required value={form.address} onChange={update('address')} className={inputClass} />
                  )}
                  <textarea placeholder="Order Notes (optional)" rows={3} value={form.notes} onChange={update('notes')} className={`${inputClass} resize-none`} />

                  <div className="glass-card p-4 mt-4">
                    <h3 className="text-foreground font-semibold mb-2">💳 Pay via M-Pesa</h3>
                    <p className="text-xs text-muted-foreground mb-3">You will receive an STK push to confirm payment.</p>
                    <input type="tel" placeholder="M-Pesa Phone Number (e.g. 0712345678)" required value={form.mpesaPhone} onChange={update('mpesaPhone')} className={inputClass} />
                  </div>
                </div>

                <div className="glass-card p-6 h-fit">
                  <h2 className="text-lg font-semibold text-foreground mb-4">Order Summary</h2>
                  <div className="space-y-3 mb-4">
                    {items.map(item => (
                      <div key={item.product.slug} className="flex justify-between text-sm">
                        <span className="text-muted-foreground truncate mr-2">
                          {item.product.name} {item.selectedPlan && `(${item.selectedPlan})`} × {item.quantity}
                        </span>
                        <span className="text-foreground whitespace-nowrap">
                          KES {((item.selectedPlan && item.product.plans
                            ? item.product.plans.find(p => p.name === item.selectedPlan)?.price || item.product.price
                            : item.product.price) * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between font-semibold">
                    <span className="text-foreground">Total</span>
                    <span className="text-primary">KES {total.toLocaleString()}</span>
                  </div>
                  <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-md font-medium mt-4 hover:bg-primary/90 transition-colors">
                    Place Order
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
