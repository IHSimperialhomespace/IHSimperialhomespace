import { useState } from "react";
import "./Gallery.css";

const categories = {
  commercial: {
    label: "Commercial Spaces",
    cover:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    images: [
      {
        src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
        title: "Corporate Office",
      },
      {
        src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
        title: "Executive Suite",
      },
      {
        src: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800&q=80",
        title: "Modern Workspace",
      },
      {
        src: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&q=80",
        title: "Conference Room",
      },
      {
        src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
        title: "Restaurant Interior",
      },
      {
        src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
        title: "Retail Space",
      },
    ],
  },
  residential: {
    label: "Residential Spaces",
    cover:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80",
    images: [
      {
        src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
        title: "Living Room",
      },
      {
        src: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&q=80",
        title: "Master Bedroom",
      },
      {
        src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
        title: "Modular Kitchen",
      },
      {
        src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
        title: "Dining Area",
      },
      {
        src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
        title: "Bathroom Design",
      },
      {
        src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80",
        title: "3BHK Apartment",
      },
    ],
  },
};

const Gallery = () => {
  const [active, setActive] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  const openCategory = (key) => {
    setActive(key);
    setLightbox(null);
  };

  const closeCategory = () => {
    setActive(null);
    setLightbox(null);
  };

  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Our Work</h2>
          <p className="section-subtitle">
            Explore our portfolio across commercial and residential spaces, each
            designed with precision and artistry.
          </p>
        </div>

        {/* Category Cards */}
        {!active && (
          <div className="gallery-categories">
            {Object.entries(categories).map(([key, cat]) => (
              <div
                className="gallery-cat-card"
                key={key}
                onClick={() => openCategory(key)}
              >
                <div className="cat-card-img">
                  <img src={cat.cover} alt={cat.label} />
                  <div className="cat-card-overlay" />
                </div>
                <div className="cat-card-content">
                  <span className="cat-card-count">
                    {cat.images.length} Projects
                  </span>
                  <h3 className="cat-card-title">{cat.label}</h3>
                  <div className="cat-card-arrow">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M4 10h12M11 5l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="cat-card-border" />
              </div>
            ))}
          </div>
        )}

        {/* Gallery Grid */}
        {active && (
          <div className="gallery-view">
            {/* Back button + title */}
            <div className="gallery-view-header">
              <button className="gallery-back" onClick={closeCategory}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M13 8H3M7 4L3 8l4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span>Back</span>
              </button>
              <h3 className="gallery-view-title">{categories[active].label}</h3>
              <div className="gallery-tabs">
                {Object.entries(categories).map(([key, cat]) => (
                  <button
                    key={key}
                    className={`gallery-tab ${active === key ? "active" : ""}`}
                    onClick={() => openCategory(key)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="gallery-grid">
              {categories[active].images.map((img, i) => (
                <div
                  className="gallery-item"
                  key={i}
                  onClick={() => setLightbox(i)}
                >
                  <img src={img.src} alt={img.title} />
                  <div className="gallery-item-overlay">
                    <span className="gallery-item-title">{img.title}</span>
                    <div className="gallery-item-icon">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M10 4v12M4 10h12"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lightbox */}
        {lightbox !== null && active && (
          <div className="lightbox" onClick={() => setLightbox(null)}>
            <button
              className="lightbox-close"
              onClick={() => setLightbox(null)}
            >
              ✕
            </button>
            <img
              src={categories[active].images[lightbox].src}
              alt={categories[active].images[lightbox].title}
              onClick={(e) => e.stopPropagation()}
            />
            <p className="lightbox-title">
              {categories[active].images[lightbox].title}
            </p>
            <div className="lightbox-nav" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() =>
                  setLightbox(
                    (l) =>
                      (l - 1 + categories[active].images.length) %
                      categories[active].images.length,
                  )
                }
              >
                ‹
              </button>
              <span>
                {lightbox + 1} / {categories[active].images.length}
              </span>
              <button
                onClick={() =>
                  setLightbox((l) => (l + 1) % categories[active].images.length)
                }
              >
                ›
              </button>
            </div>
          </div>
        )}

        {!active && (
          <div className="gallery-cta">
            <a href="#contact" className="btn-outline">
              <span>Start Your Project</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
