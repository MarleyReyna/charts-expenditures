import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <h1>
        <span>My balance</span>
        $921.48
      </h1>
      <img src="/assets/logo.svg" alt="Charts Logo" />
    </header>
  );
};

export default Header;
