import React from "react";
import Product from "../../assets/images/product-5.jpg";
import { Link } from "react-router-dom";
import AppPageBanner from "../AppPageBanner";

class WishlistPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
    };
  }

  componentDidMount() {
    document.title = "Ekommart | Wishlist page";
  }

  render() {
    const { quantity } = this.state;

    return (
      <div className="cart-page-wrapper font">
        <AppPageBanner title="Wishlist" />
        <div className="container">
          <div className="cart-page-content">
            <h3>
              your cart <span className="items-count-in-shopping-cart">(3 items)</span>
            </h3>
          </div>

          <div className="shopping-cart-table">
            <table>
              <thead>
                <tr>
                  <th>item</th>
                  <th>price</th>
                  <th>quantity</th>
                  <th>total</th>
                  <th>remove</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="product-preview">
                    <img src={Product} alt="product" />
                    <div className="product-quick-info">
                      <span className="product-category">collette</span>
                      <Link to="#" className="product-name">
                        [Sample] Collette, florentine jungle dress
                      </Link>
                    </div>
                  </td>
                  <td className="font-bold">$99.00</td>
                  <td className="font-bold">
                    <div className="product-quantity">
                      <button onClick={() => this.setState({ quantity: quantity - 1 })}>-</button>
                      <input
                        type="tel"
                        min="1"
                        value={quantity}
                        onChange={() => this.setState({ quantity: quantity + 1 })}
                      />
                      <button onClick={() => this.setState({ quantity: quantity + 1 })}>+</button>
                    </div>
                  </td>
                  <td className="font-bold">$396.00</td>
                  <td className="font-bold remove-item">X</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default WishlistPage;
