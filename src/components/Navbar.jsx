import { useState, useEffect } from 'react'
import { useRouter } from '../router'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { page, navigate } = useRouter()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'Blog', page: 'blog' },
    { label: 'Contact', page: 'contact' },
  ]

  const handleNav = (p) => {
    navigate(p)
    setMenuOpen(false)
  }

  const isActive = (p) => page === p || (p === 'home' && page === '')

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Logo */}
        <button className="logo" onClick={() => handleNav('home')}>
          <div className="logo-icon">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path d="M18 3L33 14v19H3V14L18 3z" stroke="url(#goldGrad)" strokeWidth="1.5" fill="none"/>
              <path d="M12 33V20h12v13" stroke="url(#goldGrad)" strokeWidth="1.5"/>
              <path d="M15 20h6v7h-6z" fill="url(#goldGrad)" opacity="0.3"/>
              <circle cx="18" cy="13" r="2" fill="url(#goldGrad)"/>
              <defs>
                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#9A7A2E"/>
                  <stop offset="50%" stopColor="#E8C97A"/>
                  <stop offset="100%" stopColor="#C9A84C"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-name">IHS</span>
            <span className="logo-sub">Imperial Home Space</span>
          </div>
        </button>

        {/* Desktop Nav */}
        <ul className="nav-links">
          {navLinks.map(link => (
            <li key={link.page}>
              <button
                className={`nav-link ${isActive(link.page) ? 'active' : ''}`}
                onClick={() => handleNav(link.page)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="nav-cta" onClick={() => handleNav('contact')}>
          <span>Get Consultation</span>
        </button>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span/><span/><span/>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <button
            key={link.page}
            className={`mobile-link ${isActive(link.page) ? 'active' : ''}`}
            onClick={() => handleNav(link.page)}
          >
            {link.label}
          </button>
        ))}
        <button className="btn-primary" onClick={() => handleNav('contact')}>
          <span>Get Consultation</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
