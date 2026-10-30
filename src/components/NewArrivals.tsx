import type { Product } from '../data';
import { Plus } from 'lucide-react';

interface NewArrivalsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export function NewArrivals({ products, onAddToCart }: NewArrivalsProps) {
  return (
    <section id="arrivals" className="py-24 sm:py-32 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-3 block">
              Curated Drops
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-neutral-900">
              New Arrivals
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-neutral-600 max-w-md text-sm sm:text-base">
            Engineered for durability and clean lines. Explore our latest heavyweight cottons and technical outerwear pieces.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col">
              {/* Product Visual Card */}
              <div className={`relative aspect-[4/5] bg-gradient-to-br ${product.imageColor} rounded-none overflow-hidden flex items-center justify-center p-8 transition-transform duration-500`}>
                {/* Tag Badge */}
                {product.tag && (
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-neutral-900 text-[10px] uppercase font-bold tracking-widest px-2.5 py-1">
                    {product.tag}
                  </span>
                )}

                {/* Abstract Minimalist Monogram / Graphic Representation */}
                <div className="text-center group-hover:scale-105 transition-transform duration-500">
                  <span className="text-white/20 font-extrabold text-7xl sm:text-8xl tracking-tighter select-none block">
                    UT
                  </span>
                  <span className="text-white/60 text-xs uppercase tracking-[0.3em] font-mono mt-2 block">
                    {product.category}
                  </span>
                </div>

                {/* Quick Add Overlay Button */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-150 transition-opacity duration-300 flex items-center justify-between">
                  <div className="text-white text-xs font-medium">
                    Sizes: {product.sizes.join(", ")}
                  </div>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="bg-white hover:bg-neutral-200 text-neutral-950 px-4 py-2 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Add
                  </button>
                </div>
              </div>

              {/* Product Details */}
              <div className="mt-5 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 uppercase">
                    {product.name}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1 line-clamp-1">
                    {product.description}
                  </p>
                </div>
                <span className="text-lg font-bold text-neutral-900 font-mono ml-4">
                  €{product.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Full Collection Anchor */}
        <div id="shop" className="mt-20 text-center pt-16 border-t border-neutral-100">
          <p className="text-sm text-neutral-500 uppercase tracking-widest mb-4">
            Looking for more architectural silhouettes?
          </p>
          <a
            href="#shop"
            onClick={(e) => {
              e.preventDefault();
              const firstProductBtn = document.querySelector('button[aria-label="Open cart"]') as HTMLElement;
              firstProductBtn?.click();
            }}
            className="inline-flex items-center justify-center bg-neutral-950 hover:bg-neutral-800 text-white px-8 py-4 font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer"
          >
            Browse Full Inventory
          </a>
        </div>
      </div>
    </section>
  );
}
