import React from "react";

const ethosData = [
  {
    img: "/images/o1.avif",  // replace with your image path
    title: "Assured Quality",
    desc: "To deliver top quality products is our utmost priority. At every stage of production, strict monitoring and quality control are ensured with advanced machinery and operational efficiency."
  },
  {
    img: "/images/o2.avif",
    title: "Capitalising Community",
    desc: "We have developed a structured procurement system ensuring a steady supply of high-quality raw materials, benefiting from strong ties with the community and efficient sourcing practices."
  },
  {
    img: "/images/o3.avif",
    title: "Green Energy",
    desc: "The best gift we can give the future generations is the green earth. We generate renewable energy with solar and wind plants to support sustainability."
  }
];

function EthosSection() {
  return (
    <section className="ethos-section">
      <h2 className="ethos-heading">Our Ethos</h2>
      <div className="ethos-container">
        {ethosData.map((item, index) => (
          <div key={index} className="ethos-card">
            <img src={item.img} alt={item.title} className="ethos-icon" />
            <h3 className="ethos-title">{item.title}</h3>
            <p className="ethos-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EthosSection;
