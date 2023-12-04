import "./App.css";
import React from "react";
import HomePage from "./screen/homePage/homePage";
import NavBar from "./components/navBar/navBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./screen/about/about";
import Login from "./screen/login/login";

function App() {
  const hello={
    key:1,
    name:"jelloe sdkjcsbfeol",
    age:40,
    address:506
  }
    const {name, age, address} = hello
    console.log(name, age, address)
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/s" element= {<Login/>} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
