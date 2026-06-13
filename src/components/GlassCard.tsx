import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  hover?: boolean
  delay?: number
}

export default function GlassCard({ children, className = '', hover = true, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      className={`glass-card rounded-sm p-6 md:p-8 transition-shadow duration-300 ${
        hover ? 'hover:shadow-xl hover:shadow-periwinkle/10' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  )
}
