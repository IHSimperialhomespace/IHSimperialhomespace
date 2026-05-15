import { useEffect, useRef } from "react";
import "./About.css";

const About = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-grid" ref={ref}>
          {/* Image side */}
          <div className="about-image-wrap">
            <div className="about-image-frame">
              <div className="about-img-main">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
                  alt="Luxury interior design by IHS Imperial Home Space Hyderabad"
                />
                <div className="img-overlay" />
              </div>
              <div className="about-img-accent">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80"
                  alt="Premium wooden interior design detail"
                />
              </div>
              <div className="years-badge">
                <span className="years-num">10+</span>
                <span className="years-label">Years of Excellence</span>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="about-text">
            <p className="section-label">Who We Are</p>
            <h2 className="section-title">
              Hyderabad's Trusted
              <br />
              <em>Interior Design</em> Studio
            </h2>
            <div className="gold-divider" />

            <p className="about-desc">
              <strong>IHS Imperial Home Space</strong> is one of Hyderabad's
              most trusted interior design firms, delivering premium residential
              and commercial interiors across Telangana. With over 10 years of
              experience, we transform apartments, villas, farmhouses, and
              offices into spaces that are as functional as they are beautiful.
            </p>

            <p className="about-desc" style={{ marginTop: "16px" }}>
              From <strong>modular kitchens</strong> and{" "}
              <strong>luxury bedrooms</strong> to
              <strong> walk-in wardrobes</strong>,{" "}
              <strong>living room design</strong>, and
              <strong> commercial office interiors</strong> — our team of expert
              designers and 3D visualizers bring your vision to life with
              precision, warmth, and unmatched craftsmanship. We proudly serve
              clients across Hyderabad, Secunderabad, and surrounding areas.
            </p>

            <div className="about-features">
              {[
                {
                  icon: "◈",
                  title: "Bespoke Design",
                  desc: "Every project uniquely tailored to your vision and lifestyle",
                },
                {
                  icon: "◈",
                  title: "End-to-End Execution",
                  desc: "From concept and 3D visualization to final handover",
                },
                {
                  icon: "◈",
                  title: "Premium Materials",
                  desc: "Finest wooden finishes, textures, and luxury materials",
                },
              ].map((f) => (
                <div className="about-feature" key={f.title}>
                  <span className="feature-icon">{f.icon}</span>
                  <div>
                    <strong>{f.title}</strong>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Hidden SEO paragraph — visible to Google, subtle for users */}
            <p className="about-seo-text">
              We specialize in interior design services in Hyderabad including
              3BHK apartment interiors, modular kitchen design, master bedroom
              design with wooden panels, kids bedroom design, walk-in wardrobe
              design, dining room interiors, false ceiling design, office space
              design, restaurant interiors, and farmhouse interiors. Our
              interior designers in Hyderabad combine creativity with technical
              expertise to deliver spaces that exceed expectations.
            </p>

            <a
              href="#contact"
              className="btn-primary"
              style={{ marginTop: "8px", display: "inline-flex" }}
            >
              <span>Book a Free Consultation</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
