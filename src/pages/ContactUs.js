import React from "react";

const enquiries = [
  {
    title: "Product Enquiry",
    description:
      "Got questions about our dairy products? Drop us a line for info on availability, flavors, and more. Your MilkyMist adventure awaits!",
    image: "/images/c1.avif", // replace with your image path
    linkText: "Enquiry",
    link: "#",
  },
  {
    title: "Distributor Enquiry",
    description:
      "Interested in distributing MilkyMist goodness? Let's talk! Reach out to explore distributorship possibilities and grow together.",
    image: "/images/c2.avif",
    linkText: "Enquiry",
    link: "#",
  },
  {
    title: "Vendor Enquiry",
    description:
      "Supplying top-notch ingredients? Let's team up! Contact us to discuss becoming a MilkyMist vendor and join our quality-driven network.",
    image: "/images/c3.avif",
    linkText: "Enquiry",
    link: "#",
  },
  {
    title: "Careers",
    description:
      "Explore MilkyMist careers. Fill out the form below to begin your dairy industry journey. Join us in crafting dairy excellence!",
    image: "/images/c4.avif",
    linkText: "Join us",
    link: "#",
  },
];

function ContactUs() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">CONTACT US</h1>
      <div className="enquiry-grid">
        {enquiries.map((item, index) => (
          <div className="enquiry-card" key={index}>
            <img src={item.image} alt={item.title} className="enquiry-img" />
            <div className="enquiry-content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a href={item.link} className="enquiry-btn">
                {item.linkText} <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactUs;
