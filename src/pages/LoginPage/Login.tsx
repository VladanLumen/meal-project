import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {


  return (
      <div className="login-background">
    
      <form className="login-form">
        <h3>Login Here</h3>

        <label htmlFor="username" className="login-label">Username</label>
        <input type="text" placeholder="Email or Phone" className="login-input" id="username" />

        <label htmlFor="password" className="login-label">Password</label>
        <input type="password" placeholder="Password" className="login-input" id="password" />

        <button className="login-button">Log In</button>
        <p className="login-par">
          Don't have account?
        <Link className="login" to='/register'> Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
