import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer__decoration--up" />
    <section className="footer__information">
      <Link to="/">Cambios, devoluciones y cancelaciones</Link>
      <Link to="/">Preguntas frecuentes</Link>
      <Link to="/">Ventas por teléfono</Link>
    </section>
    <div className="footer__decoration--low">
      <p>Este es un texto de prueba para ver el uso de nuestro footer</p>
      <p>Reto Liverpool</p>
    </div>
  </footer>
);

export default Footer;
