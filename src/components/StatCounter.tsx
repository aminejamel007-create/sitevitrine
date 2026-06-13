import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface Props {
  value: number
  suffix?: string
  label: string
}

export default function StatCounter({ value, suffix = '', label }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const step = Math.ceil(value / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= value) { setCount(value); clearInterval(timer) }
      else setCount(start)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <div ref={ref} className="text-center">
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="text-5xl md:text-6xl font-serif text-white block mb-2"
      >
        {count.toLocaleString()}{suffix}
      </motion.span>
      <span className="text-periwinkle/80 text-sm uppercase tracking-[0.2em] font-sans">{label}</span>
    </div>
  )
}
