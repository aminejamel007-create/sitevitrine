import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, MessageSquare, Ruler, Sparkles, Shirt, Package } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import AnimatedSection from '../components/AnimatedSection'
import MarqueeStrip from '../components/MarqueeStrip'
import { collections, processSteps, siteInfo } from '../data/content'

const stepIcons: Record<string, React.ElementType> = {
  messageSquare: MessageSquare, ruler: Ruler, sparkles: Sparkles, shirt: Shirt, package: Package,
}

export default function Collections() {
  return (
    <>
      <PageBanner
        title="Collections"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Collections' }]}
      />

      <MarqueeStrip />

      {/* Full Grid */}
      <section className="py-32 lg:py-40 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <span className="section-eyebrow">Our Craft</span>
            <h2 className="section-title">{'Ready-to-Wear & Bespoke'}</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((c, i) => (
              <AnimatedSection key={c.id} delay={i * 0.1}>
                <Link to={c.link} className="group block relative overflow-hidden rounded-sm h-[550px]">
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-serif text-2xl text-white mb-3">{c.title}</h3>
                    <p className="text-white/60 text-sm mb-6 leading-relaxed">{c.description}</p>
                    <span className="inline-flex items-center gap-2 text-periwinkle text-xs uppercase tracking-wider font-sans group-hover:text-white transition-colors">
                      View Collection <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-32 lg:py-40 bg-navy relative overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <span className="text-periwinkle font-sans text-xs uppercase tracking-[0.3em]">How It Works</span>
            <h2 className="section-title text-white mt-4">{'The Journey of a Garment'}</h2>
          </AnimatedSection>
          <div className="space-y-16">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <span className="text-periwinkle font-sans text-xs uppercase tracking-wider">Step {step.step}</span>
                  <h3 className="text-2xl font-serif text-white mt-1 mb-3">{step.title}</h3>
                  <p className="text-white/50 text-sm">{step.description}</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-periwinkle/20 border border-periwinkle/30 flex items-center justify-center shrink-0 backdrop-blur-sm">
                  {(() => { const Icon = stepIcons[step.icon] || Sparkles; return <Icon size={24} className="text-periwinkle" />; })()}
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-r from-navy to-periwinkle">
        <AnimatedSection className="relative z-10 text-center px-4">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Start Your Project</h2>
          <p className="text-white/70 mb-8">Request a consultation or quote today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-glass text-sm">
              Request a Quote <ArrowRight size={14} />
            </Link>
            <a href={`tel:${siteInfo.phone}`} className="btn-glass text-sm">
              <Phone size={14} /> Call Us
            </a>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
