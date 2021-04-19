import React from "react";
import "../assets/styles/components/Header.scss";

import liverpoolLogo from "../assets/static/Liverpool-logo.jpg";

const Header = () => (
  <header className="header">
    <img className="header__img" src={liverpoolLogo} alt="Logo" />
  </header>
);

export default Header;
