import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import GradientBlobBackground from './GradientBlobBackground'

interface Props {
  title: string
  breadcrumbs: { label: string; path?: string }[]
}

export default function PageBanner({ title, breadcrumbs }: Props) {
  return (
    <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden bg-navy">
      <GradientBlobBackground />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-4"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
        >
          {title}
        </motion.h1>
        <nav className="text-white/60 text-sm font-sans">
          {breadcrumbs.map((crumb, i) => (
            <span key={i}>
              {crumb.path ? (
                <Link to={crumb.path} className="text-periwinkle hover:text-periwinkle-light transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white/80">{crumb.label}</span>
              )}
              {i < breadcrumbs.length - 1 && <span className="mx-3">/</span>}
            </span>
          ))}
        </nav>
      </motion.div>
    </section>
  )
}
