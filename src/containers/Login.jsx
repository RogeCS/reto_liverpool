import React from "react";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";

import "../assets/styles/containers/Login.scss";

const Login = () => {
  const [state, setState] = React.useState({ checked: false });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <section className="login">
      <section className="login__banner">
        <h1 className="login__banner--title"></h1>
      </section>
      <section className="login__container">
        <p className="login__container--division">
          <span>Ingresa tus datos</span>
        </p>
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
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.checked}
                  onChange={handleChange}
                  name="checked"
                />
              }
              label="¿Eres tarjeta habiente?"
            />
          </FormGroup>
          <button className="button">Entrar</button>
        </form>
        <section className="login__container--terms">
          <p>
            <a>Política de privacidad</a> y <a>Términos y condiciones</a>
          </p>
        </section>
      </section>
    </section>
  );
};
export default Login;
