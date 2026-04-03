import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { siteInfo } from '@/lib/data';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Marketplace', href: '/marketplace' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { itemCount } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (q.length === 0) return;
    setSearchQuery('');
    navigate(`/search?query=${encodeURIComponent(q)}`);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b border-border transition-all duration-300 ${scrolled ? 'navbar-scrolled' : 'bg-background/90 backdrop-blur-md'}`}>
      <div className="container-max flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          {/* Rotating geometric icon */}
          <div className="relative w-8 h-8">
            <svg viewBox="0 0 32 32" className="w-8 h-8 animate-[spin_12s_linear_infinite]">
              <polygon points="16,2 28,9 28,23 16,30 4,23 4,9" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" />
              <polygon points="16,6 24,11 24,21 16,26 8,21 8,11" fill="hsl(var(--poster-navy))" />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-primary-foreground font-bold text-xs">D</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-foreground font-bold text-xl tracking-tight">DravTech</span>
            <span className="hidden sm:block text-[10px] uppercase tracking-wider text-muted-foreground group-hover:text-primary/80 transition-colors">
              {siteInfo.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop nav with active underline */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              to={link.href}
              className={`relative text-sm font-medium transition-colors hover:text-primary pb-1 ${
                location.pathname === link.href ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {link.label}
              {location.pathname === link.href && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full transition-all" />
              )}
            </Link>
          ))}
        </div>

        {/* Search form (desktop) */}
        <form onSubmit={handleSearch} className="hidden md:flex items-center gap-3">
          <input
            aria-label="Search"
            placeholder="Search projects, services..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="px-3 py-2 text-sm rounded-md border border-border bg-background/60 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </form>

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
            className="btn-shimmer bg-poster-purple text-white px-4 py-2 text-sm font-medium rounded-md hover:opacity-90 transition-opacity shadow-sm"
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
            <form onSubmit={(e) => { e.preventDefault(); const q = (e.target as any).query?.value?.trim(); if (q) { (e.target as any).query.value = ''; window.location.href = `/search?query=${encodeURIComponent(q)}` } }} className="flex items-center gap-2">
              <input name="query" placeholder="Search..." className="flex-1 px-3 py-2 rounded-md border border-border bg-background/60 text-sm" />
              <button type="submit" className="px-3 py-2 bg-primary text-white rounded-md text-sm">Search</button>
            </form>
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
              className="block bg-poster-purple text-white px-4 py-2 text-sm font-medium rounded-md text-center mt-2 hover:opacity-90"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
