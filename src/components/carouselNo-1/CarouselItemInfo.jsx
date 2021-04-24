import React from "react";
import "../../assets/styles/components/carouselNo-1/CarouselItemInfo.scss";

const CarouselItemInfo = ({ ben }) => (
  <div className="carouselItemInfo__container">
    <p className="bullet" />
    <p className="carouselItemInfo__container--benefit">{ben} </p>
  </div>
);

export default CarouselItemInfo;
