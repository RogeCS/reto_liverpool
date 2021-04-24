import React from "react";
import "../../assets/styles/components/carouselNo-1/Carousel.scss";

const Carousel = ({ children }) => (
  <section className="carousel">
    <div className="carousel__container">{children}</div>
  </section>
);

export default Carousel;
