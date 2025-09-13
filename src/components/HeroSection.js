import React from "react";
import heroImg from "../assets/pp.avif"; // your image inside src/assets/

export default function HeroSection() {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // keeps it fixed while scrolling
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <div className="hero-content">
        <h1>MilkyMist TV</h1>
        <p>Tune into Milky Mist TV for your daily dose of cooking videos</p>
        <button>Watch Now</button>
      </div>
    </section>
  );
}

