import React from "react";
import "../assets/styles/components/Header.scss";

import liverpoolLogo from "../assets/static/Liverpool-logo.jpg";

const Header = () => (
  <header className="header">
    <a href="https://www.liverpool.com.mx">
      <img className="header__img" src={liverpoolLogo} alt="Logo" />
    </a>
  </header>
);

export default Header;
