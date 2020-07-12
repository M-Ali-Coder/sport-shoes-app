import React from "react";
import AppPageBanner from "../AppPageBanner";
import { withRouter } from "react-router-dom";
import SingleProduct from "../SingleProduct";
import relatedProducts from "../../data/featuresProducts";

class ProductView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "tab-1",
      relatedProducts,
    };
  }

  componentDidMount() {
    document.title = `Ekommart | ${this.props.match.params.productParam.replace(/-/g, " ")}`;
  }

  render() {
    const { activeTab, relatedProducts } = this.state;
    const { match, products } = this.props;
    const { productParam } = match.params;
    const currentProduct = products.filter(
      ({ productName }) => productName.toLowerCase().replace(/ /g, "-") === productParam
    );
    const { description, mainImg, price, productName } = currentProduct[0];
    console.log(currentProduct[0]);

    return (
      <div className="product-view-page-wrapper">
        <AppPageBanner title="Product Preview" />

        <div className="container">
          <div className="content-wrapper">
            <div className="product-images-preview">
              <img src={mainImg} id="main-product-image" alt="main-product" />
            </div>

            <div className="product-information">
              <h3>{productName}</h3>
              <div className="product-price">
                <div className="old-price mr-right-10">$100.00</div>
                <div className="new-price">${price}</div>
              </div>
              <div className="description">
                <p>{description}</p>
              </div>
              <div className="available-color-in-stock">
                <span>Colors</span>
                <div className="colors-group">
                  <span className="black" />
                  <span className="gray" />
                  <span className="white" />
                </div>
              </div>
              <div className="available-sizes-in-stock">
                <span>Sizes</span>
                <div className="sizes-group">
                  <span>l</span>
                  <span>m</span>
                  <span>s</span>
                  <span>lx</span>
                </div>
              </div>
              <form id="quantity-to-order">
                <div className="quantity-count">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
                <button id="add-to-cart-btn">add to cart</button>
              </form>
            </div>
          </div>

          <div className="product-info-tabs-section">
            <div className="tabs-navigation-wrapper">
              <ul className="tabs-list">
                <li
                  className={activeTab === "tab-1" ? "active-tab" : undefined}
                  onClick={() => this.setState({ activeTab: "tab-1" })}
                >
                  <span>description</span>
                </li>
                <li
                  className={activeTab === "tab-2" ? "active-tab" : undefined}
                  onClick={() => this.setState({ activeTab: "tab-2" })}
                >
                  <span>additional information</span>
                </li>
                <li
                  className={activeTab === "tab-3" ? "active-tab" : undefined}
                  onClick={() => this.setState({ activeTab: "tab-3" })}
                >
                  <span>reviews (5)</span>
                </li>
              </ul>
            </div>

            <div className="tabs-content">
              {activeTab === "tab-1" && (
                <div className="tab-1">
                  <p>
                    Ex eius quo recusandae quia voluptatem eius tempore. Provident dolores ut enim
                    explicabo magnam magnam dolor. Sit delectus qui sed et dolorem ex dolorem.
                  </p>
                  <p>
                    pQui corrupti et nam quaerat doloremque et. Repellendus culpa minus debitis
                    rerum. Velit ut odit sint sequi dolorum et doloribus. Ut ad ea harum quas
                    adipisci.
                  </p>
                  <p>
                    Nihil id assumenda aut harum quasi id. Iusto animi aspernatur voluptas
                    exercitationem et consequatur ipsum. Et enim dolorum corrupti in est. Reiciendis
                    ullam corporis perspiciatis libero fuga. Repudiandae totam vel ut quia porro
                    cumque.
                  </p>

                  <p>
                    Aut similique non qui est. Et fuga doloremque harum consequatur illo facere.
                    Molestiae voluptatem repudiandae iure inventore quidem nesciunt sint. Labore
                    magnam magnam omnis.
                  </p>
                  <p>
                    Quo corporis voluptatem et magnam. Quia ex laboriosam qui quasi praesentium
                    libero est. Excepturi odit occaecati temporibus laborum rerum illum. Vel et
                    mollitia dolor aliquam dolorem eaque.
                  </p>
                </div>
              )}
              {activeTab === "tab-2" && (
                <div className="tab-2">
                  <table id="customers">
                    <tbody>
                      <tr>
                        <td>Stand Up</td>
                        <td>35″L x 24″W x 37-45″H(front to back wheel)</td>
                      </tr>
                      <tr>
                        <td>Folded (w/ wheels)</td>
                        <td>Maria Anders</td>
                      </tr>
                      <tr>
                        <td>Stand Up</td>
                        <td>35″L x 24″W x 37-45″H(front to back wheel)</td>
                      </tr>
                      <tr>
                        <td>Folded (w/ wheels)</td>
                        <td>Maria Anders</td>
                      </tr>
                      <tr>
                        <td>Stand Up</td>
                        <td>35″L x 24″W x 37-45″H(front to back wheel)</td>
                      </tr>
                      <tr>
                        <td>Folded (w/ wheels)</td>
                        <td>Maria Anders</td>
                      </tr>
                      <tr>
                        <td>Stand Up</td>
                        <td>35″L x 24″W x 37-45″H(front to back wheel)</td>
                      </tr>
                      <tr>
                        <td>Folded (w/ wheels)</td>
                        <td>Maria Anders</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
              {activeTab === "tab-3" && (
                <div className="tab-3">
                  <p>
                    Ex eius quo recusandae quia voluptatem eius tempore. Provident dolores ut enim
                    explicabo magnam magnam dolor. Sit delectus qui sed et dolorem ex dolorem.
                  </p>
                  <p>
                    pQui corrupti et nam quaerat doloremque et. Repellendus culpa minus debitis
                    rerum. Velit ut odit sint sequi dolorum et doloribus. Ut ad ea harum quas
                    adipisci.
                  </p>
                  <p>
                    Nihil id assumenda aut harum quasi id. Iusto animi aspernatur voluptas
                    exercitationem et consequatur ipsum. Et enim dolorum corrupti in est. Reiciendis
                    ullam corporis perspiciatis libero fuga. Repudiandae totam vel ut quia porro
                    cumque.
                  </p>

                  <p>
                    Aut similique non qui est. Et fuga doloremque harum consequatur illo facere.
                    Molestiae voluptatem repudiandae iure inventore quidem nesciunt sint. Labore
                    magnam magnam omnis.
                  </p>
                  <p>
                    Quo corporis voluptatem et magnam. Quia ex laboriosam qui quasi praesentium
                    libero est. Excepturi odit occaecati temporibus laborum rerum illum. Vel et
                    mollitia dolor aliquam dolorem eaque.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="related-products-section">
            <h2>Related Products</h2>

            <div className="content">
              {relatedProducts.slice(0, 4).map(({ id, ...otherProps }) => (
                <SingleProduct key={id} {...otherProps} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductView);
