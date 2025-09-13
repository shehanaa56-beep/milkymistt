import React from "react";
import Slider from "../components/Slider";
import NutritionSection from "../components/NutritionSection";
import LatestUpdates from "../components/LatestUpdates";
import EthosSection from "../components/EthosSection";
import HeroSection from "../components/HeroSection";
import InstagramSection from "../components/InstagramSection";

export default function Home() {
  return (
    <div>
      {/* Top banner slider */}
      <Slider />

      {/* Daily Dose of Nutrition Section */}
      <NutritionSection />

      {/* Latest Updates Section */}
      <LatestUpdates />

      <EthosSection />
     <div>
      <HeroSection />
      </div>

      <InstagramSection />
    </div>
  );
}

