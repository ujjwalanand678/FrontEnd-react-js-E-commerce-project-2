import React from "react";
import "./Register.css"
import Footer from "./Footer";
const Register = () => {
  return <> <div className="heading-contact">
        <h1>Register</h1>
        <hr/>
    </div>
   
    <div className="contact-us">
        <form action="" className="contact-us-1">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name"/>

            <label htmlFor="email">Email address</label>
            <input type="email" id="email" name="email" placeholder="name@example.com"/>

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password"/>
            
            <p>Already have an account? <a href="./login.html" className="text-color">Login</a></p>
            <br/>
            <input type="submit" value="Register" id="send"/>
        </form>
    </div>
    <Footer/>
    </>;
};

export default Register;
