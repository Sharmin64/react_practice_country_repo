import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h3>This is our visiting Homeland</h3>
      <nav>
        <a href="/home">Home</a>
        <a href="/countries">Countries</a>
        <a href="/about">About Our Country</a>
      </nav>
    </div>
  );
};

export default Header;
