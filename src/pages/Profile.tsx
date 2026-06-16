import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { User, Package, MapPin, LogOut } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const initialOrders = [
  { id: 'MS-001', date: 'June 10, 2026', items: [{ name: 'Navy Tailored Business Suit', size: '50', color: 'Navy', qty: 1, price: 1200 }], total: 1200, status: 'In Production' },
  { id: 'MS-002', date: 'May 22, 2026', items: [{ name: 'Bespoke Tailored Shirt', size: 'Custom', color: 'White', qty: 2, price: 350 }], total: 700, status: 'Delivered' },
]

export default function Profile() {
  const [orders] = useState(initialOrders)
  const [profile, setProfile] = useState({ name: 'Youssef Ben Amor', email: 'youssef@example.com', phone: '+216 25 944 398', address: 'Sahloul 4, Sousse' })
  const [editing, setEditing] = useState(false)

  return (
    <section className="pt-32 pb-20 px-4 lg:px-8 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-16 h-16 rounded-full bg-periwinkle/20 flex items-center justify-center">
            <User size={28} className="text-periwinkle" />
          </div>
          <div>
            <h1 className="font-serif text-4xl text-navy">My Account</h1>
            <p className="text-navy/50 text-sm">{profile.name}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <AnimatedSection>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-2xl text-navy flex items-center gap-2">
                  <Package size={20} className="text-periwinkle" /> Order History
                </h2>
              </div>
              {orders.length === 0 ? (
                <p className="text-navy/50">No orders yet.</p>
              ) : (
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="bg-white rounded-sm p-6 border border-navy/10">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="font-serif text-lg text-navy">{order.id}</span>
                          <span className="text-navy/40 text-sm ml-4">{order.date}</span>
                        </div>
                        <span className={`text-xs uppercase tracking-wider px-3 py-1 rounded-full ${
                          order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      {order.items.map((item, i) => (
                        <div key={i} className="flex items-center justify-between text-sm py-2 border-t border-navy/5">
                          <span className="text-navy">{item.name} — {item.size}, {item.color} × {item.qty}</span>
                          <span className="text-navy/60">{item.price} TND</span>
                        </div>
                      ))}
                      <div className="flex justify-between text-navy font-serif text-lg border-t border-navy/10 pt-3 mt-2">
                        <span>Total</span>
                        <span>{order.total.toLocaleString()} TND</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </AnimatedSection>
          </div>

          <div>
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-sm p-6 border border-navy/10 sticky top-32">
                <h2 className="font-serif text-xl text-navy flex items-center gap-2 mb-6">
                  <MapPin size={18} className="text-periwinkle" /> Profile
                </h2>
                {editing ? (
                  <div className="space-y-4">
                    <input value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} className="w-full px-3 py-2 border border-navy/20 rounded-sm text-sm" />
                    <input value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} className="w-full px-3 py-2 border border-navy/20 rounded-sm text-sm" />
                    <input value={profile.phone} onChange={(e) => setProfile({ ...profile, phone: e.target.value })} className="w-full px-3 py-2 border border-navy/20 rounded-sm text-sm" />
                    <input value={profile.address} onChange={(e) => setProfile({ ...profile, address: e.target.value })} className="w-full px-3 py-2 border border-navy/20 rounded-sm text-sm" />
                    <button onClick={() => setEditing(false)} className="btn-primary w-full justify-center text-xs">Save</button>
                  </div>
                ) : (
                  <div className="space-y-3 text-sm">
                    <div><span className="text-navy/40">Name</span><p className="text-navy">{profile.name}</p></div>
                    <div><span className="text-navy/40">Email</span><p className="text-navy">{profile.email}</p></div>
                    <div><span className="text-navy/40">Phone</span><p className="text-navy">{profile.phone}</p></div>
                    <div><span className="text-navy/40">Address</span><p className="text-navy">{profile.address}</p></div>
                    <button onClick={() => setEditing(true)} className="btn-primary w-full justify-center text-xs mt-4">Edit Profile</button>
                  </div>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
