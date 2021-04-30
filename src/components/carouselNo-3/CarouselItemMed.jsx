import React from "react";
import "../../assets/styles/components/carouselNo-3/CarouselItemMed.scss";

const CarouselItemMed = ({
  image,
  title,
  price,
  subtitle,
  url,
  b1,
  b2,
  b3,
  b4,
  b5,
}) => (
  <div className="carouselMed-item">
    <article className="carouselMed-item__container">
      <section className="carouselMed-item__info">
        <div className="image-container">
          <img className="carouselMed-item__img" src={image} alt={title} />
        </div>
        <p className="carouselMed-item__info--name">{title}</p>
        <p className="carouselMed-item__info--type">{price}</p>
      </section>
      <hr />
      <section className="carouselMed-item__benefits">
        <h3>{subtitle}</h3>
        <p>{b1}</p>
        <p>{b2}</p>
        <p>{b3}</p>
        <p>{b4}</p>
        <p>{b5}</p>
      </section>
      <a href={url}>
        <button className="carouselMed-item__button">más información</button>
      </a>
    </article>
  </div>
);

export default CarouselItemMed;
