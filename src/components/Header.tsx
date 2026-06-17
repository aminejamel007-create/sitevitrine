import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, User, ShoppingBag } from 'lucide-react'
import AnimatedHatLogo from './AnimatedHatLogo'
import { navLinks } from '../data/content'
import { useCart } from '../context/CartContext'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()
  const { totalItems } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-nav shadow-lg shadow-navy/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo only */}
            <Link to="/" className="flex items-center -ml-4">
              <AnimatedHatLogo size={120} />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm uppercase tracking-[0.15em] font-sans font-medium transition-colors duration-200
                    ${pathname === link.path ? 'text-periwinkle' : 'text-white/70 hover:text-white'}
                    after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-periwinkle
                    after:transition-all after:duration-300
                    ${pathname === link.path ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/profile" className="text-white/70 hover:text-periwinkle transition-colors p-2 relative" aria-label="My Account">
                <User size={18} />
              </Link>
              <Link to="/cart" className="text-white/70 hover:text-periwinkle transition-colors p-2 relative" aria-label="Shopping Cart">
                <ShoppingBag size={18} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-periwinkle text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </Link>
              <Link to="/contact" className="btn-primary !py-2.5 !px-6 text-xs">
                Book
              </Link>
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white hover:text-periwinkle transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-nearblack/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35 }}
              className="absolute right-0 top-0 bottom-0 w-72 glass-nav flex flex-col pt-28 px-8"
            >
              <div className="flex flex-col gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-lg uppercase tracking-wider font-sans transition-colors
                      ${pathname === link.path ? 'text-periwinkle' : 'text-white/80 hover:text-white'}`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/10">
                  <Link to="/cart" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 text-white/80 hover:text-periwinkle transition-colors text-sm">
                    <ShoppingBag size={16} /> Cart {totalItems > 0 && `(${totalItems})`}
                  </Link>
                  <Link to="/profile" onClick={() => setMobileOpen(false)} className="flex items-center gap-2 text-white/80 hover:text-periwinkle transition-colors text-sm">
                    <User size={16} /> Account
                  </Link>
                </div>
                <Link to="/contact" className="btn-primary !py-3 mt-4 justify-center">
                  Book
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
