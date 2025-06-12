import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <main class="main">
        <figure>
          <img src="./images/main.png.jpg" alt="New Season Arrivals" />
          <figcaption class="heading-1">New Season Arrivals</figcaption>
          <figcaption class="heading-2">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a bit longer.
          </figcaption>
        </figure>
      </main>
    </>
  );
};

export default Banner;
