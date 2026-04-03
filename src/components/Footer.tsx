import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Instagram } from 'lucide-react';
import { siteInfo } from '@/lib/data';

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

export default function Footer() {
  const socials = [
    {
      icon: TikTokIcon,
      label: 'TikTok',
      href: siteInfo.tiktokUrl,
    },
    {
      icon: Facebook,
      label: 'Facebook',
      href: siteInfo.facebookUrl,
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: siteInfo.instagramUrl,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: siteInfo.linkedinUrl,
    },
  ] as const;

  return (
    <footer className="border-t border-blue-300 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
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
            <p className="text-blue-100 text-sm uppercase tracking-wide">{siteInfo.tagline}</p>
            <p className="text-blue-200 text-sm mt-2">{siteInfo.legalName}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Quick Links</h4>
            <div className="space-y-2">
              {['Services', 'Projects', 'About', 'Marketplace', 'Demo'].map(link => (
                <Link key={link} to={`/${link.toLowerCase()}`} className="block text-blue-100 text-sm hover:text-white transition-colors">
                  {link === 'Demo' ? 'Contact' : link}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Contact</h4>
            <div className="space-y-2 text-blue-100 text-sm">
              <p>
                <a href={siteInfo.phoneHref} className="hover:text-white transition-colors">
                  {siteInfo.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={siteInfo.phoneTimetablingHref} className="hover:text-white transition-colors">
                  {siteInfo.phoneTimetablingDisplay} <span className="text-xs opacity-80">(portal line)</span>
                </a>
              </p>
              <p>
                <a href={siteInfo.whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp {siteInfo.whatsappLocal}
                </a>
              </p>
              <p>
                <a href={siteInfo.campusTimetablingUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors break-all">
                  Timetabling portal
                </a>
              </p>
              <p>{siteInfo.locations.join(' · ')}</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Follow {siteInfo.legalName}</h4>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="w-9 h-9 rounded-md border border-blue-400 flex items-center justify-center text-blue-100 hover:text-white hover:border-white hover:bg-blue-500 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-blue-400 mt-8 pt-6 text-center text-blue-200 text-xs">
          © {new Date().getFullYear()} {siteInfo.brandName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
