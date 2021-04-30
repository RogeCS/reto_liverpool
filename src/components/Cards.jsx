import React from "react";
import arrowIcon from "../assets/static/arrowIconWhite.png";
import "../assets/styles/components/Cards.scss";

const Cards = ({ title, description, button }) => (
  <section className="card">
    <h1 className="card--title">¿Eres tarjeta habiente?</h1>
    <button className="card--button">
      <img className="card--button-img" src={arrowIcon} />
    </button>
  </section>
);

export default Cards;
