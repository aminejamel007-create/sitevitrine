interface Props {
  className?: string
  colors?: string[]
}

export default function GradientBlobBackground({ className = '', colors }: Props) {
  const c = colors || ['#2B3375', '#6E80C4', '#E7EAF7']
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div
        className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full opacity-30 animate-blob-float"
        style={{ background: `radial-gradient(circle, ${c[0]} 0%, transparent 70%)`, filter: 'blur(80px)' }}
      />
      <div
        className="absolute top-1/3 -right-1/4 w-1/2 h-1/2 rounded-full opacity-25 animate-blob-float-slow"
        style={{ background: `radial-gradient(circle, ${c[1]} 0%, transparent 70%)`, filter: 'blur(80px)' }}
      />
      <div
        className="absolute -bottom-1/4 left-1/3 w-1/3 h-1/3 rounded-full opacity-20 animate-blob-float"
        style={{ background: `radial-gradient(circle, ${c[2]} 0%, transparent 70%)`, filter: 'blur(80px)' }}
      />
    </div>
  )
}
