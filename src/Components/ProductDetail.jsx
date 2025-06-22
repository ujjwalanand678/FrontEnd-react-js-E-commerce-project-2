import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Products.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const [product, setProduct] = useState({});
  useEffect(() => {
    getProductDetail();
  }, []);

  const getProductDetail = async () => {
    const { data } = await axios(
      `https://fakestoreapi.com/products/${id}`
    );
    setProduct(data);
  };

  const handleAddToCart= ()=>{
    dispatch(addToCart({ ...product, quantity: 1 }));
  }
  return (
    <>
      <div>
        <h1 className="product-detail">Product Details</h1>
        {product && Object.keys(product).length > 0 ? ( <div className="cart-card">
            <div className="product-card-img">
              <img src={product.image} alt="" />
            </div>
            <div className="product-description">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <span className="rating">Rating: {product.rating?.rate} </span> 
              <span className="price-1">Price: ${product.price} </span> <br /><br />
              {/* The optional chaining (?.) ensures your app doesn't crash before the data loads. */}
              <button className="add-to-cart" onClick={()=>handleAddToCart(product)}>Add to Cart</button>
            </div>
          </div>) : <h2>Loading......!</h2>
         
        }
      </div>
    </>
  );
};

export default ProductDetail;
