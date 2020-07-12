import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdRemoveRedEye, MdShuffle } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import ProductModal from "../scss/components/ProductModal";

const SingleProduct = ({ productName, category, price, description, mainImg, subImages }) => {
  const [openProductModal, setOpenProductModal] = useState(false);
  const productUrl = productName.toLowerCase().replace(/ /g, "-");
  return (
    <>
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
              <div onClick={() => setOpenProductModal(true)}>
                <MdRemoveRedEye />
              </div>
            </div>
          </div>
          <div className="product-category">{category}</div>
          <div className="product-name">
            <Link to={`/shop/${productUrl}`}>{productName}</Link>
          </div>
          <div className="product-price">{price}</div>
          <button className="buy-product">Buy Product</button>
        </div>
      </div>
      <ProductModal
        productName={productName}
        category={category}
        price={price}
        description={description}
        mainImg={mainImg}
        subImages={subImages}
        openProductModal={openProductModal}
      />
    </>
  );
};

export default SingleProduct;
