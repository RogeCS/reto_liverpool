import React from "react";
import { connect } from "react-redux";
import { arrayOf, element } from "prop-types";
import { database } from "../firebase.js";
import KommunicateChat from "../chat.js";
import BoloNotFound from "../components/BoloNotFound.jsx";
import Banner from "../components/Banner.jsx";
import Categories from "../components/Categories.jsx";
import Carousel from "../components/carouselNo-1/Carousel.jsx";
import CarouselItem from "../components/carouselNo-1/CarouselItem.jsx";
import CarouselItemInfo from "../components/carouselNo-1/CarouselItemInfo.jsx";
import CarouselSmall from "../components/carsouleNo-2/CarouselSmall.jsx";
import CarouselItemSmall from "../components/carsouleNo-2/CarouselItemSmall.jsx";
import "../assets/styles/containers/Home.scss";

const Home = ({ cards }) => {
  const [promo, setPromo] = React.useState([]);
  const [dept, setDept] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const ref = database.collection("PromocionesGeneral");
  let unique = [];
  function getPromo() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      const departments = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setPromo(items);
      items.forEach((item) => {
        departments.push(item.Departamento);
      });
      unique = [...new Set(departments)];
      setDept(unique);
      setLoading(false);
    });
  }

  React.useEffect(() => {
    getPromo();
  }, []);

  console.log(unique);
  if (loading) {
    return <BoloNotFound />;
  }

  return (
    <div className="Home">
      <Banner />
      {dept.map((dep) => (
        <Categories
          key={dep}
          title={dep.replace(/_/g, " ")}
          subtitle={dep.replace(/_/g, " ")}
        >
          <CarouselSmall>
            {promo.map(
              (item) =>
                item.Departamento == dep && (
                  <CarouselItemSmall key={item.id} {...item} />
                )
            )}
          </CarouselSmall>
        </Categories>
      ))}
      <Categories title="Tarjetas de Crédito" subtitle="">
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
