import React from "react";
import "../assets/styles/components/Footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer__decoration--up" />
    <section className="footer__information">
      <a href="/">Cambios, devoluciones y cancelaciones</a>
      <a href="/">Preguntas frecuentes</a>
      <a href="/">Ventas por teléfono</a>
    </section>
    <div className="footer__decoration--low">
      <p>
        Precio en rojo aplica el descuento más alto, las promociones pueden
        diferir de las publicadas en tienda
      </p>
      <p>2021 Liverpool / Todos los derechos reservados D.R. ®</p>
    </div>
  </footer>
);

export default Footer;
