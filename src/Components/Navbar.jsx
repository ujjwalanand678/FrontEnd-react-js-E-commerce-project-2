import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header className="nav-bar">
        <div className="nav-bar-1">
          <h1>Ecommerce</h1>
        </div>

        <nav className="nav-bar-2">
          <div className="nav-bar-3">
            <Link to="/" className="btn-1">
              Home
            </Link>
            <Link to="/product" className="btn-1">
              Products
            </Link>
            <Link to="/about" className="btn-1">
              About
            </Link>
            <Link to="/contact" className="btn-1">
              Contact
            </Link>
          </div>
          <div className="nav-bar-4">
            <Link to="/login" className="btn-2">
              <i className="fa-solid fa-right-to-bracket"></i> Login
            </Link>
            <Link to="/register" className="btn-2">
              <i className="fa fa-user-plus"></i> Register
            </Link>
            <Link to="/cart" className="btn-2">
              <i className="fa-solid fa-cart-shopping"></i> Cart (0)
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
