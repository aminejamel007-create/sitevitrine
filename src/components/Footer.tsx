import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react'
import AnimatedHatLogo from './AnimatedHatLogo'
import { siteInfo } from '../data/content'
import { Code } from 'lucide-react'

const links = {
  collections: [
    { label: 'Suits & Blazers', path: '/collections' },
    { label: 'Shirts & Knitwear', path: '/collections' },
    { label: 'Wedding & Formalwear', path: '/collections' },
    { label: 'Bespoke Tailoring', path: '/collections' },
    { label: 'Outerwear & Overcoats', path: '/collections' },
    { label: 'Accessories', path: '/collections' },
  ],
  quick: [
    { label: 'About', path: '/about' },
    { label: 'Lookbook', path: '/lookbook' },
    { label: 'Journal', path: '/journal' },
    { label: 'Contact', path: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-5 group">
              <AnimatedHatLogo size={28} />
              <span className="font-serif text-lg text-white tracking-wide">
                Monsieur <span className="text-periwinkle">Style</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-white/60">
              Precision tailoring for a life well-dressed. Our Sousse atelier has been crafting exceptional menswear for over two decades.
            </p>
            <div className="flex gap-3">
              <a href={siteInfo.social.instagram} className="p-2.5 border border-white/20 rounded-full text-white/60 hover:text-periwinkle hover:border-periwinkle transition-all" aria-label="Instagram"><Instagram size={16} /></a>
              <a href={siteInfo.social.facebook} className="p-2.5 border border-white/20 rounded-full text-white/60 hover:text-periwinkle hover:border-periwinkle transition-all" aria-label="Facebook"><Facebook size={16} /></a>
              <a href={siteInfo.social.linkedin} className="p-2.5 border border-white/20 rounded-full text-white/60 hover:text-periwinkle hover:border-periwinkle transition-all" aria-label="LinkedIn"><Linkedin size={16} /></a>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-serif text-white text-lg mb-6">Collections</h4>
            <ul className="space-y-3">
              {links.collections.map((l) => (
                <li key={l.label}>
                  <Link to={l.path} className="text-sm hover:text-periwinkle transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-periwinkle after:w-0 hover:after:w-full after:transition-all">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-white text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {links.quick.map((l) => (
                <li key={l.label}>
                  <Link to={l.path} className="text-sm hover:text-periwinkle transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-white text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={15} className="text-periwinkle mt-0.5 shrink-0" />
                {siteInfo.address}
              </li>
              <li>
                <a href={`tel:${siteInfo.phone}`} className="flex items-center gap-3 text-sm hover:text-periwinkle transition-colors">
                  <Phone size={15} className="text-periwinkle shrink-0" />
                  {siteInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteInfo.email}`} className="flex items-center gap-3 text-sm hover:text-periwinkle transition-colors">
                  <Mail size={15} className="text-periwinkle shrink-0" />
                  {siteInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-white/40">
          <span>{siteInfo.copyright}</span>
          <span className="flex items-center gap-1">
            <Code size={12} /> Built by{' '}
            <a href={siteInfo.developer.url} target="_blank" rel="noopener noreferrer" className="text-periwinkle hover:text-white transition-colors">
              {siteInfo.developer.name}
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
