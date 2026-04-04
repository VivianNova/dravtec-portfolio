import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Sun, Moon } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useTheme } from '@/hooks/useTheme';
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
  const { dark, toggle: toggleTheme } = useTheme();

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.06)]'
          : 'bg-background'
      } border-b border-border`}
    >
      <div className="container-max flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="/logo.png"
            alt="DravTech Logo"
            className="w-8 h-8 object-contain"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-[#1A1A2E] font-bold text-xl tracking-tight">DravTech</span>
            <span className="hidden sm:block text-[10px] uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors">
              {siteInfo.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              to={link.href}
              className={`relative text-sm font-medium transition-colors hover:text-primary py-1 ${
                location.pathname === link.href ? 'text-primary' : 'text-[#1A1A2E]'
              }`}
            >
              {link.label}
              {/* animated underline */}
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ${
                  location.pathname === link.href ? 'w-full' : 'w-0'
                }`}
              />
              {/* hover underline */}
              <span className="absolute bottom-0 left-0 h-[2px] bg-primary/40 transition-all duration-300 w-0 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Search form (desktop) */}
        <form onSubmit={handleSearch} className="hidden md:flex items-center gap-3">
          <input
            aria-label="Search"
            placeholder="Search..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="px-3 py-2 text-sm rounded-lg border border-[#E5E7EB] bg-white text-[#1A1A2E] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
        </form>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <Link to="/cart" className="relative text-foreground hover:text-primary transition-colors">
            <ShoppingCart className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
          <Link
            to="/demo"
            className="bg-primary text-primary-foreground px-5 py-2 text-sm font-medium rounded-full hover:bg-primary/90 transition-colors shadow-sm"
          >
            Book a Demo
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button onClick={toggleTheme} className="p-2 rounded-full text-foreground hover:bg-muted transition-colors" aria-label="Toggle theme">
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <Link to="/cart" className="relative text-foreground hover:text-primary">
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
        <div className="md:hidden border-t border-[#E5E7EB] bg-[#FAFAFA]">
          <div className="px-4 py-4 space-y-3">
            <form onSubmit={(e) => { e.preventDefault(); const q = (e.target as any).query?.value?.trim(); if (q) { (e.target as any).query.value = ''; window.location.href = `/search?query=${encodeURIComponent(q)}` } }} className="flex items-center gap-2">
              <input name="query" placeholder="Search..." className="flex-1 px-3 py-2 rounded-lg border border-[#E5E7EB] bg-white text-[#1A1A2E] placeholder:text-muted-foreground text-sm" />
              <button type="submit" className="px-3 py-2 bg-primary text-primary-foreground rounded-lg text-sm">Search</button>
            </form>
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block text-sm font-medium py-2 ${
                  location.pathname === link.href ? 'text-primary' : 'text-[#1A1A2E]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/demo"
              onClick={() => setMobileOpen(false)}
              className="block bg-primary text-primary-foreground px-4 py-2 text-sm font-medium rounded-full text-center mt-2 hover:bg-primary/90"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
