import { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '@/lib/data';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedPlan?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, plan?: string) => void;
  removeFromCart: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product, plan?: string) => {
    setItems(prev => {
      const existing = prev.find(i => i.product.slug === product.slug && i.selectedPlan === plan);
      if (existing) {
        return prev.map(i =>
          i.product.slug === product.slug && i.selectedPlan === plan
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { product, quantity: 1, selectedPlan: plan }];
    });
  };

  const removeFromCart = (slug: string) => {
    setItems(prev => prev.filter(i => i.product.slug !== slug));
  };

  const updateQuantity = (slug: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(slug);
      return;
    }
    setItems(prev => prev.map(i => i.product.slug === slug ? { ...i, quantity } : i));
  };

  const clearCart = () => setItems([]);

  const total = items.reduce((sum, item) => {
    if (item.selectedPlan && item.product.plans) {
      const plan = item.product.plans.find(p => p.name === item.selectedPlan);
      return sum + (plan?.price || item.product.price) * item.quantity;
    }
    return sum + item.product.price * item.quantity;
  }, 0);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, total, itemCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
