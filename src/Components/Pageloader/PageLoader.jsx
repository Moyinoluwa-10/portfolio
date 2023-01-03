import React from "react";
import "./PageLoader.css";

const PageLoader = () => {
  return (
    <div className="pageloader-container">
      <div className="pageloader">
        <div className="spinner">
          <div className="lds-default">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="loading-text">
          <h1>Loading...</h1>
          <p>This will only take a moment....</p>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
