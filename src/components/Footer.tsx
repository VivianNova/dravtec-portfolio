import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Phone, Mail, Globe, MapPin } from 'lucide-react';
import { siteInfo } from '@/lib/data';

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

export default function Footer() {
  const socials = [
    { icon: TikTokIcon, label: 'TikTok', href: siteInfo.tiktokUrl },
    { icon: FacebookIcon, label: 'Facebook', href: siteInfo.facebookUrl },
    { icon: Instagram, label: 'Instagram', href: siteInfo.instagramUrl },
    { icon: Linkedin, label: 'LinkedIn', href: siteInfo.linkedinUrl },
  ] as const;

  return (
    <footer className="border-t border-white/[0.08] bg-[#0F172A] text-white">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-3">
              <img
                src="/logo.png"
                alt="DravTech Logo"
                className="w-7 h-7 object-contain"
              />
              <span className="text-white font-bold text-lg">{siteInfo.brandName}</span>
            </Link>
            <p className="text-gray-400 text-sm">{siteInfo.tagline}</p>
            <p className="text-gray-500 text-sm mt-2">{siteInfo.legalName}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Quick Links</h4>
            <div className="space-y-2">
              {['Services', 'Projects', 'About', 'Marketplace', 'Demo'].map(link => (
                <Link key={link} to={`/${link.toLowerCase()}`} className="block text-gray-300 text-sm hover:text-primary transition-colors">
                  {link === 'Demo' ? 'Contact' : link}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Contact</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-primary" />
                <a href={siteInfo.phoneHref} className="hover:text-white transition-colors">
                  {siteInfo.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-primary" />
                <a href={siteInfo.phoneTimetablingHref} className="hover:text-white transition-colors">
                  {siteInfo.phoneTimetablingDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-primary" />
                <a href={`mailto:${siteInfo.email}`} className="hover:text-white transition-colors">
                  {siteInfo.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-primary" />
                <a href={siteInfo.campusTimetablingUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Timetabling portal
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span>{siteInfo.locations.join(' · ')}</span>
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Follow Us</h4>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-gray-700 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} {siteInfo.brandName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
