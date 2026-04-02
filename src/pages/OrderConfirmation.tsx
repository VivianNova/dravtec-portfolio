import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function OrderConfirmation() {
  const orderRef = `DRV-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

  return (
    <div className="pt-16 min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <CheckCircle className="w-20 h-20 text-primary mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-foreground mb-2">Order Placed Successfully!</h1>
        <p className="text-muted-foreground mb-6">Payment confirmed via M-Pesa. You'll receive a receipt on your phone and email.</p>
        <div className="glass-card p-6 mb-6 text-left">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Order Reference</span>
            <span className="text-foreground font-mono font-semibold">{orderRef}</span>
          </div>
        </div>
        <Link to="/marketplace" className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
