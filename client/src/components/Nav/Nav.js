import React from "react";
import "./style.css";

function Nav() {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper container">
          <a href="/" className="brand-logo">Google Books</a>
          <ul className="right">
            <li><a href="/">Search</a></li>
            <li><a href="/saved">Saved</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
