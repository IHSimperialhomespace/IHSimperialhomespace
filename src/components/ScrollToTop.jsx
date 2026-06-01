import { useState, useEffect } from 'react'
import './ScrollToTop.css'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setVisible(scrollTop > 400)
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      className={`scroll-top ${visible ? 'visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      {/* Progress ring */}
      <svg className="progress-ring" viewBox="0 0 44 44">
        <circle cx="22" cy="22" r="18" />
        <circle
          cx="22" cy="22" r="18"
          className="progress-fill"
          style={{ strokeDashoffset: `${113 - (113 * progress) / 100}` }}
        />
      </svg>
      <svg className="arrow-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 13V3M3 8l5-5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}

export default ScrollToTop
