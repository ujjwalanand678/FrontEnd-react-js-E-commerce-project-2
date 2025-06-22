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
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cartData.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalQuantity = cartData.reduce((acc, item) => acc + item.quantity, 0);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  const handleDecrement = (id) => {
    dispatch(decreaseQuantity(id));
  };
  const handleIncrement = (id) => {
    dispatch(increaseQuantity(id));
  };
  console.log(cartData);
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
                            data-title="Mens Casual Premium Slim Fit T-Shirts "
                            onClick={() => handleDecrement(data.id)}
                          >
                            −
                          </button>
                          <span>{data.quantity}</span>

                          <button
                            className="qty-btn increase"
                            data-title="Mens Casual Premium Slim Fit T-Shirts "
                            onClick={() => handleIncrement(data.id)}
                          >
                            +
                          </button>
                        </div>
                        <p>
                          {data.quantity}×${Math.round(data.price)}=
                          <b>${data.quantity * Math.round(data.price)}</b>
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

          {
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
          }
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Cart;
