import logoSrc from '../assets/logo.png'

interface Props {
  className?: string
  size?: number
}

export default function AnimatedHatLogo({ className = '', size = 32 }: Props) {
  return (
    <img
      src={logoSrc}
      alt="Monsieur Style"
      width={size}
      height={size}
      className={`object-contain rounded-full ${className}`}
    />
  )
}
