import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Trash2, ShoppingBag, ArrowLeft, Minus, Plus } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { state, removeItem, updateQuantity, totalItems, totalPrice } = useCart()

  return (
    <section className="pt-32 pb-20 px-4 lg:px-8 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <Link to="/collections" className="inline-flex items-center gap-2 text-periwinkle hover:text-navy transition-colors text-sm mb-4">
              <ArrowLeft size={14} /> Continue Shopping
            </Link>
            <h1 className="font-serif text-4xl text-navy">Shopping Cart</h1>
            <p className="text-navy/50 text-sm mt-1">{totalItems} {totalItems === 1 ? 'item' : 'items'}</p>
          </div>
        </div>

        {state.items.length === 0 ? (
          <div className="text-center py-32">
            <ShoppingBag size={64} className="mx-auto text-periwinkle/20 mb-6" />
            <h2 className="font-serif text-2xl text-navy mb-3">Your cart is empty</h2>
            <p className="text-navy/50 mb-8">Start building your signature wardrobe.</p>
            <Link to="/collections" className="btn-primary">Explore Collections</Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence>
                {state.items.map((item) => (
                  <motion.div
                    key={`${item.productId}-${item.size}-${item.color}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex gap-6 bg-white rounded-sm p-6 border border-navy/10"
                  >
                    <img src={item.image} alt={item.name} className="w-24 h-32 object-cover rounded-sm" />
                    <div className="flex-1">
                      <h3 className="font-serif text-lg text-navy">{item.name}</h3>
                      <p className="text-navy/40 text-sm mt-1">{item.size} / {item.color}</p>
                      <p className="text-periwinkle font-serif text-lg mt-2">{item.price.toLocaleString()} TND</p>
                      <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center border border-navy/20 rounded-sm">
                          <button
                            onClick={() => item.quantity > 1 && updateQuantity(item.productId, item.size, item.color, item.quantity - 1)}
                            className="p-2 hover:bg-navy/5 transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-4 text-sm font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.productId, item.size, item.color, item.quantity + 1)}
                            className="p-2 hover:bg-navy/5 transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.productId, item.size, item.color)}
                          className="text-navy/30 hover:text-red-500 transition-colors p-1"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-serif text-lg text-navy">{(item.price * item.quantity).toLocaleString()} TND</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div>
              <div className="bg-white rounded-sm p-8 border border-navy/10 sticky top-32">
                <h2 className="font-serif text-xl text-navy mb-6">Order Summary</h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-navy/60">
                    <span>Subtotal</span>
                    <span>{totalPrice.toLocaleString()} TND</span>
                  </div>
                  <div className="flex justify-between text-navy/60">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t border-navy/10 pt-3 flex justify-between font-serif text-lg text-navy">
                    <span>Total</span>
                    <span>{totalPrice.toLocaleString()} TND</span>
                  </div>
                </div>
                <Link to="/checkout" className="btn-primary w-full justify-center mt-8 text-sm">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
