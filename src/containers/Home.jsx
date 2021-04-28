import React from "react";
import { connect } from "react-redux";
import { database } from "../firebase";
import Categories from "../components/Categories.jsx";
import Carousel from "../components/carouselNo-1/Carousel.jsx";
import CarouselItem from "../components/carouselNo-1/CarouselItem.jsx";
import CarouselItemInfo from "../components/carouselNo-1/CarouselItemInfo.jsx";
import CarouselSmall from "../components/carsouleNo-2/CarouselSmall.jsx";
import CarouselItemSmall from "../components/carsouleNo-2/CarouselItemSmall.jsx";
import "../assets/styles/containers/Home.scss";

const Home = ({ cards, promos, user }) => {
  const isCardOwner = () => {
    if (Object.keys(user).length > 0) {
      return user.checked;
    }
    return false;

    const info = database.collection("Promociones_General");
    console.log(info);
  };
  return (
    <div className="Home">
      <Categories
        title="Exclusivas para nuestros tarjetahabientes"
        subtitle="Conoce todas nuestras promociones más recientes"
      >
        <CarouselSmall>
          {promos.map((item) => (
            <CarouselItemSmall key={item.id} {...item} />
          ))}
        </CarouselSmall>
      </Categories>
      <button>hola</button>
      {!isCardOwner() && (
        <Categories
          title="Tarjetas de Crédito"
          subtitle="Conoce todas nuestras promociones"
        >
          <Carousel>
            {cards.map((item1) => (
              <CarouselItem key={item1.id} {...item1}>
                {item1.benefits.map((item) => (
                  <CarouselItemInfo key={item.id} {...item} />
                ))}
              </CarouselItem>
            ))}
          </Carousel>
        </Categories>
      )}

      <Categories title="Zapaterias" subtitle="">
        <CarouselSmall>
          {promos.map((item) => (
            <CarouselItemSmall key={item.id} {...item} />
          ))}
        </CarouselSmall>
      </Categories>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
    promos: state.promos,
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Home);
