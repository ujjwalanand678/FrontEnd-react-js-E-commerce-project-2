import React from "react";
import { Route, Routes } from "react-router-dom";
import LatestProduct from "../Components/LatestProduct";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Cart from "../Components/Cart";
import Home from "../Components/Home";
import ProductDetail from "../Components/ProductDetail";


const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>
        <Route path="/latest-products" element={<LatestProduct/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/cart" element={<Cart />}/>
       
    </Routes>
  )
};

export default Routing;
