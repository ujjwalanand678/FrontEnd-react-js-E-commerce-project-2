import React from "react";
import "./About.css"
import Footer from "./Footer";
const About = () => {
  return (<>
   <div className="about-us">
            <h1>About Us</h1>
            <hr/>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."<br/>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
            </p>
        </div>
    
        <div className="our-product-container">
            <h2>Our Products</h2>
            <div className="our-product">
            <div className="our-product-card">
                <img src="./images/pexels-photo-298863.jpeg" alt=""/>
                <strong>Men's Clothing</strong>
            </div>
            
            <div className="our-product-card">
                <img src="./images/pexels-photo-7679720.jpeg" alt=""/>
                <strong>Women's Clothing</strong>
            </div>
            <div className="our-product-card">
                <img src="./images/pexels-photo-1927259.webp" alt=""/>
                <strong>Jewelery</strong>
            </div>
            <div className="our-product-card">
                <img src="./images/pexels-photo-356056.jpeg" alt=""/>
                <strong>Electronics</strong>
            </div> 
            </div>
           
        </div>
        <br />
        <br />
        <Footer />
  </>)
};

export default About;
