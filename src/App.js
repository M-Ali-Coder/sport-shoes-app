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
import { auth, createUserProfileDoc } from "./firebase/firebase.util";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              id: snapShot.id,
              ...snapShot.data(),
            },
            () => console.log(this.state)
          );
        });
      } else {
        this.setState({
          currentUser: userAuth,
        });
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className="App">
        <BlackFriday />
        <Header />
        <MobileNav />
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route path="/about" render={() => <AboutPage />} />
          <Route
            exact
            path="/user/signin"
            render={() => <UserSignIn currentUser={currentUser} />}
          />
          <Route path="/user/create-account" render={() => <UserCreateAccount />} />
        </Switch>
        <AppFooter />
      </div>
    );
  }
}

export default App;
