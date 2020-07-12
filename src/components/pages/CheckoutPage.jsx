import React from "react";
import AppPageBanner from "../AppPageBanner";
import Product from "../../assets/images/product-5.jpg";
import { Link } from "react-router-dom";

class CheckoutPage extends React.Component {
  componentDidMount() {
    document.title = "Ekommart | Checkout Page";
  }

  render() {
    return (
      <div className="checkout-page-wrapper">
        <AppPageBanner title="Checkout" />
        <div className="container">
          <div className="content">
            <form id="checkout-form" autoComplete="off">
              <label htmlFor="email">
                <b>Email</b>
              </label>
              <input type="text" placeholder="Enter Email" name="email" id="email" required />

              <label htmlFor="psw">
                <b>Password</b>
              </label>
              <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

              <label htmlFor="psw-repeat">
                <b>Repeat Password</b>
              </label>
              <input
                type="password"
                placeholder="Repeat Password"
                name="psw-repeat"
                id="psw-repeat"
                required
              />

              <label htmlFor="phone">
                <b>Phone</b>
              </label>
              <input type="text" placeholder="Phone" name="phone" id="phone" required />

              <label htmlFor="postCode">
                <b>Postcode</b>
              </label>
              <input type="text" placeholder="PostCode" name="postCode" id="postCode" required />

              <button type="submit" className="registerbtn">
                Proceed to Checkout
              </button>
            </form>

            <div className="product-to-order-side-bar-wrapper">
              <div className="side-bar-title">
                <h5>order summary</h5>
                <Link to="/cart">edit cart</Link>
              </div>

              <div className="shopping-cart-information">
                <div className="products-to-go">
                  <div className="product-image">
                    <img src={Product} alt="product" />
                  </div>
                  <p>1 x [Sample] Collette, florentine jungle dress</p>
                  <span>
                    <b>$300.00</b>
                  </span>
                </div>

                <ul className="cart-total-price">
                  <li>
                    <span>Subtotal</span>
                    <span>
                      <b>$300.00</b>
                    </span>
                  </li>
                  <li>
                    <span>Shipping</span>
                    <b>...</b>
                  </li>
                  <li>
                    <span>Tax</span>
                    <b>$40.00</b>
                  </li>
                </ul>

                <div className="totally-shopping-cart-items">
                  <span>Total (USD)</span>
                  <span>$400.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckoutPage;
