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
      id: 1,
      title: "Contrata tu seguro de vida",
      url: "www.google.com"
    },
    {
      id: 2,
      title: "Seguro de auto",
      url: "www.google.com"
    }
  ],
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
