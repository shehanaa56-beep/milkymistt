import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    name: "Paneer",
    img: "/images/pp1.avif",
    desc: "An essential ingredient for many nutritious vegetarian dishes. Milky Mist offers soft, creamy & the best Paneer kept fresh in a hygienically packed multilayer thermoforming packaging."
  },
  {
    name: "Butter",
    img: "/images/pp2.avif",
    desc: "Milky Mist Butter makes for the tastiest spread and cooking ingredient. The smooth and uniform texture uplifts the taste of all your dishes with its dose of freshness."
  },
  {
    name: "Cheese",
    img: "/images/pp3.avif",
    desc: "Enjoy the 12 different variants of irresistibly delicious Milky Mist Cheese. They are rich sources of calcium and protein, ensuring the best experience for all your cheesy recipes."
  },
  {
    name: "Curd",
    img: "/images/pp4.avif",
    desc: "Fresh and creamy Milky Mist Curd is packed with probiotics that help improve digestion and boost immunity."
  },
  {
    name: "Ghee",
    img: "/images/pp5.avif",
    desc: "Milky Mist Ghee brings the richness of traditional taste, made from pure butter for authentic Indian dishes."
  },
  {
    name: "Milk",
    img: "/images/pp6.avif",
    desc: "Milky Mist Milk is rich in protein & calcium, ensuring everyday nutrition with freshness guaranteed."
  },
  {
    name: "Yogurt",
    img: "/images/pp7.avif",
    desc: "Delicious and healthy Milky Mist Yogurt available in multiple flavors, a perfect snack for all ages."
  },
  {
    name: "Whipping Cream",
    img: "/images/pp8.avif",
    desc: "Perfect for desserts and bakery items, Milky Mist Whipping Cream is smooth and fluffy every time."
  },
  {
    name: "Ice Cream",
    img: "/images/pp9.avif",
    desc: "Indulge in Milky Mist Ice Creams — creamy, rich, and available in multiple irresistible flavors."
  },
  {
    name: "Khoa",
    img: "/images/pp10.avif",
    desc: "Traditional Milky Mist Khoa is made from pure milk solids, ideal for Indian sweets."
  },
  {
    name: "Lassi",
    img: "/images/pp11.avif",
    desc: "Refreshing Milky Mist Lassi comes in multiple flavors, a perfect drink for cooling down."
  },
  {
    name: "Buttermilk",
    img: "/images/pp12.avif",
    desc: "Light and refreshing Milky Mist Buttermilk is a natural digestive drink for any season."
  },
  {
    name: "Probiotic Drink",
    img: "/images/pp13.avif",
    desc: "Boost your immunity with Milky Mist Probiotic Drinks, full of good bacteria for gut health."
  },
  {
    name: "Milk Powder",
    img: "/images/pp14.avif",
    desc: "Milky Mist Milk Powder is full of nutrients and can be used for cooking, tea, or coffee."
  },
  {
    name: "Paneer Tikka Cubes",
    img: "/images/pp15.avif",
    desc: "Ready-to-cook Milky Mist Paneer Tikka Cubes make delicious starters quickly."
  },
  {
    name: "Pizza Cheese",
    img: "/images/pp16.avif",
    desc: "Stretchy and melty Milky Mist Pizza Cheese, perfect for your homemade pizzas and pastas."
  }
];

export default function ProductSection() {
  return (
    <section className="category-section">
      <div className="container mx-auto px-4">
        <h2 className="category-titlee">Product Categories</h2>
        <div className="category-grid">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="category-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
