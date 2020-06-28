import React from "react";
import { MdFormatQuote } from "react-icons/md";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const SayAboutUs = () => {
  const params = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };

  return (
    <div className="what-say-about-us">
      <div className="format-quote">
        <MdFormatQuote />
      </div>
      <Swiper {...params}>
        <div className="quote-content">
          <p>
            Great for swimming and especially if there are rocks and uneven terrain. They stay snug
            on your feet while swimming and dry quickly. I wear them on my offshore fishing boat.
            Very comfortable.
          </p>
          <h3>Stephen Tindle</h3>
        </div>
        <div className="quote-content">
          <p>
            Great for swimming and especially if there are rocks and uneven terrain. They stay snug
            on your feet while swimming and dry quickly. I wear them on my offshore fishing boat.
            Very comfortable.
          </p>
          <h3>Stephen Tindle</h3>
        </div>
        <div className="quote-content">
          <p>
            Great for swimming and especially if there are rocks and uneven terrain. They stay snug
            on your feet while swimming and dry quickly. I wear them on my offshore fishing boat.
            Very comfortable.
          </p>
          <h3>Stephen Tindle</h3>
        </div>
      </Swiper>
    </div>
  );
};

export default SayAboutUs;
