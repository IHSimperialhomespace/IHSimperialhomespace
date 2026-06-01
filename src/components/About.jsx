import './About.css'

const About = () => (
  <section className="section about-section" id="about">
    <div className="container">
      <div className="about-grid">
        <div className="about-image-wrap">
          <div className="about-image-frame">
            <div className="about-img-main">
              <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80" alt="IHS Interior Design Hyderabad" />
              <div className="img-overlay" />
            </div>
            <div className="about-img-accent">
              <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80" alt="Premium interior detail" />
            </div>
            <div className="years-badge">
              <span className="years-num">10+</span>
              <span className="years-label">Years of Excellence</span>
            </div>
          </div>
        </div>
        <div className="about-text">
          <p className="section-label">Who We Are</p>
          <h2 className="section-title">Hyderabad's Trusted<br /><em>Interior Design</em> Studio</h2>
          <div className="gold-divider" />
          <p className="about-desc">IHS Imperial Home Space is one of Hyderabad's most trusted interior design firms, delivering premium residential and commercial interiors across Telangana. With over 10 years of experience, we transform apartments, villas, farmhouses, and offices into spaces that are as functional as they are beautiful.</p>
          <p className="about-desc" style={{marginTop:'16px'}}>From modular kitchens and luxury bedrooms to walk-in wardrobes, living room design, and commercial office interiors — our team brings your vision to life with precision, warmth, and unmatched craftsmanship.</p>
          <div className="about-features">
            <div className="about-feature"><span className="feature-icon">◈</span><div><strong>Bespoke Design</strong><p>Every project uniquely tailored to your vision</p></div></div>
            <div className="about-feature"><span className="feature-icon">◈</span><div><strong>End-to-End Execution</strong><p>From concept and 3D visualization to final handover</p></div></div>
            <div className="about-feature"><span className="feature-icon">◈</span><div><strong>Premium Materials</strong><p>Finest wooden finishes and luxury materials</p></div></div>
          </div>
          <a href="#contact" className="btn-primary" style={{marginTop:'8px',display:'inline-flex'}}>
            <span>Book a Free Consultation</span>
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default About
