// src/components/BrochureCards.js
import React from "react";

export default function BrochureCards() {
  const brochures = [
    {
      title: "Milky Mist All Products",
      image: "/images/b1.avif", 
      link: "/files/Milkymist.pdf",   // ✅ must include .pdf
    },
    {
      title: "Capella Chocolates",
      image: "/images/b2.avif",
      link: "/files/Capella.pdf",
    },
    {
      title: "Milkymist Ice Creams",
      image: "/images/b3.avif",
      link: "/files/icecream.pdf",
    },
  ];

  return (
    <section className="brochure-section container">
      <h2>Brochure</h2>
      <p>
        Our brochures bring you closer to the quality, nutrition, and goodness
        of MilkyMist.
        <br />
        Get to know your favorite products better!
      </p>

      <div className="brochure-grid">
        {brochures.map((item, index) => (
          <div className="brochure-card" key={index}>
            {/* ✅ Image link opens PDF in new tab */}
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.image} alt={item.title} />
            </a>
            <div className="card-body">
              <h6 className="card-title">{item.title}</h6>
              {/* ✅ Button link also opens PDF in new tab */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="brochure-btn"
              >
                Download Brochure
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

