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
// import AppFooter from "./components/AppFooter";

function App() {
  return (
    <div className="App">
      <BlackFriday />
      <Header />
      <MobileNav />
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route path="/about" render={() => <AboutPage />} />
        <Route path="/sign-in" render={() => <UserSignIn />} />
        <Route path="/create-account" render={() => <UserCreateAccount />} />
      </Switch>
      {/* <AppFooter /> */}
    </div>
  );
}

export default App;
