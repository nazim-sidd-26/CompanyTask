import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaDirections,
} from "react-icons/fa";

const LocationSection = () => {
  return (
    <section className="section location" id="location">
      <div className="container">
        <div className="section-title">
          <h2>Our Location</h2>
        </div>
        <div className="location-container">
          <div className="location-info">
            <h3>Visit Us Today</h3>

            <div className="info-item">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-text">
                <h4>Address</h4>
                <p>500 N Bell Ave #109, Denton, TX 76209</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaPhoneAlt />
              </div>
              <div className="info-text">
                <h4>Phone</h4>
                <p>
                  <a href="tel:+19406129127">+1 940-612-9127</a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaClock />
              </div>
              <div className="info-text">
                <h4>Hours</h4>
                <p>
                  Monday - Friday: 9AM - 7PM<br />
                  Saturday: 9AM - 5PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaDirections />
              </div>
              <div className="info-text">
                <h4>Directions</h4>
                <p>
                  <a
                    href="https://maps.google.com/?q=500+N+Bell+Ave+%23109,+Denton,+TX+76209"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions on Google Maps
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.036256725259!2d-97.1424667242399!3d33.32080537339958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dca6d2c8b3c8f%3A0x1c3e3b1b3b3b3b3b!2s500%20N%20Bell%20Ave%20%23109%2C%20Denton%2C%20TX%2076209!5e0!3m2!1sen!2sus!4v1681234567890!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
