import React from "react";
import Slider from "../components/Slider";
import BrochureCards from "../components/BrochureCards";

export default function Brochure() {
  return (
    <div>
      {/* Top banner slider */}
      <Slider />

      {/* Brochure Cards Section */}
      <BrochureCards />
    </div>
  );
}
