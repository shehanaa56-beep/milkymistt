import React from "react";

export default function SubBrands() {
  const brands = [
    "/images/sub1.png",
    "/images/sub2.jfif",
    "/images/sub3.png",
    "/images/sub4.jfif",
     "/images/sub1.png",
    "/images/sub2.jfif",
    "/images/sub3.png",
    "/images/sub4.jfif",
     "/images/sub1.png",
    "/images/sub2.jfif",
    "/images/sub3.png",
    "/images/sub4.jfif",
     "/images/sub1.png",
    "/images/sub2.jfif",
    "/images/sub3.png",
    "/images/sub4.jfif",
    
  ];

  return (
    <section className="sub-brands-section">
      <h2>
        OUR <span>SUB-BRANDS</span>
      </h2>
      <div className="slider">
        <div className="slide-track">
          {brands.map((logo, index) => (
            <div className="slide" key={index}>
              <img src={logo} alt={`brand-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
