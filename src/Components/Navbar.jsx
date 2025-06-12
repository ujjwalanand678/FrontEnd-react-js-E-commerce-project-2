import React from "react";
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
      <header class="nav-bar">
        <div class="nav-bar-1">
          <h1>Ecommerce</h1>
        </div>
        <nav class="nav-bar-2">
          <div class="nav-bar-3">
            <a href="./index.html" class="btn-1">
              Home
            </a>
            <a href="./product.html" class="btn-1">
              Products
            </a>
            <a href="./about.html" class="btn-1">
              About
            </a>
            <a href="./contact.html" class="btn-1">
              Contact
            </a>
          </div>
          <div class="nav-bar-4">
            <a href="./login.html" class="btn-2">
              <i class="fa-solid fa-right-to-bracket"></i> Login
            </a>
            <a href="./register.html" class="btn-2">
              <i class="fa fa-user-plus"></i> Register
            </a>
            <a href="./cart.html" class="btn-2">
              <i class="fa-solid fa-cart-shopping"></i> Cart (
              <span id="cart-count">0</span>)
            </a>
          </div>
        </nav>
      </header>
    </>
  );
 
};

export default Navbar;
