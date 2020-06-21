import React from "react";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { MdExpandMore } from "react-icons/md";

class SideMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleHomeMenu: false,
      toggleBlogMenu: false,
      toggleShopMenu: false,
      togglePagesMenu: false,
    };
  }

  render() {
    const { toggleHomeMenu, toggleBlogMenu, toggleShopMenu, togglePagesMenu } = this.state;
    const { isOpen, closeSideMenu } = this.props;

    return (
      <>
        {isOpen && (
          <div className="side-menu-bar" style={{ width: isOpen && "300px" }}>
            <div className="close-side-menu" onClick={() => closeSideMenu()}>
              <MdClose />
            </div>
            <ul className="sidebar-menu-content">
              <li>
                <NavLink to="/" activeClassName="active-link">
                  Home
                </NavLink>
                <span onClick={() => this.setState({ toggleHomeMenu: !toggleHomeMenu })}>
                  <MdExpandMore />
                </span>
                <ul style={{ height: toggleHomeMenu && "auto" }}>
                  <li>
                    <NavLink to="#">link</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">link</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">link</NavLink>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink to="/about">About</NavLink>
              </li>

              <li>
                <NavLink to="/shop" activeClassName="active-link">
                  Shop
                </NavLink>
                <span onClick={() => this.setState({ toggleShopMenu: !toggleShopMenu })}>
                  <MdExpandMore />
                </span>
                <ul style={{ height: toggleShopMenu && "auto" }}>
                  <li>
                    <NavLink to="#">link</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">link</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">link</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/blog" activeClassName="active-link">
                  Blog
                </NavLink>
                <span onClick={() => this.setState({ toggleBlogMenu: !toggleBlogMenu })}>
                  <MdExpandMore />
                </span>
                <ul style={{ height: toggleBlogMenu && "auto" }}>
                  <li>
                    <NavLink to="#">link</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">link</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">link</NavLink>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink to="/pages" activeClassName="active-link">
                  Pages
                </NavLink>
                <span onClick={() => this.setState({ togglePagesMenu: !togglePagesMenu })}>
                  <MdExpandMore />
                </span>
                <ul style={{ height: togglePagesMenu && "auto" }}>
                  <li>
                    <NavLink to="#">link</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">link</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">link</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="active-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </>
    );
  }
}

export default SideMenu;
