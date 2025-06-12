import React from "react";
import "./Products.css"
const Products = () => {
  return (
    <>
<section class="latest-product-1">
    <p>Latest Products</p>
    <hr />
  </section>

  <section class="container">
    <div class="filters">
      <button class="all">All</button>
      <button class="men-clothing">Men's Clothing</button>
      <button class="women-clothing">Women's Clothing</button>
      <button class="jewelery">Jewelery</button>
      <button class="electronics">Electronics</button>
    </div>
    <div class="products">
      
    </div>
  </section>
    </>
    

  )
};

export default Products;
