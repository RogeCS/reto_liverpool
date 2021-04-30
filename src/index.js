import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import App from "./routes/App.js";

const initialState = {
  user: {},
  cards: [
    {
      id: 1,
      title: "Tarjeta Liverpool",
      type: "Departamental",
      image:
        "https://micredito.liverpool.com.mx:9443/cdn/app/assets/seo/img/comparador/DILISA.png",
      subtitle: "Beneficios",
      url: "https://micredito.liverpool.com.mx/app/card-request-init",
      benefits: [
        {
          id: 11,
          ben: "Sin costo por apertura",
        },
        {
          id: 12,
          ben: "Sin costo por anualidad",
        },
        {
          id: 13,
          ben: "Tarjetas adicionales sin costo",
        },
      ],
    },
    {
      id: 2,
      title: "Tarjeta de Liverpool",
      type: "VISA",
      image:
        "https://micredito.liverpool.com.mx:9443/cdn/app/assets/seo/img/comparador/LPC.png",
      subtitle: "Beneficios",
      url: "https://micredito.liverpool.com.mx/app/card-request-init",
      benefits: [
        {
          id: 21,
          ben: "Sin costo por apertura",
        },
        {
          id: 22,
          ben:
            "Anualidad gratis el primer año y a partir de lsegundo año $399.00 + IVA",
        },
        {
          id: 23,
          ben: "Porgrama de puntos Rosas",
        },
        {
          id: 24,
          ben: "Aceptación internacional en millones de comercios",
        },
      ],
    },
    {
      id: 3,
      title: "Tarjeta Liverpool",
      type: "Universitaria",
      image:
        "https://micredito.liverpool.com.mx:9443/cdn/app/assets/seo/img/comparador/LIVERTU.png",
      subtitle: "Beneficios",
      url: "https://micredito.liverpool.com.mx/app/livertu",
      benefits: [
        {
          id: 31,
          ben: "Sin costo por apertura",
        },
        {
          id: 32,
          ben: "Sin costo por anualidad",
        },
        {
          id: 33,
          ben: "Dirigido para Universitarios de 18 a 23 años",
        },
      ],
    },
  ],
  seguros: [
    {
      id: 41,
      title: "Seguro de Autos",
      subtitle: "Beneficios",
      price: "",
      url: "https://miseguro.liverpool.com.mx/seguro-de-auto",
      image:
        "https://gossipvehiculo.com/wp-content/uploads/2020/06/c15f8ec2-polestar-2-vs-tesla-model-3-visual-comp-4.jpg",
      b1: "- Sin recargo por pagar a meses sin intereses.",
      b2: "- Sin recargo por financiamiento.",
      b3: "- Tu póliza se renueva automáticamente.",
      b4: "- Contamos con renovación automática.",
      b5: "- Atención en todas las tiendas Liverpool",
    },
    {
      id: 42,
      title: "Seguro de Celular",
      subtitle: "Beneficios",
      price: "",
      url: "https://miseguro.liverpool.com.mx/proteccion-celular",
      image:
        "https://www.muycomputer.com/wp-content/uploads/2018/07/smartphone.jpg",
      b1: "- Asistencia Jurídica en caso de robo",
      b2: "- Descarga Eléctrica",
      b3: "- Daño Total Accidental",
      b4: "- Robo Total",
      b5: "- Daño Total por Agua",
    },
    {
      id: 43,
      title: "PIF",
      subtitle: "Beneficios",
      price: "desde $99",
      url: "https://miseguro.liverpool.com.mx/proteccion-integral-familiar",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Family_Portrait.jpg/1200px-Family_Portrait.jpg",

      b1: "- Seguro de vida",
      b2: "- Servicios de asistencia",
      b3: "- Privilegios PIF que otorgan descuentos y precios preferenciales",
      b4:
        "- Garantía PIF que extiende por un año adicional la garantía de tus artículos",
      b5: "",
    },
  ],
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
