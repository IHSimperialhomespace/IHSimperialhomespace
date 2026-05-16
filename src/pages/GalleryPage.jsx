import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import './Page.css'

const GalleryPage = () => (
  <>
    <div className="page-hero-banner">
      <div className="page-hero-overlay" />
      <div className="page-hero-content">
        <p className="page-hero-label">Portfolio</p>
        <h1 className="page-hero-title">Our Work</h1>
        <p className="page-hero-sub">Residential & Commercial Spaces We Have Transformed</p>
      </div>
    </div>
    <Gallery />
    <Contact />
  </>
)

export default GalleryPage
