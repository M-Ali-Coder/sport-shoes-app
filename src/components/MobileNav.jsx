import React from "react";
import { MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { ReactComponent as CartIcon } from "../assets/cart.svg";

const MobileNav = () => {
  return (
    <div className="mobile-navigation">
      <MdMenu />
      <div className="logo">
        <h1>ekommart</h1>
      </div>
      <div className="cart-info">
        <NavLink to="/cart">
          <CartIcon />
        </NavLink>
      </div>
    </div>
  );
};

export default MobileNav;
