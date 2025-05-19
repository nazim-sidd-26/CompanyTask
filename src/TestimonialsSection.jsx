import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const testimonials = [
  {
    stars: 5,
    text: `The barbers at Fama are true artists. Yes, it's a bit pricier than
      other shops, but the quality of the haircut is worth every penny. My
      hair has never looked better!`,
    name: "Michael Johnson",
    role: "Regular Client",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    stars: 4.5,
    text: `I've been coming to Fama for years. The atmosphere is great and
      the barbers are skilled professionals. While it's not the cheapest
      option, you definitely get what you pay for.`,
    name: "David Wilson",
    role: "Long-time Customer",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    stars: 4,
    text: `Costly compared to other barbershops but with better haircuts. The
      service is excellent and they really take their time to get it
      right. I don't mind paying more for this quality.`,
    name: "Robert Garcia",
    role: "New Client",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];

const renderStars = (rating) => {
  const stars = [];
  let count = rating;
  for (let i = 0; i < 5; i++) {
    if (count >= 1) {
      stars.push(<FaStar key={i} />);
      count--;
    } else if (count >= 0.5) {
      stars.push(<FaStarHalfAlt key={i} />);
      count = 0;
    } else {
      stars.push(<FaRegStar key={i} />);
    }
  }
  return stars;
};

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>Client Reviews</h2>
        </div>
        <div className="testimonials-slider">
          {testimonials.map((testimonial, index) => (
            <div
              className={`testimonial ${
                index === activeIndex ? "active" : "inactive"
              }`}
              key={index}
            >
              <div className="stars">{renderStars(testimonial.stars)}</div>
              <p>{testimonial.text}</p>
              <div className="client-info">
                <img src={testimonial.image} alt={testimonial.name} />
                <div className="client-name">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="testimonial-nav">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`testimonial-dot ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
