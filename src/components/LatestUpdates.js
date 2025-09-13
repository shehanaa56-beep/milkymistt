import React from "react";

export default function LatestUpdates() {
  const updates = [
    {
      img: "/images/l1.avif", // replace with your actual image path
      title: "Ice cream",
      desc: "Scoop into Happiness! Our latest Ice Cream creations are here to delight your taste buds – A frosty adventure awaits!",
    },
    {
      img: "/images/l2.avif", // replace with your actual image path
      title: "Milk Shakes (Coffee, Butterscotch)",
      desc: "Introducing our Coffee and Butterscotch milkshake variants—the ultimate pick-me-up for your day! Guaranteed to keep you refreshed all day, indulge in pure delight with every sip.",
    },
    {
      img: "/images/l3.avif", // replace with your actual image path
      title: "Capella Chocolate",
      desc: "Introducing Capella, our exceptional assortment of chocolate delights. Immerse yourself in the rich velvety goodness that promises to delight your taste buds with every bite",
    },
    {
      img: "/images/l4.avif", // replace with your actual image path
      title: "Ice cream",
      desc: "Introducing our new Greek yogurt blend: creamy, probiotic-packed, with honey and figs for a sweet, healthy start to your day!",
    },
    {
      img: "/images/l5.avif", // replace with your actual image path
      title: "Milk Shakes (Coffee, Butterscotch)",
      desc: "Milky Mist has launched Skyr Yogurt in two convenient sizes — 700g and 225g",
    },
    {
      img: "/images/l6.avif", // replace with your actual image path
      title: "Capella Chocolate",
      desc: "Greek Yogurt is now available in three refreshing flavors Blueberry, Mango, and Peach.",
    },
  ];

  return (
    <section className="latest-updates">
      <h2 className="updates-title">Latest Updates</h2>
      <div className="updates-container">
        {updates.map((item, index) => (
          <div key={index} className="update-card">
  <div className="image-wrapper">
    <img src={item.img} alt={item.title} className="update-img" />
    <span className="new-launch">New Launch</span>
  </div>
  <h3 className="update-title">{item.title}</h3>
  <p className="update-desc">{item.desc}</p>
</div>

        ))}
      </div>
    </section>
  );
}
