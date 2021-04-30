import React from "react";
import { connect } from "react-redux";
import { database } from "../firebase.js";
import Categories from "../components/Categories.jsx";
import Carousel from "../components/carouselNo-1/Carousel.jsx";
import CarouselItem from "../components/carouselNo-1/CarouselItem.jsx";
import CarouselItemInfo from "../components/carouselNo-1/CarouselItemInfo.jsx";
import CarouselSmall from "../components/carsouleNo-2/CarouselSmall.jsx";
import CarouselItemSmall from "../components/carsouleNo-2/CarouselItemSmall.jsx";
import "../assets/styles/containers/Home.scss";
import KommunicateChat from '../chat.js';

const Home = ({ cards, promos, user }) => {
  const isCardOwner = () => {
    if (Object.keys(user).length > 0) {
      return user.checked;
    }
    return false;
  };

  var array = ["Zapateria", "Linea_Blanca"];
  var i;
  for (i = 0; i < array.length; i++) {
    database
      .collection("Promociones_General/" + "Departamento" + "/" + array[i])
      .get()
      .then((subCollectionSnapshot) => {
        subCollectionSnapshot.forEach((subDoc) => {
          console.log(subDoc.data());
        });
      });
  }

  return (
    
    <div className="Home">
      <Categories
        title="Promociones"
        subtitle="Conoce todas nuestras promociones"
      >
        <CarouselSmall>
          {promos.map((item) => (
            <CarouselItemSmall key={item.id} {...item} />
          ))}
        </CarouselSmall>
      </Categories>
      {!isCardOwner() && (
        <Categories
          title="Tarjetas de Crédito"
          subtitle="Conoce las tarjetas de crédito"
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

    <KommunicateChat></KommunicateChat>
  
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
