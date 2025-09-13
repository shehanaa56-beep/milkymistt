import React from "react";

const blogPosts = [
  {
    id: 1,
    date: "Dec 12, 2024",
    readTime: "1 min read",
    title: "Where Health Meets Convenience: Why Milky Mist SmartChef is the...",
    desc: "MilkyMist SmartChef is designed for the modern consumer who values health, convenience, and...",
    image: "/images/n1.avif",
    views: 323,
  },
  {
    id: 2,
    date: "Dec 12, 2024",
    readTime: "2 min read",
    title: "How to Cook and Enjoy Milky Mist SmartChef Products: A Complete...",
    desc: "Milky Mist SmartChef makes cooking easy, fun, and satisfying. Whether you’re short on time or...",
    image: "/images/n2.avif",
    views: 46,
  },
  {
    id: 3,
    date: "Dec 12, 2024",
    readTime: "2 min read",
    title: "Why Milky Mist SmartChef is the Game-Changer for Fast Health...",
    desc: "In today’s fast-paced world, finding a balance between delicious food and convenience...",
    image: "/images/n3.avif",
    views: 26,
  },
  // 👇 Add more dummy blogs
  {
    id: 4,
    date: "Dec 11, 2024",
    readTime: "3 min read",
    title: "5 Healthy Dairy Recipes You Must Try at Home",
    desc: "Discover quick and delicious dairy recipes packed with nutrition...",
    image: "/images/n4.avif",
    views: 105,
  },
  {
    id: 5,
    date: "Dec 10, 2024",
    readTime: "2 min read",
    title: "The Role of Dairy in Building Strong Bones",
    desc: "Calcium-rich foods like milk and cheese are essential for healthy bones...",
    image: "/images/n5.avif",
    views: 88,
  },
  {
    id: 6,
    date: "Dec 09, 2024",
    readTime: "4 min read",
    title: "SmartChef Pizzas: Ready in Minutes, Loved by Everyone",
    desc: "Perfect for busy evenings, Milky Mist SmartChef Pizzas bring convenience...",
    image: "/images/n6.avif",
    views: 72,
  },
  {
    id: 7,
    date: "Dec 08, 2024",
    readTime: "3 min read",
    title: "How Yogurt Boosts Gut Health Naturally",
    desc: "Learn why yogurt is considered a superfood for your digestive system...",
    image: "/images/n7.avif",
    views: 134,
  },
  {
    id: 8,
    date: "Dec 07, 2024",
    readTime: "2 min read",
    title: "Paneer Power: High Protein Food for Fitness Lovers",
    desc: "Paneer is an excellent source of protein and perfect for gym-goers...",
    image: "/images/n8.avif",
    views: 97,
  },
  {
    id: 9,
    date: "Dec 06, 2024",
    readTime: "3 min read",
    title: "Top 10 Quick Breakfasts with Dairy Products",
    desc: "Start your day right with these quick and easy dairy-based breakfasts...",
    image: "/images/n9.avif",
    views: 120,
  },
  {
    id: 10,
    date: "Dec 05, 2024",
    readTime: "2 min read",
    title: "Why Kids Need Dairy Every Day",
    desc: "Essential vitamins and minerals in dairy play a huge role in children’s growth...",
    image: "/images/n10.avif",
    views: 63,
  },
  {
    id: 11,
    date: "Dec 04, 2024",
    readTime: "2 min read",
    title: "Cheese Lovers’ Paradise: Healthy Ways to Eat Cheese",
    desc: "Enjoy your favorite cheese guilt-free with these creative ideas...",
    image: "/images/n11.avif",
    views: 77,
  },
  {
    id: 12,
    date: "Dec 03, 2024",
    readTime: "3 min read",
    title: "How to Balance Taste and Nutrition in Daily Meals",
    desc: "Learn simple hacks to make every meal tasty yet nutritious...",
    image: "/images/n12.avif",
    views: 98,
  },
  {
    id: 13,
    date: "Dec 02, 2024",
    readTime: "2 min read",
    title: "Delicious Smoothie Recipes with Yogurt and Milk",
    desc: "Blend dairy into your lifestyle with smoothies packed with vitamins...",
    image: "/images/n13.avif",
    views: 54,
  },
  {
    id: 14,
    date: "Dec 01, 2024",
    readTime: "4 min read",
    title: "The Science Behind Dairy Nutrition",
    desc: "Understand how dairy contributes to protein, calcium, and vitamins...",
    image: "/images/n14.avif",
    views: 110,
  },
  {
    id: 15,
    date: "Nov 30, 2024",
    readTime: "2 min read",
    title: "5 Snacks You Can Make with Paneer in 10 Minutes",
    desc: "Paneer is super versatile and can be transformed into quick snacks...",
    image: "/images/n15.avif",
    views: 84,
  },
  {
    id: 16,
    date: "Nov 29, 2024",
    readTime: "3 min read",
    title: "Why Dairy Should Be Part of Every Athlete’s Diet",
    desc: "From protein recovery to hydration, dairy supports athletes...",
    image: "/images/n16.avif",
    views: 71,
  },
  {
    id: 17,
    date: "Nov 28, 2024",
    readTime: "2 min read",
    title: "Pizza Night Made Easy with SmartChef",
    desc: "Enjoy authentic cheesy pizzas at home in just minutes...",
    image: "/images/n17.avif",
    views: 129,
  },
  {
    id: 18,
    date: "Nov 27, 2024",
    readTime: "2 min read",
    title: "The Secret to Creamy Pasta? Dairy!",
    desc: "Discover how milk, cream, and cheese transform your pasta dishes...",
    image: "/images/n18.avif",
    views: 65,
  },
  {
    id: 19,
    date: "Nov 26, 2024",
    readTime: "3 min read",
    title: "How Dairy Keeps You Energized Throughout the Day",
    desc: "Dairy is a natural source of slow-digesting energy for busy lifestyles...",
    image: "/images/n19.avif",
    views: 74,
  },
  {
    id: 20,
    date: "Nov 25, 2024",
    readTime: "2 min read",
    title: "Cheese & Paneer: The Perfect Combo for Indian Recipes",
    desc: "Enhance your curries, snacks, and more with the richness of dairy...",
    image: "/images/n20.avif",
    views: 91,
  },
];

export default function NutritionBlogs() {
  return (
    <section className="nutrition-section">
      <h2 className="section-titlee">Nutrition & Blogs</h2>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <p className="blog-meta">
              {post.date} • {post.readTime}
            </p>
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-desc">{post.desc}</p>
            <p className="blog-views">👁 {post.views}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
