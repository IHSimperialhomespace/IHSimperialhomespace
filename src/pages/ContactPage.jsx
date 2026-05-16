import Contact from '../components/Contact'
import FAQ from '../components/FAQ'
import './Page.css'

const ContactPage = () => (
  <>
    <div className="page-hero-banner">
      <div className="page-hero-overlay" />
      <div className="page-hero-content">
        <p className="page-hero-label">Reach Out</p>
        <h1 className="page-hero-title">Contact Us</h1>
        <p className="page-hero-sub">Let's Start Designing Your Dream Space Together</p>
      </div>
    </div>
    <Contact />
    <FAQ />
  </>
)

export default ContactPage
