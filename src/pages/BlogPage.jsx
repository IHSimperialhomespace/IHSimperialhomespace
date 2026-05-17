import { useState } from 'react'
import { useRouter } from '../router'
import { posts } from './blogData'
import './BlogPage.css'

const categories = ['All', ...new Set(posts.map(p => p.category))]

const BlogPage = () => {
  const { navigate } = useRouter()
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const featured = posts.find(p => p.featured)
  const filtered = posts.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
                        p.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch && !p.featured
  })

  return (
    <>
      <div className="page-hero-banner blog-banner">
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <p className="page-hero-label">Insights & Ideas</p>
          <h1 className="page-hero-title">Interior Design Blog</h1>
          <p className="page-hero-sub">Design Tips, Trends & Inspiration for Your Dream Space</p>
        </div>
      </div>

      <section className="blog-page section">
        <div className="container">

          {/* Featured Post */}
          {featured && activeCategory === 'All' && !search && (
            <div className="blog-featured" onClick={() => navigate(`blog/${featured.slug}`)}>
              <div className="blog-featured-img">
                <img src={featured.image} alt={featured.title} />
                <div className="blog-featured-overlay" />
                <span className="blog-featured-badge">Featured</span>
              </div>
              <div className="blog-featured-content">
                <span className="blog-cat-tag">{featured.category}</span>
                <h2 className="blog-featured-title">{featured.title}</h2>
                <p className="blog-featured-excerpt">{featured.excerpt}</p>
                <div className="blog-meta">
                  <span>{featured.date}</span>
                  <span className="meta-dot">·</span>
                  <span>{featured.readTime}</span>
                </div>
                <button className="btn-primary blog-read-btn">
                  <span>Read Article</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Filters + Search */}
          <div className="blog-controls">
            <div className="blog-categories">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`blog-cat-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >{cat}</button>
              ))}
            </div>
            <div className="blog-search">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M10.5 10.5L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Blog Grid */}
          <div className="blog-grid">
            {filtered.map((post, i) => (
              <article
                className="blog-card"
                key={post.id}
                style={{ animationDelay: `${i * 0.08}s` }}
                onClick={() => navigate(`blog/${post.slug}`)}
              >
                <div className="blog-card-img">
                  <img src={post.image} alt={post.title} loading="lazy" />
                  <div className="blog-card-img-overlay" />
                  <span className="blog-cat-tag">{post.category}</span>
                </div>
                <div className="blog-card-body">
                  <div className="blog-meta">
                    <span>{post.date}</span>
                    <span className="meta-dot">·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <span className="blog-read-more">
                    Read More
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="blog-empty">
              <p>No articles found. Try a different search or category.</p>
            </div>
          )}

          {/* CTA */}
          <div className="blog-cta-box">
            <div className="blog-cta-content">
              <h3>Ready to Transform Your Space?</h3>
              <p>Book a free consultation with our interior designers in Hyderabad today.</p>
            </div>
            <button className="btn-primary" onClick={() => navigate('contact')}>
              <span>Book a Consultation</span>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPage
