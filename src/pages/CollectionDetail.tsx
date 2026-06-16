import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ShoppingBag } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import { collections, products } from '../data/content'

export default function CollectionDetail() {
  const { id } = useParams()
  const collection = collections.find((c) => c.id === id)
  const items = products.filter((p) => p.collectionId === id)

  if (!collection) {
    return (
      <section className="pt-40 pb-20 px-4 text-center">
        <h1 className="font-serif text-4xl text-navy mb-4">Collection not found</h1>
        <Link to="/collections" className="btn-primary">Back to Collections</Link>
      </section>
    )
  }

  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden bg-navy">
        <img src={collection.image} alt={collection.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 pb-16 w-full">
          <Link to="/collections" className="inline-flex items-center gap-2 text-white/60 hover:text-periwinkle transition-colors text-sm mb-4">
            <ArrowLeft size={14} /> Back to Collections
          </Link>
          <h1 className="font-serif text-white text-5xl md:text-6xl mb-3">{collection.title}</h1>
          <p className="text-white/60 max-w-xl">{collection.description}</p>
        </div>
      </section>

      <section className="py-20 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((product, i) => (
              <AnimatedSection key={product.id} delay={i * 0.1}>
                <Link to={`/product/${product.id}`} className="group block">
                  <div className="relative overflow-hidden rounded-sm h-[400px] mb-4">
                    <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-300" />
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-serif text-xl text-navy group-hover:text-periwinkle transition-colors">{product.name}</h3>
                      <p className="text-navy/50 text-sm mt-1 line-clamp-2">{product.description}</p>
                    </div>
                    <span className="font-serif text-lg text-periwinkle whitespace-nowrap ml-4">{product.price.toLocaleString()} TND</span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          {items.length === 0 && (
            <div className="text-center py-20">
              <ShoppingBag size={48} className="mx-auto text-periwinkle/30 mb-4" />
              <p className="text-navy/50">Products coming soon for this collection.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
