import React from "react";
import SingleProduct from "./SingleProduct";
import FEATURES_PRODUCTS from "../data/featuresProducts";

class FeaturesProducts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      featuresProducts: FEATURES_PRODUCTS,
    };
  }

  render() {
    const { featuresProducts } = this.state;

    return (
      <section className="container features-products">
        <div className="section-title">
          <h1>features products</h1>
          <p>Visit our shop to see amazing products</p>
        </div>

        <div className="meet-our-features-products">
          {featuresProducts.map(({ id, ...otherProps }) => (
            <SingleProduct key={id} {...otherProps} />
          ))}
        </div>
      </section>
    );
  }
}

export default FeaturesProducts;
