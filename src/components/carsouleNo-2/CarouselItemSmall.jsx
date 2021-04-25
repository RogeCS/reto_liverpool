import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/components/carouselNo-2/CarouselItemSmall.scss";

const CarouselItem = ({ image, description, url }) => (
  <div className="carousel-itemSmall">
    <Link to="./promos" className="carousel-itemSmall__container">
      <div className="carousel-itemSmall__img-container">
        <img
          className="carousel-itemSmall__img"
          src={image}
          alt={`imagen de ${description}`}
        />
      </div>
      <div className="carousel-itemSmall__info-container">
        <p className="carousel-itemSmall__info">{description}</p>
      </div>
    </Link>
  </div>
);

export default CarouselItem;
