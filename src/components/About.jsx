import { useEffect, useRef } from 'react'
import './About.css'

const About = () => {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-grid" ref={ref}>
          {/* Image side */}
          <div className="about-image-wrap">
            <div className="about-image-frame">
              <div className="about-img-main">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
                  alt="Luxury interior by IHS"
                />
                <div className="img-overlay" />
              </div>
              <div className="about-img-accent">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80"
                  alt="Luxury interior detail"
                />
              </div>
              <div className="years-badge">
                <span className="years-num">10+</span>
                <span className="years-label">Years of Excellence</span>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="about-text">
            <p className="section-label">Our Story</p>
            <h2 className="section-title">
              Design That <em>Feels</em><br />Like Home
            </h2>
            <div className="gold-divider" />
            <p className="about-desc">
              IHS Imperial Home Space is a premier interior design firm dedicated to crafting 
              beautiful, functional, and deeply personalized living environments. We believe 
              that exceptional design goes beyond aesthetics — it transforms how you live.
            </p>
            <p className="about-desc" style={{ marginTop: '16px' }}>
              From the grandest residences to intimate workspaces, our team brings 
              unparalleled craftsmanship, attention to detail, and a passion for 
              excellence to every project we undertake.
            </p>

            <div className="about-features">
              {[
                { icon: '◈', title: 'Bespoke Design', desc: 'Every project uniquely tailored to your vision' },
                { icon: '◈', title: 'End-to-End Service', desc: 'From concept to keys, we handle everything' },
                { icon: '◈', title: 'Premium Materials', desc: 'Only the finest finishes for lasting luxury' },
              ].map(f => (
                <div className="about-feature" key={f.title}>
                  <span className="feature-icon">{f.icon}</span>
                  <div>
                    <strong>{f.title}</strong>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary" style={{ marginTop: '8px' }}>
              <span>Discover Our Story</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
