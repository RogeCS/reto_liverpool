import React from "react";
import BoloNotFound from "../components/BoloNotFound.jsx";
import "../assets/styles/containers/NotFound.scss";

const NotFound = () => (
  <section>
    <BoloNotFound />
    <h1 className="notFound--title">Error 404</h1>
    <h2 className="notFound--subtitle">Página no encontrada</h2>
  </section>
);

export default NotFound;
