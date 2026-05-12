import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, ShoppingCart, Sun, Moon } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useTheme } from '@/hooks/useTheme';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/#who-we-are' },
  { label: 'Marketplace', href: '/marketplace' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { itemCount } = useCart();
  const { dark, toggle: toggleTheme } = useTheme();

  const isActive = (href: string) => {
    if (href.startsWith('/#')) return location.pathname === '/' && location.hash === href.slice(1);
    return location.pathname === href;
  };

  const handleAboutClick = (e: React.MouseEvent, href: string) => {
    if (href === '/#who-we-are') {
      e.preventDefault();
      setMobileOpen(false);
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.getElementById('who-we-are')?.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      } else {
        document.getElementById('who-we-are')?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="relative z-40 bg-dt-navy text-white">
      <div className="container-max flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-accent-orange flex items-center justify-center font-display font-bold text-white text-sm">DT</div>
          <span className="font-display font-bold text-xl tracking-tight text-white">DravTech</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              to={link.href}
              onClick={(e) => handleAboutClick(e, link.href)}
              className={`nav-underline text-sm font-medium transition-colors hover:text-white/90 ${isActive(link.href) ? 'text-white active' : 'text-white/80'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition" aria-label="Toggle theme">
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <Link to="/cart" className="relative text-white/85 hover:text-white transition">
            <ShoppingCart className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-accent-orange text-white text-[10px] font-bold rounded-full flex items-center justify-center">{itemCount}</span>
            )}
          </Link>
          <Link to="/demo" className="bg-accent-orange text-white px-5 py-2 text-sm font-medium rounded-full hover:opacity-90 transition">
            Book a Demo
          </Link>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button onClick={toggleTheme} className="p-2 text-white/80" aria-label="Toggle theme">
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <Link to="/cart" className="relative text-white/85"><ShoppingCart className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-accent-orange text-white text-[10px] font-bold rounded-full flex items-center justify-center">{itemCount}</span>
            )}
          </Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-dt-navy-2">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                onClick={(e) => { handleAboutClick(e, link.href); setMobileOpen(false); }}
                className={`block text-sm font-medium py-2 ${isActive(link.href) ? 'text-accent' : 'text-white/85'}`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/demo" onClick={() => setMobileOpen(false)} className="block bg-accent-orange text-white px-4 py-2 text-sm font-medium rounded-full text-center">
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
