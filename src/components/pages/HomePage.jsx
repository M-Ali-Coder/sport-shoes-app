import React from "react";
import Slider from "../Slider";
import HomePageBanner from "../HomePageBanner";
import FeaturesProducts from "../FeaturesProducts";

const HomePage = () => {
  return (
    <div className="home-page">
      <Slider />
      <HomePageBanner />
      <FeaturesProducts />
    </div>
  );
};

export default HomePage;
