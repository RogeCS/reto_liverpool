import React from "react";
import "../../assets/styles/components/carouselNo-2/CarouselItemSmall.scss";

const CarouselItem = ({ IMG, Descripcion, URL }) => (
  <div className="carousel-itemSmall">
    <a href={URL} className="carousel-itemSmall__container">
      <div className="carousel-itemSmall__img-container">
        <img
          className="carousel-itemSmall__img"
          src={IMG}
          alt={`imagen de ${Descripcion}`}
        />
      </div>
      <div className="carousel-itemSmall__info-container">
        <p className="carousel-itemSmall__info">{Descripcion}</p>
      </div>
    </a>
  </div>
);

export default CarouselItem;
