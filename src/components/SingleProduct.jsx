import React from "react";
import { Link } from "react-router-dom";
import { MdRemoveRedEye, MdShuffle } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const SingleProduct = ({ productName, category, price, description, mainImg, subImages }) => {
  return (
    <div className="feature-product">
      <div className="feature-product-content-wrapper">
        <div className="product-img">
          <Link to="/">
            <img className="main-image" src={mainImg} alt="main" />
          </Link>
          <div className="product-action">
            <div>
              <FaRegHeart />
            </div>
            <div>
              <MdShuffle />
            </div>
            <div>
              <MdRemoveRedEye />
            </div>
          </div>
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
