import React from "react";
import "./Banner.css";
import Footer from "./Footer"
const Banner = () => {
  return (
    <>
      <main className="main">
        <figure>
          <img src="./assets/main.png" alt="New Season Arrivals" />
          <figcaption className="heading-1">New Season Arrivals</figcaption>
          <figcaption className="heading-2">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a bit longer.
          </figcaption>
        </figure>
      </main>
      
    </>
  );
};

export default Banner;
