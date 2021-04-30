import React from "react";
import "../assets/styles/components/Categories.scss";

const Categories = ({ children, title, subtitle }) => (
  <div className="categories">
    <h1 className="categories__title">{title}</h1>
    <p className="categories__info">!Conoce nuestras promociones!</p>
    {children}
  </div>
);

export default Categories;
