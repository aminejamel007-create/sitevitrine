import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Facebook, Twitter, Instagram } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import AnimatedSection from '../components/AnimatedSection'
import { journalPosts } from '../data/content'

export default function JournalDetail() {
  const { slug } = useParams()
  const post = journalPosts.find((p) => p.slug === slug)
  const related = journalPosts.filter((p) => p.category === post?.category && p.id !== post?.id).slice(0, 2)

  if (!post) {
    return (
      <div className="py-32 text-center">
        <h2 className="font-serif text-3xl text-navy mb-4">Article Not Found</h2>
        <Link to="/journal" className="text-periwinkle hover:underline font-sans text-sm">← Back to Journal</Link>
      </div>
    )
  }

  return (
    <>
      <PageBanner
        title={post.title}
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Journal', path: '/journal' }, { label: post.title }]}
      />

      <article className="py-32 lg:py-40 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <Link to="/journal" className="inline-flex items-center gap-2 text-periwinkle hover:text-navy transition-colors mb-10 text-sm font-sans">
              <ArrowLeft size={14} /> Back to Journal
            </Link>

            <img src={post.image} alt={post.title} className="w-full h-[450px] object-cover rounded-sm mb-10" />

            <div className="flex flex-wrap items-center gap-4 text-sm text-navy/50 font-sans mb-4">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.author}</span>
              <span>·</span>
              <span>{post.readTime}</span>
              <span className="bg-periwinkle/10 text-periwinkle px-3 py-1 rounded-full text-xs uppercase tracking-wider">{post.category}</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl text-navy mb-12 leading-tight">{post.title}</h1>

            {/* Content */}
            <div className="prose prose-navy max-w-none">
              {post.content.split('\n').map((line, i) => {
                if (line.startsWith('## ')) {
                  return <h2 key={i} className="font-serif text-2xl text-navy mt-12 mb-6">{line.replace('## ', '')}</h2>
                }
                if (line.trim() === '') return <br key={i} />
                return <p key={i} className="text-navy/60 leading-relaxed mb-5 text-lg">{line}</p>
              })}
            </div>

            {/* Share */}
            <div className="border-t border-periwinkle/20 mt-16 pt-8 flex items-center gap-4">
              <span className="text-sm font-sans text-navy/50">Share:</span>
              {[Facebook, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="p-2.5 bg-lavender/50 rounded-full hover:bg-periwinkle/20 transition-colors">
                  <Icon size={16} className="text-navy/60" />
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-32 bg-lavender/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <h2 className="section-title">{'Related Articles'}</h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {related.map((r) => (
                <Link key={r.id} to={`/journal/${r.slug}`}
                  className="group flex gap-6 bg-white/60 backdrop-blur-sm border border-periwinkle/20 rounded-sm p-4 hover:shadow-lg transition-all">
                  <img src={r.image} alt="" className="w-28 h-28 object-cover rounded-sm shrink-0" />
                  <div>
                    <span className="text-periwinkle text-xs uppercase tracking-wider font-sans">{r.category}</span>
                    <h3 className="font-serif text-lg text-navy group-hover:text-periwinkle transition-colors mt-1">{r.title}</h3>
                    <span className="text-xs text-navy/40 font-sans">{r.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
