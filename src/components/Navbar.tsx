import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
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
  const location = useLocation();
  const navigate = useNavigate();
  const { itemCount } = useCart();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (q.length === 0) return;
    setSearchQuery('');
    navigate(`/search?query=${encodeURIComponent(q)}`);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 to-blue-700 backdrop-blur-md border-b border-blue-400/30 shadow-lg">
      <div className="container-max flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src="/logo.png" 
            alt="DravTech Logo" 
            className="w-8 h-8 object-contain"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-white font-bold text-xl tracking-tight">DravTech</span>
            <span className="hidden sm:block text-[10px] uppercase tracking-wider text-blue-100 group-hover:text-white transition-colors">
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
              className={`text-sm font-medium transition-colors hover:text-white ${
                location.pathname === link.href ? 'text-white' : 'text-blue-100'
              }`}
            >
              {link.label}
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
            className="px-3 py-2 text-sm rounded-md border border-blue-400/30 bg-blue-800/50 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </form>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/cart" className="relative text-blue-100 hover:text-white transition-colors">
            <ShoppingCart className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-white text-blue-600 text-[10px] font-bold rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
          <Link
            to="/demo"
            className="bg-white text-blue-600 px-4 py-2 text-sm font-medium rounded-md hover:bg-blue-50 transition-colors shadow-sm"
          >
            Book a Demo
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-3">
          <Link to="/cart" className="relative text-blue-100 hover:text-white">
            <ShoppingCart className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-white text-blue-600 text-[10px] font-bold rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-blue-400/30 bg-blue-700">
          <div className="px-4 py-4 space-y-3">
            {/* Mobile search */}
            <form onSubmit={(e) => { e.preventDefault(); const q = (e.target as any).query?.value?.trim(); if (q) { (e.target as any).query.value = ''; window.location.href = `/search?query=${encodeURIComponent(q)}` } }} className="flex items-center gap-2">
              <input name="query" placeholder="Search..." className="flex-1 px-3 py-2 rounded-md border border-blue-400/30 bg-blue-800/50 text-white placeholder:text-blue-200 text-sm" />
              <button type="submit" className="px-3 py-2 bg-white text-blue-600 rounded-md text-sm">Search</button>
            </form>
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block text-sm font-medium py-2 ${
                  location.pathname === link.href ? 'text-white' : 'text-blue-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/demo"
              onClick={() => setMobileOpen(false)}
              className="block bg-white text-blue-600 px-4 py-2 text-sm font-medium rounded-md text-center mt-2 hover:bg-blue-50"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
