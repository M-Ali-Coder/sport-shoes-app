import React from "react";
import { NavLink, Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import MenuColumn from "./MenuColumn";

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleShopMenu: false,
      toggleBlogMenu: false,
      togglePagesMenu: false,
    };
  }

  render() {
    const { toggleShopMenu, toggleBlogMenu, togglePagesMenu } = this.state;
    return (
      <div className="app-navigation-bar">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li
            className="shop-menu-wrapper"
            onMouseEnter={() => this.setState({ toggleShopMenu: true })}
            onMouseLeave={() => this.setState({ toggleShopMenu: false })}
          >
            <NavLink to="/shop" activeClassName="active-link">
              Shop
            </NavLink>
            <MdKeyboardArrowDown />
            {toggleShopMenu && (
              <ul className="shop-menu">
                <div className="column-row">
                  <MenuColumn title="Shop Layouts">
                    <div className="column-content">
                      <NavLink to="#">
                        <span>Shop fullwidth</span>
                      </NavLink>
                      <NavLink to="#">
                        <span>Resposive design</span>
                      </NavLink>
                      <NavLink to="#">
                        <span>Shop right sidebar</span>
                      </NavLink>
                      <NavLink to="#">
                        <span>Shop right sidebar</span>
                      </NavLink>
                    </div>
                  </MenuColumn>

                  <MenuColumn title="Product Style">
                    <div className="column-content">
                      <NavLink to="#">
                        <span>Product Style 1</span>
                      </NavLink>
                      <NavLink to="#">
                        <span>Product Style 2</span>
                      </NavLink>
                      <NavLink to="#">
                        <span>Product Style 3</span>
                      </NavLink>
                      <NavLink to="#">
                        <span>Product Style 4</span>
                      </NavLink>
                      <NavLink to="#">
                        <span>Product Style 5</span>
                      </NavLink>
                    </div>
                  </MenuColumn>

                  <MenuColumn title="Products Pages">
                    <div className="column-content">
                      <NavLink to="#">
                        <span>Simple Product</span>
                      </NavLink>
                      <NavLink to="#">
                        <span>Variable Product</span>
                      </NavLink>
                      <NavLink to="#">
                        <span>Group Product</span>
                      </NavLink>
                      <NavLink to="#">
                        <span>Alffliate Product</span>
                      </NavLink>
                      <NavLink to="#">
                        <span>Single Product Style</span>
                      </NavLink>
                    </div>
                  </MenuColumn>
                </div>
              </ul>
            )}
          </li>
          <li>
            <NavLink to="/about" activeClassName="active-link">
              About
            </NavLink>
          </li>
          <li
            className="blog-menu-wrapper"
            onMouseEnter={() => this.setState({ toggleBlogMenu: true })}
            onMouseLeave={() => this.setState({ toggleBlogMenu: false })}
          >
            <NavLink to="/blog" activeClassName="active-link">
              Blog
            </NavLink>
            <MdKeyboardArrowDown />
            {toggleBlogMenu && (
              <div className="blog-menu">
                <MenuColumn>
                  <NavLink to="#">Blog - Gallary View</NavLink>
                  <NavLink to="#">Blog - Grid View</NavLink>
                  <NavLink to="#">Blog -No Images</NavLink>
                  <NavLink to="#">Blog -Standard</NavLink>
                  <NavLink to="#">Blog -Modern</NavLink>
                  <NavLink to="#">Single Post</NavLink>
                </MenuColumn>
              </div>
            )}
          </li>
          <li
            className="pages-menu-wrapper"
            onMouseEnter={() => this.setState({ togglePagesMenu: true })}
            onMouseLeave={() => this.setState({ togglePagesMenu: false })}
          >
            <Link to="#">Pages</Link>
            {togglePagesMenu && (
              <div className="pages-menu">
                <MenuColumn title="Pre-built Pages">
                  <NavLink to="#">About Us</NavLink>
                  <NavLink to="#">FAQ</NavLink>
                  <NavLink to="#">404 Page</NavLink>
                  <NavLink to="#">Shipping Method</NavLink>
                  <NavLink to="#">Payment Method</NavLink>
                  <NavLink to="#">Other Tracking</NavLink>
                </MenuColumn>
              </div>
            )}
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
