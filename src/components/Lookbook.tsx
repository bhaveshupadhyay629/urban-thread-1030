import { LOOKBOOK_ITEMS } from '../data';
import { ArrowUpRight } from 'lucide-react';

export function Lookbook() {
  return (
    <section id="lookbook" className="py-24 sm:py-32 bg-neutral-100 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-3 block">
              Visual Campaign
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-neutral-900">
              Lookbook
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-neutral-600 max-w-md text-sm sm:text-base">
            Shot on location in Vienna. Documenting the intersection of brutalist architecture and minimalist streetwear attire.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {LOOKBOOK_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden bg-gradient-to-br ${item.imageColor} ${
                index === 0 ? 'lg:col-span-2 aspect-[16/10] lg:aspect-auto lg:h-[550px]' : 'aspect-[4/5] lg:h-[550px]'
              } flex flex-col justify-between p-8 sm:p-12 text-white shadow-xl transition-all duration-500`}
            >
              {/* Top Meta */}
              <div className="flex items-center justify-between z-10">
                <span className="bg-white/10 backdrop-blur-md text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 border border-white/10">
                  {item.tag}
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  0{index + 1} / 03
                </span>
              </div>

              {/* Center Abstract Graphic Watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                <span className="text-9xl font-extrabold tracking-tighter uppercase select-none">
                  UT1030
                </span>
              </div>

              {/* Bottom Content */}
              <div className="z-10 mt-auto pt-12">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-300 max-w-md font-light">
                      {item.subtitle}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-white text-neutral-950 rounded-full flex items-center justify-center group-hover:bg-neutral-200 transition-colors shrink-0 ml-4">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
