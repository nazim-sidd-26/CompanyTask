import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="scissors-animation">
        <i className="fas fa-cut fa-2x" style={{ color: 'rgba(212, 175, 55, 0.7)' }}></i>
      </div>
      <div className="scissors-animation">
        <i className="fas fa-cut fa-2x" style={{ color: 'rgba(212, 175, 55, 0.7)' }}></i>
      </div>
      <div className="scissors-animation">
        <i className="fas fa-cut fa-2x" style={{ color: 'rgba(212, 175, 55, 0.7)' }}></i>
      </div>

      <div className="container">
        <div className="hero-content">
          <h1 className="animate__animated animate__fadeInDown">
            Fama Barber Shop & Beauty Salon
          </h1>
          <p className="animate__animated animate__fadeIn animate__delay-1s">
            Premium grooming services in Denton, TX
          </p>

          <div className="rating animate__animated animate__fadeIn animate__delay-2s">
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <span>4.6 (116+ reviews)</span>
          </div>

          <div className="status animate__animated animate__fadeIn animate__delay-2s">
            Open ⋅ Closes 7PM
          </div>

          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <a href="#contact" className="btn">Book Appointment</a>
            <a href="tel:+19406129127" className="btn btn-outline">Call Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
