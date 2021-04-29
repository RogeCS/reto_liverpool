import React from "react";
import { connect } from "react-redux";
import Categories from "../components/Categories.jsx";
import Carousel from "../components/carouselNo-1/Carousel.jsx";
import CarouselItem from "../components/carouselNo-1/CarouselItem.jsx";
import CarouselItemInfo from "../components/carouselNo-1/CarouselItemInfo.jsx";
import CarouselSmall from "../components/carsouleNo-2/CarouselSmall.jsx";
import CarouselItemSmall from "../components/carsouleNo-2/CarouselItemSmall.jsx";
import "../assets/styles/containers/Home.scss";
import { database } from "../firebase.js"
import { arrayOf, element } from "prop-types";

const Home = ({ cards, promos, user }) => {

  
  const isCardOwner = () => {
    if (Object.keys(user).length > 0) {
      return user.checked;
    }
    return false;
  };

  //database.collection(firstCollections + '/' + docId + '/' + subCollection).get()
  /*database.collection("Promociones_General")
  .doc("Departamento").collection("Zapateria").get()
  .then(querySnapshot => {
      querySnapshot.forEach(doc => {
          console.log(doc.id, " => ", doc.data());
      });
  });
  */
  var array = ["Zapateria", "Linea_Blanca"];
  var i;
  for(i = 0; i < array.length; i++){
    database.collection('Promociones_General/' + 'Departamento' + '/' + array[i]).get().then((subCollectionSnapshot) => {
      subCollectionSnapshot.forEach((subDoc) => {
          console.log(subDoc.data());
      });
    });
  }

  return (
    <div className="Home">
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

      <Categories title="Promos" subtitle="Conoce todas nuestras promociones">
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
