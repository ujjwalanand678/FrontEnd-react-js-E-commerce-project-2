import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    getProductDetail();
  }, []);
  const getProductDetail = async () => {
    const { data } = await axios(`https://fakestoreapi.com/products/${id}`);
    setProduct(data);
  };
  return (
    <>
      <div>
        <h1 className="product-detail">Product Details</h1>
        <div>
          <div>
            <h3>{product.title}</h3>
            <img src={product.image} alt="" />
            <p>{product.description}</p>
            <p>Price :${product.price}</p>
            {/* <p>Rating: {product.rating.rate}</p> */}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
