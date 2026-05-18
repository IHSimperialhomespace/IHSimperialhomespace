import { useState, useEffect } from "react";
import "./Gallery.css";

const categories = {
  residential: {
    label: "Residential Spaces",
    subtitle: "Bedrooms · Living Rooms · Kitchens · Wardrobes · Home Bar",
    cover: "/gallery/living-2.jpg",
    images: [
      {
        src: "/gallery/living-1.jpg",
        title: "Modern Living Room",
        tag: "Living Room",
      },
      {
        src: "/gallery/living-2.jpg",
        title: "Premium Living Room",
        tag: "Living Room",
      },
      {
        src: "/gallery/living-3.jpg",
        title: "Contemporary Living Space",
        tag: "Living Room",
      },
      {
        src: "/gallery/living-4.jpg",
        title: "Open Plan Living & Dining",
        tag: "Living Room",
      },
      {
        src: "/gallery/kitchen-1.jpg",
        title: "Modern Modular Kitchen",
        tag: "Kitchen",
      },
      {
        src: "/gallery/kitchen-2.jpg",
        title: "Luxury Island Kitchen",
        tag: "Kitchen",
      },
      {
        src: "/gallery/kitchen-3.jpg",
        title: "Rose Gold Kitchen Design",
        tag: "Kitchen",
      },
      {
        src: "/gallery/bar-1.jpg",
        title: "Home Bar & Entertainment",
        tag: "Home Bar",
      },
      { src: "/gallery/bar-2.jpg", title: "Luxury Bar Unit", tag: "Home Bar" },
      {
        src: "/gallery/bedroom-1.jpg",
        title: "Luxury Master Bedroom",
        tag: "Bedroom",
      },
      {
        src: "/gallery/bedroom-2.jpg",
        title: "Premium Bedroom Design",
        tag: "Bedroom",
      },
      {
        src: "/gallery/bedroom-3.jpg",
        title: "Wooden Panel Bedroom",
        tag: "Bedroom",
      },
      {
        src: "/gallery/wardrobe-1.jpg",
        title: "Walk-in Wardrobe",
        tag: "Wardrobe",
      },
      {
        src: "/gallery/wardrobe-2.jpg",
        title: "Gold Walk-in Wardrobe",
        tag: "Wardrobe",
      },
      {
        src: "/gallery/wardrobe-3.jpg",
        title: "Built-in Wardrobe",
        tag: "Wardrobe",
      },
      {
        src: "/gallery/wardrobe-4.jpg",
        title: "Luxury Wardrobe Design",
        tag: "Wardrobe",
      },
      {
        src: "/gallery/wardrobe-5.jpg",
        title: "Premium Walk-in Closet",
        tag: "Wardrobe",
      },
      {
        src: "/gallery/wardrobe-6.jpg",
        title: "Dark Wood Wardrobe",
        tag: "Wardrobe",
      },
      {
        src: "/gallery/wardrobe-7.jpg",
        title: "Bespoke Wardrobe Design",
        tag: "Wardrobe",
      },
    ],
  },
  commercial: {
    label: "Commercial Spaces",
    subtitle: "Offices · Restaurants · Retail · Hotels · Showrooms",
    cover:
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=1200&q=80",
    images: [
      {
        src: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&q=80",
        title: "Modern Corporate Office",
        tag: "Office",
      },
      {
        src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
        title: "Open Plan Office Space",
        tag: "Office",
      },
      {
        src: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80",
        title: "Executive Cabin Design",
        tag: "Office",
      },
      {
        src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
        title: "Fine Dining Restaurant",
        tag: "Restaurant",
      },
      {
        src: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&q=80",
        title: "Luxury Restaurant Interior",
        tag: "Restaurant",
      },
      {
        src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
        title: "Modern Cafe Design",
        tag: "Restaurant",
      },
      {
        src: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=80",
        title: "Retail Store Interior",
        tag: "Retail",
      },
      {
        src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
        title: "Fashion Showroom",
        tag: "Retail",
      },
      {
        src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
        title: "Luxury Hotel Room",
        tag: "Hospitality",
      },
      {
        src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
        title: "Hotel Lobby Design",
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
            Real projects, real spaces — every image you see here is crafted by
            IHS Imperial Home Space.
          </p>
        </div>

        <div className={`gallery-stage ${entering ? "exiting" : "entered"}`}>
          {/* Category Cards */}
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

          {/* Image Grid */}
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

      {/* Lightbox */}
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
