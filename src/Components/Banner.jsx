import React from "react";
import "./Banner.css";
import mainImg from "../assets/main.jpg";
const Banner = () => {
  return (
    <>
      <main className="main">
        <figure>
          <img src={mainImg} alt="New Season Arrivals" />
          {/* <img src="/assets/main.jpg" alt="New Season Arrivals" /> */}

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
