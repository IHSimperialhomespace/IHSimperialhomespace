import { useEffect, useRef } from "react";
import "./Hero.css";

const Hero = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 },
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" id="home">
      {/* Background layers */}
      <div className="hero-bg">
        <div className="hero-bg-image" />
        <div className="hero-overlay" />
        <div className="hero-gradient" />
        <div className="hero-shimmer" />
      </div>

      {/* Subtle floating orbs */}
      <div className="hero-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* Decorative lines */}
      <div className="hero-lines">
        <div className="line line-left" />
        <div className="line line-right" />
      </div>

      <div className="hero-content" ref={titleRef}>
        <p className="hero-eyebrow">
          <span className="eyebrow-line" />
          Premier Interior Design
          <span className="eyebrow-line" />
        </p>

        <h1 className="hero-title">
          <span className="title-main gold-text">IHS</span>
          <span className="title-divider" />
          <span className="title-sub">Imperial Home Space</span>
        </h1>

        <p className="hero-tagline">
          Creating Interiors That Reflect Your Lifestyle
        </p>

        <p className="hero-desc">
          Transforming visions into breathtaking spaces — luxury residential,
          <br />
          commercial & office interiors crafted with unmatched precision.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn-primary">
            <span>Get a Consultation</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </a>
          <a href="#gallery" className="btn-outline">
            <span>View Our Work</span>
          </a>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="corner-decoration tl" />
      <div className="corner-decoration tr" />
      <div className="corner-decoration bl" />
      <div className="corner-decoration br" />
    </section>
  );
};

export default Hero;
