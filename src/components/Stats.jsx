import { useEffect, useRef, useState } from 'react'
import './Stats.css'

const CountUp = ({ end, suffix = '', duration = 2200 }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()
          const animate = (now) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 4)
            setCount(Math.floor(eased * end))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { num: 10,  suffix: '+', label: 'Years of Excellence' },
  { num: 150, suffix: '+', label: 'Projects Completed'  },
  { num: 18,  suffix: '',  label: 'Awards Won'          },
  { num: 98,  suffix: '%', label: 'Client Satisfaction' },
]

const Stats = () => (
  <section className="stats-section">
    <div className="stats-bg" />
    <div className="container">
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div className="stat-item" key={i}>
            <div className="stat-num">
              <CountUp end={s.num} suffix={s.suffix} />
            </div>
            <div className="stat-divider" />
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Stats
