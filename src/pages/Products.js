import React from "react";
import Slider from "../components/Slider";
import ProductCategories from "../components/ProductCategories";
import ChocolateSection from "../components/ChocolateSection";

export default function Products() {
  return (
    <div>
      {/* Top banner slider */}
      <Slider />

      {/* Product categories */}
      <ProductCategories />

      {/* Chocolate section */}
      <ChocolateSection />
    </div>
  );
}
