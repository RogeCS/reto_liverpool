import React from "react";
import { connect } from "react-redux";
import { database } from "../firebase.js";
import KommunicateChat from "../chat.js";
import BoloNotFound from "../components/BoloNotFound.jsx";
import Banner from "../components/Banner.jsx";
import Categories from "../components/Categories.jsx";
import Carousel from "../components/carouselNo-1/Carousel.jsx";
import CarouselItem from "../components/carouselNo-1/CarouselItem.jsx";
import CarouselItemInfo from "../components/carouselNo-1/CarouselItemInfo.jsx";
import CarouselSmall from "../components/carouselNo-2/CarouselSmall.jsx";
import CarouselItemSmall from "../components/carouselNo-2/CarouselItemSmall.jsx";
import CarouselItemMed from "../components/carouselNo-3/CarouselItemMed.jsx";
import arrowIcon from "../assets/static/arrowIconWhite.png";
import "../assets/styles/containers/Home.scss";

const Home = ({ cards, seguros }) => {
  const [promo, setPromo] = React.useState([]);
  const [dept, setDept] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showText, setShowText] = React.useState(false);
  const onClick = () => (showText ? setShowText(false) : setShowText(true));

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
      <section className="card">
        <h1 className="card--title">¡Descarga la app!</h1>
        <a href="https://liverpool.onelink.me/5GIo?pid=QR_code&c=qr_homepage_descarga_cupon-5&af_dp=shopapp%3A%2F%2F&af_web_dp=https%3A%2F%2Fwww.liverpool.com.mx%2Ftienda%2Fhome&af_qr=true">
          <button className="card--button">
            <img className="card--button-img" src={arrowIcon} />
          </button>
        </a>
      </section>
      <section className="card">
        <h1 className="card--title">¿Eres tarjeta habiente?</h1>
        <button onClick={onClick} className="card--button">
          <img className="card--button-img" src={arrowIcon} />
        </button>
      </section>
      {!showText && (
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
      )}
      {showText && (
        <Categories title="Seguros" subtitle="Conoce nuestros seguros">
          <Carousel>
            {seguros.map((item) => (
              <CarouselItemMed key={item.id} {...item} />
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
    seguros: state.seguros,
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Home);
