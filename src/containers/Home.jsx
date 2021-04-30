import React from "react";
import { connect } from "react-redux";
import { arrayOf, element } from "prop-types";
import { database } from "../firebase.js";
import BoloNotFound from "../components/BoloNotFound.jsx";
import Banner from "../components/Banner.jsx";
import Categories from "../components/Categories.jsx";
import Carousel from "../components/carouselNo-1/Carousel.jsx";
import CarouselItem from "../components/carouselNo-1/CarouselItem.jsx";
import CarouselItemInfo from "../components/carouselNo-1/CarouselItemInfo.jsx";
import CarouselSmall from "../components/carsouleNo-2/CarouselSmall.jsx";
import CarouselItemSmall from "../components/carsouleNo-2/CarouselItemSmall.jsx";
import "../assets/styles/containers/Home.scss";
<<<<<<< HEAD
import KommunicateChat from '../chat.js';
=======
>>>>>>> d4ab8505af32cf3ee685817da9d931651060fa3e

const Home = ({ cards, promos, user }) => {
  const [promo, setPromo] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const isCardOwner = () => {
    if (Object.keys(user).length > 0) {
      return user.checked;
    }
    return false;
  };

<<<<<<< HEAD
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
=======
  const ref = database.collection("PromocionesGeneral");
  function getPromo() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
>>>>>>> d4ab8505af32cf3ee685817da9d931651060fa3e
      });
      setPromo(items);
      setLoading(false);
    });
  }

  React.useEffect(() => {
    getPromo();
  }, []);

  if (loading) {
    return <BoloNotFound />;
  }

  return (
    
    <div className="Home">
      <Banner />
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
<<<<<<< HEAD

    <KommunicateChat></KommunicateChat>
=======
      <Categories title="Muebles" subtitle="Conoce todos nuestros muebles">
        <CarouselSmall>
          {promo.map(
            (item) =>
              item.Departamento == "muebles" && (
                <CarouselItemSmall key={item.id} {...item} />
              )
          )}
        </CarouselSmall>
      </Categories>
      <Categories
        title="Electrónica"
        subtitle="conoce nuestras promociones en tecnología"
      >
        <CarouselSmall>
          {promo.map(
            (item) =>
              item.Departamento == "electronica" && (
                <CarouselItemSmall key={item.id} {...item} />
              )
          )}
        </CarouselSmall>
      </Categories>
>>>>>>> d4ab8505af32cf3ee685817da9d931651060fa3e
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
