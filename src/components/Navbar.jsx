import { useState, useEffect } from "react";
import { useRouter } from "../router";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { page, navigate } = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", page: "home" },
    { label: "About", page: "about" },
    { label: "Services", page: "services" },
    { label: "Gallery", page: "gallery" },
    { label: "Blog", page: "blog" },
    { label: "Contact", page: "contact" },
  ];

  const handleNav = (p) => {
    navigate(p);
    setMenuOpen(false);
  };

  const isActive = (p) => page === p || (p === "home" && page === "");

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        {/* Logo — real image */}
        <button className="logo" onClick={() => handleNav("home")}>
          <img
            src="/logo.jpg"
            alt="IHS Imperial Home Space"
            className="logo-img"
          />
        </button>

        {/* Desktop Nav */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.page}>
              <button
                className={`nav-link ${isActive(link.page) ? "active" : ""}`}
                onClick={() => handleNav(link.page)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="nav-cta" onClick={() => handleNav("contact")}>
          <span>Get Consultation</span>
        </button>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <button
            key={link.page}
            className={`mobile-link ${isActive(link.page) ? "active" : ""}`}
            onClick={() => handleNav(link.page)}
          >
            {link.label}
          </button>
        ))}
        <button className="btn-primary" onClick={() => handleNav("contact")}>
          <span>Get Consultation</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
