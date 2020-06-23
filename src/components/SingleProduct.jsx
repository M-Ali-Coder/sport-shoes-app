import React from "react";

const SingleProduct = ({ productName, category, price, description, mainImg, subImages }) => {
  return (
    <div className="feature-product">
      <div className="feature-product-content-wrapper">
        <div className="product-img">
          <img className="main-image" src={mainImg} alt="main" />
          <img className="alt-image" src={mainImg} alt="alt" />
        </div>
        <div className="product-category">{category}</div>
        <div className="product-name">{productName}</div>
        <div className="product-price">{price}</div>
        <button className="buy-product">Buy Product</button>
      </div>
    </div>
  );
};

export default SingleProduct;
