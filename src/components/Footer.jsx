import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-top-border" />
    <div className="container">
      <div className="footer-grid">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-name">IHS</span>
            <span className="footer-logo-sub">Imperial Home Space</span>
          </div>
          <p className="footer-tagline">
            Crafting exceptional interiors that transform how you live and work.
          </p>
          <p className="footer-desc">
            Interior Design · Renovation · Turnkey Solutions
            <br />
            Hyderabad, Telangana, India
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4 className="footer-col-title">Navigation</h4>
          <ul className="footer-links">
            {["Home", "About", "Services", "Gallery", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`}>{l}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4 className="footer-col-title">Services</h4>
          <ul className="footer-links">
            {[
              "Home Interiors",
              "Office Interiors",
              "Commercial Spaces",
              "Layout Planning",
              "3D Visualization",
              "Custom Furniture",
            ].map((s) => (
              <li key={s}>
                <a href="#services">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4 className="footer-col-title">Contact</h4>
          <ul className="footer-links">
            <li>
              <a href="tel:+91099898 28787">+91 099898 28787</a>
            </li>
            <li>
              <a href="mailto:info@ihsimperial.com">
                imperialhomespaces@gmail.com
              </a>
            </li>
            <li className="no-link"> Hyderabad, Telangana</li>
            <li className="no-link"> Mon–Sat: 10 AM – 7 PM</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} IHS Imperial Home Space. All rights
          reserved.
        </p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
