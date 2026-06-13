import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

interface Props {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
  author: string
  readTime: string
  category: string
  slug: string
  featured?: boolean
  index?: number
}

export default function BlogCard({ id, title, excerpt, image, date, author, readTime, category, slug, featured, index = 0 }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`group ${featured ? 'lg:col-span-2' : ''}`}
    >
      <Link to={`/journal/${slug}`} className="block">
        <div className={`relative overflow-hidden rounded-sm mb-5 ${featured ? 'h-96' : 'h-52'}`}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
          <span className="absolute top-4 left-4 bg-periwinkle/90 text-white text-xs px-3 py-1 rounded-full font-sans uppercase tracking-wider">
            {category}
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-navy/50 font-sans mb-2">
          <span>{date}</span>
          <span>·</span>
          <span>{readTime}</span>
        </div>
        <h3 className={`font-serif text-navy group-hover:text-periwinkle transition-colors mb-2 ${featured ? 'text-2xl' : 'text-lg'}`}>
          {title}
        </h3>
        <p className="text-navy/60 text-sm leading-relaxed">{excerpt}</p>
      </Link>
    </motion.article>
  )
}
