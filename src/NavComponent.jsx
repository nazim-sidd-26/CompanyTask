import React from 'react';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  return (
    <header id="mainHeader">
      <div className="container header-container">
        <div className="logo-container">
          <svg
            className="logo-img"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
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
        <button className="mobile-menu-btn" id="mobileMenuBtn">
          <FaBars />
        </button>
        <nav>
          <ul id="navMenu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#testimonials">Reviews</a></li>
            <li><a href="#location">Location</a></li>
            <li><a href="#contact">Contact </a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
