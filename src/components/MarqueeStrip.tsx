import { marqueeLines } from '../data/content'

export default function MarqueeStrip() {
  return (
    <div className="relative overflow-hidden bg-navy py-4">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-periwinkle font-sans text-sm uppercase tracking-[0.3em] mx-8">
            {marqueeLines[0]}
          </span>
        ))}
      </div>
    </div>
  )
}
