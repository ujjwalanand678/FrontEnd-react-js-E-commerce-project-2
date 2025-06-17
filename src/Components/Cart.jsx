import React from "react";
import "./Cart.css"
import Footer from "./Footer";
const Cart = () => {
  return <>
  <main>
    <div className="cart-heading">
      <h1>Cart</h1>
      <hr />
    </div>

    <div className="cart-container">
    
      <div className="cart-left">
        <h3 className="item-list-1">Item List</h3>
        <div className="item-list" id="itemList">
      
        </div>
      </div>

      
      <div className="cart-right">
        <div className="order-summary" id="orderSummary">
         
        </div>
      </div>
    </div>
  </main>
  <Footer />
   
  </>;
};

export default Cart;
