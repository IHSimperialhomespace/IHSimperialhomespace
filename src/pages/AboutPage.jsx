import About from '../components/About'
import Stats from '../components/Stats'
import WhyUs from '../components/WhyUs'
import Contact from '../components/Contact'
import './Page.css'

const AboutPage = () => (
  <>
    <div className="page-hero-banner">
      <div className="page-hero-overlay" />
      <div className="page-hero-content">
        <p className="page-hero-label">Our Story</p>
        <h1 className="page-hero-title">About IHS Imperial Home Space</h1>
        <p className="page-hero-sub">10+ Years of Crafting Exceptional Interiors in Hyderabad</p>
      </div>
    </div>
    <About />
    <Stats />
    <WhyUs />
    <Contact />
  </>
)

export default AboutPage
