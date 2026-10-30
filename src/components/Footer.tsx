import { Mail, Globe, Link as LinkIcon, Phone } from 'lucide-react';
import { STORE_INFO } from '../data';

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-neutral-800">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-extrabold text-xl sm:text-2xl uppercase tracking-tight block">
              Urban Thread <span className="font-light text-neutral-400">1030</span>
            </span>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Industrial minimalist streetwear designed and curated in District 1030, Vienna. Uncompromising monochrome craftsmanship.
            </p>
            <div className="pt-2 flex items-center space-x-4 text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5" /> Vienna, AT
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" /> {STORE_INFO.email}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <a href="#arrivals" className="hover:text-white transition-colors">New Arrivals</a>
              </li>
              <li>
                <a href="#shop" className="hover:text-white transition-colors">Collection</a>
              </li>
              <li>
                <a href="#lookbook" className="hover:text-white transition-colors">Lookbook</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">Store Info</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Customer Care
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Shipping & Returns</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Size Guide</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Track Order</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Legal / Social */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Connect
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <a href="#contact" className="hover:text-white transition-colors flex items-center gap-2">
                  <LinkIcon className="w-3.5 h-3.5" /> Instagram Editorial
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors flex items-center gap-2">
                  <LinkIcon className="w-3.5 h-3.5" /> Community Archive
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5" /> {STORE_INFO.phone}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Urban Thread 1030. All rights reserved.</p>
          <p className="mt-4 sm:mt-0 font-mono text-[11px]">
            Designed with minimalist precision in Vienna.
          </p>
        </div>
      </div>
    </footer>
  );
}
