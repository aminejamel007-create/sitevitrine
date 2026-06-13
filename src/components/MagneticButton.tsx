import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  as?: 'button' | 'a'
  href?: string
  onClick?: () => void
}

export default function MagneticButton({ children, className = '', as = 'button', href, onClick }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPos({ x: x * 0.3, y: y * 0.3 })
  }

  const reset = () => {
    setPos({ x: 0, y: 0 })
    setIsHovered(false)
  }

  const Tag = as as 'button' | 'a'
  const linkProps = as === 'a' ? { href } : {}

  return (
    <div ref={ref} onMouseMove={handleMouse} onMouseLeave={reset} onMouseEnter={() => setIsHovered(true)}>
      <motion.div
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      >
        <Tag
          {...linkProps}
          onClick={onClick}
          className={`relative overflow-hidden group cursor-pointer ${className}`}
        >
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-navy to-periwinkle opacity-0"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <span className="relative z-10">{children}</span>
        </Tag>
      </motion.div>
    </div>
  )
}
