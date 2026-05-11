import './WhyUs.css'

const reasons = [
  { num: '01', title: 'Tailored Designs', desc: 'Every project is a one-of-a-kind creation built exclusively around your vision, preferences, and lifestyle.' },
  { num: '02', title: 'Holistic Approach', desc: 'We consider every aspect of your space — light, flow, acoustics, and aesthetics — for a truly cohesive result.' },
  { num: '03', title: 'Design Excellence', desc: 'Award-winning designers who push the boundaries of innovation while honoring timeless principles of beauty.' },
  { num: '04', title: 'Transparent Service', desc: 'Clear timelines, honest pricing, and open communication from the first consultation to final handover.' },
  { num: '05', title: 'Sustainable Choices', desc: 'We prioritize eco-conscious materials and practices without compromising on luxury or aesthetics.' },
  { num: '06', title: 'Premium Craftsmanship', desc: 'Every detail is executed to the highest standard, ensuring spaces that endure and inspire for decades.' },
]

const WhyUs = () => (
  <section className="section whyus-section">
    <div className="whyus-bg" />
    <div className="container">
      <div className="whyus-grid">
        <div className="whyus-left">
          <p className="section-label">Why Choose Us?</p>
          <h2 className="section-title">
            Your Trusted<br />
            <em>Design Partner</em>
          </h2>
          <div className="gold-divider" />
          <p className="section-subtitle" style={{ marginBottom: '32px' }}>
            IHS Imperial Home Space stands apart through our unwavering commitment 
            to excellence, innovation, and your complete satisfaction.
          </p>
          <a href="#contact" className="btn-primary">
            <span>Start Your Project</span>
          </a>

          <div className="whyus-quote">
            <span className="quote-mark">"</span>
            <p>We don't just design spaces. We craft experiences that last a lifetime.</p>
            <span className="quote-author">— IHS Imperial Home Space</span>
          </div>
        </div>

        <div className="whyus-right">
          {reasons.map(r => (
            <div className="reason-card" key={r.num}>
              <span className="reason-num">{r.num}</span>
              <div className="reason-content">
                <h3 className="reason-title">{r.title}</h3>
                <p className="reason-desc">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default WhyUs
