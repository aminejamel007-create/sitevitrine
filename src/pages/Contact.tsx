import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import AnimatedSection from '../components/AnimatedSection'
import GlassCard from '../components/GlassCard'
import GradientBlobBackground from '../components/GradientBlobBackground'
import ContactForm from '../components/ContactForm'
import { siteInfo } from '../data/content'

const contactCards = [
  { icon: MapPin, title: 'Address', content: siteInfo.address },
  { icon: Phone, title: 'Phone', content: siteInfo.phone, href: `tel:${siteInfo.phone}` },
  { icon: Mail, title: 'Email', content: siteInfo.email, href: `mailto:${siteInfo.email}` },
  { icon: Clock, title: 'Hours', content: 'Mon – Sat: 9:00 AM – 7:00 PM' },
]

export default function Contact() {
  return (
    <>
      <PageBanner
        title="Contact"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Contact' }]}
      />

      <section className="py-32 lg:py-40 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Info cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactCards.map((card) => {
              const Icon = card.icon
              return (
                <GlassCard key={card.title} hover={false} className="text-center">
                  <Icon size={24} className="text-periwinkle mx-auto mb-3" />
                  <h3 className="font-serif text-navy mb-1">{card.title}</h3>
                  <p className="text-sm text-navy/60 font-sans">
                    {card.href ? <a href={card.href} className="hover:text-periwinkle transition-colors">{card.content}</a> : card.content}
                  </p>
                </GlassCard>
              )
            })}
          </div>

          {/* Form + Map */}
          <div className="grid lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <h2 className="text-4xl font-serif text-navy mb-3">Get in Touch</h2>
              <p className="text-navy/60 mb-10 font-sans">Ready to begin your tailoring journey? Send us a message and our team will respond within 24 hours.</p>
              <div className="glass-card p-8">
                <ContactForm />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="h-full min-h-[450px] rounded-sm overflow-hidden border border-periwinkle/20 relative">
                <iframe
                  title="Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.5!2d10.6346!3d35.8256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQ5JzMyLjIiTiAxMMKwMzgnMDQuNSJF!5e0!3m2!1sen!2stn!4v1"
                  width="100%" height="100%" style={{ border: 0, minHeight: '450px' }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hue-rotate-15 contrast-125"
                />
              </div>
            </AnimatedSection>
          </div>

          {/* Social */}
          <AnimatedSection className="text-center mt-20">
            <h3 className="font-serif text-3xl text-navy mb-8">Follow the Atelier</h3>
            <div className="flex justify-center gap-4">
              {[
                { icon: Instagram, href: siteInfo.social.instagram, label: 'Instagram' },
                { icon: Facebook, href: siteInfo.social.facebook, label: 'Facebook' },
                { icon: Linkedin, href: siteInfo.social.linkedin, label: 'LinkedIn' },
              ].map((s) => (
                <a key={s.label} href={s.href}
                  className="w-14 h-14 border-2 border-periwinkle/30 text-periwinkle rounded-full flex items-center justify-center hover:bg-navy hover:border-navy hover:text-white transition-all duration-300"
                  aria-label={s.label}>
                  <s.icon size={20} />
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
