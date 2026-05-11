import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello IHS Imperial Home Space!%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/9109989828787?text=${msg}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="contact-bg" />
      <div className="container">
        <div className="contact-grid">
          {/* Info */}
          <div className="contact-info">
            <p className="section-label">Get In Touch</p>
            <h2 className="section-title">
              Let's Create Something
              <br />
              <em>Extraordinary Together</em>
            </h2>
            <div className="gold-divider" />

            <div className="contact-details">
              {[
                {
                  icon: "📍",
                  label: "Visit Us",
                  val: "Hyderabad, Telangana, India",
                },
                {
                  icon: "📞",
                  label: "Call Us",
                  val: "+91 09989828787",
                  link: "tel:+9109989828787",
                },
                {
                  icon: "✉️",
                  label: "Email Us",
                  val: "imperialhomespaces@gmail.com",
                  link: "mailto:imperialhomespaces@gmail.com",
                },
                {
                  icon: "⏰",
                  label: "Working Hours",
                  val: "Mon–Sat: 10:00 AM – 7:00 PM",
                },
              ].map((d) => (
                <div className="contact-detail" key={d.label}>
                  <span className="detail-icon">{d.icon}</span>
                  <div>
                    <span className="detail-label">{d.label}</span>
                    {d.link ? (
                      <a href={d.link} className="detail-val link">
                        {d.val}
                      </a>
                    ) : (
                      <p className="detail-val">{d.val}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="contact-social">
              <span className="social-label">Follow Us</span>
              <div className="social-links">
                {["Instagram", "Facebook", "Pinterest", "Houzz"].map((s) => (
                  <a key={s} href="#" className="social-btn">
                    {s[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            <div className="contact-form-header">
              <h3>Send Us a Message</h3>
              <p>We'll get back to you within 24 hours.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label>Your Name *</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label>Phone *</label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="+91 99898 28787"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-field">
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label>Message *</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <span>{sent ? "✓ Message Sent!" : "Send via WhatsApp"}</span>
                {!sent && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
