import React from "react";
import { MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { ReactComponent as CartIcon } from "../assets/cart.svg";
import SideMenu from "./SideMenu";

class MobileNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  closeSideMenu() {
    this.setState({ isOpen: false });
  }

  render() {
    const { isOpen } = this.state;

    return (
      <>
        <div className="mobile-navigation">
          <MdMenu onClick={() => this.setState({ isOpen: !isOpen })} />
          <div className="logo">
            <h1>ekommart</h1>
          </div>
          <div className="cart-info">
            <NavLink to="/cart">
              <CartIcon />
            </NavLink>
          </div>
        </div>
        <SideMenu isOpen={isOpen} closeSideMenu={() => this.closeSideMenu()} />
      </>
    );
  }
}

export default MobileNav;
