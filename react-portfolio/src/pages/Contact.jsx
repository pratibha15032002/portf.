import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Button ko disable karne ke liye

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setShowAlert(true);
      } else {
        alert("Somthing is error: " + data.message);
      }
    } catch (err) {
      console.error("Backend Error:", err);
      alert("Server is Busy please wait And try Again.");
    } finally {
      setIsSubmitting(false); 
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const closeAlert = () => {
    setShowAlert(false);
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <section className="contact-wrapper">
      <div className="contact-container">
        <header className="contact-header">
          <p className="contact-subtitle">Get In Touch</p>
          <h1>Contact Me</h1>
          <div className="header-underline"></div>
        </header>

        <div className="contact-grid">
          {/* LEFT SIDE: INFO */}
          <div className="info-side">
            <div className="contact-card">
              <div className="icon-circle"><span>📞</span></div>
              <div className="details">
                <h4>Phone</h4>
                <p>+91 8269981573</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="icon-circle"><span>✉️</span></div>
              <div className="details">
                <h4>Email</h4>
                <p>pratibha15032002@gmail.com</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="icon-circle"><span>📍</span></div>
              <div className="details">
                <h4>Location</h4>
                <p>Singrauli, MP, India</p>
              </div>
            </div>

            <div className="map-box">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116447.8507851211!2d82.6078235546059!3d24.189508103328224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398ef01438902513%3A0xc39281a17951a831!2sSingrauli%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Singrauli Map"
              ></iframe>
            </div>
          </div>

          {/* RIGHT SIDE: FORM */}
          <div className="form-side">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="input-group">
                <input
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  autoComplete="off"
                />
                <label>Full Name</label>
                <span className="input-highlight"></span>
              </div>

              <div className="input-group">
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  autoComplete="off"
                />
                <label>Email Address</label>
                <span className="input-highlight"></span>
              </div>

              <div className="input-group">
                <textarea
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
                <label>Your Message</label>
                <span className="input-highlight"></span>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? "loading" : ""}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message "}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      {showAlert && (
        <div className="alert-overlay">
          <div className="alert-modal">
            <div className="success-icon">✓</div>
            <h3>Message Sent!</h3>
            <p>Hi <b>{formData.name}</b>, thanks for reaching out. I'll reply soon!</p>
            <button className="modal-close-btn" onClick={closeAlert}>Awesome</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;