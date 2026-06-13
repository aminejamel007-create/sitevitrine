import { useEffect, useRef } from 'react'
import { motion, useSpring } from 'framer-motion'
import { useMediaQuery } from '../hooks/useMediaQuery'

export default function CustomCursor() {
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const cursorX = useSpring(0, { stiffness: 200, damping: 30 })
  const cursorY = useSpring(0, { stiffness: 200, damping: 30 })
  const dotX = useSpring(0, { stiffness: 400, damping: 40 })
  const dotY = useSpring(0, { stiffness: 400, damping: 40 })
  const isHovering = useRef(false)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isDesktop) return

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
      dotX.set(e.clientX - 3)
      dotY.set(e.clientY - 3)
    }

    const handleHoverStart = () => { isHovering.current = true }
    const handleHoverEnd = () => { isHovering.current = false }

    document.addEventListener('mousemove', move)
    document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
      el.addEventListener('mouseenter', handleHoverStart)
      el.addEventListener('mouseleave', handleHoverEnd)
    })

    return () => {
      document.removeEventListener('mousemove', move)
      document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart)
        el.removeEventListener('mouseleave', handleHoverEnd)
      })
    }
  }, [isDesktop])

  if (!isDesktop) return null

  return (
    <>
      <motion.div
        ref={cursorRef}
        style={{ x: cursorX, y: cursorY }}
        className="fixed top-0 left-0 w-8 h-8 border border-periwinkle/50 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-all duration-150"
      />
      <motion.div
        style={{ x: dotX, y: dotY }}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-periwinkle rounded-full pointer-events-none z-[9999] mix-blend-difference"
      />
    </>
  )
}
