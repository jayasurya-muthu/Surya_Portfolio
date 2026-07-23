import { useState } from "react";
import "./Contact.css";

const contactInfo = [
  {
    icon: "✉️",
    label: "Email",
    value: "jayasuriyamuthu004@gmail.com",
    link: "mailto:jayasuriyamuthu004@gmail.com",
    action: "Send Email",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+91 6385529199",
    link: "tel:+916385529199",
    action: "Call Now",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Chennai, Tamil Nadu\nIndia",
    link: null,
    action: null,
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    link: "https://www.linkedin.com/feed/",
    action: "View Profile ↗",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="section" style={{ paddingTop: "7rem" }}>
      <div className="section-header fade-up fade-up-1">
        <span className="section-num">04</span>
        <h2 className="section-title">Contact</h2>
        <div className="section-line" />
      </div>

      <p className="contact-intro fade-up fade-up-2">
        Have a project in mind or just want to say hello? I'd love to hear from you.
      </p>

      <div className="contact-grid">
        <div className="contact-left fade-up fade-up-3">
          <h3 className="contact-sub">Get in touch</h3>
          <div className="contact-cards">
            {contactInfo.map((c) => (
              <div key={c.label} className="contact-card">
                <div className="contact-icon">{c.icon}</div>
                <div className="contact-detail">
                  <p className="contact-label">{c.label}</p>
                  <p className="contact-value" style={{ whiteSpace: "pre-line" }}>{c.value}</p>
                  {c.link && (
                    <a href={c.link} target={c.link.startsWith("http") ? "_blank" : "_self"} rel="noreferrer" className="contact-action">
                      {c.action}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-right fade-up fade-up-4">
          <h3 className="contact-sub">Send a message</h3>
          {sent ? (
            <div className="success-msg">
              <span className="success-icon">✓</span>
              <p>Message sent! I'll get back to you soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Emter Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or just say hi..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

