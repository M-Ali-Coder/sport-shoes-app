import React from "react";

class ProductModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productCount: 1,
      hideModal: true,
    };
  }

  render() {
    const { productName, mainImg, description, price, category, openProductModal } = this.props;
    const { productCount, hideModal } = this.state;
    return (
      <>
        {hideModal && openProductModal && (
          <div className="product-modal-wrapper">
            <div className="product-modal-content">
              <div className="product-image-wrapper">
                <img src={mainImg} alt="main" />
              </div>
              <div className="about-product">
                <h1>{productName}</h1>
                <div className="description mr-top-20">{description}</div>
                <div className="product-price mr-top-20">{price}</div>

                <div className="product-count-to-order mr-top-20">
                  <input
                    type="number"
                    min={1}
                    value={productCount}
                    onChange={(e) => this.setState({ productCount: e.target.value })}
                  />
                </div>
                <div className="product-category">
                  <div>
                    Category: <span>{category}</span>
                  </div>
                </div>
                <div className="add-product-to-cart">
                  <button>Add to cart</button>
                </div>
              </div>
            </div>

            <div className="close-modal" onClick={() => this.setState({ hideModal: false })}>
              X
            </div>
          </div>
        )}
      </>
    );
  }
}

export default ProductModal;
