import React from 'react';

const AboutPage = () => {
  return (

    <section className="section" id="about">
      <div className="container">
        <div className="section-title">
          <h2>About Us</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>Premium Barber Experience</h3>
            <p>
              At Fama Barber Shop &amp; Beauty Salon, we combine traditional
              barbering techniques with modern styling to deliver exceptional
              grooming services. Our skilled barbers are dedicated to providing
              you with a premium experience that leaves you looking and feeling
              your best.
            </p>
            <p>
              While we pride ourselves on quality service, we understand that
              our pricing reflects the premium experience we offer. We
              continuously strive to improve and provide value that matches our
              clients&apos; expectations.
            </p>
            <p>
              Visit us today and experience the Fama difference where every
              haircut is a work of art.
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
              alt="Barber working on client"
            />
          </div>
        </div>
      </div>
    </section>

  );
};

export default AboutPage;
