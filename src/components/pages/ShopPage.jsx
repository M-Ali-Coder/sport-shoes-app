import React from "react";
import AppPageBanner from "../AppPageBanner";
import { Link } from "react-router-dom";
import FEATURES_PRODUCTS from "../../data/featuresProducts";
import SingleProduct from "../SingleProduct";
import { MdFilterList } from "react-icons/md";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: FEATURES_PRODUCTS,
    };
  }

  componentDidMount() {
    document.title = "Ekommart | Shop page";
  }

  showSideBar() {
    const showSideBar = document.getElementById("filter-side-bar");
    const sideBar = document.getElementById("hide-side-bar");
    // open side bar
    showSideBar.addEventListener("click", () => {
      sideBar.style.visibility = "visible";
      console.log("dfasdfasdfasd");
    });
  }

  hideSideBar() {
    const sideBar = document.getElementById("hide-side-bar");
    const closeSideBarBtn = document.getElementById("close-side-bar");

    // Close side bar
    closeSideBarBtn.addEventListener("click", () => {
      sideBar.style.visibility = "hidden";
    });
  }

  render() {
    const { products } = this.state;

    return (
      <div className="shop-page-wrapper">
        <AppPageBanner title="Shop" />

        <div className="container">
          <div className="page-content-wrapper">
            <div className="left-side-navigation">
              <div className="column">
                <div className="column-title">
                  <h3>Products categories</h3>
                </div>

                <ul className="products-categories">
                  <li>
                    <Link to="#">beautiy & health</Link>
                  </li>
                  <li>
                    <Link to="#">clothing</Link>
                  </li>
                  <li>
                    <Link to="#">electronics & computers</Link>
                  </li>
                  <li>
                    <Link to="#">food & grocery</Link>
                  </li>
                  <li>
                    <Link to="#">furniture</Link>
                  </li>
                  <li>
                    <Link to="#">jewelry</Link>
                  </li>
                  <li>
                    <Link to="#">garden & kitchen</Link>
                  </li>
                  <li>
                    <Link to="#">marketplace</Link>
                  </li>
                  <li>
                    <Link to="#">shoes</Link>
                  </li>
                  <li>
                    <Link to="#">sport & outdoors</Link>
                  </li>
                  <li>
                    <Link to="#">t-shirt</Link>
                  </li>
                  <li>
                    <Link to="#">tools & parts</Link>
                  </li>
                  <li>
                    <Link to="#">toys</Link>
                  </li>
                  <li>
                    <Link to="#">watch</Link>
                  </li>
                </ul>
              </div>

              <div className="column">
                <div className="column-title">
                  <h3>Filter by colors</h3>
                </div>

                <div className="available-colors-wrapper">
                  <div className="item">
                    <span className="black" />
                  </div>
                  <div className="item">
                    <span className="yellow" />
                  </div>
                  <div className="item">
                    <span className="gray" />
                  </div>
                  <div className="item">
                    <span className="red" />
                  </div>

                  <div className="item">
                    <span className="green" />
                  </div>
                  <div className="item">
                    <span className="purple" />
                  </div>
                  <div className="item">
                    <span className="brown" />
                  </div>
                  <div className="item">
                    <span className="purple" />
                  </div>
                  <div className="item">
                    <span className="pink" />
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="column-title">
                  <h3>Filter by size</h3>
                </div>
                <div className="filter-by-size">
                  <div className="item">
                    <span>L</span>
                  </div>
                  <div className="item">
                    <span>M</span>
                  </div>
                  <div className="item">
                    <span>S</span>
                  </div>
                  <div className="item">
                    <span>XL</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="right-side-categories-content">
              <div className="title">
                <h3>Our categories products</h3>
                <div id="filter-side-bar" onClick={() => this.showSideBar()}>
                  <MdFilterList /> Filter
                </div>
              </div>
              <div className="render-our-categories-products">
                {products.map(({ id, ...otherProps }) => (
                  <SingleProduct key={id} {...otherProps} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Show  our categories side bar */}
        <div
          className="show-our-categories-side-bar"
          id="hide-side-bar"
          onClick={() => this.hideSideBar()}
        >
          <div className="content">
            <div className="column">
              <div className="column-title">
                <h3>Products categories</h3>
              </div>

              <ul className="products-categories">
                <li>
                  <Link to="#">beautiy & health</Link>
                </li>
                <li>
                  <Link to="#">clothing</Link>
                </li>
                <li>
                  <Link to="#">electronics & computers</Link>
                </li>
                <li>
                  <Link to="#">food & grocery</Link>
                </li>
                <li>
                  <Link to="#">furniture</Link>
                </li>
                <li>
                  <Link to="#">jewelry</Link>
                </li>
                <li>
                  <Link to="#">garden & kitchen</Link>
                </li>
                <li>
                  <Link to="#">marketplace</Link>
                </li>
                <li>
                  <Link to="#">shoes</Link>
                </li>
                <li>
                  <Link to="#">sport & outdoors</Link>
                </li>
                <li>
                  <Link to="#">t-shirt</Link>
                </li>
                <li>
                  <Link to="#">tools & parts</Link>
                </li>
                <li>
                  <Link to="#">toys</Link>
                </li>
                <li>
                  <Link to="#">watch</Link>
                </li>
              </ul>
            </div>

            <div className="column">
              <div className="column-title">
                <h3>Filter by colors</h3>
              </div>

              <div className="available-colors-wrapper">
                <div className="item">
                  <span className="black" />
                </div>
                <div className="item">
                  <span className="yellow" />
                </div>
                <div className="item">
                  <span className="gray" />
                </div>
                <div className="item">
                  <span className="red" />
                </div>

                <div className="item">
                  <span className="green" />
                </div>
                <div className="item">
                  <span className="purple" />
                </div>
                <div className="item">
                  <span className="brown" />
                </div>
                <div className="item">
                  <span className="purple" />
                </div>
                <div className="item">
                  <span className="pink" />
                </div>
              </div>
            </div>

            <div className="column">
              <div className="column-title">
                <h3>Filter by size</h3>
              </div>
              <div className="filter-by-size">
                <div className="item">
                  <span>L</span>
                </div>
                <div className="item">
                  <span>M</span>
                </div>
                <div className="item">
                  <span>S</span>
                </div>
                <div className="item">
                  <span>XL</span>
                </div>
              </div>
            </div>

            <div id="close-side-bar">X</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShopPage;
