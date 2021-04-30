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
      title: "Seguro tal",
      subtitle: "Beneficios",
      price: "$4047",
      url: "",
      image:
        "https://micredito.liverpool.com.mx:9443/cdn/app/assets/seo/img/comparador/LIVERTU.png",

      b1: "Ben 1",
      b2: "Ben 2",
      b3: "Ben 3",
      b4: "Ben 4",
      b5: "Ben 5",
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
