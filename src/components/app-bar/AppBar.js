import React, { useState } from "react";
import "./AppBar.css";
import { Link } from "react-router-dom";
import { Navbar } from "../navbar/Navbar";

export const AppBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <div className="appbar-container">
      <div className="mobile-appbar-container">
            <div className="mobile-hamburger">
                <img
                    className="hamburger-icon"
                    loading="eager"
                    alt=""
                    src="/hamburger-icon.png"
                    onClick={() => setShowNavbar(!showNavbar)}
                />
                <div className="appbar-heading-container">
                    <img className="appbar-icon" alt="" src="/subtract.svg" />
                    <Link to="/" className="logo-link">
                    <h3 className="appbar-text-heading">Base</h3>
                    </Link>
                </div>
            </div>
        </div>
        {showNavbar && <div className="navbar-on-mobile" onClick={() => setShowNavbar(!showNavbar)}><Navbar/></div>}
      <div className="appbar-heading">
        <h3 className="upload-csv">Upload CSV</h3>
      </div>

      <div className="appbar-icons">
        <img
          className="vector-icon"
          loading="eager"
          alt=""
          src="/bell-icon.svg"
        />
        <img
          className="mask-group-icon"
          loading="eager"
          alt=""
          src="/profile-picture.png"
        />
      </div>
    </div>
  );
};
