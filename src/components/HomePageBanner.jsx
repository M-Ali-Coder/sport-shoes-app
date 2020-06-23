import React from "react";

const HomePageBanner = () => {
  return (
    <div className="home-page-banner">
      <div className="left-banner">
        <img
          src="https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/banner1-h1.jpg"
          alt=""
        />
        <div className="banner-content">
          <span className="offer-off">40% off</span>
          <div className="banner-title">
            <h2>
              Style meets
              <br />
              substance
            </h2>
          </div>
          <button className="find-your-shoes">Find Your Shoes</button>
        </div>
      </div>
      <div className="right-banner">
        <img
          src="https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/banner2-h1.jpg"
          alt=""
        />
        <div className="banner-content">
          <span className="offer-off">50% off</span>
          <div className="banner-title">
            <h2>
              energy takes
              <br />
              over
            </h2>
          </div>
          <button className="find-your-shoes">View Compagin</button>
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;
