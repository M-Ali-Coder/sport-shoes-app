import React from "react";
import {
  FaShippingFast,
  FaMoneyBillAlt,
  FaCrown,
  FaRegPaperPlane,
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const AppFooter = () => {
  return (
    <div className="app-footer-wrapper">
      <div className="upper-footer-header-wrapper">
        <div className="container upper-footer-header">
          <div className="upper-footer-item">
            <div className="item-icon">
              <FaShippingFast />
            </div>
            <div className="item-text">
              <h4>
                <span>Free</span> Delivery
              </h4>
              <h5>When order from $500</h5>
            </div>
          </div>
          <div className="upper-footer-item">
            <div className="item-icon">
              <FaMoneyBillAlt />
            </div>
            <div className="item-text">
              <h4>
                <span>100% REFUND</span> OF MONENY
              </h4>
              <h5>14-days of complanint.</h5>
            </div>
          </div>
          <div className="upper-footer-item">
            <div className="item-icon">
              <FaCrown />
            </div>
            <div className="item-text">
              <h4>
                <span>QUALITY </span> INSPECTIONS
              </h4>
              <h5>Over 10,000 products.</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="middle-footer-wrapper">
        <div className="container middle-footer-content">
          <div className="row">
            <div className="column">
              <div className="column-title mr-bottom-30">
                <h3>CONTACT US</h3>
              </div>
              <div className="column-meta-info mr-bottom-20">
                <p>
                  If you have any question, please contact us at
                  <Link to="#" className="support-email">
                    support@gmail.com
                  </Link>
                </p>
              </div>
              <div className="customer-service-number">
                <FaRegPaperPlane />
                <span className="number-code">+048</span>
                <span className="our-number">800 456 789</span>
              </div>
            </div>
            <div className="column">
              <div className="column-title mr-bottom-30">
                <h3>STORE LOCATION</h3>
              </div>
              <div className="column-meta-info">
                <p>
                  Box 565, Charlestown, Nevis, <br /> West Indies,Caribbean
                </p>
                <p className="mr-top-20">
                  Monday – Friday: 8am – 4pm
                  <br />
                  Saturday: 9am – 5pm
                </p>
              </div>
            </div>
            <div className="column">
              <div className="column-title mr-bottom-30">
                <h3>CATEGORIES</h3>
              </div>
              <div className="column-meta-info">
                <ul>
                  <li>
                    <Link to="#">For Men</Link>
                  </li>
                  <li>
                    <Link to="#">For Women</Link>
                  </li>
                  <li>
                    <Link to="#">Accessories</Link>
                  </li>
                  <li>
                    <Link to="#">Colections</Link>
                  </li>
                  <li>
                    <Link to="#">Other</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="column">
              <div className="column-title mr-bottom-30">
                <h3>NEWSLETTER</h3>
              </div>
              <div className="column-meta-info">
                Subscribe to the weekly newsletter for all the latest updates
              </div>
              <div className="search-products">
                <input type="text" placeholder="Your Email..." />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lower-footer-wrapper">
        <div className="container lower-footer-content">
          <div className="copy-right">Copyright © 2020 ekommart. All Rights Reserved.</div>
          <div className="follow-us">
            <Link to="#">
              <FaFacebookSquare />
            </Link>
            <Link to="/">
              <FaTwitterSquare />
            </Link>
            <Link to="/">
              <FaLinkedin />
            </Link>
            <Link to="/">
              <FaInstagram />
            </Link>
          </div>
          <div className="payment-methods">
            <img
              src="https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/payment.png"
              alt="payment"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
