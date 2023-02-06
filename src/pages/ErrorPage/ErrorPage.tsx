import React from "react";
import error from "./error.png";
import "./errorPage.css";
const ErrorPage = () => {
  return (
    <div className="errorPage">
      <div className="error">
        <div className="somethingWentWrong">
          <img src={error} alt="" className="errorImg" />
          <p className="errorTxt">Something went wrong.</p>
        </div>
        <a href="/" className="backToHomePage">
          Homepage
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
