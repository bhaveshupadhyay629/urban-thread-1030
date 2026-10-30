import { MapPin, Clock, Mail, Phone } from 'lucide-react';
import { STORE_INFO } from '../data';

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Brand Ethos */}
          <div>
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-3 block">
              Flagship & Philosophy
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-neutral-900 mb-6">
              Rooted in District 1030.
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Founded in Vienna’s vibrant 3rd district, <span className="font-semibold text-neutral-900">Urban Thread 1030</span> was born out of a desire for uncompromising quality, clean brutalist lines, and functional streetwear aesthetics. 
            </p>
            <p className="text-neutral-600 leading-relaxed mb-8">
              We source heavyweight Japanese and European cottons, crafting garments that endure the test of urban exploration while maintaining an effortless, minimalist silhouette. Every piece is designed in small-batch runs to ensure exclusivity and meticulous craftsmanship.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-neutral-200">
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-neutral-900 font-mono">320+</span>
                <span className="text-xs uppercase tracking-wider text-neutral-500 mt-1 block">GSM Heavy Cotton</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-neutral-900 font-mono">100%</span>
                <span className="text-xs uppercase tracking-wider text-neutral-500 mt-1 block">Sourced in EU & Asia</span>
              </div>
            </div>
          </div>

          {/* Right Column: Store Location & Hours Card */}
          <div className="bg-neutral-950 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            {/* Subtle background detail */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-neutral-900/50 rounded-full blur-3xl pointer-events-none" />

            <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight mb-6">
              Visit The Store
            </h3>

            <div className="space-y-6 text-neutral-300 text-sm">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-white shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-1">Location</h4>
                  <p>{STORE_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-white shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-1">Opening Hours</h4>
                  <ul className="space-y-1">
                    {STORE_INFO.hours.map((h, i) => (
                      <li key={i} className="flex justify-between gap-8">
                        <span className="text-neutral-400">{h.days}</span>
                        <span className="font-mono text-white">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
                  <span className="text-xs font-mono">{STORE_INFO.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-neutral-400 shrink-0" />
                  <span className="text-xs font-mono">{STORE_INFO.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
