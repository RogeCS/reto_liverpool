import React from "react";
import "../assets/styles/containers/Login.scss";

const Login = () => (
  <section className="login">
    <section className="login__container">
      <h2>Inicia sesión</h2>
      <form className="login__container--form">
        <input className="input" type="text" placeholder="Correo" />
        <input className="input" type="tel" placeholder="Número celular" />
        <button className="button">Entrar</button>
        <div className="login__container--remember-me"></div>
      </form>
    </section>
  </section>
);

export default Login;
