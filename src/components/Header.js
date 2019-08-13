import React from "react";
import "./Header.css";

import logo from "../assets/facebook-logo.png";

export default function Header() {
  return (
    <header>
      <nav className="header-container">
        <img src={logo} />
        <div>
          <span>Profile</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}
