import './Services.css'

const services = [
  {img:'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80',icon:'🏠',title:'Residential Interiors',tag:'Residential',price:null,items:['3BHK Apartment Interiors','Home Designs & Home Plan','House Floor Plans','Home Staging','Interior Decoration']},
  {img:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',icon:'🏢',title:'Commercial & Office',tag:'Commercial',price:'From ₹20,000',items:['Commercial Interior Design','Office Space Design','Restaurant Design','Residential & Commercial','Architects & Interiors']},
  {img:'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',icon:'🍳',title:'Kitchen & Bathroom',tag:'Bespoke',price:null,items:['Kitchen Design','Bathroom Design','Cabinetry & Hardware','Closet Design','Door Design']},
  {img:'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&q=80',icon:'🛋️',title:'Room & Space Design',tag:'Interiors',price:null,items:['Living Room Design','Bedroom Design','Dining Room Design','Room Planning','Space Planning']},
  {img:'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80',icon:'📐',title:'Architecture & Planning',tag:'Planning',price:'From ₹30,000',items:['Interior Architectural Design','Construction Consulting','Creative Interior Designers','Exterior Decor','3D Visualization']},
  {img:'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=600&q=80',icon:'🎨',title:'Styling & Finishing',tag:'Styling',price:null,items:['Interior Decorating','Home Decor Selection','Custom Art Selection','Flooring Selection','Interior Painting']},
]

const Services = () => (
  <section className="section services-section" id="services">
    <div className="container">
      <div className="section-header">
        <p className="section-label">What We Offer</p>
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Comprehensive interior design solutions for every space in Hyderabad.</p>
      </div>
      <div className="services-grid">
        {services.map((s,i) => (
          <div className="service-card" key={i}>
            <div className="service-img">
              <img src={s.img} alt={s.title} loading="lazy" />
              <div className="service-img-overlay" />
              <span className="service-tag">{s.tag}</span>
              {s.price && <span className="service-price">{s.price}</span>}
            </div>
            <div className="service-body">
              <span className="service-icon">{s.icon}</span>
              <h3 className="service-title">{s.title}</h3>
              <ul className="service-list">
                {s.items.map((item,j) => <li key={j}><span className="service-list-dot">◈</span>{item}</li>)}
              </ul>
              <a href="#contact" className="service-link">Enquire →</a>
            </div>
          </div>
        ))}
      </div>
      <div className="services-cta"><a href="#contact" className="btn-outline"><span>Book a Free Consultation</span></a></div>
    </div>
  </section>
)

export default Services
