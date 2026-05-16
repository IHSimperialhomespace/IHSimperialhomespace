import { Router, useRouter } from './router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'

import './App.css'

const PageRenderer = () => {
  const { page } = useRouter()

  const pages = {
    '':         <HomePage />,
    'home':     <HomePage />,
    'about':    <AboutPage />,
    'services': <ServicesPage />,
    'gallery':  <GalleryPage />,
    'contact':  <ContactPage />,
    'blog':     <BlogPage />,
  }

  // Handle blog post slugs like blog/wooden-interior-design-trends-2025
  if (page.startsWith('blog/')) {
    return <BlogPostPage slug={page.replace('blog/', '')} />
  }

  return pages[page] || <HomePage />
}

// Simple blog post placeholder page
const BlogPostPage = ({ slug }) => {
  const { navigate } = useRouter()
  return (
    <div className="blogpost-page">
      <div className="page-hero-banner" style={{
        background: 'url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80) center/cover',
        minHeight: '300px', display: 'flex', alignItems: 'center',
        justifyContent: 'center', position: 'relative', padding: '120px 40px 60px'
      }}>
        <div className="page-hero-overlay" />
        <div className="page-hero-content" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <button
            onClick={() => navigate('blog')}
            style={{
              background: 'none', border: '1px solid rgba(201,168,76,0.4)',
              color: 'var(--gold)', padding: '8px 20px',
              fontFamily: 'Montserrat, sans-serif', fontSize: '10px',
              letterSpacing: '2px', textTransform: 'uppercase',
              cursor: 'pointer', marginBottom: '20px', display: 'inline-flex',
              alignItems: 'center', gap: '8px'
            }}
          >
            ← Back to Blog
          </button>
          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            color: 'var(--text-primary)', fontWeight: 600
          }}>
            {slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </h1>
        </div>
      </div>
      <div className="section container" style={{ textAlign: 'center', padding: '80px 40px' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '32px' }}>
          Full article coming soon. In the meantime, contact us to discuss your interior design project.
        </p>
        <button className="btn-primary" onClick={() => navigate('contact')}>
          <span>Contact Us</span>
        </button>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <PageRenderer />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App
