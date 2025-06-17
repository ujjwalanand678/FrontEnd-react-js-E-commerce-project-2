import React, { useEffect, useState } from "react";
import "./Products.css";
const Products = () => {
  const [userData, setUserData] = useState([]);
  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setUserData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <section className="latest-product-1">
        <p>Latest Products</p>
        <hr />
      </section>

      <section className="container">
        <div className="filters">
          <button className="all">All</button>
          <button className="men-clothing">Men's Clothing</button>
          <button className="women-clothing">Women's Clothing</button>
          <button className="jewelery">Jewelery</button>
          <button className="electronics">Electronics</button>
        </div>
        <div className="products">
          {userData.map((user) => (
            <div className="product-card" key={user.id}>
              <img src={user.image} alt={user.title} />
              <h4 className="title">{user.title}</h4>
              <p className="description">{user.description}</p>
              <hr className="card-divider" />
              <p className="price">${user.price.toFixed(2)}</p>
              <hr className="card-divider" />
              <div className="actions">
                <button className="details">Details</button>
                <button className="add-to-cart">Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
