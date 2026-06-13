import { useState } from 'react'
import { Search } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import AnimatedSection from '../components/AnimatedSection'
import BlogCard from '../components/BlogCard'
import { journalPosts } from '../data/content'

const categories = ['All', ...Array.from(new Set(journalPosts.map((p) => p.category)))]

export default function Journal() {
  const [search, setSearch] = useState('')
  const [activeCat, setActiveCat] = useState('All')

  const filtered = journalPosts.filter((post) => {
    const matchSearch = post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase())
    const matchCat = activeCat === 'All' || post.category === activeCat
    return matchSearch && matchCat
  })

  const featured = filtered[0]
  const rest = filtered.slice(1)

  return (
    <>
      <PageBanner
        title="Journal"
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Journal' }]}
      />

      <section className="py-32 lg:py-40 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main */}
            <div className="lg:col-span-2">
              {/* Search bar for mobile */}
              <div className="mb-10 lg:hidden">
                <div className="relative">
                  <input type="text" placeholder="Search journal..."
                    value={search} onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-periwinkle/20 rounded-sm focus:border-periwinkle outline-none text-sm" />
                  <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-navy/30" />
                </div>
              </div>

              {/* Featured */}
              {featured && (
                <div className="mb-16">
                  <BlogCard {...featured} featured />
                </div>
              )}

              {/* Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {rest.map((post, i) => (
                  <BlogCard key={post.id} {...post} index={i} />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside>
              <AnimatedSection>
                {/* Search */}
                <div className="hidden lg:block mb-10">
                  <h3 className="font-serif text-lg text-navy mb-4">Search</h3>
                  <div className="relative">
                    <input type="text" placeholder="Search..."
                      value={search} onChange={(e) => setSearch(e.target.value)}
                      className="w-full px-4 py-3 bg-white/60 backdrop-blur-sm border border-periwinkle/20 rounded-sm focus:border-periwinkle outline-none text-sm" />
                    <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-navy/30" />
                  </div>
                </div>

                {/* Categories */}
                <div className="mb-10">
                  <h3 className="font-serif text-lg text-navy mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <button key={cat} onClick={() => setActiveCat(cat)}
                        className={`block w-full text-left px-4 py-2 text-sm font-sans rounded-sm transition-colors ${
                          activeCat === cat ? 'bg-navy text-white' : 'text-navy/60 hover:bg-navy/5'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Recent */}
                <div>
                  <h3 className="font-serif text-lg text-navy mb-4">Recent</h3>
                  <div className="space-y-4">
                    {journalPosts.slice(0, 3).map((post) => (
                      <a key={post.id} href={`/journal/${post.slug}`} className="flex gap-3 group">
                        <img src={post.image} alt="" className="w-16 h-16 object-cover rounded-sm shrink-0" />
                        <div>
                          <h4 className="text-sm font-sans font-medium text-navy group-hover:text-periwinkle transition-colors leading-snug">{post.title}</h4>
                          <span className="text-xs text-navy/40">{post.date}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
