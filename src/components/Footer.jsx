import { useRouter } from "../router";
import "./Footer.css";

const Footer = () => {
  const { navigate } = useRouter();

  return (
    <footer className="footer">
      <div className="footer-top-border" />
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <button className="footer-logo" onClick={() => navigate("home")}>
              <img
                src="/logo.jpg"
                alt="IHS Imperial Home Space"
                className="footer-logo-img"
              />
            </button>
            <p className="footer-tagline">
              Crafting exceptional interiors that transform how you live and
              work.
            </p>
            <p className="footer-desc">
              Interior Design · Renovation · Turnkey Solutions
              <br />
              Hyderabad, Telangana, India
            </p>
          </div>

          {/* Navigation */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              {[
                { label: "Home", page: "home" },
                { label: "About", page: "about" },
                { label: "Services", page: "services" },
                { label: "Gallery", page: "gallery" },
                { label: "Blog", page: "blog" },
                { label: "Contact", page: "contact" },
              ].map((l) => (
                <li key={l.page}>
                  <button onClick={() => navigate(l.page)}>{l.label}</button>
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
                  <button onClick={() => navigate("services")}>{s}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact</h4>
            <ul className="footer-links">
              <li>
                <a href="tel:+910998982878">+91 99898 28787</a>
              </li>
              <li>
                <a href="mailto:info@imperialhomespace.com">
                  info@imperialhomespace.com
                </a>
              </li>
              <li className="no-link">Hyderabad, Telangana</li>
              <li className="no-link">Mon–Sat: 10 AM – 7 PM</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} IHS Imperial Home Space. All rights
            reserved.
          </p>
          <div className="footer-legal">
            <button onClick={() => navigate("contact")}>Privacy Policy</button>
            <button onClick={() => navigate("contact")}>
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
