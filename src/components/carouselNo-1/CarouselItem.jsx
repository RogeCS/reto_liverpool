import React from "react";
import "../../assets/styles/components/carouselNo-1/CarouselItem.scss";

const CarouselItem = ({ children, image, title, type, subtitle }) => (
  <div className="carousel-item">
    <article className="carousel-item__container">
      <section className="carousel-item__info">
        <img className="carousel-item__img" src={image} alt={title} />
        <p className="carousel-item__info--name">{title}</p>
        <p className="carousel-item__info--type">{type}</p>
      </section>
      <hr />
      <section className="carousel-item__benefits">
        <h3>{subtitle}</h3>
        {children}
      </section>
      <button className="carousel-item__button">solicitar</button>
    </article>
  </div>
);

export default CarouselItem;
