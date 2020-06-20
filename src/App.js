import React from "react";
import "./scss/App.scss";
import BlackFriday from "./components/BlackFriday";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BlackFriday />
      <Header />
    </div>
  );
}

export default App;
