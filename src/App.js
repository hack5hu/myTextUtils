import "./App.css";
import React, { useState } from "react";
import HomePage from "./screen/homePage/homePage";
import NavBar from "./components/navBar/navBar";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomePage />
    </div>
  );
}

export default App;
