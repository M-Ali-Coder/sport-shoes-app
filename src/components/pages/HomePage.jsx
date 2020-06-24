import React from "react";
import Slider from "../Slider";
import HomePageBanner from "../HomePageBanner";
import FeaturesProducts from "../FeaturesProducts";
import BestSelling from "../BestSelling";
import LatestNews from "../LatestNews";

const HomePage = () => {
  return (
    <div className="home-page">
      <Slider />
      <HomePageBanner />
      <FeaturesProducts />
      <BestSelling />
      <LatestNews />
    </div>
  );
};

export default HomePage;
