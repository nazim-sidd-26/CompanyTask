import React from "react";

const services = [
  {
    title: "Classic Haircut",
    price: "$35+",
    description:
      "Professional haircut with precision styling using modern techniques and tools.",
    img: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
  },
  {
    title: "Beard Trim & Shave",
    price: "$25+",
    description:
      "Expert beard shaping and hot towel shave for a clean, polished look.",
    img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Hair Coloring",
    price: "$60+",
    description:
      "Professional hair coloring services using premium products for vibrant results.",
    img: "https://media.istockphoto.com/id/2209388377/photo/male-hairdresser-dyeing-hair-of-the-female-client-at-the-beauty-salon-hairdresser-applying.webp?a=1&b=1&s=612x612&w=0&k=20&c=Tai_lY5vRSDK0s6X39FJ4Rvav5SUtA_I79ePq1-CV-Y=",
  },
  {
    title: "Facial Treatments",
    price: "$45+",
    description:
      "Rejuvenating facial treatments to refresh and revitalize your skin.",
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80",
  },
  {
    title: "Kids Haircuts",
    price: "$25+",
    description:
      "Specialized haircuts for children in a friendly, comfortable environment.",
    img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Hair Styling",
    price: "$30+",
    description:
      "Professional styling for special occasions or everyday perfection.",
    img: "https://plus.unsplash.com/premium_photo-1661668935701-2429eb4da878?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGFpciUyMFN0eWxpbmd8ZW58MHx8MHx8fDA%3D",
  },
];

const ServicesSection = () => {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-image">
                <img src={service.img} alt={service.title} />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="price">{service.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
