import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock, Download, ShoppingBag, Palette, Box, X, Check } from 'lucide-react';
import { products, type Product } from '@/lib/data';
import { useCart } from '@/contexts/CartContext';

type TabKey = 'Artwork' | 'Merchandise' | 'Digital Products';

const tabs: { key: TabKey; label: string; icon: typeof Palette }[] = [
  { key: 'Artwork', label: 'Arts', icon: Palette },
  { key: 'Merchandise', label: 'Merchandise', icon: ShoppingBag },
  { key: 'Digital Products', label: 'Digital Products', icon: Box },
];

type ModalKind = null | { type: 'order' | 'pay-art' | 'pay-digital'; product: Product; planIdx?: number };

export default function Marketplace() {
  const [activeTab, setActiveTab] = useState<TabKey>('Artwork');
  const [modal, setModal] = useState<ModalKind>(null);
  const [paidArts, setPaidArts] = useState<Set<string>>(new Set());
  const [paidDigital, setPaidDigital] = useState<Set<string>>(new Set());
  const { addToCart } = useCart();

  const items = products.filter(p => p.category === activeTab);

  const handleConfirmOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setModal(null);
    alert('Thanks — your order request was sent to DravTech. We will be in touch shortly.');
  };

  const handleArtPayment = () => {
    if (modal?.type === 'pay-art') {
      setPaidArts(s => new Set(s).add(modal.product.slug));
      setModal(null);
    }
  };

  const handleDigitalPayment = () => {
    if (modal?.type === 'pay-digital') {
      setPaidDigital(s => new Set(s).add(modal.product.slug));
      setModal(null);
    }
  };

  return (
    <div className="page-fade-in">
      {/* Page header */}
      <section className="bg-background py-16 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="container-max">
          <p className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-3">Shop</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-foreground mb-4">Marketplace</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Three categories: Arts, Merchandise, and Digital Products — built and curated by the DravTech team.
          </p>
        </div>
      </section>

      {/* Tab switcher */}
      <section className="bg-background sticky top-0 z-10 border-b border-border">
        <div className="container-max px-4 sm:px-6 lg:px-8 flex flex-wrap gap-2 py-4">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const active = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition ${active ? 'bg-dt-navy text-white' : 'bg-dravtech-off text-foreground hover:bg-border'}`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Section content */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${activeTab === 'Artwork' ? 'bg-[#FFF7F0]' : activeTab === 'Merchandise' ? 'bg-dravtech-off' : 'bg-[#EEF4FF]'}`}>
        <div className="container-max">
          {items.length === 0 ? (
            <p className="text-muted-foreground italic">No products in this category yet.</p>
          ) : activeTab === 'Artwork' ? (
            <ArtsGrid items={items} paid={paidArts} setModal={setModal} />
          ) : activeTab === 'Merchandise' ? (
            <MerchGrid items={items} addItem={addToCart} />
          ) : (
            <DigitalGrid items={items} paid={paidDigital} setModal={setModal} />
          )}
        </div>
      </section>

      {/* ─── Modals ─── */}
      {modal?.type === 'order' && (
        <Modal onClose={() => setModal(null)} title={`Place an order — ${modal.product.name}`}>
          <form onSubmit={handleConfirmOrder} className="space-y-4">
            <Field label="Your name"><input required className="modal-input" /></Field>
            <Field label="Email"><input type="email" required className="modal-input" /></Field>
            <Field label="Message"><textarea rows={4} className="modal-input" placeholder="Sizing, framing, delivery details..." /></Field>
            <button type="submit" className="w-full bg-accent-orange text-white py-3 rounded-full font-semibold hover:opacity-90 transition">Confirm order request</button>
          </form>
        </Modal>
      )}

      {modal?.type === 'pay-art' && (
        <Modal onClose={() => setModal(null)} title="Complete payment to unlock download">
          <p className="text-white/80 text-sm mb-5">Pay <span className="text-accent font-bold">KES {modal.product.price.toLocaleString()}</span> to unlock the high-resolution download for {modal.product.name}.</p>
          <button onClick={handleArtPayment} className="w-full bg-accent-orange text-white py-3 rounded-full font-semibold hover:opacity-90 transition">Pay & unlock download</button>
        </Modal>
      )}

      {modal?.type === 'pay-digital' && modal.planIdx !== undefined && (
        <Modal onClose={() => setModal(null)} title="Checkout">
          <p className="text-white/80 text-sm mb-2">{modal.product.name}</p>
          <p className="text-white font-display text-2xl font-bold mb-5">
            {modal.product.plans?.[modal.planIdx].name} — KES {modal.product.plans?.[modal.planIdx].price.toLocaleString()}
          </p>
          <button onClick={handleDigitalPayment} className="w-full bg-accent-orange text-white py-3 rounded-full font-semibold hover:opacity-90 transition">Pay & unlock download</button>
        </Modal>
      )}
    </div>
  );
}

/* ───────── sub-components ───────── */

function ArtsGrid({ items, paid, setModal }: { items: Product[]; paid: Set<string>; setModal: (m: ModalKind) => void }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(p => {
        const unlocked = paid.has(p.slug);
        return (
          <div key={p.slug} className="bg-background border border-border rounded-xl overflow-hidden transition hover:-translate-y-1">
            <Link to={`/marketplace/${p.slug}`} className="block aspect-[4/3] overflow-hidden bg-muted">
              <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
            </Link>
            <div className="p-5">
              <h3 className="font-display text-lg font-bold text-foreground">{p.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">by {p.creator}</p>
              <p className="text-accent font-bold mb-4">KES {p.price.toLocaleString()}</p>
              <div className="grid grid-cols-2 gap-2">
                <button onClick={() => setModal({ type: 'order', product: p })} className="bg-dt-navy text-white text-sm font-semibold py-2.5 rounded-full hover:opacity-90 transition">Place Order</button>
                {unlocked ? (
                  <a href={p.images[0]} download className="inline-flex items-center justify-center gap-1.5 bg-accent-orange text-white text-sm font-semibold py-2.5 rounded-full hover:opacity-90 transition">
                    <Download className="w-3.5 h-3.5" /> Download
                  </a>
                ) : (
                  <button onClick={() => setModal({ type: 'pay-art', product: p })} className="inline-flex items-center justify-center gap-1.5 border border-border text-foreground text-sm font-semibold py-2.5 rounded-full hover:border-accent transition">
                    <Lock className="w-3.5 h-3.5" /> Download
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function MerchGrid({ items, addItem }: { items: Product[]; addItem: (p: Product) => void }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(p => (
        <div key={p.slug} className="bg-background border border-border rounded-xl overflow-hidden transition hover:-translate-y-1">
          <Link to={`/marketplace/${p.slug}`} className="block aspect-[4/3] overflow-hidden bg-muted">
            <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
          </Link>
          <div className="p-5 flex items-center justify-between gap-3">
            <div>
              <h3 className="font-display text-lg font-bold text-foreground">{p.name}</h3>
              <p className="text-accent font-bold mt-1">KES {p.price.toLocaleString()}</p>
            </div>
            <button onClick={() => addItem(p)} className="bg-accent-orange text-white text-sm font-semibold px-4 py-2.5 rounded-full hover:opacity-90 transition">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

function DigitalGrid({ items, paid, setModal }: { items: Product[]; paid: Set<string>; setModal: (m: ModalKind) => void }) {
  return (
    <div className="space-y-12">
      {items.map(p => {
        const unlocked = paid.has(p.slug);
        return (
          <div key={p.slug} className="bg-background border border-border rounded-xl overflow-hidden">
            <div className="grid lg:grid-cols-[320px_1fr]">
              <div className="aspect-[4/3] lg:aspect-auto bg-muted overflow-hidden">
                <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">{p.name}</h3>
                <p className="text-muted-foreground mb-6">{p.description[0]}</p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {(p.plans ?? []).map((plan, idx) => {
                    const popular = idx === 1;
                    return (
                      <div key={plan.name} className={`relative p-5 rounded-xl border ${popular ? 'border-accent' : 'border-border'} bg-background`}>
                        {popular && <span className="absolute -top-2 left-5 bg-accent-orange text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">Popular</span>}
                        <p className="font-display text-lg font-bold text-foreground">{plan.name}</p>
                        <p className="font-display text-2xl font-bold text-accent my-2">KES {plan.price.toLocaleString()}</p>
                        <ul className="space-y-1.5 text-sm text-muted-foreground mb-5">
                          {plan.features.map(f => (
                            <li key={f} className="flex items-start gap-2"><Check className="w-3.5 h-3.5 text-accent mt-1 shrink-0" /> {f}</li>
                          ))}
                        </ul>
                        {unlocked ? (
                          <a href="#" download className="block text-center bg-accent-orange text-white text-sm font-semibold py-2.5 rounded-full hover:opacity-90 transition">
                            Download
                          </a>
                        ) : (
                          <button onClick={() => setModal({ type: 'pay-digital', product: p, planIdx: idx })} className={`block w-full text-center text-sm font-semibold py-2.5 rounded-full transition ${popular ? 'bg-accent-orange text-white hover:opacity-90' : 'bg-dt-navy text-white hover:opacity-90'}`}>
                            Buy Now
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-wider text-white/70 font-semibold mb-1.5">{label}</span>
      {children}
    </label>
  );
}

function Modal({ children, onClose, title }: { children: React.ReactNode; onClose: () => void; title: string }) {
  return (
    <div onClick={onClose} className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div onClick={e => e.stopPropagation()} className="relative bg-dt-navy text-white rounded-2xl max-w-md w-full p-7 border border-white/10">
        <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"><X className="w-4 h-4" /></button>
        <h3 className="font-display text-xl font-bold mb-5 pr-8">{title}</h3>
        {children}
      </div>
      <style>{`.modal-input { width:100%; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.15); color:white; padding:0.65rem 0.85rem; border-radius:0.5rem; font-size:0.875rem; outline:none; } .modal-input:focus { border-color: hsl(var(--primary)); }`}</style>
    </div>
  );
}
