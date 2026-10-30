import { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

export function Header({ cartCount, onOpenCart }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="font-bold tracking-tight text-xl sm:text-2xl text-neutral-900 uppercase">
          Urban Thread <span className="font-light text-neutral-500">1030</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-neutral-700">
          <a href="#arrivals" className="hover:text-neutral-900 transition-colors">New Arrivals</a>
          <a href="#shop" className="hover:text-neutral-900 transition-colors">Collection</a>
          <a href="#lookbook" className="hover:text-neutral-900 transition-colors">Lookbook</a>
          <a href="#about" className="hover:text-neutral-900 transition-colors">Store</a>
          <a href="#contact" className="hover:text-neutral-900 transition-colors">Contact</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onOpenCart}
            aria-label="Open cart"
            className="relative p-2.5 rounded-full hover:bg-neutral-100 transition-colors text-neutral-900 flex items-center gap-2 cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="hidden sm:inline text-xs font-semibold">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-neutral-900 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2.5 rounded-lg hover:bg-neutral-100 transition-colors text-neutral-900"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-6 py-6 space-y-4 shadow-xl">
          <a
            href="#arrivals"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium text-neutral-900 hover:text-neutral-600"
          >
            New Arrivals
          </a>
          <a
            href="#shop"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium text-neutral-900 hover:text-neutral-600"
          >
            Collection
          </a>
          <a
            href="#lookbook"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium text-neutral-900 hover:text-neutral-600"
          >
            Lookbook
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium text-neutral-900 hover:text-neutral-600"
          >
            Store
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-medium text-neutral-900 hover:text-neutral-600"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
