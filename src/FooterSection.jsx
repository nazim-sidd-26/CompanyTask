import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYelp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-container">
          {/* Logo & Description */}
          <div className="footer-col">
            <div className="logo-container" style={{ marginBottom: "20px" }}>
              <svg
                className="logo-img"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "40px", height: "40px" }}
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#d4af37"
                  strokeWidth="3"
                />
                <path
                  d="M30,30 Q50,10 70,30 L60,50 Q50,70 40,50 Z"
                  fill="#d4af37"
                />
                <path
                  d="M35,40 L45,40 M55,40 L65,40"
                  stroke="#1a1a1a"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M40,60 Q50,80 60,60"
                  stroke="#1a1a1a"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
              <div className="logo-text">
                FAMA<span>Barber</span>
              </div>
            </div>
            <p>
              Premium barber shop and beauty salon in Denton, TX offering
              top-quality grooming services with a focus on customer
              satisfaction.
            </p>
            <div className="social-links">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaYelp /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#testimonials">Reviews</a></li>
              <li><a href="#location">Location</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h3>Services</h3>
            <ul className="footer-links">
              <li><a href="#">Haircuts</a></li>
              <li><a href="#">Beard Trims</a></li>
              <li><a href="#">Shaves</a></li>
              <li><a href="#">Hair Coloring</a></li>
              <li><a href="#">Facials</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h3>Contact Info</h3>
            <p><FaMapMarkerAlt /> 500 N Bell Ave #109, Denton, TX 76209</p>
            <p><FaPhoneAlt /> +1 940-612-9127</p>
            <p><FaEnvelope /> info@famabarber.com</p>
            <p><FaClock /> Mon-Fri: 9AM-7PM, Sat: 9AM-5PM</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright">
          <p>
            &copy; 2023 Fama Barber Shop & Beauty Salon. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
