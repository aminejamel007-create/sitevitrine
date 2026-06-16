import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ShoppingCart, Check, Star } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import { products, reviews } from '../data/content'
import { useCart } from '../context/CartContext'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === Number(id))
  const { addItem } = useCart()
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <section className="pt-40 pb-20 px-4 text-center">
        <h1 className="font-serif text-4xl text-navy mb-4">Product not found</h1>
        <Link to="/collections" className="btn-primary">Back to Collections</Link>
      </section>
    )
  }

  const productReviews = reviews.filter((r) => r.productId === product.id)

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) return
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor,
      quantity: 1,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} size={14} className={i < rating ? 'text-amber-400 fill-amber-400' : 'text-navy/20'} />
    ))
  }

  return (
    <>
      <section className="pt-32 pb-20 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link to={`/collections`} className="inline-flex items-center gap-2 text-periwinkle hover:text-navy transition-colors text-sm mb-8">
            <ArrowLeft size={14} /> Back to Collections
          </Link>

          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <div className="relative overflow-hidden rounded-sm h-[600px]">
                <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex items-center gap-1 mb-2">
                {renderStars(Math.round(product.rating))}
                <span className="text-navy/40 text-sm ml-2">({product.rating})</span>
              </div>
              <h1 className="font-serif text-4xl text-navy mb-3">{product.name}</h1>
              <p className="text-3xl font-serif text-periwinkle mb-6">{product.price.toLocaleString()} TND</p>
              <p className="text-navy/60 leading-relaxed mb-8">{product.description}</p>

              <div className="mb-6">
                <h3 className="text-sm uppercase tracking-wider text-navy/60 mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-5 py-2.5 text-sm border rounded-sm transition-all ${
                        selectedSize === s
                          ? 'border-navy bg-navy text-white'
                          : 'border-navy/20 text-navy/60 hover:border-navy/50'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-sm uppercase tracking-wider text-navy/60 mb-3">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedColor(c)}
                      className={`px-5 py-2.5 text-sm border rounded-sm transition-all ${
                        selectedColor === c
                          ? 'border-navy bg-navy text-white'
                          : 'border-navy/20 text-navy/60 hover:border-navy/50'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!selectedSize || !selectedColor}
                className={`w-full btn-primary justify-center text-base ${
                  !selectedSize || !selectedColor ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {added ? (
                  <><Check size={18} /> Added to Cart</>
                ) : (
                  <><ShoppingCart size={18} /> Add to Cart</>
                )}
              </button>
              {(!selectedSize || !selectedColor) && (
                <p className="text-navy/40 text-xs text-center mt-2">Please select a size and color</p>
              )}
            </AnimatedSection>
          </div>

          {productReviews.length > 0 && (
            <section className="mt-20 pt-20 border-t border-navy/10">
              <h2 className="font-serif text-3xl text-navy mb-10">Customer Reviews</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productReviews.map((review) => (
                  <div key={review.id} className="bg-white rounded-sm p-6 border border-navy/10">
                    <div className="flex items-center gap-1 mb-3">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-navy/70 text-sm leading-relaxed mb-4">"{review.text}"</p>
                    <div className="flex items-center justify-between text-xs text-navy/40">
                      <span>{review.name}</span>
                      <span>{review.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>
    </>
  )
}
