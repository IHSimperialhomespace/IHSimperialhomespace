import { useState } from "react";
import "./Estimator.css";

const Estimator = () => {
  const [apt, setApt] = useState("");
  const [rooms, setRooms] = useState([]);
  const [kitchen, setKitchen] = useState("");
  const [area, setArea] = useState("");
  const [style, setStyle] = useState("");
  const [sent, setSent] = useState(false);

  const aptTypes = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "Villa", "Penthouse"];
  const roomOptions = [
    "Master Bedroom",
    "Bedroom 2",
    "Bedroom 3",
    "Kids Room",
    "Guest Room",
    "Living Room",
    "Dining Room",
    "Study Room",
  ];
  const styleOptions = [
    "Modern Luxury",
    "Contemporary",
    "Classic / Traditional",
    "Minimalist",
    "Eclectic",
    "Not Sure Yet",
  ];

  const toggleRoom = (r) =>
    setRooms((prev) =>
      prev.includes(r) ? prev.filter((x) => x !== r) : [...prev, r],
    );

  const canSend = apt || rooms.length || kitchen || area || style;

  const sendWhatsApp = () => {
    if (!canSend) return;

    const lines = [
      "🏠 *IHS — Interior Design Consultation Request*",
      "─────────────────────────────",
      apt ? `🏢 *Apartment Type:* ${apt}` : null,
      area ? `📐 *Carpet Area:* ${area} sq ft` : null,
      rooms.length
        ? `🛋️ *Rooms to Design:*\n   • ${rooms.join("\n   • ")}`
        : null,
      kitchen ? `🍳 *Modular Kitchen:* ${kitchen}` : null,
      style ? `🎨 *Interior Style:* ${style}` : null,
      "─────────────────────────────",
      "Please help me with a detailed consultation and quote for the above specifications. Thank you!",
    ]
      .filter(Boolean)
      .join("\n");

    const encoded = encodeURIComponent(lines);
    window.open(`https://wa.me/919989828787?text=${encoded}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="section estimator-section" id="estimate">
      <div className="container">
        <div className="estimator-inner">
          {/* Left: header */}
          <div className="estimator-header">
            <p className="section-label">Quick Estimate</p>
            <h2 className="section-title">
              Get Your Budget
              <br />
              <em>Estimate Instantly</em>
            </h2>
            <div className="gold-divider" />
            <p className="section-subtitle">
              Share your requirements and our design experts will reach out with
              a personalised quote — no guesswork, no generic pricing.
            </p>

            {/* What happens next */}
            <div className="estimator-steps">
              {[
                { num: "01", text: "Fill your space details" },
                { num: "02", text: "Send via WhatsApp instantly" },
                { num: "03", text: "Expert calls within 2 hours" },
                { num: "04", text: "Get your custom quote" },
              ].map((s) => (
                <div className="est-step" key={s.num}>
                  <span className="est-step-num">{s.num}</span>
                  <span className="est-step-text">{s.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="estimator-form">
            {/* Apartment type */}
            <div className="form-group">
              <label className="form-label">Apartment Type</label>
              <div className="pill-group">
                {aptTypes.map((a) => (
                  <button
                    key={a}
                    className={`pill ${apt === a ? "active" : ""}`}
                    onClick={() => setApt(a)}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>

            {/* Rooms */}
            <div className="form-group">
              <label className="form-label">Rooms to Design</label>
              <div className="pill-group">
                {roomOptions.map((r) => (
                  <button
                    key={r}
                    className={`pill ${rooms.includes(r) ? "active" : ""}`}
                    onClick={() => toggleRoom(r)}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {/* Kitchen */}
            <div className="form-group">
              <label className="form-label">Modular Kitchen?</label>
              <div className="pill-group">
                {["Yes", "No"].map((k) => (
                  <button
                    key={k}
                    className={`pill ${kitchen === k ? "active" : ""}`}
                    onClick={() => setKitchen(k)}
                  >
                    {k}
                  </button>
                ))}
              </div>
            </div>

            {/* Style */}
            <div className="form-group">
              <label className="form-label">Interior Style Preference</label>
              <div className="pill-group">
                {styleOptions.map((s) => (
                  <button
                    key={s}
                    className={`pill ${style === s ? "active" : ""}`}
                    onClick={() => setStyle(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Area */}
            <div className="form-group">
              <label className="form-label">Carpet Area (sq ft)</label>
              <input
                type="number"
                className="form-input"
                placeholder="e.g. 1200"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </div>

            {/* Preview of what will be sent */}
            {canSend && (
              <div className="wa-preview">
                <div className="wa-preview-header">
                  <span className="wa-icon">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </span>
                  <span className="wa-preview-title">Message Preview</span>
                </div>
                <div className="wa-preview-body">
                  {apt && (
                    <p>
                      <strong>Apartment:</strong> {apt}
                    </p>
                  )}
                  {area && (
                    <p>
                      <strong>Area:</strong> {area} sq ft
                    </p>
                  )}
                  {rooms.length > 0 && (
                    <p>
                      <strong>Rooms:</strong> {rooms.join(", ")}
                    </p>
                  )}
                  {kitchen && (
                    <p>
                      <strong>Modular Kitchen:</strong> {kitchen}
                    </p>
                  )}
                  {style && (
                    <p>
                      <strong>Style:</strong> {style}
                    </p>
                  )}
                </div>
              </div>
            )}

            <button
              className={`btn-primary wa-btn ${!canSend ? "disabled" : ""}`}
              onClick={sendWhatsApp}
              disabled={!canSend}
              style={{
                width: "100%",
                justifyContent: "center",
                marginTop: "8px",
              }}
            >
              <span>
                {sent ? "✓ Request Sent!" : "Get Consultation on WhatsApp"}
              </span>
              {!sent && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Estimator;
