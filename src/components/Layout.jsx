import React from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

const Layout = ({ children }) => (
  <div className="App">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
