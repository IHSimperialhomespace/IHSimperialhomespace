import { useState } from "react";
import { useRouter } from "../router";
import "./BlogPage.css";

const posts = [
  {
    id: 1,
    slug: "wooden-interior-design-trends-2025",
    category: "Design Trends",
    title: "7 Wooden Interior Design Trends Dominating Hyderabad Homes in 2025",
    excerpt:
      "From warm walnut panels to textured teak ceilings, wood is making a bold comeback in luxury residential interiors. Here are the top wooden design trends our clients are requesting this year.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    date: "May 10, 2025",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    slug: "modular-kitchen-guide",
    category: "Kitchen Design",
    title: "The Complete Guide to Modular Kitchens for Indian Homes",
    excerpt:
      "A modular kitchen is one of the most important investments in your home. Learn about layouts, materials, finishes, and what to expect when designing a modular kitchen in Hyderabad.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    date: "April 22, 2025",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 3,
    slug: "luxury-bedroom-design-tips",
    category: "Bedroom Design",
    title: "How to Design a Luxury Master Bedroom on Any Budget",
    excerpt:
      "A beautiful master bedroom doesn't always require a massive budget. Our designers share their top tips for creating a hotel-like bedroom experience in your Hyderabad home.",
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80",
    date: "April 8, 2025",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 4,
    slug: "office-interior-design-productivity",
    category: "Office Design",
    title:
      "Designing Office Spaces That Boost Productivity and Employee Wellbeing",
    excerpt:
      "The design of your workplace directly impacts your team's performance. Discover how thoughtful office interior design can transform your business environment in Hyderabad.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
    date: "March 28, 2025",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 5,
    slug: "false-ceiling-design-ideas",
    category: "Ceiling Design",
    title: "10 False Ceiling Design Ideas That Add Drama to Any Room",
    excerpt:
      "False ceilings are one of the most impactful design elements in Indian homes. From coffered wood ceilings to backlit panels, explore ideas that can elevate your space instantly.",
    image:
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&q=80",
    date: "March 15, 2025",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 6,
    slug: "wardrobe-design-guide",
    category: "Storage Design",
    title:
      "Walk-in Wardrobe vs Built-in Wardrobe: Which is Right for Your Home?",
    excerpt:
      "Storage is one of the most requested features in modern Indian homes. We break down the differences between walk-in and built-in wardrobes to help you decide what works best.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    date: "March 2, 2025",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 7,
    slug: "interior-design-cost-hyderabad",
    category: "Tips & Advice",
    title:
      "How Much Does Interior Design Cost in Hyderabad? A Complete Breakdown",
    excerpt:
      "One of the most common questions we get is about interior design pricing. Here's a transparent breakdown of what you can expect to pay for different projects in Hyderabad.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    date: "February 18, 2025",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 8,
    slug: "living-room-design-ideas-2025",
    category: "Living Room",
    title: "8 Living Room Design Ideas for Modern Indian Apartments",
    excerpt:
      "The living room is the heart of every Indian home. Whether you prefer classic, contemporary, or eclectic style, these design ideas will inspire your next interior project.",
    image:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&q=80",
    date: "February 5, 2025",
    readTime: "6 min read",
    featured: false,
  },
];

const categories = ["All", ...new Set(posts.map((p) => p.category))];

const BlogPage = () => {
  const { navigate } = useRouter();
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const featured = posts.find((p) => p.featured);
  const filtered = posts.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch && !p.featured;
  });

  return (
    <>
      <div className="page-hero-banner blog-banner">
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <p className="page-hero-label">Insights & Ideas</p>
          <h1 className="page-hero-title">Interior Design Blog</h1>
          <p className="page-hero-sub">
            Design Tips, Trends & Inspiration for Your Dream Space
          </p>
        </div>
      </div>

      <section className="blog-page section">
        <div className="container">
          {/* Featured Post */}
          {featured && activeCategory === "All" && !search && (
            <div className="blog-featured">
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
                <button
                  className="btn-primary blog-read-btn"
                  onClick={() => navigate(`blog/${featured.slug}`)}
                >
                  <span>Read Article</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Filters + Search */}
          <div className="blog-controls">
            <div className="blog-categories">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`blog-cat-btn ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="blog-search">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle
                  cx="7"
                  cy="7"
                  r="4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M10.5 10.5L13 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
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
                      <path
                        d="M2 7h10M8 3l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
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

          <div className="blog-cta-box">
            <div className="blog-cta-content">
              <h3>Ready to Transform Your Space?</h3>
              <p>
                Book a free consultation with our interior designers in
                Hyderabad today.
              </p>
            </div>
            <button className="btn-primary" onClick={() => navigate("contact")}>
              <span>Book a Consultation</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
