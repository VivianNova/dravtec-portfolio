import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Marketplace', href: '/marketplace' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { itemCount } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container-max flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">D</span>
          </div>
          <span className="text-foreground font-bold text-xl">DravTech</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.href ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/cart" className="relative text-muted-foreground hover:text-foreground transition-colors">
            <ShoppingCart className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
          <Link
            to="/demo"
            className="bg-primary text-primary-foreground px-4 py-2 text-sm font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            Book a Demo
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-3">
          <Link to="/cart" className="relative text-muted-foreground hover:text-foreground">
            <ShoppingCart className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block text-sm font-medium py-2 ${
                  location.pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/demo"
              onClick={() => setMobileOpen(false)}
              className="block bg-primary text-primary-foreground px-4 py-2 text-sm font-medium rounded-md text-center mt-2"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
