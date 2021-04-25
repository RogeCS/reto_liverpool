import React from "react";
import Categories from "../components/Categories.jsx";

import Carousel from "../components/carouselNo-1/Carousel.jsx";
import CarouselItem from "../components/carouselNo-1/CarouselItem.jsx";
import CarouselItemInfo from "../components/CarouselNo-1/CarouselItemInfo.jsx";

import CarouselSmall from "../components/carsouleNo-2/CarouselSmall.jsx";
import CarouselItemSmall from "../components/carsouleNo-2/CarouselItemSmall.jsx";

import useInitialState from "../hooks/useInitialState";
import "../assets/styles/containers/Home.scss";

const API = "http://localhost:3000/initalState";

const Home = () => {
  const initialState = useInitialState(API);
  return initialState.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div className="Home">
      <Categories
        title="Tarjetas de Crédito"
        subtitle="Conoce todas nuestras promociones"
      >
        <Carousel>
          {initialState.cards.map((item1) => (
            <CarouselItem key={item1.id} {...item1}>
              {item1.benefits.map((item) => (
                <CarouselItemInfo key={item.id} {...item} />
              ))}
            </CarouselItem>
          ))}
        </Carousel>
      </Categories>

      <Categories title="Promos" subtitle="Conoce todas nuestras promociones">
        <CarouselSmall>
          {initialState.promos.map((item) => (
            <CarouselItemSmall key={item.id} {...item} />
          ))}
        </CarouselSmall>
      </Categories>
    </div>
  );
};
export default Home;
