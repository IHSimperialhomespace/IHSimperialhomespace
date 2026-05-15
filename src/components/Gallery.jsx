import { useState, useEffect } from "react";
import "./Gallery.css";

const categories = {
  residential: {
    label: "Residential Spaces",
    subtitle: "Apartments · Villas · Bungalows · Farmhouses",
    cover:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80",
    images: [
      {
        src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80",
        title: "Luxury Master Bedroom",
        tag: "Bedroom",
      },
      {
        src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
        title: "Wooden Panel Bedroom",
        tag: "Bedroom",
      },
      {
        src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
        title: "Modular Kitchen Design",
        tag: "Kitchen",
      },
      {
        src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80",
        title: "Luxury Kitchen Interior",
        tag: "Kitchen",
      },
      {
        src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
        title: "Premium Living Room",
        tag: "Living Room",
      },
      {
        src: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&q=80",
        title: "Warm Wood Living Hall",
        tag: "Living Room",
      },
      {
        src: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=800&q=80",
        title: "Walk-in Wardrobe",
        tag: "Wardrobe",
      },
      {
        src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
        title: "Kids Bedroom Design",
        tag: "Kids Room",
      },
      {
        src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
        title: "Farmhouse Living Room",
        tag: "Farmhouse",
      },
      {
        src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
        title: "Luxury Bathroom",
        tag: "Bathroom",
      },
      {
        src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
        title: "Dining Room Design",
        tag: "Dining",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
        title: "Wooden Ceiling Bedroom",
        tag: "Bedroom",
      },
    ],
  },
  commercial: {
    label: "Commercial Spaces",
    subtitle: "Offices · Restaurants · Retail · Showrooms",
    cover:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    images: [
      {
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
        title: "Corporate Office",
        tag: "Office",
      },
      {
        src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
        title: "Restaurant Interior",
        tag: "Restaurant",
      },
      {
        src: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800&q=80",
        title: "Modern Open Workspace",
        tag: "Office",
      },
      {
        src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
        title: "Executive Suite",
        tag: "Office",
      },
      {
        src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
        title: "Retail Showroom",
        tag: "Retail",
      },
      {
        src: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800&q=80",
        title: "Luxury Hotel Lobby",
        tag: "Hospitality",
      },
    ],
  },
};

const Gallery = () => {
  const [active, setActive] = useState(null);
  const [lightbox, setLightbox] = useState(null);
  const [entering, setEntering] = useState(false);
  const [filter, setFilter] = useState("All");

  const openCategory = (key) => {
    setEntering(true);
    setLightbox(null);
    setFilter("All");
    setTimeout(() => {
      setActive(key);
      setEntering(false);
    }, 250);
  };

  const closeCategory = () => {
    setEntering(true);
    setLightbox(null);
    setTimeout(() => {
      setActive(null);
      setEntering(false);
      setFilter("All");
    }, 250);
  };

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const tags = active
    ? ["All", ...new Set(categories[active].images.map((i) => i.tag))]
    : [];
  const filteredImages = active
    ? filter === "All"
      ? categories[active].images
      : categories[active].images.filter((i) => i.tag === filter)
    : [];

  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Our Work</h2>
          <p className="section-subtitle">
            Explore spaces we have transformed — each project a unique story of
            elegance, warmth, and precision craftsmanship.
          </p>
        </div>

        <div className={`gallery-stage ${entering ? "exiting" : "entered"}`}>
          {/* ── Category Cards ── */}
          {!active && (
            <div className="gallery-categories">
              {Object.entries(categories).map(([key, cat], idx) => (
                <div
                  className="gallery-cat-card"
                  key={key}
                  onClick={() => openCategory(key)}
                  style={{ animationDelay: `${idx * 0.12}s` }}
                >
                  <div className="cat-img-wrap">
                    <img src={cat.cover} alt={cat.label} loading="lazy" />
                    <div className="cat-img-overlay" />
                    <div className="cat-shine" />
                  </div>
                  <div className="cat-content">
                    <div className="cat-meta">
                      <span className="cat-count">
                        {cat.images.length} Projects
                      </span>
                    </div>
                    <h3 className="cat-title">{cat.label}</h3>
                    <p className="cat-subtitle">{cat.subtitle}</p>
                    <div className="cat-cta">
                      <span>Explore</span>
                      <span className="cat-arrow">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M3 9h12M10 4l5 5-5 5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="cat-frame" />
                </div>
              ))}
            </div>
          )}

          {/* ── Image Grid ── */}
          {active && (
            <div className="gallery-view">
              <div className="gallery-view-top">
                <button className="gallery-back-btn" onClick={closeCategory}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M13 8H3M7 4L3 8l4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  All Categories
                </button>
                <div className="gallery-switch">
                  {Object.entries(categories).map(([key, cat]) => (
                    <button
                      key={key}
                      className={`gallery-switch-btn ${active === key ? "active" : ""}`}
                      onClick={() => openCategory(key)}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="gallery-view-title-row">
                <h3 className="gallery-view-title">
                  {categories[active].label}
                </h3>
                <span className="gallery-view-sub">
                  {categories[active].subtitle}
                </span>
              </div>

              <div className="gallery-filters">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    className={`gallery-filter-btn ${filter === tag ? "active" : ""}`}
                    onClick={() => setFilter(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <div className="gallery-grid">
                {filteredImages.map((img, i) => (
                  <div
                    className="gallery-item"
                    key={`${filter}-${i}`}
                    style={{ animationDelay: `${i * 0.06}s` }}
                    onClick={() => setLightbox(i)}
                  >
                    <div className="gallery-item-img">
                      <img src={img.src} alt={img.title} loading="lazy" />
                    </div>
                    <div className="gallery-item-tag">{img.tag}</div>
                    <div className="gallery-item-hover">
                      <span className="gallery-item-title">{img.title}</span>
                      <span className="gallery-item-zoom">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M9 4v10M4 9h10"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {!active && (
          <div className="gallery-cta">
            <a href="#contact" className="btn-outline">
              <span>Start Your Project</span>
            </a>
          </div>
        )}
      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && active && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="lb-close" onClick={() => setLightbox(null)}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 3l10 10M13 3L3 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <img
              src={filteredImages[lightbox]?.src}
              alt={filteredImages[lightbox]?.title}
            />
            <div className="lb-footer">
              <button
                className="lb-nav-btn"
                onClick={() =>
                  setLightbox(
                    (l) =>
                      (l - 1 + filteredImages.length) % filteredImages.length,
                  )
                }
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M13 8H3M7 4L3 8l4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <div className="lb-info">
                <span className="lb-title">
                  {filteredImages[lightbox]?.title}
                </span>
                <span className="lb-count">
                  {lightbox + 1} / {filteredImages.length}
                </span>
              </div>
              <button
                className="lb-nav-btn"
                onClick={() =>
                  setLightbox((l) => (l + 1) % filteredImages.length)
                }
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
