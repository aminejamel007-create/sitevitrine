import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Check } from 'lucide-react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative">
          <input type="text" name="name" placeholder=" " required
            value={form.name} onChange={handleChange}
            className="peer w-full px-4 pt-6 pb-2 bg-white/80 backdrop-blur-sm border border-periwinkle/20 rounded-sm focus:border-periwinkle outline-none transition-colors text-sm" />
          <label className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-navy/40 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-periwinkle peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[10px] transition-all">Full Name</label>
        </div>
        <div className="relative">
          <input type="email" name="email" placeholder=" " required
            value={form.email} onChange={handleChange}
            className="peer w-full px-4 pt-6 pb-2 bg-white/80 backdrop-blur-sm border border-periwinkle/20 rounded-sm focus:border-periwinkle outline-none transition-colors text-sm" />
          <label className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-navy/40 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-periwinkle peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[10px] transition-all">Email Address</label>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative">
          <input type="tel" name="phone" placeholder=" "
            value={form.phone} onChange={handleChange}
            className="peer w-full px-4 pt-6 pb-2 bg-white/80 backdrop-blur-sm border border-periwinkle/20 rounded-sm focus:border-periwinkle outline-none transition-colors text-sm" />
          <label className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-navy/40 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-periwinkle peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[10px] transition-all">Phone</label>
        </div>
        <div className="relative">
          <select name="subject" value={form.subject} onChange={handleChange} required
            className="peer w-full px-4 pt-6 pb-2 bg-white/80 backdrop-blur-sm border border-periwinkle/20 rounded-sm focus:border-periwinkle outline-none transition-colors text-sm appearance-none">
            <option value="" disabled></option>
            <option value="Suits & Blazers">Suits & Blazers</option>
            <option value="Wedding & Formalwear">Wedding & Formalwear</option>
            <option value="Bespoke Custom">Bespoke Custom</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
          <label className="absolute left-4 top-2 text-[10px] text-periwinkle transition-all">Subject</label>
        </div>
      </div>
      <div className="relative">
        <textarea name="message" placeholder=" " required rows={5}
          value={form.message} onChange={handleChange}
          className="peer w-full px-4 pt-8 pb-3 bg-white/80 backdrop-blur-sm border border-periwinkle/20 rounded-sm focus:border-periwinkle outline-none transition-colors text-sm resize-none" />
        <label className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-navy/40 peer-focus:top-3 peer-focus:text-[10px] peer-focus:text-periwinkle peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-[10px] transition-all">Your Message</label>
      </div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="btn-primary w-full justify-center"
      >
        {sent ? <>Message Sent <Check size={16} /></> : <>Send Message <Send size={16} /></>}
      </motion.button>
    </form>
  )
}
