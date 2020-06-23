import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const Slider = () => {
  const params = {
    lazy: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  };

  return (
    <>
      <div className="homepage-slider">
        <Swiper {...params}>
          <div>
            <div className="slider-wrapper">
              <div className="slider-content">
                <div className="product-brief-info">
                  <h4>nike new arrive</h4>
                  <h1>the air</h1>
                  <h1>jordan 1 mid</h1>
                  <h3>$190</h3>

                  <button className="shop-now-button">Shop Now</button>
                </div>
                <div className="slider-element-image">
                  <img
                    src="http://pngimg.com/uploads/running_shoes/running_shoes_PNG5822.png"
                    alt="slider-1-img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="slider-wrapper">
              <div className="slider-content">
                <div className="product-brief-info">
                  <h4>nike - new arrive</h4>
                  <h1>air max</h1>
                  <h1>pegasus 35 id</h1>
                  <h3>$190</h3>

                  <button className="shop-now-button">Shop Now</button>
                </div>
                <div className="slider-element-image">
                  <img
                    src="http://pngimg.com/uploads/running_shoes/running_shoes_PNG5820.png"
                    alt="slider-1-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
