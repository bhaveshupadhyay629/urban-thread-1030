import { ArrowRight, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-neutral-950 text-white overflow-hidden py-24 sm:py-32 lg:py-40">
      {/* Subtle background abstract monochrome gradient */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_30%,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-950 to-black pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs font-medium tracking-wide uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Spring / Summer 2025 Collection
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase leading-[1.05] mb-6">
            Industrial Minimalist <span className="text-neutral-500 font-light">Streetwear.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-neutral-400 font-normal leading-relaxed mb-10 max-w-2xl">
            Designed in District 1030. Heavyweight cottons, architectural silhouettes, and uncompromising monochrome precision for the modern urban landscape.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#arrivals"
              className="inline-flex items-center justify-center gap-3 bg-white text-neutral-950 hover:bg-neutral-200 px-8 py-4 rounded-none font-semibold text-sm uppercase tracking-wider transition-all shadow-lg cursor-pointer"
            >
              Shop Now
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#lookbook"
              className="inline-flex items-center justify-center gap-3 bg-transparent hover:bg-neutral-900 text-white border border-neutral-700 px-8 py-4 rounded-none font-semibold text-sm uppercase tracking-wider transition-all cursor-pointer"
            >
              Explore Lookbook
            </a>
          </div>
        </div>

        {/* Feature Highlights Bar */}
        <div className="mt-20 pt-12 border-t border-neutral-900 grid grid-cols-1 sm:grid-cols-3 gap-8 text-neutral-400">
          <div className="flex items-center gap-3">
            <Truck className="w-5 h-5 text-white shrink-0" />
            <div>
              <h3 className="text-white text-sm font-semibold uppercase">Worldwide Shipping</h3>
              <p className="text-xs text-neutral-500">Free express delivery over €150</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-white shrink-0" />
            <div>
              <h3 className="text-white text-sm font-semibold uppercase">Secure Checkout</h3>
              <p className="text-xs text-neutral-500">Encrypted payment gateways</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <RefreshCw className="w-5 h-5 text-white shrink-0" />
            <div>
              <h3 className="text-white text-sm font-semibold uppercase">30-Day Returns</h3>
              <p className="text-xs text-neutral-500">Hassle-free size exchanges</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
