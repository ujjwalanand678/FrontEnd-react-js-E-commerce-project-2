import React from "react";
import "./Cart.css";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";
const Cart = () => {
  // useSelector is a hook that allows you to extract data from the Redux store state
  // It takes a function as an argument that receives the entire state and returns the part of the state you want to access
  // In this case, it retrieves the cart data from the Redux store
  const cartData = useSelector((state) => state.cart);
  // useSelector is used to access the cart data from the Redux store
  // It retrieves the current state of the cart from the Redux store
  const dispatch = useDispatch();
  // Calculate total price and quantity
  // Using reduce to sum up the total price and quantity of items in the cart
  const totalPrice = cartData.reduce(
    (acc, item) => acc + item.price * item.quantity,0);
  // Using reduce to sum up the total quantity of items in the cart
  // This will give the total number of items, regardless of their individual quantities
  const totalQuantity = cartData.reduce(
    (acc, item) => acc + item.quantity, 0);

  // Dispatching actions to the Redux store
  // These functions will be used to handle the actions of removing an item from the cart,
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  // Decreasing and increasing the quantity of an item in the cart
  // These functions will be used to handle the actions of decreasing and increasing the quantity of an item in the cart
  // They will dispatch the corresponding actions to the Redux store
  const handleDecrement = (id) => {
    dispatch(decreaseQuantity(id));
  };
  const handleIncrement = (id) => {
    dispatch(increaseQuantity(id));
  };
  console.log(cartData);
  // The Cart component renders the cart page
  // It displays the list of items in the cart, their quantities, prices, and a summary of the order
  // If the cart is empty, it shows a message indicating that the cart is empty
  return (
    <>
      <main>
        <div className="cart-heading">
          <h1>Cart</h1>
          <hr />
        </div>

        <div className="cart-container">
          <div className="cart-left">
            <h3 className="item-list-1">Item List</h3>
            <div className="item-list" id="itemList">
              {cartData.length === 0 ? (
                <div className="empty-msg">
                  <p id="cart-icon">🛒</p>
                  <p>Your cart is empty</p>
                  <Link to="/" className="checkout-btn-1">
                    <i className="fa-solid fa-arrow-left"></i>{" "}
                    <b> Continue Shopping</b>
                  </Link>
                </div>
              ) : (
                cartData.map((data) => (
                  <div className="item-card" key={data.id}>
                    <img
                      src={data.image}
                      alt={data.title}
                      className="cart-img"
                    />
                    <div className="cart-details">
                      <h4>{data.title}</h4>
                      <div className="price-quantity">
                        <div className="qty-row">
                          <button
                            className="qty-btn decrease"
                            disabled={data.quantity === 1}
                            onClick={() => handleDecrement(data.id)}
                          >
                            −
                          </button>
                          <span>{data.quantity}</span>

                          <button
                            className="qty-btn increase"
                            onClick={() => handleIncrement(data.id)}
                          >
                            +
                          </button>
                        </div>
                        <p>
                          {data.quantity}×${Math.round(data.price)}=
                          <b>${Math.round(data.quantity * data.price)}</b>
                        </p>
                        <button
                          className="checkout-btn"
                          onClick={() => handleRemoveFromCart(data.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          
            <div className="cart-right">
              <div className="order-summary" id="orderSummary">
                <h3 className="order-summary-1">Order Summary</h3>
                <div className="order-summary-2">
                  <p>
                    Products ({totalQuantity}){" "}
                    <span>${Math.round(totalPrice)}</span>
                  </p>

                  <p>
                    Shipping <span>$30</span>
                  </p>
                  <p>
                    <strong>Total amount</strong>
                    <span>
                      <strong>${Math.round(totalPrice) + 30}</strong>
                    </span>
                  </p>

                  <button className="checkout-btn">Go to checkout</button>
                </div>
              </div>
            </div>
          
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Cart;
