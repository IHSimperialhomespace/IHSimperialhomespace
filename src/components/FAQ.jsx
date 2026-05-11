import { useState } from 'react'
import './FAQ.css'

const faqs = [
  { q: 'How long does a typical interior design project take?', a: 'Timelines vary based on project scope. A room refresh can take 3–6 weeks; a full home renovation may take 4–6 months. We provide accurate timelines after the initial consultation.' },
  { q: 'What is your design process like?', a: 'Our process includes an initial consultation, concept development, 3D visualization, your approval, and then flawless execution. We keep you involved at every stage.' },
  { q: 'How much does interior design cost?', a: 'Costs depend on scope, materials, and services required. We offer packages across various budgets. Use our estimate calculator above or contact us for a personalized quote.' },
  { q: 'Do you work with clients\' existing furniture?', a: 'Absolutely. We\'re happy to incorporate pieces you love. We can also advise on what to keep, update, or replace to achieve the best result.' },
  { q: 'Do you offer 3D visualization before execution?', a: 'Yes! Every project includes photorealistic 3D renders so you can see exactly how your space will look before a single nail is hammered.' },
  { q: 'What areas do you serve?', a: 'We primarily serve Hyderabad and surrounding areas. We also take select outstation projects across Telangana and Andhra Pradesh. Contact us to discuss your location.' },
]

const FAQ = () => {
  const [open, setOpen] = useState(null)

  return (
    <section className="section faq-section">
      <div className="container">
        <div className="faq-grid">
          <div className="faq-left">
            <p className="section-label">FAQ</p>
            <h2 className="section-title">
              Frequently<br />
              Asked Questions
            </h2>
            <div className="gold-divider" />
            <p className="section-subtitle">
              Have more questions? We're happy to help.
            </p>
            <a href="#contact" className="btn-primary" style={{ marginTop: '32px', display: 'inline-flex' }}>
              <span>Contact Us</span>
            </a>
          </div>

          <div className="faq-right">
            {faqs.map((f, i) => (
              <div className={`faq-item ${open === i ? 'open' : ''}`} key={i}>
                <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                  <span>{f.q}</span>
                  <div className="faq-icon">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d={open === i ? 'M3 8h10' : 'M8 3v10M3 8h10'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                </button>
                <div className="faq-a">
                  <p>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
