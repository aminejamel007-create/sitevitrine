import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, CreditCard, Check } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import { useCart } from '../context/CartContext'

export default function Checkout() {
  const { state, totalPrice, clearCart } = useCart()
  const navigate = useNavigate()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', city: '', notes: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.address) return
    setSubmitted(true)
    setTimeout(() => {
      clearCart()
      navigate('/profile')
    }, 2000)
  }

  if (state.items.length === 0 && !submitted) {
    return (
      <section className="pt-40 pb-20 px-4 text-center">
        <h1 className="font-serif text-4xl text-navy mb-4">Your cart is empty</h1>
        <Link to="/collections" className="btn-primary">Shop Now</Link>
      </section>
    )
  }

  if (submitted) {
    return (
      <section className="pt-40 pb-20 px-4 text-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check size={32} className="text-green-600" />
        </motion.div>
        <h1 className="font-serif text-4xl text-navy mb-4">Order Confirmed!</h1>
        <p className="text-navy/60 mb-8">Thank you for your order. We will contact you within 24 hours.</p>
        <Link to="/profile" className="btn-primary">View Orders</Link>
      </section>
    )
  }

  return (
    <section className="pt-32 pb-20 px-4 lg:px-8 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <Link to="/cart" className="inline-flex items-center gap-2 text-periwinkle hover:text-navy transition-colors text-sm mb-8">
          <ArrowLeft size={14} /> Back to Cart
        </Link>
        <h1 className="font-serif text-4xl text-navy mb-12">Checkout</h1>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-navy/60">Full Name</label>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full mt-1 px-4 py-3 border border-navy/20 rounded-sm bg-white text-navy text-sm focus:outline-none focus:border-periwinkle transition-colors" placeholder="Youssef Ben Amor" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-navy/60">Email</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full mt-1 px-4 py-3 border border-navy/20 rounded-sm bg-white text-navy text-sm focus:outline-none focus:border-periwinkle transition-colors" placeholder="youssef@example.com" />
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-navy/60">Phone</label>
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full mt-1 px-4 py-3 border border-navy/20 rounded-sm bg-white text-navy text-sm focus:outline-none focus:border-periwinkle transition-colors" placeholder="+216 25 944 398" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-navy/60">Address</label>
                <input required value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className="w-full mt-1 px-4 py-3 border border-navy/20 rounded-sm bg-white text-navy text-sm focus:outline-none focus:border-periwinkle transition-colors" placeholder="Sahloul 4, Sousse" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-navy/60">City</label>
                  <input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="w-full mt-1 px-4 py-3 border border-navy/20 rounded-sm bg-white text-navy text-sm focus:outline-none focus:border-periwinkle transition-colors" placeholder="Sousse" />
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-navy/60">Order Notes</label>
                <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className="w-full mt-1 px-4 py-3 border border-navy/20 rounded-sm bg-white text-navy text-sm focus:outline-none focus:border-periwinkle transition-colors min-h-[100px]" placeholder="Any special requests or notes..." />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                <CreditCard size={16} /> Place Order — {totalPrice.toLocaleString()} TND
              </button>
            </form>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-sm p-6 border border-navy/10 sticky top-32">
              <h3 className="font-serif text-lg text-navy mb-4">Order Summary</h3>
              <div className="space-y-3">
                {state.items.map((item) => (
                  <div key={`${item.productId}-${item.size}-${item.color}`} className="flex items-center gap-3 text-sm">
                    <img src={item.image} alt={item.name} className="w-12 h-16 object-cover rounded-sm" />
                    <div className="flex-1 min-w-0">
                      <p className="text-navy truncate">{item.name}</p>
                      <p className="text-navy/40 text-xs">{item.size} / {item.color} × {item.quantity}</p>
                    </div>
                    <span className="text-navy font-medium">{(item.price * item.quantity).toLocaleString()} TND</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-navy/10 mt-4 pt-4 flex justify-between font-serif text-lg text-navy">
                <span>Total</span>
                <span>{totalPrice.toLocaleString()} TND</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
