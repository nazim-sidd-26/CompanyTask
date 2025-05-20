import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Book an Appointment</h2>
        </div>
        <div>
          
        </div>
        <div style={{textAlign:'center'}}>
          <p>
            Ready for your premium grooming experience? Book your appointment
            today!
          </p>
          <div className="contact-buttons">
            <a href="tel:+19406129127" className="contact-btn">
              <FaPhoneAlt /> Call Now
            </a>
            <a
              href="https://maps.google.com/?q=500+N+Bell+Ave+%23109,+Denton,+TX+76209"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn btn-outline"
            >
              <FaMapMarkerAlt /> Get Directions
            </a>
            <a
              href="mailto:info@famabarber.com"
              className="contact-btn btn-outline"
            >
              <FaEnvelope /> Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
