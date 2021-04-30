import React from "react";
import "../../assets/styles/components/carouselNo-2/CarouselSmall.scss";

const Carousel = ({ children }) => (
  <section className="carouselSmall">
    <div className="carouselSmall__container">{children}</div>
  </section>
);

export default Carousel;
