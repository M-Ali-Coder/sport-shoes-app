import React from "react";
import "./scss/App.scss";
import BlackFriday from "./components/BlackFriday";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import MobileNav from "./components/MobileNav";
import UserSignIn from "./components/pages/UserSignIn";
import UserCreateAccount from "./components/pages/UserCreateAccount";
import AppFooter from "./components/AppFooter";
import ShopPage from "./components/pages/ShopPage";
import BlogPage from "./components/pages/BlogPage";
import ProductView from "./components/pages/ProductView";
import FEATURES_PRODUCTS from "./data/featuresProducts";
import ContactPage from "./components/pages/ContactPage";
import CartPage from "./components/pages/CartPage";
import WishlistPage from "./components/pages/WishlistPage";
import CheckoutPage from "./components/pages/CheckoutPage";
import { auth } from "./firebase/firebase.util";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userAuth: null,
    };
  }

  subscribeFromAuth = null;

  componentDidMount() {
    // Track user login state
    this.subscribeFromAuth = auth.onAuthStateChanged((userAuth) => {
      this.setState({
        // set current user from null to autherized user who get from firebase auth
        userAuth,
      });
    });
  }

  componentWillUnmount() {
    // Close subscribtion to avoid accedientaly confiict between users
    this.subscribeFromAuth();
  }

  render() {
    const { userAuth } = this.state;

    return (
      <div className="App">
        <BlackFriday />
        <Header userAuth={userAuth} />
        <MobileNav />
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route path="/about" render={() => <AboutPage />} />
          <Route exact path="/shop" render={() => <ShopPage />} />
          <Route path="/contact" render={() => <ContactPage />} />
          <Route path="/cart" render={() => <CartPage />} />
          <Route path="/wishlist" render={() => <WishlistPage />} />
          <Route path="/checkout" render={() => <CheckoutPage />} />
          <Route
            exact
            path="/shop/:productParam"
            render={() => <ProductView products={FEATURES_PRODUCTS} />}
          />
          <Route path="/blog" render={() => <BlogPage />} />
          <Route exact path="/user/signin" render={() => <UserSignIn />} />
          <Route path="/user/create-account" render={() => <UserCreateAccount />} />
        </Switch>
        <AppFooter />
      </div>
    );
  }
}

export default App;
