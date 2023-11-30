import "./App.css";
import React from "react";
import HomePage from "./screen/homePage/homePage";
import NavBar from "./components/navBar/navBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./screen/about/about";
import Error from "./screen/error/error";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
