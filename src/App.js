import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Footer from "./components/Footer";
import HomeUser from "./pages/HomeUser"
function App() {
  return (
  <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/components/Register" element={<Register />}></Route>
        <Route exact path="/components/Login" element={<Login />}></Route>
        <Route exact path="/pages/HomeUser" element={<HomeUser />}></Route>
      </Routes>
      <Footer/>

    </BrowserRouter>
    
  );
}

export default App;
