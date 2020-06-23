import React from "react";
import Slider from "../Slider";
import HomePageBanner from "../HomePageBanner";
import FeaturesProducts from "../FeaturesProducts";
import BestSelling from "../BestSelling";

const HomePage = () => {
  return (
    <div className="home-page">
      <Slider />
      <HomePageBanner />
      <FeaturesProducts />
      <BestSelling />
    </div>
  );
};

export default HomePage;
