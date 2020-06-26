import React from "react";
import { Link } from "react-router-dom";

const OurBrands = () => {
  return (
    <div className="container our-brands-wrapper mr-top-80 mr-bottom-80">
      <div className="row">
        <div className="brand-item">
          <Link to="#">
            <img
              src="https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/brand-1.png"
              alt="brand"
            />
          </Link>
        </div>
        <div className="brand-item">
          <Link to="#">
            <img
              src="https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/brand-2.png"
              alt="brand"
            />
          </Link>
        </div>
        <div className="brand-item">
          <Link to="#">
            <img
              src="https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/brand-3.png"
              alt="brand"
            />
          </Link>
        </div>
        <div className="brand-item">
          <Link to="#">
            <img
              src="https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/brand-4.png"
              alt="brand"
            />
          </Link>
        </div>
        <div className="brand-item">
          <Link to="#">
            <img
              src="https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/brand-5.png"
              alt="brand"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurBrands;
