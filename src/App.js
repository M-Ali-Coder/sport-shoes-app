import React from "react";
import "./scss/App.scss";
import BlackFriday from "./components/BlackFriday";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import MobileNav from "./components/MobileNav";
// import AppFooter from "./components/AppFooter";
import UserAccount from "./components/pages/UserAccount";

function App() {
  return (
    <div className="App">
      <BlackFriday />
      <Header />
      <MobileNav />
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route path="/about" render={() => <AboutPage />} />
        <Route path="/my-account" render={() => <UserAccount />} />
      </Switch>
      {/* <AppFooter /> */}
    </div>
  );
}

export default App;
