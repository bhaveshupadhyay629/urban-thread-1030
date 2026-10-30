import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { Product } from '../data';

export interface CartItem {
  product: Product;
  selectedSize: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, size: string, delta: number) => void;
  onRemoveItem: (productId: string, size: string) => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem
}: CartDrawerProps) {
  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shipping = subtotal >= 150 || subtotal === 0 ? 0 : 15;
  const total = subtotal + (subtotal > 0 ? shipping : 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-neutral-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white text-neutral-900 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="px-6 py-6 border-b border-neutral-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              <h2 className="text-lg font-extrabold uppercase tracking-tight">Your Cart ({items.reduce((acc, i) => acc + i.quantity, 0)})</h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Close cart"
              className="p-2 rounded-lg hover:bg-neutral-100 transition-colors text-neutral-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress */}
          <div className="bg-neutral-100 px-6 py-3 border-b border-neutral-200 text-xs">
            {subtotal >= 150 ? (
              <p className="text-emerald-700 font-semibold uppercase tracking-wider text-center">
                Free Express Worldwide Shipping Unlocked!
              </p>
            ) : (
              <p className="text-neutral-600 text-center">
                Add <span className="font-bold text-neutral-900 font-mono">€{150 - subtotal}</span> more for free worldwide shipping.
              </p>
            )}
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto px-6 py-6 divide-y divide-neutral-200">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-neutral-500 py-16">
                <ShoppingBag className="w-16 h-16 stroke-1 mb-4 text-neutral-300" />
                <p className="text-base font-medium uppercase tracking-wider text-neutral-800">Your cart is empty</p>
                <p className="text-xs text-neutral-500 mt-1 max-w-xs">Explore our latest collection drops and add items to your cart.</p>
                <button
                  onClick={onClose}
                  className="mt-6 bg-neutral-950 text-white px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={`${item.product.id}-${item.selectedSize}`} className="flex gap-4 items-start py-4">
                  <div className={`w-20 h-24 bg-gradient-to-br ${item.product.imageColor} rounded-none shrink-0 flex items-center justify-center`}>
                    <span className="text-white/30 font-bold text-lg">UT</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="text-sm font-bold uppercase text-neutral-900">{item.product.name}</h3>
                      <button
                        onClick={() => onRemoveItem(item.product.id, item.selectedSize)}
                        aria-label="Remove item"
                        className="text-neutral-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-neutral-500 mt-0.5">Size: <span className="font-semibold text-neutral-700">{item.selectedSize}</span></p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-neutral-300">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, -1)}
                          className="px-2.5 py-1 text-xs hover:bg-neutral-100 transition-colors"
                        >
                          -
                        </button>
                        <span className="px-3 py-1 text-xs font-mono font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, 1)}
                          className="px-2.5 py-1 text-xs hover:bg-neutral-100 transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-sm font-bold font-mono text-neutral-900">€{item.product.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {items.length > 0 && (
            <div className="border-t border-neutral-200 px-6 py-6 bg-neutral-50 space-y-4">
              <div className="space-y-2 text-sm text-neutral-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono text-neutral-900 font-semibold">€{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-mono text-neutral-900 font-semibold">
                    {shipping === 0 ? 'FREE' : `€${shipping}`}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-neutral-200 text-base font-bold text-neutral-900 uppercase">
                  <span>Total</span>
                  <span className="font-mono">€{total}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  alert('Thank you for your order at Urban Thread 1030! Checkout demo completed.');
                }}
                className="w-full bg-neutral-950 hover:bg-neutral-800 text-white py-4 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors shadow-lg cursor-pointer"
              >
                Proceed to Secure Checkout
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[10px] text-center text-neutral-500 uppercase tracking-wider">
                Secure 256-bit Encrypted Checkout
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
