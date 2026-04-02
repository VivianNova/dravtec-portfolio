import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">D</span>
              </div>
              <span className="text-foreground font-bold text-lg">DravTech</span>
            </Link>
            <p className="text-muted-foreground text-sm">Building digital products that matter.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold text-sm mb-3">Quick Links</h4>
            <div className="space-y-2">
              {['Services', 'Projects', 'About', 'Marketplace', 'Demo'].map(link => (
                <Link key={link} to={`/${link.toLowerCase()}`} className="block text-muted-foreground text-sm hover:text-primary transition-colors">
                  {link === 'Demo' ? 'Contact' : link}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold text-sm mb-3">Contact</h4>
            <div className="space-y-2 text-muted-foreground text-sm">
              <p>hello@dravtech.com</p>
              <p>+254 700 123 456</p>
              <p>Nairobi, Kenya</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-foreground font-semibold text-sm mb-3">Follow Us</h4>
            <div className="flex gap-3">
              {[
                { icon: Github, label: 'GitHub' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Instagram, label: 'Instagram' },
              ].map(({ icon: Icon, label }) => (
                <a key={label} href="#" className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-muted-foreground text-xs">
          © {new Date().getFullYear()} DravTech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
