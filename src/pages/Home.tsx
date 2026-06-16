import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ChevronRight, Quote, MessageSquare, Ruler, Sparkles, Shirt, Package, User } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import GradientBlobBackground from '../components/GradientBlobBackground'
import GlassCard from '../components/GlassCard'
import MarqueeStrip from '../components/MarqueeStrip'
import StatCounter from '../components/StatCounter'
import { heroData, aboutIntro, values, collections, processSteps, lookbookImages, testimonials, stats } from '../data/content'
import heroImage from '../assets/hero.png'

const stepIcons: Record<string, React.ElementType> = {
  messageSquare: MessageSquare, ruler: Ruler, sparkles: Sparkles, shirt: Shirt, package: Package,
}

const valueIcons: Record<string, React.ElementType> = {
  ruler: Ruler, sparkles: Sparkles, shirt: Shirt, user: User,
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-navy">
        <GradientBlobBackground className="z-0" />
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <img src={heroImage} alt="Sophisticated gentleman in navy suit" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-navy/40 to-navy/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
        </motion.div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <span className="text-periwinkle font-sans text-xs uppercase tracking-[0.3em] mb-6 block">Monsieur Style — Est. 2004</span>
            <h1 className="font-serif text-white leading-[1.05] mb-8" style={{ fontSize: 'clamp(2.8rem, 8vw, 6.5rem)' }}>
              {heroData.title}
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-xl mb-10 font-sans leading-relaxed">
              {heroData.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/collections" className="btn-primary text-sm">{heroData.cta} <ArrowRight size={14} /></Link>
              <Link to="/contact" className="btn-glass text-sm">{heroData.ctaSecondary}</Link>
            </div>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
        >
          <ChevronRight size={24} className="rotate-90" />
        </motion.div>
      </section>

      <MarqueeStrip />

      {/* About/Intro Split */}
      <section className="py-32 lg:py-40 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection className="relative">
              <div className="relative overflow-hidden rounded-sm">
                <img src={aboutIntro.image} alt="Atelier" className="w-full h-[600px] object-cover" />
                <div className="absolute inset-0 bg-navy/10" style={{ mixBlendMode: 'multiply' }} />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-periwinkle/10 rounded-full blur-3xl" />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <span className="section-eyebrow">About the Atelier</span>
              <h2 className="section-title mb-8">{aboutIntro.title}</h2>
              <p className="text-navy/60 leading-relaxed mb-6 text-lg">{aboutIntro.text}</p>
              <p className="text-navy/60 leading-relaxed mb-10">{aboutIntro.text2}</p>
              <Link to="/about" className="btn-primary">
                Discover Our Story <ArrowRight size={14} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 lg:py-40 bg-lavender/30 relative overflow-hidden">
        <GradientBlobBackground className="z-0" colors={['#6E80C4', '#E7EAF7', '#2B3375']} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <span className="section-eyebrow">Our Principles</span>
            <h2 className="section-title">{'What Defines Us'}</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <GlassCard key={v.title} delay={i * 0.1}>
                {(() => { const Icon = valueIcons[v.icon] || Sparkles; return <Icon size={28} className="text-periwinkle mb-4" />; })()}
                <h3 className="font-serif text-xl text-navy mb-3">{v.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{v.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-32 lg:py-40 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <span className="section-eyebrow">Our Collections</span>
            <h2 className="section-title">{'Curated for the Discerning'}</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.slice(0, 3).map((c, i) => (
              <AnimatedSection key={c.id} delay={i * 0.1}>
                <Link to={c.link} className="group block relative overflow-hidden rounded-sm h-[500px]">
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-serif text-2xl text-white mb-2">{c.title}</h3>
                    <p className="text-white/60 text-sm mb-4 max-w-xs">{c.description}</p>
                    <span className="text-periwinkle text-xs uppercase tracking-wider font-sans">Explore →</span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-12">
            <Link to="/collections" className="btn-primary">View All Collections <ArrowRight size={14} /></Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-32 lg:py-40 bg-navy relative overflow-hidden">
        <GradientBlobBackground colors={['#2B3375', '#6E80C4', '#1A1E3D']} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <span className="text-periwinkle font-sans text-xs uppercase tracking-[0.3em]">The Journey</span>
            <h2 className="section-title text-white mt-4">{'From Consultation to Creation'}</h2>
          </AnimatedSection>
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-periwinkle/20 -translate-x-1/2" />
            <div className="space-y-16">
              {processSteps.map((step, i) => {
                const isLeft = i % 2 === 0
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                    className={`flex flex-col lg:flex-row items-center gap-8 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${isLeft ? 'lg:text-right' : 'lg:text-left'}`}>
                      <span className="text-periwinkle font-sans text-xs uppercase tracking-wider">Step {step.step}</span>
                      <h3 className="text-2xl font-serif text-white mt-1 mb-3">{step.title}</h3>
                      <p className="text-white/50 text-sm">{step.description}</p>
                    </div>
                    <div className="relative z-10 w-16 h-16 rounded-full bg-periwinkle/20 border border-periwinkle/30 flex items-center justify-center shrink-0 backdrop-blur-sm">
                      {(() => { const Icon = stepIcons[step.icon] || Sparkles; return <Icon size={24} className="text-periwinkle" />; })()}
                    </div>
                    <div className="flex-1 hidden lg:block" />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-32 overflow-hidden bg-navy-dark">
        <GradientBlobBackground colors={['#6E80C4', '#2B3375', '#1A1E3D']} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((s) => (
              <StatCounter key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Lookbook */}
      <section className="py-32 lg:py-40 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <span className="section-eyebrow">The Lookbook</span>
            <h2 className="section-title">{'A Visual Journal'}</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {lookbookImages.slice(0, 8).map((img, i) => (
              <AnimatedSection key={img.id} delay={i * 0.05}>
                <div className="group relative overflow-hidden rounded-sm h-64 cursor-pointer">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity font-sans">View →</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-12">
            <Link to="/lookbook" className="btn-primary">View Full Lookbook <ArrowRight size={14} /></Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 lg:py-40 bg-lavender/30 relative overflow-hidden">
        <GradientBlobBackground colors={['#E7EAF7', '#6E80C4', '#FAFAFC']} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="section-eyebrow">Testimonials</span>
            <h2 className="section-title">{'Voices of Our Clients'}</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <GlassCard key={t.id} delay={i * 0.1}>
                <Quote size={24} className="text-periwinkle/30 mb-4" />
                <p className="text-navy/70 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-navy">{t.name}</h4>
                    <span className="text-periwinkle text-xs">{t.role}</span>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-r from-navy to-periwinkle">
        <GradientBlobBackground colors={['#2B3375', '#6E80C4', '#1A1E3D']} className="opacity-50" />
        <AnimatedSection className="relative z-10 text-center px-4">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Ready for Your Signature Look?
          </h2>
          <p className="text-white/70 mb-8 max-w-md mx-auto font-sans">
            Schedule a complimentary consultation with our master tailors.
          </p>
          <Link to="/contact" className="btn-glass text-sm">
            Book Your Consultation <ArrowRight size={14} />
          </Link>
        </AnimatedSection>
      </section>
    </>
  )
}
