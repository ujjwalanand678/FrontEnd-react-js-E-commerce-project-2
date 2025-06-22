import React from "react";
import "./Login.css"
import Footer from "./Footer";
const Login = () => {
  return <>
  <div className="heading-contact">
        <h1>Login</h1>
        <hr/>
    </div>
   
    <div className="contact-us">
        <form action="" className="contact-us-1">
            

            <label htmlFor="email">Email address</label>
            <input type="email" id="email" name="email" placeholder="name@example.com"/>

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password"/>
            
            <p>New Here? <a href="./register.html" className="text-color">Register</a></p>
            <br/>
            <input type="submit" value="Login" id="send"/>
        </form>
    </div>
    <Footer />
  </>;
};

export default Login;
