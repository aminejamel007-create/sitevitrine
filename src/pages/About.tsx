import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Ruler, Sparkles, Shirt, User } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import AnimatedSection from '../components/AnimatedSection'
import GlassCard from '../components/GlassCard'
import GradientBlobBackground from '../components/GradientBlobBackground'
import StatCounter from '../components/StatCounter'
import { aboutIntro, values, stats, teamMembers, siteInfo } from '../data/content'

const valueIcons: Record<string, React.ElementType> = { ruler: Ruler, sparkles: Sparkles, shirt: Shirt, user: User }

export default function About() {
  return (
    <>
      <PageBanner
        title="About"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About' }]}
      />

      {/* Brand story split */}
      <section className="py-32 lg:py-40 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="section-eyebrow">Our Story</span>
              <h2 className="section-title mb-8">{aboutIntro.title}</h2>
              <p className="text-navy/60 text-lg leading-relaxed mb-6">{aboutIntro.text}</p>
              <p className="text-navy/60 leading-relaxed mb-10">{aboutIntro.text2}</p>
              <Link to="/contact" className="btn-primary">Book a Consultation <ArrowRight size={14} /></Link>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="relative">
              <div className="relative overflow-hidden rounded-sm">
                <img src={aboutIntro.image} alt="Workshop" className="w-full h-[600px] object-cover" />
                <div className="absolute inset-0 bg-navy/10" style={{ mixBlendMode: 'multiply' }} />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent p-8">
                  <p className="text-white font-serif text-xl">{aboutIntro.imageCaption}</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 lg:py-40 bg-lavender/30 relative overflow-hidden">
        <GradientBlobBackground colors={['#6E80C4', '#E7EAF7', '#2B3375']} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <span className="section-eyebrow">Our Principles</span>
            <h2 className="section-title">{'What We Stand For'}</h2>
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

      {/* Team */}
      <section className="py-32 lg:py-40 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <span className="section-eyebrow">The Artisans</span>
            <h2 className="section-title">{'Meet Your Tailors'}</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {teamMembers.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.1} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-2 border-periwinkle/20">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-navy/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <span className="text-white text-xs uppercase tracking-wider font-sans">View Bio</span>
                  </div>
                </div>
                <h3 className="font-serif text-xl text-navy mb-1">{member.name}</h3>
                <span className="text-periwinkle text-sm uppercase tracking-wider font-sans">{member.role}</span>
                <p className="text-navy/50 text-sm mt-3">{member.bio}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-r from-navy to-periwinkle">
        <GradientBlobBackground className="opacity-50" />
        <AnimatedSection className="relative z-10 text-center px-4">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Begin Your Journey</h2>
          <p className="text-white/70 mb-8">Call us to schedule your personal consultation</p>
          <a href={`tel:${siteInfo.phone}`} className="btn-glass text-sm">
            <Phone size={14} /> {siteInfo.phone}
          </a>
        </AnimatedSection>
      </section>
    </>
  )
}
