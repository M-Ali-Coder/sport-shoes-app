import React from "react";
import { FaRocket, FaCcPaypal, FaComment } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="container why-choose-us">
      <h1>Why Choose Us</h1>
      <div className="row">
        <div className="column">
          <FaRocket />
          <h2>Free Delivery</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum repudiandae quo at et,
            voluptatum illo ut iure fuga quisquam voluptate sit dolorem eaque ducimus alias.
          </p>
        </div>
        <div className="column">
          <FaCcPaypal />
          <h2>Secure Payment</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum repudiandae quo at et,
            voluptatum illo ut iure fuga quisquam voluptate sit dolorem eaque ducimus alias.
          </p>
        </div>
        <div className="column">
          <FaComment />
          <h2>24/7 Support</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum repudiandae quo at et,
            voluptatum illo ut iure fuga quisquam voluptate sit dolorem eaque ducimus alias.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
