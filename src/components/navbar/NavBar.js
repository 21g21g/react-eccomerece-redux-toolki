import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isShow, setIsShow] = useState(true);
  const handleCLICK = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="navbar navbar-expand-sm bg-primary">
      <div className="container">
        <Link to="/eccomerece" className="navbar-brand" onClick={handleCLICK}>
          eccomerece
        </Link>

        {isShow && (
          <Link to="/" className="navbar-brand" onClick={handleCLICK}>
            login
          </Link>
        )}
        {!isShow && (
          <div className="navbar-brand">
            <div className="navbar-nav ml-auto">
              <Link to="/dashboard" className="nav-link">
                dashboard
              </Link>
              <Link className="nav-link" to="/custemer">
                customer
              </Link>
              <Link to="/shop" className="nav-link">
                Shop
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
