import React from "react";
import Slider from "../Slider";
import HomePageBanner from "../HomePageBanner";
import FeaturesProducts from "../FeaturesProducts";
import BestSelling from "../BestSelling";
import LatestNews from "../LatestNews";
import SayAboutUs from "../SayAboutUs";

const HomePage = () => {
  return (
    <div className="home-page">
      <Slider />
      <HomePageBanner />
      <FeaturesProducts />
      <BestSelling />
      <LatestNews />
      <SayAboutUs />
    </div>
  );
};

export default HomePage;
