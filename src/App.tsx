import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { NewArrivals } from './components/NewArrivals';
import { Lookbook } from './components/Lookbook';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PRODUCTS, type Product } from './data';
import { X, Trash2, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}

export function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'success'>('cart');

  const handleAddToCart = (product: Product, size?: string) => {
    const chosenSize = size || product.sizes[0] || 'M';
    setCartItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.id === product.id && item.selectedSize === chosenSize
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prev, { ...product, quantity: 1, selectedSize: chosenSize }];
    });
    setIsCartOpen(true);
    setCheckoutStep('cart');
  };

  const handleUpdateQuantity = (id: string, size: string, delta: number) => {
    setCartItems(prev =>
      prev
        .map(item => {
          if (item.id === id && item.selectedSize === size) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string, size: string) => {
    setCartItems(prev => prev.filter(item => !(item.id === id && item.selectedSize === size)));
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      <title>Urban Thread 1030</title>

      {/* Header */}
      <Header cartCount={totalCartCount} onOpenCart={() => setIsCartOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <NewArrivals products={PRODUCTS} onAddToCart={(p) => handleAddToCart(p)} />
        <Lookbook />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-Over Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsCartOpen(false)}
          />

          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white text-neutral-900 shadow-2xl flex flex-col">
              {/* Drawer Header */}
              <div className="px-6 py-6 border-b border-neutral-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  <h2 className="text-lg font-extrabold uppercase tracking-tight">
                    Your Cart ({totalCartCount})
                  </h2>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  aria-label="Close cart"
                  className="p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Body */}
              <div className="flex-1 overflow-y-auto px-6 py-6">
                {checkoutStep === 'success' ? (
                  <div className="text-center py-16 space-y-4">
                    <div className="w-16 h-16 bg-neutral-900 text-white rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-extrabold uppercase tracking-tight">Order Confirmed</h3>
                    <p className="text-sm text-neutral-600 max-w-xs mx-auto">
                      Thank you for shopping with Urban Thread 1030. Your order is being prepared in District 1030.
                    </p>
                    <button
                      onClick={() => {
                        setCartItems([]);
                        setCheckoutStep('cart');
                        setIsCartOpen(false);
                      }}
                      className="mt-6 bg-neutral-950 text-white px-8 py-3 text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : cartItems.length === 0 ? (
                  <div className="text-center py-20 space-y-4">
                    <div className="w-16 h-16 bg-neutral-100 text-neutral-400 rounded-full flex items-center justify-center mx-auto">
                      <ShoppingBag className="w-6 h-6" />
                    </div>
                    <p className="text-sm text-neutral-500 uppercase tracking-widest">Your cart is currently empty</p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="inline-block bg-neutral-950 text-white px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                    >
                      Explore New Arrivals
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div
                        key={`${item.id}-${item.selectedSize}`}
                        className="flex gap-4 pb-6 border-b border-neutral-100 items-start"
                      >
                        <div className={`w-20 h-24 bg-gradient-to-br ${item.imageColor} shrink-0 flex items-center justify-center text-white/30 font-bold text-xl`}>
                          UT
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <h4 className="font-bold text-sm uppercase text-neutral-900 truncate">
                              {item.name}
                            </h4>
                            <span className="font-mono text-sm font-bold ml-2">
                              €{item.price * item.quantity}
                            </span>
                          </div>
                          <p className="text-xs text-neutral-500 mt-1">
                            Size: <span className="font-mono font-semibold text-neutral-900">{item.selectedSize}</span>
                          </p>

                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center border border-neutral-200">
                              <button
                                onClick={() => handleUpdateQuantity(item.id, item.selectedSize, -1)}
                                className="px-2.5 py-1 text-xs hover:bg-neutral-100 transition-colors"
                              >
                                -
                              </button>
                              <span className="px-3 py-1 text-xs font-mono font-bold">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => handleUpdateQuantity(item.id, item.selectedSize, 1)}
                                className="px-2.5 py-1 text-xs hover:bg-neutral-100 transition-colors"
                              >
                                +
                              </button>
                            </div>
                            <button
                              onClick={() => handleRemoveItem(item.id, item.selectedSize)}
                              className="text-neutral-400 hover:text-red-600 transition-colors p-1"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Drawer Footer */}
              {cartItems.length > 0 && checkoutStep === 'cart' && (
                <div className="border-t border-neutral-200 px-6 py-6 bg-neutral-50 space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-neutral-600">
                      <span>Subtotal</span>
                      <span className="font-mono font-semibold">€{subtotal}</span>
                    </div>
                    <div className="flex justify-between text-neutral-600">
                      <span>Shipping (District 1030 / Worldwide)</span>
                      <span className="font-mono font-semibold">
                        {subtotal >= 150 ? 'FREE' : '€15'}
                      </span>
                    </div>
                    <div className="flex justify-between text-base font-bold text-neutral-900 pt-2 border-t border-neutral-200">
                      <span>Total</span>
                      <span className="font-mono">€{subtotal >= 150 ? subtotal : subtotal + 15}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setCheckoutStep('success')}
                    className="w-full bg-neutral-950 hover:bg-neutral-800 text-white py-4 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    Proceed to Checkout
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-center text-neutral-500 uppercase tracking-widest">
                    Encrypted SSL Secure Checkout
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
