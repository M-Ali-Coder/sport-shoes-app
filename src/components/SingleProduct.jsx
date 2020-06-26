import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { MdRemoveRedEye, MdShuffle } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const SingleProduct = ({ productName, category, price, description, mainImg, subImages }) => {
  Modal.setAppElement("#root");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const styleModal = {
    border: "10px solid",
    overlay: {
      backgroundColor: "rgba(0,0,0,.8)",
      zIndex: "9999",
    },
    content: {
      width: "90%",
      height: "80%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
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
            <div onClick={() => setIsModalOpen(true)}>
              <MdRemoveRedEye />
            </div>
          </div>
        </div>
        <div className="product-category">{category}</div>
        <div className="product-name">{productName}</div>
        <div className="product-price">{price}</div>
        <button className="buy-product">Buy Product</button>
      </div>
      {/* React Modal */}
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} style={styleModal}>
        <div className="modal-content">
          <div className="modal-left-side">
            <img src={mainImg} alt="product img" />
          </div>
          <div className="modal-right-side">
            <div className="product-info">
              <h1 className="mr-bottom-30">{productName}</h1>
              <p className="mr-bottom-20">{description}</p>
              <h2>{price}</h2>
            </div>
            <form className="buy-product">
              <button>Buy Product</button>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SingleProduct;
