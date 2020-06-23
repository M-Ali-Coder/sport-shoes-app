import React from "react";

const BestSelling = () => {
  return (
    <section className="container best-selling-section">
      <div className="best-selling-wrapper">
        <div className="left-side">
          <div className="side-image">
            <img
              src="https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/banner3-h1-1.jpg"
              alt="left-side"
            />
          </div>
          <div className="side-content">
            <h5>ONLY THIS WEEK</h5>
            <h1>best selling</h1>
            <h3>get the discount of 25%</h3>
          </div>
        </div>
        <div className="right-side">
          <div className="top-banner">
            <img
              src="https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/banner4-h1.jpg"
              alt="top-banner"
            />
            <div className="banner-content">
              <div className="offer">50% off</div>
              <div className="banner-title">
                <h2>
                  Phantom Vision
                  <br />
                  Academy
                </h2>
              </div>
              <div className="banner-price">
                <span className="new-price">$195</span>
                <span className="old-price">$390</span>
              </div>
              <button className="shop-now">Shop now</button>
            </div>
          </div>
          <div className="bottom-banner">
            <img
              src="https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/banner5-h1.jpg"
              alt="top-banner"
            />
            <div className="banner-content">
              <div className="offer">50% off</div>
              <div className="banner-title">
                <h2>
                  Phantom Vision
                  <br />
                  Academy
                </h2>
              </div>
              <div className="banner-price">
                <span className="new-price">$195</span>
                <span className="old-price">$390</span>
              </div>
              <button className="shop-now">Shop now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
