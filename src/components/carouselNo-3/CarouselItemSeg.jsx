import React from "react";
import "../../assets/styles/components/carouselNo-3/CarouselItemSeg.scss";

const CarouselItem = ({ children, title, url }) => (
  <div className="carousel-item">
    <article className="carousel-item__container">
      <section className="carousel-item__info">
        <p className="carousel-item__info--name">{title}</p>
      </section>
      <hr />
      <section className="carousel-item__benefits">
        <h3>{subtitle}</h3>
        {children}
      </section>
      <a href={url}>
        <button className="carousel-item__button">Más información</button>
      </a>
    </article>
  </div>
);

export default CarouselItem;