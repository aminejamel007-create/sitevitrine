import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import AnimatedSection from '../components/AnimatedSection'
import { lookbookImages } from '../data/content'

const categories = ['All', ...Array.from(new Set(lookbookImages.map((i) => i.category)))]

export default function Lookbook() {
  const [activeCat, setActiveCat] = useState('All')
  const [lightbox, setLightbox] = useState<string | null>(null)
  const [lightboxIdx, setLightboxIdx] = useState(0)

  const filtered = activeCat === 'All' ? lookbookImages : lookbookImages.filter((img) => img.category === activeCat)

  const openLightbox = (src: string, idx: number) => {
    setLightbox(src)
    setLightboxIdx(idx)
  }

  return (
    <>
      <PageBanner
        title="Lookbook"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Lookbook' }]}
      />

      <section className="py-32 lg:py-40 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="section-eyebrow">Our Portfolio</span>
            <h2 className="section-title">{'A Visual Journey'}</h2>
          </AnimatedSection>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-sans font-medium rounded-full transition-all duration-300 ${
                  activeCat === cat
                    ? 'bg-navy text-white'
                    : 'bg-white/60 text-navy/60 hover:bg-navy/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, idx) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-sm h-72 cursor-pointer"
                  onClick={() => openLightbox(img.src, idx)}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/50 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity font-sans">View →</span>
                  </div>
                  <span className="absolute bottom-3 left-3 bg-white/80 backdrop-blur-sm text-navy text-[10px] px-2 py-1 rounded-full font-sans uppercase tracking-wider">
                    {img.category}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-nearblack/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 p-2 text-white/60 hover:text-white transition-colors z-10"
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={lightbox}
              alt="Lookbook full-size"
              className="max-w-full max-h-[90vh] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
