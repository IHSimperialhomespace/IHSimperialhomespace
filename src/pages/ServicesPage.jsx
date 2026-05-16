import Services from '../components/Services'
import Estimator from '../components/Estimator'
import Contact from '../components/Contact'
import './Page.css'

const ServicesPage = () => (
  <>
    <div className="page-hero-banner">
      <div className="page-hero-overlay" />
      <div className="page-hero-content">
        <p className="page-hero-label">What We Offer</p>
        <h1 className="page-hero-title">Our Services</h1>
        <p className="page-hero-sub">Comprehensive Interior Design Solutions for Every Space</p>
      </div>
    </div>
    <Services />
    <Estimator />
    <Contact />
  </>
)

export default ServicesPage
