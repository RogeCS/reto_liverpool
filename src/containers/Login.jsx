import React from "react";
import TextField from "@material-ui/core/TextField";
import "../assets/styles/containers/Login.scss";

const Login = () => {
  return (
    <section className="login">
      <section className="login__container">
        <form className="login__container--form" noValidate autoComplete="off">
          <TextField
            className="input"
            id="outlined-basic"
            label="Correo"
            variant="outlined"
          />
          <TextField
            className="input"
            id="outlined-basic"
            label="Celular"
            variant="outlined"
          />
          <button className="button">Button</button>
        </form>
      </section>
    </section>
  );
};
export default Login;
